# Everyday Energy

A lightweight, browser-based calculator for estimating bi-monthly electricity energy charges from units consumed. The interface shows the applicable tariff, a progressive slab-by-slab breakdown, and the estimated total in Indian rupees.

## Run locally

Open `index.html` in a modern web browser. The project uses plain HTML, CSS, and JavaScript and does not require a build step or dependencies. `app.html` remains available as an alternate local entry point.

## Publish with GitHub Pages

The repository is structured as a static site: `index.html`, `style.css`, and `script.js` live together in the repository root, and the asset references in the HTML are relative so they work on GitHub Pages project URLs. The workflow in `.github/workflows/pages.yml` deploys the root when changes are pushed to `main`.

To enable publishing, open the repository's **Settings → Pages** and set the build and deployment source to **GitHub Actions**. After the workflow completes, GitHub Pages will serve the calculator at `https://<owner>.github.io/energy-everyday/`.

## Tariff calculation

The calculator selects the tariff based on total bi-monthly consumption:

- **New scheme, up to 500 units:** 0-200 units at ₹0/unit, 201-400 at ₹4.70/unit, and 401-500 at ₹6.30/unit.
- **Existing tariff, above 500 units:** 0-100 units at ₹0/unit, 101-400 at ₹4.70/unit, 401-500 at ₹6.30/unit, 501-600 at ₹8.40/unit, 601-800 at ₹9.45/unit, 801-1,000 at ₹10.50/unit, and units above 1,000 at ₹11.55/unit.

Each rate applies only to the units in its band. The result covers energy charges only; other fees, taxes, subsidies, or adjustments are not included. Confirm the rates with your electricity provider before relying on the estimate.

## Project files

- `index.html` - GitHub Pages homepage and calculator structure.
- `app.html` - Alternate local calculator entry point.
- `style.css` - Responsive layout and visual styling.
- `script.js` - Tariff selection and charge calculation.