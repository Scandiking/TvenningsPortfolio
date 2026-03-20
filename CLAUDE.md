# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Development server (localhost:3000)
npm run build      # Production build
npm run deploy     # Build + deploy to GitHub Pages (gh-pages)
npm test           # Run tests
```

## Architecture

This is a React SPA portfolio site for university coursework, deployed to GitHub Pages at `/TvenningsPortfolio/`.

**Routing:** Uses `HashRouter` (not `BrowserRouter`) — required for GitHub Pages. All URLs are `/#/path`.

**Entry point:** `src/App.jsx` contains the full layout shell (navbar, responsive drawer, sidebar accordion), all route definitions, and the `semesterData` array that drives sidebar navigation.

**Theme system:** `ThemeProvider` context + `ThemeSwitcher` component cycle through light/dark/system. Dark mode uses Tailwind's `class` strategy.

## Adding a New Course

All four of these steps are required:

1. **`src/App.jsx` — semesterData**: Add `{ id: "coursecode", title: "Course Title", path: "/emner/coursecode" }` to the correct semester's `courses` array.

2. **`src/App.jsx` — routes**: Import the new page and add `<Route path="/emner/coursecode" element={<COURSECODE />} />`.

3. **`src/pages/COURSECODE.jsx`**: Create the course page. All course pages share this structure:
   - `Breadcrumbs` → Hjem / Emner / Course Name
   - `Tabs` with `Tab` keys for Arbeidskrav (assignments), Eksamen (exams), optionally Prosjekt
   - `Card`/`CardBody` wrapping content
   - Grade badges via `<Image src="https://img.shields.io/badge/Karakter-A-gold" />`

4. **Static assets**: Place PDFs in `public/pdfs/COURSECODE/` and images in `public/images/COURSECODE/`. Reference them as `${process.env.PUBLIC_URL}/pdfs/COURSECODE/file.pdf`.

**`src/pages/Emner.jsx`** — optionally add the course to the `emneData` array for it to appear in the courses table.

**`src/pages/Home.jsx`** — optionally add a card for it to appear on the landing page.

## Embedding Content in Course Pages

**PDFs** (preferred — full browser controls):
```jsx
<iframe src={`${process.env.PUBLIC_URL}/pdfs/COURSECODE/file.pdf`} width="100%" height="600px" />
```

**Code blocks** (with syntax highlighting + copy button):
```jsx
import CodeBlock from "../components/CodeBlock";
<CodeBlock code={myCodeString} language="python" />
```

**Jupyter notebooks** — fetched from GitHub raw content and rendered with `react-ipynb-renderer`. See `src/pages/BID3000.jsx` for a complete example.

## Key Dependencies

| Package | Purpose |
|---|---|
| `@heroui/react` | UI components (Tabs, Card, Table, Drawer, Breadcrumbs, etc.) |
| `react-router-dom` v7 | Routing (HashRouter) |
| `tailwindcss` | Styling (with HeroUI plugin) |
| `react-syntax-highlighter` | Code display (atom-dark theme) |
| `react-pdf` | PDF rendering via PDFViewer component |
| `react-ipynb-renderer` | Jupyter notebook rendering |
| `framer-motion` | Animations |
| `gh-pages` | GitHub Pages deployment |

## Notes

- `src/setupProxy.js` proxies `/notebooks` to `localhost:3000` during development — only needed for local notebook loading.
- The `src/components/Drawer.jsx.backup` file is a renamed backup; the active drawer is inline in `App.jsx`.
- `process.env.PUBLIC_URL` resolves to `/TvenningsPortfolio/` in production and `` (empty string) in development.
