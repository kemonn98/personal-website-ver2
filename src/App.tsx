import { SectionProvider, useSection } from './contexts/SectionContext'
import { ThemeProvider } from './components/ThemeProvider'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { FixedCorners } from './components/FixedCorners'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Work } from './components/Work'

function AppContent() {
  const { setScrollContainer } = useSection()

  return (
    <div className="h-screen overflow-hidden bg-background text-foreground font-mono relative">
      <div className="vertical-grid" aria-hidden />
      <FixedCorners />
      <main ref={setScrollContainer} className="scroll-snap-container">
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
    >
      <SectionProvider>
        <AppContent />
      </SectionProvider>
    </ThemeProvider>
  )
}

export default App
