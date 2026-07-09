import { useState } from 'react'
import { VerticalGrid } from '../layout/VerticalGrid'

const INITIAL_VISIBLE = 3

const workHistory = [
  { role: 'Creative Director', company: 'SlabPixel', period: 'Jun 2022 — Present' },
  { role: 'Visual Designer & Web Developer', company: 'INFINITE DISRUPTION', period: 'Feb 2020 — Dec 2024' },
  { role: 'Co-Founder & Product Designer', company: 'Upshift.Supply', period: 'Sep 2020 — Sep 2023' },
  { role: 'Creative Director', company: 'One Week Wonders', period: 'Jan 2022 — Aug 2022' },
  { role: 'UIX Designer', company: 'One Week Wonders', period: 'Nov 2017 — Jan 2022' },
  { role: 'Founder & Creative Director', company: 'Sobat Studio', period: 'Aug 2019 — Aug 2022' },
  { role: 'Web Designer', company: 'Remotion', period: 'Sep — Oct 2019' },
  { role: 'UI/UX Designer', company: 'Qusion', period: 'Feb — Jul 2019' },
  { role: 'Product Designer & Illustrator', company: 'Ayulla', period: 'Jan — Aug 2018' },
  { role: 'Freelance Logo Designer', company: '99designs', period: 'Sep 2016 — Jun 2017' },
  { role: 'Graphic Designer', company: 'PT Luwakmas Nusantara Makmur', period: 'Jul 2014 — Apr 2016' },
]

export function About() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? workHistory : workHistory.slice(0, INITIAL_VISIBLE)
  const hasMore = workHistory.length > INITIAL_VISIBLE

  return (
    <section id="about" className="section relative flex items-center py-24">
      <div className="absolute inset-0 z-0 bg-background" aria-hidden />
      <VerticalGrid />
      <div className="site-wrap relative z-[2] w-full" data-gsap-reveal data-gsap-stagger>
        <p className="label mb-4" data-gsap-item>[ ABOUT ]</p>
        <p className="text-3xl font-medium text-foreground leading-md mb-8" data-font="display" data-gsap-item>
          I work at the intersection of design and development — Design & Code — with a growing focus on AI-augmented workflows. I care about clarity, craft, and systems that scale.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-12" data-gsap-item>
          Based in Yogyakarta, Indonesia, I lead as Creative Director at SlabPixel and work across visual branding, UI/UX, motion, and web development. I believe design is how it works — not just how it looks — and I focus on solutions that meet real goals. I’ve helped shape brands and products for clients like Visuel Colonie, Sibambo Studio, ID.VC, and Nada Payments, and I co-founded Upshift.Supply for design inspiration and learning. I never stop learning and always see room to improve; that mindset drives everything I do.
        </p>

        <div data-gsap-item>
          <p className="label mb-6">[ WORK HISTORY ]</p>
          <ul className="flex flex-col gap-2" role="list">
            {visible.map(({ role, company, period }) => (
              <li
                key={`${company}-${period}`}
                className="group flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md border border-border/60 bg-muted/30 px-5 py-4 transition-colors hover:border-border hover:bg-muted/50"
              >
                <span className="font-medium text-foreground text-md" data-font="display">{role}</span>
                <span className="text-muted-foreground/60" aria-hidden>·</span>
                <span className="text-sm text-muted-foreground">{company}</span>
                <span className="text-muted-foreground/60" aria-hidden>·</span>
                <span className="text-sm text-muted-foreground/80 tabular-nums">{period}</span>
              </li>
            ))}
          </ul>
          {hasMore && (
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
              >
                {showAll ? 'Show less' : 'Load more'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
