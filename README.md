# SRC93 Tech - developer profile

Source of **https://src93-tech.github.io**, the developer profile of SRC93 (SRC93 Tech), builder of [StockGrid](https://stockgrid.co.in).

Plain HTML, CSS and JavaScript - no build step, no dependencies. GitHub Pages serves the `main` branch root directly.

## Editing

All text that changes often lives in [`js/data.js`](js/data.js):

- `personal` - name, role, email, links
- `pillars` - the four "Engineering Philosophy" cards
- `projects` - project cards and their deep-dive dialog (images in `assets/images/`)
- `skills` - skill bars
- `journey` - the timeline, newest first

The hero text, stats bar and contact section are in [`index.html`](index.html). Contact is a plain email link - there is no form or backend.

## Preview locally

```bash
python -m http.server 8085
```

Then open http://localhost:8085.

## Related

- [stockgrid-website](https://github.com/SRC93-tech/stockgrid-website) - source of stockgrid.co.in
