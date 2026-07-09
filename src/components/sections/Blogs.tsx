import { ArrowUpRight } from 'lucide-react'
import { VerticalGrid } from '../layout/VerticalGrid'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  href: string
  tag?: string
}

const posts: BlogPost[] = [
  {
    title: 'Design systems at scale',
    excerpt: 'How we keep consistency across products and teams without slowing down shipping.',
    date: 'Feb 2025',
    href: '#',
    tag: 'Design',
  },
  {
    title: 'From Figma to code',
    excerpt: 'Workflows and tools that bridge design and development without the usual friction.',
    date: 'Jan 2025',
    href: '#',
    tag: 'Dev',
  },
  {
    title: 'AI in the design workflow',
    excerpt: 'Experimenting with AI-augmented design: where it helps and where it gets in the way.',
    date: 'Dec 2024',
    href: '#',
    tag: 'AI',
  },
]

export function Blogs() {
  return (
    <section id="blogs" className="section relative flex flex-col py-24">
      <div className="absolute inset-0 z-0 bg-background" aria-hidden />
      <VerticalGrid />
      <div className="relative z-[2] w-full">
        <div className="site-wrap w-full" data-gsap-reveal data-gsap-stagger>
          <p className="label mb-6" data-gsap-item>[ BLOGS ]</p>
          <h2 className="text-3xl font-medium text-foreground mb-6" data-font="display" data-gsap-item>
            Thoughts on design, code, and building in public.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-12" data-gsap-item>
            Occasional writing on design systems, tooling, and the overlap between design and development.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list" data-gsap-item>
            {posts.map((post) => (
              <li key={post.title}>
                <a
                  href={post.href}
                  className="group block rounded-md border border-border/60 bg-card p-5 shadow-sm transition-[border-color,box-shadow] hover:border-muted-foreground/30 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    {post.tag && (
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                        {post.tag}
                      </span>
                    )}
                    <span className="text-[10px] text-muted-foreground tabular-nums">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground inline-flex items-center gap-1.5 group-hover:text-foreground">
                    {post.title}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
