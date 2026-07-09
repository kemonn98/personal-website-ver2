# Agent Guide — Muhsalmon Personal Website v2

Instructions for AI agents working in this repository.

## Source of Truth (required)

**Every prompt, task, and code change must be based on these three documents:**

| File | Role |
|------|------|
| [`AGENTS.md`](./AGENTS.md) | Architecture, conventions, git workflow, branches, do/don't |
| [`design.md`](./design.md) | Design system: editorial × Swiss × dark, typography, spacing, components |
| [`README.md`](./README.md) | Project overview, tech stack summary, quick start |

### Agreement

1. **Read before acting** — Agents must read all three files (or recall them from the current session) before planning or editing.
2. **Design-first UI** — Visual work follows `design.md` (no rounded corners, no card style, dark-only, minimalist).
3. **Code follows architecture** — Structure, sections, animations, and contexts follow this file (`AGENTS.md`).
4. **Scope from README** — Features and stack stay aligned with `README.md`; update README when scope changes.
5. **Conflicts** — UI → `design.md`; code structure → `AGENTS.md`; project description → `README.md`.

Cursor rule: `.cursor/rules/project-source-of-truth.mdc` enforces this on every session.

## Project Overview

Single-page portfolio for Muhammad Salmon (muhsalmon). Dark-themed, animation-heavy personal site with smooth scrolling, GSAP reveals, and a WebGL-style background effect.

**Active branch:** `theme-2` — dark-only theme, no light/dark toggle.

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`), CSS variables in `src/styles/index.css` |
| Animation | GSAP + ScrollTrigger, Lenis smooth scroll |
| 3D / effects | Three.js (`ColorBends`), Framer Motion (selective) |
| UI primitives | Radix UI, Lucide icons |
| Font | Inter Display via Google Fonts |

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # tsc && vite build
npm run preview
npm run lint
```

## Directory Structure

```
src/
├── App.tsx                    # Root layout, providers, section order
├── main.tsx                   # React entry
├── styles/index.css           # Theme tokens, base styles, component utilities
├── contexts/
│   ├── SectionContext.tsx     # Active section tracking via IntersectionObserver
│   └── LoaderContext.tsx      # Loader reveal gate for animations
├── components/
│   ├── sections/              # Page sections (Hero, About, Work, …)
│   ├── layout/                # FixedCorners nav, VerticalGrid
│   ├── effects/               # ColorBends, ScrollAnimations
│   └── ui/                    # Loader, AnimatedText, RotatingDigit
```

## Architecture

### Provider tree

```
LoaderProvider
  └── SectionProvider
        └── AppContent
              ├── Loader (full-screen intro)
              ├── ColorBends (fixed background, z-0)
              ├── FixedCorners (section name + counter, z-4)
              └── ReactLenis (smooth scroll root)
                    ├── ScrollAnimations (GSAP ScrollTrigger setup)
                    └── main (sections, z-2)
```

### Section system

Sections are registered in **three places** — keep them in sync when adding/removing sections:

1. `App.tsx` — render order inside `<main>`
2. `src/contexts/SectionContext.tsx` — `SECTION_NAMES`, `SECTION_IDS`
3. `src/components/effects/ScrollAnimations.tsx` — `SECTION_IDS`

Current sections:

| ID | Name | Component |
|----|------|-----------|
| `home` | Home | `Hero` |
| `about` | About | `About` |
| `work` | Work | `Work` |
| `products` | Products | `Products` |
| `blogs` | Blogs | `Blogs` |
| `contact` | Contact | `Contact` |

Each section `<section>` must have `id` matching `SECTION_IDS`. Footer is outside the section observer.

### Animation pipeline

1. **Loader** runs on mount; sets `loaderRevealDone` when complete.
2. **FixedCorners** and **Hero** animations wait for `loaderRevealDone`.
3. **ScrollAnimations** syncs GSAP ScrollTrigger with Lenis via `scrollerProxy`.
4. Section reveals target `[data-gsap-reveal]`, `.site-wrap`, or the section itself.

Do not start scroll-based animations before the loader finishes unless explicitly bypassing the loader flow.

### Scroll container

`SectionContext` tracks `document.documentElement` as the scroll root. Lenis uses `root` mode. ScrollTrigger proxies the same element.

## Styling Conventions

- **Dark theme only** on `theme-2`. Use CSS variables (`--background`, `--foreground`, etc.) — do not hardcode hex colors unless required for WebGL/shaders.
- **Layout wrapper:** `.site-wrap` — max-width `46rem`, centered, horizontal padding.
- **Display type:** `data-font="display"` or `.font-display` for headings/nav.
- **Labels:** `.label` — uppercase, small, muted.
- **Links:** `.link-underline` for text links.
- **Full bleed:** `.full-bleed` breaks out of `.site-wrap`.
- **Vertical grid:** `.vertical-grid-in-section` inside sections for decorative borders.
- Prefer Tailwind utility classes; add reusable patterns to `@layer components` in `index.css`.

