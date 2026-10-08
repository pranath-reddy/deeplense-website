# DeepLense website

The public-facing website for the DeepLense research group, an open-source research program within [ML4SCI](https://ml4sci.org/).

## Local preview

The site is deliberately build-free: it is plain HTML, CSS, and JavaScript and can be served from any static host.

```sh
python3 -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173/`.

## Where content lives

- `dist/index.html` — homepage, selected research, news, and partner links
- `dist/about.html` — mission, principal investigators, funding, and the containers for people/cohort data
- `dist/research.html` — research index and filters
- `dist/script.js` — publication records, research-team roster, and the current GSoC cohort
- `dist/styles.css` — the complete visual system and responsive rules
- `dist/papers/` — locally hosted paper PDFs
- `dist/assets/` — logos and small visual assets

To update a person, edit the `people` array in `dist/script.js`. Set `lead: true` only when the subtle research-lead marker should appear. To update the active GSoC cohort, edit `cohort2026` in the same file.

## Before publishing

1. Run the local preview and inspect the homepage, People & About, and Research pages at desktop and mobile widths.
2. Confirm external profile links and local paper links.
3. Check that the publication count and GSoC count match their data arrays.
4. Commit the source, then publish the contents of `dist/` with the chosen static host.

