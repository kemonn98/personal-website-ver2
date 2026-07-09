import { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import { SectionProvider, useSection } from './contexts/SectionContext'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import ColorBends from './components/effects/ColorBends'
import { FixedCorners } from './components/layout/Navigation'
import { Loader } from './components/ui/Loader'
import { ScrollAnimations } from './components/effects/ScrollAnimations'
import { Hero } from './components/sections/Hero'
import { LoaderProvider } from './contexts/LoaderContext'
import { Products } from './components/sections/Products'
import { Blogs } from './components/sections/Blogs'
import { Work } from './components/sections/Work'
import { Footer } from './components/sections/Footer'

function AppContent() {
  const { setScrollContainer, scrollContainerRef } = useSection()

  // Prevent browser from restoring scroll on refresh so we always start at the top
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

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
      <Loader />
      {/* 1. ColorBends */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
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
      <FixedCorners />
      <ReactLenis
        root
        options={{
          lerp: 0.02,
          duration: 1.2,
          smoothWheel: true,
        }}
      >
        <ScrollAnimations />
        <div className="text-foreground relative z-[2]">
          <main>
            <Hero />
            <About />
            <Work />
            <Products />
            <Blogs />
            <Contact />
            <Footer />
          </main>
        </div>
      </ReactLenis>
    </>
  )
}

function App() {
  return (
    <LoaderProvider>
      <SectionProvider>
        <AppContent />
      </SectionProvider>
    </LoaderProvider>
  )
}

export default App
