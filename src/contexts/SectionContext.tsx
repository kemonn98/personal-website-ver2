import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'

export const SECTION_NAMES = ['Home', 'About', 'Work', 'Products', 'Contact'] as const
export const TOTAL_SECTIONS = SECTION_NAMES.length

type SectionContextValue = {
  currentIndex: number
  sectionNames: readonly string[]
  totalSections: number
  scrollContainerRef: React.RefObject<HTMLElement | null>
  scrollContainer: HTMLElement | null
  setScrollContainer: (el: HTMLElement | null) => void
}

const SectionContext = createContext<SectionContextValue>({
  currentIndex: 0,
  sectionNames: SECTION_NAMES,
  totalSections: TOTAL_SECTIONS,
  scrollContainerRef: { current: null },
  scrollContainer: null,
  setScrollContainer: () => {},
})

const SECTION_IDS = ['home', 'about', 'work', 'products', 'contact']

export function SectionProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollContainer, setScrollContainerState] = useState<HTMLElement | null>(null)
  const scrollContainerRef = useRef<HTMLElement | null>(null)

  const setScrollContainer = useCallback((el: HTMLElement | null) => {
    setScrollContainerState(el)
  }, [])

  useEffect(() => {
    if (!scrollContainer) return
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          const idx = SECTION_IDS.indexOf(id)
          if (idx !== -1) setCurrentIndex(idx)
        })
      },
      {
        root: scrollContainer,
        rootMargin: '0px',
        threshold: 0.01, // low threshold so tall Work section (12000px) gets detected
      }
    )

    sections.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [scrollContainer])

  return (
    <SectionContext.Provider
      value={{
        currentIndex,
        sectionNames: SECTION_NAMES,
        totalSections: TOTAL_SECTIONS,
        scrollContainerRef,
        scrollContainer,
        setScrollContainer,
      }}
    >
      {children}
    </SectionContext.Provider>
  )
}

export function useSection() {
  return useContext(SectionContext)
}
