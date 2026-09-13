// Continuity Discounts — $100M Money Models, Section V (Continuity Offers)
// Mechanic: a lower recurring rate in exchange for a longer commitment or prepayment
// (month-to-month vs 12-month, prepay the year and get the cheaper rate), shown as a choice where
// the longer option is obviously the deal; plus rate locks / "grandfathered" prices that make leaving expensive.
// Examples 1–2 follow the chapter's own gym setting (localised / US-native). Examples 3–4 are marked "(adapted)".
window.OFFERS.push({
  slug: "continuity-discounts",
  name: "Continuity discounts",
  section: "Continuity",
  css: `
.cd-rate{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 0;border-top:1px dashed var(--line);font-size:13px;text-align:left}
.cd-rate:first-child{border-top:0}
.cd-rate b{font-family:var(--serif);font-size:20px;color:var(--ink)}
.cd-rate .on b{color:var(--green-d)}
.cd-rate .on{background:var(--green-xl);border-radius:8px;padding:4px 8px;margin:0 -8px}
.cd-rate small{font-family:var(--mono);font-size:10px;color:var(--mute);display:block}
.cd-poster h5{font-size:30px}
.cd-poster .big{font-size:38px;margin:8px 0 2px}
.cd-toggle{display:inline-flex;border:1px solid var(--line);border-radius:999px;padding:3px;margin:8px 0 12px;font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase}
.cd-toggle span{padding:5px 12px;border-radius:999px;color:var(--mute)}
.cd-toggle span.on{background:var(--green);color:#fff}
.cd-plans{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:6px 0 4px}
.cd-plans div{border:1px solid var(--line);border-radius:10px;padding:12px;font-size:12px;color:var(--dim)}
.cd-plans div.on{border:2px solid var(--green);background:var(--green-xl)}
.cd-plans b{display:block;font-family:var(--serif);font-size:24px;color:var(--ink);line-height:1;margin-bottom:4px}
.cd-plans div.on b{color:var(--green-d)}
.cd-plans i{font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:6px}
.cd-note{font-size:12px;color:var(--dim);margin-top:10px;line-height:1.5}
.cd-doc .chk{padding:7px 0}
.cd-doc h5{font-size:22px}
.cd-doc .stamp~.k,.cd-doc .stamp~h5{width:fit-content;max-width:260px}
.cd-sig .l{width:170px}
.cd-sig small{white-space:nowrap}
.cd-tight .wa{min-height:0}
.cd-tight .wa .body{gap:6px;padding:9px 8px}
.cd-tight .bub{padding:6px 9px}
.cd-tight .board{margin:4px 0;padding:6px 9px}
.cd-tight .board .r{padding:2px 0}
.cd-mail .body p{margin:0 0 9px}
`,
  examples: [

    /* ───────────────── 1 · ALEX'S GYM — commit longer, pay less (from the chapter, localised) ───────────────── */
    {
      label: "Alex's gym · annual rate",
      source: "Alex's own gym, as the chapter frames it · localised to Indore",
      client: "Sameer",
      about: "Sameer, 29, Vijay Nagar. Finishes a 6-week challenge and is offered membership three ways: ₹3,000 month-to-month, ₹2,000/month on a 12-month agreement, or ₹20,000 to prepay the year. Indian persona; rupee figures are illustrative, mechanic as in the book.",
      copy: `MEMBERSHIP — pick your commitment, pick your rate
Month-to-month: ₹3,000/month · cancel any time · rate can change
12-month agreement: ₹2,000/month on autopay · rate locked 12 months
Prepay the year: ₹20,000 once (= ₹1,667/month) · 2 months free
Same gym, same coach, same 6:30 PM batch — only the commitment changes.
Your locked rate continues at renewal as long as the membership never lapses.
Lapse and rejoin = whatever new members pay that month.`,
      steps: [
        {
          k: "The pitch", t: "Same gym. Three rates.", ch: "In person · at the Day-42 weigh-in", when: "Day 42",
          html: `<div class="say">
            <div class="who"><div class="av">V</div><div><b>Coach Vikram</b><small>Forge Fitness · weigh-in desk</small></div></div>
            <q>Sameer, you're done with the challenge — now the membership. Same batch, same coach. Month to month is ₹3,000. <em>Give me twelve months and it's ₹2,000 — every month, locked.</em> And if you pay the year today it's ₹20,000, so two months are on me. Which one?</q>
          </div>`,
          why: [
            ["Said at the peak", "He just hit his goal. The membership is offered while the habit is built and the result is fresh, not by email a week later."],
            ["Three rates, one product", "Nothing changes except the commitment. The price ladder makes the longer option feel like a reward, not a lock-in."],
            ["“Which one?” not “want to join?”", "The question assumes yes and asks only about length. Both answers make him a member."]
          ],
          q: ["Trade a lower rate for a longer commitment. Every month they commit to is a month you don't have to re-sell them.", "framework · continuity discounts"]
        },
        {
          k: "The choice", t: "Month-to-month, or a year at less.", ch: "Printed rate card · sales desk", when: "Day 42",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Month-to-month</div>
              <div class="p">₹3,000 <small>/ month</small></div>
              <ul><li>Cancel any time</li><li>Same coach, same batch</li><li class="no">Rate locked</li><li class="no">Free months</li><li><b>12 months = ₹36,000</b></li></ul>
              <div class="sub">Rate reviewed every quarter.</div>
            </div>
            <div class="ch best">
              <div class="badge">Most members pick this</div>
              <div class="k">12-month agreement</div>
              <div class="p"><s>₹3,000</s>₹2,000 <small>/ month</small></div>
              <ul><li>Autopay on the 1st · nothing to remember</li><li>Same coach, same batch</li><li><b>Rate locked for 12 months</b></li><li>Locked rate continues at renewal</li><li><b>12 months = ₹24,000</b></li></ul>
              <div class="cr">Save ₹12,000 this year</div>
              <div class="sub">Or prepay the year and save more — next card.</div>
            </div>
          </div>`,
          why: [
            ["The short option prices the long one", "₹3,000 is real and available. Its job is to make ₹2,000 look like a gift for doing what he wanted to do anyway."],
            ["Show the yearly total", "₹36,000 vs ₹24,000 turns a ₹1,000 monthly difference into a ₹12,000 decision. Totals sell commitments."],
            ["Strike the old rate", "The struck-through ₹3,000 on the long card says: this is the same thing, cheaper, for staying."]
          ],
          q: ["Give them a short, expensive way to say yes and a long, cheap way to say yes. Most people choose long.", "framework · continuity discounts"]
        },
        {
          k: "Prepay option", t: "Pay the year, get two months free.", ch: "Printed rate card · sales desk", when: "Day 42",
          html: `<div class="choice">
            <div class="ch">
              <div class="k">12 months · pay monthly</div>
              <div class="p">₹2,000 <small>/ month on autopay</small></div>
              <ul><li>₹2,000 today, then on the 1st</li><li>Rate locked for 12 months</li><li><b>Year total: ₹24,000</b></li></ul>
              <div class="sub">A good deal. Nothing wrong with this.</div>
            </div>
            <div class="ch best">
              <div class="badge">Best rate</div>
              <div class="k">12 months · prepay today</div>
              <div class="p">₹20,000 <small>once · ₹1,667 / month</small></div>
              <ul><li>One payment, no monthly debits</li><li>Rate locked for 12 months</li><li><b>2 months free vs paying monthly</b></li><li><b>Year total: ₹20,000</b></li></ul>
              <div class="cr">Save ₹4,000 more · ₹16,000 vs month-to-month</div>
              <div class="sub">Renews next year at your locked ₹2,000/month unless you prepay again.</div>
            </div>
          </div>`,
          why: [
            ["Second ladder, same direction", "Commitment earned a discount. Prepayment earns one more. Each rung makes the next feel small."],
            ["Cash today, not over twelve months", "₹20,000 now funds next month's ads. The two “free” months cost the gym almost nothing — the coach is there anyway."],
            ["Prepaid members stay", "He has already paid for June. There is no monthly moment where cancelling feels like saving money."]
          ],
          q: ["Prepayment is the deepest form of commitment. Discount it the most, because it removes the cancel button for a year.", "framework · continuity discounts"]
        },
        {
          k: "Agreement", t: "The rate lock, in writing.", ch: "Paper · sales desk", when: "Day 42",
          html: `<div class="doc cd-doc">
            <div class="stamp">PREPAID · 12 MO</div>
            <div class="k">Membership agreement</div>
            <h5>Sameer's 12 months</h5>
            <div class="chk"><div class="b"></div><div><b>Term: 12 months · 23 Jun to 22 Jun</b><span>6:30 PM batch · Coach Vikram · all classes included</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Prepaid today: ₹20,000</b><span>= ₹1,667/month · 2 months free vs the ₹2,000 monthly rate</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Rate lock</b><span>Your rate stays ₹2,000/month (or ₹20,000/yr prepaid) at every renewal while the membership never lapses.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Renewal</b><span>Continues month-to-month at ₹2,000 on autopay unless cancelled 15 days before term end.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Lapse = new-member rate</b><span>Cancel and rejoin later at whatever new members pay then.</span></div></div>
            <div class="sig cd-sig"><div class="l">Sameer Jain</div><small>DATE: 23 JUN · TERM ENDS: 22 JUN</small></div>
          </div>`,
          why: [
            ["The lock is a promise, not a trap", "“Your rate never rises while you stay” is written where he can read it. That sentence is what he will remember in month 11."],
            ["Renewal is the default", "Continuing needs no action; leaving does. The commitment outlives the term."],
            ["Lapse clause protects the lock", "The locked rate is worth something only if losing it costs something. New-member pricing is the cost."]
          ],
          q: ["A locked rate is a discount that grows in value every time you raise prices for everyone else.", "framework · continuity discounts"]
        },
        {
          k: "Payment", t: "One payment. Twelve months.", ch: "Razorpay · at the desk", when: "Day 42",
          html: `<div class="pay">
            <div class="h"><span>Forge Fitness Indore</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>12-month membership · prepaid</span><span>₹20,000</span></div>
              <div class="row"><span>Same on the 12-month monthly plan</span><span>₹24,000</span></div>
              <div class="row"><span>Same month-to-month</span><span>₹36,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹20,000</span></div>
              <div class="note"><b>Rate locked:</b> ₹2,000/month or ₹20,000/year at every renewal, as long as your membership never lapses.</div>
              <div class="go">Pay ₹20,000 · UPI / Card</div>
              <div class="disc">Next payment: 23 Jun next year</div>
            </div></div>`,
          why: [
            ["The comparison sits on the receipt", "₹20,000 next to ₹36,000. He pays feeling he won, which is the feeling that renews."],
            ["Twelve months of cash on Day 42", "The challenge acquired him; the prepay funds the next batch of challengers. The money model closes here."],
            ["Next payment a year away", "No monthly debit, no monthly decision. The next time he thinks about price, he's a year-long habit."]
          ],
          q: ["Cash collected up front is worth more than the same cash collected monthly — you can spend it on the next customer.", "framework · money models"]
        },
        {
          k: "Month 11", t: "Renewal at his locked rate.", ch: "WhatsApp", when: "Day 365 −30",
          html: `<div class="phone cd-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">V</div><div>Coach Vikram · Forge<small>online</small></div></div>
              <div class="body">
                <div class="bub">Sameer bhai, one year on 22 Jun 🎉
                  <div class="board">
                    <div class="t">Renewal · your locked rate</div>
                    <div class="r"><span>New members today</span><span class="warn">₹3,500 / mo</span></div>
                    <div class="r"><span>Your rate</span><b>₹2,000 / mo</b></div>
                    <div class="r"><span>Prepay again</span><b>₹20,000 / yr</b></div>
                  </div>
                  Kuch karna nahi hai — 23 Jun se ₹2,000 autopay chalu ho jaayega. Prepay karoge toh 2 months free phir se.
                  <span class="tm">Mon 10:02 AM</span>
                </div>
                <div class="bub me">Prepay. Same ₹20,000? Link bhejo 🙏<span class="tm">10:20 AM ✓✓</span></div>
                <div class="bub">Same. Link 👇 Rate locked as long as you never lapse.<span class="tm">10:21 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Show what others pay now", "₹3,500 for new members makes his ₹2,000 feel like an asset. Cancelling would mean giving it up."],
            ["Nothing to do to stay", "Autopay continues by default. The message informs; it does not ask permission."],
            ["Re-offer the prepay", "A member who prepaid once will do it again if asked. Same price, same two free months, another year of cash."]
          ],
          q: ["Grandfathered pricing turns every price rise into a retention campaign for the people who already pay you.", "framework · continuity discounts"]
        },
        {
          k: "Year 2", t: "Renewed. Locked. Cheaper than everyone.", ch: "Result card · member app", when: "Day 366",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Year 2 · Forge Fitness Indore</div>
              <h5>Sameer, you're locked in.</h5>
              <p>12 months done · 141 sessions · ₹2,000 rate kept for year 2</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹16,000</b><span>saved vs monthly</span></div><div><b>141</b><span>sessions</span></div><div><b>₹1,667</b><span>your rate / mo</span></div></div>
              <div class="credit">Your rate, locked<b>₹20,000 / year</b>while new members pay ₹3,500 a month · yours never rises while you stay</div>
              <div class="cd-note">Bring a friend in June: they join at ₹3,500/month; you get a month free.</div>
            </div></div>`,
          why: [
            ["Two years of cash, one sale", "The challenge sold once. The discount for commitment did the rest. That is the whole point of continuity."],
            ["Saving is the story he tells", "“I pay ₹1,667 while walk-ins pay ₹3,500” is what he says to friends. The discount markets the gym."],
            ["Referral at the renewal", "A friend joining at full price funds Sameer's free month. The locked member becomes the ad."]
          ],
          q: ["The business is worth what its continuity is worth. Everything else is how you got them to the door.", "framework · money models"]
        }
      ]
    },

    /* ───────────────── 2 · ALEX'S GYM — price rise, existing rate locked (from the chapter's rate-lock framing) ───────────────── */
    {
      label: "Alex's gym · rate lock",
      source: "Alex's own gym · the chapter's rate-lock / grandfathered-price framing · US-native, verify the story's details",
      client: "Dave",
      about: "Dave, 41, US, has been a $99 month-to-month member for 8 months. The gym raises the walk-in rate to $129. Dave keeps $99 as long as he never lapses — or signs 12 months before the rise and locks $89. Dollar figures illustrative.",
      copy: `PRICE RISE — from 1 March
New members: $129/month, month-to-month.
Current members: your $99 rate is locked for as long as your membership never lapses.
Want it lower? Sign a 12-month agreement before 1 March: $89/month, locked for the year — and at renewal.
Cancel and rejoin later = the new-member rate on that day. No exceptions, no negotiating.
Nothing to do to keep $99. Sign one page to get $89.`,
      steps: [
        {
          k: "Counter sign", t: "New price. Not for you.", ch: "Front-desk sign", when: "Day −30",
          html: `<div class="poster cd-poster">
            <div class="k">From 1 March</div>
            <h5>New members: <em>$129/mo.</em></h5>
            <p>Month-to-month. Same coaches, same classes.</p>
            <div class="big">Members: still $99.</div>
            <p>Your rate is locked for as long as your membership never lapses.<br>Want $89? Sign 12 months at the desk before 1 March.</p>
            <div class="fine">Cancel and come back later = new-member rate that day · ask at the desk</div>
          </div>`,
          why: [
            ["Raise prices in public", "The sign is aimed at members, not walk-ins. It tells every current member what leaving now costs."],
            ["Grandfather the people who pay you", "Existing members keep $99. The rise costs the gym nothing on them and makes them feel chosen."],
            ["A deadline with a reward", "“$89 before 1 March” converts a passive month-to-month member into a signed 12-month one, in a month."]
          ],
          q: ["Raise prices for new customers. Lock the old price for current ones. Both groups pay you more, one in cash, one in years.", "framework · continuity discounts"]
        },
        {
          k: "Member email", t: "Your rate doesn't change.", ch: "Email", when: "Day −30",
          html: `<div class="mail cd-mail">
            <div class="h"><div class="s">Dave, we're raising prices — not yours</div><div class="f">From: Alex · Ironworks Gym &lt;alex@ironworksgym.com&gt; · to Dave</div></div>
            <div class="body">
              <p>From 1 March, new members pay <b>$129/month</b>. You've been with us 8 months, so here's what that means for you:</p>
              <p><b>1.</b> Do nothing: you keep <b>$99/month</b> for as long as your membership never lapses.<br><b>2.</b> Sign 12 months before 1 March: <b>$89/month</b>, locked for the year and at every renewal.<br><b>3.</b> Cancel and rejoin later: you pay whatever new members pay that day.</p>
              <p>No forms for option 1. One page at the desk for option 2.</p>
              <div class="cta">Lock $89 for 12 months</div>
            </div></div>`,
          why: [
            ["Three outcomes, all stated", "Stay, commit, or leave-and-pay-more. There is no fourth option, so no member has to guess."],
            ["The discount for committing is the ask", "The email exists to sell the $89 12-month, but it reads as a favour. That is what a continuity discount should feel like."],
            ["Lapse cost, in writing", "“Whatever new members pay that day” is the fence around the locked rate. It's why the lock retains."]
          ],
          q: ["A grandfathered price is a reason to stay that gets stronger every year. Make sure they know it exists.", "framework · continuity discounts"]
        },
        {
          k: "At the desk", t: "Asked, in person, before March.", ch: "In person · front desk", when: "Day −20",
          html: `<div class="say">
            <div class="who"><div class="av">A</div><div><b>Alex</b><small>Ironworks · front desk</small></div></div>
            <q>Dave — you saw the sign. Walk-ins are $129 from the first. You're $99 forever if you stay. <em>Or sign twelve months right now and I'll make it $89, locked, every renewal.</em> Ten bucks a month for a signature. Want me to print it?</q>
          </div>`,
          why: [
            ["Ask everyone, face to face", "The sign and the email warm it up. The desk closes it. Every member walks past this desk twice a week."],
            ["Frame the saving, not the term", "“Ten bucks a month for a signature” — the commitment is invisible, the discount is the whole sentence."],
            ["The alternative is already good", "$99 forever is a fine answer. The pitch has no losing outcome for the gym."]
          ],
          q: ["Ask for the longer commitment when the shorter one is about to get more expensive. The deadline does the selling.", "framework · continuity discounts"]
        },
        {
          k: "The choice", t: "Keep $99, or lock $89.", ch: "Printed card · front desk", when: "Day −20",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Stay month-to-month</div>
              <div class="p">$99 <small>/ month · grandfathered</small></div>
              <ul><li>Nothing to sign</li><li>Rate locked while you never lapse</li><li class="no">Locked at renewals</li><li><b>Cancel &amp; rejoin later: $129</b></li></ul>
              <div class="sub">Walk-ins pay $129 from 1 March.</div>
            </div>
            <div class="ch best">
              <div class="badge">Before 1 March only</div>
              <div class="k">Sign 12 months</div>
              <div class="p"><s>$129</s>$89 <small>/ month</small></div>
              <ul><li>One page, autopay on the 1st</li><li><b>Locked for 12 months</b></li><li><b>Locked at every renewal too</b></li><li>Same coaches, same classes</li></ul>
              <div class="cr">$40 under the walk-in rate · $120 under your own</div>
              <div class="sub">Lapse and rejoin = new-member rate that day.</div>
            </div>
          </div>`,
          why: [
            ["The decoy is his own current rate", "Both cards are wins for him. The card he's on today is dimmed only because the other one is better."],
            ["Anchor on the walk-in price", "$89 is struck against $129, not $99. The saving reads as $40, not $10."],
            ["Both options extend continuity", "Month-to-month members who stay for the lock are just as retained as signed ones. The gym wins either card."]
          ],
          q: ["Give them a short, expensive way to say yes and a long, cheap way to say yes. Most people choose long.", "framework · continuity discounts"]
        },
        {
          k: "Lock-in form", t: "One page. $89, every renewal.", ch: "Paper · front desk", when: "Day −20",
          html: `<div class="doc cd-doc">
            <div class="stamp">LOCKED · $89</div>
            <div class="k">12-month agreement</div>
            <h5>Dave's rate lock</h5>
            <div class="chk"><div class="b"></div><div><b>Term: 12 months from 1 March</b><span>$89/month on autopay, 1st of each month</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Rate lock</b><span>$89/month at every renewal while the membership never lapses. Walk-in rate: $129 and rising.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Renewal</b><span>Continues at $89 month-to-month after the term unless cancelled 30 days before.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Lapse = new-member rate</b><span>Cancel and rejoin at whatever new members pay that day.</span></div></div>
            <div class="sig cd-sig"><div class="l">Dave M.</div><small>SIGNED: 9 FEB · TERM: 1 MAR – 28 FEB</small></div>
          </div>`,
          why: [
            ["Locked at every renewal", "The discount isn't for one year. It's for as long as he stays — the lock gets more valuable with every price rise."],
            ["Renewal is the default", "After 12 months he simply continues at $89. Leaving is the action; staying is inertia."],
            ["The lapse clause is the retention", "A locked rate you can't get back is the reason members don't “take a break” in December."]
          ],
          q: ["A locked rate is a discount that grows in value every time you raise prices for everyone else.", "framework · continuity discounts"]
        },
        {
          k: "Two years on", t: "Still $89. Walk-ins pay $149.", ch: "Result card · member portal", when: "Month 24",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Month 24 · Ironworks Gym</div>
              <h5>Dave, still locked at $89.</h5>
              <p>Two price rises since · walk-in rate now $149 · yours unchanged</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>$89</b><span>your rate</span></div><div><b>$149</b><span>walk-in today</span></div><div><b>$1,440</b><span>saved in 24 mo</span></div></div>
              <div class="credit">Your rate is grandfathered<b>$89 / month · for as long as you stay</b>next renewal 1 March · nothing to do</div>
              <div class="cd-note">Refer a friend: they join at $149; you get a month at $0.</div>
            </div></div>`,
          why: [
            ["The gap is the retention", "$89 vs $149 is $60 a month he loses the day he cancels. The discount that got him to sign is now what keeps him."],
            ["Raise prices freely", "Every rise makes the locked members more loyal and the new members more profitable. Nobody leaves over a price rise they don't pay."],
            ["Locked members refer", "“I pay $89 and you'll pay $149” is a brag. Bragging is free advertising."]
          ],
          q: ["Grandfathered pricing turns every price rise into a retention campaign for the people who already pay you.", "framework · continuity discounts"]
        }
      ]
    },

    /* ───────────────── 3 · SOFTWARE / APP — annual vs monthly (adapted) ───────────────── */
    {
      label: "App · annual vs monthly",
      source: "How the framework applies to a subscription app (adapted)",
      client: "Rohan",
      about: "Rohan, 32, Bengaluru, runs a small design studio and buys an invoicing app. Monthly is ₹999; annual is ₹9,990 — two months free — and the annual price is locked at renewal. Adapted from the framework; not a story the chapter tells.",
      copy: `BILLBOOK PRO — monthly or annual
Monthly: ₹999/month · cancel any time · price can change at any renewal
Annual: ₹9,990/year (= ₹833/month) · 2 months free · price locked at renewal
Same features, same seats, same support — only the billing period changes.
Switch monthly → annual any time; unused days are credited.
Auto-renew stays on = your annual price never rises, even when the list price does.`,
      steps: [
        {
          k: "Pricing page", t: "The toggle defaults to annual.", ch: "Pricing page", when: "Day 0",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">billbook.in/pricing</div></div>
            <div class="body">
              <div class="eyebrow">Billbook Pro · invoicing for studios</div>
              <h5>One plan. <em>Two ways to pay for it.</em></h5>
              <div class="cd-toggle"><span>Monthly</span><span class="on">Annual · 2 months free</span></div>
              <div class="cd-plans">
                <div><i>Monthly</i><b>₹999<small style="font-family:var(--sans);font-size:12px;color:var(--mute)"> / mo</small></b>Billed every month · cancel any time · ₹11,988 a year</div>
                <div class="on"><i>Annual · price locked</i><b>₹833<small style="font-family:var(--sans);font-size:12px;color:var(--mute)"> / mo</small></b>₹9,990 billed once · 2 months free · renews at the same price</div>
              </div>
              <div class="payout"><b>₹1,998</b><span>saved on annual · and your price never rises while auto-renew stays on.</span></div>
              <div class="btn">Start on annual <small>14-day money-back · switch any time</small></div>
            </div></div>`,
          why: [
            ["Annual is the default", "The toggle lands on annual. The buyer has to act to pay more — most don't."],
            ["Per-month, not per-year", "₹833 vs ₹999 keeps the comparison in the same unit. ₹9,990 shows up only as the billing line."],
            ["The lock is on the page", "“Renews at the same price” is a feature, not fine print. It's the reason to pick annual beyond the ₹1,998."]
          ],
          q: ["Trade a lower rate for a longer commitment. Every month they commit to is a month you don't have to re-sell them.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "The choice", t: "Monthly, or a year for less.", ch: "Checkout · plan picker", when: "Day 0",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Monthly</div>
              <div class="p">₹999 <small>/ month</small></div>
              <ul><li>All features · 3 seats · support</li><li>Cancel any time</li><li class="no">Price locked at renewal</li><li class="no">2 months free</li><li><b>Year total: ₹11,988</b></li></ul>
              <div class="sub">List price reviewed yearly.</div>
            </div>
            <div class="ch best">
              <div class="badge">Recommended</div>
              <div class="k">Annual</div>
              <div class="p"><s>₹999</s>₹833 <small>/ month · billed yearly</small></div>
              <ul><li>All features · 3 seats · support</li><li>14-day money-back</li><li><b>Price locked at every renewal</b></li><li><b>2 months free</b></li><li><b>Year total: ₹9,990</b></li></ul>
              <div class="cr">Save ₹1,998 · and never pay a price rise</div>
              <div class="sub">Charged once today · renews 12 months from now</div>
            </div>
          </div>`,
          why: [
            ["Identical features, different commitment", "The cards differ only in length and price. The buyer can't rationalise monthly on features."],
            ["Two “no” lines on the short card", "Struck-out “price locked” and “2 months free” make monthly look like the plan with things missing."],
            ["Money-back handles the fear", "The only reason to pick monthly is doubt. Fourteen days of refund removes it without touching the price."]
          ],
          q: ["Give them a short, expensive way to say yes and a long, cheap way to say yes. Most people choose long.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "Checkout", t: "₹9,990 once. Locked at renewal.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Billbook Pro · annual</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Billbook Pro · 12 months</span><span>₹9,990</span></div>
              <div class="row"><span>Same plan billed monthly</span><span>₹11,988</span></div>
              <div class="row"><span>2 months free</span><span>−₹1,998</span></div>
              <div class="row tot"><span>Pay today</span><span>₹9,990</span></div>
              <div class="note"><b>Price lock:</b> renews at ₹9,990/year while auto-renew stays on — even if the list price rises.</div>
              <div class="go">Pay ₹9,990 · UPI / Card</div>
              <div class="disc">GST extra · next charge in 12 months</div>
            </div></div>`,
          why: [
            ["Twelve months of revenue on Day 0", "Cash today pays for the ads that find the next studio. Monthly would drip it in over a year."],
            ["The saving is itemised", "“−₹1,998” is a line on the bill, so the discount is felt at the moment of paying."],
            ["The lock is on the receipt", "If the lock is on the invoice, the renewal never becomes a negotiation."]
          ],
          q: ["Cash collected up front is worth more than the same cash collected monthly — you can spend it on the next customer.", "framework · money models"]
        },
        {
          k: "Welcome email", t: "Your price, in writing.", ch: "Email", when: "Day 0",
          html: `<div class="mail cd-mail">
            <div class="h"><div class="s">Rohan, your Billbook price is locked</div><div class="f">From: Ananya · Billbook &lt;ananya@billbook.in&gt; · to Rohan</div></div>
            <div class="body">
              <p>Welcome to Billbook Pro. You're on annual: <b>₹9,990 a year</b>, which is ₹833 a month — two months free against the monthly plan.</p>
              <p><b>Your price is locked.</b> As long as auto-renew stays on, you renew at ₹9,990 even when our list price goes up. Switch it off and you come back at the list price of that day.</p>
              <p>Next renewal: 14 Aug next year. We'll remind you 30 days before.</p>
              <div class="cta">Open Billbook</div>
            </div></div>`,
          why: [
            ["Say it three times", "Page, checkout, inbox. The lock is repeated until it's the thing he knows about his subscription."],
            ["Name the cost of leaving", "“Come back at the list price of that day” makes switching off auto-renew a decision, not a default."],
            ["Date the renewal", "A known date with a promised reminder feels fair. Surprise renewals create chargebacks; announced ones create renewals."]
          ],
          q: ["A locked rate is a discount that grows in value every time you raise prices for everyone else.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "Renewal notice", t: "List price up. His isn't.", ch: "Email", when: "Day 335",
          html: `<div class="mail cd-mail">
            <div class="h"><div class="s">Rohan, you renew on 14 Aug at ₹9,990 — not ₹12,990</div><div class="f">From: Ananya · Billbook &lt;ananya@billbook.in&gt; · to Rohan</div></div>
            <div class="body">
              <p>Heads up: your annual plan renews in 30 days.</p>
              <p>Since you joined, Billbook Pro's list price went to <b>₹12,990/year</b> (₹1,299/month). <b>Your renewal stays at ₹9,990</b> — your price is locked while auto-renew is on.</p>
              <p>Nothing to do. If you switch auto-renew off, rejoining later is at the list price of that day.</p>
              <div class="cta">Keep my locked price</div>
            </div></div>`,
          why: [
            ["The price rise is the retention email", "He is told what new customers pay so his own price feels like a possession worth keeping."],
            ["Nothing to do", "The renewal proceeds by default. The email asks nothing; it removes the reason to cancel."],
            ["The button confirms, not converts", "“Keep my locked price” is a yes to something he already has. Clicking it is loss-avoidance, not a purchase."]
          ],
          q: ["Grandfathered pricing turns every price rise into a retention campaign for the people who already pay you.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "Year 2", t: "Renewed at the old price.", ch: "Billing page · app", when: "Day 366",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Billing · Billbook Pro</div>
              <h5>Renewed. Price locked.</h5>
              <p>Year 2 started 14 Aug · ₹9,990 charged · list price ₹12,990</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹833</b><span>your rate / mo</span></div><div><b>₹1,083</b><span>list rate / mo</span></div><div><b>₹3,000</b><span>saved this year</span></div></div>
              <div class="credit">Locked price<b>₹9,990 / year</b>renews at this price while auto-renew stays on · next: 14 Aug</div>
              <div class="cd-note">Add a seat at your locked rate: ₹2,490/year (list ₹3,240).</div>
            </div></div>`,
          why: [
            ["Locked buyers become the cheapest to keep", "Year 2 revenue cost one email. Compare with the ad spend needed to replace him."],
            ["Upsell inside the lock", "An extra seat at “your locked rate” extends the discount logic to the next purchase. The lock sells the upsell."],
            ["Show the gap, every year", "₹833 vs ₹1,083 on his billing page — the saving is visible each time he might think of leaving."]
          ],
          q: ["The business is worth what its continuity is worth. Everything else is how you got them to the door.", "framework · money models"]
        }
      ]
    },

    /* ───────────────── 4 · AGENCY RETAINER — rolling vs 12-month lock (adapted) ───────────────── */
    {
      label: "Agency · 12-month retainer rate",
      source: "How the framework applies to a service retainer / agency (adapted)",
      client: "Meera",
      about: "Meera, 38, Jaipur, runs a boutique and hires an ads agency. Rolling retainer is ₹40,000/month; a 12-month agreement is ₹32,000/month; prepaying a quarter drops it to ₹30,000. Adapted from the framework; not a story the chapter tells.",
      copy: `ADS RETAINER — pick your term, pick your rate
Rolling month-to-month: ₹40,000/month · 30 days' notice · rate reviewed quarterly
12-month agreement: ₹32,000/month · rate locked for the year and at renewal
Prepay each quarter on the 12-month: ₹30,000/month (₹90,000 per quarter)
Same team, same weekly call, same reporting — only the term changes.
Locked rate continues at renewal as long as the retainer never lapses.
Lapse and return = the rolling rate on that day.`,
      steps: [
        {
          k: "Proposal", t: "One scope. Three rates.", ch: "Proposal PDF · email", when: "Day −3",
          html: `<div class="doc cd-doc">
            <div class="k">Bazaar Digital · proposal for Meera's Boutique</div>
            <h5>Ads retainer · three ways to hold it</h5>
            <div class="cd-rate"><div><span>Rolling · month-to-month</span><small>30 days' notice · rate reviewed quarterly</small></div><b>₹40,000</b></div>
            <div class="cd-rate"><div><span>12-month agreement</span><small>rate locked for the year and at renewal</small></div><b>₹32,000</b></div>
            <div class="cd-rate on"><div><span>12-month · prepay each quarter</span><small>₹90,000 per quarter · locked rate</small></div><b>₹30,000</b></div>
            <div class="cd-note">Scope is identical on all three: Meta + Google ads, creatives, weekly 30-min call, monthly report. Ad spend billed by the platforms directly.</div>
            <div class="sig cd-sig"><div class="l">Arjun</div><small>VALID 7 DAYS · BAZAAR DIGITAL</small></div>
          </div>`,
          why: [
            ["Scope fixed, term variable", "Three prices for one deliverable. The client negotiates length with herself instead of price with the agency."],
            ["The rolling rate is real", "₹40,000 must be a rate someone actually pays, or the discounts below it are fiction and she'll sense it."],
            ["Prepay is highlighted, not hidden", "The cheapest line is the one the agency wants: a year signed and cash a quarter ahead."]
          ],
          q: ["Trade a lower rate for a longer commitment. Every month they commit to is a month you don't have to re-sell them.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "The call", t: "The term, explained out loud.", ch: "Zoom · proposal call", when: "Day −2",
          html: `<div class="say">
            <div class="who"><div class="av">A</div><div><b>Arjun · Bazaar Digital</b><small>Founder · proposal call</small></div></div>
            <q>Meera, same team, same work on all three. Rolling is ₹40,000 because we re-plan every month. <em>Give us twelve months and it's ₹32,000 — locked, even when our rates go up.</em> Pay a quarter at a time and it's ₹30,000. Most clients take twelve. Which one suits you?</q>
          </div>`,
          why: [
            ["Justify the ladder", "“We re-plan every month” gives a reason the short term costs more. A reason makes the discount feel earned."],
            ["Say “locked” out loud", "The lock is the promise. Price rises are coming — she should know now that they won't touch her."],
            ["Which one, not whether", "Both sides of the question are a retainer. The only open variable is length."]
          ],
          q: ["Ask for the longer commitment when the shorter one is about to get more expensive. The deadline does the selling.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "The choice", t: "Rolling, or a year at ₹8,000 less.", ch: "Proposal · page 2", when: "Day −2",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Rolling · month-to-month</div>
              <div class="p">₹40,000 <small>/ month</small></div>
              <ul><li>Same team · same weekly call</li><li>30 days' notice</li><li class="no">Rate locked</li><li class="no">Prepay rate</li><li><b>Year total: ₹4,80,000</b></li></ul>
              <div class="sub">Rate reviewed every quarter.</div>
            </div>
            <div class="ch best">
              <div class="badge">Most clients pick this</div>
              <div class="k">12-month agreement</div>
              <div class="p"><s>₹40,000</s>₹32,000 <small>/ month</small></div>
              <ul><li>Same team · same weekly call</li><li><b>Rate locked for the year and at renewal</b></li><li>Prepay a quarter: <b>₹30,000/mo</b></li><li><b>Year total: ₹3,84,000</b></li></ul>
              <div class="cr">Save ₹96,000 this year · ₹1,20,000 if you prepay</div>
              <div class="sub">Lapse and return = rolling rate that day.</div>
            </div>
          </div>`,
          why: [
            ["The yearly total does the work", "₹8,000 a month is a line item; ₹96,000 a year is a decision. Always show the year."],
            ["Prepay lives inside the long card", "Once she's chosen 12 months, the quarterly prepay is a small next step, not a separate sale."],
            ["The dim card is still a yes", "A client who insists on rolling pays ₹40,000. The agency wins the deal either way."]
          ],
          q: ["Give them a short, expensive way to say yes and a long, cheap way to say yes. Most people choose long.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "Invoice", t: "One quarter. Locked rate.", ch: "Razorpay · invoice", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Bazaar Digital · Q1 retainer</span><b>INVOICE · BD-0312</b></div>
            <div class="body">
              <div class="row"><span>Ads retainer · Apr–Jun · 3 × ₹30,000</span><span>₹90,000</span></div>
              <div class="row"><span>Same quarter, paid monthly on 12-month</span><span>₹96,000</span></div>
              <div class="row"><span>Same quarter, rolling</span><span>₹1,20,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹90,000</span></div>
              <div class="note"><b>Rate locked:</b> ₹30,000/month prepaid quarterly (₹32,000 monthly) for 12 months and at every renewal while the retainer never lapses.</div>
              <div class="go">Pay ₹90,000 · NEFT / UPI</div>
              <div class="disc">GST extra · Q2 invoice on 20 Jun · ad spend billed by Meta/Google</div>
            </div></div>`,
          why: [
            ["A quarter of cash on Day 0", "₹90,000 before the first ad runs. The agency is never financing the client, and payroll is covered for three months."],
            ["Show all three totals", "₹90,000 beside ₹1,20,000 — she pays feeling she negotiated well, which is the feeling that renews."],
            ["Lock terms on the invoice", "If it's on the invoice, it's in her accountant's file. Renewal is never a re-negotiation."]
          ],
          q: ["Prepayment is the deepest form of commitment. Discount it the most, because it removes the cancel button for a quarter.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "Month 11", t: "Renewal at her locked rate.", ch: "WhatsApp", when: "Month 11",
          html: `<div class="phone cd-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">BD</div><div>Bazaar Digital · Meera<small>Arjun, Sneha, you</small></div></div>
              <div class="body">
                <div class="bub">Meera ji, year 1 ends 31 Mar 🎉
                  <div class="board">
                    <div class="t">Renewal · your locked rate</div>
                    <div class="r"><span>New clients</span><span class="warn">₹48,000 / mo</span></div>
                    <div class="r"><span>Your rate</span><b>₹30,000 / mo</b></div>
                    <div class="r"><span>Year 1 ROAS</span><b>4.6×</b></div>
                  </div>
                  Kuch change nahi — Q1 invoice 20 Mar ko aayega, same ₹90,000. Team same, call same.
                  <span class="tm">Mon 11:02 AM</span>
                </div>
                <div class="bub me">Continue. Same rate pakka na? 🙏<span class="tm">11:15 AM ✓✓</span></div>
                <div class="bub">Pakka. Locked as long as we never lapse. 👍<span class="tm">11:16 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Show what new clients pay", "₹48,000 for newcomers makes her ₹30,000 an asset. Cancelling means giving it up, not saving money."],
            ["Renewal is a notification", "The invoice is coming anyway. The message informs and reassures; it doesn't reopen the sale."],
            ["Results next to the rate", "4.6× ROAS sits beside the price. The renewal decision is made with the proof in view."]
          ],
          q: ["Grandfathered pricing turns every price rise into a retention campaign for the people who already pay you.", "framework · continuity discounts (adapted)"]
        },
        {
          k: "Year 2", t: "Renewed. Locked. Cheaper than newcomers.", ch: "Result card · year-1 report", when: "Month 12",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Year 1 report · Bazaar Digital</div>
              <h5>Meera, year 2 is locked.</h5>
              <p>12 months · ₹30,000/mo kept · new clients pay ₹48,000</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>4.6×</b><span>ROAS</span></div><div><b>₹1,20,000</b><span>saved vs rolling</span></div><div><b>₹18,000</b><span>under new-client rate</span></div></div>
              <div class="credit">Your rate, locked<b>₹30,000 / month</b>prepaid quarterly · continues at every renewal while the retainer never lapses</div>
              <div class="cd-note">Refer a boutique: they start at ₹48,000 rolling; your Q2 invoice drops by ₹15,000.</div>
            </div></div>`,
          why: [
            ["Two years, one sale", "The proposal was sold once. The discount for commitment and the lock did the second year for free."],
            ["The gap grows with every rise", "₹30,000 vs ₹48,000 today; bigger next year. The longer she stays, the more leaving costs."],
            ["Locked clients refer", "“I pay ₹30,000 and you'll pay ₹48,000” is a brag she tells other owners. The discount markets the agency."]
          ],
          q: ["The business is worth what its continuity is worth. Everything else is how you got them to the door.", "framework · money models"]
        }
      ]
    }
  ]
});
