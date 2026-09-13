// Classic Upsell — $100M Money Models, Section III (Upsell Offers), chapter "Classic Upsell"
// The moment the customer says yes, offer them more: the same thing (more of it, bigger, longer)
// or the obvious complement — while buying temperature is highest.
// Examples 1–2 follow the chapter's own settings (the fast-food counter, Alex's gym).
// Examples 3–4 are marked "(adapted)" in `source`: framework applications, not stories the chapter tells.
window.OFFERS.push({
  slug: "classic-upsell",
  name: "Classic upsell",
  section: "Upsell",
  css: `
.cu-menu{text-align:left;margin:14px 0 0}
.cu-menu .r{display:flex;justify-content:space-between;align-items:baseline;padding:7px 2px;border-top:1px dashed var(--line);font-size:13.5px}
.cu-menu .r:first-child{border-top:0}
.cu-menu .r b{font-family:var(--mono);font-size:12.5px;color:var(--green-d)}
.cu-menu .r small{color:var(--mute);font-size:11px;margin-left:6px}
.cu-menu .r.hi{background:var(--green-xl);border-radius:6px;padding:7px 8px;border-top:0}
.cu-order{font-family:var(--mono);font-size:12.5px}
.cu-order .l{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--line);color:var(--dim)}
.cu-order .l.new{color:var(--green-d);font-weight:600}
.cu-order .l.new::before{content:"+ ";}
.cu-order .tot{display:flex;justify-content:space-between;padding:12px 0 0;font-size:16px;font-weight:600;color:var(--ink)}
.cu-kit{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:14px 0 6px}
.cu-kit div{border:1px solid var(--line);border-radius:10px;padding:10px 6px;font-size:11.5px;color:var(--dim)}
.cu-kit div b{display:block;font-family:var(--serif);font-size:15px;color:var(--ink);margin-bottom:3px}
.cu-poster h5{font-size:30px}
.cu-poster .big{font-size:44px;margin:8px 0 2px}
.cu-web .body{padding:20px 24px}
.cu-web h5{font-size:22px}
.cu-web .prod{display:flex;gap:14px;align-items:center;margin-bottom:12px}
.cu-web .prod .im{width:70px;height:70px;border-radius:10px;background:linear-gradient(160deg,#173D2C,#2E9E6E);flex:none}
.cu-web .prod .nm{font-weight:600;font-size:14px}
.cu-web .prod .pr{font-family:var(--serif);font-size:20px;color:var(--green-d)}
.cu-web .bump{border:2px dashed var(--green);background:var(--green-xl);border-radius:10px;padding:12px 14px;margin:12px 0;font-size:13px;display:flex;gap:12px;align-items:flex-start}
.cu-web .bump .cb{width:20px;height:20px;border:2px solid var(--green);border-radius:5px;flex:none;background:var(--green);position:relative}
.cu-web .bump .cb::after{content:"";position:absolute;left:5px;top:2px;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}
.cu-web .bump b{display:block;margin-bottom:2px}
.cu-web .bump small{color:var(--dim);display:block;line-height:1.4}
.cu-web .btn{margin-top:14px}
.cu-web .skip{text-align:center;font-size:11.5px;color:var(--mute);margin-top:8px;text-decoration:underline}
.cu-tight .wa .body{gap:6px;padding:9px 8px}
.cu-tight .bub{padding:6px 9px}
.cu-say q{font-size:18.5px}
.cu-doc h5{font-size:22px}
.cu-doc .chk{padding:7px 0}
`,
  examples: [

    /* ───────────────────────── 1 · THE CLASSIC — "would you like fries with that?" ───────────────────────── */
    {
      label: "The classic · fries with that",
      source: "The fast-food counter the chapter uses to frame the offer · US persona kept",
      client: "Tyler",
      about: "Tyler, 24, orders a $5.49 cheeseburger at a fast-food counter. Three questions later he pays $10.77. Nothing was pushed; each question was asked the second after a yes. US-native, kept in dollars.",
      copy: `CLASSIC UPSELL — the fast-food script
Base: what they asked for (cheeseburger $5.49).
Ask 1, the complement: "Would you like fries with that?" (+$2.49)
Ask 2, the same thing bigger: "Make it a large for 80 cents more?" (+$0.80)
Ask 3, the next complement: "And a drink?" (+$1.99 → $10.77 total)
Rules: ask right after the yes · one question at a time · never before they've said yes to the first thing.`,
      steps: [
        {
          k: "The board", t: "He came in for one thing.", ch: "Menu board · above the counter", when: "12:10 PM",
          html: `<div class="poster cu-poster">
            <div class="k">Burger Barn · order here</div>
            <h5>Cheeseburger <em>$5.49</em></h5>
            <div class="cu-menu">
              <div class="r"><span>Cheeseburger</span><b>$5.49</b></div>
              <div class="r"><span>Fries <small>regular</small></span><b>$2.49</b></div>
              <div class="r"><span>Fries <small>large</small></span><b>$3.29</b></div>
              <div class="r"><span>Drink <small>medium</small></span><b>$1.99</b></div>
            </div>
            <div class="fine">Order at the counter · pay at the register</div>
          </div>`,
          why: [
            ["The base is the thing they came for", "Nobody walks in for fries. The cheeseburger is the attraction; everything else is sold after it."],
            ["Every add-on is priced small", "$2.49, $0.80, $1.99. Each ask is a fraction of what he has already decided to spend."],
            ["No combo on the board", "The meal is not sold as a bundle. It is built one yes at a time, which is why the script exists."]
          ],
          q: ["The best time to sell someone something is right after they have bought something. Their wallet is already open.", "framework · classic upsell"]
        },
        {
          k: "Fries with that", t: "The question, one second after yes.", ch: "In person · at the register", when: "12:11 PM",
          html: `<div class="say cu-say">
            <div class="who"><div class="av">J</div><div><b>Jess · cashier</b><small>Burger Barn · register 2</small></div></div>
            <q>One cheeseburger, got it. <em>Would you like fries with that?</em></q>
          </div>`,
          why: [
            ["Ask immediately", "The gap between “got it” and “fries with that” is under a second. Buying temperature peaks at the yes and cools from there."],
            ["The obvious complement", "Fries go with a burger. The customer does not need to be persuaded, only asked."],
            ["A question, not a pitch", "Six words. No features, no benefits. A low-effort yes for a small amount of money."]
          ],
          q: ["Sell the thing that goes with the thing. The complement needs no explanation because they already wanted it.", "framework · classic upsell"]
        },
        {
          k: "Make it large", t: "Same thing, bigger, for 80 cents.", ch: "In person · at the register", when: "12:11 PM",
          html: `<div class="say cu-say">
            <div class="who"><div class="av">J</div><div><b>Jess · cashier</b><small>Burger Barn · register 2</small></div></div>
            <q>Great. <em>Make it a large for 80 cents more?</em></q>
          </div>`,
          why: [
            ["More of the same", "Not a new product — the one he just said yes to, in a bigger size. The easiest upsell there is."],
            ["Price the difference, not the item", "“80 cents more” — never “$3.29”. He compares the delta to a yes he has already given."],
            ["Stack on the last yes", "Fries → large fries. Each ask builds on the previous answer, so the momentum never has to restart."]
          ],
          q: ["The same thing in a bigger size is the lowest-friction upsell: no new decision, only a bigger one.", "framework · classic upsell"]
        },
        {
          k: "Order screen", t: "The order builds in front of him.", ch: "Customer display · at the register", when: "12:11 PM",
          html: `<div class="web cu-web" style="width:420px">
            <div class="bar"><i></i><i></i><i></i><div class="url">register 2 · your order</div></div>
            <div class="body">
              <div class="eyebrow">Burger Barn · order #214</div>
              <div class="cu-order">
                <div class="l"><span>Cheeseburger</span><span>$5.49</span></div>
                <div class="l new"><span>Fries · large</span><span>$3.29</span></div>
                <div class="l new"><span>Drink · medium</span><span>$1.99</span></div>
                <div class="tot"><span>Total</span><span>$10.77</span></div>
              </div>
              <div style="font-size:12px;color:var(--mute);margin-top:10px">“And a drink?” — yes. Third question, third line.</div>
            </div></div>`,
          why: [
            ["The third ask is another complement", "Burger, fries, then drink. Each is the next obvious thing, asked only after the previous yes."],
            ["Nothing was hidden", "He watches every line appear. Upsells that surprise people at the receipt create refunds; visible ones create habits."],
            ["Three asks, three yeses", "One-question upsells convert because the customer never has to weigh a bundle. They only ever answer yes or no to one small thing."]
          ],
          q: ["Ask for the next thing, then the next. One question at a time, each one after a yes.", "framework · classic upsell"]
        },
        {
          k: "The receipt", t: "$5.49 became $10.77.", ch: "Receipt · at the register", when: "12:12 PM",
          html: `<div class="pay">
            <div class="h"><span>Burger Barn · register 2</span><b>ORDER #214</b></div>
            <div class="body">
              <div class="row"><span>Cheeseburger</span><span>$5.49</span></div>
              <div class="row"><span>Fries · large</span><span>$3.29</span></div>
              <div class="row"><span>Drink · medium</span><span>$1.99</span></div>
              <div class="row tot"><span>Paid</span><span>$10.77</span></div>
              <div class="note"><b>Came in for:</b> one cheeseburger, $5.49. <b>Left with:</b> a meal, $10.77. Three questions, fourteen words.</div>
              <div class="go">Paid · card</div>
              <div class="disc">Order ready at the pickup counter</div>
            </div></div>`,
          why: [
            ["Nearly double the cash per customer", "$5.49 → $10.77 with zero extra marketing spend. The upsell is pure margin on a customer already acquired."],
            ["High-margin add-ons", "Fries and drinks cost cents to make. The base item gets them in; the upsells are where the profit lives."],
            ["Ask everyone, every time", "The cashier does not decide who looks like a fries person. The script is asked of every customer, and the percentage does the rest."]
          ],
          q: ["The cheapest customer to sell is the one you just sold. Every upsell is profit on an acquisition cost you already paid.", "framework · classic upsell"]
        }
      ]
    },

    /* ───────────────────────── 2 · ALEX'S GYM — right after the challenge yes (localised) ───────────────────────── */
    {
      label: "Alex's gym · after the yes",
      source: "Alex's own gym, as told in the book · localised to Hyderabad",
      client: "Meera",
      about: "Meera, 34, Jubilee Hills. Has just paid ₹15,000 for the 6-week challenge. Before she leaves the desk she is offered the supplement kit (the complement) and a longer term (more of the same). Indian persona; mechanism as in the book, prices illustrative.",
      copy: `CLASSIC UPSELL — right after the challenge "yes"
Base: 6-Week Challenge, ₹15,000, paid at the desk.
Upsell 1, the complement: Starter Kit (whey 2 kg + multivitamin + shaker) ₹6,500. "Everyone who wins is on this from day one."
Upsell 2, more of the same: lock 6 months after the challenge at ₹3,000/mo (₹18,000 today) vs ₹3,500/mo later.
Both asked in person, same sitting, before she leaves the desk. One updated bill.
Upsell 3, the same thing again: kit refill ₹4,500 on WhatsApp, Day 40, when the tub runs out.`,
      steps: [
        {
          k: "The yes", t: "She has just paid for the challenge.", ch: "Razorpay · at the front desk", when: "Day 0 · 6:40 PM",
          html: `<div class="pay">
            <div class="h"><span>Forge Fitness · Jubilee Hills</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Challenge</span><span>₹15,000</span></div>
              <div class="row"><span>Diet chart + accountability coach</span><span>included</span></div>
              <div class="row tot"><span>Paid</span><span>₹15,000</span></div>
              <div class="note"><b>Batch starts Monday</b> · Mon / Wed / Fri, 6:30 AM · Coach Arjun</div>
              <div class="go">Payment successful ✓</div>
              <div class="disc">UPI · 6:40 PM · receipt sent on WhatsApp</div>
            </div></div>`,
          why: [
            ["This is the moment", "Payment just cleared. She is the most committed she will ever be to the goal. Everything after this screen happens in the next four minutes."],
            ["The base sale is the attraction offer", "The challenge got her in the door at a thin margin. The money model starts now, not on the ad."],
            ["Do not let her leave yet", "The upsell happens at the same desk, in the same sitting. Tomorrow she is a phone call; today she is a customer holding her wallet."]
          ],
          q: ["A customer who has just bought is in a buying state. Stop selling at the first yes and you leave the second one on the table.", "framework · classic upsell"]
        },
        {
          k: "The kit", t: "The complement, said out loud.", ch: "In person · at the front desk", when: "Day 0 · 6:41 PM",
          html: `<div class="say cu-say">
            <div class="who"><div class="av">A</div><div><b>Coach Arjun</b><small>Forge Fitness · front desk</small></div></div>
            <q>Meera, you're in. One thing before you go — everyone who hits 7 kg in this batch is on protein and a multivitamin from day one, not week three. <em>This is the six-week kit, ₹6,500. Shall I add it to the same bill so you start Monday with everything?</em></q>
          </div>`,
          why: [
            ["The complement helps the result she just bought", "Protein and vitamins make the challenge work better. The upsell is framed as how winners do it, because that is true."],
            ["Ask, don't present", "One sentence of reason, one question. No catalogue, no comparison chart."],
            ["Same bill, same sitting", "“Add it to the same bill” makes it feel like finishing the purchase, not starting a new one."]
          ],
          q: ["Sell the thing that makes the first thing work. Then the upsell is service, not salesmanship.", "framework · classic upsell"]
        },
        {
          k: "Counter card", t: "The kit, on the desk.", ch: "Counter card · front desk", when: "Day 0 · 6:41 PM",
          html: `<div class="poster cu-poster">
            <div class="k">Forge Fitness · 6-week challenge</div>
            <h5>What the winners <em>take home.</em></h5>
            <div class="cu-kit">
              <div><b>Whey 2 kg</b>42 post-workout scoops</div>
              <div><b>Multivitamin</b>42-day strip</div>
              <div><b>Shaker + plan</b>when to take what</div>
            </div>
            <div class="big">₹6,500</div>
            <p>Six weeks of supply · same as the last batch's top three</p>
            <div class="fine">Challenge members only · added at sign-up · not sold separately</div>
          </div>`,
          why: [
            ["One kit, one price", "No small / medium / large of supplements. A single bundle removes the choice that kills the moment."],
            ["Proof on the card", "“Same as the last batch's top three” connects the kit to the result without a sales pitch."],
            ["Members-only fence", "Not sold separately, so the price is never compared to a shop shelf. The kit exists only at this desk, at this moment."]
          ],
          q: ["Make the upsell a yes-or-no. The second you offer three versions, they go home to think about it.", "framework · classic upsell"]
        },
        {
          k: "Longer term", t: "Six weeks, or six months.", ch: "In person · at the front desk", when: "Day 0 · 6:43 PM",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">6 weeks <small>challenge only</small></div>
              <ul><li>Mon / Wed / Fri, 6:30 AM batch</li><li>Coach + diet chart for 42 days</li><li><b>After Day 42:</b> membership at ₹3,500/mo if you continue</li></ul>
              <div class="sub">Already paid. Nothing more to decide.</div>
            </div>
            <div class="ch best">
              <div class="badge">Most of the batch picks this</div>
              <div class="k">Option B</div>
              <div class="p">+ 6 months <small>locked today</small></div>
              <ul><li>Same batch, same coach, months 2–7</li><li>₹3,000/mo instead of ₹3,500/mo</li><li><b>₹18,000 today</b> · saves ₹3,000 over six months</li></ul>
              <div class="cr">Rate only available at sign-up</div>
              <div class="sub">Pause up to 30 days for travel · transferable once</div>
            </div>
          </div>`,
          why: [
            ["The same thing, longer", "Not a new programme. The thing she just bought, extended. The lowest-friction upsell after the complement."],
            ["Price the future at today's temperature", "She will never be more sure she will finish than right now. Lock the term while she is."],
            ["Both options are yes", "Option A is not a rejection. It keeps the tone light, which is what lets the coach ask at all."]
          ],
          q: ["The easiest upsell is more of what they just bought: a bigger size, a longer term, another unit.", "framework · classic upsell"]
        },
        {
          k: "Updated bill", t: "₹15,000 became ₹39,500.", ch: "Razorpay · same UPI session", when: "Day 0 · 6:45 PM",
          html: `<div class="pay">
            <div class="h"><span>Forge Fitness · Jubilee Hills</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Challenge <small style="color:var(--mute)">(paid 6:40 PM)</small></span><span>₹15,000</span></div>
              <div class="row"><span>Starter Kit · whey + multivitamin + shaker</span><span>₹6,500</span></div>
              <div class="row"><span>6-month membership · months 2–7 · ₹3,000/mo</span><span>₹18,000</span></div>
              <div class="row tot"><span>Pay now</span><span>₹24,500</span></div>
              <div class="note"><b>Total with Meera today: ₹39,500.</b> Kit goes in the bag now. Membership starts Day 43 automatically.</div>
              <div class="go">Pay ₹24,500 · UPI</div>
              <div class="disc">Same desk, five minutes after the first payment</div>
            </div></div>`,
          why: [
            ["Cash collected up front more than doubled", "₹15,000 became ₹39,500 with no new lead, no new ad, no new call. This is the whole point of the section."],
            ["Two upsells, two asks, two minutes", "Complement first (cheap, obvious), then term (bigger, but the same thing). Order matters: small yes, then bigger yes."],
            ["Second payment, not a refund-and-redo", "The first receipt stands. The upsell is an additional line, so the base sale is never reopened."]
          ],
          q: ["Upsells are how the attraction offer becomes profitable on day one instead of month four.", "framework · classic upsell"]
        },
        {
          k: "Walking out", t: "Kit in the bag, plan on phone.", ch: "WhatsApp", when: "Day 0 · 7:05 PM",
          html: `<div class="phone cu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">A</div><div>Coach Arjun · Forge<small>online</small></div></div>
              <div class="body">
                <div class="bub">Welcome to the batch, Meera 💪 Receipts for both payments attached.<span class="tm">7:02 PM</span></div>
                <div class="bub">Kit plan:<br>• Whey — 1 scoop within 30 min after every session<br>• Multivitamin — 1 with breakfast, daily<br>• Shaker lives in the gym bag, not the kitchen 😄<span class="tm">7:03 PM</span></div>
                <div class="bub">Monday 6:30 AM. Membership months 2–7 already locked — nothing to do on Day 43.<span class="tm">7:03 PM</span></div>
                <div class="bub me">Got it. Thank you Arjun! 🙏<span class="tm">7:05 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The upsell is delivered, not just sold", "Instructions the same evening make the kit part of the programme. Used supplements get re-bought; unused ones get refunded."],
            ["Confirm the term in writing", "“Already locked, nothing to do on Day 43” — the six months is now a fact in her phone, not a memory of a desk."],
            ["Tone stays coach, not cashier", "Nothing here sells. The selling was done at the desk; the phone is for delivery."]
          ],
          q: ["Deliver the upsell like it was the main thing. A used add-on becomes a repeat purchase; an unused one becomes a complaint.", "framework · classic upsell"]
        },
        {
          k: "Refill", t: "The same thing, again.", ch: "WhatsApp", when: "Day 40",
          html: `<div class="phone cu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">A</div><div>Coach Arjun · Forge<small>online</small></div></div>
              <div class="body">
                <div class="bub">Meera — 5.8 kg down at Day 40, weigh-in Friday 🔥<span class="tm">Wed 8:10 AM</span></div>
                <div class="bub">Your whey runs out this weekend. Members' refill is ₹4,500 for 2 kg (₹6,500 was the kit with vitamins + shaker). Shall I keep one at the desk for Friday?<span class="tm">8:11 AM</span></div>
                <div class="bub me">Yes please — same flavour 👍<span class="tm">8:30 AM ✓✓</span></div>
                <div class="bub">Done. Pay at the desk Friday. Months 2–7 start Monday, same 6:30 AM.<span class="tm">8:31 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Ask when the tub is empty", "Timing is the whole trick. Day 40 is when she needs it, so the question answers a problem instead of creating one."],
            ["Lead with her result", "5.8 kg first, refill second. The upsell rides on the proof that the first purchase worked."],
            ["Same thing, again, forever", "A consumable complement turns a one-time upsell into a monthly one. This is where the kit's real margin lives."]
          ],
          q: ["If what you sold runs out, you have a built-in upsell every time it does. Sell consumables next to your core.", "framework · classic upsell"]
        }
      ]
    },

    /* ───────────────────────── 3 · GYM LAUNCH — right after the licence (adapted) ───────────────────────── */
    {
      label: "Gym Launch · after the licence",
      source: "How Alex's Gym Launch would run the same move on a gym owner (adapted — the chapter's Gym Launch details should be checked; numbers illustrative)",
      client: "Ryan",
      about: "Ryan, 38, owns a 200-member gym in Ohio. He has just paid for the Gym Launch programme on a Zoom call. Before the call ends he is offered done-with-you ad management (complement) and a second-location licence (more of the same). US persona, dollars; adapted.",
      copy: `CLASSIC UPSELL — on the close call
Base: Gym Launch programme, $8,000, paid on the call.
Upsell 1, the complement: Ads Done-With-You, $1,500/mo — "the owners who launch fastest don't touch the ad account."
Upsell 2, more of the same: second-location licence at $4,000 (half price) if added today.
Asked on the same call, after the card clears, one at a time.
Onboarding email confirms all three lines within the hour.`,
      steps: [
        {
          k: "The close", t: "The card clears on the call.", ch: "Zoom · sales call", when: "Day 0 · 2:20 PM",
          html: `<div class="say cu-say">
            <div class="who"><div class="av">D</div><div><b>Dan · Gym Launch</b><small>Closer · Zoom</small></div></div>
            <q>Ryan, that's gone through — welcome in. <em>Your launch team gets your file in the next ten minutes.</em> Stay on for two more minutes, there are two things every new owner asks me about and I'd rather answer them now than on your first week.</q>
          </div>`,
          why: [
            ["Keep him on the call", "The temptation is to celebrate and hang up. The upsell requires the customer to still be in the room where he just said yes."],
            ["Name the reason to stay", "“Two things every owner asks” is honest and specific. It frames what comes next as help, not a second pitch."],
            ["Confirm the base first", "“That's gone through” closes the first sale cleanly. The upsell never reopens the deal he just made."]
          ],
          q: ["Do not end the call at the first yes. The second sale takes two minutes and needs nothing new to be true.", "framework · classic upsell"]
        },
        {
          k: "The invoice", t: "The base sale, on paper.", ch: "Stripe · receipt", when: "Day 0 · 2:20 PM",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch · programme</span><b>RECEIPT · GL-7731</b></div>
            <div class="body">
              <div class="row"><span>Gym Launch programme · 12 months</span><span>$8,000</span></div>
              <div class="row"><span>Launch team · weekly calls · templates</span><span>included</span></div>
              <div class="row tot"><span>Paid</span><span>$8,000</span></div>
              <div class="note"><b>Onboarding call:</b> tomorrow 10 AM ET · your launch manager is Priya</div>
              <div class="go">Payment successful ✓</div>
              <div class="disc">Visa ending 4471 · 2:20 PM ET</div>
            </div></div>`,
          why: [
            ["The receipt lands while he is still on Zoom", "Proof of the first purchase arrives in seconds. He is now a customer, and customers are sold to differently than prospects."],
            ["The base is the programme", "Everything upsold next either helps this programme work (ads) or is more of it (a second licence)."],
            ["Onboarding already scheduled", "Tomorrow 10 AM is in the receipt. The next steps are handled, which frees the call for the upsell."]
          ],
          q: ["A paid customer is a different person from a prospect. Sell to the person he became, not the one he was five minutes ago.", "framework · classic upsell"]
        },
        {
          k: "Ads with you", t: "The complement, before the call ends.", ch: "Zoom · sales call", when: "Day 0 · 2:22 PM",
          html: `<div class="say cu-say">
            <div class="who"><div class="av">D</div><div><b>Dan · Gym Launch</b><small>Closer · Zoom</small></div></div>
            <q>First one. The owners who fill their first challenge fastest are the ones who never touch the ad account — our team runs it with you, you approve on a Friday call. <em>That's $1,500 a month, cancel any month. Want me to add it so week one is ads live, not ads learning?</em></q>
          </div>`,
          why: [
            ["The complement removes the reason the base fails", "Most owners stall on ads. The upsell is the thing that makes the programme he just bought actually produce leads."],
            ["Ask right after the first yes", "Ninety seconds after the card cleared. Not on the onboarding call, not week two."],
            ["Frame it as speed, not fear", "“Ads live, not ads learning” sells the outcome he wants faster, which is the only reason he bought at all."]
          ],
          q: ["Sell the thing that makes the first thing work. Then the upsell is service, not salesmanship.", "framework · classic upsell"]
        },
        {
          k: "Second licence", t: "More of the same, half price today.", ch: "Zoom · screen share", when: "Day 0 · 2:24 PM",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">1 location <small>as paid</small></div>
              <ul><li>Main St gym · 200 members</li><li>Programme + Ads Done-With-You</li><li><b>Second location later:</b> full price, $8,000</li></ul>
              <div class="sub">Totally fine. Most owners start here.</div>
            </div>
            <div class="ch best">
              <div class="badge">Only on the sign-up call</div>
              <div class="k">Option B</div>
              <div class="p">2 locations <small>today</small></div>
              <ul><li>Main St + the Westside unit opening in spring</li><li>Same launch team, one weekly call</li><li><b>$4,000 for the second licence</b> · half price</li></ul>
              <div class="cr">Saves $4,000 vs adding it later</div>
              <div class="sub">Activate the second licence any time in 12 months</div>
            </div>
          </div>`,
          why: [
            ["The same thing, one more unit", "He mentioned a second location on the call. A second licence is the programme again, not a new product to understand."],
            ["A real reason for the price", "Half price only at sign-up because the launch team onboards both at once. The discount has a cost basis behind it."],
            ["Activate later, pay now", "He does not need to open Westside today to buy the licence today. Cash comes in at peak temperature; delivery follows."]
          ],
          q: ["The easiest upsell is more of what they just bought: a bigger size, a longer term, another unit.", "framework · classic upsell"]
        },
        {
          k: "Updated invoice", t: "$8,000 became $13,500 today.", ch: "Stripe · receipt", when: "Day 0 · 2:27 PM",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch · programme</span><b>RECEIPT · GL-7732</b></div>
            <div class="body">
              <div class="row"><span>Gym Launch programme <small style="color:var(--mute)">(paid, GL-7731)</small></span><span>$8,000</span></div>
              <div class="row"><span>Ads Done-With-You · month 1 of 12</span><span>$1,500</span></div>
              <div class="row"><span>Second-location licence · Westside</span><span>$4,000</span></div>
              <div class="row tot"><span>Pay now</span><span>$5,500</span></div>
              <div class="note"><b>Total on the call: $13,500</b> plus $1,500/mo from month 2. Both upsells asked in under five minutes.</div>
              <div class="go">Pay $5,500 · card on file</div>
              <div class="disc">Same call · same card · no new decision maker</div>
            </div></div>`,
          why: [
            ["Cash on the call went up 69%", "$8,000 became $13,500 plus a recurring line. No extra lead cost, no extra closer time worth mentioning."],
            ["Recurring upsell attached to a one-time base", "The ads line turns a single payment into monthly revenue. The upsell created the continuity."],
            ["Card on file", "The second charge uses the card that just worked. Friction at the second payment should be lower than at the first, not higher."]
          ],
          q: ["Upsells are how the attraction offer becomes profitable on day one instead of month four.", "framework · classic upsell"]
        },
        {
          k: "Onboarding email", t: "All three lines, one email.", ch: "Email", when: "Day 0 · 3:10 PM",
          html: `<div class="mail">
            <div class="h"><div class="s">Ryan, you're in — here's your launch file</div><div class="f">From: Priya · Gym Launch &lt;priya@gymlaunch.com&gt; · to Ryan</div></div>
            <div class="body">
              <p>Welcome. Here is what you own as of today and what happens next:</p>
              <p><b>01</b> Gym Launch programme · Main St · 12 months · weekly call Fridays 11 AM ET<br><b>02</b> Ads Done-With-You · our team gets ad-account access tomorrow, first campaign live by Day 5<br><b>03</b> Second-location licence · Westside · activate any time before next spring</p>
              <p>Tomorrow 10 AM ET: onboarding call. Bring your current member count and your best three transformation photos.</p>
              <div class="cta">Add tomorrow's call to calendar</div>
            </div></div>`,
          why: [
            ["Everything he bought, in one place", "Base and both upsells listed together, so nothing feels bolted on. He bought a package; this is the package."],
            ["Delivery starts within the hour", "Ad-account access tomorrow, campaign by Day 5. The upsell is already in motion before buyer's remorse can start."],
            ["The next ask is set up", "First campaign, first challenge, then the next upsell (more ads budget, more locations) — asked after the next yes, not before."]
          ],
          q: ["Deliver the upsell like it was the main thing. A used add-on becomes a repeat purchase; an unused one becomes a complaint.", "framework · classic upsell"]
        }
      ]
    },

    /* ───────────────────────── 4 · E-COMMERCE — cart bump + one-click (adapted) ───────────────────────── */
    {
      label: "E-commerce · one-click upsell",
      source: "How the framework applies to an online store (adapted — not a story the chapter tells)",
      client: "Ananya",
      about: "Ananya, 29, Bengaluru, buys a ₹1,299 face serum online. At checkout she is offered the bigger bottle (same thing, bigger), then after paying, a one-click night cream (the complement). Fully adapted; shows the same three moves without a human.",
      copy: `CLASSIC UPSELL — online, no salesperson
Base: 30 ml serum, ₹1,299.
Ask 1, same thing bigger (cart): "Get the 60 ml for ₹700 more" (₹1,999 · ₹500 cheaper than two 30 ml).
Ask 2, the complement (post-purchase, one click, card already charged): Night cream ₹899, added to the same parcel.
Ask 3, same thing again (Day 45 WhatsApp): refill at members' price when the bottle runs out.
Every ask appears only after a yes: cart after add-to-cart, one-click after payment, refill after use.`,
      steps: [
        {
          k: "Product page", t: "She came for one bottle.", ch: "Product page · mobile", when: "Day 0 · 10:12 PM",
          html: `<div class="web cu-web" style="width:440px">
            <div class="bar"><i></i><i></i><i></i><div class="url">glowlab.in/serum</div></div>
            <div class="body">
              <div class="eyebrow">Glowlab · vitamin C serum</div>
              <div class="prod"><div class="im"></div><div><div class="nm">Vitamin C Serum · 30 ml</div><div class="pr">₹1,299</div><div style="font-size:11.5px;color:var(--mute)">4.7 · 2,140 reviews · ships today</div></div></div>
              <div style="font-size:13px;color:var(--dim);line-height:1.5">Brighter skin in 4 weeks. 2 drops, morning, before sunscreen. One bottle lasts about 6 weeks.</div>
              <div class="btn">Add to cart · ₹1,299</div>
            </div></div>`,
          why: [
            ["One product, one price, one button", "The product page sells the base and nothing else. Upsells before the first yes lower conversion; they belong after it."],
            ["Plant the size fact", "“One bottle lasts about 6 weeks” is the seed for the bigger-bottle ask. Stated as information now, used as a reason in a minute."],
            ["The base is the attraction offer", "₹1,299 with free shipping barely covers acquisition. The upsells that follow are the margin."]
          ],
          q: ["Sell one thing first. The upsell only exists because there was a first yes.", "framework · classic upsell"]
        },
        {
          k: "Cart bump", t: "Same thing, bigger, for ₹700 more.", ch: "Cart page · mobile", when: "Day 0 · 10:13 PM",
          html: `<div class="web cu-web" style="width:440px">
            <div class="bar"><i></i><i></i><i></i><div class="url">glowlab.in/cart</div></div>
            <div class="body">
              <div class="eyebrow">Your cart · 1 item</div>
              <div class="cu-order">
                <div class="l"><span>Vitamin C Serum · 30 ml</span><span>₹1,299</span></div>
              </div>
              <div class="bump"><div class="cb"></div><div><b>Upgrade to 60 ml for ₹700 more</b><small>₹1,999 instead of ₹2,598 for two bottles · lasts 12 weeks · most customers reorder at week 6 anyway</small></div></div>
              <div class="cu-order"><div class="tot"><span>Total</span><span>₹1,999</span></div></div>
              <div class="btn">Checkout · ₹1,999</div>
            </div></div>`,
          why: [
            ["More of the same, priced as a delta", "“₹700 more” not “₹1,999”. She compares a small number to a yes she has already given."],
            ["Pre-ticked, visibly", "The box is checked by default but shown large. Silent pre-ticks cause chargebacks; visible ones convert."],
            ["The reason is her own behaviour", "“Most customers reorder at week 6” turns the bigger bottle into the sensible version of what she was going to do anyway."]
          ],
          q: ["The same thing in a bigger size is the lowest-friction upsell: no new decision, only a bigger one.", "framework · classic upsell"]
        },
        {
          k: "Payment", t: "₹1,999 paid.", ch: "Razorpay · mobile", when: "Day 0 · 10:14 PM",
          html: `<div class="pay">
            <div class="h"><span>Glowlab · order #G-48120</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Vitamin C Serum · 60 ml</span><span>₹1,999</span></div>
              <div class="row"><span>Shipping · Bengaluru next-day</span><span>free</span></div>
              <div class="row tot"><span>Paid</span><span>₹1,999</span></div>
              <div class="note"><b>Card saved for one-click</b> · you can add to this order for the next 10 minutes without paying again</div>
              <div class="go">Payment successful ✓</div>
              <div class="disc">UPI · 10:14 PM</div>
            </div></div>`,
          why: [
            ["The yes is now a payment", "The strongest possible signal of intent. What follows is shown only to people who reached this screen."],
            ["Card saved is the setup", "One-click needs the card already charged. This line, on the receipt, is what makes the next screen frictionless."],
            ["Ten-minute window", "The offer that follows is real only now. That is not a trick; it is because the parcel is packed tonight."]
          ],
          q: ["The best time to sell someone something is right after they have bought something. Their wallet is already open.", "framework · classic upsell"]
        },
        {
          k: "One-click", t: "The complement, after payment.", ch: "Thank-you page · mobile", when: "Day 0 · 10:14 PM",
          html: `<div class="web cu-web" style="width:440px">
            <div class="bar"><i></i><i></i><i></i><div class="url">glowlab.in/thank-you</div></div>
            <div class="body">
              <div class="eyebrow">Order #G-48120 confirmed</div>
              <h5>Ananya, one thing <em>before we pack it.</em></h5>
              <div class="prod"><div class="im" style="background:linear-gradient(160deg,#2b2b2b,#6b6b6b)"></div><div><div class="nm">Night Repair Cream · 50 g</div><div class="pr">₹899 <small style="font-size:12px;color:var(--mute)">· ₹1,199 on the site</small></div><div style="font-size:11.5px;color:var(--mute)">Serum in the morning, cream at night · same routine card</div></div></div>
              <div class="btn">Yes, add it to my parcel · one click, ₹899</div>
              <div class="skip">No thanks, just the serum</div>
            </div></div>`,
          why: [
            ["The obvious complement", "Serum is the morning step; the cream is the night step. She does not need convincing that they go together."],
            ["One click, no re-entering anything", "Card is charged, address is known. The cost of saying yes is a tap; the cost of saying no is a tap."],
            ["Price only here", "₹899 on this page, ₹1,199 on the site. A real reason to decide now, tied to the parcel being packed tonight."]
          ],
          q: ["Sell the thing that goes with the thing. The complement needs no explanation because they already wanted it.", "framework · classic upsell"]
        },
        {
          k: "Order email", t: "One parcel, two products.", ch: "Email", when: "Day 0 · 10:16 PM",
          html: `<div class="mail">
            <div class="h"><div class="s">Order #G-48120 · packed tonight, at your door tomorrow</div><div class="f">From: Glowlab &lt;orders@glowlab.in&gt; · to Ananya</div></div>
            <div class="body">
              <p>Here is what's in your parcel:</p>
              <p><b>01</b> Vitamin C Serum · 60 ml · ₹1,999<br><b>02</b> Night Repair Cream · 50 g · ₹899 (added one-click)<br><b>Total</b> ₹2,898 · paid</p>
              <p>Your routine card is inside the box: serum, 2 drops, morning · cream, pea-size, night. Both start tomorrow.</p>
              <div class="cta">Track my parcel</div>
            </div></div>`,
          why: [
            ["₹1,299 became ₹2,898", "Two asks, both after a yes, no human. The order more than doubled from a customer already paid for."],
            ["One parcel, one routine", "The upsells are delivered as a set. The routine card makes both products get used, which is what makes them get reordered."],
            ["No surprise on the receipt", "Every line she tapped is listed with what she saw. Transparent upsells are what keep refund rates where they were."]
          ],
          q: ["The cheapest customer to sell is the one you just sold. Every upsell is profit on an acquisition cost you already paid.", "framework · classic upsell"]
        },
        {
          k: "Refill", t: "The same thing, again.", ch: "WhatsApp", when: "Day 45",
          html: `<div class="phone cu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">GL</div><div>Glowlab<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Hi Ananya — week 6 of your serum 🌿 By now the 60 ml is about half done.<span class="tm">Sat 10:30 AM</span></div>
                <div class="bub">Members' refill: 60 ml serum ₹1,699 (₹1,999 on the site) + night cream ₹799. Ships when your current one is 2 weeks from empty — reply YES and we'll time it.<span class="tm">10:30 AM</span></div>
                <div class="bub me">YES — both please<span class="tm">11:02 AM ✓✓</span></div>
                <div class="bub">Done ✓ Shipping on the 20th, card on file. Skip or move any time with one reply.<span class="tm">11:03 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Ask when it runs out", "Week 6 of a 12-week bottle. The message arrives before the problem, not after she has bought elsewhere."],
            ["Same thing, again — both things", "The refill re-sells both the base and the complement. The upsell from Day 0 is now a repeat line."],
            ["Timed, not forced", "“Ships when 2 weeks from empty” and “skip any time” make the repeat feel like service. Consumables plus timing is the loop."]
          ],
          q: ["If what you sold runs out, you have a built-in upsell every time it does. Sell consumables next to your core.", "framework · classic upsell"]
        }
      ]
    }
  ]
});
