import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useLoader } from '../../contexts/LoaderContext'
import { RotatingDigit } from './RotatingDigit'

const MIN_LOAD_TIME_MS = 1400
const PROGRESS_DURATION = 1.8

function formatThreeDigits(value: number): string {
  return Math.min(100, Math.floor(value)).toString().padStart(3, '0')
}

export function Loader() {
  const { setLoaderRevealDone } = useLoader()
  const [progressPercent, setProgressPercent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef({ value: 0 })
  const startTimeRef = useRef<number>(0)
  const hasCompletedRef = useRef(false)
  const hasTriggeredHundredRef = useRef(false)

  useEffect(() => {
    startTimeRef.current = performance.now()
    let cancelled = false

    const onReveal = () => {
      if (hasCompletedRef.current || cancelled || !containerRef.current) return
      hasCompletedRef.current = true
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power3.inOut',
        onComplete: () => setLoaderRevealDone(true),
      })
    }

    // Animate 0 → 99 with GSAP
    const tween = gsap.to(progressRef.current, {
      value: 99,
      duration: PROGRESS_DURATION,
      ease: 'power2.inOut',
      overwrite: true,
      onUpdate: () => {
        if (cancelled) return
        const v = progressRef.current.value
        setProgressPercent(Math.min(100, v))

        // When we're at 99+, wait for load + min time then go to 100
        if (progressRef.current.value >= 99 && !hasTriggeredHundredRef.current) {
          const elapsed = performance.now() - startTimeRef.current
          const loadDone = document.readyState === 'complete'
          const minTimeMet = elapsed >= MIN_LOAD_TIME_MS
          if (loadDone && minTimeMet) {
            hasTriggeredHundredRef.current = true
            tween.kill()
            gsap.to(progressRef.current, {
              value: 100,
              duration: 0.25,
              ease: 'power2.out',
              onUpdate: () => {
                setProgressPercent(Math.min(100, progressRef.current.value))
              },
              onComplete: onReveal,
            })
          }
        }
      },
    })

    return () => {
      cancelled = true
      tween.kill()
    }
  }, [setLoaderRevealDone])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[5] flex flex-col bg-background"
      aria-hidden
    >
      {/* Progress bar — center */}
      <div className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-8">
        <div className="h-px w-full overflow-hidden rounded-full bg-border">
          <div
            ref={barRef}
            className="h-full bg-foreground transition-none"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 3-digit rotating counter — bottom right */}
      <div
        className="absolute bottom-4 right-4 flex font-display text-[10vw] tabular-nums text-foreground"
        aria-live="polite"
        aria-label={formatThreeDigits(progressPercent)}
      >
        <RotatingDigit position={0} digit={Math.floor(progressPercent / 100)} />
        <RotatingDigit position={1} digit={Math.floor((progressPercent % 100) / 10)} />
        <RotatingDigit position={2} digit={Math.floor(progressPercent % 10)} />
      </div>
    </div>
  )
}
