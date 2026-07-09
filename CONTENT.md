# Content Guide — Muhsalmon Personal Website v2

Canonical copy, facts, and content rules for **Muhammad Salmon Purwandi** (`muhsalmon.com` v2).

> **Source of truth** — Together with [`AGENTS.md`](./AGENTS.md), [`design.md`](./design.md), and [`README.md`](./README.md), this file governs every word, link, and fact on the site. Agents must read this before writing or editing section copy.

> **Audience:** Potential clients, collaborators, recruiters, and the design/dev community.  
> **Language:** English (site copy). This document is in English for consistency with other repo docs.

---

## 1. How to Use This File

| When you… | Use… |
|-----------|------|
| Write or edit section copy | Section guides below (§4) |
| Add a project, client, or role | Data tables (§5–§8) |
| Choose tone or phrasing | Voice & positioning (§2) |
| Verify a fact or URL | Identity & links (§3) |
| Check what's placeholder in code | Implementation status (§10) |

**Rules:**

1. **Facts beat flair** — dates, titles, and URLs must match this file unless the user explicitly updates them.
2. **One voice** — direct, confident, craft-focused. No hype, no buzzword soup.
3. **Show range** — design + code + product building + leadership; AI is a workflow angle, not the whole identity.
4. **Link out** — live projects, products, and social profiles use canonical URLs from §3.

---

## 2. Voice & Positioning

### Core positioning

**Primary tagline (canonical):**

> Strategically designing things that actually work and achieve goals.

**Secondary line (v2 site):**

> Design & Code + AI

**One-liner bio (short):**

> Visual designer and web developer based in Yogyakarta, Indonesia. I work at the intersection of design and development — with a growing focus on AI-augmented workflows.

**Lead paragraph (About — canonical):**

> I work at the intersection of design and development — Design & Code — with a growing focus on AI-augmented workflows. I care about clarity, craft, and systems that scale.

**Supporting paragraph (About — canonical):**

> Based in Yogyakarta, Indonesia, I lead as Creative Director at SlabPixel and work across visual branding, UI/UX, motion, and web development. I believe design is how it works — not just how it looks — and I focus on solutions that meet real goals. I've helped shape brands and products for clients like Visuel Colonie, Sibambo Studio, ID.VC, and Nada Payments, and I co-founded Upshift.Supply for design inspiration and learning. I never stop learning and always see room to improve; that mindset drives everything I do.

### Philosophy quotes (optional, editorial use)

Use sparingly — one per page max.

| Attribution | Quote |
|-------------|-------|
| Steve Jobs | Design is not just what it looks like and feels like. Design is how it works. |
| Hillman Curtis | The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to make the invisible visible. |

### Tone

| Do | Don't |
|----|-------|
| Short, declarative sentences | Long marketing fluff |
| Specific services and outcomes | Vague "passionate creative" |
| First person ("I") on personal site | Third person unless quoting others |
| Name real clients and tools | Generic "various companies" |
| "Beautiful & useful" (legacy phrase, OK in places) | Overuse emoji in body copy |

### Name usage

| Context | Use |
|---------|-----|
| Hero, copyright | **Muhammad Salmon** |
| Legal / formal | **Muhammad Salmon Purwandi** (full name; rare on site) |
| Social handles | **muhsalmon**, **kemonn** (Dribbble), **muh_salmon** (Behance) |
| Dribbble display | **Muh Salmon** |

---

## 3. Identity & Canonical Links

### Facts

| Field | Value |
|-------|-------|
| Full name | Muhammad Salmon Purwandi |
| Display name | Muhammad Salmon |
| Location | Yogyakarta, Indonesia |
| Email | muhsalmon98@gmail.com |
| Current role | Managing Director at SlabPixel |
| Member since (Dribbble / Behance) | March 2017 |
| Availability | Open to collaboration, freelance, and full-time (per Behance / Dribbble) |

### URLs

| Platform | URL |
|----------|-----|
| Website | https://muhsalmon.com |
| LinkedIn | https://linkedin.com/in/muhsalmon |
| GitHub | https://github.com/muhsalmon |
| Dribbble | https://dribbble.com/kemonn |
| Behance | https://www.behance.net/muh_salmon |
| SlabPixel | https://slabpixel.com |
| Upshift.Supply | https://upshift.supply |

### External profile stats (reference only — update periodically)

