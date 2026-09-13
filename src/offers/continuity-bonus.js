// Continuity Bonus Offers — $100M Money Models, Section V (Continuity Offers)
// Mechanic: get the customer onto recurring billing by attaching a bonus to the commitment —
// a valuable one-time thing (product, sessions, gear, credit) given free for signing up, plus
// bonuses at milestones so they stay past the point where most people churn.
// Examples 1–2 follow the chapter's own settings (Alex's gym, Gym Launch); rupee/dollar figures are
// illustrative. Examples 3–4 are marked "(adapted)" in `source` and follow the framework only.
window.OFFERS.push({
  slug: "continuity-bonus",
  name: "Continuity bonus",
  section: "Continuity",
  css: `
.cb-stack{margin:12px 0 0;text-align:left}
.cb-stack .r{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:7px 0;border-top:1px dashed var(--line);font-size:12.5px;line-height:1.3}
.cb-stack .r:first-child{border-top:0}
.cb-stack .r span small{display:block;font-size:10.5px;color:var(--mute)}
.cb-stack .r s{color:var(--mute);font-family:var(--mono);font-size:11px;white-space:nowrap}
.cb-stack .r em{font-style:normal;color:var(--green-d);font-weight:700;font-family:var(--mono);font-size:11px;white-space:nowrap;margin-left:6px}
.cb-stack .tot{display:flex;justify-content:space-between;padding:9px 0 0;border-top:2px solid var(--ink);font-weight:700;font-size:13px;margin-top:2px}
.cb-stack .tot b{color:var(--green-d)}
.cb-miles{display:flex;gap:6px;margin:12px 0 0}
.cb-miles div{flex:1;border:1px solid var(--line);border-radius:9px;padding:8px 6px;text-align:center;font-size:10.5px;color:var(--dim);line-height:1.3}
.cb-miles div b{display:block;font-family:var(--mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--mute);margin-bottom:3px}
.cb-miles .on{border-color:var(--green);background:var(--green-xl);color:var(--ink)}
.cb-miles .on b{color:var(--green)}
.cb-miles .done{opacity:.55}
.cb-poster h5{font-size:30px}
.cb-poster p{font-size:12.5px}
.cb-doc h5{font-size:22px}
.cb-doc .k,.cb-doc h5{max-width:260px}
.cb-doc .chk{padding:7px 0}
.cb-sig .l{width:170px}
.cb-sig small{white-space:nowrap}
.cb-tight .wa .body{gap:6px;padding:9px 8px}
.cb-tight .bub{padding:6px 9px}
.cb-tight .board{margin:5px 0;padding:6px 9px}
.cb-tight .board .r{padding:2px 0}
.cb-note{font-size:11.5px;color:var(--mute);margin-top:12px;line-height:1.5}
.cb-web .rules{grid-template-columns:repeat(3,1fr)}
.cb-web .rule .t{font-size:12px}
.cb-web .body{padding:20px 26px}
.cb-web h5{font-size:24px}
.cb-mail .cb-miles{margin:4px 0 12px}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the book, localised) ───────────────────────── */
    {
      label: "Alex's gym · join-and-get",
      source: "Alex's own gym, as told in the book · localised to Indore",
      client: "Sunita",
      about: "Sunita, 42, Vijay Nagar. Finishes the 6-week challenge and, at the weigh-in, is offered the 12-month membership with a bonus stack free for signing today — and more bonuses at months 3, 6 and 12 for staying. Indian persona; mechanism as in the book, figures illustrative.",
      copy: `CONTINUITY BONUS — 12-month membership
₹3,500/month on auto-debit, 12 months. Sign up today (at the weigh-in) and get FREE:
• 4 personal-training sessions (₹6,000) • 30-day supplement pack (₹2,500) • Kit bag + shaker (₹1,800)
Total ₹10,300 of bonuses. You pay ₹0 for them. Price stays ₹3,500 — no discount.
Stay bonuses (unlock while autopay is active): Month 3 — InBody scan + meal-plan refresh.
Month 6 — 2 PT sessions + hoodie. Month 12 — a friend trains free for a month, renewal locked at ₹3,500.
Sign-up bonuses are for today only. Not offered later.`,
      steps: [
        {
          k: "The pitch", t: "Sign today, walk out with more.", ch: "In person · Day-42 weigh-in", when: "Day 42 of challenge",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Coach Rahul</b><small>Fit Studio Indore · at the scale</small></div></div>
            <q>Sunita ji, minus six kilos. Here's what I do for people who finish: sign up for the year today, ₹3,500 a month, and I add four PT sessions with me, a month of supplements and the kit bag. <em>That's ₹10,300 of stuff, free, and it's only on the table today, at this scale.</em> Price stays the same either way — the bonuses don't.</q>
          </div>`,
          why: [
            ["Ask at peak result", "She has just seen the number on the scale. The membership is offered before the excitement fades, not by email next week."],
            ["Bonus, not discount", "₹3,500 never moves. A discount lowers every future month; a bonus costs the gym once and makes today's yes bigger."],
            ["Today only, said plainly", "The bonuses expire at the scale. That's the reason to decide now, and it is stated before any form appears."]
          ],
          q: ["Reward the commitment, not the hesitation. Keep the price; make the reason to say yes today bigger.", "framework · continuity bonus offers"]
        },
        {
          k: "Bonus card", t: "The stack, on the counter.", ch: "Counter card · front desk", when: "Day 42 of challenge",
          html: `<div class="poster cb-poster">
            <div class="k">Finishers only · today at the weigh-in</div>
            <h5>Join for 12 months. <em>Walk out with ₹10,300 free.</em></h5>
            <div class="cb-stack">
              <div class="r"><span>4 personal-training sessions<small>with your challenge coach · 60 min each</small></span><span><s>₹6,000</s><em>FREE</em></span></div>
              <div class="r"><span>30-day supplement starter pack<small>whey + multivitamin · picked for your plan</small></span><span><s>₹2,500</s><em>FREE</em></span></div>
              <div class="r"><span>Fit Studio kit bag + shaker<small>the one the coaches carry</small></span><span><s>₹1,800</s><em>FREE</em></span></div>
              <div class="tot"><span>You pay for the bonuses</span><b>₹0</b></div>
            </div>
            <div class="cb-miles">
              <div><b>Month 3</b>InBody scan + meal refresh</div>
              <div><b>Month 6</b>2 PT sessions + hoodie</div>
              <div><b>Month 12</b>Friend trains free 1 month</div>
            </div>
            <div class="fine">₹3,500 / month · 12 months · auto-debit on the 1st · sign-up bonuses valid today only</div>
          </div>`,
          why: [
            ["Every bonus has a price next to it", "₹6,000, ₹2,500, ₹1,800 struck through. The value is visible, so “free” means something instead of sounding like fluff."],
            ["Stay bonuses shown at sign-up", "Months 3, 6 and 12 are printed before she joins. She is signing up for a year of unlocks, not a year of debits."],
            ["Bonuses she would have bought anyway", "PT, supplements, gear — the gym's own upsells. Their cost is low; their perceived value is the retail price."]
          ],
          q: ["Give bonuses with high perceived value and low cost to you — ideally things you already sell.", "framework · continuity bonus offers"]
        },
        {
          k: "Sign-up form", t: "Membership, bonuses and dates in ink.", ch: "Paper · sales office", when: "Day 0",
          html: `<div class="doc cb-doc">
            <div class="stamp">JOINED</div>
            <div class="k">Membership agreement</div>
            <h5>Sunita's membership</h5>
            <div class="chk"><div class="b"></div><div><b>12-month membership · ₹3,500/month</b><span>Auto-debit on the 1st · Mon/Wed/Fri 7 AM batch · Coach Rahul</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Sign-up bonuses · collected today</b><span>4 PT sessions (book within 60 days) · 30-day supplement pack · kit bag + shaker</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Month 3 · 12 Sep</b><span>InBody scan + meal-plan refresh</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Month 6 · 12 Dec</b><span>2 PT sessions + Fit Studio hoodie</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Month 12 · 12 Jun</b><span>A friend trains free for a month · renewal locked at ₹3,500</span></div></div>
            <div class="sig cb-sig"><div class="l">Sunita Verma</div><small>DATE: 12 JUN · FIRST DEBIT: 1 JUL</small></div>
          </div>`,
          why: [
            ["Bonuses on the contract", "What she gets free is written next to what she pays. Nobody at the desk can later “forget” the PT sessions."],
            ["Dated milestones", "12 Sep, 12 Dec, 12 Jun. Each stay bonus has a date, so she has three future reasons to still be a member."],
            ["Book-within-60-days", "PT sessions expire if unused. That forces the first bonus to be consumed early, when it builds the habit."]
          ],
          q: ["Write the bonuses into the agreement. A bonus that isn't documented becomes a dispute, not a reason to stay.", "framework · continuity bonus offers"]
        },
        {
          k: "Autopay", t: "Full price. Bonuses at zero.", ch: "Razorpay · autopay mandate", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Fit Studio Indore · membership</span><b>RAZORPAY · AUTOPAY</b></div>
            <div class="body">
              <div class="row"><span>12-month membership</span><span>₹3,500 / month</span></div>
              <div class="row"><span>4 PT sessions <s style="color:var(--mute)">₹6,000</s></span><span>₹0</span></div>
              <div class="row"><span>30-day supplement pack <s style="color:var(--mute)">₹2,500</s></span><span>₹0</span></div>
              <div class="row"><span>Kit bag + shaker <s style="color:var(--mute)">₹1,800</s></span><span>₹0</span></div>
              <div class="row tot"><span>Today, then monthly</span><span>₹3,500</span></div>
              <div class="note">🎁 <b>Stay bonuses:</b> Month 3, 6 and 12 unlock automatically while this mandate is active. Cancel and the unlocks stop.</div>
              <div class="go">Set up autopay · ₹3,500 / month</div>
              <div class="disc">UPI autopay or card · first debit today · then the 1st of each month</div>
            </div></div>`,
          why: [
            ["₹0 lines on the receipt", "Three struck-through prices at ₹0. The bonus is felt at the moment of paying, which is when the decision is made."],
            ["Recurring billing set up on the spot", "The mandate is the product. The bonus exists to get this screen approved today, not to be nice."],
            ["Unlocks tied to the mandate", "“Cancel and the unlocks stop” makes the stay bonuses a reason to keep the debit running past month 2."]
          ],
          q: ["The goal of the bonus is one thing: recurring billing switched on today. Everything else is decoration.", "framework · continuity offers"]
        },
        {
          k: "Bonus handoff", t: "The free stuff, same evening.", ch: "WhatsApp", when: "Day 0",
          html: `<div class="phone cb-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Coach Rahul · Fit Studio<small>online</small></div></div>
              <div class="body">
                <div class="bub">Welcome to the year, Sunita ji 🎁 Bag + supplement pack are packed with your name at the desk. PT session 1 with me: Thursday 7 AM.
                  <div class="board">
                    <div class="t">Your bonus tracker</div>
                    <div class="r"><span>Sign-up bonuses</span><b>ready at desk</b></div>
                    <div class="r"><span>PT sessions</span><b>0 / 4 used</b></div>
                    <div class="r"><span>Month 3 · 12 Sep</span><span style="color:var(--mute)">InBody + meal plan</span></div>
                    <div class="r"><span>Month 6 · 12 Dec</span><span style="color:var(--mute)">2 PT + hoodie</span></div>
                    <div class="r"><span>Month 12 · 12 Jun</span><span style="color:var(--mute)">friend free</span></div>
                  </div>
                  <span class="tm">Thu 6:40 PM</span>
                </div>
                <div class="bub me">Collected the bag 😄 Thursday pakka. Supplements kab se start karun?<span class="tm">7:02 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Deliver the bonus fast", "Bag and supplements the same day, PT booked for Thursday. A bonus that arrives late feels like a broken promise."],
            ["Tracker shows what's next", "All three future unlocks with dates. She can see the value still coming, which is what a churn decision weighs against."],
            ["Bonus creates the first visit", "PT session 1 is a fixed appointment in week 1. The bonus does the job of getting her back in the door."]
          ],
          q: ["Deliver the sign-up bonus immediately and visibly. Speed is what makes the next bonus believable.", "framework · continuity bonus offers"]
        },
        {
          k: "Month 3", t: "First stay bonus unlocks.", ch: "WhatsApp", when: "Day 90",
          html: `<div class="phone cb-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Coach Rahul · Fit Studio<small>online</small></div></div>
              <div class="body">
                <div class="bub">90 days done, Sunita ji 🎉 Your Month-3 bonus is unlocked: InBody scan + meal-plan refresh. Slots Saturday 9 or 10 AM?
                  <div class="board">
                    <div class="t">Membership · month 3 of 12</div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Sessions since Day 0</span><b>34</b></div>
                    <div class="r"><span>PT sessions used</span><b>4 / 4</b></div>
                    <div class="r"><span>Unlocked today</span><b>InBody + meal refresh</b></div>
                    <div class="r"><span>Next · 12 Dec</span><span style="color:var(--mute)">2 PT + hoodie</span></div>
                  </div>
                  <span class="tm">Fri 8:12 AM</span>
                </div>
                <div class="bub me">10 AM Saturday. Diet mein thoda bore ho gayi thi, perfect timing 🙏<span class="tm">8:30 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Bonus lands where churn peaks", "Month 3 is when novelty fades and the debit starts to feel optional. The unlock gives her a reason to come in this week."],
            ["Bonus is a re-engagement, not a gift", "A scan and a fresh meal plan restart her progress. The bonus fixes the reason she'd have quit."],
            ["Next unlock already named", "“12 Dec · 2 PT + hoodie” keeps the countdown alive. Cancelling now means forfeiting something specific."]
          ],
          q: ["Put a bonus just before the point where people usually quit. Then they stay for the bonus and forget to quit.", "framework · continuity bonus offers"]
        },
        {
          k: "Month 6", t: "Halfway. Hoodie, PT, and a friend next.", ch: "Result card · WhatsApp + studio wall", when: "Day 180",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Month 6 · Fit Studio Indore</div>
              <h5>Sunita, six months in.</h5>
              <p>68 sessions · 78 → 66 kg since Day 0 of the challenge</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>6</b><span>months paid</span></div><div><b>68</b><span>sessions</span></div><div><b>₹12,800</b><span>bonuses received</span></div></div>
              <div class="credit">Unlocked today<b>2 PT sessions + hoodie</b>hoodie at the desk · PT sessions valid till 12 Feb</div>
              <div class="cb-miles">
                <div class="done"><b>Month 3</b>InBody + meal refresh ✓</div>
                <div class="on"><b>Month 6</b>2 PT + hoodie</div>
                <div><b>Month 12</b>Friend trains free · ₹3,500 locked</div>
              </div>
            </div></div>`,
          why: [
            ["Count the bonuses, not the debits", "₹12,800 received against ₹21,000 paid. The card reframes six months of autopay as a deal she is winning."],
            ["Wearable bonus is an ad", "A hoodie is a walking testimonial in Vijay Nagar, and it costs the gym a few hundred rupees."],
            ["Month 12 bonus is a referral", "“A friend trains free for a month” turns the renewal bonus into next year's new member."]
          ],
          q: ["The best stay bonus does double duty: it keeps this customer and brings the next one.", "framework · continuity bonus offers"]
        }
      ]
    },

    /* ───────────────────────── 2 · GYM LAUNCH (from the book, US) ───────────────────────── */
    {
      label: "Gym Launch · licence bonus",
      source: "Gym Launch, as told in the book · US persona kept",
      client: "Marcus",
      about: "Marcus owns a gym in Ohio. He's offered the monthly Gym Launch licence with his first launch built for him free if he signs on the call — and more bonuses at day 90, month 6 and month 12 for staying. US-native example; dollar figures illustrative.",
      copy: `GYM LAUNCH LICENCE — CONTINUITY BONUS
$1,000/month licence, 12 months, billed monthly. Sign on this call and get FREE:
• Your first launch built for you: ads, funnel, scripts, follow-up (value $4,000)
• 2 tickets to the next live event ($1,500) • Onboarding call with a coach within 48 h
Stay bonuses (while the licence is active): Day 90 — done-for-you campaign refresh.
Month 6 — a second team seat in the portal. Month 12 — year-two price locked + private strategy day.
Sign-up bonuses are for signing on the call. Not offered afterwards.`,
      steps: [
        {
          k: "The close", t: "Sign now, we build your launch.", ch: "Zoom · sales call", when: "Day −1",
          html: `<div class="say">
            <div class="who"><div class="av">J</div><div><b>Jake · Gym Launch</b><small>Sales call · 41 min in</small></div></div>
            <q>Marcus, the licence is a thousand a month for twelve months. If you sign today, we build your first launch for you — the ads, the funnel, the scripts, the follow-up — and put two seats to the live event in your name. <em>That's about $5,500 of work and tickets, free, for people who sign on this call.</em> The price is the same next week. The build isn't.</q>
          </div>`,
          why: [
            ["The bonus removes the first-week fear", "“We build it for you” answers the real objection — “I don't have time to set this up” — with a gift instead of a discount."],
            ["Price is never negotiated", "“Same price next week” protects every other licensee's price. Only the bonus is time-bound."],
            ["Commitment named out loud", "Twelve months, billed monthly. The bonus is attached to the commitment, so the commitment is said first."]
          ],
          q: ["Trade a one-time bonus for a long-term commitment. You pay once; they pay every month.", "framework · continuity bonus offers"]
        },
        {
          k: "Order page", t: "Licence, three bonuses, one button.", ch: "Order page · sent during the call", when: "Day −1",
          html: `<div class="web cb-web">
            <div class="bar"><i></i><i></i><i></i><div class="url">gymlaunch.com/licence/marcus</div></div>
            <div class="body">
              <div class="eyebrow">Gym Launch licence · Ohio · prepared for Marcus</div>
              <h5>$1,000 / month. <em>Sign today and we launch you free.</em></h5>
              <div style="font-size:12.5px;color:var(--dim)">Twelve months, billed monthly. Three bonuses for signing on today's call, three more for staying.</div>
              <div class="rules">
                <div class="rule"><div class="n">BONUS 01 · $4,000</div><div class="t">First launch built for you</div><div class="s">ads · funnel · scripts · follow-up</div></div>
                <div class="rule"><div class="n">BONUS 02 · $1,500</div><div class="t">2 live-event tickets</div><div class="s">next event · you + a coach</div></div>
                <div class="rule"><div class="n">BONUS 03</div><div class="t">Coach onboarding call</div><div class="s">within 48 hours</div></div>
              </div>
              <div class="cb-miles">
                <div><b>Day 90</b>Campaign refresh built for you</div>
                <div><b>Month 6</b>Second team seat</div>
                <div><b>Month 12</b>Year-two price locked + strategy day</div>
              </div>
              <div class="payout"><b>$0</b><span>for $5,500 of sign-up bonuses · licence stays $1,000 / month either way</span></div>
              <div class="btn">Start my licence · $1,000 / month <small>Bonuses valid while this call is open</small></div>
            </div></div>`,
          why: [
            ["Bonuses have dollar values", "$4,000 and $1,500 sit next to the $1,000 monthly. The first month's fee looks small against what arrives with it."],
            ["Stay bonuses are on the order page", "Day 90, month 6, month 12 are visible before he signs. He is buying a year of unlocks, and he knows it."],
            ["Deadline is the call, not a date", "“Valid while this call is open” is the tightest honest deadline there is. It's why the page is sent during the call."]
          ],
          q: ["Show the bonus stack next to the recurring price. The commitment should look small beside what it unlocks.", "framework · continuity bonus offers"]
        },
        {
          k: "Checkout", t: "Card on file, bonuses at $0.", ch: "Stripe · subscription", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch · licence</span><b>STRIPE · SUBSCRIPTION</b></div>
            <div class="body">
              <div class="row"><span>Gym Launch licence · 12 months</span><span>$1,000 / month</span></div>
              <div class="row"><span>First launch built for you <s style="color:var(--mute)">$4,000</s></span><span>$0</span></div>
              <div class="row"><span>2 live-event tickets <s style="color:var(--mute)">$1,500</s></span><span>$0</span></div>
              <div class="row"><span>Coach onboarding call</span><span>$0</span></div>
              <div class="row tot"><span>Today, then monthly</span><span>$1,000</span></div>
              <div class="note"><b>Stay bonuses:</b> Day 90 campaign refresh, month-6 team seat and month-12 price lock unlock automatically while the subscription is active.</div>
              <div class="go">Start subscription · $1,000 / month</div>
              <div class="disc">Billed on the 1st · 12-month term · card on file</div>
            </div></div>`,
          why: [
            ["Subscription, not invoice", "The card is stored and billed monthly. The bonus's only job was to get this subscription created today."],
            ["$0 lines make the bonus real", "Struck-through $4,000 and $1,500 on the receipt. He sees $5,500 arrive for $1,000 leaving."],
            ["Unlocks tied to “active”", "Every stay bonus is conditional on the subscription still running. Cancelling has a visible cost."]
          ],
          q: ["The goal of the bonus is one thing: recurring billing switched on today. Everything else is decoration.", "framework · continuity offers"]
        },
        {
          k: "Bonus arrives", t: "Your launch is built. Go.", ch: "Email", when: "Day 2",
          html: `<div class="mail cb-mail">
            <div class="h"><div class="s">Marcus, your first launch is built</div><div class="f">From: Priya · Gym Launch success team &lt;success@gymlaunch.com&gt; · to Marcus</div></div>
            <div class="body">
              <p>Everything from the call is done. Log in and you'll find:</p>
              <p><b>Ads</b> 6 creatives + copy uploaded to your ad account, ready to switch on<br><b>Funnel</b> live at yourgym.com/6week · calendar connected<br><b>Scripts</b> phone + walk-in scripts in the portal, with your prices<br><b>Follow-up</b> 14-day text and email sequence loaded<br><b>Event</b> 2 tickets in your name · March · details in the portal</p>
              <p>Coach call with Dan is <b>Thursday 2 PM ET</b> — he'll switch the ads on with you.</p>
              <div class="cta">Open my launch</div>
            </div></div>`,
          why: [
            ["Bonus delivered in 48 hours", "Two days from card to a built launch. Fast delivery is what makes the stay bonuses believable."],
            ["The bonus produces the first result", "A launch that's live in week 1 means leads in week 1. The bonus is engineered to make month 2's debit feel obvious."],
            ["Every promised item, itemised", "Ads, funnel, scripts, follow-up, tickets — the call's list, checked off in his inbox."]
          ],
          q: ["Deliver the sign-up bonus immediately and visibly. Speed is what makes the next bonus believable.", "framework · continuity bonus offers"]
        },
        {
          k: "Day 90", t: "First stay bonus, built for him.", ch: "Email", when: "Day 90",
          html: `<div class="mail cb-mail">
            <div class="h"><div class="s">90 days in — your campaign refresh is unlocked</div><div class="f">From: Priya · Gym Launch success team · to Marcus</div></div>
            <div class="body">
              <div class="cb-miles">
                <div class="done"><b>Day 0</b>Launch built ✓</div>
                <div class="on"><b>Day 90</b>Campaign refresh</div>
                <div><b>Month 6</b>Second team seat</div>
                <div><b>Month 12</b>Price lock + strategy day</div>
              </div>
              <p>Three months on the licence — your Day-90 bonus is live. We rebuild your ads and follow-up with a fresh angle so your second launch doesn't run on tired creative.</p>
              <p><b>What we need from you:</b> 4 client photos and your best result from launch 1. Reply with them by Friday and the refresh is in your account Monday.</p>
              <div class="cta">Send my photos</div>
            </div></div>`,
          why: [
            ["Bonus solves the month-3 problem", "Ads fatigue around 90 days and results dip — exactly when licensees cancel. The bonus fixes the dip before it becomes a cancellation."],
            ["Requires a small action", "Sending four photos makes him re-engage. A bonus he has to claim is remembered; one that silently appears is not."],
            ["Timeline keeps counting", "Month 6 and month 12 sit next to Day 90. Leaving now means leaving a seat and a price lock on the table."]
          ],
          q: ["Put a bonus just before the point where people usually quit. Then they stay for the bonus and forget to quit.", "framework · continuity bonus offers"]
        },
        {
          k: "Month 6", t: "Halfway. A seat now, a lock later.", ch: "Portal · result card", when: "Month 6",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Month 6 · Gym Launch licence</div>
              <h5>Marcus, six months in.</h5>
              <p>2 launches run · 61 new members · 6 of 12 payments made</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>61</b><span>new members</span></div><div><b>$6,000</b><span>licence paid</span></div><div><b>$5,500+</b><span>bonuses received</span></div></div>
              <div class="credit">Unlocked today<b>Second team seat</b>add your front-desk lead to the portal · trainings + scripts included</div>
              <div class="cb-miles">
                <div class="done"><b>Day 90</b>Campaign refresh ✓</div>
                <div class="on"><b>Month 6</b>Second team seat</div>
                <div><b>Month 12</b>$1,000 locked for year 2 + strategy day</div>
              </div>
            </div></div>`,
          why: [
            ["Result next to bonuses", "61 members and $5,500 of bonuses against $6,000 paid. The card argues for month 7 without anyone calling him."],
            ["A seat makes the product sticky", "Once his front-desk lead is trained in the portal, cancelling means retraining a team, not just stopping a card."],
            ["Month 12 bonus is the renewal", "A locked year-two price plus a strategy day is the reason to sign the second year before the first ends."]
          ],
          q: ["Each milestone bonus should make leaving a little more expensive and renewing a little more obvious.", "framework · continuity bonus offers"]
        }
      ]
    },

    /* ───────────────────────── 3 · COMMUNITY MEMBERSHIP (adapted) ───────────────────────── */
    {
      label: "Community · course free",
      source: "How the framework applies to a paid community / info business (adapted)",
      client: "Kavya",
      about: "Kavya, 29, Hyderabad. Joins a ₹999/month investing community. The ₹4,999 beginner course is free for signing up on a 12-month plan; a 1:1 review at month 3, a workshop seat at month 6 and a planning call at month 12 keep her in. Adapted from the framework.",
      copy: `MONEY CIRCLE — CONTINUITY BONUS
₹999/month, 12-month plan on autopay. Sign up this week and get FREE:
• The Money Basics course (₹4,999) — unlocked the minute you join
• Starter toolkit: budget sheet + SIP tracker (₹999)
Stay bonuses: Month 3 — 1:1 portfolio review (₹2,500). Month 6 — live workshop seat (₹3,000).
Month 12 — annual planning call + year-two price locked at ₹999.
Monthly plan without bonuses: ₹1,299/month, cancel anytime.`,
      steps: [
        {
          k: "The ad", t: "Join the circle, get the course.", ch: "Instagram", when: "Day −3",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">MC</div><div><div class="nm">moneycircle.in</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">FIRST-TIME INVESTORS · 25–35</div>
                <div><div class="big">Join for 12 months.<br><em>The ₹4,999 course is free.</em></div>
                <div class="sm">₹999/month · weekly calls, a community that answers, and the full beginner course on day one.</div></div>
              </div>
              <div class="cta"><span>moneycircle.in/join</span><b>See what's free</b></div>
              <div class="cap"><b>moneycircle.in</b> Course-free offer closes Sunday. Monthly plan without bonuses stays open, ₹1,299.</div>
            </div></div></div>`,
          why: [
            ["The bonus is the headline", "“The ₹4,999 course is free” sells better than “join our community”. The bonus is the concrete thing; the membership is the commitment."],
            ["12 months stated in the hook", "The commitment is not hidden. The bonus is explicitly for the 12-month plan, so nobody feels tricked at checkout."],
            ["A monthly plan exists, without bonuses", "₹1,299 month-to-month is real. It makes the 12-month plan the obvious choice rather than the only one."]
          ],
          q: ["Reward the commitment, not the hesitation. Keep the price; make the reason to say yes today bigger.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "The page", t: "Two plans. One has the bonuses.", ch: "Landing page", when: "Day −3",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Monthly · cancel anytime</div>
              <div class="p">₹1,299 <small>/ month</small></div>
              <ul><li>Weekly calls + community</li><li class="no">Money Basics course (₹4,999)</li><li class="no">Starter toolkit (₹999)</li><li class="no">Month 3 · 6 · 12 bonuses</li></ul>
              <div class="sub">No commitment. No bonuses.</div>
            </div>
            <div class="ch best">
              <div class="badge">Bonuses included</div>
              <div class="k">12-month plan · autopay</div>
              <div class="p">₹999 <small>/ month</small></div>
              <ul><li>Weekly calls + community</li><li><b>Money Basics course · ₹4,999 · free on day one</b></li><li><b>Starter toolkit · ₹999 · free</b></li><li><b>Month 3</b> 1:1 review · <b>Month 6</b> workshop · <b>Month 12</b> planning call</li></ul>
              <div class="cr">₹11,500 of bonuses over the year · ₹0</div>
              <div class="sub">First debit today · then the 1st of each month · closes Sunday</div>
            </div>
          </div>`,
          why: [
            ["Bonuses are the difference", "Both plans have the same calls and community. Everything on the right that's missing on the left is a bonus, not a feature."],
            ["Longer term also costs less per month", "₹999 vs ₹1,299 is a small gap. The course and the milestones are what actually move her to twelve months."],
            ["Milestones printed on the plan", "Months 3, 6 and 12 on the card. She is choosing a year with four unlocks, not a year of debits."]
          ],
          q: ["Show the bonus stack next to the recurring price. The commitment should look small beside what it unlocks.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "Checkout", t: "Autopay on. Course at ₹0.", ch: "Razorpay · autopay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Money Circle · 12-month plan</span><b>RAZORPAY · AUTOPAY</b></div>
            <div class="body">
              <div class="row"><span>Money Circle membership · 12 months</span><span>₹999 / month</span></div>
              <div class="row"><span>Money Basics course <s style="color:var(--mute)">₹4,999</s></span><span>₹0</span></div>
              <div class="row"><span>Starter toolkit <s style="color:var(--mute)">₹999</s></span><span>₹0</span></div>
              <div class="row tot"><span>Today, then monthly</span><span>₹999</span></div>
              <div class="note">🎁 <b>Stay bonuses:</b> 1:1 review (month 3), workshop seat (month 6), planning call + price lock (month 12) unlock while autopay is active.</div>
              <div class="go">Set up autopay · ₹999 / month</div>
              <div class="disc">UPI autopay or card · course unlocks instantly after payment</div>
            </div></div>`,
          why: [
            ["Instant unlock is the promise", "“Course unlocks instantly” means the bonus is felt within a minute of paying. No waiting, no doubt."],
            ["₹0 lines make the value visible", "₹4,999 and ₹999 struck through on the receipt. The first ₹999 debit buys ₹5,998 of stuff."],
            ["Mandate is the product", "The community only makes money if autopay runs for months. The course exists to get this mandate approved."]
          ],
          q: ["The goal of the bonus is one thing: recurring billing switched on today. Everything else is decoration.", "framework · continuity offers (adapted)"]
        },
        {
          k: "Course unlocked", t: "Bonus in the inbox, instantly.", ch: "Email", when: "Day 0",
          html: `<div class="mail cb-mail">
            <div class="h"><div class="s">Kavya, your course is open — start with lesson 1 tonight</div><div class="f">From: Neha · Money Circle &lt;neha@moneycircle.in&gt; · to Kavya</div></div>
            <div class="body">
              <p>Welcome in. Two things are already in your account:</p>
              <p><b>Money Basics</b> — 8 lessons, 3 hours. Lesson 1 is 12 minutes; do it tonight.<br><b>Starter toolkit</b> — budget sheet + SIP tracker, ready to copy.</p>
              <div class="cb-miles">
                <div class="on"><b>Today</b>Course + toolkit</div>
                <div><b>Month 3</b>1:1 portfolio review</div>
                <div><b>Month 6</b>Workshop seat</div>
                <div><b>Month 12</b>Planning call + lock</div>
              </div>
              <p>Your first live call is <b>Thursday 8 PM</b>. Bring one question from lesson 1.</p>
              <div class="cta">Open lesson 1</div>
            </div></div>`,
          why: [
            ["Point at the first 12 minutes", "“Do lesson 1 tonight” gets the bonus consumed before the excitement fades. An unused bonus is forgotten value."],
            ["Timeline in the welcome mail", "The three future bonuses are shown on day 0. Every later email can point back at this line."],
            ["Bonus feeds the product", "“Bring a question from lesson 1” links the free course to Thursday's call. The bonus makes her use the thing she pays for."]
          ],
          q: ["Deliver the sign-up bonus immediately and visibly. Speed is what makes the next bonus believable.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "Month 3", t: "Your 1:1 review is unlocked.", ch: "WhatsApp", when: "Day 90",
          html: `<div class="phone cb-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">N</div><div>Neha · Money Circle<small>online</small></div></div>
              <div class="body">
                <div class="bub">Kavya, 3 months in the circle 🎉 Your Month-3 bonus is live: a 30-min 1:1 portfolio review with me. Pick a slot 👇
                  <div class="board">
                    <div class="t">Membership · month 3 of 12</div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Course</span><b>8 / 8 lessons</b></div>
                    <div class="r"><span>Calls attended</span><b>9 / 12</b></div>
                    <div class="r"><span>Unlocked today</span><b>1:1 review · ₹2,500</b></div>
                    <div class="r"><span>Next · month 6</span><span style="color:var(--mute)">workshop seat</span></div>
                  </div>
                  Slots: Sat 11 AM · Sun 5 PM
                  <span class="tm">Mon 9:00 AM</span>
                </div>
                <div class="bub me">Sunday 5 PM! Was about to ask if the ₹999 is worth continuing… this answers it 😅<span class="tm">9:24 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Timed to the doubt", "Month 3 is when “is this worth ₹999?” gets asked. The bonus arrives the same week, with a personal touch."],
            ["High value, low cost", "Thirty minutes of the founder's time. Priced at ₹2,500, costs a coffee, and it's the most remembered thing in the year."],
            ["Progress shown beside the bonus", "8/8 lessons and 9 calls. She sees what she has already used, which makes leaving feel like waste."]
          ],
          q: ["Put a bonus just before the point where people usually quit. Then they stay for the bonus and forget to quit.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "Month 12", t: "A year in. Lock it, renew it.", ch: "Result card · email", when: "Day 365",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Month 12 · Money Circle</div>
              <h5>Kavya, one year in.</h5>
              <p>12 of 12 payments · 41 calls · SIP up from ₹3,000 to ₹9,000 a month</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹11,988</b><span>paid this year</span></div><div><b>₹11,500</b><span>bonuses received</span></div><div><b>41</b><span>live calls</span></div></div>
              <div class="credit">Unlocked today<b>Annual planning call + ₹999 locked</b>book your 45-min plan for next year · renewal stays ₹999 while everyone else moves to ₹1,299</div>
              <div class="cb-note">Renew today and the year-two bonus is a second course of your choice, free. Offer valid till your anniversary, 14 Jun.</div>
            </div></div>`,
          why: [
            ["Bonuses paid back the fee", "₹11,500 of bonuses against ₹11,988 paid. The year reads as nearly free, which is how a renewal is earned."],
            ["Price lock is a bonus for staying", "Everyone else pays ₹1,299 next year; she pays ₹999 for renewing. The reward is for loyalty, not for leaving and coming back."],
            ["Renewal has its own bonus", "A second course free for year two. The same mechanic restarts: bonus attached to the next commitment."]
          ],
          q: ["Each milestone bonus should make leaving a little more expensive and renewing a little more obvious.", "framework · continuity bonus offers (adapted)"]
        }
      ]
    },

    /* ───────────────────────── 4 · LOCAL SERVICE (adapted) ───────────────────────── */
    {
      label: "Car care · wash plan",
      source: "How the framework applies to a local service business (adapted)",
      client: "Imran",
      about: "Imran, 35, Lucknow, gets his car washed at a neighbourhood bay. He's offered a ₹1,499/month wash plan with a full interior detail free for joining, and a polish at month 3, ceramic top-up at month 6 for staying. Adapted from the framework; a paper-and-WhatsApp version.",
      copy: `SHINE BAY — MONTHLY WASH PLAN, CONTINUITY BONUS
₹1,499/month on autopay: 4 exterior washes a month, doorstep pickup.
Join today and get FREE: full interior deep-clean (₹2,999), done this week.
Stay bonuses: Month 3 — machine polish (₹1,500). Month 6 — ceramic top-up (₹3,500).
Month 12 — a second car on the plan free for a month.
Single wash without a plan: ₹450. Bonus is for joining today at the bay.`,
      steps: [
        {
          k: "Bay sign", t: "Join the plan, interior free.", ch: "Sign · at the wash bay", when: "Day 0",
          html: `<div class="poster cb-poster">
            <div class="k">Shine Bay · Gomti Nagar</div>
            <h5>4 washes a month. <em>Interior deep-clean free.</em></h5>
            <p>₹1,499 / month · doorstep pickup · join today and the ₹2,999 interior detail is on us this week.</p>
            <div class="cb-stack">
              <div class="r"><span>Full interior deep-clean<small>seats, mats, dashboard, AC vents · 3 hours</small></span><span><s>₹2,999</s><em>FREE</em></span></div>
              <div class="r"><span>Month 3 · machine polish</span><span><s>₹1,500</s><em>FREE</em></span></div>
              <div class="r"><span>Month 6 · ceramic top-up</span><span><s>₹3,500</s><em>FREE</em></span></div>
              <div class="r"><span>Month 12 · second car, one month</span><span><s>₹1,499</s><em>FREE</em></span></div>
            </div>
            <div class="fine">Single wash ₹450 · plan members pay ₹1,499 for 4 · ask Faiz at the counter</div>
          </div>`,
          why: [
            ["Single-wash price sits next to the plan", "₹450 × 4 is ₹1,800. The plan already saves money; the interior detail is what makes it a today decision."],
            ["Bonus is the bay's own service", "Interior detailing is something they sell for ₹2,999. Cost is three hours of labour on a quiet weekday."],
            ["Milestones on the sign", "Polish, ceramic, second car — a year of unlocks on one board. The customer sees why to stay before he joins."]
          ],
          q: ["Give bonuses with high perceived value and low cost to you — ideally things you already sell.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "The pitch", t: "Said while the car dries.", ch: "In person · at the bay", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">F</div><div><b>Faiz · Shine Bay</b><small>Owner · at the counter</small></div></div>
            <q>Bhai, you come twice a month anyway — that's ₹900. Plan is ₹1,499 for four, we pick up from your gate. <em>Join today and the interior deep-clean is free — Thursday, three hours, seats to vents.</em> Month three you get a polish, month six ceramic. Autopay on your phone, two minutes.</q>
          </div>`,
          why: [
            ["Bonus answers “why today”", "The plan alone he could think about. A free ₹2,999 detail on Thursday is a reason to set up autopay now."],
            ["Spoken timeline", "Month three polish, month six ceramic. He hears the year of unlocks before he pays for month one."],
            ["Two-minute setup", "The commitment is made small. The bonus is big. That asymmetry is the whole offer."]
          ],
          q: ["Trade a one-time bonus for a long-term commitment. You pay once; they pay every month.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "Plan form", t: "Autopay and bonuses on one sheet.", ch: "Paper · at the counter", when: "Day 0",
          html: `<div class="doc cb-doc">
            <div class="stamp">AUTOPAY ON</div>
            <div class="k">Shine Bay · wash plan</div>
            <h5>Imran's plan</h5>
            <div class="chk"><div class="b"></div><div><b>Wash plan · ₹1,499/month</b><span>4 exterior washes · doorstep pickup · UPI autopay on the 5th</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Sign-up bonus · interior deep-clean</b><span>Thursday 10 AM pickup · 3 hours · ₹2,999 value · ₹0</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Month 3 · machine polish</b><span>unlocks 5 Sep while autopay is active</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Month 6 · ceramic top-up</b><span>unlocks 5 Dec while autopay is active</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Month 12 · second car free for a month</b><span>unlocks 5 Jun · any car in the family</span></div></div>
            <div class="sig cb-sig"><div class="l">Imran Khan</div><small>UP32 ·· 4471 · DATE: 5 JUN</small></div>
          </div>`,
          why: [
            ["Bonus dated on the form", "Thursday 10 AM is written down. A bonus with a slot gets delivered; a bonus “sometime” gets forgotten and resented."],
            ["Unlocks tied to autopay", "“While autopay is active” on every milestone. Stopping the debit means giving up a named thing."],
            ["Paper works", "No app, no portal. A carbon copy with dates is enough for the customer to hold the business to it."]
          ],
          q: ["Write the bonuses into the agreement. A bonus that isn't documented becomes a dispute, not a reason to stay.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "Bonus done", t: "Interior done. Photos sent.", ch: "WhatsApp", when: "Day 4",
          html: `<div class="phone cb-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">SB</div><div>Shine Bay · Faiz<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Imran bhai, interior deep-clean done ✅ Seats, mats, vents, boot. Car back at your gate by 2 PM.
                  <div class="board">
                    <div class="t">Plan · month 1 of 12</div>
                    <div class="r"><span>Sign-up bonus</span><b>delivered · ₹2,999</b></div>
                    <div class="r"><span>Washes this month</span><b>1 / 4</b></div>
                    <div class="r"><span>Month 3 · 5 Sep</span><span style="color:var(--mute)">machine polish</span></div>
                    <div class="r"><span>Month 6 · 5 Dec</span><span style="color:var(--mute)">ceramic top-up</span></div>
                  </div>
                  Next wash: Sunday 8 AM pickup, same gate?
                  <span class="tm">Thu 1:20 PM</span>
                </div>
                <div class="bub me">Ekdum naya lag raha hai 😍 Sunday 8 done.<span class="tm">1:41 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Bonus delivered in the first week", "Four days from sign-up to a transformed car. The best moment of the year lands before the second debit."],
            ["Tracker in every message", "Bonus delivered, washes used, next unlocks. The same board comes with every wash, so the milestones are never a surprise."],
            ["Next wash booked in the same chat", "The bonus message ends with a booking. Delivery and habit-building happen in one thread."]
          ],
          q: ["Deliver the sign-up bonus immediately and visibly. Speed is what makes the next bonus believable.", "framework · continuity bonus offers (adapted)"]
        },
        {
          k: "Month 6", t: "Ceramic unlocked. Second car next.", ch: "WhatsApp", when: "Day 180",
          html: `<div class="phone cb-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">SB</div><div>Shine Bay · Faiz<small>business account</small></div></div>
              <div class="body">
                <div class="bub">6 months on the plan, Imran bhai 🎉 Ceramic top-up unlocked — ₹3,500 job, free. Needs the car for a day. Sat or Sun?
                  <div class="board">
                    <div class="t">Plan · month 6 of 12</div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Washes done</span><b>23</b></div>
                    <div class="r"><span>Bonuses received</span><b>₹4,499</b></div>
                    <div class="r"><span>Unlocked today</span><b>ceramic top-up</b></div>
                    <div class="r"><span>Month 12 · 5 Jun</span><span style="color:var(--mute)">second car free</span></div>
                  </div>
                  <span class="tm">Fri 6:05 PM</span>
                </div>
                <div class="bub me">Saturday. Bhabhi ki car bhi plan pe daal dete hain June mein 😄<span class="tm">6:30 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Biggest bonus at the halfway mark", "Ceramic is the most valuable unlock and lands at month 6, when the debit has become invisible and a cancel is most casual."],
            ["Bonus ledger", "₹4,499 received so far, ₹3,500 today. He is reminded the plan has paid him back before he pays month 7."],
            ["Month-12 bonus is a second customer", "A free month for a second car is a referral disguised as a reward. The reply shows it working."]
          ],
          q: ["The best stay bonus does double duty: it keeps this customer and brings the next one.", "framework · continuity bonus offers (adapted)"]
        }
      ]
    }
  ]
});
