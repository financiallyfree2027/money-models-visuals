# Money Models offer library — what to verify against the book

Examples marked (adapted) are hidden by default in the viewer (toggle at the bottom of the left rail).

## win-your-money-back

# Win your money back — build notes

1. 5 examples, 32 client-view steps: (1) Alex's gym 6-week challenge · Rekha · 7 steps; (2) Origin · offline boot camp · Dave · 5 steps; (3) Agency 90-day sprint · Nikhil · 7 steps; (4) Course "finish it, win it" · Aarav · 7 steps; (5) Product 90-day kit · Priya · 6 steps.
2. Example 1 reuses the 7 screens of REFERENCE-v2 verbatim (`.ig .img` markup updated to tag + text-wrapper children; small copy trims on the WhatsApp screen so it fits at 1280×800). Mechanism (pay up front, 3 behaviour rules, goal, credit back, credit rolls into membership) is the book's gym story; ₹ figures, Chandigarh, names are localisation.
3. Example 2 is marked "(adapted)": it renders the pre-digital, in-person version (counter sign, spoken pitch, paper sheet, wall board, cash-back-as-credit) as the fitness-industry challenge Alex borrowed from. I could not confirm the chapter names a specific mentor/business for the origin; verify and rename `source` if the book gives one. The "12 of 20 won" figure is illustrative, not a book statistic.
4. Examples 3–5 are marked "(adapted)": they apply the chapter's rules (conditions = behaviours that cause the result; full price, no discount; pay back as credit; credit becomes the down payment on continuity; winners become proof) to an agency, an online course and a physical product. All prices, targets, counts and names (Leadflow/Arjun, Ritu, Rootlab) are invented personas, not from the book.
5. `q` lines are paraphrased framework principles attributed "framework · …", not verbatim quotes; the user should replace with book quotes if wanted.
6. Verify against the book: exact conditions Alex used at his gym (attendance / food log / weigh-in), whether the payout was credit only or also cash, and whether the chapter explicitly discusses agency / course / product variants.
7. Scoped CSS (`.wymb-*`) only adds a wall-board row list, tighter WhatsApp spacing for one screen, and signature-line width; shell.html and SPEC.md were not modified.
8. Tested every step of every example with Playwright at 1440×900 and 1280×800 (screenshots in /home/claude/mm/shots). Automated checks flag only the rotated `.stamp` bounding box on the two paper screens — visually no overlap.
9. Currency: ₹ for examples 1, 3, 4, 5; $ for the US-native origin example. Light Hinglish in WhatsApp bubbles only.
10. Helper scripts: /home/claude/mm/shoot.js (sweep + overlap/clip checks) and /home/claude/mm/lint.js (word-limit lint).


## giveaways

# Giveaways — build notes

1. **Examples (4):** ① Alex's gym · free year (US, $, "Megan", 7 steps) ② Gym Launch client · quarterly giveaway (Pune, ₹, "Priyanka", 8 steps, WhatsApp-led) ③ Other industries · dental clinic (Jaipur, ₹, "Arjun", 7 steps) ④ Online course · lifetime access (Thane/Mumbai, ₹, "Neha", 7 steps). 29 steps total; every step tested at 1440×900 and 1280×800 with Playwright (no overlap/clipping; only a harmless −2° signature tilt flagged, same as the reference).
2. **Core mechanic from the book (kept everywhere):** give away one big prize that is your core offer at scale → collect many entrants with minimal friction → announce a single winner publicly → contact every non-winner with a named "runner-up prize" (a discounted/bonused version of the core offer with a real deadline and cap) → follow up repeatedly → ascend paid runner-ups into continuity, with the claim fee used as credit.
3. **From the book (confident):** the free-year-of-membership giveaway at Alex's gym, the "you didn't win the grand prize but you did win a runner-up prize" call, calling every entrant, the prize costing only one membership, the runner-up prize being the money-maker, running giveaways on a repeating cadence, and applying the same play to other business types.
4. **Adapted / not from the book:** every number (prices, entry counts, seat caps, entry numbers, dates), all business and person names, the specific runner-up prizes chosen, "tag/share for extra entries", the free-module-before-the-draw idea (ex 4), and the fee-as-credit ascension at the end of each example (borrowed from the money-model logic, not stated in the chapter as part of Giveaways).
5. **"Where Alex learned it":** I could not confidently place a named mentor/third-party origin story for this chapter, so Example 1 treats Alex's own gym as the origin. If the book opens with a mentor or another business, add it as a new first example and re-label.
6. **Gym Launch example (ex 2)** is labelled "(adapted)": the book says he taught it to gym clients, but the WhatsApp script, 72-hour window, 25 seats and quarterly cadence are my plausible fills.
7. **Dental and online-course examples (ex 3–4)** are "apply it to your business" variants built from the framework; verify whether the chapter names specific industries and swap if it does (e.g. if it uses a restaurant or car-wash, that could replace ex 3).
8. **Persona/currency:** ex 1 kept US-native ($, Sacramento) because the story is Alex's gym; ex 2–4 use Indian personas (₹, light Hinglish in ads/WhatsApp).
9. **Scoped CSS** (prefix `.gv-`): form fields, countdown tiles, SMS-look phone header, live-post block, entry ticket, stat chips, alternate ad gradients, strike-through price. Nothing in shell.html was touched.
10. **Verify against the book:** the exact wording of the runner-up call, whether Alex charged for the runner-up prize (I show a paid, discounted claim) and the claim window he used, and any conversion figures — none are quoted in the `why`/`q` text on purpose.


## decoy-offers

# Decoy offers — build notes

