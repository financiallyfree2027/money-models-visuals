// Rollover Upsell — $100M Money Models, Section III (Upsell Offers), chapter "Rollover Upsell"
// Mechanic: whatever the client already paid for the front-end offer "rolls over" and counts toward the
// bigger purchase. The upsell feels discounted (or free) to the client; the business collects the larger total.
// Used right after the front-end purchase, or at the end of it.
// Examples 1–2 follow the settings the chapter itself uses (Alex's gym, Gym Launch); rupee/dollar figures are
// illustrative. Examples 3–4 are marked "(adapted)" in `source` — framework applications, not chapter stories.
window.OFFERS.push({
  slug: "rollover-upsell",
  name: "Rollover upsell",
  section: "Upsell",
  css: `
.ro-credit{color:var(--green-d);font-weight:600}
.ro-math{margin:12px 0 0;border:1px solid var(--line);border-radius:10px;overflow:hidden;font-size:13px}
.ro-math .r{display:flex;justify-content:space-between;padding:8px 12px;border-top:1px dashed var(--line)}
.ro-math .r:first-child{border-top:0}
.ro-math .r.tot{background:var(--green-xl);font-weight:600;color:var(--green-d)}
.ro-math .r.tot span:last-child{font-family:var(--serif);font-size:20px}
.ro-poster h5{font-size:30px}
.ro-poster .big{font-size:44px;margin:10px 0 2px}
.ro-poster p{font-size:12.5px}
.ro-tight .wa{min-height:400px}
.ro-tight .wa .body{gap:6px;padding:9px 8px}
.ro-tight .bub{padding:6px 9px}
.ro-tight .board{margin:4px 0;padding:6px 9px}
.ro-tight .board .r{padding:2px 0}
.ro-slide{width:560px;max-width:100%;background:#173D2C;color:#fff;border-radius:14px;padding:30px 34px;box-shadow:0 24px 60px rgba(30,30,26,.18);position:relative}
.ro-slide .k{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#7FE7C4}
.ro-slide h5{font-family:var(--serif);font-size:30px;line-height:1.05;margin:10px 0 14px;font-weight:600}
.ro-slide h5 em{font-style:italic;color:#B6F1D6}
.ro-slide .ro-math{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.06)}
.ro-slide .ro-math .r{border-color:rgba(255,255,255,.15)}
.ro-slide .ro-math .r.tot{background:rgba(127,231,196,.16);color:#B6F1D6}
.ro-slide .fine{margin-top:14px;font-size:11.5px;opacity:.75}
.ro-slide .pg{position:absolute;right:18px;bottom:14px;font-family:var(--mono);font-size:10px;opacity:.5}
.ro-ch .cr{line-height:1.4}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the book, localised) ───────────────────────── */
    {
      label: "Alex's gym · rollover",
      source: "Alex's own gym, as told in the book · localised to Pune",
      client: "Sunil",
      about: "Sunil, 41, Koregaon Park. Pays ₹15,000 for a 6-week challenge. Everything he paid rolls over into the annual membership — offered once right after he pays, and again on Day 42. Indian persona; mechanism as in the book.",
      copy: `ROLLOVER UPSELL — Challenge → Annual membership
Front end: 6-week challenge, ₹15,000 paid in full.
Upsell: 12-month membership, ₹60,000.
Mechanism: "The ₹15,000 you paid counts toward the year."
Client pays ₹45,000 more; business collects ₹60,000 total.
Offered twice: at checkout (Day 0) and at the Day-42 results meeting.
Rollover valid only until Day 42. Not stackable with other discounts.`,
      steps: [
        {
          k: "Payment", t: "The rollover is on the receipt.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Iron Lab Koregaon Park</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Challenge</span><span>₹15,000</span></div>
              <div class="row"><span>Coach + diet chart + 18 sessions</span><span>included</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹15,000</span></div>
              <div class="note"><b>Rolls over:</b> every rupee you pay today counts toward a 12-month membership (₹60,000) if you join by Day 42.</div>
              <div class="go">Pay ₹15,000 · UPI / Card</div>
              <div class="disc">GST invoice emailed · No refunds after Day 1</div>
            </div></div>`,
          why: [
            ["Full price on the front end", "The bigger the amount he pays now, the bigger the “discount” the rollover creates later. Discounting here shrinks the upsell."],
            ["Rollover printed at the moment of paying", "He reads “counts toward the year” before he has spent a day in the gym. The upsell is seeded, not sprung."],
            ["A deadline, not an open credit", "“By Day 42” makes the rollover expire with the challenge. Credit without expiry never converts."]
          ],
          q: ["Whatever they paid for the first thing counts toward the next thing. Nothing is refunded, yet the client feels nothing is lost.", "framework · rollover upsell"]
        },
        {
          k: "The ask", t: "Asked once, thirty seconds after paying.", ch: "In person · sales office", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">AK</div><div><b>Arjun, head coach</b><small>Iron Lab · sales office</small></div></div>
            <q>Quick one before you go. If you take the year today, the <em>₹15,000 you just paid rolls straight into it</em> — so the annual is ₹45,000, not ₹60,000. No pressure, the same deal stands on Day 42. Want it now or after?</q>
          </div>`,
          why: [
            ["Ask while the card is still warm", "The highest-intent moment a client ever has is the minute after buying. Asking here costs nothing and some say yes."],
            ["“Now or after” — not “yes or no”", "Both answers keep the rollover alive. A “no” today is just “ask me on Day 42”."],
            ["The bigger number is said out loud", "₹60,000 is spoken first so ₹45,000 lands as a saving, not a price."]
          ],
          q: ["Ask for the rollover right after the first purchase and again at the end. Two asks, one offer, no new discount.", "framework · rollover upsell"]
        },
        {
          k: "Week 3 check-in", t: "Progress, and a running credit.", ch: "WhatsApp", when: "Week 3",
          html: `<div class="phone ro-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">AK</div><div>Coach Arjun · Iron Lab<small>online</small></div></div>
              <div class="body">
                <div class="bub">Sunil bhai, halfway done 💪 Week 3 report:
                  <div class="board"><div class="t">Challenge · Week 3 of 6</div>
                    <div class="r"><span>Sessions</span><b>9 / 9</b></div>
                    <div class="r"><span>Weight</span><b>86.2 → 82.9 kg</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i></div>
                  </div><span class="tm">7:41 PM</span></div>
                <div class="bub">Reminder: your ₹15,000 is sitting as rollover credit for the annual till Day 42. Nothing to decide yet, just keep showing up.<span class="tm">7:42 PM</span></div>
                <div class="bub me">Solid. Let's see where I am on Day 42 🙏<span class="tm">8:05 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Scoreboard first, credit second", "The message is about his progress. The rollover is one line under it — a fact he owns, not a pitch."],
            ["Keeps the credit “his”", "“Your ₹15,000 is sitting there” frames the money as an asset with his name on it. Letting it lapse now feels like a loss."]
          ],
          q: ["The rollover works because the client already feels the money is theirs. Remind them it exists; don't sell it yet.", "framework · rollover upsell"]
        },
        {
          k: "Day 42 result", t: "Six weeks, and a credit balance.", ch: "Printed card · results meeting", when: "Day 42",
          html: `<div class="res">
            <div class="top2"><div class="k">Iron Lab · 6-week challenge</div><h5>−6.4 kg</h5><p>Sunil · 86.2 → 79.8 kg · 18 of 18 sessions</p></div>
            <div class="body">
              <div class="kv"><div><b>18/18</b><span>sessions</span></div><div><b>−6.4</b><span>kg</span></div><div><b>−7 cm</b><span>waist</span></div></div>
              <div class="credit"><b>₹15,000</b>rollover credit toward the 12-month membership · expires today</div>
            </div></div>`,
          why: [
            ["Result and credit on one card", "The number he is proud of and the money he can use sit two centimetres apart. The next decision writes itself."],
            ["“Expires today” in the client's hand", "The meeting has a clock. He is deciding between using ₹15,000 or losing it — not between joining or not."]
          ],
          q: ["End the front end on a result, then show what the money they paid can still buy.", "framework · rollover upsell"]
        },
        {
          k: "The choice", t: "Month-to-month, or roll it in.", ch: "Tablet · results meeting", when: "Day 42",
          html: `<div class="choice ro-ch">
            <div class="ch dim"><div class="k">Option A</div><div class="p">₹6,000<small>/ month</small></div>
              <ul><li><b>Month-to-month</b>, cancel anytime</li><li>Open gym + group classes</li><li class="no">Coach check-ins</li><li class="no">₹15,000 rollover credit</li></ul>
              <div class="sub">₹72,000 over a year · challenge fee not applied</div></div>
            <div class="ch best"><div class="badge">Your ₹15,000 rolls in</div><div class="k">Option B · Annual</div><div class="p"><s>₹60,000</s>₹45,000<small> today</small></div>
              <ul><li><b>12 months</b>, everything included</li><li>Open gym + group classes</li><li>Fortnightly coach check-ins</li><li><b>₹15,000 challenge fee applied</b></li></ul>
              <div class="cr">Pay ₹45,000 · you keep everything you paid</div><div class="sub">Rollover valid today only</div></div>
          </div>`,
          why: [
            ["The rollover only lives on one option", "Month-to-month loses the ₹15,000. Annual keeps it. He is choosing where his money goes, not whether to spend."],
            ["Strike-through does the maths", "₹60,000 → ₹45,000 is the whole pitch. Nobody has to explain a discount that isn't one."],
            ["Annual costs less than monthly, too", "₹72,000 vs ₹60,000 total. Even without the rollover, B wins; with it, A looks careless."]
          ],
          q: ["The business collects the full ₹60,000. The client experiences a ₹15,000 saving. Both are true at the same time.", "framework · rollover upsell"]
        },
        {
          k: "Annual checkout", t: "Sixty thousand. Forty-five today.", ch: "Razorpay", when: "Day 42",
          html: `<div class="pay">
            <div class="h"><span>Iron Lab Koregaon Park</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>12-month membership</span><span>₹60,000</span></div>
              <div class="row"><span>Rollover · 6-week challenge (paid 12 May)</span><span class="ro-credit">− ₹15,000</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹45,000</span></div>
              <div class="note"><b>Membership value ₹60,000.</b> ₹15,000 already paid · ₹45,000 now · valid 23 Jun – 22 Jun next year.</div>
              <div class="go">Pay ₹45,000 · UPI / Card</div>
              <div class="disc">Or 3 × ₹16,000 on EMI (₹48,000 total)</div>
            </div></div>`,
          why: [
            ["The rollover is a line item, not a discount", "“Discount: —” stays. The ₹15,000 line says “already paid”. The price of the year never moved."],
            ["Total value stays visible", "₹60,000 is printed above ₹45,000. He is buying a ₹60,000 membership, and he knows it."],
            ["EMI as the fallback, priced higher", "If ₹45,000 today is too much, the plan exists — and it costs more, so full pay stays the smart choice."]
          ],
          q: ["Never call the rollover a discount. It's their own money, applied. That phrasing is what keeps the annual price intact.", "framework · rollover upsell"]
        },
        {
          k: "Membership card", t: "Paid in full. Welcome to the year.", ch: "WhatsApp", when: "Day 42",
          html: `<div class="phone ro-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">AK</div><div>Coach Arjun · Iron Lab<small>online</small></div></div>
              <div class="body">
                <div class="bub">Welcome to the year, Sunil bhai 🎉
                  <div class="board"><div class="t">Iron Lab · Annual member</div>
                    <div class="r"><span>Member since</span><b>12 May</b></div>
                    <div class="r"><span>Challenge fee applied</span><b>₹15,000</b></div>
                    <div class="r"><span>Paid today</span><b>₹45,000</b></div>
                    <div class="r"><span>Valid till</span><b>22 Jun next year</b></div>
                  </div><span class="tm">6:12 PM</span></div>
                <div class="bub">Next goal: 75 kg by Diwali. First check-in Monday 7 PM.<span class="tm">6:12 PM</span></div>
                <div class="bub me">Done deal. See you Monday 🔥<span class="tm">6:30 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["“Member since” is backdated to Day 0", "The challenge was his first six weeks as a member. That is what a rollover means, and the card says so."],
            ["Immediately give the next goal", "The year is bought; now it needs a reason to be used. A retained member is next year's rollover."]
          ],
          q: ["An upsell isn't done when it's paid. It's done when the client is already working toward the next result.", "framework · upsell offers"]
        }
      ]
    },

    /* ───────────────────────── 2 · GYM LAUNCH (from the book) ───────────────────────── */
    {
      label: "Gym Launch · rollover",
      source: "Gym Launch, as told in the book · US-native, kept in dollars",
      client: "Dave",
      about: "Dave owns a 1,800 sq ft gym in Ohio. He pays for a 6-week launch that fills his gym. At the end, everything he paid rolls over into the year-long licensing program. Dollar figures are illustrative, not book quotes.",
      copy: `ROLLOVER UPSELL — Gym launch → 12-month licence
Front end: 6-week gym launch, $5,000 paid upfront.
Upsell: 12-month licensing program, $16,000.
Mechanism: "Your $5,000 launch fee counts toward the year."
Client pays $11,000 more; business collects $16,000 total.
Offered on the end-of-launch results call. Rollover expires 7 days after the launch ends.`,
      steps: [
        {
          k: "Sales call", t: "The launch fee is never lost.", ch: "Phone call", when: "Day −2",
          html: `<div class="say">
            <div class="who"><div class="av">GL</div><div><b>Sam, Gym Launch</b><small>Sales call · 34 min</small></div></div>
            <q>It's $5,000 for the six-week launch. We run the ads, the scripts and the sales for you. And Dave — <em>if you want to keep going after, the $5,000 rolls into the year.</em> You're never paying for the launch twice.</q>
          </div>`,
          why: [
            ["Rollover mentioned at the front-end sale", "Dave hears “rolls into the year” before he pays for the launch. The bigger program is planted as the obvious next step."],
            ["Lowers the risk of buying the front end", "If the launch works, the money isn't spent — it's applied. That makes $5,000 easier to say yes to today."]
          ],
          q: ["A rollover makes the front end safer to buy and the back end easier to sell. One line does both jobs.", "framework · rollover upsell"]
        },
        {
          k: "Launch payment", t: "Five thousand, applied to the year.", ch: "Stripe", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch</span><b>STRIPE · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Gym Launch</span><span>$5,000</span></div>
              <div class="row"><span>Ads, scripts, sales training, daily calls</span><span>included</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>$5,000</span></div>
              <div class="note"><b>Rollover:</b> $5,000 counts in full toward the 12-month licensing program ($16,000) if you enrol within 7 days of launch end.</div>
              <div class="go">Pay $5,000</div>
              <div class="disc">Invoice to Dave's Strength Co · Ohio</div>
            </div></div>`,
          why: [
            ["Rollover written into the terms", "It's on the receipt with an amount, a target program and a deadline. No memory, no argument later."],
            ["Full front-end price", "The $5,000 has to be real money for the rollover to feel like real money at the end."]
          ],
          q: ["Print the rollover on the first receipt. The upsell should already be half-sold by the time it's offered.", "framework · rollover upsell"]
        },
        {
          k: "Week 4 update", t: "The gym is filling up.", ch: "Email", when: "Week 4",
          html: `<div class="mail">
            <div class="h"><div class="s">Week 4: 31 new members · $12,400 collected</div><div class="f">From: Sam at Gym Launch · To: dave@davesstrengthco.com</div></div>
            <div class="body">
              <p>Dave — week 4 numbers below. Two weeks left in the launch.</p>
              <div class="ro-math">
                <div class="r"><span>Leads from ads</span><span>212</span></div>
                <div class="r"><span>Shows</span><span>97</span></div>
                <div class="r"><span>New members signed</span><span>31</span></div>
                <div class="r tot"><span>Front-end cash collected</span><span>$12,400</span></div>
              </div>
              <p style="margin-top:12px">Results call is booked for Day 42. We'll go through what to keep running — and your $5,000 rollover is still on the table till Day 49.</p>
              <div class="cta">Confirm Day-42 results call</div>
            </div></div>`,
          why: [
            ["Proof before the ask", "$12,400 collected against $5,000 paid. The launch has already paid for itself; the rollover ask lands on a client who is winning."],
            ["Rollover deadline restated", "Day 49 is in the email. By the results call it's a known fact, not a surprise."]
          ],
          q: ["The best time to sell the next thing is while the first thing is visibly working.", "framework · upsell offers"]
        },
        {
          k: "Launch results", t: "Six weeks, in three numbers.", ch: "Zoom · results call", when: "Day 42",
          html: `<div class="tiles">
            <div class="tile"><b>47</b><span>new members</span></div>
            <div class="tile"><b>$19,300</b><span>cash collected</span></div>
            <div class="tile"><b>3.9×</b><span>return on $5,000</span></div>
          </div>`,
          why: [
            ["Return on the launch fee, stated as a multiple", "3.9× is the number the rollover leans on: “that $5,000 made you $19,300 — now it counts toward the year.”"],
            ["Numbers the client already believes", "Every tile is his own bank account. Nothing here is Gym Launch's claim."]
          ],
          q: ["Show the front end's result as a return on what they paid. Then roll that payment into the bigger thing.", "framework · rollover upsell"]
        },
        {
          k: "The rollover", t: "Sixteen, minus the five you paid.", ch: "Zoom · results call", when: "Day 42",
          html: `<div class="choice ro-ch">
            <div class="ch dim"><div class="k">Option A</div><div class="p">$0<small> · stop here</small></div>
              <ul><li><b>Keep what you built</b></li><li>Ads switched off Friday</li><li class="no">Weekly coaching calls</li><li class="no">New offers every quarter</li><li class="no">$5,000 rollover credit</li></ul>
              <div class="sub">Launch fee stays spent</div></div>
            <div class="ch best"><div class="badge">$5,000 rolls in</div><div class="k">Option B · 12-month licence</div><div class="p"><s>$16,000</s>$11,000<small> today</small></div>
              <ul><li><b>12 months</b> of ads, scripts, sales</li><li>Weekly coaching calls</li><li>New offers every quarter</li><li><b>Launch fee applied in full</b></li></ul>
              <div class="cr">Pay $11,000 · or 4 × $3,000 ($12,000)</div><div class="sub">Rollover valid till Day 49</div></div>
          </div>`,
          why: [
            ["“Stop here” costs him the credit", "Option A isn't free — it forfeits $5,000 of value. The rollover turns “not buying” into a loss."],
            ["Full price shown, then reduced by his own money", "$16,000 is the licence. $11,000 is what's left. The programme was never discounted."],
            ["Plan available, priced above pay-in-full", "4 × $3,000 catches the cash-tight owner without making the $11,000 look expensive."]
          ],
          q: ["Rollover plus a deadline: the client is now choosing between using their money or losing it.", "framework · rollover upsell"]
        },
        {
          k: "Licence checkout", t: "Eleven thousand, and the year is on.", ch: "Stripe", when: "Day 43",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch</span><b>STRIPE · SECURE</b></div>
            <div class="body">
              <div class="row"><span>12-month licensing program</span><span>$16,000</span></div>
              <div class="row"><span>Rollover · 6-week launch (paid Day 0)</span><span class="ro-credit">− $5,000</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>$11,000</span></div>
              <div class="note"><b>Programme value $16,000.</b> $5,000 already paid · $11,000 now · licence runs 12 months from today.</div>
              <div class="go">Pay $11,000 in full</div>
              <div class="disc">Or 4 monthly payments of $3,000</div>
            </div></div>`,
          why: [
            ["Business collects $16,000 total", "$5,000 six weeks ago plus $11,000 today. The front end was never a loss leader — it was a deposit."],
            ["Discount line stays blank", "The licence has one price. The client's own money reduces what's due, not what it's worth."]
          ],
          q: ["The front end funds the ads; the rollover funds the year. Nothing given away, everything applied.", "framework · rollover upsell"]
        }
      ]
    },

    /* ───────────────────────── 3 · CLINIC (adapted) ───────────────────────── */
    {
      label: "Clinic · fee rolls in",
      source: "How the framework applies to a fee-first service business — skin clinic (adapted; not a chapter story)",
      client: "Meera",
      about: "Meera, 29, Jaipur. Pays ₹999 for a dermatologist consult. The fee rolls into any treatment package if she books at the same visit. Indian persona; fully adapted from the framework.",
      copy: `ROLLOVER UPSELL — Paid consult → Treatment package
Front end: dermatologist consultation, ₹999 (no free consults).
Upsell: 6-session acne-clear package, ₹18,000.
Mechanism: "Your ₹999 counts toward any package booked today."
Client pays ₹17,001 more; clinic collects ₹18,000 total.
Offered at the end of the consult. Rollover valid same day only.`,
      steps: [
        {
          k: "The ad", t: "Paid consult, never wasted.", ch: "Instagram", when: "Day −4",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">GS</div><div><div class="nm">glowskin.jaipur</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">JAIPUR · C-SCHEME</div>
                <div><div class="big">₹999 skin consult.<br><em>Counts toward any package.</em></div>
                <div class="sm">Dermatologist, 30 min, skin scan. Book a package the same day and the ₹999 rolls in.</div></div>
              </div>
              <div class="cta"><span>glowskin.in/consult</span><b>Book ₹999 slot</b></div>
              <div class="cap"><b>glowskin.jaipur</b> No free consults, no sales calls. Sirf doctor time. Paisa package mein adjust ho jaata hai. 👇</div>
            </div></div>`,
          why: [
            ["Charge for the consult, promise the rollover", "A ₹999 fee filters for real patients. “Counts toward any package” removes the fear of paying for nothing."],
            ["The upsell is announced in the ad", "She knows a package exists before she walks in. The rollover ask at the end is expected, not sprung."]
          ],
          q: ["Charge for the first step, then let that money count toward the second. Free consults attract browsers; rollovers attract buyers.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Booking", t: "Nine ninety-nine, held as credit.", ch: "Razorpay", when: "Day −4",
          html: `<div class="pay">
            <div class="h"><span>GlowSkin Clinic Jaipur</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Dermatologist consult · 30 min</span><span>₹999</span></div>
              <div class="row"><span>Skin scan + written plan</span><span>included</span></div>
              <div class="row tot"><span>Pay today</span><span>₹999</span></div>
              <div class="note"><b>Rolls over:</b> ₹999 is applied in full to any treatment package booked on the day of your consult.</div>
              <div class="go">Pay ₹999 · UPI / Card</div>
              <div class="disc">Sat 14 Jun · 11:30 AM · Dr. Nidhi Rathore</div>
            </div></div>`,
          why: [
            ["“On the day of your consult”", "The deadline is the visit itself. She walks in already knowing today is the day the credit is worth something."],
            ["Small front end, still full price", "₹999 is small, but it is paid, not waived. Waived fees can't roll over."]
          ],
          q: ["The rollover needs a real payment behind it. A ₹0 front end has nothing to roll.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "The consult", t: "The plan, then the rollover.", ch: "In person · consult room", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">NR</div><div><b>Dr. Nidhi Rathore</b><small>GlowSkin · consult room</small></div></div>
            <q>Six sessions, three weeks apart, and this clears. The package is ₹18,000 — and <em>the ₹999 you paid today goes straight into it</em> if you book before you leave. So it's ₹17,001, and your first session is Tuesday.</q>
          </div>`,
          why: [
            ["Doctor delivers the rollover, not a receptionist", "The person who diagnosed her names the price. Authority and offer come from the same mouth."],
            ["Full price first, then her money applied", "₹18,000 is said before ₹17,001. The package is not discounted; her consult is honoured."],
            ["“Before you leave” is the deadline", "Same-day rollover turns a “let me think” into a decision at the desk."]
          ],
          q: ["Deliver the front end fully, then roll its price into the next step in the same breath.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Counter card", t: "The rollover, printed at reception.", ch: "Counter card · reception", when: "Day 0",
          html: `<div class="poster ro-poster">
            <div class="k">GlowSkin · book today</div>
            <h5>Your consult fee <em>rolls into</em> your package.</h5>
            <div class="big">₹999</div>
            <p>applied in full to any treatment package booked on the day of your consultation.</p>
            <div class="ro-math">
              <div class="r"><span>Acne-clear · 6 sessions</span><span>₹18,000</span></div>
              <div class="r"><span>Your consult today</span><span class="ro-credit">− ₹999</span></div>
              <div class="r tot"><span>Pay today</span><span>₹17,001</span></div>
            </div>
            <div class="fine">Valid on the day of consult only · Not combinable with other offers</div>
          </div>`,
          why: [
            ["Same maths, on the wall", "What the doctor said inside is printed outside. She sees it while paying; no one has to repeat the pitch."],
            ["One deadline, everywhere", "Ad, receipt, doctor, counter — all say “today”. Consistency is what makes a deadline believable."]
          ],
          q: ["Say the rollover in every channel the client touches. It should feel like a rule of the house, not a pitch.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Checkout", t: "Eighteen thousand. Her fee applied.", ch: "Razorpay · reception", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>GlowSkin Clinic Jaipur</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Acne-clear package · 6 sessions</span><span>₹18,000</span></div>
              <div class="row"><span>Rollover · consult fee (paid today)</span><span class="ro-credit">− ₹999</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹17,001</span></div>
              <div class="note"><b>Package value ₹18,000.</b> ₹999 already paid · ₹17,001 now · session 1 on Tue 17 Jun.</div>
              <div class="go">Pay ₹17,001 · UPI / Card</div>
              <div class="disc">Or 3 × ₹6,000 (₹18,000 total)</div>
            </div></div>`,
          why: [
            ["Clinic collects ₹18,000 in total", "₹999 at booking, ₹17,001 at the desk. The consult fee was a deposit on the package all along."],
            ["Odd number, honest maths", "₹17,001 looks like arithmetic, not marketing. That is exactly why it works."]
          ],
          q: ["The client sees their money honoured. The business sees full price collected. That is the whole rollover.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Reminder", t: "Session one, and the credit used.", ch: "WhatsApp", when: "Day 3",
          html: `<div class="phone ro-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">GS</div><div>GlowSkin Jaipur<small>online</small></div></div>
              <div class="body">
                <div class="bub">Hi Meera! Session 1 is tomorrow 🌿
                  <div class="board"><div class="t">Acne-clear · 6 sessions</div>
                    <div class="r"><span>Session 1</span><b>Tue 17 Jun · 5 PM</b></div>
                    <div class="r"><span>Consult fee applied</span><b>₹999</b></div>
                    <div class="r"><span>Package paid</span><b>₹18,000 ✓</b></div>
                    <div class="pips"><i class="ok"></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div><span class="tm">10:02 AM</span></div>
                <div class="bub">Skip makeup tomorrow, and drink water — Dr. Nidhi's orders 😄<span class="tm">10:02 AM</span></div>
                <div class="bub me">Will do, thank you!<span class="tm">10:40 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The board shows the fee as applied", "“Consult fee applied ₹999” closes the loop. She got what the ad promised, and sees it."],
            ["Straight into delivery", "The reminder is about tomorrow's session. The upsell is over; retention has begun."]
          ],
          q: ["Close the loop visibly: show the client their first payment living inside the second.", "framework · upsell offers (adapted)"]
        }
      ]
    },

    /* ───────────────────────── 4 · WORKSHOP → COHORT (adapted) ───────────────────────── */
    {
      label: "Workshop · rollover",
      source: "How the framework applies to education / online courses — paid workshop into a cohort (adapted; not a chapter story)",
      client: "Rohan",
      about: "Rohan, 26, Bengaluru. Pays ₹499 for a 2-hour live workshop. At the end, the ticket rolls into the 8-week cohort. Indian persona; fully adapted from the framework.",
      copy: `ROLLOVER UPSELL — Paid workshop → 8-week cohort
Front end: 2-hour live workshop, ₹499.
Upsell: 8-week cohort, ₹15,000.
Mechanism: "Your ₹499 ticket counts toward the cohort."
Client pays ₹14,501 more; business collects ₹15,000 total.
Offered on the last slide of the workshop. Rollover valid 48 hours.`,
      steps: [
        {
          k: "The ad", t: "A ticket that counts later.", ch: "Instagram", when: "Day −6",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">FF</div><div><div class="nm">freelance.fundamentals</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">LIVE · SAT 10 AM</div>
                <div><div class="big">Land your first ₹50k client.<br><em>2-hour live workshop.</em></div>
                <div class="sm">₹499. If you join the cohort after, the ₹499 counts toward it.</div></div>
              </div>
              <div class="cta"><span>ff.in/workshop</span><b>Get ticket ₹499</b></div>
              <div class="cap"><b>freelance.fundamentals</b> 200 seats. Recording nahi milegi — live aao. Ticket paisa cohort mein adjust. 👇</div>
            </div></div></div>`,
          why: [
            ["Paid, not free", "A ₹499 ticket produces attendees who show up. A free webinar produces registrations."],
            ["Rollover in the ad copy", "“Counts toward it” pre-frames the cohort pitch. Nobody feels ambushed on the last slide."]
          ],
          q: ["A small paid front end with a rollover beats a free front end: better attendance, and a pitch that's already expected.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Ticket", t: "Four ninety-nine, credited forward.", ch: "Razorpay", when: "Day −6",
          html: `<div class="pay">
            <div class="h"><span>Freelance Fundamentals</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Live workshop · Sat 10 AM · 2 hrs</span><span>₹499</span></div>
              <div class="row"><span>Pitch template + pricing sheet</span><span>included</span></div>
              <div class="row tot"><span>Pay today</span><span>₹499</span></div>
              <div class="note"><b>Rolls over:</b> ₹499 counts in full toward the 8-week cohort (₹15,000) if you enrol within 48 hours of the workshop.</div>
              <div class="go">Pay ₹499 · UPI / Card</div>
              <div class="disc">Zoom link on WhatsApp · No recording</div>
            </div></div>`,
          why: [
            ["The rollover has a clock from Day −6", "48 hours after the workshop is on the receipt a week early. The deadline is a fact, not a tactic."],
            ["Cohort price shown now", "₹15,000 is on the ticket receipt. By pitch time it is a known number, not a shock."]
          ],
          q: ["Print the destination price on the front-end receipt. The upsell is easier when the number is old news.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Reminder", t: "Tomorrow, ten sharp.", ch: "WhatsApp", when: "Day −1",
          html: `<div class="phone ro-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">FF</div><div>Freelance Fundamentals<small>online</small></div></div>
              <div class="body">
                <div class="bub">Rohan, kal 10 AM sharp. Zoom link 👇 Bring one service you could sell — we price it live.
                  <div class="board"><div class="t">Your ticket</div>
                    <div class="r"><span>Workshop</span><b>Sat 10:00 AM</b></div>
                    <div class="r"><span>Paid</span><b>₹499</b></div>
                    <div class="r"><span>Rollover to cohort</span><b>till Mon 10 AM</b></div>
                  </div><span class="tm">6:00 PM</span></div>
                <div class="bub me">Ready. Video editing for D2C brands 👍<span class="tm">6:22 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Show-up message does the real work", "Attendance is the whole battle for a paid workshop. Everything else on this screen is secondary."],
            ["Rollover shown as a ticket detail", "One row on the ticket card. Not a pitch, just a term he already agreed to."]
          ],
          q: ["Every front-end touchpoint can carry the rollover as a quiet line. Repetition without selling.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Last slide", t: "Your ticket comes with you.", ch: "Zoom · workshop", when: "Day 0",
          html: `<div class="ro-slide">
            <div class="k">Freelance Fundamentals · 8-week cohort</div>
            <h5>You paid ₹499 to be here.<br><em>It counts toward the cohort.</em></h5>
            <div class="ro-math">
              <div class="r"><span>8-week cohort · starts 24 Jun</span><span>₹15,000</span></div>
              <div class="r"><span>Your workshop ticket</span><span style="color:#B6F1D6">− ₹499</span></div>
              <div class="r tot"><span>Enrol by Mon 10 AM</span><span>₹14,501</span></div>
            </div>
            <div class="fine">30 seats · Weekly live calls · Portfolio review · Client outreach done with you</div>
            <div class="pg">42 / 42</div>
          </div>`,
          why: [
            ["The pitch is one slide of maths", "Full price, his ticket, what's left, and a deadline. No new discount had to be invented."],
            ["“You paid to be here” is the frame", "The room is full of people who already bought. The cohort is the same decision, bigger."],
            ["Deadline matches the receipt", "Monday 10 AM was on his ticket six days ago. Now it's on screen."]
          ],
          q: ["At the end of the front end, roll its price into the back end on one screen. Full price, their money, the difference, the date.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Checkout", t: "Fifteen thousand. Ticket applied.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Freelance Fundamentals</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>8-week cohort · 24 Jun batch</span><span>₹15,000</span></div>
              <div class="row"><span>Rollover · workshop ticket (paid 8 Jun)</span><span class="ro-credit">− ₹499</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹14,501</span></div>
              <div class="note"><b>Cohort value ₹15,000.</b> ₹499 already paid · ₹14,501 now · rollover expires Mon 10 AM.</div>
              <div class="go">Pay ₹14,501 · UPI / Card</div>
              <div class="disc">Or 2 × ₹7,750 (₹15,500 total)</div>
            </div></div>`,
          why: [
            ["₹15,000 collected in total", "₹499 last week, ₹14,501 now. The workshop was the cohort's first instalment, whether or not he knew it."],
            ["The plan costs more", "2 × ₹7,750 is there for the cash-tight, and it's ₹500 dearer — so pay-in-full stays the sensible choice."]
          ],
          q: ["The rollover is not a ₹499 loss to the business. It's a ₹15,000 sale that started a week earlier.", "framework · rollover upsell (adapted)"]
        },
        {
          k: "Welcome", t: "In the cohort. Week one starts.", ch: "WhatsApp", when: "Day 1",
          html: `<div class="phone ro-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">FF</div><div>FF Cohort · June<small>31 members</small></div></div>
              <div class="body">
                <div class="bub">Welcome Rohan 🎉 You're in.
                  <div class="board"><div class="t">8-week cohort · June batch</div>
                    <div class="r"><span>Workshop ticket applied</span><b>₹499</b></div>
                    <div class="r"><span>Paid</span><b>₹15,000 ✓</b></div>
                    <div class="r"><span>Call 1</span><b>Tue 24 Jun · 8 PM</b></div>
                  </div><span class="tm">11:15 AM</span></div>
                <div class="bub">Homework before Tuesday: list 20 D2C brands you'd edit for. We'll pick 5 together.<span class="tm">11:15 AM</span></div>
                <div class="bub me">On it 🚀<span class="tm">11:30 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Ticket shown as applied", "The ₹499 line proves the promise was kept. That trust is what makes the next rollover, into the next thing, work."],
            ["Straight into homework", "A cohort that starts with a task is a cohort people finish. Finished clients are the next upsell's audience."]
          ],
          q: ["Every honoured rollover buys credibility for the next one. Keep the promise visibly.", "framework · upsell offers (adapted)"]
        }
      ]
    }
  ]
});
