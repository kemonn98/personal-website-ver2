export function Footer() {
  return (
    <footer>
      <div className="site-wrap flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Muhammad Salmon</span>
        <span>Design & Code + AI</span>
      </div>
    </footer>
  )
}