1. **4 examples, 25 steps total**: (1) Alex's gym · free vs paid — Bhavesh, Ahmedabad, 7 steps; (2) Free-picker upsold in week 3 — Sunita, same gym, 6 steps; (3) Agency · free audit vs done-for-you — Rohan, Pune, 6 steps; (4) Course · free masterclass vs live cohort — Priya, Bengaluru, 6 steps.
2. **From the book (core mechanic)**: advertise the free version, then show it side by side with the paid version that has visibly more in it; the free option is real and honoured; most people self-select into paid; free-pickers stay in the funnel and get sold later. Example 1 is the gym "free 6-week challenge vs paid challenge" story as I recall it from the chapter, localised to Ahmedabad (₹12,000).
3. **Adapted / not verbatim**: the exact contents of Alex's free vs paid columns (off-peak slots, no meal plan, no check-ins, no scan) are plausible reconstructions — verify the specific inclusions against the chapter. The "finish all 6 weeks → ₹12,000 back as credit" line on the paid card ties in the gym's win-your-money-back challenge; remove it if the book keeps the two offers separate.
4. **Example 2 (free-picker path)** is built from the framework's point that the decoy captures people who would never have paid — the pro-rated ₹6,000 week-3 upgrade, the wall leaderboard, and the coach's "free mein bhi welcome ho" script are adapted, not quoted.
5. **Examples 3 and 4** (agency audit; info/coaching masterclass) are "how to apply it to other businesses" variants, marked "(adapted)" in `source`. Prices (₹40,000, ₹4,999 → ₹7,999) and numbers (1.9% → 2.6%, 61/100 seats) are illustrative, not book statistics.
6. The `.choice` side-by-side cards appear in every example (ex1 s5, ex2 s1, ex3 s4, ex4 s4), with `.dim` for the decoy and `li.no` for the crossed-out features; the paid card always repeats the decoy's first line so the reader sees "everything on the left, plus more".
7. Scoped CSS is prefixed `.dcy-` (wrapper, caption under the cards, tick mark on the chosen card, slightly tighter card padding). shell.html and SPEC.md were not modified.
8. Tested every step at 1440×900 and 1280×800 with Playwright: no clipping, no overflow, no page errors. Fixes made during testing: doc stamp collided with the header label (shortened label + padding), poster header wrapped mid-word (shortened), signature date wrapped (shortened).
9. No named third-party people, no "Alex said" statistics. Framework quotes in `q` are paraphrased principles attributed "framework · decoy offers / attraction offers / money models", not book quotations.
10. **User should verify**: where Alex first observed the decoy idea (I did not build a separate "learned from a mentor" example because I could not confidently recall one from this chapter — if the book has one, it belongs as example 1), the real gym price and column contents, and whether the book gives a rough free-vs-paid pick ratio to put in `about`.


## buy-x-get-y-free

# buy-x-get-y-free — build notes

