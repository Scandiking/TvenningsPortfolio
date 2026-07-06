# Tvenning-Tech Design System

**Company:** Tvenning-Tech  
**Type:** Single-person studio making websites and apps  
**Founded by:** A sole developer/designer based in Norway

## Sources

| Source | Details |
|--------|---------|
| Logo   | `uploads/TvenningLogo-596.png` — provided directly |
| Brief  | Written design brief from owner |

No Figma links or codebase were provided. This design system was built from the logo and brief.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Professional, but human.** Tvenning-Tech is a one-person studio — the copy should feel like talking to a skilled craftsperson, not a corporate entity.
- **Direct and clear.** No filler. Say the thing, then stop.
- **Confident without arrogance.** "I build things that work" — not "Leveraging cutting-edge synergies."
- **First person singular** ("I" not "we"), unless addressing the reader directly ("you / your project").
- **Norwegian sensibility** — understated, reliable, no hype. Undersell; over-deliver.

### Casing & Punctuation
- **Sentence case** for all UI labels, headings, and body copy. (Never Title Case For Long Strings.)
- **Title case** only for proper nouns and the brand name: *Tvenning-Tech*.
- **No exclamation marks** in UI copy. Reserve for genuinely exceptional moments only.
- No emoji in UI or professional copy.
- Oxford comma used throughout.

### Copywriting examples
| Context | Good ✓ | Avoid ✗ |
|---------|---------|---------|
| CTA | "Get in touch" | "Let's synergize!" |
| Error | "Something went wrong. Try again." | "Oops! 😅 Our bad!" |
| Empty state | "Nothing here yet." | "Wow, such empty!" |
| Success | "Sent." | "Woohoo! 🎉 Message sent!" |
| About | "I build websites and apps." | "I'm passionate about disrupting the digital landscape." |

---

## VISUAL FOUNDATIONS

### Colors
- **Primary:** `#3366cc` — extracted directly from the logo. A clear, medium-weight royal blue. Neither navy nor cobalt — a precise, confident mid-blue.
- **Neutrals:** Blue-tinted grays, referencing the northern sky. Not warm (no yellow undertone); cool and clean.
- **Fjord Teal** (`#1a7a8a`): secondary accent, inspired by Meløy fjordwater — deep, dark teal. Used sparingly.
- **Midnight Sun Amber** (`#e8901a`): warm accent for highlights/alerts; the glow of the Arctic summer sun over Nordland.
- **White** is a primary color, not a default. White is used with intention.

### Typography
- **Display / Headings:** *Syne* — geometric, bold, with slight irregularity. Nordic feeling. Heavy weights only (700–800). Tight letter-spacing.
- **Body / UI:** *DM Sans* — optical-size aware, clean, very readable at small sizes. Regular and Medium weights.
- **Mono:** *JetBrains Mono* — code blocks, technical labels.
- ⚠️ *These are Google Fonts substitutes. Provide licensed font files to upgrade.*

### Backgrounds
- Primarily **white** or **neutral-50** (`#f4f6fc`).
- Brand blue used as **full-bleed section backgrounds** for hero/CTA areas (white text).
- **Selbu-pattern strip** used as a decorative border element — never as a full background.
- No gradients (except subtle alpha fades where content overlaps imagery).
- No textures beyond the Selbu motif.

### Imagery
- **Color vibe:** Cool, desaturated. Arctic blues, grays, whites. Think overcast Nordic coast.
- No warm-filtered lifestyle photography.
- Technical diagrams: clean line-art style, brand blue on white.
- Placeholder image bg: `var(--color-neutral-100)`

