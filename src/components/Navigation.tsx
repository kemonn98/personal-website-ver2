import { ThemeToggle } from './ThemeToggle'

export function Navigation() {
  return (
    <header className="bg-background">
      <div className="site-wrap flex h-14 items-center justify-between">
        <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
          muhsalmon
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
