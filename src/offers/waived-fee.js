// Waived Fee — $100M Money Models, Section V (Continuity Offers), chapter "Waived Fee"
// Example 1 is the book's gym mechanic (localised to Pune). Examples 2–3 are marked "(adapted)" in
// `source`: they apply the chapter's framework (waive-for-staying, B2B onboarding fee) and are hidden
// by default in the viewer. Rupee/dollar figures are illustrative, not book quotes — verify.
window.OFFERS.push({
  slug: "waived-fee",
  name: "Waived fee",
  section: "Continuity",
  css: `
.wf-sheet{text-align:left;width:440px}
.wf-sheet h5{font-size:28px;margin:8px 0 12px}
.wf-sheet .r{display:flex;justify-content:space-between;align-items:baseline;padding:9px 2px;border-top:1px dashed var(--line);font-size:13.5px}
.wf-sheet .r b{font-family:var(--serif);font-size:20px;color:var(--ink)}
.wf-sheet .r small{display:block;font-size:11px;color:var(--mute);font-weight:400}
.wf-sheet .r.fee b{color:var(--coral)}
.wf-sheet .waive{margin-top:12px;background:var(--green-xl);border:1px dashed var(--green);border-radius:10px;padding:10px 12px;font-size:12.5px;color:var(--green-d);line-height:1.45}
.wf-sheet .waive b{font-family:var(--serif);font-size:16px;display:block;color:var(--green-d)}
.wf-choice .ch{padding:18px 18px 16px}
.wf-choice .ch .p{font-size:28px}
.wf-choice .ch li{padding:5px 0}
.wf-choice .fee{font-family:var(--mono);font-size:11px;color:var(--coral);margin-top:4px}
.wf-choice .fee.off{color:var(--green-d)}
.wf-choice .fee.off s{color:var(--mute);margin-right:6px}
.wf-doc h5{font-size:22px}
.wf-doc .k{padding-right:120px}
.wf-doc .chk{padding:7px 0}
.wf-doc .sig .l{width:170px}
.wf-doc .sig small{white-space:nowrap}
.wf-pay .row.off span:last-child{color:var(--green-d);font-weight:600}
.wf-pay .row.fee span:last-child{color:var(--coral)}
.wf-tight .wa{min-height:380px}
.wf-tight .wa .body{gap:6px;padding:9px 8px}
.wf-tight .bub{padding:6px 9px}
.wf-tight .board{margin:4px 0;padding:6px 9px}
.wf-tight .board .r{padding:2px 0}
.wf-mail .body{font-size:12.5px}
.wf-mail .box{background:var(--green-xl);border:1px dashed var(--green);border-radius:8px;padding:9px 12px;margin:8px 0;font-size:12.5px}
.wf-mail .box b{color:var(--green-d)}
.wf-res .top2 h5{font-size:30px}
.wf-res .kv b{font-size:18px}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the book, localised) ───────────────────────── */
    {
      label: "Alex's gym · fee waived",
      source: "Alex's own gym, as the chapter frames it · localised to Pune",
      client: "Arjun",
      about: "Arjun, 29, Kothrud. The gym charges a real ₹5,000 enrolment fee on month-to-month. Sign the 12-month agreement and the fee is waived — so the commitment feels like the win. Indian persona; mechanism as in the book.",
      copy: `WAIVED FEE — 12-Month Membership
Membership: ₹2,500 / month.
Enrolment fee: ₹5,000 one-time (charged on every month-to-month sign-up).
Sign the 12-month agreement today → enrolment fee WAIVED (₹5,000 → ₹0).
First billing today: ₹2,500 instead of ₹7,500. Same price every month after.
Leave before month 12 → the waived ₹5,000 becomes payable. Renew on time → stays waived.`,
      steps: [
        {
          k: "Price sheet", t: "The fee is on the sheet.", ch: "Counter card · front desk", when: "Day 0",
          html: `<div class="poster wf-sheet">
            <div class="k">Iron House Gym · Kothrud · membership</div>
            <h5>What it costs</h5>
            <div class="r"><span>Monthly membership<small>all classes · 5 AM – 11 PM</small></span><b>₹2,500 / mo</b></div>
            <div class="r fee"><span>Enrolment fee<small>one-time · onboarding, assessment, programme</small></span><b>₹5,000</b></div>
            <div class="r"><span>Month-to-month · first payment<small>₹2,500 + ₹5,000</small></span><b>₹7,500</b></div>
            <div class="waive"><b>12-month agreement: enrolment fee waived.</b>First payment ₹2,500. Same ₹2,500 every month. Cancel before month 12 and the ₹5,000 becomes payable.</div>
            <div class="fine">Enrolment fee is charged on every month-to-month membership · no exceptions</div>
          </div>`,
          why: [
            ["The fee is real", "₹5,000 sits on the printed sheet and is charged to every month-to-month member. A fee that never gets collected is not a fee, and waiving it moves nobody."],
            ["Waiver condition printed next to it", "The reader sees the fee and the way out in the same glance. The 12 months is now the escape from ₹5,000, not a burden."],
            ["Price of membership never drops", "₹2,500 stays ₹2,500 on both paths. He is not buying a discount — he is dodging a charge. That protects the recurring price."]
          ],
          q: ["Charge a real fee, then waive it for the commitment you want. The customer feels they won something; you got the retention you wanted.", "framework · waived fee"]
        },
        {
          k: "The pitch", t: "Seven thousand five hundred, or twenty-five.", ch: "In person · membership desk", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sameer</b><small>Membership · Iron House Gym</small></div></div>
            <q>So two ways to do this, Arjun. Month-to-month is ₹2,500 a month plus the ₹5,000 enrolment — ₹7,500 today, and you can quit whenever. Or you sign the twelve months, and <em>the enrolment fee is waived. ₹2,500 today, ₹2,500 every month, that's it.</em> Same gym, same classes. Which one?</q>
          </div>`,
          why: [
            ["Two totals, one of them ugly", "₹7,500 today vs ₹2,500 today. The commitment is the cheaper first day, so it reads as the smart choice, not the risky one."],
            ["The waiver is said, not hinted", "“The enrolment fee is waived” is the actual sentence. Naming the fee and then removing it is the whole move."],
            ["Neither option is no", "Month-to-month is offered with a straight face. The fee-payer funds acquisition in cash; the signer funds it in retention. Both are a yes."]
          ],
          q: ["The month-to-month buyer pays you cash today. The 12-month buyer pays you in months. You win either way — so present both.", "framework · waived fee"]
        },
        {
          k: "The choice", t: "Same gym. One has a fee.", ch: "Tablet at the desk", when: "Day 0",
          html: `<div class="choice wf-choice">
            <div class="ch dim">
              <div class="k">Month-to-month</div>
              <div class="p">₹2,500 <small>/ month</small></div>
              <div class="fee">+ ₹5,000 enrolment fee today</div>
              <ul><li>Cancel any month, 30 days' notice</li><li>All classes · 5 AM – 11 PM</li><li>Fitness assessment + programme</li><li><b>Today: ₹7,500</b></li></ul>
              <div class="sub">Fee is one-time, non-refundable</div>
            </div>
            <div class="ch best">
              <div class="badge">Enrolment fee waived</div>
              <div class="k">12-month agreement</div>
              <div class="p">₹2,500 <small>/ month</small></div>
              <div class="fee off"><s>₹5,000</s>₹0 enrolment fee</div>
              <ul><li>12 monthly auto-debits · same ₹2,500</li><li>All classes · 5 AM – 11 PM</li><li>Fitness assessment + programme</li><li><b>Today: ₹2,500</b></li></ul>
              <div class="cr">You keep ₹5,000</div>
              <div class="sub">Leave early → ₹5,000 fee becomes payable</div>
            </div>
          </div>`,
          why: [
            ["Every line is identical except the fee", "Same classes, same hours, same programme. The only variable is ₹5,000, so the decision is about the fee, not the gym."],
            ["Strike-through does the selling", "₹5,000 → ₹0 is a visible win on the screen he is looking at. The commitment card looks like the deal."],
            ["The claw-back is printed, not hidden", "“Leave early → ₹5,000 payable” is the reason the waiver has teeth. Shown now, it is fair; found later, it is a chargeback."]
          ],
          q: ["The waived fee is a discount on something they never wanted to pay. That is why it feels bigger than a discount on the price.", "framework · waived fee"]
        },
        {
          k: "Signed agreement", t: "Twelve months, fee waived, in ink.", ch: "Paper · membership desk", when: "Day 0",
          html: `<div class="doc wf-doc">
            <div class="stamp">FEE WAIVED</div>
            <div class="k">Iron House Gym · agreement</div>
            <h5>Arjun's 12-month agreement</h5>
            <div class="chk"><div class="b"></div><div><b>Term: 12 months · 12 Jun to 11 Jun next year</b><span>₹2,500 auto-debited on the 12th of every month.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Enrolment fee ₹5,000 — waived</b><span>Waived in exchange for the 12-month term above.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Early exit</b><span>Cancel before month 12 → waived ₹5,000 becomes payable with the final debit.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Renewal</b><span>Renew on or before 11 Jun → fee stays waived. Lapse and rejoin → fee applies.</span></div></div>
            <div class="sig"><div class="l">Arjun Deshpande</div><small>SIGNED 12 JUN · TERM ENDS 11 JUN</small></div>
          </div>`,
          why: [
            ["The waiver is a clause, not a favour", "“Waived in exchange for the 12-month term” ties the ₹5,000 to the commitment in writing. He knows exactly what he traded."],
            ["Early exit re-applies the fee", "The fee does the job a cancellation penalty does, without ever being called a penalty. He agreed to it at sign-up, in a good mood."],
            ["Renewal rule set on day 0", "“Renew on time → stays waived” is planted a year early. It becomes the reason to renew before the term ends."]
          ],
          q: ["Put the fee, the waiver and the condition on one page and get a signature. The signature is what makes month 7 hold.", "framework · waived fee"]
        },
        {
          k: "First billing", t: "The fee appears, then disappears.", ch: "Razorpay · receipt", when: "Day 0",
          html: `<div class="pay wf-pay">
            <div class="h"><span>Iron House Gym · Kothrud</span><b>RAZORPAY · AUTOPAY</b></div>
            <div class="body">
              <div class="row"><span>Membership · month 1 of 12</span><span>₹2,500</span></div>
              <div class="row fee"><span>Enrolment fee</span><span>₹5,000</span></div>
              <div class="row off"><span>Waived · 12-month agreement</span><span>− ₹5,000</span></div>
              <div class="row"><span>Fitness assessment + programme</span><span>included</span></div>
              <div class="row tot"><span>Pay today</span><span>₹2,500</span></div>
              <div class="note">Next 11 debits: ₹2,500 on the 12th of each month via UPI Autopay. Enrolment fee stays waived while the agreement runs.</div>
              <div class="go">Pay ₹2,500 · Set up Autopay</div>
              <div class="disc">Month-to-month price today would have been ₹7,500</div>
            </div></div>`,
          why: [
            ["Show the fee on the receipt, then cross it out", "A ₹2,500 receipt says nothing. ₹5,000 charged and ₹5,000 waived says he saved ₹5,000 for signing. The win is visible at the moment of paying."],
            ["Autopay set on the same screen", "Continuity is a debit mandate, not a promise. It is captured while the ₹5,000 win is still fresh."],
            ["Full recurring price, no discount", "₹2,500 is the same number the month-to-month member pays. Waiving a fee cost the gym nothing recurring."]
          ],
          q: ["Waive the fee, never the price. The fee is a one-time lever; the price is what you live on for twelve months.", "framework · waived fee"]
        },
        {
          k: "Month 2", t: "The debit that just happens.", ch: "WhatsApp", when: "Month 2 · 12 Jul",
          html: `<div class="phone wf-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">IH</div><div>Iron House Gym<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Arjun, month 2 ka autopay ho gaya ✅
                  <div class="board">
                    <div class="t">Membership · month 2 of 12</div>
                    <div class="r"><span>Debited today</span><b>₹2,500</b></div>
                    <div class="r"><span>Enrolment fee</span><b>waived · ₹0</b></div>
                    <div class="r"><span>Visits last month</span><b>14</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  Sameer ne notice kiya — 14 visits in month 1. Solid start 💪
                  <span class="tm">Sat 12 Jul · 7:02 AM</span>
                </div>
                <div class="bub me">Nice. Thanks 👍<span class="tm">7:40 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Receipt reminds him of the waiver", "“Enrolment fee: waived · ₹0” on every monthly note keeps the win alive. Twelve small reminders that he is on the better deal."],
            ["12 pips, 2 filled", "The term is a visible progress bar. Quitting at pip 3 looks like leaving something unfinished — and re-applies the fee."],
            ["Usage next to money", "14 visits beside ₹2,500 makes the debit feel earned. Members who see their own usage cancel less."]
          ],
          q: ["Continuity is a series of small, boring successes. Make each debit look like progress, not like a charge.", "framework · continuity offers"]
        },
        {
          k: "Renewal", t: "Renew now, the fee stays gone.", ch: "Email", when: "Month 11 · 20 May",
          html: `<div class="mail wf-mail">
            <div class="h"><div class="s">Arjun — your 12 months end on 11 Jun. Renew before then and the ₹5,000 stays waived.</div><div class="f">From: Sameer · Iron House Gym · To: arjun.d@gmail.com</div></div>
            <div class="body">
              <p>Eleven months, 143 visits. Your agreement ends 11 June.</p>
              <div class="box"><b>Renew on or before 11 June:</b> another 12 months at ₹2,500 · enrolment fee stays waived (₹0).</div>
              <div class="box" style="background:var(--coral-l);border-color:var(--coral)"><b style="color:var(--coral)">Let it lapse and rejoin later:</b> ₹2,500 + ₹5,000 enrolment fee applies again, like any new member.</div>
              <p>Nothing else changes — same slot, same programme. Reply “renew” or tap below and I'll extend the autopay.</p>
              <span class="cta">Renew · keep the fee waived</span>
            </div></div>`,
          why: [
            ["The waiver becomes the renewal hook", "A year later, the ₹5,000 he never paid is the reason to renew on time. The fee keeps working at month 11 without being charged once."],
            ["Lapse has a printed cost", "“Rejoin later = ₹7,500” makes doing nothing the expensive option. Renewing is simply avoiding a charge he already avoided once."],
            ["Same price, same slot", "No renewal discount is offered. The price holds; only the fee moves."]
          ],
          q: ["The waived fee never stops being useful: it gets them in, it keeps them in, and it brings them back on time.", "framework · waived fee"]
        }
      ]
    },

    /* ───────────────────────── 2 · WAIVED FOR STAYING (adapted, US) ───────────────────────── */
    {
      label: "Fee back for staying",
      source: "The “waive it for staying” variant of the chapter's mechanic (adapted — the chapter frames it; this specific story is not told)",
      client: "Dave",
      about: "Dave, 41, Ohio. Won't sign 12 months, so he pays the $199 enrollment fee on month-to-month — and is told it comes back as credit if he is still a member at month 6. US persona; details adapted.",
      copy: `WAIVED FEE — FOR STAYING (month-to-month)
Membership: $99 / month, cancel any time.
Enrollment fee: $199 one-time, charged today.
Stay 6 consecutive months (no cancellations, no freezes) → the $199 is
credited back to your account at month 6.
Credit applies to membership, PT or a 12-month upgrade. Not paid in cash.`,
      steps: [
        {
          k: "Price sheet", t: "Two ways to lose the fee.", ch: "Counter card · front desk", when: "Day 0",
          html: `<div class="poster wf-sheet">
            <div class="k">Membership · what it costs</div>
            <h5>Pick how you pay</h5>
            <div class="r"><span>Monthly membership<small>all classes · open gym</small></span><b>$99 / mo</b></div>
            <div class="r fee"><span>Enrollment fee<small>one-time · charged on month-to-month</small></span><b>$199</b></div>
            <div class="waive"><b>Sign 12 months: fee waived today.</b>Pay $99 today instead of $298.</div>
            <div class="waive"><b>Stay month-to-month 6 months: fee credited back.</b>$199 returns to your account in month 6 if you never cancel or freeze.</div>
            <div class="fine">One waiver per member · credit is applied to your account, not refunded in cash</div>
          </div>`,
          why: [
            ["Two exits from one fee", "Commit now, or stay six months. Either behaviour is the one the gym wants, and the fee rewards both."],
            ["The non-committer is not punished", "He still has a path to the $199 — just a slower one. That keeps the month-to-month buyer from walking."],
            ["Credit, not cash", "The $199 comes back as account credit, so it is spent on the next thing the gym sells."]
          ],
          q: ["If they won't commit up front, let them earn the waiver by staying. Retention is the commitment, paid in months.", "framework · waived fee (adapted)"]
        },
        {
          k: "The pitch", t: "Fine — earn it back instead.", ch: "In person · front desk", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">K</div><div><b>Kelly</b><small>Front desk · membership</small></div></div>
            <q>Totally fine, no twelve months. So it's $99 a month plus the $199 enrollment, $298 today. Here's the thing though — <em>stay six months without cancelling and the $199 comes right back onto your account.</em> Most people who make it to month six use it on a trainer. Sound good?</q>
          </div>`,
          why: [
            ["No pressure on the commitment", "“Totally fine” keeps the sale. The fee is collected in cash instead of retention, which is still a win."],
            ["The stay-waiver is offered as a gift", "It costs the gym nothing until month 6, by which point he has paid $594 in dues and built a habit."],
            ["Credit already pointed at PT", "“Most people use it on a trainer” tells him what the $199 will buy before he has it."]
          ],
          q: ["A fee you collect today and give back as credit in month six is cash now and a re-purchase later.", "framework · waived fee (adapted)"]
        },
        {
          k: "First billing", t: "The fee is charged. Really.", ch: "Card terminal · receipt", when: "Day 0",
          html: `<div class="pay wf-pay">
            <div class="h"><span>Membership checkout</span><b>CARD · RECURRING</b></div>
            <div class="body">
              <div class="row"><span>Membership · month 1</span><span>$99</span></div>
              <div class="row fee"><span>Enrollment fee · one-time</span><span>$199</span></div>
              <div class="row"><span>Waiver</span><span>— (month-to-month)</span></div>
              <div class="row tot"><span>Pay today</span><span>$298</span></div>
              <div class="note">Stay-waiver: $199 credited back to your account at month 6 if there are no cancellations or freezes in months 1–6.</div>
              <div class="go">Pay $298 · Card on file</div>
              <div class="disc">12-month agreement today would have been $99</div>
            </div></div>`,
          why: [
            ["Collected, not threatened", "$199 actually leaves his card. Every month-to-month member who pays it makes the waiver real for the ones who sign."],
            ["The condition is on the receipt", "“No cancellations or freezes, months 1–6” — the rule he must follow is in his hand before he leaves the desk."],
            ["The other path is quoted", "“12 months would have been $99” lets him regret it a little. Some come back to the desk and sign."]
          ],
          q: ["Charge the fee to the people who don't commit. Otherwise the people who do commit haven't been given anything.", "framework · waived fee (adapted)"]
        },
        {
          k: "Signed sheet", t: "Six months, no freezes, $199 back.", ch: "Paper · front desk", when: "Day 0",
          html: `<div class="doc wf-doc">
            <div class="stamp">FEE PAID · $199</div>
            <div class="k">Month-to-month membership</div>
            <h5>Dave's stay-waiver terms</h5>
            <div class="chk"><div class="b"></div><div><b>$99 / month · card on file · cancel any time</b><span>30 days' written notice.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Enrollment fee $199 · paid today</b><span>One-time. Not refunded in cash.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Stay-waiver: 6 consecutive paid months</b><span>No cancellation, no freeze, Mar–Aug. Missed payment resets the count.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Month 6 → $199 account credit</b><span>Use on dues, PT or a 12-month upgrade within 90 days.</span></div></div>
            <div class="sig"><div class="l">Dave M.</div><small>SIGNED 3 MAR · MONTH 6: 3 AUG</small></div>
          </div>`,
          why: [
            ["A date to aim at", "3 August is written down. Six months is now a finish line, not a vague “stay a while”."],
            ["Missed payment resets the count", "One rule protects the whole mechanic: a lapsed card is a lapsed streak. No arguments in August."],
            ["Credit expires in 90 days", "The $199 has to be spent, and soon, inside the gym. That is the upsell built into the waiver."]
          ],
          q: ["Write the stay condition like a challenge rule: a number, a date, and what breaks it.", "framework · waived fee (adapted)"]
        },
        {
          k: "Month 4", t: "Two months from your $199.", ch: "Text message", when: "Month 4 · 3 Jun",
          html: `<div class="phone wf-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">K</div><div>Kelly · Front desk<small>gym</small></div></div>
              <div class="body">
                <div class="bub">Dave — month 4 billed. Streak intact 👊
                  <div class="board">
                    <div class="t">Stay-waiver · month 4 of 6</div>
                    <div class="r"><span>Billed today</span><b>$99</b></div>
                    <div class="r"><span>Consecutive months</span><b>4 / 6</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i></div>
                    <div class="r"><span>$199 credit lands</span><b>3 Aug</b></div>
                  </div>
                  Heads up: a freeze in Jun/Jul resets the streak. Going on vacation? Just keep the card on — you'll be fine.
                  <span class="tm">Tue 3 Jun · 8:10 AM</span>
                </div>
                <div class="bub me">Not freezing. See you Thursday.<span class="tm">8:25 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The streak is the retention tool", "At month 4 a cancel costs him $199 he is two months from getting. The fee he paid on day 0 is now keeping him."],
            ["Pre-empt the freeze", "Summer is when month-to-month members pause. The reminder makes the freeze the expensive option."],
            ["Date in the message", "“3 Aug” keeps the finish line concrete. Every touch repeats the same date."]
          ],
          q: ["A fee already paid is a sunk cost until you attach a way to get it back. Then it becomes a reason to stay.", "framework · waived fee (adapted)"]
        },
        {
          k: "Month 6", t: "The $199 comes back.", ch: "Result card · email", when: "Month 6 · 3 Aug",
          html: `<div class="res wf-res">
            <div class="top2">
              <div class="k">Month 6 · stay-waiver earned</div>
              <h5>Dave, your $199 is back.</h5>
              <p>6 of 6 consecutive months · no freezes · 71 visits</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>6 / 6</b><span>months</span></div><div><b>71</b><span>visits</span></div><div><b>$594</b><span>dues paid</span></div></div>
              <div class="credit">Enrollment fee credited<b>$199 credit</b>on your account · use on dues, PT or a 12-month upgrade by 1 Nov</div>
              <div style="font-size:11.5px;color:var(--mute);margin-top:12px">Kelly will show you the two ways to use it at your next visit.</div>
            </div></div>`,
          why: [
            ["Pay it back visibly", "A card with his name and “$199 is back” is the proof the fee was never a trap. That story travels to the next person at the desk."],
            ["Credit with a deadline", "By 1 Nov, inside the gym. The waiver's payout is a purchase in disguise."],
            ["Six months paid in full", "He has paid $594 in dues at full price before the gym gave anything back. No discount was ever offered."]
          ],
          q: ["The waiver is paid in credit, so the money never leaves the building — it just changes what it is spent on.", "framework · continuity offers"]
        },
        {
          k: "The credit", t: "The refund buys the commitment.", ch: "In person · front desk", when: "Month 6 · 3 Aug",
          html: `<div class="choice wf-choice">
            <div class="ch dim">
              <div class="k">Keep month-to-month</div>
              <div class="p">$99 <small>/ month</small></div>
              <div class="fee off">$199 credit → 2 months of dues</div>
              <ul><li>Cancel any time, as before</li><li>Credit covers Aug &amp; Sep</li><li><b>Out of pocket till Oct: $0</b></li></ul>
              <div class="sub">Perfectly fine.</div>
            </div>
            <div class="ch best">
              <div class="badge">What Kelly recommends</div>
              <div class="k">12-month agreement</div>
              <div class="p">$99 <small>/ month</small></div>
              <div class="fee off">$199 credit → 4 PT sessions</div>
              <ul><li>Same price, 12 months locked</li><li>4 × 1-hour trainer sessions from the credit</li><li><b>Out of pocket today: $0</b></li></ul>
              <div class="cr">No enrollment fee ever again</div>
              <div class="sub">Renew on time → fee stays waived</div>
            </div>
          </div>`,
          why: [
            ["The credit converts the non-committer", "Six months ago he refused 12 months. Now the $199 he earned is the sweetener that gets the signature."],
            ["Both options spend the credit inside", "Two months of dues or four PT sessions — either way the $199 is consumed here."],
            ["The waiver loops", "“No enrollment fee ever again” starts the same renew-on-time cycle as example 1. The fee keeps working."]
          ],
          q: ["Every continuity offer should end by offering the next one. The waived fee hands you the moment to do it.", "framework · continuity offers (adapted)"]
        }
      ]
    },

    /* ───────────────────────── 3 · B2B ONBOARDING FEE (adapted) ───────────────────────── */
    {
      label: "Agency · setup fee waived",
      source: "How the framework applies to a B2B / software-style setup or onboarding fee (adapted)",
      client: "Nikhil",
      about: "Nikhil runs a dental clinic in Pune and is buying a marketing retainer. The agency charges a real ₹40,000 onboarding fee on monthly retainers — waived if he signs the 12-month retainer. Indian persona; adapted.",
      copy: `WAIVED FEE — 12-Month Retainer
Retainer: ₹30,000 / month (ads, landing pages, follow-up, reporting).
Onboarding fee: ₹40,000 one-time (tracking, CRM, creatives, 30-day build).
Sign the 12-month retainer → onboarding fee WAIVED.
Month 1 invoice: ₹30,000 instead of ₹70,000. Same ₹30,000 every month.
Exit before month 12 → ₹40,000 onboarding fee invoiced with final month.`,
      steps: [
        {
          k: "Proposal", t: "The setup fee, on the pricing page.", ch: "Proposal · web", when: "Day −2",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">leadflow.clinics/proposal/nikhil</div></div>
            <div class="body">
              <div class="eyebrow">Proposal · Smile Dental Kothrud</div>
              <h5>₹30,000 a month. <em>Onboarding fee waived on 12.</em></h5>
              <div class="rules">
                <div class="rule"><div class="n">RETAINER</div><div class="t">₹30,000 / month</div><div class="s">ads · pages · follow-up · reporting</div></div>
                <div class="rule"><div class="n">ONBOARDING FEE</div><div class="t" style="color:var(--coral)">₹40,000 one-time</div><div class="s">tracking, CRM, creatives · 30-day build</div></div>
                <div class="rule"><div class="n">12-MONTH RETAINER</div><div class="t" style="color:var(--green-d)">Fee waived · ₹0</div><div class="s">month 1 invoice ₹30,000</div></div>
              </div>
              <div class="payout"><b>₹40,000</b><span>waived when you sign the 12-month retainer. Monthly retainer clients pay it on invoice 1.</span></div>
              <div class="btn">Book the 20-min walkthrough <small>Thu or Fri · proposal valid 7 days</small></div>
            </div></div>`,
          why: [
            ["The fee covers real work", "Tracking, CRM, creatives — 30 days of build that happens before a single lead. A fee attached to real work is easy to charge and easy to justify waiving."],
            ["Waiver condition beside the fee", "Nikhil reads “₹40,000” and “waived on 12” in the same box. The 12-month retainer is the escape, before anyone has pitched it."],
            ["Monthly is offered", "Month-to-month exists at the same retainer price. The fee, not the price, separates the two."]
          ],
          q: ["Name the fee after the work it pays for. Setup, onboarding, implementation — then waive it for the term you want.", "framework · waived fee (adapted)"]
        },
        {
          k: "The call", t: "Seventy or thirty, month one.", ch: "Zoom · walkthrough call", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Ritika</b><small>Founder · LeadFlow Clinics</small></div></div>
            <q>Month-to-month, your first invoice is ₹70,000 — the ₹30,000 retainer plus ₹40,000 onboarding, because the build is the same either way. On the 12-month retainer, <em>we waive the onboarding fee. First invoice ₹30,000, and it's ₹30,000 every month after.</em> Same team, same build. Most clinics take the twelve.</q>
          </div>`,
          why: [
            ["The build is the same either way", "That sentence makes the fee legitimate — the agency does the work regardless. Waiving it is a gift to the committer, not a fake charge to the rest."],
            ["Two first invoices", "₹70,000 vs ₹30,000 is the comparison that matters to a clinic owner's cash flow this month."],
            ["Social proof on the commitment", "“Most clinics take the twelve” normalises the term the agency wants."]
          ],
          q: ["Say the month-one number for both paths out loud. The fee makes the long term the cheaper first month.", "framework · waived fee (adapted)"]
        },
        {
          k: "The choice", t: "Same retainer. One has a fee.", ch: "Proposal · choose a plan", when: "Day 0",
          html: `<div class="choice wf-choice">
            <div class="ch dim">
              <div class="k">Monthly retainer</div>
              <div class="p">₹30,000 <small>/ month</small></div>
              <div class="fee">+ ₹40,000 onboarding fee on invoice 1</div>
              <ul><li>Cancel with 30 days' notice</li><li>Ads · pages · follow-up · reporting</li><li>30-day build included</li><li><b>Invoice 1: ₹70,000</b></li></ul>
              <div class="sub">Fee non-refundable</div>
            </div>
            <div class="ch best">
              <div class="badge">Onboarding fee waived</div>
              <div class="k">12-month retainer</div>
              <div class="p">₹30,000 <small>/ month</small></div>
              <div class="fee off"><s>₹40,000</s>₹0 onboarding fee</div>
              <ul><li>12 monthly invoices · same ₹30,000</li><li>Ads · pages · follow-up · reporting</li><li>30-day build included</li><li><b>Invoice 1: ₹30,000</b></li></ul>
              <div class="cr">You keep ₹40,000</div>
              <div class="sub">Exit early → ₹40,000 invoiced with final month</div>
            </div>
          </div>`,
          why: [
            ["Identical scope, one variable", "Every bullet matches. The client compares ₹40,000 against 12 months, which is exactly the trade the agency wants him weighing."],
            ["Claw-back stated up front", "“Exit early → ₹40,000 invoiced” is the teeth. Agreed now, it is fair; it also stops month-4 churn."],
            ["Price never discounted", "₹30,000 stays ₹30,000. The agency did not cut its recurring revenue to win the term."]
          ],
          q: ["Discount the fee to zero before you discount the price by a rupee.", "framework · waived fee (adapted)"]
        },
        {
          k: "Signed retainer", t: "Twelve months, fee waived, signed.", ch: "E-sign · PDF", when: "Day 0",
          html: `<div class="doc wf-doc">
            <div class="stamp">FEE WAIVED</div>
            <div class="k">LeadFlow · services agreement</div>
            <h5>Smile Dental · 12-month retainer</h5>
            <div class="chk"><div class="b"></div><div><b>Term: 12 months · 1 Jul to 30 Jun next year</b><span>₹30,000 invoiced on the 1st, due in 5 days.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Onboarding fee ₹40,000 — waived</b><span>Waived in consideration of the 12-month term.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Early termination</b><span>Exit before 30 Jun → the waived ₹40,000 is invoiced with the final month.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Renewal</b><span>Renew before 30 Jun → fee stays waived. Rejoin after a gap → fee applies.</span></div></div>
            <div class="sig"><div class="l">Dr. Nikhil Joshi</div><small>E-SIGNED 28 JUN · TERM ENDS 30 JUN</small></div>
          </div>`,
          why: [
            ["“In consideration of” the term", "Legal language that says what the fee waiver was traded for. Nobody on either side forgets it later."],
            ["Termination re-applies the fee", "The agency has an exit clause with no word “penalty” in it. The client agreed to it as a waiver, not a threat."],
            ["Renewal seeded at signing", "The fee is the reason to renew on time, a year before anyone mentions renewal."]
          ],
          q: ["A waived fee with a claw-back is a retention contract the customer signs happily.", "framework · waived fee (adapted)"]
        },
        {
          k: "Invoice 1", t: "Forty thousand, charged and waived.", ch: "Invoice · email", when: "Day 1 · 1 Jul",
          html: `<div class="pay wf-pay">
            <div class="h"><span>LeadFlow Clinics · Invoice #0141</span><b>DUE IN 5 DAYS</b></div>
            <div class="body">
              <div class="row"><span>Retainer · month 1 of 12</span><span>₹30,000</span></div>
              <div class="row fee"><span>Onboarding fee · tracking, CRM, creatives</span><span>₹40,000</span></div>
              <div class="row off"><span>Waived · 12-month retainer</span><span>− ₹40,000</span></div>
              <div class="row"><span>GST @ 18% on ₹30,000</span><span>₹5,400</span></div>
              <div class="row tot"><span>Amount due</span><span>₹35,400</span></div>
              <div class="note">Invoices 2–12: ₹30,000 + GST on the 1st of each month. Onboarding fee remains waived for the full term.</div>
              <div class="go">Pay ₹35,400 · UPI / NEFT</div>
              <div class="disc">Monthly retainer invoice 1 would have been ₹82,600</div>
            </div></div>`,
          why: [
            ["Fee line stays on the invoice", "₹40,000 charged, ₹40,000 waived. The client's accountant sees the saving; the client feels it."],
            ["The build happens on schedule", "Onboarding starts the same day whether or not the fee was paid. Waiving it changed nothing about the delivery."],
            ["Comparison at the bottom", "“Would have been ₹82,600” makes the invoice feel like the win it is."]
          ],
          q: ["Every recurring invoice can carry the memory of the fee they didn't pay. Free reminders of a good decision.", "framework · waived fee (adapted)"]
        },
        {
          k: "Month 1 review", t: "The build the fee paid for.", ch: "WhatsApp", when: "Day 30",
          html: `<div class="phone wf-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Ritika · LeadFlow<small>online</small></div></div>
              <div class="body">
                <div class="bub">Dr. Nikhil, 30-day build done ✅
                  <div class="board">
                    <div class="t">Onboarding · month 1 of 12</div>
                    <div class="r"><span>Tracking + CRM</span><b>live</b></div>
                    <div class="r"><span>Creatives</span><b>6 approved</b></div>
                    <div class="r"><span>Landing page</span><b>live</b></div>
                    <div class="r"><span>First booked calls</span><b>9</b></div>
                    <div class="pips"><i class="ok"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  </div>
                  Yeh sab onboarding fee mein aata hai — aapke liye waived tha. Ab ads scale karte hain 🚀
                  <span class="tm">Wed 30 Jul · 6:15 PM</span>
                </div>
                <div class="bub me">Great work. Let's go.<span class="tm">6:32 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Show what the waived fee bought", "Tracking, CRM, creatives, page — the ₹40,000 of work is listed as delivered. The waiver now has a visible value."],
            ["Term progress bar", "1 of 12 pips. Eleven to go, with a claw-back if he leaves. The monthly review doubles as a retention screen."],
            ["Results before month 2 invoice", "Nine booked calls land before ₹30,000 is billed again. The second invoice is easier than the first."]
          ],
          q: ["Deliver the thing the fee was named after in month one, visibly. Then the waiver looks like a gift for the next eleven.", "framework · continuity offers (adapted)"]
        }
      ]
    }
  ]
});
