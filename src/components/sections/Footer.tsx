import { VerticalGrid } from '../layout/VerticalGrid'

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
] as const

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/muhsalmon' },
  { label: 'GitHub', href: 'https://github.com/muhsalmon' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="section relative flex items-center py-16">
      <div className="absolute inset-0 z-0 bg-background" aria-hidden />
      <VerticalGrid />
      <div className="site-wrap relative z-[2] w-full flex flex-col items-center justify-center text-center gap-8" data-gsap-reveal data-gsap-stagger>
        <div data-gsap-item>
          <p className="label mb-2">[ FOOTER ]</p>
          <p className="text-sm text-muted-foreground">
            © {year} Muhammad Salmon. Design & Code + AI.
          </p>
        </div>
        <nav className="flex flex-col items-center gap-4" aria-label="Footer navigation" data-gsap-item>
          <div className="flex flex-row items-center gap-8">
            {QUICK_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-row items-center gap-8">
            {SOCIAL.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  )
}
