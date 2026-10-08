# DeepLense website

[![Deploy GitHub Pages](https://github.com/pranath-reddy/deeplense-website/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/pranath-reddy/deeplense-website/actions/workflows/deploy-pages.yml)

The public website for [DeepLense](https://deeplense.org), an open-source research group within [Machine Learning for Science (ML4SCI)](https://ml4sci.org/). DeepLense develops artificial-intelligence methods for strong gravitational lensing, dark-matter studies, scientific simulation, and autonomous discovery.

**Live site:** [https://deeplense.org](https://deeplense.org)

## Architecture

The website is intentionally simple and build-free. It uses plain HTML, CSS, and JavaScript and is deployed as a static site through GitHub Pages.

- No package manager or framework is required.
- Everything published to the web lives in `dist/`.
- GitHub Actions deploys `dist/` whenever a commit reaches `main`.
- Papers link to their authoritative public records whenever possible. Local PDFs are reserved for manuscripts without a stable public URL.

## Repository structure

```text
.
├── .github/workflows/deploy-pages.yml  # GitHub Pages deployment
├── dist/
│   ├── index.html                      # Homepage, featured research, and news
│   ├── about.html                      # Mission, team, support, and contact
│   ├── research.html                   # Publication index and filters
│   ├── 404.html                        # Custom not-found page
│   ├── script.js                       # Publications, people, cohort, and UI behavior
│   ├── styles.css                      # Design system and responsive layout
│   ├── assets/                         # Logos, favicon, and visual assets
│   └── papers/                         # Locally hosted research PDFs
└── README.md
```

## Local preview

From the repository root, start a static server:

```sh
python3 -m http.server 4173 --directory dist
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173). Stop the server with `Ctrl+C`.

Opening the HTML files directly with a `file://` URL is not recommended because browser behavior can differ from the deployed site.

## Updating content

### People and research leads

Edit the `people` array in `dist/script.js`. Each entry supplies the person's name, affiliation, research focus, and profile links.

```js
{
  initials: "AB",
  name: "Example Researcher",
  affiliation: "Example University",
  focus: "Scientific machine learning and strong gravitational lensing.",
  links: [["Profile", "https://example.org"]]
}
```

Add `lead: true` only when the subtle **Research lead** marker should appear.

Principal investigators are maintained directly in `dist/about.html` because their cards contain longer biographies and multiple profile links.

### Publications

Publication metadata is stored in the `publications` array in `dist/script.js`. Each record includes a title, authors, summary, tags, labels, year, and paper URL.

Use links in this order of preference:

1. Published journal DOI page
2. arXiv abstract page
3. Official conference or workshop paper
4. Local PDF when no stable public record exists

When a paper has no public record yet:

1. Place the PDF in the appropriate folder under `dist/papers/`.
2. Add its metadata and local path to the `publications` array.
3. Use a path relative to `dist/`, such as `papers/pranath/example-paper.pdf`.
4. Replace the local path with a public URL once an authoritative record becomes available, then remove the redundant PDF from the repository.

The publication filters on the Research page are derived from the record tags, so use the existing tag vocabulary when possible.

### GSoC cohort

Edit `cohort2026` in `dist/script.js` to update the current contributor cohort. If the program year changes, update both the array name and the associated headings and links in `dist/about.html` and `dist/index.html`.

### Homepage, news, partners, and contact

- Homepage copy, featured papers, news, and partner links: `dist/index.html`
- Mission, principal investigators, funding, and contact: `dist/about.html`
- Research-page framing and methodology notes: `dist/research.html`
- Shared footer contact email: all three main HTML pages

The current public contact address is [ml4-sci@cern.ch](mailto:ml4-sci@cern.ch).

### Styles and JavaScript caching

The HTML pages append a small version string to `styles.css` and `script.js`, for example:

```html
<link rel="stylesheet" href="styles.css?v=20261008b">
<script src="script.js?v=20261008b" defer></script>
```

When changing CSS or JavaScript, increment the version consistently in `index.html`, `about.html`, `research.html`, and `404.html` where applicable. This prevents visitors from receiving stale assets after a deployment.

## Quality checklist

Before publishing:

1. Preview the homepage, People & About, and Research pages.
2. Check desktop landscape, desktop portrait, and a narrow mobile width.
3. Confirm that navigation, external profiles, email links, and local PDFs work.
4. Verify the publication and cohort counts against their data arrays.
5. Confirm that no text or footer links overflow at narrow widths.
6. Review the staged change with `git diff --cached` before committing.

Useful repository checks:

```sh
git diff --check
git status --short
```

## Deployment

Deployment is handled by `.github/workflows/deploy-pages.yml`. A push to `main` uploads `dist/` and deploys it to GitHub Pages.

```sh
git add dist README.md
git commit -m "Describe the website update"
git push origin main
```

Monitor the deployment in the repository's [Actions tab](https://github.com/pranath-reddy/deeplense-website/actions). The live site normally updates shortly after the **Deploy GitHub Pages** workflow succeeds.

## Domain and HTTPS

`deeplense.org` is configured as the GitHub Pages custom domain. DNS is managed through Cloudflare and points to GitHub Pages.

- Keep the GitHub Pages records set to **DNS only** unless the hosting configuration is intentionally changed.
- Keep **Enforce HTTPS** enabled in the repository's Pages settings.
- Do not remove and re-add the custom domain during routine content deployments; doing so can trigger certificate reprovisioning.
- Changes to files in `dist/` do not require DNS changes.

Repository administrators can review the configuration under **Settings → Pages**.

## Related projects

- [DeepLense research repository](https://github.com/ML4SCI/DeepLense)
- [ML4SCI](https://ml4sci.org/)
- [DeepLense models on Hugging Face](https://huggingface.co/models?search=DeepLense)