1. Five examples, chapter order: (1) Retail · buy 2 get 1 (5 steps), (2) Alex's gym · 6+6 weeks (8 steps), (3) Gym Launch · bring a friend (6 steps), (4) Supplements · buy 3 get 2 (5 steps), (5) Coaching centre · free bundle (6 steps). 30 screens total.
2. Core mechanics from the book, kept faithfully: "free" of a high-value item beats a %-off of the same money; the full-price anchor never moves so renewal is normal; buy 6 get 6 → buy 12 get 12 collects more cash upfront; "bring a friend free" brings a second customer who then gets her own full-price offer; Y should be cheap for you to deliver (extra time, a seat, digital, high-margin product).
3. Example 2 (Alex's gym, 6 weeks + 6 free, upsold to 12 + 12) and example 3 (Gym Launch "buy one, bring a friend free") are the two examples I am most confident are the book's own; both are localised (Bengaluru, Indore) with ₹ prices I chose.
4. Example 1 (retail buy-2-get-1 observed at a supplement/retail counter) and example 4 (Alex's supplement company sold through gyms, buy 3 get 2) are marked "(adapted)": the mechanic and the venue are from the chapter, but the ratio, product, and flow are mine.
5. Example 5 (coaching centre in Jaipur: course at full fee + test series and doubt app free) is the chapter's "apply it to your business" idea, fully adapted — the business type is mine, chosen to show a Y that is digital and near-zero marginal cost.
6. All rupee prices, names (Arjun, Priya, Neha/Kavya, Rohan, Meera/Aarav), gym/shop names, dates and scoreboard numbers are invented; none should be read as book statistics. Every `q` line is a paraphrase of the framework, attributed "framework · buy x get y free", not a verbatim quote.
7. Adapted details to verify against the book: the exact ratios Alex used (6+6 vs other week counts), whether "bring a friend" is described under Gym Launch specifically, and whether the supplement example in the chapter is buy-X-get-Y or belongs to a different offer.
8. Tested with Playwright at 1440×900 and 1280×800, every step of every example plus the ⓘ drawer; one clip found (friend-forward WhatsApp at 1280) and one overlap (stamp over a long kicker on the signed-terms doc) — both fixed. Remaining automated flags are false positives (rotated signature transform, kicker block-box vs stamp), identical to the reference example.
9. Scoped CSS is prefixed `.bxgy-` (free pill, poster line rows, email list, WhatsApp bold line). shell.html and SPEC.md untouched.
10. Copy blocks are ≤ 8 lines each and paste-ready; each carries the one fence that stops the free item leaking (non-transferable / new-member-only / one order per period).


## pay-less-now-or-more-later

# Pay less now, or more later — build notes

1. **4 examples, 23 steps**: Alex's gym (6, Priya · Pune, ₹), Gym Launch licensing (6, Dave · Ohio, $), coaching institute annual fee (6, Meera · Jaipur, ₹, adapted), course app annual-vs-monthly (5, Rohan · Bengaluru, ₹, adapted).
2. **From the book**: the mechanic itself — two ways to pay, lower price in full today vs higher total on a plan; the plan total anchors the pay-in-full price; price-sensitive buyers still say yes via the plan; the business collects more cash upfront from those who can; a pay-in-full *bonus* instead of a deeper discount; both options are a "yes".
3. **Where Alex used it**: examples 1 and 2 (his gym, Gym Launch) follow the book's own settings. All rupee/dollar figures (₹18,000 vs 3×₹7,000; $16,000 vs 4×$5,000) are illustrative, not book quotes — verify against the chapter if you want the real numbers.
4. **Adapted (marked in `source`)**: examples 3 and 4 are "apply it to your business" variants built from the framework — a fee-based service (coaching institute) and a subscription (annual vs monthly). The book's own list of other-industry applications should be checked; swap in its industries if they differ.
5. Every `.choice` step shows pay-in-full vs plan side by side; the plan card is never `.dim` (it is a real option, per the mechanic). In example 3 the client picks the plan so the "switch to pay-in-full later" move can be shown.
6. The "switch offer" (plan buyer clears balance early and keeps the saving) and the "ask again on continuity" steps are framework extrapolations; their `q` lines are tagged "(adapted)".
7. `q` lines are paraphrased principles, not verbatim quotes. Anything tagged "framework · pay less now or more later" without "(adapted)" is close to the chapter's argument; still not a quotation.
8. Where Alex *learned* the offer: I did not reproduce an origin anecdote (mentor/other business) because I am not confident of its details — example 1 opens at his gym instead. If the chapter has one, add it as example 1.
9. Visual QA: all 23 steps screenshotted at 1440×900 and 1280×800 with an automated out-of-canvas / scroll-clip check (none) plus visual review. Fixed: doc stamp brushing long `h5` titles (shortened), signature date line wrapping, WhatsApp scoreboard rows wrapping at the 460px phone height.
10. Scoped CSS: only `.pln-two` (the two-fee tiles on the counter card). shell.html and SPEC.md untouched.


## free-with-consumption

# Free with Consumption — build notes

1. **Examples (4, 25 steps):** ① Alex's gym · free session (US, $, "Kayla", 7 steps — the only example shown by default) ② Origin · counter sample (Dadar mithai shop, ₹, "Meera", 6 steps, adapted) ③ Studio · free class, attended (Bengaluru, ₹, "Ananya", 6 steps, adapted) ④ Agency · live free audit (Jaipur D2C, ₹, "Rohan", 6 steps, adapted). Every step shot with Playwright at 1440×900 and 1280×720; all artefacts ≤ 600×560, no overlap/clipping, no page errors.
2. **Core mechanic (kept in every example):** the first unit is free, but only if it is consumed in a way that leads to the sale — booked slot, attended in person, done with the coach present, eaten at the counter, watched live on a call. Ad → booking with conditions → reminders that drive the show-up → the consumption moment → the pitch at the end → same-day sign-up. Non-consumers (no-shows, passers-by) cost nothing.
3. **From the book (confident):** the principle that free only works when consumed, that the free thing should be consumed with you present so it does the selling, that conditions/appointments turn "claimers" into "consumers", and that Alex applied it at his own gym.
4. **Verify against the chapter for Example 1:** the exact free unit at Alex's gym (I show a coached first session + body scan; the chapter may describe a free week, free consult, free nutrition session or similar), the 48-hour window, 8 slots/week, the "$79 value", the $149/$199 prices, the "founding price valid today" close and the coach/persona names — all of those are plausible fills, not book quotes.
5. **"Where Alex learned it" (Example 2)** is labelled "(adapted — verify origin story against the chapter)": I could not confidently place the chapter's origin story, so I built the free-sample-eaten-at-the-counter retail play (the mechanic the user's brief describes). If the chapter names a mentor or a specific business (e.g. a Costco/sample story, a chiropractor, a supplement shop), replace this example and drop the "(adapted)" tag.
6. **Examples 3–4** are "apply it to your business" variants from the framework (a Gym Launch–style studio free class; an agency free audit done live, never emailed). All names, numbers, prices, slot caps and dates are invented.
7. **Persona/currency:** ex 1 kept US ($, Sacramento, consistent with the other files' Alex's-gym examples); ex 2–4 use Indian personas (₹, light Hinglish in counter talk and WhatsApp).
8. **Scoped CSS** (prefix `.fwc-`): slot picker grid, numbered condition list, iMessage-look phone (`.fwc-sms`, `.fwc-day` date chips), tightened WhatsApp, plan/audit row tables, narrower bill. Nothing in `shell.html` or `SPEC.md` was touched.
9. **Not in shell.html:** `shell.html` does not yet include `<script src="offers/free-with-consumption.js">` — add that line inside the `<!--OFFERS-->` block to make the offer appear in the rail. Testing used copies of the shell in `scratch/free-with-consumption/` (`shell-test.html` = filtered like the real shell; `shell-all.html` = adapted examples un-hidden).
10. **Framework quotes** (`q` lines) are paraphrased principles attributed "framework · free with consumption", not verbatim book quotes; no statistics or named third parties are asserted.


## classic-upsell

# classic-upsell — build notes

1. **4 examples, 24 steps** (section "Upsell"): (1) The classic · fries with that (5, Tyler · US, $), (2) Alex's gym · after the yes (7, Meera · Hyderabad, ₹), (3) Gym Launch · after the licence (6, Ryan · Ohio, $, **adapted**), (4) E-commerce · one-click upsell (6, Ananya · Bengaluru, ₹, **adapted**). The viewer shows examples 1–2 by default.
2. **Mechanic, from the chapter**: the instant the customer says yes, ask for more — the same thing (more units, bigger size, longer term) or the obvious complement — while buying temperature is highest; one question at a time, each after a yes; deliver the add-on so it gets used; consumables give a built-in repeat upsell.
3. **Example 1** is the "would you like fries with that?" fast-food counter the chapter uses to frame the offer (burger → fries → large → drink). Prices, the store name and the cashier are illustrative. I have shipped it unmarked because the framing is the book's; if the chapter only mentions the line in passing rather than telling it as an example, add "(adapted)" to its `source`.
4. **Example 2** is Alex's gym: supplements (the complement) and a longer term (more of the same) sold at the desk right after the 6-week challenge sign-up, plus a Day-40 refill. Localised to Hyderabad; ₹15,000 / ₹6,500 / ₹18,000 are my numbers, not the book's. Verify against the chapter what exactly he upsold at his gym and the cash-per-customer figures he quotes.
5. **Example 3 (adapted)**: Gym Launch closing call with ads-done-with-you and a second-location licence as the two asks. The chapter's own Gym Launch detail (if any) should replace this; all dollar figures are illustrative.
6. **Example 4 (adapted)**: online cart bump (bigger bottle) + post-purchase one-click complement + refill. Pure "apply it to your business" variant; not a story the chapter tells.
7. `q` lines are paraphrased framework principles attributed "framework · classic upsell", not verbatim quotes. No named third-party people or statistics are presented as book facts; all persona names, business names and dates are invented.
8. Things to verify against the book: where the chapter says Alex first learned the classic upsell (mentor vs. observation), the three upsell types as he labels them (I used same-thing-bigger / same-thing-longer / complement / same-thing-again), and any other industries the chapter cites — swap them into examples 3–4 if they differ.
9. Visual QA: Playwright screenshots of all 24 steps at 1440×900 and 1280×720 from `/home/claude/mm/scratch/classic-upsell/` (scratch copy of the shell that loads this file and un-hides adapted examples), with automated clip/overlap/out-of-canvas checks: none. Three phone screens auto-scale to 0.85 at 1280×720, as designed. Drawer checked at both sizes.
10. Scoped CSS is prefixed `.cu-` (menu rows, order lines, kit tiles, cart bump, product row). shell.html and SPEC.md untouched; the real shell's `<!--OFFERS-->` block does not yet list `offers/classic-upsell.js` — add that one script tag when wiring it in.


## menu-upsell

# Menu upsell — build notes

1. **4 examples, 23 steps total** (`section: "Upsell"`): (1) Alex's gym · supplement menu — Meera, Pune, 7 steps; (2) Salon · add-on menu — Ananya, Bengaluru, 5 steps (adapted); (3) Agency · à-la-carte menu — Kabir, Delhi, 6 steps (adapted); (4) Course · post-checkout menu — Sana, Hyderabad, 5 steps (adapted). Only example 1 shows in shell.html by default.
2. **From the book (core mechanic)**: right after the core purchase, hand the customer a menu of add-ons they pick from à la carte; order it deliberately (highest value/price first, so the rest anchors cheaper); mark what you would take ("most people take these") with a reason next to each; no single hard pitch — the customer orders. Example 1 is the gym supplement "prescription" story as I recall it from the chapter, localised (₹12,000 challenge, ₹7,400 of add-ons).
3. **Adapted inside example 1**: the exact supplement list, prices, the intake-sheet questions, and the week-4 refill message are reconstructions from the framework. The "prescription pad" framing (diagnose from an intake, tick what you'd take, one-line reason per item) is how I remember the chapter — verify the wording and whether the book gives a supplement take-rate to put in `about`.
4. **Examples 2–4** are "how to apply it to other businesses" variants, marked "(adapted)" in `source`: a salon chair card (service menu), an agency add-on page (B2B), and a course thank-you page (info product). All prices, conversion numbers (0.9% → 2.6%, ₹1.4L recovered) and take-rates are illustrative, not book statistics.
5. Every example follows the same arc: core purchase locked → diagnosis/line → the menu artefact (ordered, ticked, reasons, "most take these") → the customer's picks → bill/receipt showing the larger ticket → the menu returning later with one new tick (refill / next visit / month 2 / Day 30).
6. New scoped visual: `.mu-menu` (checkbox menu pad with `.row.on` ticks, `<i>` pick pill, `.strip` "most take" line, `.tot`), plus `.mu-web` (menu inside a browser), `.mu-app` (menu inside a phone), `.mu-doc` (stamp clearance on the intake sheet) and `.mu-tight` (denser WhatsApp). All prefixed `.mu-`; shell.html and SPEC.md untouched.
7. Tested every step at 1440×900 and 1280×720 with Playwright from `/home/claude/mm/scratch/menu-upsell/` (test-shell.html = copy of shell.html that loads this file and shows adapted examples): no clipped, overflowing or overlapping text, no page errors. Fix made during testing: the doc stamp overlapped the intake-sheet heading (heading width constrained).
8. shell.html does not yet list `offers/menu-upsell.js` in its `<!--OFFERS-->` block — add that one `<script>` line when the user is ready; the shell's rail heading still says "Attraction offers".
9. No named third-party people, no "Alex said" statistics. `q` lines are paraphrased framework principles attributed "framework · menu upsell / upsell offers", not quotations.
10. **User should verify**: whether the chapter tells a story other than the gym (a restaurant/service menu or a mentor origin) — if so it belongs as example 2 and one adapted example should be dropped; the book's stated ordering rule (highest-first vs. recommended-first); and the exact "what I'd take if I were you" phrasing.


## anchor-upsell

# Anchor upsell — build notes

1. **4 examples, 23 steps total** (`section: "Upsell"`): (1) Alex's gym · most complete first — Kavita, Indore, 6 steps; (2) Gym Launch · done-for-you first — Dan, Columbus OH, 6 steps; (3) Restaurant · chef's counter first — Arjun, Mumbai, 5 steps (adapted); (4) Photographer · signature first — Neha, Jaipur, 6 steps (adapted). The viewer shows examples 1–2 by default and hides 3–4.
2. **From the book (core mechanic)**: present the most expensive, most complete option first; frame it as "most complete", not "most expensive"; some buyers take the anchor (and it must be real and deliverable), most take the target — at a higher price than they would have accepted seeing it alone; the anchor stays available afterwards as an upgrade.
3. **Example 1 (Alex's gym)** is built from my recollection that the chapter uses his gym sales sit-down as the "how I used it" story. The specific tiers (Private ₹1,60,000 vs Semi-Private ₹40,000, the ₹25,000 challenge she came for, "1 in 10 take the anchor", the 30-day upgrade credit) are localised reconstructions, not book figures — verify the real package names, prices and the anchor-take rate.
4. **Example 2 (Gym Launch)** is built on the same recollection for the "how I used it at Gym Launch" story. The done-for-you on-site tier ($60,000) vs the done-with-you programme ($16,000), "2 DFY launches per month", "400+ owners" and the Q4 application question are illustrative. If the chapter does not tell a Gym Launch story, add "(adapted)" to this example's `source` so the viewer hides it.
5. **Where Alex learned it**: I could not confidently recall the chapter's origin story (a mentor / another business), so I did not build one. Example 3 (restaurant menu with the counter on top) stands in as the classic version of the mechanic and is marked "(adapted)". If the book tells a specific origin story, it belongs as example 1 and this restaurant example can be dropped or kept as an "other industry" variant.
6. **Example 4 (wedding photographer)** is a "how to apply it to a service business" variant, marked "(adapted)". Prices (₹6,00,000 vs ₹1,80,000, ₹1,20,000 budget, difference-only upgrade until 60 days out) are illustrative.
7. Every example has the `.choice` step with the anchor card FIRST (left, `.anc-anchor` — gold border/badge, never `.dim`, because the anchor is a real product) and the target second with `.best`; the target repeats the anchor's core value and shows exactly one `li.no` so it reads as complete, not stripped. The anchor reappears as a "not selected" line on every checkout and as an upgrade clause afterwards.
8. Scoped CSS is prefixed `.anc-` (card tightening, gold anchor card, menu rows for the restaurant poster, tighter WhatsApp phone, doc signature). shell.html and SPEC.md were not modified; testing used a copy of the shell in `/home/claude/mm/scratch/anchor-upsell/` (`shell.html` and a filter-disabled `shell-all.html` to see the adapted examples).
9. Tested every step of every example at 1440×900 and 1280×720 with Playwright: no clipped text, no horizontal overflow, no page errors; auto-scale kicks in only for phones at 1280×720 (≥0.79). Google Fonts do not load in the sandbox, so screenshots used the fallback stack — worth one glance with Fraunces/DM Sans loaded. Fix made during testing: `.choice` card `.k` labels shortened so both cards align.
10. No named third-party people and no statistics presented as book quotes; `q` lines are paraphrased principles attributed "framework · anchor upsell / upsell offers". **User should verify**: whether the chapter tells an origin story (see 5), the real gym and Gym Launch tier names/prices, whether the book gives an anchor-take percentage, and whether it prescribes a price multiple between anchor and target (I used 4×, 3.75×, 2.5× and 3.3×).


## rollover-upsell

# Rollover upsell — build notes

1. **4 examples, 25 steps**: Alex's gym (7, Sunil · Pune, ₹), Gym Launch (6, Dave · Ohio, $), skin clinic consult-fee rollover (6, Meera · Jaipur, ₹, adapted), paid workshop → cohort (6, Rohan · Bengaluru, ₹, adapted). `section: "Upsell"`.
2. **From the book (mechanic)**: what the client already paid for the front end counts in full toward the bigger purchase — "the money you paid for the challenge counts toward the year". The upsell feels discounted/free to the client while the business collects the full larger amount; the front-end price is never discounted and the rollover is never called a discount; it is offered right after the front-end purchase and/or at the end of it.
3. **Example 1 (Alex's gym)** follows the chapter's own setting: 6-week challenge fee rolls into the annual membership, asked once at checkout (Day 0) and again at the Day-42 results meeting. Rupee figures (₹15,000 challenge, ₹60,000 annual, ₹45,000 due) are illustrative, not book numbers.
4. **Example 2 (Gym Launch)** follows the chapter's setting (launch fee rolls into the year-long licensing program); the $5,000 / $16,000 / $11,000 figures, the "Day 49" deadline and the 47-member/3.9× launch results are illustrative. Verify the real front-end/back-end products and prices against the chapter.
5. **Adapted (marked in `source`, hidden by default)**: examples 3 and 4 are "apply it to your business" variants built from the framework — a fee-first service (paid consult → treatment package) and education (paid workshop → cohort). If the chapter names other industries/variants, swap these for the book's own.
6. The only "other" chapter examples I could stand behind are the gym and Gym Launch; the task mentioned "others" but I did not reproduce any third-party story I could not confirm. If the chapter opens with a mentor/observed-business anecdote, add it as a new example 1.
7. `q` lines are paraphrased principles, not verbatim quotes. Lines tagged "framework · rollover upsell" without "(adapted)" are close to the chapter's argument; everything in examples 3–4 is tagged "(adapted)".
8. Step artefacts reused from the kit: `.pay` (rollover printed on the receipt as a "− amount" line with "Discount —" left blank), `.say`, `.wa`, `.res`, `.choice` (rollover lives only on the highlighted card; the decoy forfeits it), `.mail`, `.tiles`, `.poster`, `.ig`. One scoped block: `.ro-slide` (a Zoom slide) and `.ro-math` (a 3-row price ladder), plus `.ro-tight` for compact WhatsApp boards. shell.html and SPEC.md untouched.
9. Visual QA: all 25 steps screenshotted at 1440×900 and 1280×720 from `/home/claude/mm/scratch/rollover-upsell/` (test shell copy that loads only this file and keeps adapted examples visible) with an automated out-of-canvas / clipped / overlapping-text check — none. Fix made: shortened example labels and two step names so the header line does not wrap at 1440. At 1280×720 the header line wraps to two lines for every offer in the library (shell behaviour, no overlap).
10. Things to verify against the book: whether Alex asks for the rollover twice (Day 0 and end) or only at the end; the exact Gym Launch front-end product the rollover applied to; whether the chapter pairs the rollover with a deadline ("valid today only") or leaves the credit open.


## payment-plans

# Payment plans — build notes

1. **3 examples, 20 steps**: (1) Alex's gym · the split — Sunita, Indore, ₹, 7 steps (book setting); (2) Sales call · 4-pay — Marcus, Columbus OH, $, 7 steps (adapted); (3) Clinic · financed EMI — Ananya, Hyderabad, ₹, 6 steps (adapted). Only example 1 shows in the viewer by default.
2. **From the book (core mechanic)**: sell the full price first; when the customer says no, don't discount — change the *terms*: same programme split into instalments, plan total equal to or higher than pay-in-full; first payment today; card on file / auto-debit; keep the sale that would otherwise walk. Each example shows the "no" moment, the plan offered side by side with pay-in-full, the checkout, a signed schedule, the reminder before the next debit, and the paid-up moment.
3. **Example 1 fidelity**: the gym is the chapter's setting as I recall it, but the dialogue ("Would it help if we split it up?"), the ₹24,000 vs 3 × ₹9,000 figures, the "plan ends in week 8 of 12" rule and the "sessions pause on a failed debit" rule are my reconstruction of the framework — verify the chapter's own numbers, wording and rules and swap them in.
4. **Adapted (marked in `source`)**: example 2 applies the mechanic to a high-ticket Zoom close in the Gym Launch setting ($16,000 vs 4 × $4,500 = $18,000); example 3 is the financing-partner variant (clinic paid in full today, patient pays a lender monthly). Check whether the chapter tells either of these; if it does, drop "(adapted)" from `source`.
5. **Principles I am fairly confident are in the chapter's argument** (used in `q` lines without "(adapted)"): rescue not opening offer; plan is more, never less; first payment + card on file in the same sitting; finish collecting before finishing delivering. The financing-partner `q` in example 3 step 3 is tagged "(adapted)".
6. `q` lines are paraphrased principles, not verbatim quotes. No named third-party people; all names are personas.
7. Where Alex *learned* the offer: no origin anecdote (mentor / other business) is reproduced because I am not confident of its details. If the chapter opens with one, add it as example 1 and shift the gym example to 2.
8. Visual QA: all 20 steps screenshotted at 1440×900 and 1280×720 from `/home/claude/mm/scratch/payment-plans/` (test copy of shell.html that loads only this offer and shows adapted examples); automated out-of-canvas / clip / overlap check plus visual review. Only flags left are the `.doc` stamp's bounding box vs full-width title rows — visually clear (checked at both sizes).
9. Scoped CSS (`.pp-` prefix): stacked two-speaker exchange (`.pp-talk`), tighter WhatsApp phone (`.pp-tight`), doc/sig tweaks, `.pp-choice` price sizing, and a small financing-app card (`.pp-app`). shell.html and SPEC.md untouched.
10. To ship: add `<script src="offers/payment-plans.js"></script>` inside the `<!--OFFERS-->` block of shell.html (not done here, per instructions).


## free-trials

# Free trials — build notes

1. **4 examples, 29 steps** (section "Downsell"): (1) Alex's gym · trial downsell — Manish, Noida, 8 steps; (2) Software · card-on-file trial — Neha, Bengaluru, 7 steps; (3) Gym Launch · cold-lead trial — Kavya, Kochi, 7 steps; (4) Tuition · free two weeks — Sunita, Lucknow, 7 steps. Every example shows the same spine: the "no" → the trial offer → card/mandate on file at ₹0 → the full experience during the trial (scoreboard/usage touchpoints) → a written warning before the charge → a scripted either/or conversion → the charge/receipt.
2. **From the book (kept in every example):** the trial is a downsell offered only after a refusal; card on file with auto-conversion (opt-out, not opt-in); a defined end date; conditions the client must meet for the trial to stay free, with a fee if they don't ("free trial with penalty"); deliver the full product during the trial, not a lite version; end the trial with a sales conversation, not an expiry.
3. **Example 1 (Alex's gym)** is the only example whose `source` is not marked "(adapted)": it follows the chapter's gym story as I recall it — the paid challenge is refused, a free trial with card and attendance condition is offered, membership starts by itself. ₹ figures (₹15,000 challenge, ₹3,000 penalty, ₹3,500/mo), the 14-day length, the three conditions, Noida, and the names are localisation, not book facts.
4. **Example 2 (software)** is marked "(adapted)": the chapter cites software free trials as the classic card-on-file/auto-convert form, but does not (to my recollection) tell a specific product story. Billo, prices, the "3 invoices → +7 days" extension and the annual switch at conversion are mine; the `q` on step 6 is tagged "(adapted)".
5. **Example 3 (Gym Launch client gyms)** is marked "(adapted)": the book says he taught the trial-with-penalty to gyms he coached; the WhatsApp downsell to a lead who went quiet, the 7-day/3-class rule, ₹1,500 penalty and ₹2,499/mo are plausible fills.
6. **Example 4 (tuition centre)** is a pure "apply it to your business" variant, marked "(adapted)"; the UPI autopay mandate stands in for card-on-file, which is the honest Indian equivalent.
7. **Verify against the book:** the exact length and conditions of Alex's gym trial, the penalty amount/mechanic he used, whether the chapter gives conversion figures for card vs no-card trials (I only say "several times better", no numbers), and whether the chapter names specific software companies or other industries — if it does, swap those in for examples 2 and 4.
8. Because the viewer hides adapted examples, the live shell will show only example 1 unless the "(adapted)" marker is removed from 2–4 after verification. `q` lines are paraphrased framework principles ("framework · free trials / downsell offers"), not quotations.
9. **Visual QA:** every step of every example screenshotted with Playwright at 1440×900 and 1280×720 from `/home/claude/mm/scratch/free-trials/` (a copy of the shell that loads this file and keeps adapted examples visible — shell.html and SPEC.md were not modified). No clipping, no page errors, headline never exceeds 2 lines; the automated overlap check flags only the rotated `.stamp` bounding box against the block-level kicker/h5 on the three paper docs — visually clear (kickers shortened to keep distance). The ⓘ drawer was tested at 1280×720.
10. Scoped CSS uses the `.ft-` prefix: poster rule list, tighter WhatsApp spacing, doc/signature sizing, an exit-modal box inside the `.web` window, email highlight boxes, and a struck-through anchor price on `.choice` cards.


## feature-downsells

# Feature downsells — build notes

1. **4 examples, 25 steps**: (1) Alex's gym · stripped — Sunita, Ahmedabad, ₹, 7 steps; (2) Gym Launch · DFY→DIY — Dave, Ohio, $, 6 steps (adapted); (3) Agency · scope and speed — Nikhil, Pune, ₹, 6 steps (adapted); (4) Course · self-paced version — Meera, Jaipur, ₹, 6 steps (adapted). `section: "Downsell"`.
2. **From the book (core mechanic)**: when price is the objection, don't discount the same product — remove features (your 1:1 time, bonuses, speed/turnaround, access, done-for-you labour, quantity) until the price fits; the customer still buys; the full product keeps its price integrity for everyone who paid it; each removed feature becomes a later upsell. Example 1 is the gym setting as I recall the chapter, localised (₹36,000 full → ₹15,000 group-only; 1:1 time removed first).
3. **Adapted / not verbatim**: the gym's itemised prices (₹18,000 / 6,000 / 3,000 / 3,000 / 6,000) and the week-4 / week-8 add-back timeline are reconstructions. Verify the real programme contents and price against the chapter.
4. **Example 2 (Gym Launch)** is marked "(adapted)": I am confident the chapter frames done-for-you → do-it-yourself as a feature downsell, but not confident Gym Launch is told as a story there with these inclusions ($16,000 → $4,000; ads managed, on-site training, 1:1 coach removed). If the book tells it, remove "(adapted)" from `source` so the viewer shows it.
5. **Examples 3 and 4** are "apply it to your business" variants built from the framework's levers (less people/scope, less speed, less access, fewer bonuses, less quantity). All prices and numbers are illustrative.
6. Every example has one `.choice` step (ex1 s4, ex2 s3, ex3 s3, ex4 s3): full card plain (never `.dim` — it is the real product), stripped card `.best` with a "Fits ₹/$" badge and `li.no` for removed features; identical kept lines appear word for word in both columns. Checkouts show removed lines struck through with their prices ("Discount: —").
7. Scoped CSS prefixed `.fd-` (choice wrapper/caption, doc price column, struck checkout rows, tight WhatsApp, proposal rows). shell.html and SPEC.md untouched; a script tag for `offers/feature-downsells.js` still needs adding to shell.html by the owner.
8. `q` lines are paraphrased principles attributed "framework · feature downsells / downsell offers", not quotations. No named third-party people, no statistics presented as book figures.
9. Visual QA: all 25 steps × 2 viewports (1440×900, 1280×720) screenshotted via Playwright from `/home/claude/mm/scratch/feature-downsells/` (test copy of shell with the adapted-filter disabled so hidden examples could be checked) with an automated out-of-canvas / clip / text-overlap check — none — plus visual review of contact sheets and the ⓘ drawer. No page errors.
10. **User should verify**: whether the chapter has a "where Alex learned it" origin story (none built — I could not recall one confidently; if present it belongs as example 1), the real gym programme features/prices, whether Gym Launch DIY is told in the chapter, and the chapter's own list of what to remove (time, bonuses, speed, done-for-you) in case an item is missing from the `copy` blocks.


## continuity-bonus

# Continuity bonus — build notes

1. **4 examples, 24 steps**: Alex's gym join-and-get (7, Sunita · Indore, ₹), Gym Launch licence bonus (6, Marcus · Ohio, $), paid community with the course free (6, Kavya · Hyderabad, ₹, adapted), local car-wash plan (5, Imran · Lucknow, ₹, adapted). `section: "Continuity"`.
2. **From the book (mechanic)**: attach a one-time bonus to the recurring commitment — price never drops, the bonus is what makes "today" the moment; bonuses are things you already sell (high perceived value, low cost); deliver the sign-up bonus fast; add milestone ("stay") bonuses timed just before the usual churn points so cancelling forfeits something named; the last milestone bonus doubles as a referral or renewal hook.
3. **Where Alex used it**: example 1 (his gym: membership offered at the challenge weigh-in with free PT/supplements/gear, plus month-3/6/12 unlocks) and example 2 (Gym Launch: monthly licence with the first launch built free for signing on the call, plus day-90/month-6/month-12 unlocks) follow the chapter's own settings. **All figures are illustrative** (₹3,500/mo, ₹10,300 stack, $1,000/mo licence, $4,000 build, event tickets, the exact bonus items and milestone months) — verify against the chapter and swap in the book's real bonuses if they differ.
4. **Adapted (marked in `source`, hidden by default in the shell)**: examples 3 and 4 apply the framework to an info/community business and a local service. The two-plan card in example 3 (monthly at ₹1,299 without bonuses vs 12-month at ₹999 with bonuses) is a framework extrapolation; if the chapter says "never pair the bonus with a lower price", drop the ₹1,299/₹999 gap and make both plans the same price.
5. **What is shown per example**: the moment of the offer (say/poster/ad/order page), the sign-up (form + autopay/subscription checkout with ₹0/$0 bonus lines), the bonus arriving (WhatsApp/email within days), and 1–2 milestone touchpoints (month 3 / day 90, month 6, month 12) with a visible "next unlock".
6. **Not reproduced**: any origin anecdote (where Alex first saw a continuity bonus — another business, a mentor). I could not stand behind its details, so example 1 opens at his gym. If the chapter tells one, add it as example 1.
7. `q` lines are paraphrased principles, not quotations. Adapted examples tag theirs "(adapted)". Two `q` lines reference the section intro ("framework · continuity offers").
8. Persona names, coaches (Rahul, Jake, Priya, Neha, Faiz) and all client results (68 sessions, 61 members, 23 washes) are invented for the personas — none are book statistics.
9. Visual QA: all 24 steps screenshotted at 1440×900 and 1280×720 from `/home/claude/mm/scratch/continuity-bonus/` (test copy of the shell that loads only this file and shows adapted examples) with an automated out-of-canvas / clipped / text-overlap check (none) plus visual review, including the ⓘ drawer. Fixed: doc stamp brushing the header (shorter stamp text, header max-width), WhatsApp tracker rows wrapping.
10. Scoped CSS: `.cb-stack` (value stack with struck prices), `.cb-miles` (milestone strip), plus `.cb-poster/.cb-doc/.cb-tight/.cb-web/.cb-mail/.cb-note` size tweaks. shell.html and SPEC.md untouched; the offer is **not yet listed in shell.html's `<!--OFFERS-->` block** — add `<script src="offers/continuity-bonus.js"></script>` there when wiring it in.


## continuity-discounts

# Continuity discounts — build notes

1. **4 examples, 25 steps**: Alex's gym · annual rate (7, Sameer · Indore, ₹), Alex's gym · rate lock (6, Dave · US, $), App · annual vs monthly (6, Rohan · Bengaluru, ₹, adapted), Agency · 12-month retainer rate (6, Meera · Jaipur, ₹, adapted). `section: "Continuity"`.
2. **From the chapter (mechanic)**: a lower recurring rate in exchange for a longer commitment or prepayment — month-to-month vs 12-month agreement, prepay the year for the cheapest rate; shown as a choice where the longer option is plainly the deal; rate locks / grandfathered prices that keep members from lapsing. Every `.choice` step is a short-expensive vs long-cheap card pair.
3. **Example 1** is the chapter's gym setting localised: ₹3,000 monthly → ₹2,000 on 12 months → ₹20,000 prepaid (2 months free), then a month-11 renewal at the locked rate while new members pay ₹3,500. All rupee figures are illustrative, not book numbers.
4. **Example 2** is the rate-lock / grandfathered-price framing at Alex's gym, US-native: walk-in rate rises $99 → $129, existing members keep $99 while they never lapse, or sign 12 months before the rise for $89 locked at every renewal. I am confident of the framing, less of the specific story — `source` says "verify the story's details". If the chapter tells it differently (or not at the gym), edit the source line or mark it "(adapted)".
5. **Adapted (marked in `source`)**: examples 3 (subscription app, annual toggle + price lock) and 4 (agency retainer, rolling vs 12-month vs quarterly prepay). Built from the framework; the viewer hides them by default.
6. Where Alex *learned* the offer: I did not reproduce a mentor / other-business origin anecdote because I could not stand behind its details. If the chapter opens with one, add it as example 1.
7. `q` lines are paraphrased principles, not quotations; those on adapted examples are tagged "(adapted)". Two "framework · money models" lines are reused from other offer files for consistency.
8. Visual QA: all 25 steps screenshotted at 1440×900 and 1280×720 (`/home/claude/mm/scratch/continuity-discounts/shoot.js`, test shell `test-shell.html` that loads only this offer and keeps adapted examples) with automated outside-canvas / clipped / text-overlap checks (none remaining) plus visual review. Fixed: doc stamp brushing long headings (headings width-capped), poster headline wrap, WhatsApp scoreboard rows wrapping.
9. Scoped CSS is prefixed `.cd-` (rate rows on the proposal, pricing toggle/plan tiles, tighter doc/WhatsApp/poster). shell.html and SPEC.md untouched — **add `<script src="offers/continuity-discounts.js"></script>` inside the `<!--OFFERS-->` block of shell.html** to show it in the viewer.
10. Verify against the book: the three-tier gym ladder in ex 1, the "lapse = new-member rate" clause (my wording of how a lock is enforced), and whether the chapter's discount-for-commitment stories include any non-gym business.


## waived-fee

# Waived fee — build notes

1. **3 examples, 20 steps**: Alex's gym · fee waived for signing 12 months (7, Arjun · Pune, ₹, book), fee credited back for staying 6 months (7, Dave · Ohio, $, adapted), agency onboarding fee waived on a 12-month retainer (6, Nikhil · Pune, ₹, adapted). Only example 1 is shown by default in the viewer.
2. **From the book (example 1)**: the mechanic as the chapter frames it — charge a real setup/enrolment/initiation fee, waive it in exchange for the continuity commitment; the fee makes the recurring plan feel like the win and gives a reason to commit today; the non-committer pays the fee (cash now), the committer pays in months (retention) — both are a yes; waive the fee, never the recurring price.
3. **Illustrative, not book quotes**: ₹2,500/mo, ₹5,000 fee, 12-month term, gym name, staff names, dates, visit counts. The chapter's own dollar figures (if any) should be swapped in.
4. **Adapted (marked in `source`)**: example 2 is the "waive it for staying" variant (fee charged on month-to-month, credited back at month 6 if no cancel/freeze, then used to convert him to 12 months). The chapter frames waive-for-staying as a variant; this specific gym story is mine. Example 3 applies the framework to a B2B onboarding/implementation fee — invented business, not a chapter story.
5. **Framework extrapolations inside example 1 to verify**: the early-exit claw-back ("leave before month 12 → the waived fee becomes payable") and the month-11 renewal hook ("renew on time → fee stays waived; lapse and rejoin → fee applies"). Both follow the chapter's logic but I am not certain the chapter states them; drop steps 04's exit clause / step 07 if it does not.
6. Where Alex *learned* it: I did not reproduce an origin anecdote (big-box gyms / a mentor) because I am not confident of its details — example 1 opens at his gym instead. If the chapter tells one, add it as example 1 and shift the others.
7. `q` lines are paraphrased principles, not verbatim quotes. Lines tagged "framework · waived fee" without "(adapted)" are close to the chapter's argument; adapted examples tag every `q` "(adapted)".
8. Artefacts per example follow the brief: price sheet with the fee on it → pitch → two-card choice → signed agreement (fee, waiver, condition on one page) → first billing showing the fee charged and waived → a continuity touch (month-2 debit / month-4 streak / month-1 build) → renewal or credit conversion.
9. Visual QA: all 20 steps shot at 1440×900 and 1280×720 with an automated overflow/clip/size check (none; all artefacts ≤ 600×560 natural) plus visual review of every screen and the ⓘ drawer. Fixed: `.doc` stamp brushing the eyebrow line (shortened labels + `.wf-doc .k` padding). Test harness in /home/claude/mm/scratch/waived-fee/ (copy of the shell with the adapted-filter disabled so all examples could be checked).
10. Scoped CSS prefix `.wf-` only. shell.html and SPEC.md untouched — shell.html still needs `<script src="offers/waived-fee.js"></script>` added to its OFFERS block to show this offer.


