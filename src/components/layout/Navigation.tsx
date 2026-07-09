import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useSection } from '../../contexts/SectionContext'
import { useLoader } from '../../contexts/LoaderContext'
import { AnimatedText } from '../ui/AnimatedText'

export function FixedCorners() {
  const { currentIndex, sectionNames, totalSections } = useSection()
  const { loaderRevealDone } = useLoader()
  const [navRevealed, setNavRevealed] = useState(false)
  const bottomLeftRef = useRef<HTMLDivElement>(null)
  const bottomRightRef = useRef<HTMLDivElement>(null)
  const navAnimatedRef = useRef(false)

  useEffect(() => {
    if (!loaderRevealDone || navAnimatedRef.current) return
    const corners = [bottomLeftRef.current, bottomRightRef.current].filter(Boolean) as HTMLElement[]
    if (corners.length === 0) return
    navAnimatedRef.current = true
    gsap.fromTo(
      corners,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
        onComplete: () => setNavRevealed(true),
      }
    )
  }, [loaderRevealDone])

  const currentSectionName = sectionNames[currentIndex] ?? 'Home'
  const sectionCounter = `${String(currentIndex + 1).padStart(2, '0')}/${String(totalSections).padStart(2, '0')}`

  return (
    <>
      {/* Bottom left: current section name — subheading (key by index so it always updates on section change) */}
      <div
        ref={bottomLeftRef}
        key={`section-name-${currentIndex}`}
        className="fixed bottom-4 left-4 z-[4] text-[4vw] text-foreground font-display"
        data-font="display"
        style={{ opacity: navRevealed ? undefined : 0 }}
      >
        <AnimatedText key={currentSectionName} text={currentSectionName} align="left" />
      </div>

      {/* Bottom right: section counter 01/05 — numerical (key by index so it always updates on section change) */}
      <div
        ref={bottomRightRef}
        key={`section-counter-${currentIndex}`}
        className="fixed bottom-4 right-4 z-[4] text-[4vw] text-foreground tabular-nums font-display"
        data-font="display"
        style={{ opacity: navRevealed ? undefined : 0 }}
      >
        <AnimatedText key={sectionCounter} text={sectionCounter} align="right" />
      </div>
    </>
  )
}
