import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

type RotatingDigitProps = {
  digit: number
  /** 0 = hundreds (only 0–1), 1 = tens, 2 = units (0–9) */
  position: 0 | 1 | 2
  className?: string
}

const DIGITS_BY_POSITION: number[][] = [
  [0, 1],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
]

export function RotatingDigit({ digit, position, className = '' }: RotatingDigitProps) {
  const stripRef = useRef<HTMLDivElement>(null)
  const previousRef = useRef(digit)
  const digits = DIGITS_BY_POSITION[position]
  const clampedDigit = Math.min(digit, digits.length - 1)
  const percentPerDigit = 100 / digits.length

  // Set initial position before paint to avoid flash
  useLayoutEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    gsap.set(strip, { yPercent: -clampedDigit * percentPerDigit })
    previousRef.current = clampedDigit
  }, []) // eslint-disable-line react-hooks/exhaustive-deps -- init only

  // Animate when digit changes
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const from = previousRef.current
    const to = clampedDigit

    if (from === to) return

    const fromY = -from * percentPerDigit
    const toY = -to * percentPerDigit

    previousRef.current = to

    gsap.fromTo(
      strip,
      { yPercent: fromY },
      {
        yPercent: toY,
        duration: 0.32,
        ease: 'power2.out',
      }
    )
  }, [clampedDigit, percentPerDigit])

  return (
    <div
      className={`overflow-hidden shrink-0 ${className}`}
      style={{ height: '1em', lineHeight: 1 }}
      aria-hidden
    >
      <div
        ref={stripRef}
        className="flex flex-col justify-start will-change-transform"
      >
        {digits.map((d) => (
          <span
            key={d}
            className="flex h-[1em] min-h-[1em] items-center justify-center leading-none"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  )
}