| Platform | Metric | Value |
|----------|--------|-------|
| LinkedIn | Followers | ~1,700+ |
| Dribbble | Followers | ~9,284 |
| Dribbble | Likes | ~13,424 |
| Behance | Project views | ~135,827 |
| Behance | Appreciations | ~9,710 |
| Behance | Followers | ~911 |
| SlabPixel | Team size | ~13 (LinkedIn, 2022 founded) |

---

## 4. Section-by-Section Content

Maps to `App.tsx` render order and `SectionContext` IDs.

### 4.1 Hero (`id="home"`)

| Element | Canonical content |
|---------|-------------------|
| H1 | Muhammad Salmon |
| Subtitle | Design & Code + AI |
| Social | GitHub → `github.com/muhsalmon` · LinkedIn → `linkedin.com/in/muhsalmon` · Email → `muhsalmon98@gmail.com` |
| Scroll CTA | Scroll → `#about` |

**Optional additions (not yet in code):** location line `Yogyakarta, Indonesia` · current role `Creative Director at SlabPixel`

---

### 4.2 About (`id="about"`)

| Element | Canonical content |
|---------|-------------------|
| Label | `[ ABOUT ]` |
| Lead (H2 scale) | See §2 lead paragraph |
| Body | See §2 supporting paragraph |
| Subsection label | `[ WORK HISTORY ]` |
| Load more | Show 3 entries initially; full list in §5 |

---

### 4.3 Work (`id="work"`)

| Element | Canonical content |
|---------|-------------------|
| Label | `[ SELECTED WORK ]` |
| Projects | See §6 — featured case studies |
| Subsection label | `[ RECENT CLIENTS ]` |
| Client period | `2018 — 2026` |
| Client list closing | `and many more.` |

Each project entry should include: **name**, **one-line description**, **url**, **location**, **period**, **tags** (scope).

---

### 4.4 Products (`id="products"`)

| Element | Canonical content |
|---------|-------------------|
| Label | `[ PRODUCTS & PLUGINS ]` |
| H2 | I like to build products, learn, code, and actively give impact to the community by building plugins. |
| Body | Tools and plugins that help design teams ship faster and stay consistent—from Figma to code and beyond. |
| Items | See §7 |

---

### 4.5 Blogs (`id="blogs"`)

| Element | Canonical content |
|---------|-------------------|
| Label | `[ BLOGS ]` |
| H2 | Thoughts on design, code, and building in public. |
| Body | Occasional writing on design systems, tooling, and the overlap between design and development. |

**Topic pillars (for future posts):**

1. Design systems at scale
2. Figma-to-code workflows
3. AI in the design workflow

> **Status:** Current posts in code are placeholders (`href: '#'`). Replace with real URLs when published.

---

### 4.6 Contact (`id="contact"`)

| Element | Canonical content |
|---------|-------------------|
| Label | `[ CONTACT ]` |
| H2 | Open to collaboration and new projects. |
| Body | Say hello and tell me a bit about what you have in mind. A few short questions and we're good to go. |
| Submit email | muhsalmon98@gmail.com |

**Form services (canonical):**

- Brand identity
- Web & app design
- Graphic design
- Illustration
- Motion & interaction
- Icon design
- Web development
- Something else

**Timelines:** ASAP · Within 1–2 weeks · Within 2–4 weeks · 1–2 months · Long-term / ongoing · No rush — flexible

**Budgets:** Under $1k · $1k – $5k · $5k – $10k · $10k – $25k · $25k+

---

### 4.7 Footer (`id="footer"`)

| Element | Canonical content |
|---------|-------------------|
| Label | `[ FOOTER ]` |
| Copyright | © {year} Muhammad Salmon. Design & Code + AI. |
| Quick links | About · Work · Products · Contact |
| Social | LinkedIn · GitHub |

**Recommended additions:** Dribbble · Behance (canonical URLs in §3)

---

## 5. Work History (Full)

Use for About section. Order: most recent first.

| Role | Company | Period |
|------|---------|--------|
| Managing Director | SlabPixel | Jun 2022 — Present |
| Visual Designer & Web Developer | INFINITE DISRUPTION | Feb 2020 — Dec 2024 |
| Co-Founder & Product Designer | Upshift.Supply | Sep 2020 — Sep 2023 |
| Creative Director | One Week Wonders | Jan 2022 — Aug 2022 |
| UIX Designer | One Week Wonders | Nov 2017 — Jan 2022 |
| Founder & Creative Director | Sobat Studio | Aug 2019 — Aug 2022 |
| Web Designer | Remotion | Sep — Oct 2019 |
| UI/UX Designer | Qusion | Feb — Jul 2019 |
| Product Designer & Illustrator | Ayulla | Jan — Aug 2018 |
| Freelance Logo Designer | 99designs | Sep 2016 — Jun 2017 |
| Graphic Designer | PT Luwakmas Nusantara Makmur | Jul 2014 — Apr 2016 |

