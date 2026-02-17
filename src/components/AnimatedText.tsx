import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

type AnimatedTextProps = {
  text: string
  className?: string
  align?: 'left' | 'right'
}

export function AnimatedText({ text, className = '', align = 'left' }: AnimatedTextProps) {
  const elRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = elRef.current
    if (!el) return

    let split: SplitText | null = null
    let cancelled = false

    const runSplit = () => {
      if (cancelled || !el.isConnected) return
      split = new SplitText(el, {
        type: 'chars',
        charsClass: 'char-item',
      })
      gsap.from(split.chars, {
        y: 24,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.025,
        overwrite: true,
      })
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(runSplit)
    } else {
      runSplit()
    }

    return () => {
      cancelled = true
      try {
        split?.revert()
      } catch {
        /* ignore */
      }
    }
  }, [text])

  return (
    <div
      ref={elRef}
      className={`${align === 'right' ? 'text-right' : ''} ${className}`}
      style={{ fontKerning: 'none' }}
      aria-live="polite"
    >
      {text}
    </div>
  )
}
