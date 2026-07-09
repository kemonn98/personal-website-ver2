# Design System — Editorial × Swiss × Dark

Design language for **Muhsalmon Personal Website v2** (`theme-2` branch).

> **Source of truth** — Together with [`AGENTS.md`](./AGENTS.md), [`CONTENT.md`](./CONTENT.md), and [`README.md`](./README.md), this file governs every design and UI decision. Agents must read all four before making changes.

> **Direction:** Editorial typography, Swiss International Style structure, dark-only, minimalist, generous whitespace, **zero border-radius**, **no card UI**.

---

## 1. Design Philosophy

### Editorial

Typography is the interface. Hierarchy comes from **scale, weight, spacing, and alignment** — not from boxes, shadows, or decorative chrome.

- Content reads like a publication spread: section labels, lead paragraphs, metadata, and body copy each have a distinct role.
- Sections sequence like magazine panels — one continuous scroll, not a dashboard of widgets.
- Long-form comfort: restrained measure (~46rem), generous line-height, softened contrast on dark.

**References:** [Remarque design system](https://github.com/williamzujkowski/remarque) (typography-first, 46rem column), [Dark Editorial Cinema](https://uxskill.laithjunaidy.com/blog/dark-editorial-cinema-design.html) (dark canvas, type-led hierarchy), [Nocturne Grid Editorial](https://katagami.ai/language/en-019d9bba-5208-7c90-a966-880d16c18501) (grid + editorial sequencing).

### Swiss International Style

Objectivity, clarity, and mathematical order.

- **Grid-first layout** — content aligns to a visible/invisible column system.
- **Asymmetric composition** — dynamic but disciplined; symmetry is avoided.
- **Sans-serif typography** — neutral, functional, highly legible.
- **Flush-left, ragged-right** — natural word spacing; avoid justified text.
- **Whitespace as structure** — negative space is an active design element, not leftover area.
- **Minimal ornament** — no gradients on UI surfaces, no drop shadows on content blocks, no pill buttons.

**References:** [International Typographic Style (Wikipedia)](https://en.wikipedia.org/wiki/International_Typographic_Style), [Swiss Style guide (Big Human)](https://www.bighuman.com/blog/guide-to-swiss-design-style), Josef Müller-Brockmann — *Grid Systems in Graphic Design* (1981).

### Dark Mode (canonical)

This site is **dark-only**. No light-mode toggle. The canvas is permanent charcoal; text is softened white, never pure `#FFFFFF` on `#000000`.

- Use **OKLCH** tokens for perceptual uniformity.
- Increase line-height ~10–20% vs light-mode equivalents for reading comfort.
- Hierarchy via size + weight + muted tones — not color alone.

**References:** [Typography in Dark Mode (Medium)](https://medium.com/@dollyborade07/typography-in-dark-mode-what-ive-learned-after-making-100-mistakes-10b9f9e043a0).

### Anti-patterns (explicit)

| Avoid | Use instead |
|-------|-------------|
| `rounded-*`, `border-radius` | Sharp corners (`border-radius: 0`) |
| Card containers (`bg-card`, shadow, padded boxes) | Flat rows, rules, typographic grouping |
| Box shadows on content | Hairline borders or whitespace separation |
| Pill / chip buttons | Text links, bordered rectangles, or solid rectangular buttons |
| Decorative gradients on UI | Flat `background` token; shader only on ambient layer |
| Centered body paragraphs | Flush-left editorial alignment |
| Justified text | Ragged-right |

---

## 2. Color System

All colors defined in `src/styles/index.css` using OKLCH.

### Core tokens

| Token | Value | Role | Approx. |
|-------|-------|------|---------|
| `--background` | `oklch(0.145 0 0)` | Page canvas | ~#1a1a1a charcoal |
| `--foreground` | `oklch(0.985 0 0)` | Primary text | ~#fafafa soft white |
| `--muted` | `oklch(0.269 0 0)` | Subtle fills (use sparingly) | ~#3a3a3a |
| `--muted-foreground` | `oklch(0.708 0 0)` | Secondary text, metadata | ~#a8a8a8 |
| `--border` | `oklch(1 0 0 / 10%)` | Hairline rules, dividers | 10% white |
| `--primary` | `oklch(0.922 0 0)` | Primary button fill | near-white |
| `--primary-foreground` | `oklch(0.205 0 0)` | Text on primary button | near-black |
| `--accent` | `oklch(0.269 0 0)` | Hover / selected state fill | same as muted |
| `--ring` | `oklch(0.556 0 0)` | Focus ring | mid-gray |

### Usage rules

- **Background layers:** Sections use flat `bg-background`. No card elevation.
- **Text hierarchy:** `text-foreground` → `text-muted-foreground` → `text-muted-foreground/80`. Never more than 3 text tones per block.
- **Borders:** Single-pixel hairlines only (`border-border`). No thick frames.
- **Accent color:** Reserved for ambient `ColorBends` shader (`#ff5c7a`, `#8a5cff`, `#00ffd1`) — not for UI chrome. UI stays monochromatic.
- **Status colors** (Released / Development): use at 15% opacity background max; prefer text-only labels in editorial contexts.

### CSS

```css
:root {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --border: oklch(1 0 0 / 10%);
  --radius: 0; /* target: override shadcn default 0.625rem */
}
```

> **Migration note:** Current codebase still has `--radius: 0.625rem` and card tokens. New work should set `--radius: 0` and stop using `--card` for layout.

---

## 3. Typography

### Typeface

| Role | Family | Notes |
|------|--------|-------|
| **Display** | Inter (opsz 32) | Headings, nav, section titles, hero name |
| **Body** | Inter (opsz 16) | Paragraphs, UI labels, form text |
| **Data / counter** | Inter, `tabular-nums` | Section counter `01/06`, dates, progress |

**Stack:** `'Inter Display', 'Inter', ui-sans-serif, system-ui, sans-serif`

Loaded via Google Fonts with `opsz` axis: `Inter:opsz,wght@14..32,400..700`.

Swiss tradition favours Helvetica / Univers / Akzidenz-Grotesk. This project uses **Inter** as the modern equivalent — neutral grotesque, excellent screen rendering, variable optical size.

### Optical sizing

```css
/* Body */
font-variation-settings: 'opsz' 16;

/* Display: h1–h6, .label, nav, [data-font="display"] */
font-variation-settings: 'opsz' 32;
line-height: 1;
```

Apply `data-font="display"` on editorial headlines and navigation text.

### Type scale

| Name | Size | Line height | Weight | Usage |
|------|------|-------------|--------|-------|
| **Display XL** | `4vw` / `text-4xl` (2.25rem) | 1 | 500 | Fixed nav corners (section name, counter) |
| **Display L** | `text-3xl` (1.875rem) | 1.25 | 500 | Section lead statements |
| **Display M** | `text-2xl` (1.5rem) | 1.25 | 500 | Hero name |
| **Heading** | `text-xl` (1.25rem) | 1.25 | 500 | Form step titles |
| **Subheading** | `text-lg` (1.125rem) | 1.25 | 500 | Blog post titles |
| **Body** | `text-sm` (0.875rem) | 1.5 | 400 | Default body copy |
| **Body small** | `text-xs` (0.75rem) | 1.75 | 400 | Captions, client lists, tags inline |
| **Label** | `0.6875rem` (11px) | 1 | 500 | Section markers `[ ABOUT ]` |
| **Micro** | `0.625rem` (10px) | 1 | 500 | Version tags, status (use sparingly) |

### Label pattern (editorial section marker)

```html
<p class="label mb-4">[ ABOUT ]</p>
```

```css
.label {
  font-size: 0.6875rem;
+  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted-foreground);
}
```

Brackets are intentional — magazine / index convention.

### Hierarchy rules (Swiss + editorial)

1. **Scale first** — largest element wins attention.
2. **Weight second** — `font-medium` (500) for display; `font-normal` (400) for body.
3. **Tone third** — `muted-foreground` for supporting text.
4. **Color last** — never rely on hue alone for hierarchy.
5. **Alignment** — flush-left everywhere. Section nav counter is flush-right (asymmetric balance).
6. **No ALL CAPS body text** — only `.label` and metadata micro type.

### Reading measure

| Context | Max width | Class |
|---------|-----------|-------|
| Main column | `46rem` (~736px) | `.site-wrap` |
| Lead paragraph | full column | — |
| Supporting body | `max-w-xl` (36rem) | long bio, descriptions |
| Work project list | `max-w-[24rem]` | tight editorial index |

`46rem` ≈ 65–70 characters at `0.875rem` — upper comfortable range per [Remarque](https://github.com/williamzujkowski/remarque) and Tschichold measure standards.

### Letterspacing

| Context | Value |
|---------|-------|
| Body default | `0.01em` |
| Labels / micro caps | `0.08em` |
| Display headings | `tracking-tight` or default |

---

## 4. Grid & Layout

### Column grid

```
┌─────────────────────────────────────────────────────────────┐
│ viewport                                                     │
│         │                                    │               │
│         │←────────── 46rem content ──────────→│               │
│         │                                    │               │
│    grid line                          grid line              │
│  (center − 23rem)                  (center + 23rem)        │
└─────────────────────────────────────────────────────────────┘
```

- **Content width:** `46rem` centered — `.site-wrap`
- **Vertical grid lines:** `.vertical-grid-in-section` at `center ± 23rem` (half of 46rem)
- **Grid lines:** 1px `var(--border)`, decorative, `pointer-events-none`
- **Full bleed:** `.full-bleed` for horizontal tracks (Products carousel) breaking out of column

### `.site-wrap`

```css
.site-wrap {
  width: 100%;
  max-width: 46rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;   /* 20px mobile */
  padding-right: 1.25rem;
}
@media (min-width: 768px) {
  .site-wrap {
    padding-left: 1.5rem;  /* 24px desktop */
    padding-right: 1.5rem;
  }
}
```

### Section structure

Every content section follows:

```html
<section id="…" class="section relative py-24">
  <div class="absolute inset-0 z-0 bg-background" aria-hidden />
  <VerticalGrid />
  <div class="site-wrap relative z-[2]">
    <!-- content -->
  </div>
</section>
```

| Property | Value | Notes |
|----------|-------|-------|
| Section padding Y | `py-24` (6rem / 96px) | Generous editorial breathing room |
| Section padding X | via `.site-wrap` | — |
| Hero padding Y | `py-20` (5rem) | Slightly tighter for viewport centering |
| Footer padding Y | `py-16` (4rem) | Closing section, less than content blocks |
| Min section height | content-driven | No forced `100vh` except hero `min-h-[50vh]` |

### Fixed navigation (Swiss asymmetric anchors)

| Element | Position | Style |
|---------|----------|-------|
| Section name | `fixed bottom-4 left-4` | `text-[4vw]`, display, flush-left |
| Section counter | `fixed bottom-4 right-4` | `text-[4vw]`, `tabular-nums`, flush-right |

Counter format: `01/06` — zero-padded, slash-separated.

### Z-index stack

| Layer | z-index | Content |
|-------|---------|---------|
| Background shader | `z-0` | ColorBends |
| Section bg + grid | `z-0` / `z-1` | flat fill, vertical lines |
| Main content | `z-2` | text, lists, forms |
| Fixed nav | `z-4` | section name + counter |
| Loader | top | full-screen overlay |

---

## 5. Spacing Scale

Based on Tailwind's 4px base unit. Prefer these steps:

| Token | Value | Usage |
|-------|-------|-------|
| `1` | 4px | Tight inline gaps |
| `2` | 8px | List item internal gaps |
| `3` | 12px | Button icon gaps |
| `4` | 16px | Standard component gap |
| `6` | 24px | Between label and headline |
| `8` | 32px | Between headline and body |
| `10` | 40px | Form intro spacing |
| `12` | 48px | Between content blocks |
| `16` | 64px | Large section internal gaps (`gap-16`) |
| `24` | 96px | Section vertical padding (`py-24`) |

### Vertical rhythm (editorial)

```
[ LABEL ]           ← mb-4  (16px)
Lead headline       ← mb-6 to mb-8  (24–32px)
Body paragraph      ← mb-12  (48px)
Content block       ← gap-16 between major blocks
```

### Margins

- **No auto margins on text blocks** — only `.site-wrap` centers the column.
- **Bottom margin carries hierarchy** — more space after a lead than after a label.
- **Horizontal lists** (footer links): `gap-8` (32px).

---

## 6. Components

### Links

**Primary text link** — editorial underline:

```html
<a class="link-underline" href="…">Link text</a>
```

```css
.link-underline {
  color: var(--foreground);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.link-underline:hover {
  color: var(--muted-foreground);
}
```

**Inline index link** (client list, work URLs):

```html
<a class="text-foreground hover:text-muted-foreground underline underline-offset-2 transition-colors">
```

**Icon link** (social): icon only, `h-3.5 w-3.5`, no background, no border.

**Scroll CTA:**

```html
<a class="text-xs text-muted-foreground hover:text-foreground transition-colors font-display">
```

### Buttons

Rectangular, **no border-radius**, Swiss-functional.

#### Primary (solid)

```html
<button class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
```

| Property | Value |
|----------|-------|
| Radius | `0` |
| Padding | `px-4 py-2` (16×8px) |
| Font | `text-sm`, `font-medium` |
| Fill | `bg-primary` |
| Hover | `opacity-90` — no scale, no shadow |

#### Secondary (outline)

```html
<button class="inline-flex items-center gap-2 border border-border bg-transparent px-4 py-2 text-sm hover:bg-accent transition-colors">
```

| Property | Value |
|----------|-------|
| Radius | `0` |
| Border | 1px `border-border` |
| Hover | `bg-accent` flat fill |

#### Text button (tertiary)

```html
<button class="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
```

Used for "Load more" — no box, underline only.

#### ❌ Do not use

- `rounded-md`, `rounded-sm`, `rounded-full`
- Shadow buttons
- Pill-shaped chips (see Tags / Selection)

### Form inputs

```html
<input class="w-full border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
```

| Property | Value |
|----------|-------|
| Radius | `0` |
| Border | 1px `border-border` |
| Background | `bg-background` (same as page — no inset card) |
| Padding | `px-3 py-2.5` |
| Focus | `ring-2 ring-ring`, no glow |

### Selection controls (checkbox / radio)

**Target pattern** — flat bordered rectangles, not pills:

```html
<label class="inline-flex cursor-pointer items-center border border-border px-3 py-2 text-sm transition-colors hover:border-muted-foreground/50 has-[:checked]:border-foreground has-[:checked]:bg-accent">
  <input type="checkbox" class="sr-only" />
  <span>Option label</span>
</label>
```

| Property | Value |
|----------|-------|
| Radius | `0` |
| Gap between options | `gap-2` (8px) |
| Selected | border brightens + flat `bg-accent` |

### Tags / metadata

Text-only, no box:

```html
<span class="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
  Design
</span>
```

For inline separators use middle dot: `·` with `text-muted-foreground/60`.

### Lists

#### Work history / index list (target)

Flat rows separated by whitespace or hairline — **not cards**:

```html
<li class="flex flex-wrap items-center gap-x-2 gap-y-1 py-4 border-b border-border">
  <span class="font-medium text-foreground" data-font="display">Role</span>
  <span class="text-muted-foreground/60">·</span>
  <span class="text-sm text-muted-foreground">Company</span>
  <span class="text-muted-foreground/60">·</span>
  <span class="text-sm text-muted-foreground/80 tabular-nums">Period</span>
</li>
```

#### Project index (Work section — reference)

Large display links (`text-3xl font-medium`) with expand-on-hover details. No card wrapper. Image preview floats asymmetrically to the right — editorial, not modal.

### Progress bar (Contact form)

```html
<div class="h-px w-full bg-border">
  <div class="h-px bg-primary transition-[width] duration-300" style="width: N%" />
</div>
```

| Property | Target value |
|----------|-------------|
| Track height | `1px` (hairline, not `h-1.5 rounded-full`) |
| Fill | `bg-primary`, square ends |
| Step dots | remove or replace with typographic `01/07` counter |

### Form container (Contact)

**Target:** open layout on `bg-background` with top/bottom rules — not a card.

```html
<div class="border-t border-b border-border min-h-[400px] flex flex-col">
```

| Property | Target |
|----------|--------|
| Background | transparent / `bg-background` |
| Border | top + bottom hairline only |
| Shadow | none |
| Radius | 0 |

### Products / Blog items

**Target:** typographic index or bordered rectangles with **zero radius, no shadow**.

- Product row: version + status as text · name as display link · description on hover inline.
- Blog: list of title + date + excerpt separated by `border-b border-border`, not grid cards.

---

## 7. Motion & Interaction

| Context | Duration | Easing |
|---------|----------|--------|
| Color / opacity hover | `150ms` | `ease` |
| Button hover | `150ms` | `ease` |
| GSAP text reveal | `500ms` | `power3.out` |
| GSAP nav entrance | `500ms` | `power3.out`, stagger `0.06` |
| Scroll (Lenis) | `duration: 1.2` | `lerp: 0.02` |
| Section scroll reveal | scroll-scrubbed | GSAP ScrollTrigger |

### Principles

- Motion supports typography (char stagger, fade-up) — not decorative bounce.
- No hover scale on content blocks.
- No box-shadow transitions.
- Loader: vertical slide `yPercent: -100`, not fade-to-white.

---

## 8. Iconography

- **Library:** Lucide React
- **Sizes:** `h-3 w-3` (scroll), `h-3.5 w-3.5` (social), `h-4 w-4` (buttons, external link)
- **Color:** inherits `text-foreground` or `text-muted-foreground`
- **Stroke:** default Lucide stroke — no filled icon buttons

---

## 9. Accessibility

| Rule | Implementation |
|------|----------------|
| Contrast | `foreground` on `background` ≥ WCAG AA |
| Focus | `focus-visible:ring-2 focus-visible:ring-ring` |
| Decorative | `aria-hidden` on grid, shader, preview images |
| Section nav | `aria-live="polite"` on animated text |
| Forms | `aria-label`, `role="progressbar"` with values |
| Reduced motion | respect `prefers-reduced-motion` (future) |

---

## 10. Ambient Layer (exception)

`ColorBends` (WebGL) is the **only** allowed non-flat visual effect — fixed full-viewport, `pointer-events-none`, `z-0`. It provides atmospheric depth without violating the flat editorial UI.

```tsx
<ColorBends
  colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
  transparent
  className="absolute inset-0"
/>
```

Shader colors must not leak into UI component styling.

---

## 11. Current vs Target

The codebase is transitioning to this system. Known divergences to refactor:

| Location | Current | Target |
|----------|---------|--------|
| `index.css` | `--radius: 0.625rem` | `--radius: 0` |
| `Hero.tsx` | `rounded-xl`, `bg-black/50 backdrop-blur` card | Open display typography, no glass card |
| `About.tsx` | `rounded-md border bg-muted/30` list items | Flat rows, `border-b` separators |
| `Contact.tsx` | `bg-card rounded-md`, rounded inputs/chips | Open form, square inputs, hairline progress |
| `Products.tsx` | `rounded-md bg-card shadow-sm` cards | Flat index or square bordered tiles, no shadow |
| `Blogs.tsx` | 3-column card grid | Editorial list, `border-b` rows |
| `Work.tsx` | `rounded-md` image preview | Square crop, `border border-border`, no shadow |

---

## 12. Quick Reference Cheatsheet

```
Canvas:        oklch(0.145 0 0)
Text:          oklch(0.985 0 0) / muted oklch(0.708 0 0)
Column:        46rem (.site-wrap)
Section pad:   py-24 (96px)
Label:         [ BRACKETS ] · 11px · uppercase · 0.08em tracking
Lead:          text-3xl · font-medium · opsz 32
Body:          text-sm · leading-relaxed (1.75)
Border:        1px oklch(1 0 0 / 10%)
Radius:        0 everywhere
Shadow:        none on content
Buttons:       square · primary fill or border-only
Links:         underline · underline-offset 2px
Grid lines:    center ± 23rem
Nav:           bottom-left name · bottom-right 01/06
```

---

## 13. References

1. Müller-Brockmann, J. — *Grid Systems in Graphic Design* (1981)
2. [International Typographic Style — Wikipedia](https://en.wikipedia.org/wiki/International_Typographic_Style)
3. [Swiss Design — Big Human](https://www.bighuman.com/blog/guide-to-swiss-design-style)
4. [Remarque — typography-first design system](https://github.com/williamzujkowski/remarque)
5. [Dark Editorial Cinema](https://uxskill.laithjunaidy.com/blog/dark-editorial-cinema-design.html)
6. [Nocturne Grid Editorial — katagami](https://katagami.ai/language/en-019d9bba-5208-7c90-a966-880d16c18501)
7. [Typography in Dark Mode](https://medium.com/@dollyborade07/typography-in-dark-mode-what-ive-learned-after-making-100-mistakes-10b9f9e043a0)
8. [Typography in Design — Figma](https://www.figma.com/resource-library/typography-in-design/)

---

*Last updated: theme-2 branch — aligned with `src/styles/index.css` and section components.*
