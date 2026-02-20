import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section flex items-center py-24">
      <div className="site-wrap">
        <p className="label mb-4">Contact</p>
        <p className="text-sm text-foreground mb-6">
          Open to collaboration and new projects. Say hello.
        </p>
        <a
          href="mailto:muhsalmon98@gmail.com"
          className="link-underline inline-flex items-center gap-2 text-sm"
        >
          <Mail className="h-3.5 w-3.5" />
          muhsalmon98@gmail.com
        </a>
        <p className="text-xs text-muted-foreground mt-4">
          <a
            href="https://linkedin.com/in/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          {' · '}
          <a
            href="https://github.com/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}
