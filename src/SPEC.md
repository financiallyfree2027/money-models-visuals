# Money Models Offer Library — build spec for one offer

You are building ONE offer's data file for a visual library based on Alex Hormozi's **$100M Money Models** (2025) — Attraction, Upsell, Downsell and Continuity offers. The user owns the book; this library is purely visual — it shows **what the client actually receives** at each step (ad, page, checkout, WhatsApp, paper, in-person line…) and an ⓘ drawer explains *why* it is sent. The person using this wants to **copy the offer into their own business quickly**.

## Files
- `shell.html` — the viewer. Do NOT edit it. Open it as `file://…/shell.html?offer=<slug>&ex=<n>&step=<n>` to test.
- `offers/_reference-example.js` — the exact data format. Copy its structure.
- Your output: `offers/<slug>.js` — pushes ONE object into `window.OFFERS`. Self-contained; no external images; only inline HTML using the shared CSS kit (below) plus optional scoped CSS in the `css` field.

## Data shape
```
{ slug, name, section, css?, examples:[ { label, source, client, about, copy, steps:[ { k, t, ch, when?, html, why:[[title,text]…], q?:[quote, attribution] } ] } ] }
```
- `section` = one of "Attraction", "Upsell", "Downsell", "Continuity" (the book's section this offer belongs to).
- `label` ≤ 5 words (shown next to the numbered tab). `source` = where it comes from: "Learned from his mentor …", "Alex's gym", "Gym Launch clients", "Observed at …", etc.
- `client` = first name of the person receiving (use an Indian persona for localised examples; keep the original if the book's example is clearly US-specific — either is fine, but say which in `about`).
- `copy` = the offer as plain text in ≤ 8 lines, ready to paste elsewhere: headline, price, mechanism, conditions, payout/terms. This is the "copy the offer" deliverable — make it precise.
- Each example: **5–8 steps**, strictly in chronological client order. Each step = ONE artefact the client sees. No explanatory text on the artefact; put every explanation in `why` (2–3 bullets, ≤ 30 words each) and one `q` line (framework principle, ≤ 30 words, attributed "framework · <chapter>").
- `k` = 1–3 word step name; `t` = ≤ 7 word headline; `ch` = channel; `when` = "Day −3", "Day 0", "Week 2" etc.

## Examples to cover
Mark each example's `source` with "(adapted)" whenever it is NOT a story the chapter itself tells — the viewer hides adapted examples by default, so only book-told examples are shown. Prefer fewer, truthful examples over many invented ones. If you can only stand behind one book example, ship one.

Use **every distinct example the book gives for this offer**, in the order the chapter tells them: typically (1) where Alex learned it / observed it (a mentor, another business, a story) and (2) how he used it himself (his gym, Gym Launch, portfolio companies), plus any additional variants (other industries, "how to apply it to your business"). 2–5 examples is expected. Minimum 2.
Be honest about fidelity: if you are confident a detail is from the book, keep it; if you are filling from the framework, keep it plausible and mark the example's `source` with "(adapted)". Never invent named third-party people or precise statistics that sound like book quotes. The user will verify against the book.

## Visual kit (already in shell.html — reuse, don't restyle)
Wrap phone screens as: `<div class="phone"><div class="screen"><div class="notch"><i></i></div> …app… </div></div>`
- `.ig` Instagram/Facebook ad (header `.h` `.av` `.nm` `.sp`; image `.img` with `.tag` at top and a `<div>` holding `.big` + `.sm` at bottom; `.cta`; `.cap`). Put the `.tag` and the text block as two direct children of `.img` — it uses space-between, so they never overlap.
- `.wa` WhatsApp inside a phone (`.h` with `.av`, `.body` with `.bub` / `.bub.me`, `.tm` timestamps, `.board` scoreboards with `.r` rows and `.pips`).
- `.web` browser window (`.bar` + `.url`, `.body` with `.eyebrow`, `h5` (use `<em>` for green italic), `.rules` grid of `.rule`, `.payout`, `.btn`).
- `.pay` checkout (`.h`, `.body` with `.row`, `.row.tot`, `.note`, `.go`, `.disc`).
- `.doc` paper contract/form (`.k`, `h5`, `.chk` rows with `<div class="b"></div>` tick, `.sig` signature, `.stamp`).
- `.res` result/hero card (`.top2` with `.k`, `h5`, `p`; `.body` with `.kv` tiles and `.credit`).
- `.choice` two cards `.ch` (`.best` highlighted, `.dim` for the decoy; `.badge`, `.k`, `.p` price with `<small>`/`<s>` strike, `ul li` (`li.no` for missing features), `.cr`, `.sub`).
- `.poster` physical sign/flyer/counter card (`.k`, `h5`, `.big`, `p`, `.fine`).
- `.mail` email (`.h` with `.s` subject and `.f` from; `.body`; `.cta`).
- `.tiles` three `.tile` stat tiles (`b` number, `span` label; `.bad` red).
- `.say` a line said in person (`.who` avatar+name+role, then `<q>` with `<em>`).
CSS vars: `--green --green-d --green-l --green-xl --coral --gold --gold-l --ink --dim --mute --line`. Fonts: `--serif --sans --mono`.
Keep every artefact ≤ 600px wide and ≤ 560px tall so it fits the canvas. Prefer the phone for anything sent to a phone, `.say` for anything said face-to-face, `.poster` for anything on a wall/counter.

## Quality bar
- Every screen must render with **no overlapping or clipped text** at 1440×900 and at 1280×720. The shell auto-scales any artefact to fit the canvas, so never fix a phone's height — let content size it; keep artefacts ≤ 600px wide. Test with Playwright (`/opt/pw-browsers/chromium` via `require('playwright')`, already installed under /home/claude/mm/node_modules — run from /home/claude/mm) and LOOK at the screenshots of every step of every example (use `?offer=&ex=&step=` URLs). Fix, re-shoot, repeat.
- Currency: ₹ for Indian personas, $ for US-native examples. Hinglish is welcome in ad/WhatsApp copy for Indian personas (light touch, like "Or paisa wapas").
- No emojis in headings; a couple inside WhatsApp bubbles is fine.
- Finish by writing a 10-line summary in `offers/<slug>.NOTES.md`: examples covered, what is from the book vs adapted, anything the user should verify.