### Animation & Motion
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` — fast out, like a clean snap. Not bouncy.
- **Durations:** Fast interactions 120ms; standard 200ms; page transitions 350ms.
- **No auto-playing animations** unless user-triggered.
- Hover: subtle opacity shift (0.85) or background color swap — never scale > 1.02.
- Press: slight scale down `scale(0.97)` + darken.
- No spinning loaders — use skeleton screens or progress bars.

### Hover & Press States
- **Buttons:** darken background by one palette step; scale(0.98) on press.
- **Links:** underline appears on hover (not always present).
- **Cards:** `shadow-md` → `shadow-lg`; translate Y -2px.
- **Icon buttons:** background fills to `neutral-100` on hover.

### Borders & Radii
- **Preferred radius:** 6px (`--radius-md`) for most UI elements.
- 3px (`--radius-sm`) for tight elements (badges, chips).
- 10–16px (`--radius-lg/xl`) for cards and modals.
- The logo mark uses a **square** — very slight rounding (12px) at large scale; no rounding at small scale.
- No pill buttons (999px radius) except for tags/chips.

### Cards
- White background, `shadow-sm` resting, `shadow-md` on hover.
- `border: 1px solid var(--color-neutral-100)` — very subtle.
- `border-radius: var(--radius-lg)` (10px).
- Padding: `--space-6` (24px).

### Shadows
- Blue-tinted shadows (not pure black): `rgba(13,21,38, ...)`.
- Brand shadow for primary buttons: `rgba(51,102,204,.25)`.
- Elevation hierarchy: xs → sm → md → lg → xl.

### Spacing
- 4px base grid. All spacing values are multiples of 4.

### Norwegian Motifs
- **Nordic star motif** (`assets/selbu-pattern.svg`, `selbu-strip.svg`, `selbu-rose.svg`): A geometric 8-pointed star built from a pixel grid, inspired by Norwegian folk art traditions (including the Selbu knitting aesthetic). **Note: this is not a faithful reproduction of the Selbu rose.** A hand-crafted SVG or licensed illustration should replace it if the brand wants to reference Selbu specifically. Used as a decorative strip/border at section breaks and in the footer.
- **Meløy / Nordland reference:** The fjord teal and midnight sun amber draw directly from the Meløy landscape — coastal, dramatic, northern. The overall cool color palette references the Nordland sky.
- The logo arch form echoes the double-column mountain silhouettes visible along the Meløy coastline.

### Iconography
*(see ICONOGRAPHY section below)*

### Use of Transparency & Blur
- Backdrop blur (`blur(12px)`) allowed on floating panels/navbars over rich content.
- Transparency used on overlays only: `rgba(13,21,38, 0.5)` for modal scrims.

### Layout Rules
- Max content width: **1200px**.
- Section padding: `--space-20` vertical (80px desktop), `--space-10` mobile.
- Sticky header: yes. Blur + white/95% alpha on scroll.
- Grid: 12-column, 24px gutter.

---

## ICONOGRAPHY

- **No proprietary icon font.** No built-in icon set from a codebase was provided.
- **Recommended icon set:** [Lucide Icons](https://lucide.dev) — thin, 1.5px stroke, rounded caps. Consistent with the clean Scandinavian aesthetic.
- Load via CDN: `https://unpkg.com/lucide@latest`
- Size: 16px (inline), 20px (UI actions), 24px (feature icons).
- Color: always inherits `currentColor`. Never hardcoded.
- No emoji used as icons.
- No filled/solid icons — always outline/stroke style.
- The Selbu rose SVG (`assets/selbu-rose.svg`) is used as a decorative brand mark, not a functional icon.

---

## VISUAL ASSETS

| File | Description |
|------|-------------|
| `assets/TvenningLogo-596.png` | Primary logo — blue square with white TT arch mark, 596×522px |
| `assets/selbu-pattern.svg` | Nordic star tile — 40×40px repeating unit (geometric interpretation, not a faithful Selbu rose) |
| `assets/selbu-strip.svg` | Nordic star decorative border strip — 600×60px |
| `assets/selbu-rose.svg` | Nordic star mark — 80×80px |

---

## FILE INDEX

```
README.md                   — This file; design context + guidelines
colors_and_type.css         — All CSS custom properties (colors, type, spacing, etc.)
SKILL.md                    — Agent skill descriptor
assets/
  TvenningLogo-596.png      — Primary logo
  selbu-pattern.svg         — Selbu repeating tile
  selbu-strip.svg           — Selbu border strip
  selbu-rose.svg            — Selbu rose decorative mark
preview/
  colors-primary.html       — Primary blue color scale
  colors-neutral.html       — Neutral gray scale
  colors-accents.html       — Fjord + Midnight Sun accents
  colors-semantic.html      — Semantic color roles
  type-display.html         — Display / heading type specimens
  type-body.html            — Body + UI type specimens
  type-mono.html            — Monospace specimens
  spacing-tokens.html       — Spacing scale tokens
  spacing-radii.html        — Border radius + shadow system
  components-buttons.html   — Button variants + states
  components-inputs.html    — Form inputs
  components-cards.html     — Card variants
  components-badges.html    — Badges, chips, status
  brand-logo.html           — Logo usage
  brand-selbu.html          — Selbu pattern usage
ui_kits/
  website/
    index.html              — Tvenning-Tech marketing website UI kit
    Header.jsx              — Sticky nav header
    Hero.jsx                — Hero section
    Services.jsx            — Services/offering cards
    Footer.jsx              — Footer with Selbu border
```
