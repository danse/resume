# Practical Resume Improvements

> **Constraint:** Must stay on a single page when printed.
> **Files:** `/home/marea/pub/resume/practical.html`, `/home/marea/pub/resume/practical.css`

## Layout & Print
- [ ] Add `@page` CSS rules for print margins (`practical.css`)
- [ ] Tighten vertical spacing (padding/margins) to maximize content density
- [ ] Download Google Fonts locally (fonts/ dir exists but CSS comments are unused; remote fonts may fail offline/print)
- [ ] Add `@media print` rules (e.g., remove background, optimize colors)

## Content
- [ ] Update Tracsis dates: "2021 — 2025" → current year (`practical.html:38`)
- [x] Add GitHub/portfolio link to contacts (`practical.html:271-281`)
- [ ] Complete the tech list: replace "⋯" with 2-3 more key skills (`practical.html:227`)
- [ ] Add "networking and multimedia" curriculum note to education (`practical.html:173` comment)
- [ ] Add a languages section (`.languages` CSS exists at `practical.css:106` but no HTML)

## Visual Polish
- [ ] Fix `#francesco` font weight — Montserrat bold doesn't look right (`practical.html:23`, comment lines 14-22)
- [ ] Refine first-letter scaling (`130%` at `practical.css:74`) — can cause layout quirks
- [ ] Remove or replace pink-ish background (`#fbdbd347` at `practical.css:20`) — wastes ink / poor print

## Structure
- [ ] Condense "some values" section if space is tight (`practical.html:231-269`)
- [x] Add location/LinkedIn to contacts (`practical.html:271-281`)
