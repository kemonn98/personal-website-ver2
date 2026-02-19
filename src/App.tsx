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

  return (
    <div className="h-screen overflow-hidden bg-background text-foreground relative">
      <div className="vertical-grid" aria-hidden />
      <FixedCorners />
      <main
        ref={(el) => {
          scrollContainerRef.current = el
          setScrollContainer(el)
        }}
        className="scroll-snap-container"
      >
        <Hero />
        <About />
        <Work />
        <Products />
        <Contact />
      </main>
    </div>
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
