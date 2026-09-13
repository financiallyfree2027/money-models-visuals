# Money Models — visual offer library

A single-file, mobile-friendly web page with two tabs:

1. **Money Model Offers** — every offer type from *$100M Money Models* (Attraction · Upsell · Downsell · Continuity), shown from the client's point of view: the ad, the page, the checkout, the WhatsApp, the paper — one screen per step. Numbered tabs switch examples; ⓘ explains why each thing is sent and gives the offer as copy-paste text.
2. **Diagnosis & Healing** — the Constraint Pipe: find which of Supply / Conversion / Demand is the tightest section, then the gates and levers that widen it.

## Use it

`index.html` is self-contained — open it, host it anywhere, or embed it:

```html
<iframe src="https://<your-pages-url>/index.html#offers" style="width:100%;height:100vh;border:0"></iframe>
```

Deep links: `#offers` · `#diagnosis`.

## Source

- `src/shell.html` — the offers viewer (loads `src/offers/*.js`).
- `src/offers/<slug>.js` — one file per offer; each pushes `{slug, name, section, examples:[…]}` into `window.OFFERS`. Format in `src/SPEC.md`.
- `src/build_combined.py` — merges the viewer and the Constraint Pipe page into `index.html`.
- `src/VERIFY.md` — which examples are the book's own stories vs. adapted (adapted ones are hidden by default; toggle at the bottom of the left rail).

Fonts load from Google Fonts (Fraunces, DM Sans, DM Mono).
