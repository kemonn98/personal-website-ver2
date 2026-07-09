import { useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLoader } from '../../contexts/LoaderContext'

gsap.registerPlugin(ScrollTrigger)

const SECTION_IDS = ['home', 'about', 'work', 'products', 'blogs', 'contact'] as const

export function ScrollAnimations() {
  const lenis = useLenis()
  const { loaderRevealDone } = useLoader()
  const scrollTriggerRef = useRef<ScrollTrigger[]>([])
  const heroAnimatedRef = useRef(false)

  useEffect(() => {
    if (!lenis) return

    // Force start at top on first run; when loader just finished, reset again (ScrollTrigger/loader can nudge scroll)
    lenis.scrollTo(0, { immediate: true })
    if (typeof window !== 'undefined') window.scrollTo(0, 0)

    // Sync ScrollTrigger with Lenis smooth scroll
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop: () => lenis.scroll,
      getBoundingClientRect: () => ({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }),
    })

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    // Section reveal: fade + translateY, smooth easing
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    sections.forEach((section) => {
      const isHero = section.id === 'home'
      const content = section.querySelector('[data-gsap-reveal]') ?? section.querySelector('.site-wrap') ?? section

      if (isHero) {
        // Hero: run entrance animation only after loader has slid away
        if (!loaderRevealDone || heroAnimatedRef.current) return
        heroAnimatedRef.current = true
        const wrapper = section.querySelector('.relative.z-\\[1\\].flex.flex-col')
        const card = wrapper?.querySelector('.relative.border.rounded-xl') ?? section.querySelector('[style*="transformStyle"]')
        const title = section.querySelector('h1')
        const subtitle = section.querySelector('p.text-sm.text-foreground.mb-4')
        const body = section.querySelector('p.text-xs.text-muted-foreground.leading-relaxed')
        const linkGroup = section.querySelector('.flex.items-center.gap-6')
        const scrollCta = section.querySelector('a[href="#about"]')

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        if (title) tl.fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        if (subtitle) tl.fromTo(subtitle, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
        if (body) tl.fromTo(body, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.35')
        if (card) {
          tl.fromTo(card, { y: 48, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, '-=0.7')
        }
        if (linkGroup) {
          const links = linkGroup.querySelectorAll('a')
          tl.fromTo(links, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 }, '-=0.5')
        }
        if (scrollCta) tl.fromTo(scrollCta, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.3')
        return
      }

      // Other sections: reveal on scroll (block or staggered)
      const hasStagger = section.querySelector('[data-gsap-stagger]')
      const staggerItems = hasStagger ? section.querySelectorAll('[data-gsap-item]') : []

      const trigger = ScrollTrigger.create({
        trigger: section,
        scroller: document.documentElement,
        start: 'top 88%',
        onEnter: () => {
          if (hasStagger && staggerItems.length > 0) {
            gsap.fromTo(
              staggerItems,
              { y: 36, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.65,
                stagger: 0.07,
                ease: 'power3.out',
                overwrite: true,
              }
            )
          } else {
            // Animate children so we don't overwrite the container's scale (scrub tween)
            const inner = content.children.length > 0 ? Array.from(content.children) : [content]
            gsap.fromTo(
              inner,
              { y: 56, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                overwrite: true,
              }
            )
          }
        },
        once: true,
      })
      scrollTriggerRef.current.push(trigger)
    })

    // Recalculate after layout; then force scroll back to top (refresh can sometimes affect scroll)
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      requestAnimationFrame(() => {
        lenis.scrollTo(0, { immediate: true })
        window.scrollTo(0, 0)
      })
    })

    return () => {
      lenis.off('scroll', onScroll)
      scrollTriggerRef.current.forEach((st) => st.kill())
      scrollTriggerRef.current = []
    }
  }, [lenis, loaderRevealDone])

  return null
}
