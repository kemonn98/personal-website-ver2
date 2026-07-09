import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { useSection } from '../../contexts/SectionContext'
import { useLoader } from '../../contexts/LoaderContext'

const MAX_TILT = 12

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const { currentIndex } = useSection()
  const { loaderRevealDone } = useLoader()
  const lenis = useLenis()
  const isHome = currentIndex === 0

  useEffect(() => {
    if (!isHome) setTransform({ rotateX: 0, rotateY: 0 })
  }, [isHome])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isHome) return
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = (e.clientX - centerX) / rect.width
      const y = (e.clientY - centerY) / rect.height
      setTransform({
        rotateY: x * MAX_TILT,
        rotateX: -y * MAX_TILT,
      })
    }

    const onMouseLeaveWindow = (e: MouseEvent) => {
      if (!e.relatedTarget || !(e.relatedTarget as Node).ownerDocument) {
        setTransform({ rotateX: 0, rotateY: 0 })
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseout', onMouseLeaveWindow)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseout', onMouseLeaveWindow)
    }
  }, [isHome])

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[50vh] py-20 px-4"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative z-[1] flex flex-col items-center transition-none"
        style={{ opacity: loaderRevealDone ? 1 : 0 }}
      >
      <div className="flex flex-col items-center">
      <div
        ref={cardRef}
        className="relative rounded-xl w-[32rem] aspect-[16/9] flex flex-col items-center justify-between px-6 py-6 transition-transform duration-150 ease-out bg-black/50 backdrop-blur-[100px]"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-medium text-foreground tracking-tight mb-2 text-center">
            Muhammad Salmon
          </h1>
          <p className="text-sm text-foreground mb-4 text-center">
            Design & Code + AI
          </p>
        </div>

        <div className="flex items-center gap-6" style={{ transform: 'translateZ(0)' }}>
          <a
            href="https://github.com/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href="mailto:muhsalmon98@gmail.com"
            className="text-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          const el = document.getElementById('about')
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY
            if (lenis) lenis.scrollTo(top, { lerp: 0.08, duration: 1.2 })
            else window.scrollTo({ top, behavior: 'smooth' })
          }
        }}
        className="mt-16 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors font-display"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-3 w-3" />
        Scroll
      </a>
      </div>
    </section>
  )
}