**LinkedIn title note:** Public LinkedIn headline uses **Managing Director at SlabPixel**. Site copy may use Creative Director (design-facing) or Managing Director (leadership-facing) — pick one per context, don't mix on the same screen.

---

## 6. Selected Work (Case Studies)

Featured projects for Work section. Pull descriptions from muhsalmon.com case studies.

| # | Name | URL | Location | Period | Tags | Description |
|---|------|-----|----------|--------|------|-------------|
| 1 | SlabPixel | https://slabpixel.com | Yogyakarta, ID | Jan 2021 — Present | Visual Branding, UI/UX, Motion, Web Dev | Efficient, high-performing team for visual branding, UI/UX, motion, and web development. |
| 2 | Visuel Colonie | https://visuelcolonie.co | Yogyakarta, ID | Jan 2023 — Present | Web Design, Branding | Boost your brand's presence with visually striking designs. Branding and visual identity tailored to business needs. |
| 3 | Sibambo Studio | https://sibambostudio.com | Jakarta, ID | Jan 2023 — Oct 2023 | UI/UX, Motion, Web Dev | Indonesia's leading residential architecture consultant; UI, motion, web. |
| 4 | VisualTap | https://visualtap.design | Yogyakarta, ID | Jan — Oct 2023 | Branding, UI/UX, Web Dev | Design asset library for branding, design, and advertisement. |
| 5 | Infinite Disruption | https://id.vc | Hamburg, DE | Aug 2021 — Present | Visual Branding, UI/UX, Illustration, Web Dev | Coaching and consulting — know-how + capital. Programs: COUP Movement, Fundraising COUP, SuperScale, SuperStart, Meetmind, Transformer Movement. |
| 6 | Nada Payments | https://nadapayments.com | New York, USA | Jun — Jul 2020 | Illustration, Motion, Graphic | Innovative payments solution that eliminates credit card processing fees for businesses. |
| 7 | 2hearts Community | https://2heartscommunity.com | Berlin, DE | Jan — Feb 2022 | Visual Branding, UI/UX, Illustration, Web Dev | Community for people with immigration backgrounds in Europe's tech industry. |
| 8 | Upshift.Supply | https://upshift.supply | Yogyakarta, ID | Aug 2021 — Present | Visual Branding, UI/UX, Product Design, Web Dev | All-in-one design collection for inspiration and learning. |

**v2 site currently shows:** SlabPixel, Sibambo Studio, VisualTap, Infinite Disruption only. Expand per design capacity.

---

## 7. Recent Clients

Period: **2018 — 2026**. Display as inline linked list, separated by ` / `.

| Name | URL |
|------|-----|
| Delin Ventures | https://delinventures.com |
| Iconhub | https://iconhub.com |
| Tesorio | https://tesorio.com |
| RareCarat | https://rarecarat.com |
| Renumics | https://renumics.com |
| Bizplay | https://bizplay.com |
| Transformer Movement | https://transformermovement.com |
| SuperScale | https://superscale.com |
| evenhub | https://evenhub.com |
| TheGoodStore | https://thegoodstore.com |
| Coup Movement | https://coupmovement.com |
| Fundraising Coup | https://fundraisingcoup.com |
| LouiseDirik | https://louisedirik.com |
| TalentMagnet | https://talentmagnet.com |
| TheMostDisruptive | https://themostdisruptive.com |
| SuperStart | https://superstart.com |

Close with: **and many more.**

---

## 8. Products & Plugins

| Name | URL | Tag | Version | Status | Description |
|------|-----|-----|---------|--------|-------------|
| SuperApp | https://app.slabpixel.com/ | Management Tools | v1.0.0 | Released | All-in-one workspace for design systems and component libraries. Sync Figma to code, keep docs in one place. |
| Flowbitz | https://www.flowbitz.dev | Library Component | v2.4.3 | Released | Lightweight flow and automation for design teams. Connect tools without the bloat. |
| AutoLayers | https://www.figma.com/community/plugin/1411822707031516886/autolayers | Figma Plugin | v1.1.3 | Released | Figma plugin to auto-organize layers, naming conventions, and structure. |
| Font Scanner | https://www.figma.com/community/plugin/1603010877465738852/font-scanner | Figma Plugin | v1.1.0 | Released | Scan and audit font usage across projects. |
| Figma to Codes | — | Figma Plugin | v1.0.0 | Development | Figma-to-code export (URL TBD). |
| TGIF | — | Figma Plugin | v1.0.0 | Development | Figma plugin (URL TBD). |

