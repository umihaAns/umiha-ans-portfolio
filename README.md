# Umiha Ans — Portfolio

Single-page portfolio site: skills, CV, experience, projects and contact in one shareable link.

**Live:** https://umihaans.github.io/umiha-ans-portfolio/

## Stack

Static HTML, CSS and vanilla JS. No build step, no dependencies — GitHub Pages serves the
files directly.

```
index.html            all page content
assets/css/style.css  styling (light + dark theme)
assets/js/main.js     theme toggle, mobile menu, scroll reveal
assets/img/           favicon.svg and any project images
assets/Umiha-Ans-CV.pdf   CV download (add this file)
```

## Editing the content

Everything lives in `index.html`. Placeholder text is marked with `PLACEHOLDER` comments.
Replace in this order:

1. **Contact details** — search for `hello@example.com` and `+920000000000` and replace
   every occurrence (they appear in the hero, contact section and structured data).
2. **Hero** — name, role line and the intro paragraph.
3. **Hero card** — the `mini-stats` figures and the LinkedIn URL in `social-row`.
4. **About** — the three paragraphs.
5. **Skills** — tags inside each `.skill-card`.
6. **Experience** — each `<li>` in `.timeline` (dates, job title, company, bullet points).
7. **Projects** — each `.project-card` (type, title, description, links).
8. **CV** — edit `cv.html`, then run `bash tools/build-cv.sh` to regenerate
   `assets/Umiha-Ans-CV.pdf`.
9. **Social preview** (optional) — add a 1200x630 image and an
   `<meta property="og:image">` tag so shared links show a preview card.

The hero uses a "UA" monogram by choice — there is deliberately no photo.

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
```

## Deploying

Push to `main`, then in the repo: **Settings → Pages → Source: Deploy from a branch →
`main` / `(root)`**. The site is live a minute later.

## Notes

- Dark mode follows the visitor's OS setting; the toggle overrides it and is remembered.
- The page has print styles, so **Ctrl+P → Save as PDF** produces a usable CV.
- Update the `og:url` and JSON-LD `url` in `<head>` if the domain ever changes.
