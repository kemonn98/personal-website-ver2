import { ExternalLink, ImageIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type ProductStatus = 'released' | 'development'

interface Product {
  name: string
  description: string
  url: string
  tag: string
  version: string
  status: ProductStatus
  image?: string
}

const CARD_WIDTH = 300
const CARD_HEIGHT = 360
const CARD_GAP = 24
const ITEM_WIDTH = CARD_WIDTH + CARD_GAP
const BUFFER = 3 // extra cards to render outside viewport
const MOMENTUM_FRICTION = 0.92
const MOMENTUM_MIN_VELOCITY = 0.1
const MOMENTUM_MAX_VELOCITY = 25
const BEND = 64 // arc sag in px; positive = curve up, negative = curve down

const products: Product[] = [
  {
    name: 'SuperApp',
    description: 'All-in-one workspace for design systems and component libraries. Sync Figma to code, keep docs in one place.',
    url: 'https://app.slabpixel.com/',
    tag: 'Management Tools',
    version: 'v1.0.0',
    status: 'released',
  },
  {
    name: 'Flowbitz',
    description: 'Lightweight flow and automation for design teams. Connect tools without the bloat.',
    url: 'https://www.flowbitz.dev',
    tag: 'Library Component',
    version: 'v2.4.3',
    status: 'released',
  },
  {
    name: 'AutoLayers',
    description: 'Figma plugin to auto-organize layers, naming conventions, and structure. Less hand work, more consistency.',
    url: 'https://www.figma.com/community/plugin/1411822707031516886/autolayers',
    tag: 'Figma Plugin',
    version: 'v1.1.3',
    status: 'released',
  },
  {
    name: 'Font Scanner',
    description: 'Scan and audit font usage across projects. Find duplicates, weights, and licensing at a glance.',
    url: 'https://www.figma.com/community/plugin/1603010877465738852/font-scanner',
    tag: 'Figma Plugin',
    version: 'v1.1.0',
    status: 'released',
  },
  {
    name: 'Figma to Codes',
    description: 'Scan and audit font usage across projects. Find duplicates, weights, and licensing at a glance.',
    url: '#',
    tag: 'Figma Plugin',
    version: 'v.1.0.0',
    status: 'development',
  },
  {
    name: 'TGIF',
    description: 'Scan and audit font usage across projects. Find duplicates, weights, and licensing at a glance.',
    url: '#',
    tag: 'Figma Plugin',
    version: 'v.1.0.0',
    status: 'development',
  },
]

function getVisibleRange(virtualScroll: number, trackWidth: number) {
  const startIndex = Math.floor(virtualScroll / ITEM_WIDTH) - BUFFER
  const endIndex = Math.ceil((virtualScroll + trackWidth) / ITEM_WIDTH) + BUFFER
  return { startIndex, endIndex }
}

function productAt(index: number) {
  const i = ((index % products.length) + products.length) % products.length
  return products[i]
}

function getBendTransform(x: number, trackWidth: number) {
  const H = trackWidth / 2
  if (H <= 0) return { y: 0, angle: 0 }
  const B_abs = Math.abs(BEND)
  const R = (H * H + B_abs * B_abs) / (2 * B_abs)
  const effectiveX = Math.min(Math.abs(x), H)
  const arc = R - Math.sqrt(R * R - effectiveX * effectiveX)
  const y = BEND > 0 ? arc : -arc
  const angle = (BEND > 0 ? 1 : -1) * Math.sign(x) * Math.asin(effectiveX / R)
  return { y, angle }
}

export function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [virtualScroll, setVirtualScroll] = useState(0)
  const [trackWidth, setTrackWidth] = useState(800)
  const isDown = useRef(false)
  const hasDragged = useRef(false)
  const startX = useRef(0)
  const startVirtualScroll = useRef(0)
  const prevVirtualScroll = useRef(0)
  const prevMoveTime = useRef(0)
  const momentumRafRef = useRef<number>(0)
  const virtualScrollRef = useRef(0)
  virtualScrollRef.current = virtualScroll

  const { startIndex, endIndex } = getVisibleRange(virtualScroll, trackWidth)
  const stripWidth = (endIndex - startIndex + 1) * ITEM_WIDTH
  const visibleIndices = Array.from(
    { length: Math.max(0, endIndex - startIndex + 1) },
    (_, i) => startIndex + i
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const ro = new ResizeObserver(() => {
      setTrackWidth(track.clientWidth)
    })
    ro.observe(track)
    setTrackWidth(track.clientWidth)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      cancelAnimationFrame(momentumRafRef.current)
      momentumRafRef.current = 0
      isDown.current = true
      hasDragged.current = false
      startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX
      startVirtualScroll.current = virtualScrollRef.current
      prevVirtualScroll.current = virtualScrollRef.current
      prevMoveTime.current = performance.now()
      section.classList.add('products-section-dragging')
      if ('button' in e && e.button === 0) e.preventDefault()
    }

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown.current) return
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX
      const walk = startX.current - x
      if (Math.abs(walk) > 4) hasDragged.current = true
      e.preventDefault()
      prevVirtualScroll.current = virtualScrollRef.current
      prevMoveTime.current = performance.now()
      const next = startVirtualScroll.current + walk
      setVirtualScroll(next)
      virtualScrollRef.current = next
    }

    const onPointerUp = () => {
      const wasDragging = hasDragged.current
      isDown.current = false
      section.classList.remove('products-section-dragging')

      if (!wasDragging) return
      const now = performance.now()
      const dt = Math.max(now - prevMoveTime.current, 1)
      let velocity = (virtualScrollRef.current - prevVirtualScroll.current) / (dt / 16)
      velocity = Math.max(-MOMENTUM_MAX_VELOCITY, Math.min(MOMENTUM_MAX_VELOCITY, velocity))

      const runMomentum = () => {
        if (Math.abs(velocity) < MOMENTUM_MIN_VELOCITY) return
        setVirtualScroll((v) => v + velocity)
        velocity *= MOMENTUM_FRICTION
        momentumRafRef.current = requestAnimationFrame(runMomentum)
      }
      momentumRafRef.current = requestAnimationFrame(runMomentum)
    }

    const onClick = (e: MouseEvent) => {
      if (hasDragged.current) {
        e.preventDefault()
        e.stopPropagation()
        hasDragged.current = false
      }
    }

    section.addEventListener('mousedown', onPointerDown, { capture: true })
    document.addEventListener('mousemove', onPointerMove)
    document.addEventListener('mouseup', onPointerUp)
    section.addEventListener('touchstart', onPointerDown, { passive: true, capture: true })
    document.addEventListener('touchmove', onPointerMove, { passive: false })
    document.addEventListener('touchend', onPointerUp)
    section.addEventListener('click', onClick, true)

    return () => {
      cancelAnimationFrame(momentumRafRef.current)
      section.removeEventListener('mousedown', onPointerDown, true)
      document.removeEventListener('mousemove', onPointerMove)
      document.removeEventListener('mouseup', onPointerUp)
      section.removeEventListener('touchstart', onPointerDown, true)
      document.removeEventListener('touchmove', onPointerMove)
      document.removeEventListener('touchend', onPointerUp)
      section.removeEventListener('click', onClick, true)
      section.classList.remove('products-section-dragging')
    }
  }, [])

  const stripTranslateX = startIndex * ITEM_WIDTH - virtualScroll

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section scroll-snap-section flex flex-col gap-16 justify-between min-h-screen cursor-grab active:cursor-grabbing"
    >
      <div className="site-wrap w-full shrink-0 pt-16">
        <p className="label mb-6">Products & plugins</p>
        <h2 className="text-3xl font-medium text-foreground mb-6" data-font="display">
          I like to build products, learn, code, and actively give impact to the community by building plugins.
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
          Tools and plugins that help design teams ship faster and stay consistent—from Figma to code and beyond.
        </p>
      </div>
      <div
        ref={trackRef}
        className="products-track full-bleed pb-56 w-full shrink-0 overflow-x-hidden overflow-y-visible py-16 relative"
      >
        <div
          className="absolute inset-y-0 left-0 w-[20vw] max-w-[240px] bg-gradient-to-r from-background to-transparent pointer-events-none z-10"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 right-0 w-[20vw] max-w-[240px] bg-gradient-to-l from-background to-transparent pointer-events-none z-10"
          aria-hidden
        />
        <div
          className="products-track-inner relative will-change-transform"
          style={{
            width: stripWidth,
            height: CARD_HEIGHT,
            transform: `translateX(${stripTranslateX}px)`,
          }}
        >
          {visibleIndices.map((index) => {
            const product = productAt(index)
            const cardCenterInTrack = stripTranslateX + (index - startIndex) * ITEM_WIDTH + CARD_WIDTH / 2
            const xFromCenter = cardCenterInTrack - trackWidth / 2
            const { y: bendY, angle: bendAngle } = getBendTransform(xFromCenter, trackWidth)
            return (
              <a
                key={index}
                href={product.url}
                className="products-card group absolute top-0 flex flex-col justify-between rounded-xl border border-border bg-card text-card-foreground p-5 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-muted-foreground/30 hover:shadow-md overflow-hidden will-change-transform"
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  left: (index - startIndex) * ITEM_WIDTH,
                  transform: `translateY(${bendY}px) rotate(${bendAngle}rad)`,
                }}
              >
                <div className="flex flex-row gap-2 items-center shrink-0">
                  <span className="text-[10px] uppercase tracking-wider text-foreground font-medium">
                    {product.version}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      product.status === 'released'
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                        : 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {product.status === 'released' ? 'Released' : 'Under Development'}
                  </span>
                </div>
                <div className="flex flex-col justify-between gap-1 shrink-0">
                  <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-muted flex items-center justify-center text-muted-foreground">
                    {product.image ? (
                      <img src={product.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-7 h-7 opacity-50" aria-hidden />
                    )}
                  </div>
                  <h3 className="text-xl font-medium text-foreground transition-colors inline-flex items-center gap-1.5 shrink-0 mt-3">
                    {product.name}
                    <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 shrink-0">{product.tag}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4 overflow-hidden max-h-0 opacity-0 translate-y-2 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0 transition-[max-height,opacity,transform,margin] duration-300 ease-out mt-0 group-hover:mt-2">
                    {product.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
