import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'SlabPixel',
    description:
      'Efficient, high-performing team for visual branding, UI/UX, motion, and web development.',
    url: 'https://slabpixel.com',
    location: 'Yogyakarta, ID',
    period: 'Jan 2021 — Present',
    tags: ['Visual Branding', 'UI/UX', 'Web Dev'],
  },
  {
    name: 'Sibambo Studio',
    description:
      "Indonesia's leading residential architecture consultant; UI, motion, web.",
    url: 'https://sibambostudio.com',
    location: 'Jakarta, ID',
    period: 'Jan 2023 — Oct 2023',
    tags: ['UI/UX', 'Motion', 'Web Dev'],
  },
  {
    name: 'VisualTap',
    description: 'Design asset library for branding, design, and advertisement.',
    url: 'https://visualtap.design',
    location: 'Yogyakarta, ID',
    period: 'Jan — Oct 2023',
    tags: ['Branding', 'UI/UX', 'Web Dev'],
  },
  {
    name: 'Infinite Disruption',
    description:
      'Coaching and consulting — know-how + capital. Multiple program sites.',
    url: 'https://id.vc',
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
  return (
    <section id="work" className="section work-section py-24">
      <div className="site-wrap flex flex-col gap-16">
        <div>
          <p className="label mb-6">Selected work</p>
          <div className="space-y-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group grid grid-rows-[auto_0fr] transition-[grid-template-rows] duration-300 ease-out hover:grid-rows-[auto_1fr]"
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
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <p className="label mb-4">Recent clients</p>
          <p className="text-xs text-muted-foreground mb-4">2018 — 2026</p>
          <p className="text-sm text-foreground">
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
