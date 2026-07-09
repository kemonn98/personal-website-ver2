import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { VerticalGrid } from '../layout/VerticalGrid'

const projects = [
  {
    name: 'SlabPixel',
    description:
      'Efficient, high-performing team for visual branding, UI/UX, motion, and web development.',
    url: 'https://slabpixel.com',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    location: 'Yogyakarta, ID',
    period: 'Jan 2021 — Present',
    tags: ['Visual Branding', 'UI/UX', 'Web Dev'],
  },
  {
    name: 'Sibambo Studio',
    description:
      "Indonesia's leading residential architecture consultant; UI, motion, web.",
    url: 'https://sibambostudio.com',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
    location: 'Jakarta, ID',
    period: 'Jan 2023 — Oct 2023',
    tags: ['UI/UX', 'Motion', 'Web Dev'],
  },
  {
    name: 'VisualTap',
    description: 'Design asset library for branding, design, and advertisement.',
    url: 'https://visualtap.design',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    location: 'Yogyakarta, ID',
    period: 'Jan — Oct 2023',
    tags: ['Branding', 'UI/UX', 'Web Dev'],
  },
  {
    name: 'Infinite Disruption',
    description:
      'Coaching and consulting — know-how + capital. Multiple program sites.',
    url: 'https://id.vc',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    location: 'Hamburg, DE',
    period: 'Aug 2021 — Present',
    tags: ['Visual Branding', 'UI/UX', 'Illustration', 'Web Dev'],
  },
]

const recentClients = [
  { name: 'Delin Ventures', url: 'https://delinventures.com' },
  { name: 'Iconhub', url: 'https://iconhub.com' },
  { name: 'Tesorio', url: 'https://tesorio.com' },
  { name: 'RareCarat', url: 'https://rarecarat.com' },
  { name: 'Renumics', url: 'https://renumics.com' },
  { name: 'Bizplay', url: 'https://bizplay.com' },
  { name: 'Transformer Movement', url: 'https://transformermovement.com' },
  { name: 'SuperScale', url: 'https://superscale.com' },
  { name: 'evenhub', url: 'https://evenhub.com' },
  { name: 'TheGoodStore', url: 'https://thegoodstore.com' },
  { name: 'Coup Movement', url: 'https://coupmovement.com' },
  { name: 'Fundraising Coup', url: 'https://fundraisingcoup.com' },
  { name: 'LouiseDirik', url: 'https://louisedirik.com' },
  { name: 'TalentMagnet', url: 'https://talentmagnet.com' },
  { name: 'TheMostDisruptive', url: 'https://themostdisruptive.com' },
  { name: 'SuperStart', url: 'https://superstart.com' },
]

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="work" className="section work-section relative py-24">
      <div className="absolute inset-0 z-0 bg-background" aria-hidden />
      <VerticalGrid />
      <div className="site-wrap relative z-[2] flex flex-col gap-16" data-gsap-reveal>
        <div>
          <p className="label mb-6" data-gsap-item>[ SELECTED WORK ]</p>
          <div className="space-y-2 max-w-[24rem]">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className={`relative group grid transition-[grid-template-rows] duration-300 ease-out ${
                  activeIndex === i ? 'grid-rows-[auto_1fr]' : 'grid-rows-[auto_0fr]'
                }`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-medium text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2 w-fit font-display py-2 -my-2"
                  data-font="display"
                >
                  {project.name}
                  <ExternalLink className="h-4 w-4 opacity-60" />
                </a>
                <div className="overflow-hidden">
                  <div className="pt-2 pb-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.location} · {project.period}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.tags.join(' · ')}
                    </p>
                  </div>
                </div>

                {/* Popup per item: 4:3 wide, 10deg, small scale + 0 opacity + -y → normal (show & hide) */}
                <div
                  className={`
                    pointer-events-none absolute right-[-24rem] top-[-50px] z-[1] w-[min(320px,45vw)]
                    transition-all duration-300 ease-out
                    ${activeIndex === i
                      ? 'opacity-100 scale-100 translate-y-0 rotate-[5deg]'
                      : 'opacity-0 scale-50 -translate-y-4'}
                  `}
                  aria-hidden
                >
                  <div
                    className="aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-muted shadow-xl"
                    style={{ boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
                  >
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <p className="label mb-4">[ RECENT CLIENTS ]</p>
          <p className="text-xs text-muted-foreground mb-4">2018 — 2026</p>
          <p className="text-sm text-foreground leading-relaxed">
            {recentClients.map((client, i) => (
              <span key={client.name}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground underline underline-offset-2 transition-colors"
                >
                  {client.name}
                </a>
                {i < recentClients.length - 1 ? ' / ' : ' '}
              </span>
            ))}
            <span className="text-muted-foreground">and many more.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
