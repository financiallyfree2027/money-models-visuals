// Payment Plans — $100M Money Models, Section IV (Downsell Offers)
// Mechanic: when the customer says "no" to the full price, don't cut the price — change the TERMS.
// Same (or higher) total, split into instalments; first payment today; card on file; the sale that
// would have walked out the door is kept.
// Example 1 is the gym setting the chapter uses (localised, figures illustrative). Examples 2–3 are
// marked "(adapted)" in `source`: they apply the chapter's framework to other settings — verify.
window.OFFERS.push({
  slug: "payment-plans",
  name: "Payment plans",
  section: "Downsell",
  css: `
.pp-talk{width:540px;max-width:100%;display:flex;flex-direction:column;gap:12px}
.pp-talk .say{width:100%;padding:20px 24px}
.pp-talk .say q{font-size:17px}
.pp-talk .say.them{background:var(--green-xl);border-color:var(--green-l)}
.pp-talk .say.them .who .av{background:var(--coral)}
.pp-talk .say .who{margin-bottom:8px}
.pp-doc h5{font-size:22px}
.pp-doc .chk{padding:7px 0}
.pp-doc .sig .l{width:150px}
.pp-doc .sig small{white-space:nowrap}
.pp-tight .wa{min-height:0}
.pp-tight .wa .body{gap:6px;padding:9px 8px}
.pp-tight .bub{padding:6px 9px}
.pp-tight .board{margin:4px 0;padding:6px 9px}
.pp-tight .board .r{padding:2px 0}
.pp-choice .ch .p{font-size:28px}
.pp-choice .ch .p small{display:block;margin-top:4px}
.pp-app{width:320px;max-width:100%;background:#fff;border-radius:22px;border:1px solid var(--line);box-shadow:0 24px 60px rgba(30,30,26,.14);overflow:hidden;font-size:12.5px}
.pp-app .h{background:#1E1E1A;color:#fff;padding:16px 18px 14px}
.pp-app .h .k{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:#7FE7C4}
.pp-app .h b{display:block;font-family:var(--serif);font-size:22px;margin-top:6px;font-weight:600}
.pp-app .body{padding:16px 18px}
.pp-app .st{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--line);color:var(--dim)}
.pp-app .st i{width:18px;height:18px;border-radius:50%;background:var(--green);color:#fff;font-size:11px;font-style:normal;display:flex;align-items:center;justify-content:center;flex:none}
.pp-app .st i.wait{background:#eee;color:var(--mute)}
.pp-app .st b{color:var(--ink);display:block;font-size:12.5px}
.pp-app .st span{font-size:11px}
.pp-app .go{margin-top:14px;background:var(--green);color:#fff;text-align:center;padding:11px;border-radius:9px;font-weight:600}
.pp-app .fine{margin-top:8px;font-size:10.5px;color:var(--mute);text-align:center;line-height:1.4}
.pp-res .credit{text-align:left}
.pp-res .credit b{font-size:20px}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM — the "no" at the sales table (book setting, localised) ───────────────────────── */
    {
      label: "Alex's gym · the split",
      source: "Alex's gym, the setting the chapter uses · localised to Indore (figures illustrative — verify against the chapter)",
      client: "Sunita",
      about: "Sunita, 41, Vijay Nagar. Hears the 12-week programme price, says ₹24,000 in one go is not possible this month, and is offered the same programme as 3 × ₹9,000 — first one today, card saved. Indian persona; mechanic as in the book.",
      copy: `PAYMENT PLAN — 12-Week Transformation (downsell, offered only after a "no")
Full price: ₹24,000 today.
If they say no to the price: "Would it help if we split it up?"
Plan: 3 × ₹9,000 = ₹27,000 (plan costs more, never less).
Instalment 1 today, then the 5th of the next 2 months — auto-debit, card saved at sign-up.
Plan finishes in week 8 of 12; sessions pause if a debit fails until it clears.
No refunds on paid instalments. Pay-in-full option stays open at ₹24,000 any time before debit 2.`,
      steps: [
        {
          k: "The price", t: "Full price, said across the table.", ch: "In person · sales table", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">V</div><div><b>Coach Vikram</b><small>Iron Fit Indore · consultation</small></div></div>
            <q>Sunita ji, the 12-week programme is what fixes this. Three sessions a week with me, the meal plan, weekly check-ins. <em>₹24,000, and we start Monday.</em> Shall I put you in the 6:30 batch?</q>
          </div>`,
          why: [
            ["Ask for the full price first", "The downsell only exists after a real no. If you lead with the plan, you have just discounted for everyone."],
            ["Price, then the close", "“₹24,000, and we start Monday” — one number, one date, one question. The no, if it comes, will be about money, not about the programme."],
            ["The full price is the anchor", "Everything she is offered next is measured against ₹24,000. It has to be said out loud before the split makes sense."]
          ],
          q: ["Sell the full price with a straight face. The payment plan is a rescue, not the opening offer.", "framework · payment plans"]
        },
        {
          k: "The no", t: "She says no. He changes the terms.", ch: "In person · sales table", when: "Day 0",
          html: `<div class="pp-talk">
            <div class="say them">
              <div class="who"><div class="av">S</div><div><b>Sunita</b><small>client · after hearing the price</small></div></div>
              <q>I want to do it. But ₹24,000 in one go — honestly, not this month. Let me think and come back.</q>
            </div>
            <div class="say">
              <div class="who"><div class="av">V</div><div><b>Coach Vikram</b><small>Iron Fit Indore</small></div></div>
              <q>Totally fair — that's a real number. Forget the ₹24,000 for a second. <em>If we split it up so it's ₹9,000 today and the same twice more, would that work?</em></q>
            </div>
          </div>`,
          why: [
            ["“Let me think” is a money objection", "She said yes to the programme and no to the payment. The price is not the problem — the lump sum is."],
            ["Don't discount, change the terms", "The reply never touches the value or the price. It changes when the money moves. That keeps ₹24,000 intact for everyone else."],
            ["Ask a yes/no question", "“Would that work?” gives her a way to say yes right now, instead of a reason to leave and forget."]
          ],
          q: ["The cheapest thing you can give a customer who says no to the price is time — not a discount.", "framework · payment plans"]
        },
        {
          k: "The plan", t: "Same programme. Three payments. More total.", ch: "In person · price card", when: "Day 0",
          html: `<div class="choice pp-choice">
            <div class="ch dim">
              <div class="k">Pay in full</div>
              <div class="p">₹24,000 <small>today · one payment</small></div>
              <ul><li>12-week programme · 36 sessions</li><li>Meal plan + weekly check-ins</li><li><b>Lowest total.</b> Open till your 2nd debit.</li></ul>
              <div class="sub">What you said no to — still available.</div>
            </div>
            <div class="ch best">
              <div class="badge">Start today</div>
              <div class="k">Payment plan</div>
              <div class="p">3 × ₹9,000 <small>total ₹27,000</small></div>
              <ul><li>Exactly the same programme</li><li>₹9,000 today · ₹9,000 on 5 Jul · ₹9,000 on 5 Aug</li><li><b>Card saved today · auto-debit</b></li></ul>
              <div class="cr">Start Monday with ₹9,000</div>
              <div class="sub">Plan ends week 8 · sessions pause if a debit fails</div>
            </div>
          </div>`,
          why: [
            ["The plan costs more, not less", "₹27,000 on the plan vs ₹24,000 in full. Convenience is what she is buying; the extra ₹3,000 pays for the risk of collecting later."],
            ["Nothing removed from the product", "Same sessions, same meal plan. A payment plan is a terms downsell, not a feature downsell — she must not feel she got the cheap version."],
            ["Pay-in-full stays on the table", "If money frees up, she can clear it and save ₹3,000. That is a second chance at the full-price sale, not a concession."]
          ],
          q: ["A payment plan is the same price paid in more pieces. If it ends up cheaper, it's a discount with extra steps.", "framework · payment plans"]
        },
        {
          k: "First payment", t: "₹9,000 today. Card saved.", ch: "Razorpay · at the desk", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Iron Fit Indore</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>12-week programme · 3-instalment plan</span><span>₹27,000</span></div>
              <div class="row"><span>Instalment 1 of 3 · today</span><span>₹9,000</span></div>
              <div class="row"><span>Instalment 2 · 5 Jul · auto-debit</span><span>₹9,000</span></div>
              <div class="row"><span>Instalment 3 · 5 Aug · auto-debit</span><span>₹9,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹9,000</span></div>
              <div class="note"><b>Card on file:</b> your card is saved for the two remaining debits. Sessions pause if a debit fails, and resume the moment it clears.</div>
              <div class="go">Pay ₹9,000 · save card for plan</div>
              <div class="disc">Pay-in-full at ₹24,000 available any time before 5 Jul</div>
            </div></div>`,
          why: [
            ["First payment today, not Monday", "A plan that starts next week is a maybe. ₹9,000 leaving her card now is the commitment — and the sale."],
            ["Card saved at the moment of yes", "Chasing instalments by phone is where payment plans die. The card is stored while she is most motivated."],
            ["All three dates on the receipt", "No surprise debits. She knows what leaves, when, and what happens if it doesn't."]
          ],
          q: ["Get the first payment and the card on file in the same sitting. A payment plan without a card on file is a loan you didn't mean to give.", "framework · payment plans"]
        },
        {
          k: "The mandate", t: "Three dates, one signature.", ch: "Paper · at the desk", when: "Day 0",
          html: `<div class="doc pp-doc">
            <div class="stamp">PAID · 1 OF 3</div>
            <div class="k">Payment plan agreement</div>
            <h5>Sunita's 12-week plan</h5>
            <div class="chk"><div class="b"></div><div><b>Programme: 12 weeks · 36 sessions · meal plan</b><span>Starts Mon 9 Jun · ends Sun 31 Aug. Same programme as pay-in-full.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Total ₹27,000 as 3 × ₹9,000</b><span>Paid today ₹9,000 · then 5 Jul and 5 Aug by auto-debit.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Card on file · auto-debit authorised</b><span>HDFC ····4412. Failed debit = sessions pause until cleared.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Paid instalments are non-refundable</b><span>Switch to pay-in-full (₹24,000 total) any time before 5 Jul.</span></div></div>
            <div class="sig"><div class="l">Sunita Rathore</div><small>DATE: 6 JUN · LAST DEBIT: 5 AUG</small></div>
          </div>`,
          why: [
            ["Terms in writing, in her hand", "Instalment plans generate arguments in month two. One signed page with three dates ends them before they start."],
            ["The plan ends before the programme", "Last debit on 5 Aug; programme runs to 31 Aug. All the money is in before all the value is out."],
            ["The consequence is named", "“Sessions pause” is a fair, visible rule. It protects the plan without a collections call."]
          ],
          q: ["Finish collecting before you finish delivering. Once the customer has the whole result, the last payment is the easiest one to skip.", "framework · payment plans"]
        },
        {
          k: "Reminder", t: "Debit tomorrow. Nothing to do.", ch: "WhatsApp", when: "Day 28 · 4 Jul",
          html: `<div class="phone pp-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">IF</div><div>Iron Fit Indore<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Sunita ji, quick heads-up 👇
                  <div class="board">
                    <div class="t">Payment plan · 2 of 3</div>
                    <div class="r"><span>Instalment 2</span><b>₹9,000</b></div>
                    <div class="r"><span>Debits on</span><b>Tomorrow · 5 Jul</b></div>
                    <div class="r"><span>Card</span><b>HDFC ····4412</b></div>
                    <div class="pips"><i class="ok"></i><i></i><i></i></div>
                    <div class="r"><span>Progress</span><b>−4.2 kg · 12/12 sessions</b></div>
                  </div>
                  Kuch karna nahi hai — auto-debit ho jayega. Agar card change karna ho toh aaj bata dena 🙏
                  <span class="tm">Fri 10:02 AM</span>
                </div>
                <div class="bub me">Same card, go ahead 👍<span class="tm">10:31 AM ✓✓</span></div>
                <div class="bub">Done. See you Monday 6:30 💪<span class="tm">10:32 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Warn before you debit", "A surprise ₹9,000 debit becomes a chargeback. A heads-up the day before becomes a thumbs-up."],
            ["Progress next to the payment", "“−4.2 kg · 12/12 sessions” sits in the same card as the ₹9,000. She is paying for a result she can already see."],
            ["Fix the card before it fails", "“Agar card change karna ho” catches the expired-card case now, not after a failed debit and a paused session."]
          ],
          q: ["Every instalment is a mini sale. Remind them what they're buying before you take the money.", "framework · payment plans"]
        },
        {
          k: "Paid up", t: "Paid in full, four weeks early.", ch: "WhatsApp · receipt card", when: "Week 8 · 5 Aug",
          html: `<div class="res pp-res">
            <div class="top2">
              <div class="k">Iron Fit Indore · payment plan</div>
              <h5>Sunita, you're paid up.</h5>
              <p>3 of 3 instalments · ₹27,000 · programme runs till 31 Aug</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>3 / 3</b><span>instalments</span></div><div><b>−7.1</b><span>kg so far</span></div><div><b>4</b><span>weeks left</span></div></div>
              <div class="credit">Nothing more to pay on this programme<b>Last debit done · 5 Aug</b>Card stays on file only if you continue after week 12 — we'll ask, not assume.</div>
            </div></div>`,
          why: [
            ["Collected before delivered", "Money in by week 8, results delivered to week 12. The gym never chases a customer who already has everything."],
            ["The sale that would have walked", "She was leaving to “think”. Instead: ₹27,000 collected, ₹3,000 more than the price she said no to."],
            ["Card on file becomes the next yes", "The saved card and the debit habit make the week-12 membership ask a one-line question."]
          ],
          q: ["The customer who couldn't pay today is not a lost customer. They're a customer with a different calendar.", "framework · payment plans"]
        }
      ]
    },

    /* ───────────────────────── 2 · HIGH-TICKET SALES CALL — Gym Launch style (adapted) ───────────────────────── */
    {
      label: "Sales call · 4-pay",
      source: "How the framework applies to a high-ticket sales call, in the Gym Launch setting (adapted — the chapter's own call examples should be checked)",
      client: "Marcus",
      about: "Marcus, 34, owns a gym in Columbus, Ohio. On a Zoom close he says no to $16,000 up front; the rep offers 4 × $4,500 with the first payment on the call and a card on file. US persona kept; figures illustrative.",
      copy: `PAYMENT PLAN — Gym licensing programme (downsell after a "no" on the call)
Full price: $16,000 today.
On a no: "Is it the number, or the number today?" → "What if we did $4,500 now and three more?"
Plan: 4 × $4,500 = $18,000 (plan total is higher than pay-in-full).
Payment 1 on the call by card; 2–4 every 30 days, auto-charged to the card on file.
Plan clears by day 90 of a 16-week programme. Pay the balance early any time at the $16,000 total.
No plan without a card on file. No start without payment 1.`,
      steps: [
        {
          k: "The close", t: "One price, asked once.", ch: "Zoom · sales call", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">J</div><div><b>Jordan · Gym Launch</b><small>closer · Zoom call</small></div></div>
            <q>So that's the whole thing, Marcus — the ads, the scripts, the weekly coaching, sixteen weeks. <em>It's $16,000, and your onboarding call is Thursday.</em> Do you want to go ahead?</q>
          </div>`,
          why: [
            ["Full price is the default", "Most buyers on the call pay in full. The plan is only for the ones who would otherwise hang up."],
            ["Ask before you offer", "“Do you want to go ahead?” forces the objection into the open. You cannot downsell a no you never heard."],
            ["A date, not just a price", "“Thursday” makes the purchase concrete. The no that follows is about cash, not about commitment."]
          ],
          q: ["Sell the full price with a straight face. The payment plan is a rescue, not the opening offer.", "framework · payment plans"]
        },
        {
          k: "The no", t: "The number, or the number today?", ch: "Zoom · sales call", when: "Day 0",
          html: `<div class="pp-talk">
            <div class="say them">
              <div class="who"><div class="av">M</div><div><b>Marcus</b><small>gym owner · on the call</small></div></div>
              <q>I'm in on the programme. Sixteen grand up front, though — payroll's Friday. I'd need a couple of months.</q>
            </div>
            <div class="say">
              <div class="who"><div class="av">J</div><div><b>Jordan · Gym Launch</b><small>closer</small></div></div>
              <q>Got it — so it's not the number, it's the number today. <em>What if we did $4,500 now, and three more every thirty days?</em> You'd start Thursday, same programme.</q>
            </div>
          </div>`,
          why: [
            ["Isolate the objection", "“The number, or the number today?” separates price from timing. Only a timing no gets a payment plan."],
            ["Same programme, said again", "He hears “same programme” before he hears the total. The plan is a terms change, and it is framed that way."],
            ["Keep the start date", "Thursday is unchanged. The plan gets him to the result on the same schedule as a pay-in-full buyer."]
          ],
          q: ["The cheapest thing you can give a customer who says no to the price is time — not a discount.", "framework · payment plans"]
        },
        {
          k: "The plan", t: "$16,000 once, or $18,000 in four.", ch: "Screen-share · order form", when: "Day 0",
          html: `<div class="choice pp-choice">
            <div class="ch dim">
              <div class="k">Pay in full</div>
              <div class="p">$16,000 <small>today · one payment</small></div>
              <ul><li>16-week licensing programme</li><li>Ads, scripts, weekly coaching</li><li><b>Lowest total.</b> Clear the balance early at this total.</li></ul>
              <div class="sub">Still open — switch any time before payment 2.</div>
            </div>
            <div class="ch best">
              <div class="badge">Start Thursday</div>
              <div class="k">Payment plan</div>
              <div class="p">4 × $4,500 <small>total $18,000</small></div>
              <ul><li>Exactly the same programme</li><li>$4,500 today · then every 30 days × 3</li><li><b>Card on file · auto-charged</b></li></ul>
              <div class="cr">Plan clears on day 90 of 112</div>
              <div class="sub">Missed charge pauses coaching access until cleared</div>
            </div>
          </div>`,
          why: [
            ["The plan costs more", "$18,000 vs $16,000. The premium pays for collection risk and keeps pay-in-full the smart choice for anyone who can."],
            ["Four payments, ninety days", "The plan is deliberately shorter than the 16-week programme. The last charge lands while he still needs the coaching."],
            ["The consequence is on the form", "“Coaching access pauses” is a lever the business controls — no collections agency needed."]
          ],
          q: ["A payment plan is the same price paid in more pieces. If it ends up cheaper, it's a discount with extra steps.", "framework · payment plans"]
        },
        {
          k: "Payment 1", t: "Card read out on the call.", ch: "Stripe · on the call", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch · licensing</span><b>STRIPE · SECURE</b></div>
            <div class="body">
              <div class="row"><span>16-week programme · 4-payment plan</span><span>$18,000</span></div>
              <div class="row"><span>Payment 1 of 4 · today</span><span>$4,500</span></div>
              <div class="row"><span>Payments 2–4 · every 30 days · auto-charge</span><span>3 × $4,500</span></div>
              <div class="row tot"><span>Charge now</span><span>$4,500</span></div>
              <div class="note"><b>Card on file:</b> Visa ····8821 saved for payments 2–4 (12 Jul · 11 Aug · 10 Sep). Pay the balance early at the $16,000 total any time before 12 Jul.</div>
              <div class="go">Charge $4,500 · save card</div>
              <div class="disc">Onboarding call unlocks when this payment clears</div>
            </div></div>`,
          why: [
            ["No start without payment 1", "The onboarding call unlocks on the charge. A plan that starts on a promise is not a sale yet."],
            ["Card captured on the call", "The rep takes the card while Marcus is still on Zoom. Sending a link “to pay later” loses a third of these."],
                        ["Early-clear option printed", "If a good month comes, he can pay $11,500 and save $2,000. That is a pay-in-full sale collected late, not a loss."]
          ],
          q: ["Get the first payment and the card on file in the same sitting. A payment plan without a card on file is a loan you didn't mean to give.", "framework · payment plans"]
        },
        {
          k: "E-sign", t: "The schedule, signed before Thursday.", ch: "E-signature · email", when: "Day 0",
          html: `<div class="doc pp-doc">
            <div class="stamp">E-SIGNED</div>
            <div class="k">Payment schedule addendum</div>
            <h5>Marcus's 4-payment plan</h5>
            <div class="chk"><div class="b"></div><div><b>Programme: 16 weeks · starts Thu 12 Jun</b><span>Identical deliverables to pay-in-full clients.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Total $18,000 · 4 × $4,500</b><span>Paid 12 Jun · then 12 Jul · 11 Aug · 10 Sep, auto-charged.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Card on file authorised · Visa ····8821</b><span>Failed charge: access pauses; 3 retries over 7 days.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Early clear at $16,000 total before 12 Jul</b><span>Paid amounts are non-refundable.</span></div></div>
            <div class="sig"><div class="l">Marcus T.</div><small>SIGNED 12 JUN · FINAL CHARGE 10 SEP</small></div>
          </div>`,
          why: [
            ["Terms travel with the sale", "The schedule is signed the same day, before he has received anything. Month-three disputes start here if you skip this."],
            ["Retries are part of the plan", "“3 retries over 7 days” turns a bounced card into a process, not a phone argument."],
            ["Non-refundable is stated, not implied", "He knows paid instalments stay paid. That single line is what makes the plan a sale rather than a subscription he can quit."]
          ],
          q: ["Finish collecting before you finish delivering. Once the customer has the whole result, the last payment is the easiest one to skip.", "framework · payment plans"]
        },
        {
          k: "Reminder", t: "Payment 2 in three days.", ch: "Email", when: "Day 27 · 9 Jul",
          html: `<div class="mail">
            <div class="h"><div class="s">Marcus — payment 2 of 4 runs Saturday</div><div class="f">From: Gym Launch billing &lt;billing@gymlaunch.com&gt; · to Marcus</div></div>
            <div class="body">
              <p>Heads-up: <b>$4,500 (payment 2 of 4)</b> will charge to your Visa ····8821 on <b>Sat 12 Jul</b>. Nothing to do unless the card has changed.</p>
              <p>Where you are at week 4: 31 leads from the first campaign, 9 consults booked, 4 new members. Your coaching call with Jordan is Tuesday 2 PM.</p>
              <p>Want to clear the balance early instead? Pay $11,500 before Saturday and your total drops to $16,000.</p>
              <div class="cta">Update card or clear balance</div>
            </div></div>`,
          why: [
            ["Warn before you charge", "Three days' notice, card shown, date shown. A surprise charge is a dispute; an expected one is silence."],
            ["Results next to the invoice", "“4 new members” in the same email as “$4,500”. He is being reminded of what the money is buying."],
            ["The upgrade ask is automatic", "Every reminder re-offers pay-in-full. Some clients take it in a good month, and the plan collects itself."]
          ],
          q: ["Every instalment is a mini sale. Remind them what they're buying before you take the money.", "framework · payment plans"]
        },
        {
          k: "Cleared", t: "Plan cleared. Four weeks still to go.", ch: "Client portal · billing", when: "Day 90 · 10 Sep",
          html: `<div class="res pp-res">
            <div class="top2">
              <div class="k">Gym Launch · billing</div>
              <h5>Marcus, you're paid up.</h5>
              <p>4 of 4 payments · $18,000 · programme runs to 2 Oct</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>4 / 4</b><span>payments</span></div><div><b>27</b><span>new members</span></div><div><b>3</b><span>weeks left</span></div></div>
              <div class="credit">Nothing further is owed on the programme<b>Final charge done · 10 Sep</b>Your card stays on file. If you continue into the ongoing coaching tier after week 16, it bills monthly from the same card.</div>
            </div></div>`,
          why: [
            ["Money in before the finish line", "All $18,000 is collected on day 90 of 112. The business never delivers the last three weeks to someone who has stopped paying."],
            ["The lost sale became a bigger one", "$16,000 was a no. $18,000 over four charges was a yes — from the same person, on the same call."],
            ["The plan trained the continuity", "Four monthly charges to a saved card are the habit the ongoing coaching tier runs on."]
          ],
          q: ["The customer who couldn't pay today is not a lost customer. They're a customer with a different calendar.", "framework · payment plans"]
        }
      ]
    },

    /* ───────────────────────── 3 · THIRD-PARTY FINANCING — clinic (adapted) ───────────────────────── */
    {
      label: "Clinic · financed EMI",
      source: "Financing-partner variant — the business is paid in full today, the customer pays monthly to a lender (adapted; check whether the chapter names this variant)",
      client: "Ananya",
      about: "Ananya, 29, Hyderabad. Says no to ₹1,20,000 for clear aligners. The clinic offers 12 × ₹10,500 through a financing partner: the clinic receives the full fee today; she pays the lender monthly. Indian persona; figures illustrative.",
      copy: `FINANCED PAYMENT PLAN — Clear aligners (downsell after a "no" at the desk)
Full price: ₹1,20,000 today (UPI / card).
On a no: "Would monthly work? ₹10,500 a month, treatment starts this week."
Plan: 12 × ₹10,500 = ₹1,26,000 via financing partner (KYC on the phone, 5-minute approval).
Clinic is paid ₹1,20,000 in full at approval; the patient pays the lender by auto-debit.
Instalment 1 on approval; treatment scans booked the same visit.
Missed EMI is between patient and lender — treatment schedule is unaffected.`,
      steps: [
        {
          k: "The quote", t: "The treatment plan, with the price.", ch: "Paper · consultation", when: "Day 0",
          html: `<div class="doc pp-doc">
            <div class="k">Treatment plan · clear aligners</div>
            <h5>Ananya's smile plan</h5>
            <div class="chk"><div class="b"></div><div><b>Clear aligners · 14 sets · ~9 months</b><span>3D scan today, first set in 10 days.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Includes all reviews + retainers</b><span>Monthly check, final retainers included.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Fee: ₹1,20,000</b><span>Payable today to start. UPI / card.</span></div></div>
            <div class="sig"><div class="l" style="border:0;transform:none;font-style:normal;font-size:13px;color:var(--mute)">Dr. Meera Nair · SmileCraft Jubilee Hills</div><small>QUOTE VALID 14 DAYS</small></div>
          </div>`,
          why: [
            ["Full fee, in writing, first", "The quote says ₹1,20,000 today. The financing option is not on it, so anyone who can pay in full does."],
            ["Value before terms", "Fourteen sets, nine months, retainers included. She should want it before she hears how she could afford it."],
            ["Quote expiry creates a decision", "Fourteen days stops “let me think” from becoming never. The downsell will be offered before she leaves."]
          ],
          q: ["Sell the full price with a straight face. The payment plan is a rescue, not the opening offer.", "framework · payment plans"]
        },
        {
          k: "The no", t: "Would monthly work?", ch: "In person · front desk", when: "Day 0",
          html: `<div class="pp-talk">
            <div class="say them">
              <div class="who"><div class="av">A</div><div><b>Ananya</b><small>patient · at the desk</small></div></div>
              <q>I really want to start. But ₹1,20,000 right now isn't happening — maybe after my bonus in March.</q>
            </div>
            <div class="say">
              <div class="who"><div class="av">R</div><div><b>Riya · front desk</b><small>SmileCraft</small></div></div>
              <q>March is six months of not starting. <em>Would monthly work? ₹10,500 a month for twelve months, approval takes five minutes on your phone,</em> and we scan you today.</q>
            </div>
          </div>`,
          why: [
            ["Convert the delay into a number", "“After my bonus” is a timing no. The reply prices the wait — six months without treatment — then removes it."],
            ["Monthly, not cheaper", "₹10,500 a month is easier than ₹1,20,000 once. The total is higher, and the fee to the clinic is unchanged."],
            ["Start today is the point", "“We scan you today” keeps the decision in the room. The plan is only useful if it produces a start."]
          ],
          q: ["The cheapest thing you can give a customer who says no to the price is time — not a discount.", "framework · payment plans"]
        },
        {
          k: "The plan", t: "Pay once, or ₹10,500 a month.", ch: "In person · price card", when: "Day 0",
          html: `<div class="choice pp-choice">
            <div class="ch dim">
              <div class="k">Pay in full</div>
              <div class="p">₹1,20,000 <small>today · UPI or card</small></div>
              <ul><li>14 aligner sets · ~9 months</li><li>Reviews + retainers included</li><li><b>Lowest total.</b></li></ul>
              <div class="sub">What you said no to — still available.</div>
            </div>
            <div class="ch best">
              <div class="badge">Start today</div>
              <div class="k">Monthly · financing partner</div>
              <div class="p">12 × ₹10,500 <small>total ₹1,26,000</small></div>
              <ul><li>Exactly the same treatment</li><li>5-minute approval on your phone</li><li><b>Auto-debit on the 5th · first one today</b></li></ul>
              <div class="cr">Scan today · first aligners in 10 days</div>
              <div class="sub">EMI is with the lender · clinic is paid in full</div>
            </div>
          </div>`,
          why: [
            ["Same treatment, different terms", "Nothing is removed from the plan. She pays ₹6,000 more in total for the right to pay monthly."],
            ["The clinic gets paid in full today", "A financing partner turns the payment plan into a pay-in-full sale for the business. Collection risk moves to the lender."],
            ["Plan is shorter than the result", "Twelve months of EMI, nine months of treatment plus retainers — but the clinic's cash arrives on day 0 regardless."]
          ],
          q: ["If someone else will carry the payments, you get the full-price sale and the customer gets the monthly bill. Both said yes.", "framework · payment plans (adapted)"]
        },
        {
          k: "Approval", t: "Approved on her phone in five minutes.", ch: "Financing partner app", when: "Day 0",
          html: `<div class="pp-app">
            <div class="h"><div class="k">PayLater Health · SmileCraft</div><b>Approved · ₹1,26,000 plan</b></div>
            <div class="body">
              <div class="st"><i>✓</i><div><b>PAN + Aadhaar verified</b><span>KYC done · 2 min</span></div></div>
              <div class="st"><i>✓</i><div><b>Plan: 12 × ₹10,500</b><span>Auto-debit on the 5th · HDFC ····2210</span></div></div>
              <div class="st"><i>✓</i><div><b>Instalment 1 paid · ₹10,500</b><span>Today · UPI</span></div></div>
              <div class="st"><i class="wait">4</i><div><b>Clinic paid ₹1,20,000</b><span>Settles to SmileCraft in 24 h</span></div></div>
              <div class="go">Download schedule</div>
              <div class="fine">Next debit: 5 Jul · Missed EMI: ₹300 late fee, treatment unaffected</div>
            </div></div>`,
          why: [
            ["Approval inside the visit", "Five minutes on her phone, at the desk. If she goes home to apply, she goes home to think."],
            ["First instalment today", "₹10,500 leaves now, not on the 5th. The plan starts with a payment, exactly like a card-on-file plan would."],
            ["The lender holds the risk", "“Clinic paid ₹1,20,000” is the line that matters to the business. The rest is the lender's problem."]
          ],
          q: ["Get the first payment and the card on file in the same sitting. A payment plan without a card on file is a loan you didn't mean to give.", "framework · payment plans"]
        },
        {
          k: "Same-day scan", t: "Treatment starts the same visit.", ch: "WhatsApp", when: "Day 0 · evening",
          html: `<div class="phone pp-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">SC</div><div>SmileCraft · Jubilee Hills<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Hi Ananya! Scan done ✅ Your first aligner set arrives in 10 days — we'll message when it's in.
                  <div class="board">
                    <div class="t">Your plan</div>
                    <div class="r"><span>Treatment</span><b>14 sets · started today</b></div>
                    <div class="r"><span>Payment</span><b>12 × ₹10,500 · PayLater</b></div>
                    <div class="r"><span>Paid so far</span><b>1 / 12</b></div>
                    <div class="pips"><i class="ok"></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Next EMI</span><b>5 Jul · auto-debit</b></div>
                  </div>
                  Fee is settled with us — koi payment clinic pe nahi karna. EMI reminders PayLater se aayenge 🙂
                  <span class="tm">Mon 7:12 PM</span>
                </div>
                <div class="bub me">Finally starting 😄 thank you!<span class="tm">7:20 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Start is the proof", "She said no at 4 PM and has a scan by 7 PM. The plan produced a customer, not a maybe."],
            ["Separate the fee from the EMI", "“Koi payment clinic pe nahi karna” — the clinic is out of the collections business from day one."],
            ["Schedule shown as a game", "1 of 12 with pips. The instalments read as progress, not debt."]
          ],
          q: ["Every instalment is a mini sale. Remind them what they're buying before you take the money.", "framework · payment plans"]
        },
        {
          k: "EMI reminder", t: "₹10,500 on the 5th. Aligner 2 in.", ch: "SMS · financing partner", when: "Day 28 · 3 Jul",
          html: `<div class="phone pp-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">PL</div><div>PayLater Health<small>SMS</small></div></div>
              <div class="body">
                <div class="bub">PayLater: EMI 2 of 12, Rs 10,500 for SmileCraft aligners, will auto-debit from HDFC ····2210 on 05-Jul. Ensure balance. Pay early or change card: paylater.in/a/8k2<span class="tm">Thu 9:00 AM</span></div>
                <div class="bub" style="background:#fff;border-left:3px solid var(--green)">SmileCraft: Ananya, set 2 is in! Come by any weekday 10–7 to collect. Set 1 looked great at review 👌<span class="tm">Thu 11:40 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The lender reminds; the clinic delivers", "Two messages, two jobs. The clinic never has to send a money message again."],
            ["The result keeps pace with the payment", "Set 2 arrives the week EMI 2 is due. Paying for something you are visibly using is easy."],
            ["Early pay stays open", "“Pay early” on every reminder — a good month turns twelve EMIs into six. The lender wants that too."]
          ],
          q: ["Finish collecting before you finish delivering. Once the customer has the whole result, the last payment is the easiest one to skip.", "framework · payment plans"]
        }
      ]
    }
  ]
});