## Component Conventions

- Named exports for components: `export function Hero()`.
- Relative imports from sections: `../../contexts/SectionContext`.
- Use `useSection()` for active section index; `useLoader()` for loader state.
- Use `useLenis()` when programmatic scroll is needed (e.g. anchor links).
- Icons from `lucide-react`.
- Keep sections self-contained; shared UI goes in `components/ui/`.

## What to Avoid

- Do not reintroduce theme toggle / `next-themes` unless explicitly requested (`theme-2` is dark-only).
- Do not commit `node_modules/`, `.DS_Store`, or Vite cache files.
- Do not edit `dist/` manually — run `npm run build` instead.
- Do not add new utility files (e.g. `lib/utils.ts`) without need; the project previously removed unused helpers.
- Minimize scope: only change files required for the task.
- Do not break Lenis ↔ ScrollTrigger sync in `ScrollAnimations.tsx`.

## Branches

| Branch | Notes |
|--------|-------|
| `main` | Earlier version with light/dark theme toggle |
| `theme-1` | Theme experiment |
| `theme-2` | Current — dark-only, loader, Lenis, new sections (Products, Blogs, Footer) |

When unsure which branch to target, confirm with the user. Default work happens on `theme-2`.

## Accessibility

- Use semantic HTML (`<main>`, `<section>`, headings in order).
- Decorative backgrounds: `aria-hidden` and `pointer-events-none`.
- Maintain color contrast with existing token system.
- Ensure interactive elements are keyboard-focusable.

## Common Tasks

### Add a new section

1. Create `src/components/sections/NewSection.tsx` with `id="new-id"`.
2. Add to `SECTION_NAMES`, `SECTION_IDS` in `SectionContext.tsx`.
3. Add to `SECTION_IDS` in `ScrollAnimations.tsx`.
4. Import and render in `App.tsx` `<main>` at the desired position.
5. Update `TOTAL_SECTIONS` implicitly via `SECTION_NAMES.length`.

### Adjust animations

- Hero entrance: `ScrollAnimations.tsx` (loader-gated).
- Section scroll reveals: `ScrollAnimations.tsx` ScrollTrigger blocks.
- Nav corners: `Navigation.tsx` (`FixedCorners`).
- Text char animation: `AnimatedText.tsx`.

### Change colors / theme

- Global tokens: `src/styles/index.css` `:root` block.
- Background shader: `ColorBends` props in `App.tsx` (`colors`, `speed`, etc.).

## Verification

After changes:

1. `npm run lint` — no errors.
2. `npm run build` — TypeScript + Vite build passes.
3. Manual check: loader → scroll → section counter updates → animations play smoothly.

## Git Push Workflow

When the user says **"git push"**, always run **add → commit → push** on the **active branch** (e.g. `theme-2`). Never run bare `git push` without staging and committing first.

### Agent steps

1. Run in parallel: `git status`, `git diff`, `git log -3 --oneline`, `git branch --show-current`
2. Stage relevant changes (`git add <files>`). **Never stage:**
   - `node_modules/`, `.DS_Store`, `node_modules/.vite/`
   - `dist/` (unless user explicitly wants build output committed)
   - `.env`, credentials, or secrets
3. If there are changes to commit:
   - **Read the full diff** (`git diff` and `git diff --cached`) — understand every change
   - **Commit message must accurately describe what changed** — not file names alone, not vague text
   - Match recent commit style from `git log` (e.g. `docs:`, `feat:`, `fix:`)
   - Cover all staged changes; if unrelated, ask user about splitting commits
   - Commit via HEREDOC (see user commit rules)
   - **Tell the user** which commit message was used
4. Push to the current branch:
   - `git push` if upstream is set
   - `git push -u origin HEAD` if no upstream yet
5. Run `git status` to confirm success

### Commit message (required)

The message **must match the actual changes** in the diff.

| ❌ Avoid | ✅ Prefer |
|----------|-----------|
| `update files` | `add design.md with editorial Swiss guidelines` |
| `update: App.tsx, design.md` | `add git push workflow to AGENTS.md and Cursor rules` |
| `fix stuff` | `fix section counter not updating on scroll` |

**Format:** `<type>: <what changed>` + optional one-line why.

**Types:** `feat`, `fix`, `docs`, `refactor`, `style`, `chore` — follow existing repo style.

### Skip commit when

- Working tree is already clean → push only
- User says "push only" or "push without commit" → skip steps 2–3

### Custom commit message

`git push: your message here` → use it only if it accurately describes the staged diff.

### Local script (terminal)

```bash
npm run push -- "docs: add design.md and agent guidelines"  # message required
./scripts/git-push.sh "describe what actually changed"
```

Script exits with error if there are changes but no message is provided.
