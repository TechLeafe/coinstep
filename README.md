# Coinstep — React + TypeScript site template

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build in `dist/`.

## How the three requirements are solved

**1. One theme toggle affects the whole site**
`src/context/ThemeContext.tsx` holds a `theme` state (`light` / `dark`) and writes it as a
`data-theme` attribute on `<html>`. Every page and component reads its colors from CSS
variables that are re-defined for `[data-theme='dark']` in `src/styles/tokens.css`. Because
nothing in the app hardcodes a color, flipping the toggle in the navbar re-themes every
route instantly — nothing per-page to wire up.

**2. One file controls fonts, colors and shared elements**
`src/styles/tokens.css` is the single source of truth: every color, font, spacing value,
radius and shadow used anywhere in the app is a variable defined there, and `.btn`,
`.badge`, `.surface`, `.input` are the one definition of each shared element. Change
`--color-accent` once and every button, link-hover and badge across every page updates.
Change `.btn-primary`'s padding once and every button on the site follows. Page files never
set raw colors or fonts — they only reference variables and these shared classes.

**3. Responsive with zero `@media` queries**
Every measurement that needs to adapt uses `clamp()`/fluid units instead of breakpoints:
- Type scale and spacing scale (`--text-*`, `--space-*` in `tokens.css`) are all `clamp()`
  expressions, so text and gaps scale continuously with viewport width.
- Layout uses `display: flex; flex-wrap: wrap` and
  `grid-template-columns: repeat(auto-fit, minmax(...))` (see `.grid-auto`, `.split`,
  `.nav-inner` in `src/styles/global.css` and `Navbar.css`) so columns fold automatically
  as space runs out, with no fixed breakpoint.
- `.container` uses `width: min(100% - padding, max-width)` so it never needs a breakpoint
  to cap its width.

## Structure

```
src/
  styles/
    tokens.css     <- all design tokens + shared element styles (edit here)
    global.css     <- layout utilities (container, grid, row, stack...)
  context/
    ThemeContext.tsx
  components/
    Navbar.tsx / Navbar.css
    Footer.tsx / Footer.css
    Button.tsx     <- <Button> / <LinkButton>, the only way buttons render
  pages/
    Home.tsx, Platform.tsx, Features.tsx, Build.tsx, Support.tsx, About.tsx
  App.tsx          <- routes, Navbar/Footer rendered once outside <Routes>
  main.tsx         <- providers + CSS imports
```

## Extending it

- **New page**: add a file in `src/pages`, add a `<Route>` in `App.tsx`, add a nav link in
  `Navbar.tsx`. It automatically gets the current theme and shared styles.
- **New color / rename a token**: edit the variable once in `tokens.css`.
- **New shared component style** (e.g. a new badge color): add one rule in `tokens.css`
  rather than styling it inline in a page.
