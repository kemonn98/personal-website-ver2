import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useRef, useState, useCallback } from 'react'

const MAX_TILT = 12

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
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
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 })
  }, [])

  return (
    <section
      id="home"
      className="scroll-snap-section flex flex-col items-center justify-center pt-20 px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className="relative border border-foreground/80 rounded-sm w-full max-w-[32rem] aspect-[16/9] flex flex-col justify-between px-6 py-6 transition-transform duration-150 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-2">
            Muhammad Salmon
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Design & Code + AI
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Based in Yogyakarta, Indonesia. Creative Director at SlabPixel. Building products and crafting digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-6" style={{ transform: 'translateZ(0)' }}>
          <a
            href="https://github.com/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href="mailto:muhsalmon98@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          const el = document.getElementById('about')
          const container = document.querySelector('.scroll-snap-container')
          if (el && container) (container as HTMLElement).scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        }}
        className="mt-16 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors font-display"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-3 w-3" />
        Scroll
      </a>
    </section>
  )
}
