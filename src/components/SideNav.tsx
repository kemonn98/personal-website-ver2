const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
]

export function SideNav() {
  return (
    <aside className="shrink-0 w-20 pt-16 sticky top-24 self-start hidden md:block">
      <nav className="flex flex-col gap-3" aria-label="Main">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  )
}
