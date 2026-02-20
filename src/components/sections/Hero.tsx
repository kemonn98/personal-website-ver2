import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { useSection } from '../../contexts/SectionContext'
import ColorBends from '../effects/ColorBends'

const MAX_TILT = 12

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const { currentIndex } = useSection()
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
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <ColorBends
          colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.2}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          className="absolute inset-0"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
      <div
        ref={cardRef}
        className="relative border border-foreground/10 rounded-xl w-full max-w-[24rem] aspect-[3/4] flex flex-col justify-between px-6 py-6 transition-transform duration-150 ease-out bg-black/10 backdrop-blur-[100px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
      >
        <div>
          <h1 className="text-2xl md:text-4xl font-medium text-foreground tracking-tight mb-2">
            Muhammad<br/>Salmon
          </h1>
          <p className="text-sm text-foreground mb-4">
            Design & Code + AI
          </p>
          <p className="text-xs text-foreground leading-relaxed">
            Based in Yogyakarta, Indonesia. Creative Director at SlabPixel. Building products and crafting digital experiences.
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
