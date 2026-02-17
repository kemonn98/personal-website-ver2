import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useSection } from '../contexts/SectionContext'

export function FixedCorners() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { currentIndex, sectionNames, totalSections } = useSection()

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentSectionName = sectionNames[currentIndex] ?? 'Home'
  const sectionCounter = `${String(currentIndex + 1).padStart(2, '0')}/${String(totalSections).padStart(2, '0')}`

  return (
    <>
      {/* Top left: muhsalmon.com, © 2026 */}
      <div className="fixed top-4 left-4 z-40 flex flex-col gap-1 text-xs text-muted-foreground">
        <a
          href="#"
          className="text-foreground hover:text-muted-foreground transition-colors w-fit"
        >
          muhsalmon.com
        </a>
        <span>© 2026</span>
      </div>

      {/* Top right: Dark/Light + icon */}
      <div className="fixed top-4 right-4 z-40">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <span>Light</span>
                <Sun className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                <span>Dark</span>
                <Moon className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Bottom left: current section name */}
      <div
        className="fixed bottom-4 left-4 z-40 text-[2.125rem] text-muted-foreground"
        aria-live="polite"
      >
        {currentSectionName}
      </div>

      {/* Bottom right: section counter 01/05 */}
      <div
        className="fixed bottom-4 right-4 z-40 text-right text-[2.125rem] text-muted-foreground tabular-nums"
        aria-live="polite"
      >
        {sectionCounter}
      </div>
    </>
  )
}
