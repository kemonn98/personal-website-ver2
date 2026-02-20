import { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { SectionProvider, useSection } from './contexts/SectionContext'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { FixedCorners } from './components/layout/Navigation'
import { Hero } from './components/sections/Hero'
import { Products } from './components/sections/Products'
import { Work } from './components/sections/Work'

function AppContent() {
  const { setScrollContainer, scrollContainerRef } = useSection()

  useEffect(() => {
    setScrollContainer(document.documentElement)
    scrollContainerRef.current = document.documentElement
    return () => {
      setScrollContainer(null)
      scrollContainerRef.current = null
    }
  }, [setScrollContainer, scrollContainerRef])

  return (
    <>
      {/* Grid outside ReactLenis so position:fixed is never affected by scroll transform */}
      <div className="vertical-grid" aria-hidden />
      <FixedCorners />
      <ReactLenis
        root
        options={{
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
        }}
      >
        <div className="text-foreground relative z-10">
          <main>
            <Hero />
            <About />
            <Work />
            <Products />
            <Contact />
          </main>
        </div>
      </ReactLenis>
    </>
  )
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      themes={['light', 'dark']}
      storageKey="muhsalmon-theme"
    >
      <SectionProvider>
        <AppContent />
      </SectionProvider>
    </ThemeProvider>
  )
}

export default App