---

## 9. Expertise & Tools

### Services (site-wide)

Visual Identity · User Interface · User Experience · Product Design · Illustration · Motion Interaction · Icon Design · Graphic Design · Web Development

### Tools (canonical list)

Figma · Principle · Webflow · Notion · Eagle · CleanShot · Slack · Photoshop · Illustrator

### Dribbble skills (reference)

branding · web design · mobile · dashboard · illustration · interaction design · landing page · product design · prototype · development

### Competency map

```
Design          → Branding, UI/UX, illustration, motion, packaging
Development     → Webflow, frontend, Figma plugins
Leadership      → SlabPixel MD/CD, team ~13, agency operations
Product         → Upshift.Supply, SuperApp, Flowbitz, plugins
```

---

## 10. Portfolio Highlights (External — Reference)

Use for blog posts, case study expansion, or social proof. Not all need to be on the main site.

### Behance (top by engagement)

| Project | Appreciations | Views |
|---------|---------------|-------|
| LOUD.Fest – Explore New Horizons | 1,209 | 19,605 |
| Zana Reed Diffuser Packaging | 652 | 6,589 |
| WHISPR Podcast Platform Branding | 421 | 8,088 |
| Forti AI — Branding & Website | 457 | 3,580 |
| Mavence \| Visual Identity | 247 | 2,697 |

### Dribbble (featured shots)

Mullet (Digital Banking) · BoozUI (Health & Fitness) · Asgard (Architect) · Belder (Web Builder) · upshift.supply · Iconhub Brand Guideline · Principo · Morvo · Diabetics BuyBack

### Career arc (for long-form / About expansion)

1. **2014–2017** — Graphic design & freelance (99designs)
2. **2017–2022** — UIX Designer → Creative Director at One Week Wonders
3. **2019–2022** — Founder, Sobat Studio (parallel)
4. **2020–2024** — Remote international clients (Infinite Disruption, Germany)
5. **2022–present** — Scale SlabPixel as Managing Director
6. **2024–present** — Design & Code + AI positioning

---

## 11. SEO & Metadata

| Field | Suggested value |
|-------|-----------------|
| Title | Muhammad Salmon — Visual Designer & Web Developer, Yogyakarta |
| Description | Strategically designing things that work. Design & Code + AI. Creative Director at SlabPixel. Branding, UI/UX, and web development. |
| OG / social | Use hero name + tagline; link to muhsalmon.com |

---

## 12. Implementation Status (Codebase)

What's **canonical in this file** vs **placeholder in code** as of last update:

| Area | Status | Notes |
|------|--------|-------|
| Hero copy & links | ✅ Implemented | Matches §4.1 |
| About copy & work history | ✅ Implemented | Matches §4.2, §5 |
| Work projects (4) | ✅ Partial | Missing Visuel Colonie, Nada, 2hearts, Upshift — see §6 |
| Work project images | ⚠️ Placeholder | Unsplash URLs — replace with real screenshots |
| Recent clients | ✅ Implemented | Matches §7 |
| Products | ✅ Implemented | Two items have `href: '#'` (development) |
| Blogs | ⚠️ Placeholder | All `href: '#'` — see §4.5 |
| Contact form | ✅ Implemented | mailto → muhsalmon98@gmail.com |
| Footer social | ⚠️ Partial | Missing Dribbble, Behance |
| Loader / nav labels | ✅ | Section names per AGENTS.md |

---

## 13. Content Anti-Patterns

| Avoid | Why |
|-------|-----|
| Inventing clients or dates | Damages credibility |
| "Purwandi" in hero unless user requests | Public brand is "Muhammad Salmon" |
| Competing taglines on one screen | Pick Design & Code + AI *or* legacy tagline, not both in hero |
| Lorem or generic filler | Site is a real portfolio |
| Outdated role (e.g. OWW as current) | SlabPixel is current since 2022 |
| Unverified stats | Mark as approximate or link to live profile |

---

## 14. Changelog

| Date | Change |
|------|--------|
| 2026-07-10 | Initial CONTENT.md from public research (muhsalmon.com, LinkedIn, Dribbble, Behance) + codebase audit |

---

*Update this file when roles, projects, products, or public stats change. Then sync affected section components.*
