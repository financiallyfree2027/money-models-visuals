// Pay Less Now or Pay More Later — $100M Money Models, Section II (Attraction Offers)
// Mechanic: two ways to pay. A lower price if paid in full today, or a higher total on a plan.
// The plan is a real "yes" for price-sensitive buyers; the plan total anchors the pay-in-full price as a deal.
window.OFFERS.push({
  slug: "pay-less-now-or-more-later",
  name: "Pay less now, or more later",
  css: `
    .pln-two{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}
    .pln-two div{border:1px solid var(--line);border-radius:10px;padding:10px 12px;font-size:12px;color:var(--dim)}
    .pln-two b{display:block;font-family:var(--serif);font-size:20px;color:var(--ink);margin-bottom:2px}
    .pln-two .on{border-color:var(--green);background:var(--green-xl)}
    .pln-two .on b{color:var(--green-d)}
  `,
  examples: [

    // ───────────────────────────── 1 · ALEX'S GYM ─────────────────────────────
    {
      label: "Alex's gym · two ways to pay",
      source: "Alex's own gym, as told in the book · localised to Pune",
      client: "Priya",
      about: "Priya, 34, Kothrud. Wants the 6-week programme. She is told the price two ways: ₹18,000 today, or 3 × ₹7,000 over six weeks. She picks pay-in-full. Numbers localised; mechanic from the book.",
      copy: `6-WEEK TRANSFORMATION — two ways to pay
Option A · Pay in full today: ₹18,000 (saves ₹3,000)
Option B · Payment plan: 3 × ₹7,000 = ₹21,000 (today, Day 14, Day 28)
Same programme, same coach, same batch — only the way you pay changes.
Pay-in-full also gets: 2 free body-composition scans (₹1,500 value).
Plan members can switch to pay-in-full any time and save the difference.
Batch starts Monday · 12 seats.`,
      steps: [
        {
          k: "The ad", t: "Price shown two ways, on purpose.", ch: "Instagram", when: "Day −4",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">IF</div><div><div class="nm">ironfit.kothrud</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">KOTHRUD · 6-WEEK BATCH</div>
                <div><div class="big">6 weeks. Real coach.<br><em>₹18,000 today, or 3 easy instalments.</em></div>
                <div class="sm">Same programme either way. Paisa ka tension nahi — aap chuno.</div></div>
              </div>
              <div class="cta"><span>ironfit.in/6week</span><b>Book free call</b></div>
              <div class="cap"><b>ironfit.kothrud</b> Monday se batch shuru. 12 seats. Plan wale bhi welcome, full-payment walon ko 2 free scans. 👇</div>
            </div></div></div>`,
          why: [
            ["Both prices are in the ad", "Price-sensitive people see instalments and keep reading. Cash-rich people see a saving and keep reading. Nobody bounces on price."],
            ["Same programme, said out loud", "The plan is not a worse product. The only variable is timing of money — that is what makes it feel fair."],
            ["Book a call, not buy", "The ad sells a conversation. The choice is presented in person where the anchor lands harder."]
          ],
          q: ["Two prices means two yeses. One price means one yes and one no.", "framework · pay less now or more later"]
        },
        {
          k: "The call", t: "The plan price is said first.", ch: "In person · sales desk", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sameer · Iron Fit</b><small>Owner · sales desk</small></div></div>
            <q>Priya, the six-week programme is <em>₹21,000</em> — you can split it three ways, ₹7,000 today and two more. Or, if you'd rather pay once and be done, it's <em>₹18,000 today</em> and you save three thousand. Which one works better for you?</q>
          </div>`,
          why: [
            ["Anchor with the plan total", "₹21,000 is said first. ₹18,000 now sounds like the deal, not the full price."],
            ["Either/or, never yes/no", "The closing question is which option, not whether. Both answers are a sale."],
            ["Saving is stated in rupees", "“Save three thousand” is concrete. “15% off” makes her do maths instead of deciding."]
          ],
          q: ["Give the buyer a choice between two ways to pay you, not a choice between paying you and not.", "framework · pay less now or more later"]
        },
        {
          k: "The choice", t: "Two cards. Both say yes.", ch: "Tablet at the desk", when: "Day 0",
          html: `<div class="choice">
            <div class="ch best">
              <div class="badge">Pay less now</div>
              <div class="k">Option A · Pay in full</div>
              <div class="p"><s>₹21,000</s>₹18,000</div>
              <ul><li><b>One payment today</b> — done</li><li>Same coach, same 7 AM batch</li><li>2 free body-composition scans</li><li>Saves ₹3,000 vs the plan</li></ul>
              <div class="cr">Best price · nothing more to pay</div>
              <div class="sub">UPI / card / cash</div>
            </div>
            <div class="ch">
              <div class="k">Option B · Payment plan</div>
              <div class="p">₹7,000 <small>× 3 = ₹21,000</small></div>
              <ul><li><b>₹7,000 today</b>, starts Monday</li><li>₹7,000 on Day 14 · ₹7,000 on Day 28</li><li>Same coach, same 7 AM batch</li><li class="no">Free scans</li></ul>
              <div class="sub">Switch to pay-in-full any time and save the difference</div>
            </div>
          </div>`,
          why: [
            ["The plan makes the full price a discount", "Strike ₹21,000, show ₹18,000. The pay-in-full card sells itself against its own sibling."],
            ["Bonus, not just a cut", "The scans reward paying now without cheapening the programme. Some buyers pay full for the bonus, not the saving."],
            ["The plan is not dimmed", "It is a real option for a real buyer. Making it look bad would lose her, not upgrade her."]
          ],
          q: ["The person who pays in full funds your ads. The person on the plan pays for the privilege of waiting.", "framework · pay less now or more later"]
        },
        {
          k: "Payment", t: "One swipe, ₹18,000, done.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Iron Fit Kothrud</span><b>PAY IN FULL</b></div>
            <div class="body">
              <div class="row"><span>6-Week Transformation · Batch 14</span><span>₹21,000</span></div>
              <div class="row"><span>Pay-in-full saving</span><span>− ₹3,000</span></div>
              <div class="row"><span>Body-composition scans × 2</span><span>Free</span></div>
              <div class="row tot"><span>Total today</span><span>₹18,000</span></div>
              <div class="note">Nothing more to pay. No instalments, no reminders. Programme starts Monday 7 AM.</div>
              <div class="go">Pay ₹18,000 · UPI</div>
              <div class="disc">Priya Kulkarni · priya.k@okaxis</div>
            </div>
          </div>`,
          why: [
            ["Cash lands on Day 0", "₹18,000 today beats ₹21,000 over 28 days. That money pays for next batch's ads before this one starts."],
            ["The saving is printed on the receipt", "She sees the ₹3,000 line at the moment of paying. The decision feels smart, which kills buyer's remorse."],
            ["No collection risk", "A plan member can miss Day 14. A pay-in-full member cannot."]
          ],
          q: ["Cash collected up front is worth more than the same cash collected later — you can spend it on getting the next customer.", "framework · money models"]
        },
        {
          k: "Welcome", t: "Confirmation plus the bonus.", ch: "WhatsApp", when: "Day 0",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">S</div><div>Sameer · Iron Fit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Priya ji, welcome to Batch 14 🎉 Payment received — ₹18,000, fully paid.
                  <div class="board">
                    <div class="t">Your account</div>
                    <div class="r"><span>Programme</span><b>6-Week · 7 AM</b></div>
                    <div class="r"><span>Balance due</span><b>₹0</b></div>
                    <div class="r"><span>Bonus scans</span><b>2 · book any time</b></div>
                  </div>
                  Monday 6:50 AM aa jao — first scan tabhi karenge. <span class="tm">4:12 PM</span></div>
                <div class="bub me">Done. Monday pakka 💪<span class="tm">4:20 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["“Balance due ₹0” is the reward", "Plan members get reminders. She gets closure. The difference is felt on day one."],
            ["Bonus is booked immediately", "A bonus never used is a bonus never remembered. Scan on Day 1 makes the pay-in-full choice feel right."]
          ],
          q: ["The bonus for paying in full should be something you were going to deliver anyway, packaged so it feels like a gift.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "Next offer", t: "Same two doors, bigger room.", ch: "In person · Day 42", when: "Day 42",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sameer · Iron Fit</b><small>Owner · after the final weigh-in</small></div></div>
            <q>Six kilos down. Want to keep the batch? A year of membership is <em>₹36,000 at ₹3,000 a month</em>, or <em>₹30,000 if you pay it today</em> — and you know the drill by now. Which one?</q>
          </div>`,
          why: [
            ["The mechanic repeats on continuity", "The same two-way price structure moves from the front-end offer to the membership. Now she expects it."],
            ["Pay-in-full buyers stay pay-in-full", "Someone who paid ₹18,000 once will usually pay ₹30,000 once. You have already learned how she buys."]
          ],
          q: ["Attraction offers exist to get a customer. The next offer is where the two-way price makes real money.", "framework · money models"]
        }
      ]
    },

    // ───────────────────────────── 2 · GYM LAUNCH ─────────────────────────────
    {
      label: "Gym Launch · licensing",
      source: "Gym Launch, as told in the book · US-native, kept in dollars",
      client: "Dave",
      about: "Dave owns a 180-member gym in Ohio. Gym Launch sells him the licensing programme two ways: one payment today at a lower total, or four monthly payments at a higher total. Exact figures are illustrative, not from the book.",
      copy: `GYM LAUNCH LICENSING — two ways to pay
Pay in full today: $16,000 (one payment · saves $4,000)
Payment plan: 4 × $5,000 = $20,000 (today + 3 monthly)
Same programme, same coaching calls, same launch playbook.
Pay-in-full bonus: done-for-you ad build for your first launch.
Plan clients may pay the balance early and keep the saving on remaining payments.
Start date: next Monday cohort.`,
      steps: [
        {
          k: "The ad", t: "A gym owner sees a gym owner.", ch: "Facebook", when: "Day −7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">GL</div><div><div class="nm">Gym Launch</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">GYM OWNERS ONLY</div>
                <div><div class="big">Add 30+ members in 30 days.<br><em>We fund the model. You run the gym.</em></div>
                <div class="sm">Licensing · one payment or four. Book a call to see which.</div></div>
              </div>
              <div class="cta"><span>gymlaunch.com/apply</span><b>Apply</b></div>
              <div class="cap"><b>Gym Launch</b> Not a course. A launch system with a coach on your calendar every week. Small gyms only.</div>
            </div></div></div>`,
          why: [
            ["Payment shape is mentioned early", "“One payment or four” tells a cash-strapped owner there is a door for him before he sees the number."],
            ["Application, not checkout", "A $16k–$20k decision is made on a call, where the two options can be walked through."]
          ],
          q: ["The plan exists so the price never becomes the reason a qualified buyer says no.", "framework · pay less now or more later"]
        },
        {
          k: "The call", t: "Plan first, full price second.", ch: "Zoom · sales call", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">J</div><div><b>Jordan · Gym Launch</b><small>Closer · 45-min call</small></div></div>
            <q>Dave, the programme is <em>$20,000</em> — four payments of five, first one today. Or, if you'd rather clear it in one go, it's <em>$16,000 today</em>, and we build your first launch ads for you. Most owners in your spot pick one of those two. Which is it?</q>
          </div>`,
          why: [
            ["Anchor high, land low", "$20,000 is the first number he hears. $16,000 is a $4,000 relief, not a $16,000 shock."],
            ["Plan buyers reveal themselves", "If he asks about the plan, he is price-sensitive — the plan is the sale. Don't push full pay and lose him."],
            ["Bonus is delivered work", "Done-for-you ads cost Gym Launch hours, not margin. It rewards cash now without discounting further."]
          ],
          q: ["Let the buyer choose how they pay you. Both roads end in a signed contract.", "framework · pay less now or more later"]
        },
        {
          k: "The proposal", t: "Two columns, one decision.", ch: "Proposal · screen-share", when: "Day 0",
          html: `<div class="choice">
            <div class="ch best">
              <div class="badge">Pay in full</div>
              <div class="k">Option A</div>
              <div class="p"><s>$20,000</s>$16,000</div>
              <ul><li><b>One payment today</b></li><li>Weekly coaching · launch playbook · community</li><li>Bonus: first-launch ads built for you</li><li>Saves $4,000</li></ul>
              <div class="cr">Nothing more owed. Ever.</div>
              <div class="sub">Card, ACH or wire</div>
            </div>
            <div class="ch">
              <div class="k">Option B · Plan</div>
              <div class="p">$5,000 <small>× 4 = $20,000</small></div>
              <ul><li><b>$5,000 today</b></li><li>$5,000 on the 1st of the next 3 months</li><li>Weekly coaching · launch playbook · community</li><li class="no">Done-for-you ads</li></ul>
              <div class="sub">Pay the balance early any time and keep the saving</div>
            </div>
          </div>`,
          why: [
            ["Feature list identical", "The programme is the same on both sides. If the plan looks cheaper in features, plan buyers feel punished and churn."],
            ["Early payoff clause", "A plan buyer who has a good launch month can close out early — a second chance to collect cash sooner."]
          ],
          q: ["Charge more for paying later. It's the only discount that increases your cash instead of cutting it.", "framework · pay less now or more later"]
        },
        {
          k: "Agreement", t: "The payment shape, in writing.", ch: "DocuSign", when: "Day 0",
          html: `<div class="doc">
            <div class="stamp">SIGNED · DAY 0</div>
            <div class="k">Gym Launch · licensing agreement</div>
            <h5>Payment terms</h5>
            <div class="chk"><div class="b"></div><div><b>Programme fee: $16,000, paid in full today</b><span>Plan alternative of 4 × $5,000 declined by client.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Includes: 12 weekly coaching calls, launch playbook, community</b><span>Same deliverables as the payment-plan option.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Pay-in-full bonus: first-launch ad build</b><span>Delivered within 7 days of onboarding call.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>No refunds; results depend on execution</b><span>Client agrees to run the launch as coached.</span></div></div>
            <div class="sig"><div class="l">Dave Morrison</div><small>03 MAR · COHORT 09 MAR</small></div>
          </div>`,
          why: [
            ["Both options recorded", "Writing “plan declined” shows he chose. A chosen price is defended; an imposed price is disputed."],
            ["Bonus has a delivery date", "A dated bonus gets delivered. An undated bonus becomes a support ticket."]
          ],
          q: ["Put the choice on paper. The person who picked pay-in-full will never ask why the plan person paid more.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "Payment", t: "$16,000. One line.", ch: "Stripe", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch</span><b>PAY IN FULL</b></div>
            <div class="body">
              <div class="row"><span>Licensing programme · 12 weeks</span><span>$20,000</span></div>
              <div class="row"><span>Pay-in-full saving</span><span>− $4,000</span></div>
              <div class="row"><span>First-launch ad build</span><span>Included</span></div>
              <div class="row tot"><span>Total today</span><span>$16,000</span></div>
              <div class="note">One payment. No monthly invoices. Onboarding call booked for Thursday 10 AM ET.</div>
              <div class="go">Pay $16,000</div>
              <div class="disc">Visa •••• 4471 · Dave Morrison · Iron Peak Fitness LLC</div>
            </div>
          </div>`,
          why: [
            ["Every pay-in-full is 3 months of collection risk removed", "Plan buyers can fail a card on month 2. This one cannot."],
            ["Cash funds the next client", "$16,000 today pays for the ads that find the next gym owner this week, not next quarter."]
          ],
          q: ["Money now is worth more than money later because now-money can be reinvested to make more.", "framework · money models"]
        },
        {
          k: "Onboarding", t: "The bonus arrives first.", ch: "Email", when: "Day 1",
          html: `<div class="mail">
            <div class="h"><div class="s">Dave — you're in. Your ad build starts today.</div><div class="f">From: Jordan @ Gym Launch · To: dave@ironpeakfitness.com</div></div>
            <div class="body">
              <p>Payment received: <b>$16,000, paid in full.</b> Nothing further is owed.</p>
              <p>Because you paid in full, our team builds your first-launch ads for you. Reply with three photos of your gym floor and your logo, and you'll have the ads by Thursday's onboarding call.</p>
              <p>Cohort starts Monday. Playbook access is in your portal now.</p>
              <span class="cta">Open your portal</span>
            </div>
          </div>`,
          why: [
            ["Bonus delivered before the programme starts", "The pay-in-full decision is validated within 24 hours. This is the email that gets forwarded to other gym owners."],
            ["“Nothing further is owed” repeated", "Plan clients get a payment schedule here. He gets relief. Say it twice."]
          ],
          q: ["Deliver the pay-in-full bonus first and fast. It is the cheapest testimonial you'll ever buy.", "framework · pay less now or more later (adapted)"]
        }
      ]
    },

    // ───────────────────────────── 3 · COACHING INSTITUTE ─────────────────────────────
    {
      label: "Coaching institute · annual fee",
      source: "Applying it to a service business (adapted) · Jaipur",
      client: "Meera",
      about: "Meera, 41, is enrolling her son Aarav in a 1-year JEE coaching programme. Fee is ₹1,20,000 paid once, or 12 × ₹11,000 = ₹1,32,000. She picks the plan — and gets offered a switch mid-year. Fully adapted from the framework.",
      copy: `JEE 1-YEAR PROGRAMME — fee two ways
Pay in full at admission: ₹1,20,000 (saves ₹12,000)
Monthly plan: 12 × ₹11,000 = ₹1,32,000 (auto-debit on the 5th)
Same batch, same faculty, same test series and study material.
Pay-in-full bonus: printed material set + doubt-desk priority pass.
Switch any time: clear the remaining balance and save ₹1,000 per remaining month.
Late instalment: 7-day grace, then classes pause until paid.`,
      steps: [
        {
          k: "The counter card", t: "Two fees on one card.", ch: "Counter card · admission desk", when: "Day 0",
          html: `<div class="poster">
            <div class="k">Vidya Classes · JEE 2027 batch</div>
            <h5>One year. <em>Two ways to pay.</em></h5>
            <div class="pln-two">
              <div class="on"><b>₹1,20,000</b>Paid once at admission<br>saves ₹12,000</div>
              <div><b>₹11,000 / mo</b>12 instalments<br>total ₹1,32,000</div>
            </div>
            <p>Same batch. Same faculty. Same test series.<br>Pay-in-full also gets the printed material set and doubt-desk priority.</p>
            <div class="fine">Switch from monthly to full any time — save ₹1,000 for every remaining month.</div>
          </div>`,
          why: [
            ["Parents already know this format", "School fees are quoted annually and quarterly. The offer feels normal, so the only question is which."],
            ["Saving quoted as a rupee amount", "₹12,000 is one month's instalment — an anchor a parent can feel."],
            ["The switch clause is on the card", "It tells the plan-buyer she is not locked into the worse deal. That makes picking the plan easy."]
          ],
          q: ["The same product priced two ways sorts buyers by cash, not by desire. Desire is what you sell to; cash is what you collect.", "framework · pay less now or more later"]
        },
        {
          k: "The counsellor", t: "Which one suits you?", ch: "In person · admission desk", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Ritu · Vidya Classes</b><small>Admission counsellor</small></div></div>
            <q>Meera ji, the year is <em>₹1,32,000</em> — ₹11,000 every month, auto-debit. Or <em>₹1,20,000 today</em>, and Aarav gets the printed set and the doubt-desk pass. Batch is the same either way. Which one suits you?</q>
          </div>`,
          why: [
            ["No pressure on full pay", "If she says monthly, the counsellor says great and moves on. A lost admission over payment shape is a lost year of fees."],
            ["Plan is stated as a monthly number", "₹11,000/mo is compared to her salary, not to ₹1,20,000. Different pocket, easier yes."]
          ],
          q: ["The plan customer isn't a lesser customer. They're the customer you would have lost with one price.", "framework · pay less now or more later"]
        },
        {
          k: "The choice", t: "She picks the plan. That is fine.", ch: "Fee form · admission desk", when: "Day 0",
          html: `<div class="choice">
            <div class="ch">
              <div class="k">Option A · Pay in full</div>
              <div class="p"><s>₹1,32,000</s>₹1,20,000</div>
              <ul><li><b>Paid once at admission</b></li><li>Same batch, faculty, test series</li><li>Printed material set</li><li>Doubt-desk priority pass</li></ul>
              <div class="cr">Saves ₹12,000</div>
              <div class="sub">Cheque, UPI or card</div>
            </div>
            <div class="ch best">
              <div class="badge">Meera's choice</div>
              <div class="k">Option B · Monthly plan</div>
              <div class="p">₹11,000 <small>× 12 = ₹1,32,000</small></div>
              <ul><li><b>₹11,000 today</b>, then the 5th of each month</li><li>Same batch, faculty, test series</li><li class="no">Printed material set</li><li class="no">Doubt-desk priority</li></ul>
              <div class="sub">Switch to full any time and save ₹1,000 per remaining month</div>
            </div>
          </div>`,
          why: [
            ["The core is untouched", "Batch, faculty, tests are on both cards. Only the extras differ. Plan buyers must never feel Aarav gets a worse teacher."],
            ["Highlight follows the buyer", "Her card is the highlighted one. The interface agrees with her choice instead of nagging her."]
          ],
          q: ["Make the full-pay bonus a convenience, not the outcome. Nobody should pay a plan and get a worse result.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "Fee agreement", t: "The schedule she signed.", ch: "Paper · admission desk", when: "Day 0",
          html: `<div class="doc">
            <div class="stamp">ADMITTED</div>
            <div class="k">Vidya Classes · fee agreement</div>
            <h5>Aarav Shah · JEE 2027</h5>
            <div class="chk"><div class="b"></div><div><b>₹11,000 × 12 = ₹1,32,000</b><span>First instalment paid today. Auto-debit on the 5th, Aug–Jun.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Pay-in-full option: ₹1,20,000 (declined today)</b><span>May switch any time: balance minus ₹1,000 per remaining month.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Late instalment</b><span>7-day grace. Classes pause until cleared. No penalty fee.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Same batch, faculty and test series as full-pay students</b><span>Extras (printed set, doubt-desk pass) apply only to full pay.</span></div></div>
            <div class="sig"><div class="l">Meera Shah</div><small>04 AUG · NEXT DEBIT 05 SEP</small></div>
          </div>`,
          why: [
            ["Consequence of missing is pause, not penalty", "A penalty fee creates enemies. A paused seat creates urgency. The parent pays."],
            ["Switch maths is spelled out", "“₹1,000 per remaining month” makes the mid-year offer arithmetic, not a negotiation."]
          ],
          q: ["Define what happens when a plan payment fails before it fails. The plan buyer knew the deal; so did you.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "Instalment reminder", t: "The 5th, every month.", ch: "WhatsApp", when: "Month 2 · 3 Sep",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">V</div><div>Vidya Classes · Fees<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Meera ji, reminder: Aarav's instalment 2 of 12 auto-debits on Sept 5.
                  <div class="board">
                    <div class="t">Fee tracker · Aarav Shah</div>
                    <div class="r"><span>Paid so far</span><b>₹11,000 (1/12)</b></div>
                    <div class="pips"><i class="ok"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Due 5 Sep</span><b>₹11,000</b></div>
                    <div class="r"><span>Remaining after</span><b>10 × ₹11,000</b></div>
                  </div>
                  Aarav's Test 1: 84/120, batch rank 9 🙂 <span class="tm">Wed 10:00 AM</span></div>
                <div class="bub me">Noted. Balance hai account mein 👍<span class="tm">10:31 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Reminder arrives with a result", "Test rank sits next to the fee. She is paying for something that is visibly working."],
            ["Pips show the road ahead", "Ten grey pips is a quiet nudge: a lot of months remain. That sets up the switch offer."]
          ],
          q: ["Every plan reminder is a chance to remind them the pay-in-full door is still open.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "The switch", t: "Clear the balance, keep the saving.", ch: "WhatsApp", when: "Month 4 · after Diwali bonus",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Ritu · Vidya Classes<small>online</small></div></div>
              <div class="body">
                <div class="bub">Meera ji, 3 of 12 paid. If you'd like to close the year now:
                  <div class="board">
                    <div class="t">Switch to pay-in-full</div>
                    <div class="r"><span>9 left on plan</span><b>₹99,000</b></div>
                    <div class="r"><span>Switch saving</span><b>− ₹9,000</b></div>
                    <div class="r"><span>Pay once now</span><b>₹90,000</b></div>
                    <div class="r"><span>Bonus</span><b>Printed set + pass</b></div>
                  </div>
                  Koi pressure nahi — monthly bhi bilkul theek hai. <span class="tm">Mon 11:20 AM</span></div>
                <div class="bub me">Diwali bonus aaya hai. Karte hain — link bhejo.<span class="tm">1:05 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Second bite at cash-now", "The plan buyer's cash situation changes. A bonus month, a tax refund — the switch offer catches it."],
            ["Same maths as the card", "₹1,000 per remaining month, exactly as promised on Day 0. No new terms, so no suspicion."],
            ["“No pressure” keeps the plan alive", "If she says no, she keeps paying monthly. Nothing is lost by asking."]
          ],
          q: ["Pay less now or more later is not a one-time question. Ask it again every time the buyer's cash changes.", "framework · pay less now or more later (adapted)"]
        }
      ]
    },

    // ───────────────────────────── 4 · SUBSCRIPTION / COURSE ─────────────────────────────
    {
      label: "Course app · annual vs monthly",
      source: "Applying it to a subscription product (adapted) · Bengaluru",
      client: "Rohan",
      about: "Rohan, 27, buys a stock-market learning app. ₹9,999 for the year paid once, or ₹999 a month (₹11,988 a year). He starts monthly; the app offers the switch on Day 30. Annual-vs-monthly is the same mechanic in subscription form. Adapted.",
      copy: `MARKET SCHOOL — two ways to subscribe
Annual, paid today: ₹9,999 (2 months free vs monthly)
Monthly: ₹999 / month = ₹11,988 a year, cancel anytime
Same lessons, same live Sunday sessions, same community.
Annual bonus: 1:1 portfolio review call (once).
Switch to annual any time — months already paid are credited against the annual price.`,
      steps: [
        {
          k: "The ad", t: "₹999 a month is the hook.", ch: "Instagram", when: "Day −2",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">MS</div><div><div class="nm">marketschool.in</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">FOR FIRST-TIME INVESTORS</div>
                <div><div class="big">Learn the market properly.<br><em>₹999/month, or ₹9,999 for the year.</em></div>
                <div class="sm">Live every Sunday. Cancel anytime on monthly. Two months free on annual.</div></div>
              </div>
              <div class="cta"><span>marketschool.in</span><b>Start</b></div>
              <div class="cap"><b>marketschool.in</b> 40 lessons, weekly live Q&amp;A, real portfolios reviewed. Monthly ya yearly — aap decide karo.</div>
            </div></div></div>`,
          why: [
            ["Monthly is the low-friction entry", "₹999 gets the click. ₹9,999 in the same line plants the annual price for later."],
            ["Annual is framed as free months", "“Two months free” is the plan total minus the full price, said the way a buyer likes to hear it."]
          ],
          q: ["Monthly vs annual is pay-less-now-or-more-later wearing a subscription's clothes.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "Pricing page", t: "Two plans, one product.", ch: "Landing page", when: "Day 0",
          html: `<div class="choice">
            <div class="ch best">
              <div class="badge">Pay less now</div>
              <div class="k">Annual</div>
              <div class="p"><s>₹11,988</s>₹9,999<small> / year</small></div>
              <ul><li><b>Paid once today</b></li><li>All 40 lessons · Sunday lives · community</li><li>Bonus: 1:1 portfolio review call</li><li>2 months free vs monthly</li></ul>
              <div class="cr">₹833 a month, effectively</div>
              <div class="sub">Renews yearly · reminder 7 days before</div>
            </div>
            <div class="ch">
              <div class="k">Monthly</div>
              <div class="p">₹999<small> / month</small></div>
              <ul><li><b>₹999 today</b>, then every 30 days</li><li>All 40 lessons · Sunday lives · community</li><li class="no">Portfolio review call</li><li>Cancel anytime</li></ul>
              <div class="sub">Switch to annual any time — paid months are credited</div>
            </div>
          </div>`,
          why: [
            ["Strike the monthly total on the annual card", "₹11,988 is what the monthly buyer will actually pay. Showing it makes ₹9,999 the obvious deal for anyone with the cash."],
            ["Credit clause lowers the switch cost", "Paid months count toward annual. A monthly buyer is never told their money was wasted."]
          ],
          q: ["The higher-total plan is not there to be bought by everyone. It is there to make the pay-in-full price look like a gift.", "framework · pay less now or more later"]
        },
        {
          k: "Checkout", t: "₹999. He starts monthly.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Market School</span><b>MONTHLY</b></div>
            <div class="body">
              <div class="row"><span>Market School · monthly</span><span>₹999</span></div>
              <div class="row"><span>Next charge · 30 days</span><span>₹999</span></div>
              <div class="row"><span>Annual alternative (2 months free)</span><span>₹9,999</span></div>
              <div class="row tot"><span>Total today</span><span>₹999</span></div>
              <div class="note">Cancel anytime. Switch to annual from Settings — months already paid are credited.</div>
              <div class="go">Pay ₹999 · UPI autopay</div>
              <div class="disc">Rohan Nair · rohan.n@ybl</div>
            </div>
          </div>`,
          why: [
            ["Annual stays on the receipt", "The alternative is printed at the moment of paying, so the switch later is not a surprise upsell."],
            ["Autopay is set up on Day 0", "The plan only works if the later payments actually arrive. Mandate first, lessons second."]
          ],
          q: ["A plan you cannot collect on is a discount you did not mean to give.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "Day 30", t: "Switch, and keep your ₹999.", ch: "Email", when: "Day 30",
          html: `<div class="mail">
            <div class="h"><div class="s">Rohan — month 2 charges tomorrow. Or lock the year for ₹9,000.</div><div class="f">From: Market School · To: rohan.nair@gmail.com</div></div>
            <div class="body">
              <p>You've watched 14 of 40 lessons and joined 4 Sunday lives. Nice.</p>
              <p>Tomorrow's ₹999 will go through as usual — nothing to do. But if you're staying the year, switch now: <b>annual is ₹9,999, minus the ₹999 you've already paid = ₹9,000 today.</b> That's 11 months for the price of 9, plus the 1:1 portfolio review.</p>
              <p>Prefer monthly? Totally fine. It keeps running.</p>
              <span class="cta">Switch to annual · ₹9,000</span>
            </div>
          </div>`,
          why: [
            ["Ask at the moment of proof", "Day 30 is after he has used it and before month 2 bills. Highest belief, lowest sunk-cost objection."],
            ["The credit is shown as arithmetic", "₹9,999 − ₹999 = ₹9,000. The promise from the pricing page is kept to the rupee."],
            ["Monthly is still respected", "“Totally fine” keeps the price-sensitive buyer. The email is an invitation, not a threat."]
          ],
          q: ["Every plan payment is a chance to offer pay-in-full again — the buyer has more proof and often more cash than on Day 0.", "framework · pay less now or more later (adapted)"]
        },
        {
          k: "Annual confirmed", t: "Eleven months, paid once.", ch: "In-app", when: "Day 30",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Market School · annual</div>
              <h5>You're set for the year.</h5>
              <p>₹9,000 paid today · ₹999 credited · next renewal in 12 months</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹9,999</b><span>total for the year</span></div><div><b>₹1,989</b><span>saved vs monthly</span></div><div><b>0</b><span>more charges</span></div></div>
              <div class="credit">Annual bonus unlocked<b>1:1 portfolio review</b>Book your 30-min call from the Bonuses tab</div>
            </div>
          </div>`,
          why: [
            ["Saving is stated once more", "₹1,989 saved is the story he tells his friends. The confirmation screen writes it for him."],
            ["Bonus is immediately actionable", "A bookable call, not a promise. The pay-in-full decision pays off the same day."]
          ],
          q: ["Reward the person who paid you early with something they can use today.", "framework · pay less now or more later (adapted)"]
        }
      ]
    }
  ]
});
