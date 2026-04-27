# ARC4 Collective — Website

Source for **arc4collective.com** — the website of ARC4 Oy, Arctic Experience Designers based in Inari, Finnish Lapland.

## Structure

- `index.html` — entry point
- `styles/tokens.css` — design system colors + type
- `src/*.jsx` — React components (loaded via Babel standalone; no build step required)
- `assets/photos/` — on-brand photography
- `assets/arc4-*.svg` — logos
- `assets/icons/*.svg` — ui icons
- `netlify.toml` — deploy & cache config

## Running locally

This is a plain static site. Either:

1. Open `index.html` directly in a browser (works, but Babel loads from a CDN)
2. Or serve the folder: `npx serve` / `python3 -m http.server`

## Deploy

Deployed automatically to Netlify. Production: https://www.arc4collective.com

## Editing

- **Experience titles / copy / meta tags** → `src/Experiences.jsx`
- **Hero copy & stats** → `src/Hero.jsx`
- **Contact form + enquiry section** → `src/Enquire.jsx`
- **Corporate section** → `src/Corporate.jsx`
- **Territory / Collective / Positioning** → their respective `src/*.jsx` files
- **Photos** → drop into `assets/photos/` and reference by filename

## Stack

- React 18 (via unpkg CDN)
- Babel standalone (JSX compiled in-browser — slower first paint but zero build tooling)
- CSS custom properties for theming
- No framework, no bundler, no build — keep it this way unless there's a concrete reason

## Design system

Colors, typography and brand rules live in the ARC4 Design System project. `styles/tokens.css` is a snapshot; edit there to change tokens site-wide.
