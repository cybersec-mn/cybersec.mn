# cybersec.mn

Public landing page for the **CyberSec Development Leadership Institute** (CyberSec Institute), a Mongolian non-profit building digital civic infrastructure for transparency, public accountability, and cybersecurity research.

The site is a static, single-page presence served from GitHub Pages on the apex domain **cybersec.mn**. It is bilingual (Mongolian / English) with a client-side language toggle.

## Stack

- Plain HTML, CSS, and a small amount of vanilla JavaScript — no build step, no framework.
- Inter from Google Fonts.
- IntersectionObserver for subtle on-scroll fade-ins (skipped when `prefers-reduced-motion`).
- `localStorage` to remember the visitor's language preference.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and metadata (Open Graph, Twitter card, canonical, favicon link). |
| `style.css` | All styling: tokens at `:root`, mobile-first layout, sections, cards, footer. |
| `script.js` | Bilingual dictionary, language toggle, scroll reveal. |
| `favicon.svg` | Shield-and-C SVG favicon in the brand navy/crimson palette. |
| `CNAME` | Tells GitHub Pages to serve the site from `cybersec.mn`. |

## Local preview

Just open `index.html` in a browser, or serve the directory with any static file server, e.g.:

```sh
python -m http.server 8000
# then visit http://localhost:8000/
```

## Deploying to GitHub Pages

1. Create a repository under the organization (suggested: `cybersec-mn/cybersec-mn.github.io` or a project repo such as `cybersec-mn/website`).
2. Push this directory to the default branch:

   ```sh
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin git@github.com:cybersec-mn/website.git
   git push -u origin main
   ```

3. In the repo settings → **Pages**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `/ (root)`
4. Confirm the **Custom domain** field shows `cybersec.mn` (the bundled `CNAME` file populates this automatically).
5. Enable **Enforce HTTPS** once GitHub provisions the certificate (this can take a few minutes after DNS resolves).

## DNS configuration for `cybersec.mn`

At your DNS provider, configure both apex and `www`:

**Apex (`cybersec.mn`)** — four A records pointing at GitHub Pages:

| Type | Name | Value             |
| ---- | ---- | ----------------- |
| A    | @    | 185.199.108.153   |
| A    | @    | 185.199.109.153   |
| A    | @    | 185.199.110.153   |
| A    | @    | 185.199.111.153   |

Optional but recommended — AAAA records for IPv6:

| Type | Name | Value                    |
| ---- | ---- | ------------------------ |
| AAAA | @    | 2606:50c0:8000::153      |
| AAAA | @    | 2606:50c0:8001::153      |
| AAAA | @    | 2606:50c0:8002::153      |
| AAAA | @    | 2606:50c0:8003::153      |

**`www`** — single CNAME to the GitHub Pages host (replace with your actual user/org name):

| Type  | Name | Value                       |
| ----- | ---- | --------------------------- |
| CNAME | www  | `<org>.github.io`           |

After DNS propagates, run `dig cybersec.mn +short` and verify it returns the four GitHub Pages IPs above.

## Editing content

Both languages are stored as an object in `script.js` (the `translations` constant). To edit copy:

1. Find the matching `data-i18n` key in `index.html`.
2. Update both `translations.mn[key]` and `translations.en[key]` in `script.js`.
3. The fallback strings hard-coded in `index.html` should also be kept in sync with the Mongolian copy, since they render before the JS runs.

## License & registration

© 2026 CyberSec Development Leadership Institute NGO. Registration in progress with the General Authority for State Registration of Mongolia.
