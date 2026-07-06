# Using this design system with a HeroUI / Tailwind project

## Quick start

1. Copy `tailwind.config.js` into the root of your project (merge with existing if present)
2. Copy `colors_and_type.css` into your project (e.g. `src/styles/`) and import it in your root layout
3. Copy `assets/` into your project's `public/` folder
4. Add the Google Fonts import to your `<head>` or global CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap');
```

## Typography usage with Tailwind

```jsx
// Display — Syne 800 only, for hero/brand moments
<h1 className="font-display font-extrabold text-6xl tracking-tighter">
  Built properly.
</h1>

// Section headings — Space Grotesk
<h2 className="font-heading font-bold text-3xl tracking-tight">
  Services
</h2>

// Body — DM Sans
<p className="font-body text-base text-neutral-700 leading-relaxed">
  Clean code, honest pricing.
</p>
```

## HeroUI component overrides

HeroUI components will automatically use the Tvenning-Tech primary/secondary/danger colors
once `tailwind.config.js` is in place. For fine-grained control:

```jsx
// Button — brand primary
<Button color="primary" radius="md">Get in touch</Button>

// Button — ghost
<Button variant="bordered" color="primary" radius="md">View work</Button>

// Card
<Card className="shadow-sm border border-neutral-100 rounded-lg">
  <CardBody className="p-6">...</CardBody>
</Card>

// Badge — status
<Chip color="success" size="sm" variant="flat">Active</Chip>
<Chip color="warning" size="sm" variant="flat">Pending</Chip>
<Chip color="danger" size="sm" variant="flat">Closed</Chip>
```

## Nordic star strip (footer divider)

```jsx
// In your Footer component:
<div className="h-10 overflow-hidden">
  <img src="/assets/selbu-strip.svg" className="w-full h-10 object-cover" />
</div>
```

## Logo

```jsx
<div className="flex items-center gap-2.5">
  <div className="bg-brand-500 rounded-lg w-8 h-7 flex items-center justify-center">
    <img src="/assets/TvenningLogo-596.png" alt="" className="w-6" />
  </div>
  <span className="font-heading font-bold text-base text-neutral-900">
    Tvenning<span className="text-brand-500">-Tech</span>
  </span>
</div>
```

## Prompt for Claude Code

Paste this when you hand off to Claude Code:

> Check that what is described in quick start is done before you do this:
> I have a design system in the `design-system/` folder. Please remake this HeroUI site using:
> - `design-system/tailwind.config.js` for all color and typography tokens
> - Syne 800 (`font-display`) for hero/display text only
> - Space Grotesk (`font-heading`) for all H1–H3 headings
> - DM Sans (`font-body`) for body and UI text
> - Brand blue `#3366cc` (primary-500) as the primary color
> - Logo from `design-system/assets/TvenningLogo-596.png`
> - Nordic star strip (`design-system/assets/selbu-strip.svg`) as a footer divider
> - Refer to `design-system/ui_kits/website/index.html` for visual reference of the target design
> - Follow the copywriting rules in `design-system/README.md` (sentence case, no emoji, direct tone)
