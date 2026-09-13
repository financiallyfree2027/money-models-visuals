// Free with Consumption — $100M Money Models, Section II (Attraction Offers)
// Mechanic: the first unit is free, but only if it is consumed in a way that leads to the sale —
// attended in person, used with the coach present, eaten at the counter. The free thing does the
// selling; people who claim but never consume cost nothing.
// Example 1 is Alex's gym as the chapter tells it (details to verify). Examples 2–4 are marked
// "(adapted)" in `source`: they follow the chapter's framework for other business types.
window.OFFERS.push({
  slug: "free-with-consumption",
  name: "Free with consumption",
  section: "Attraction",
  css: `
.fwc-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0 4px}
.fwc-slots .s{border:1px solid var(--line);border-radius:9px;padding:9px 8px;text-align:center;font-size:12px;color:var(--dim)}
.fwc-slots .s b{display:block;font-family:var(--mono);font-size:11px;color:var(--ink);margin-bottom:2px}
.fwc-slots .s.on{border-color:var(--green);background:var(--green-xl);color:var(--green-d);font-weight:600}
.fwc-slots .s.off{opacity:.45;text-decoration:line-through}
.fwc-cond{margin:12px 0 0;padding:0;list-style:none;font-size:12.5px;color:var(--dim)}
.fwc-cond li{padding:6px 0;border-top:1px dashed var(--line);display:flex;gap:8px;line-height:1.4}
.fwc-cond li i{flex:none;width:16px;height:16px;border-radius:50%;background:var(--green);color:#fff;font-style:normal;font-size:10px;display:inline-flex;align-items:center;justify-content:center;margin-top:1px}
.fwc-cond li b{color:var(--ink)}
.fwc-sms .body{background:#F2F2F7}
.fwc-sms .bub{background:#E9E9EB;border-radius:16px}
.fwc-sms .bub.me{background:#34C759;color:#fff}
.fwc-sms .bub.me .tm{color:rgba(255,255,255,.75)}
.fwc-day{align-self:center;font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:#8E8E93;background:rgba(0,0,0,.05);padding:3px 9px;border-radius:999px}
.fwc-tight .wa .body{gap:6px;padding:9px 8px}
.fwc-tight .bub{padding:6px 9px}
.fwc-tight .wa{min-height:400px}
.fwc-poster .big{font-size:44px;margin:10px 0 2px}
.fwc-poster h5{font-size:34px}
.fwc-poster p{font-size:12.5px}
.fwc-tag{display:inline-block;font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;background:var(--gold-l);color:#5A4410;padding:3px 8px;border-radius:999px;margin-top:10px}
.fwc-doc h5{font-size:22px}
.fwc-doc .chk{padding:7px 0}
.fwc-sig .l{width:170px}
.fwc-sig small{white-space:nowrap}
.fwc-note{font-size:11.5px;color:var(--mute);margin-top:12px;line-height:1.5}
.fwc-plan{margin-top:12px;text-align:left;background:#fff;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font-size:12.5px}
.fwc-plan .r{display:flex;justify-content:space-between;padding:4px 0;border-top:1px dashed var(--line)}
.fwc-plan .r:first-child{border-top:0}
.fwc-plan .r b{font-family:var(--mono);font-size:11.5px;color:var(--green-d)}
.fwc-plan .r .bad{color:var(--coral);font-family:var(--mono);font-size:11.5px}
.fwc-bill{width:360px}
.fwc-audit{width:560px;text-align:left}
.fwc-audit .top2{text-align:left;padding:22px 24px 18px}
.fwc-audit .top2 h5{font-size:26px}
.fwc-audit .body{padding:16px 22px 20px}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the book) ───────────────────────── */
    {
      label: "Alex's gym · free session",
      source: "Alex's own gym, as told in the book · US persona kept",
      client: "Kayla",
      about: "Kayla, 34, Sacramento. She claims a free first session — but it is only free if she books a slot, shows up, and does it with a coach. The workout is the pitch. Nobody who no-shows costs the gym a cent.",
      copy: `FREE FIRST SESSION — ONLY IF YOU SHOW UP
Your first 60-min session + body scan is free ($79 value).
Conditions: (1) book a slot in the next 48 hours, (2) arrive 10 min early
for your scan, (3) train with a coach — the session is done with us, not alone.
No-show = slot released to the waitlist. 8 free slots a week.
At the end you get your numbers, a plan, and a founding-member price valid that day.`,
      steps: [
        {
          k: "The ad", t: "Free — if you come in.", ch: "Facebook · Instagram", when: "Day −3",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">AF</div><div><div class="nm">alexsgym.sac</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">SACRAMENTO · WOMEN 25–45</div>
                <div><div class="big">Your first session is free.<br><em>You just have to show up.</em></div>
                <div class="sm">60 min with a coach + body scan. Not a pass, not a PDF — a booked slot. 8 a week.</div></div>
              </div>
              <div class="cta"><span>alexsgym.com/free</span><b>Book my slot</b></div>
              <div class="cap"><b>alexsgym.sac</b> No free weeks, no “come whenever”. One coached session, done with us, and you leave with your numbers. Book within 48 hrs.</div>
            </div></div></div>`,
          why: [
            ["Free is the hook, consumption is the catch", "“You just have to show up” says the free thing exists only if she comes in. Claim-and-forget freebies sell nothing."],
            ["A slot, not a pass", "A free week is consumed alone or not at all. A booked, coached session is consumed in front of the person who sells."],
            ["Capped and dated", "8 a week and 48 hours make a free thing feel scarce. Free things with no limit are worth what they cost."]
          ],
          q: ["Free only works when it gets consumed. So give away the thing that must be consumed with you in the room.", "framework · free with consumption"]
        },
        {
          k: "Booking", t: "Pick a slot. Read the three rules.", ch: "Booking page", when: "Day −3",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">alexsgym.com/free</div></div>
            <div class="body">
              <div class="eyebrow">Free first session · Sacramento</div>
              <h5>Free session. <em>Only if it's used.</em></h5>
              <div style="font-size:13px;color:var(--dim)">Pick a slot in the next 48 hours. Your session is free when you're in the building with a coach.</div>
              <div class="fwc-slots">
                <div class="s"><b>TODAY</b>6:00 PM</div>
                <div class="s on"><b>TOMORROW</b>6:30 AM</div>
                <div class="s"><b>TOMORROW</b>5:30 PM</div>
                <div class="s off"><b>FRI</b>6:30 AM</div>
                <div class="s off"><b>FRI</b>5:30 PM</div>
                <div class="s off"><b>SAT</b>9:00 AM</div>
              </div>
              <ul class="fwc-cond">
                <li><i>1</i><span><b>Arrive 10 min early</b> — your body scan happens before the session, not after.</span></li>
                <li><i>2</i><span><b>Train with a coach</b> — the free session is done with us. It isn't a floor pass.</span></li>
                <li><i>3</i><span><b>No-show = slot gone</b> — released to the waitlist. Reschedule once, up to 4 hrs before.</span></li>
              </ul>
              <div class="btn">Book Thu 6:30 AM · free <small>Card not required · 3 of 8 slots left this week</small></div>
            </div></div>`,
          why: [
            ["The conditions are the consumption", "Early, coached, in the building. Each rule guarantees the free thing gets experienced, not just claimed."],
            ["48 hours, greyed-out slots", "Show rates collapse with distance. The calendar refuses next week, so the decision is made while she's warm."],
            ["No card, no catch", "Free must feel free. The cost to her is one hour of showing up — which is exactly what the gym wants to buy."]
          ],
          q: ["Attach conditions that make the free thing get used. The conditions are not the price — they are the point.", "framework · free with consumption"]
        },
        {
          k: "Reminders", t: "Three nudges, one show-up.", ch: "SMS", when: "Day −1 → Day 0",
          html: `<div class="phone fwc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa fwc-sms">
              <div class="h" style="background:#F2F2F7;color:#111"><div class="av" style="background:#34C759;color:#fff">C</div><div>Coach Dre · Alex's Gym<small style="color:#666">Sacramento · Fulton Ave</small></div></div>
              <div class="body">
                <div class="fwc-day">Wed · 12:10 PM</div>
                <div class="bub">Hey Kayla, Dre here — your coach tomorrow 6:30 AM. What's the #1 thing you want out of this?<span class="tm">12:10 PM</span></div>
                <div class="bub me">Lose the baby weight tbh. ~20 lb<span class="tm">12:34 PM</span></div>
                <div class="fwc-day">Wed · 8:00 PM</div>
                <div class="bub">Got it. Reminder: scan 6:20, session 6:30 tomorrow. 2 people are waitlisted for your slot — reply YES to keep it.<span class="tm">8:00 PM</span></div>
                <div class="bub me">YES 👍<span class="tm">8:12 PM</span></div>
                <div class="fwc-day">Thu · 5:30 AM</div>
                <div class="bub">Scale's on, coffee's on. See you at 6:15 ☀️<span class="tm">5:30 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The show-up is the whole economics", "A free session only costs the gym when she comes — and a come is a sales conversation. Every reminder buys revenue."],
            ["A named coach, a named goal", "“Dre” asked what she wants. She's now expected by a person, not a system. People no-show systems."],
            ["Waitlist pressure, kindly", "“2 people want your slot” turns a free thing into something she'd lose. YES is a commitment she made in writing."]
          ],
          q: ["The free thing is worth nothing until it's consumed. Chase the consumption harder than you'd chase a payment.", "framework · free with consumption"]
        },
        {
          k: "The scan", t: "Her numbers, on paper.", ch: "Paper · front desk", when: "Day 0 · 6:20 AM",
          html: `<div class="doc fwc-doc">
            <div class="stamp">FREE SESSION · DAY 0</div>
            <div class="k">Body scan + goal sheet</div>
            <h5>Kayla's starting point</h5>
            <div class="chk"><div class="b"></div><div><b>Weight 168 lb · body fat 34%</b><span>Scan 6:22 AM · same scale at every check-in.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Goal: 148 lb by Thanksgiving</b><span>Written in her words: “fit into my pre-baby jeans”.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>What it takes: 3 sessions a week + 3 meals logged</b><span>Coach Dre explained why before she trained.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Today: free coached session</b><span>60 min · with Dre · finishes with a plan, not a form.</span></div></div>
            <div class="sig fwc-sig"><div class="l">Kayla R.</div><small>THU 14 AUG · 6:24 AM</small></div>
          </div>`,
          why: [
            ["The free thing starts with her problem", "A scan and a written goal make the session about her, not the gym. That's what a real first day of membership looks like."],
            ["The gap is now a number", "168 → 148 with a date. The session that follows demonstrates the only way to close it."],
            ["What it takes, said before the pitch", "“3 sessions + 3 meals” is stated on the free side of the line. The paid offer later is just the same sentence with a price."]
          ],
          q: ["The free unit should be the first real unit of the paid thing — not a diluted taste of it.", "framework · free with consumption"]
        },
        {
          k: "The session", t: "Sixty minutes with the coach.", ch: "In person · gym floor", when: "Day 0 · 6:30 AM",
          html: `<div class="say">
            <div class="who"><div class="av">D</div><div><b>Coach Dre</b><small>Gym floor · minute 55 of 60</small></div></div>
            <q>That's the session. Same thing my 6:30 crew did Monday — you kept up. <em>Now you know exactly what three of these a week feels like.</em> Grab water, then let's sit down for five minutes and I'll show you what your numbers do by Thanksgiving if you keep this up.</q>
          </div>`,
          why: [
            ["Consumed with the seller present", "The workout is the product. She used it, with the coach, in the room — the exact thing the membership sells."],
            ["The same session as members", "No watered-down demo. The free unit is a real unit, so the buy decision is about continuing, not imagining."],
            ["The pitch is announced, not sprung", "“Sit down for five minutes” is asked at minute 55, while the value is still in her legs."]
          ],
          q: ["If they consume, they buy. Your only job is to make the consumption happen and be there when it does.", "framework · free with consumption"]
        },
        {
          k: "The pitch", t: "Keep doing this, at a founding price.", ch: "In person · at the desk", when: "Day 0 · 7:35 AM",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">$0 <small>walk out with your plan</small></div>
              <ul><li>Your scan + goal sheet, yours to keep</li><li>Come back any time — full price is $199/mo</li><li><b>Today:</b> 168 lb and a plan with no coach.</li></ul>
              <div class="sub">Totally fine. Really.</div>
            </div>
            <div class="ch best">
              <div class="badge">What Dre recommends</div>
              <div class="k">Option B · today only</div>
              <div class="p">$149 <small>/ month · 3 coached sessions a week</small></div>
              <ul><li>Same 6:30 AM crew, same coach</li><li>Meal logging reviewed weekly · rescan every 4 weeks</li><li><b>Founding-member price, held for life</b></li></ul>
              <div class="cr">Session 1 is done — 71 to go till Thanksgiving</div>
              <div class="sub">First debit today · pause any time · price expires when you leave the building</div>
            </div>
          </div>`,
          why: [
            ["Asked while the value is felt", "She just did it. The pitch is “keep doing this”, not “imagine this”. Delay and the feeling fades."],
            ["The free session counts as session one", "“71 to go” makes the membership a continuation. She is already inside the thing she's buying."],
            ["A reason to decide today", "Founding price, valid while she's in the building. Real deadline, real reason — she showed up and did the work."]
          ],
          q: ["Free-with-consumption pays for itself on one thing only: the pitch happens the moment the consumption ends.", "framework · free with consumption"]
        },
        {
          k: "Sign-up", t: "Paid at the desk, still sweaty.", ch: "Card · front desk", when: "Day 0 · 7:41 AM",
          html: `<div class="pay">
            <div class="h"><span>Alex's Gym · Sacramento</span><b>CARD · IN PERSON</b></div>
            <div class="body">
              <div class="row"><span>Coached membership · 3× / week</span><span>$149 / mo</span></div>
              <div class="row"><span>Free first session + body scan</span><span>$0</span></div>
              <div class="row"><span>Founding-member rate (was $199)</span><span>locked</span></div>
              <div class="row tot"><span>Pay today</span><span>$149</span></div>
              <div class="note"><b>Next session:</b> Sat 9:00 AM with Dre. Rescan on 11 Sep. Goal on file: 148 lb by Thanksgiving.</div>
              <div class="go">Pay $149 · month 1</div>
              <div class="disc">No joining fee · pause any time · rate held for life</div>
            </div></div>`,
          why: [
            ["Free cost the gym one coached hour", "One hour of a coach who was on the floor anyway. The no-shows cost nothing. The shows convert."],
            ["Next session booked on the receipt", "Saturday is on the paper before she leaves. Consumption continues — and continuation is what retention is."],
            ["Ad spend paid back today", "$149 in the door on Day 0 funds the next batch of free slots. The offer is self-funding."]
          ],
          q: ["The attraction offer's job is to buy a customer at a profit. Free with consumption does it with your product as the ad.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 2 · WHERE HE SAW IT — free sample, eaten at the counter (adapted) ───────────────────────── */
    {
      label: "Origin · counter sample",
      source: "The free-sample retail play the chapter's mechanic is built on (adapted — verify origin story against the chapter)",
      client: "Meera",
      about: "Meera, 41, Dadar. A mithai shop gives one free piece — but only eaten at the counter, never in a box to take home. The taste sells the half-kilo. Indian persona; details adapted.",
      copy: `FREE PIECE — TRY IT HERE
One free piece of today's mithai for anyone at the counter.
Conditions: eaten here, at the counter, right now. Not packed, not for later.
One per person. Ask the counter for “today's piece”.
Then: 250 g box ₹340 · 500 g ₹640 · festival pre-orders taken at the counter.`,
      steps: [
        {
          k: "Counter card", t: "One free piece. Eaten here.", ch: "Counter card · shop", when: "Every day",
          html: `<div class="poster fwc-poster">
            <div class="k">Ghasitaram's Corner · Dadar</div>
            <h5>Today's piece: <em>free.</em></h5>
            <p>Kesar peda, made this morning.<br>Ask the counter. Eat it here.</p>
            <div class="big">₹0</div>
            <p>One per person · at the counter · not packed</p>
            <span class="fwc-tag">Not for take-away</span>
            <div class="fine">250 g box ₹340 · 500 g ₹640 · Diwali orders open</div>
          </div>`,
          why: [
            ["Free, with a consumption rule", "“Eat it here” is the whole mechanic. A packed sample goes home, sits in a bag and sells nothing."],
            ["Cost only when consumed", "One peda per person who's already at the counter. Nobody walking past costs a rupee."],
            ["The paid thing is on the same card", "₹340 and ₹640 sit under the ₹0. The free piece is the demo of the box."]
          ],
          q: ["Free samples work because they get eaten in front of the seller. That's the whole trick — copy the rule, not the sweet.", "framework · free with consumption"]
        },
        {
          k: "The line", t: "Said across the counter.", ch: "In person · counter", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Raju bhai</b><small>Counter · Ghasitaram's</small></div></div>
            <q>Madam, aaj ka piece try karo — kesar peda, subah ka bana hai. <em>Yahin khao, pack nahi karte.</em> Pasand aaye toh bolna, box abhi bandh doon.</q>
          </div>`,
          why: [
            ["The rule is said kindly, out loud", "“Yahin khao, pack nahi karte” — the condition is friendly, but it is a condition."],
            ["The ask is in the same breath", "“Box abhi bandh doon” plants the purchase before the taste. The sample is now a decision point, not a gift."],
            ["Hand-to-hand, eye-to-eye", "She eats it while he watches. Reciprocity and proof happen in the same three seconds."]
          ],
          q: ["Say the condition before you hand over the free thing. Free with a rule is respected; free without one is ignored.", "framework · free with consumption"]
        },
        {
          k: "The taste", t: "Eaten at the counter.", ch: "In person · counter", when: "Day 0",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Ghasitaram's Corner · 5:40 PM</div>
              <h5>One piece, eaten.</h5>
              <p>Kesar peda · made 7 AM today · 1 of 1 free</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>1</b><span>free piece</span></div><div><b>₹8</b><span>cost to shop</span></div><div><b>0</b><span>taken home</span></div></div>
              <div class="credit">What she now knows<b>It's fresh. It's good.</b>the only thing a box can't tell her from the shelf</div>
              <div class="fwc-note">Raju bhai already has a 250 g box open on the counter.</div>
            </div></div>`,
          why: [
            ["Consumption answers the only objection", "Is it fresh, is it good? A shelf can't prove it. One bite can. That's what the ₹8 buys."],
            ["Nothing leaves the shop unsold", "0 taken home. The free unit can't be stockpiled, shared or forgotten — it only exists as a taste, here."],
            ["The box is already open", "The paid thing is physically ready the moment the free thing is gone. No gap for the feeling to fade."]
          ],
          q: ["The free unit must be un-storable. If they can take it home, they'll decide at home — without you.", "framework · free with consumption"]
        },
        {
          k: "The pitch", t: "250 or 500 grams?", ch: "In person · counter", when: "Day 0",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">₹340 <small>· 250 g box</small></div>
              <ul><li>Same kesar peda, ~14 pieces</li><li>Best within 3 days</li><li><b>Fine for tonight</b></li></ul>
              <div class="sub">Most people start here.</div>
            </div>
            <div class="ch best">
              <div class="badge">Raju bhai's suggestion</div>
              <div class="k">Option B</div>
              <div class="p">₹640 <small>· 500 g box</small></div>
              <ul><li>~28 pieces · ₹40 cheaper than two small</li><li>Half kesar peda, half kaju katli if you like</li><li><b>Gift box free with 500 g</b></li></ul>
              <div class="cr">“Ghar pe sab ko pasand aayega”</div>
              <div class="sub">Diwali pre-order: same price, packed fresh on the day</div>
            </div>
          </div>`,
          why: [
            ["Either/or, not yes/no", "The question is which box, not whether. The free piece settled “whether”."],
            ["Asked within seconds of the taste", "The pitch lands while the peda is still in her mouth. That's the only timing that makes the free piece pay."],
            ["A bigger unit is the upsell", "Free → 250 g → 500 g. The ladder is built into the counter card she saw first."]
          ],
          q: ["Free-with-consumption pays for itself on one thing only: the pitch happens the moment the consumption ends.", "framework · free with consumption"]
        },
        {
          k: "The bill", t: "₹8 of peda became ₹640.", ch: "Paper bill · counter", when: "Day 0",
          html: `<div class="pay fwc-bill">
            <div class="h"><span>Ghasitaram's Corner · Dadar</span><b>BILL · 2417</b></div>
            <div class="body">
              <div class="row"><span>Today's piece (kesar peda)</span><span>₹0</span></div>
              <div class="row"><span>500 g box · kesar peda + kaju katli</span><span>₹640</span></div>
              <div class="row"><span>Gift box</span><span>free</span></div>
              <div class="row tot"><span>Pay</span><span>₹640</span></div>
              <div class="note"><b>Diwali pre-order:</b> 2 × 500 g reserved for 18 Oct. Pay on pickup. WhatsApp reminder on 16 Oct.</div>
              <div class="go">Paid ₹640 · UPI</div>
              <div class="disc">Free piece daily · always eaten here</div>
            </div></div>`,
          why: [
            ["₹0 line on the bill", "The free piece is printed. She sees she was given something — and paid for something else. Both feel fair."],
            ["Pre-order taken at the counter", "The Diwali line is the continuity. Booked now, while the taste is fresh, not when the festival ad runs."],
            ["The margin is in the box", "₹8 of sample against ₹640 of sale. Free is cheap when consumption converts."]
          ],
          q: ["The free thing is the ad. The counter is the funnel. The box is the offer. Same model, no software.", "framework · money models"]
        },
        {
          k: "Reminder", t: "The pre-order comes back.", ch: "WhatsApp", when: "16 Oct",
          html: `<div class="phone fwc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">G</div><div>Ghasitaram's Corner<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Meera ji, namaste 🙏 Aapka Diwali order ready ho raha hai —
                  <div class="board">
                    <div class="t">Pre-order · pickup 18 Oct</div>
                    <div class="r"><span>Kesar peda 500 g</span><b>1 box</b></div>
                    <div class="r"><span>Kaju katli 500 g</span><b>1 box</b></div>
                    <div class="r"><span>Pay on pickup</span><b>₹1,280</b></div>
                  </div>
                  Aur ek baat: 18 ko counter pe naya item hai — <b>gulab barfi</b>. Free piece rakha hai aapke liye. Yahin khana 😄
                  <span class="tm">Wed 11:02 AM</span>
                </div>
                <div class="bub me">Done, 18 ko 6 baje aaungi. Barfi bhi try karungi 😋<span class="tm">11:20 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Consumption sets up the next consumption", "The reminder carries the next free piece. She comes back for the order and tastes the next product."],
            ["Same rule, every time", "“Yahin khana” is now a running joke between them — and still the mechanic."],
            ["Retail continuity is just the next visit", "No subscription needed. A dated pickup and a fresh sample is the whole retention plan."]
          ],
          q: ["Every consumption is the start of the next sale. Build the next free unit into the pickup.", "framework · free with consumption"]
        }
      ]
    },

    /* ───────────────────────── 3 · GYM LAUNCH CLIENT · free class (adapted) ───────────────────────── */
    {
      label: "Studio · free class, attended",
      source: "How a Gym Launch–style studio runs it — a free class that must be attended within 7 days (adapted)",
      client: "Ananya",
      about: "Ananya, 29, Indiranagar, Bengaluru. Books one free group class at a strength studio. Free only if attended within 7 days, in a booked slot, with the coach. Pitched at the end of the class.",
      copy: `FREE FIRST CLASS — BOOKED, ATTENDED, COACHED
One free 45-min strength class (worth ₹800).
Conditions: (1) book a specific class within the next 7 days,
(2) arrive 10 min early for form check, (3) stay for the 5-min plan chat after.
No-show = free class forfeited (rebook once, 6 hrs' notice). 6 free spots per class.
Same-day joining: ₹4,500/month founding rate (list ₹5,500) · pause any time.`,
      steps: [
        {
          k: "The ad", t: "First class free. This week only.", ch: "Instagram", when: "Day −2",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">IS</div><div><div class="nm">ironstudio.blr</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">INDIRANAGAR · 25–40</div>
                <div><div class="big">Your first class is free.<br><em>Book it. Attend it. That's it.</em></div>
                <div class="sm">45 min coached strength class. Free only if you come this week — not a free trial you forget about.</div></div>
              </div>
              <div class="cta"><span>ironstudio.in/first</span><b>Pick a class</b></div>
              <div class="cap"><b>ironstudio.blr</b> 6 free spots per class. Free week nahi hai — ek class, coach ke saath, is hafte. Aa jao. 👇</div>
            </div></div></div>`,
          why: [
            ["The freebie is specific", "One class, this week, with a coach. Vague “free trials” get claimed and never used — and unused is unsold."],
            ["“Book it. Attend it.” is the condition", "The ad says the free thing must be consumed. That filters for people who'll actually walk in."],
            ["6 spots is a real limit", "A class has a floor. Real scarcity is easy to say honestly and makes free feel like a place you got."]
          ],
          q: ["Free only works when it gets consumed. So give away the thing that must be consumed with you in the room.", "framework · free with consumption"]
        },
        {
          k: "Booking", t: "One class. Three conditions.", ch: "Booking page", when: "Day −2",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">ironstudio.in/first</div></div>
            <div class="body">
              <div class="eyebrow">Free first class · Indiranagar</div>
              <h5>Pick your class. <em>Within 7 days.</em></h5>
              <div class="fwc-slots">
                <div class="s"><b>MON</b>7:00 AM · 2 left</div>
                <div class="s on"><b>TUE</b>7:00 PM · 1 left</div>
                <div class="s"><b>WED</b>7:00 AM · 4 left</div>
                <div class="s"><b>THU</b>7:00 PM · 3 left</div>
                <div class="s off"><b>NEXT WEEK</b>—</div>
                <div class="s off"><b>LATER</b>—</div>
              </div>
              <ul class="fwc-cond">
                <li><i>1</i><span><b>Come 10 min early</b> — coach checks your squat and hinge before class.</span></li>
                <li><i>2</i><span><b>Stay 5 min after</b> — you get a plan for the next 4 weeks. That's the point of coming.</span></li>
                <li><i>3</i><span><b>No-show = class forfeited</b> — rebook once, 6 hrs' notice. Your spot goes to the waitlist.</span></li>
              </ul>
              <div class="btn">Book Tue 7:00 PM · free <small>WhatsApp number required · no card</small></div>
            </div></div>`,
          why: [
            ["Nothing beyond 7 days", "Greyed-out “next week” isn't a bug. The further away the class, the lower the show-up — so the calendar doesn't allow it."],
            ["“Stay 5 min after” is the pitch, pre-agreed", "She books the plan chat as a condition. The sale conversation is consented to before the free thing."],
            ["Forfeit, not fee", "No-shows lose the free class, not money. Free stays free — but it's not free to waste."]
          ],
          q: ["Attach conditions that make the free thing get used. The conditions are not the price — they are the point.", "framework · free with consumption"]
        },
        {
          k: "Reminders", t: "Confirm, remind, expect.", ch: "WhatsApp", when: "Day −1 → Day 0",
          html: `<div class="phone fwc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">K</div><div>Coach Kiran · Iron Studio<small>online</small></div></div>
              <div class="body">
                <div class="bub">Hi Ananya! Kiran here — I'm coaching Tue 7 PM. Your spot is booked ✅
                  <div class="board">
                    <div class="t">Free class · Tue 7:00 PM</div>
                    <div class="r"><span>Arrive</span><b>6:50 PM · form check</b></div>
                    <div class="r"><span>Bring</span><b>water, flat shoes</b></div>
                    <div class="r"><span>After</span><b>5-min plan chat</b></div>
                  </div>
                  Pehle kabhi barbell uthaya hai? Reply YES to confirm Tue — 1 person is waitlisted for your spot.
                  <span class="tm">Mon 6:02 PM</span>
                </div>
                <div class="bub me">Na 😅 sirf dumbbells. YES, confirmed<span class="tm">6:30 PM ✓✓</span></div>
                <div class="bub">Reminder: 6:50 PM today, 12th Main. Kiran will meet you at the door 💪<span class="tm">Tue 3:00 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Every message is about showing up", "Booked, confirmed, reminded, expected. Show-rate is the conversion rate of a free offer — nothing else matters until she's in the room."],
            ["A coach who already knows her", "“Dumbbells at home” means Tuesday's class is set for her. She'd be letting Kiran down, not a booking system."],
            ["Waitlist makes free feel owned", "One person wants her spot. The free thing now has a cost to losing it."]
          ],
          q: ["The free thing is worth nothing until it's consumed. Chase the consumption harder than you'd chase a payment.", "framework · free with consumption"]
        },
        {
          k: "The class", t: "Forty-five minutes, coached.", ch: "In person · studio floor", when: "Day 0 · 7:45 PM",
          html: `<div class="say">
            <div class="who"><div class="av">K</div><div><b>Coach Kiran</b><small>Studio floor · end of class</small></div></div>
            <q>Forty kilos on the bar, first time, clean reps. That's the class — same as everyone in this room does three times a week. <em>You just did what the membership is.</em> Grab water. Two minutes, then let's sit and I'll show you the four-week plan I promised.</q>
          </div>`,
          why: [
            ["She consumed the real product", "Not a taster session — the actual Tuesday class, coached. Buying is now “keep coming”, not “try something”."],
            ["A win she can name", "“Forty kilos, first time” is a result inside the free unit. Results sell; descriptions don't."],
            ["The plan chat was a condition", "Kiran isn't springing a pitch. He's delivering the thing she agreed to stay for."]
          ],
          q: ["The free unit should be the first real unit of the paid thing — not a diluted taste of it.", "framework · free with consumption"]
        },
        {
          k: "The plan chat", t: "Four weeks, on one card.", ch: "In person · bench by the desk", when: "Day 0 · 7:50 PM",
          html: `<div class="poster fwc-poster" style="text-align:left;width:460px">
            <div class="k">Ananya · 4-week plan · Iron Studio</div>
            <h5 style="font-size:26px;margin:8px 0 0">From 40 kg to 60 kg by Day 28</h5>
            <div class="fwc-plan">
              <div class="r"><span>Week 1 · Tue / Thu / Sat</span><b>40 → 45 kg</b></div>
              <div class="r"><span>Week 2 · Tue / Thu / Sat</span><b>45 → 50 kg</b></div>
              <div class="r"><span>Week 3 · Tue / Thu / Sat</span><b>50 → 55 kg</b></div>
              <div class="r"><span>Week 4 · Tue / Thu / Sat</span><b>55 → 60 kg</b></div>
              <div class="r"><span>Skip a week</span><span class="bad">back to 40 kg</span></div>
            </div>
            <p style="margin-top:10px">Founding rate today: <b>₹4,500/month</b> (list ₹5,500) · unlimited classes · pause any time.</p>
            <div class="fine" style="text-align:left">Rate held while you're in the studio tonight · first class already done ✓</div>
          </div>`,
          why: [
            ["The plan is the pitch", "Four rows of weights, not four bullets of benefits. She sees her own next month — and it needs the studio."],
            ["“Skip a week: back to 40 kg”", "The cost of not buying is written down. Free-with-consumption works when the loss of stopping is visible."],
            ["First class already done", "Tick on the card. The membership starts from class two; she is already inside the product."]
          ],
          q: ["Free-with-consumption pays for itself on one thing only: the pitch happens the moment the consumption ends.", "framework · free with consumption"]
        },
        {
          k: "Joining", t: "Paid on the bench, in gym kit.", ch: "UPI · at the desk", when: "Day 0 · 7:58 PM",
          html: `<div class="pay">
            <div class="h"><span>Iron Studio · Indiranagar</span><b>UPI · IN PERSON</b></div>
            <div class="body">
              <div class="row"><span>Unlimited coached classes</span><span>₹4,500 / mo</span></div>
              <div class="row"><span>Free first class (Tue 7 PM)</span><span>₹0</span></div>
              <div class="row"><span>Founding rate (list ₹5,500)</span><span>locked</span></div>
              <div class="row tot"><span>Pay today</span><span>₹4,500</span></div>
              <div class="note"><b>Next class:</b> Thu 7:00 PM with Kiran. Plan card on file: 40 → 60 kg by Day 28.</div>
              <div class="go">Pay ₹4,500 · UPI</div>
              <div class="disc">No joining fee · pause any time · rate held for life</div>
            </div></div>`,
          why: [
            ["One free spot became a member", "The studio's cost was one spot in a class that was running anyway. The no-shows cost nothing."],
            ["Next class on the receipt", "Thursday is booked before she leaves. Consumption doesn't stop at the sale — that's retention."],
            ["Cash on Day 0", "₹4,500 tonight funds the next week's free spots. The offer pays for its own ads."]
          ],
          q: ["The attraction offer's job is to buy a customer at a profit. Free with consumption does it with your product as the ad.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 4 · SERVICE / CONSULTANT · free audit, done live (adapted) ───────────────────────── */
    {
      label: "Agency · live free audit",
      source: "How the framework applies to a service business — a free audit consumed live on a call, never emailed (adapted)",
      client: "Rohan",
      about: "Rohan, 36, runs a furniture e-commerce store in Jaipur. Claims a free ads audit — free only if he is on the 45-min call while it is done. No PDF is sent. The audit ends with the pitch.",
      copy: `FREE ADS AUDIT — DONE LIVE, WITH YOU ON THE CALL
Free 45-min audit of your Meta ad account (worth ₹15,000).
Conditions: (1) book a slot within 5 days, (2) grant read-only ad-account access
24 hrs before, (3) the store owner is on the call — the audit is done live, not emailed.
No-show = audit cancelled, access revoked. 4 audits a week.
Ends with 3 fixes you can do yourself and a quote for us to do the rest.`,
      steps: [
        {
          k: "The ad", t: "Free audit. Live. No PDF.", ch: "LinkedIn · Instagram", when: "Day −5",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">SC</div><div><div class="nm">scaleworks.agency</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">D2C FOUNDERS · ₹5L+ / MO AD SPEND</div>
                <div><div class="big">Free ads audit.<br><em>Done live, with you watching.</em></div>
                <div class="sm">45 min in your Meta account. We don't email a PDF — you're on the call or it doesn't happen.</div></div>
              </div>
              <div class="cta"><span>scaleworks.in/audit</span><b>Book my audit</b></div>
              <div class="cap"><b>scaleworks.agency</b> 4 audits a week. You'll leave with 3 fixes you can do tonight. Owners only — not the intern.</div>
            </div></div></div>`,
          why: [
            ["No PDF is the mechanic", "An emailed audit is consumed alone, skimmed, forgotten. A live one is consumed with the seller present."],
            ["“Owners only” is a condition", "The person who can buy must be the one who consumes. Otherwise the free thing is consumed by someone who can't say yes."],
            ["Value is stated up front", "₹15,000 of work, free — but only to people who spend ₹5L+ a month. The filter is in the tag."]
          ],
          q: ["Free only works when it gets consumed. So give away the thing that must be consumed with you in the room.", "framework · free with consumption"]
        },
        {
          k: "Booking", t: "Access first. Then the slot.", ch: "Booking page", when: "Day −5",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">scaleworks.in/audit</div></div>
            <div class="body">
              <div class="eyebrow">Free live ads audit · D2C</div>
              <h5>Book 45 minutes. <em>Be on the call.</em></h5>
              <div class="fwc-slots">
                <div class="s"><b>MON</b>11:00 AM</div>
                <div class="s on"><b>TUE</b>4:00 PM</div>
                <div class="s"><b>WED</b>11:00 AM</div>
                <div class="s"><b>THU</b>4:00 PM</div>
                <div class="s off"><b>NEXT WEEK</b>—</div>
                <div class="s off"><b>LATER</b>—</div>
              </div>
              <ul class="fwc-cond">
                <li><i>1</i><span><b>Read-only ad-account access</b> — granted 24 hrs before, or the slot is released.</span></li>
                <li><i>2</i><span><b>Owner on the call, camera on</b> — we audit live and share screen. Nothing is emailed after.</span></li>
                <li><i>3</i><span><b>No-show = audit cancelled</b> — access revoked, slot goes to the waitlist. One reschedule allowed.</span></li>
              </ul>
              <div class="btn">Book Tue 4:00 PM · free <small>Store URL + ad-account ID required</small></div>
            </div></div>`,
          why: [
            ["Access is homework that predicts show-up", "Someone who grants access 24 hours early has already invested. Skin in the game before the free thing."],
            ["“Nothing is emailed after” said twice", "The only way to receive the value is to be there. That sentence is the whole offer."],
            ["5 days, not 30", "Slots beyond this week don't exist. Distance kills show rate; the calendar enforces closeness."]
          ],
          q: ["Attach conditions that make the free thing get used. The conditions are not the price — they are the point.", "framework · free with consumption"]
        },
        {
          k: "Reminders", t: "Access, then confirm, then join.", ch: "WhatsApp", when: "Day −1 → Day 0",
          html: `<div class="phone fwc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">N</div><div>Nikita · Scaleworks<small>online</small></div></div>
              <div class="body">
                <div class="bub">Rohan, Nikita here — I'm doing your audit Tue 4 PM. Access status 👇
                  <div class="board">
                    <div class="t">Audit · Tue 4:00 PM</div>
                    <div class="r"><span>Ad-account access</span><span class="warn">pending</span></div>
                    <div class="r"><span>Meet link</span><b>sent</b></div>
                  </div>
                  Grant access by 4 PM today (Partners → ID 2094…) or the slot releases.
                  <span class="tm">Mon 10:05 AM</span>
                </div>
                <div class="bub">✅ Access in. Already see something in your retargeting. Reply YES for Tue 4 PM, camera on.<span class="tm">11:52 AM</span></div>
                <div class="bub me">YES. Kya dikha? 👀<span class="tm">11:55 AM ✓✓</span></div>
                <div class="bub">Tomorrow 😄 Link in 30 min — I'll be on early.<span class="tm">Tue 3:30 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The reminder enforces the condition", "“Without it the slot releases” — the condition has a deadline and a consequence. Free with rules stays valuable."],
            ["Curiosity is the best reminder", "“Already see something in your retargeting” makes tomorrow's call something he'd hate to miss."],
            ["Tomorrow, not now", "The finding is not given over WhatsApp. Value is withheld until it can be consumed live."]
          ],
          q: ["The free thing is worth nothing until it's consumed. Chase the consumption harder than you'd chase a payment.", "framework · free with consumption"]
        },
        {
          k: "The audit", t: "Forty-five minutes, screen shared.", ch: "Google Meet · live", when: "Day 0 · 4:40 PM",
          html: `<div class="res fwc-audit">
            <div class="top2">
              <div class="k">Live audit · Rohan's Meta account · min 40 of 45</div>
              <h5>3 fixes you can do tonight</h5>
              <p>Shown on screen, in his account, with him watching. Nothing emailed.</p>
            </div>
            <div class="body">
              <div class="fwc-plan" style="margin-top:0">
                <div class="r"><span>01 · Retargeting window 180 → 30 days</span><b>≈ ₹38,000 / mo wasted</b></div>
                <div class="r"><span>02 · Catalog: 214 products with no price</span><b>ads disapproved</b></div>
                <div class="r"><span>03 · Broad campaign: 1 creative since March</span><b>frequency 6.1</b></div>
                <div class="r"><span>What we'd do next</span><span class="bad">said, not written</span></div>
              </div>
              <div class="fwc-note">Rohan is taking notes. Nikita: “That's the free part. Two minutes, then here's what we'd do if we ran it.”</div>
            </div></div>`,
          why: [
            ["Consumed live, in his own numbers", "Not a template deck. His account, his waste, on screen. He can't claim it and not use it — using it is watching it."],
            ["Real value, given away", "Three fixes he can genuinely do himself. Free that isn't valuable doesn't create the debt that makes the pitch land."],
            ["The rest is withheld", "“What we'd do next” is said, not written. The paid thing starts where the free thing stops."]
          ],
          q: ["If they consume, they buy. Your only job is to make the consumption happen and be there when it does.", "framework · free with consumption"]
        },
        {
          k: "The pitch", t: "Do it yourself, or we do it.", ch: "Google Meet · last 5 min", when: "Day 0 · 4:42 PM",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">₹0 <small>· do the 3 fixes yourself</small></div>
              <ul><li>You have what you need — tonight</li><li>Come back any time; standard fee ₹75,000/mo</li><li><b>Nobody's watching the account tomorrow.</b></li></ul>
              <div class="sub">Genuinely fine. Many do this.</div>
            </div>
            <div class="ch best">
              <div class="badge">What Nikita recommends</div>
              <div class="k">Option B · this week</div>
              <div class="p">₹60,000 <small>/ month · 90-day sprint</small></div>
              <ul><li>All 3 fixes done by Friday, by us</li><li>New creative weekly · catalog rebuilt</li><li><b>Audit price ₹15,000 credited to month 1</b></li></ul>
              <div class="cr">Pay ₹45,000 for month 1</div>
              <div class="sub">Slot held till Thursday · 4 clients per quarter · 1 left</div>
            </div>
          </div>`,
          why: [
            ["Both doors are honest", "Option A really works. That's why Option B is believable: he just watched the people who'd do it find ₹38,000 a month."],
            ["The free thing becomes credit", "₹15,000 of audit credited to month 1. The free unit is retroactively the down payment."],
            ["Asked on the same call", "Not a proposal next week. The pitch happens while the waste is still on the screen."]
          ],
          q: ["Free-with-consumption pays for itself on one thing only: the pitch happens the moment the consumption ends.", "framework · free with consumption"]
        },
        {
          k: "Invoice", t: "Month one, audit credited.", ch: "Razorpay · invoice", when: "Day 1",
          html: `<div class="pay">
            <div class="h"><span>Scaleworks · 90-day sprint</span><b>INVOICE · SW-0318</b></div>
            <div class="body">
              <div class="row"><span>Month 1 · ads management</span><span>₹60,000</span></div>
              <div class="row"><span>Live audit (Tue 4 PM) · credited</span><span>−₹15,000</span></div>
              <div class="row"><span>Ad spend (paid to Meta directly)</span><span>as is</span></div>
              <div class="row tot"><span>Pay today</span><span>₹45,000</span></div>
              <div class="note"><b>Kick-off:</b> Thu 11 AM. Fixes 01–03 live by Friday. Weekly call Tuesdays 4 PM — same slot as the audit.</div>
              <div class="go">Pay ₹45,000 · UPI / NEFT</div>
              <div class="disc">GST extra · 90-day term · month 2 due on Day 30</div>
            </div></div>`,
          why: [
            ["Free cost the agency 45 minutes", "One strategist-hour for one qualified owner who showed up. The no-shows cost zero — access was never even used."],
            ["The audit slot becomes the weekly call", "Tuesday 4 PM continues. The consumption habit built for free carries into the paid relationship."],
            ["Cash on Day 1", "₹45,000 funds the next four free audits. The attraction offer is self-funding by design."]
          ],
          q: ["The attraction offer's job is to buy a customer at a profit. Free with consumption does it with your product as the ad.", "framework · money models"]
        }
      ]
    }
  ]
});
