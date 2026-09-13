// Win Your Money Back — $100M Money Models, Section II (Attraction Offers)
// Example 1 is the book's gym story (localised). Examples 2–5 are marked "(adapted)" in `source`
// and follow the chapter's framework for other business types; verify details against the book.
window.OFFERS.push({
  slug: "win-your-money-back",
  name: "Win your money back",
  css: `
.wymb-rows{margin:14px 0 0;text-align:left}
.wymb-rows .r{display:flex;justify-content:space-between;align-items:center;padding:7px 2px;border-top:1px dashed var(--line);font-size:13px}
.wymb-rows .r:first-child{border-top:0}
.wymb-rows .r b{font-family:var(--mono);font-size:12px;color:var(--green-d)}
.wymb-rows .r .me{background:var(--green-xl);border-radius:6px;padding:2px 6px;font-weight:600}
.wymb-rows .r .warn{color:var(--coral);font-family:var(--mono);font-size:11px}
.wymb-poster h5{font-size:32px}
.wymb-poster .big{font-size:46px;margin:10px 0 2px}
.wymb-poster p{font-size:12.5px}
.wymb-note{font-size:12.5px;color:var(--dim);margin-top:10px;line-height:1.5}
.wymb-doc .chk{padding:7px 0}
.wymb-doc h5{font-size:22px}
.wymb-sig .l{width:170px}
.wymb-sig small{white-space:nowrap}
.wymb-tight .wa .body{gap:6px;padding:9px 8px}
.wymb-tight .bub{padding:6px 9px}
.wymb-tight .board{margin:4px 0;padding:6px 9px}
.wymb-tight .board .r{padding:2px 0}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the book, localised) ───────────────────────── */
    {
      label: "Alex's gym · 6-week challenge",
      source: "Alex's own gym, as told in the book · localised to Chandigarh",
      client: "Rekha",
      about: "Rekha, 38, Sector 35. Pays ₹15,000 for a 6-week challenge and wins it back as credit if she follows 3 rules and hits 7 kg. Indian persona; mechanism as in the book.",
      copy: `WIN YOUR MONEY BACK — 6-Week Challenge
Pay ₹15,000 upfront. Win it ALL back as studio credit on Day 42 if you:
1. Attend 18/18 sessions (3× a week)
2. Log every meal in the app
3. Weigh in on Day 42 with before/after photo
Goal: 7 kg. Credit valid 12 months, applies to any membership.`,
      steps: [
        {
          k: "The ad", t: "One reel, one promise.", ch: "Instagram", when: "Day −3",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">FS</div><div><div class="nm">fitstudio.chd</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">CHANDIGARH MOMS 35+</div>
                <div><div class="big">Lose 7 kg in 6 weeks.<br><em>Or paisa wapas.</em></div>
                <div class="sm">₹15,000 · Do the work, win all of it back on Day 42.</div></div>
              </div>
              <div class="cta"><span>fitstudiochd.in</span><b>Book free call</b></div>
              <div class="cap"><b>fitstudio.chd</b> Sirf 12 seats. Sector 35. Next batch starts Monday. Not for everyone — read the 3 rules before you book. 👇</div>
            </div></div></div>`,
          why: [
            ["The offer is the headline", "“Or paisa wapas” is the hook. Not the gym, not the trainer. The mechanism sells itself."],
            ["Specific number, specific window", "7 kg / 6 weeks is winnable in her head. “Get fit” is not."],
            ["Damaging admission", "“Not for everyone — read the 3 rules” pre-filters for people who will actually do the work. Those are the only buyers this offer wants."]
          ],
          q: ["A guarantee is given. Win-your-money-back is earned. That one word change removes every refund-abuser from your funnel.", "framework · attraction offers"]
        },
        {
          k: "The page", t: "The rules, before the price.", ch: "Landing page", when: "Day −3",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">fitstudiochd.in/win</div></div>
            <div class="body">
              <div class="eyebrow">6-week challenge · Sector 35</div>
              <h5>Pay ₹15,000. <em>Win it all back.</em></h5>
              <div style="font-size:13px;color:var(--dim)">Three rules. Follow all three, hit your goal, and every rupee comes back to you.</div>
              <div class="rules">
                <div class="rule"><div class="n">RULE 01</div><div class="t">Show up 3× a week</div><div class="s">18 of 18 sessions</div></div>
                <div class="rule"><div class="n">RULE 02</div><div class="t">Log every meal</div><div class="s">in the app, daily</div></div>
                <div class="rule"><div class="n">RULE 03</div><div class="t">Weigh in on Day 42</div><div class="s">before/after photo</div></div>
              </div>
              <div class="payout"><b>₹15,000</b><span>credited back to you when you win. No fine print, no asterisk.</span></div>
              <div class="btn">Book your free 30-min call <small>Today or tomorrow only · 2 slots left</small></div>
            </div></div>`,
          why: [
            ["Three rules, visible before payment", "This is the trust moment. Hiding conditions in fine print is how this offer gets a bad name. Showing them is what makes it feel fair."],
            ["Every rule causes the result", "Show up, log food, weigh in — a coach would demand these anyway. No invented hoops."],
            ["Booking, not buying", "The page sells a free call within 48 hours. Show rates collapse after that, so the calendar refuses later dates."]
          ],
          q: ["Only ask for conditions you'd want them to do even if there were no money on the line.", "framework · win your money back"]
        },
        {
          k: "Payment", t: "Full price. No discount. Today.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Fit Studio Chandigarh</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Challenge</span><span>₹15,000</span></div>
              <div class="row"><span>Diet chart + accountability coach</span><span>included</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹15,000</span></div>
              <div class="note">🏆 <b>Win-back on Day 42:</b> ₹15,000 as studio credit when you complete all 3 rules and hit 7 kg.</div>
              <div class="go">Pay ₹15,000 · UPI / Card</div>
              <div class="disc"><s>EMI · Pay in 3</s></div>
            </div></div>`,
          why: [
            ["Discounting breaks the logic", "You cannot win back money you never paid. The full ₹15,000 is the commitment device — it has to sting a little."],
            ["Cash lands day 0", "This is what makes the offer self-funding. Ads for the next batch are paid by this batch's deposits."],
            ["The win-back is printed on the receipt", "She sees “₹15,000 as studio credit” at the exact moment of paying. Loss aversion flips to a game she can win."]
          ],
          q: ["Pay it back as credit, not cash. Credit stays in the business and becomes the down payment on the next offer.", "framework · win your money back"]
        },
        {
          k: "Signed rules", t: "She writes her own goal down.", ch: "Paper · in the sales office", when: "Day 0",
          html: `<div class="doc">
            <div class="stamp">SIGNED · DAY 0</div>
            <div class="k">Win-your-money-back agreement</div>
            <h5>What Rekha must do to win</h5>
            <div class="chk"><div class="b"></div><div><b>Attend 18 of 18 sessions</b><span>Mon · Wed · Fri, 6:30 PM. Missed = not won.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Log every meal in the app</b><span>42 days. Coach reviews weekly.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Weigh in on Day 42 · photo before &amp; after</b><span>Goal: 78 kg → 71 kg. Same scale, same studio.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Payout = ₹15,000 studio credit</b><span>Valid 12 months. Applies to any membership.</span></div></div>
            <div class="sig wymb-sig"><div class="l">Rekha Sharma</div><small>DATE: 12 MAY · DAY 42: 23 JUN</small></div>
          </div>`,
          why: [
            ["Separate from the checkout T&Cs", "One page, four lines, a signature. Kills 90% of payout disputes before they exist."],
            ["Exact number, exact date, exact scale", "78 → 71 kg, 23 June, same studio. Ambiguity at payout time is how you buy a chargeback."],
            ["Written commitment predicts follow-through", "She has now told herself, in ink, what she will do. Her brain will fight to stay consistent with that."]
          ],
          q: ["Define “win” in writing, before the money changes hands, in language a 10-year-old could judge.", "framework · win your money back"]
        },
        {
          k: "Weekly scorecard", t: "The scoreboard is the product.", ch: "WhatsApp", when: "Every Monday · Days 7–35",
          html: `<div class="phone wymb-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">V</div><div>Coach Vikram · Fit Studio<small>online</small></div></div>
              <div class="body">
                <div class="bub">Rekha ji, week 3 scorecard 👇
                  <div class="board">
                    <div class="t">Win-back · Day 21 of 42</div>
                    <div class="r"><span>Sessions</span><b>8 / 9</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="miss"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i></div>
                    <div class="r"><span>Meals logged</span><b>21 / 21</b></div>
                    <div class="r"><span>Weight</span><b>78 → 75.2 kg</b></div>
                    <div class="r"><span>Status</span><span class="warn">1 make-up session owed</span></div>
                  </div>
                  Friday miss hua — Saturday 8 AM make-up rakh diya. ₹15,000 still on track 💪
                  <span class="tm">Mon 9:02 AM</span>
                </div>
                <div class="bub me">Saturday pakka. Thank you 🙏<span class="tm">9:14 AM ✓✓</span></div>
                <div class="bub">Meena ji (same batch) 4.1 kg down. Neck-and-neck ho 😄<span class="tm">9:15 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Track the rules, not the outcome", "Sessions and logs are what she controls and what a coach can fix. Weight follows."],
            ["Rescue the at-risk", "One missed session gets a make-up slot the same day. Every save is a future winner, and every winner is a testimonial."],
            ["Visible peer", "“Meena ji is 4.1 kg down” — a real person in the same batch. Adherence is social."]
          ],
          q: ["This is where the offer either makes you money or makes you enemies. Nobody should be surprised on Day 42.", "framework · win your money back"]
        },
        {
          k: "Day 42", t: "Paid loudly, in public.", ch: "Result card · studio wall · WhatsApp group", when: "Day 42",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 42 · Fit Studio Chandigarh</div>
              <h5>Rekha, you won.</h5>
              <p>78.0 kg → 70.6 kg · 18/18 sessions · 42/42 logs</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>−7.4</b><span>kg lost</span></div><div><b>18</b><span>sessions</span></div><div><b>42</b><span>days logged</span></div></div>
              <div class="credit">Your win-back is live<b>₹15,000 credit</b>sitting in your Fit Studio account · valid till 23 Jun next year</div>
              <div style="font-size:11.5px;color:var(--mute);margin-top:12px">Before/after photo + 30-sec testimonial recorded at the weigh-in ✓</div>
            </div></div>`,
          why: [
            ["Pay fast, pay generously", "Edge cases go in the winner's favour. One story of a stingy payout costs more than ten refunds."],
            ["The proof is a condition of winning", "Before/after + testimonial was rule 03, so it never has to be chased. Her result becomes screen 01 of the next batch."],
            ["Non-winners see it's real", "The ones who fell short watched a real person get ₹15,000. That's the credibility for the downsell they're about to hear."]
          ],
          q: ["Winners are your ad creative. You paid for it with their own deposit.", "framework · win your money back"]
        },
        {
          k: "The credit", t: "The refund becomes the down payment.", ch: "In person · at the weigh-in", when: "Day 42",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">₹15,000 <small>credit</small></div>
              <ul><li>Sits in your account for 12 months</li><li>Use it whenever you come back</li><li><b>Today:</b> you walk out. Progress pauses.</li></ul>
              <div class="sub">Nothing wrong with this.</div>
            </div>
            <div class="ch best">
              <div class="badge">What Vikram recommends</div>
              <div class="k">Option B</div>
              <div class="p">₹3,500 <small>/ month membership</small></div>
              <ul><li>Same coach, same 6:30 PM batch</li><li>Diet chart continues · WhatsApp group stays</li><li><b>Your ₹15,000 credit pays the first 4 months</b></li></ul>
              <div class="cr">₹0 out of pocket till October</div>
              <div class="sub">First debit: 23 Oct · cancel anytime before</div>
            </div>
          </div>`,
          why: [
            ["Either/or — both options are yes", "Walk away with credit, or let the credit pay 4 months of membership. Neither option is “no”."],
            ["₹0 out of pocket till October", "The ₹15,000 never leaves the business. It converts a challenge buyer into a ₹3,500/mo member at the peak of her excitement."],
            ["Habit is already built", "Six weeks of Mon-Wed-Fri at 6:30. Continuing is the path of least resistance; stopping is the effort."]
          ],
          q: ["The attraction offer isn't supposed to be the profit. It buys the customer at a profit so the continuity has someone to sell to.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 2 · WHERE HE SAW IT — offline boot camp (adapted) ───────────────────────── */
    {
      label: "Origin · offline boot camp",
      source: "The fitness-industry challenge Alex borrowed from, before his gym (adapted — verify origin details against the chapter)",
      client: "Dave",
      about: "Dave, 41, US. No ads, no app — a counter sign, a paper sheet and a wall board. The original, offline version of the same mechanism. US persona kept; details adapted.",
      copy: `6-WEEK TRANSFORMATION CHALLENGE — WIN YOUR $500 BACK
Pay $500 on sign-up. Lose 20 lb in 6 weeks and get all $500 back.
To qualify you must:
1. Train 5× a week (30 of 30 sessions)
2. Follow the meal plan; hand in your food sheet every Friday
3. Weigh in Day 0 and Day 42 on the gym scale
Payout: $500 as membership credit. 20 spots. Starts Monday.`,
      steps: [
        {
          k: "Counter sign", t: "A sign at the front desk.", ch: "Front-desk sign", when: "Day −7",
          html: `<div class="poster wymb-poster">
            <div class="k">6-week transformation challenge</div>
            <h5>Lose 20 lb. <em>Win your $500 back.</em></h5>
            <p>Train 5× a week. Follow the meal plan. Weigh in on Day 42.<br>Hit 20 lb and every dollar comes back to you.</p>
            <div class="big">$500</div>
            <p>paid on sign-up · paid back when you win</p>
            <div class="fine">Next challenge starts Monday · 20 spots · ask at the desk</div>
          </div>`,
          why: [
            ["The mechanism is the marketing", "No brand, no photos. “Win your $500 back” on a piece of card is the whole pitch, and it works walking past a desk."],
            ["A real number, a real deadline", "20 lb and 42 days are checkable. Vague promises attract vague customers."],
            ["Scarcity is physical", "20 spots because there are 20 places on the floor. Real limits are easier to say with a straight face."]
          ],
          q: ["An attraction offer has one job: make the first yes easy for the right person and unattractive for the wrong one.", "framework · attraction offers"]
        },
        {
          k: "The pitch", t: "Said across the counter.", ch: "In person · front desk", when: "Day −7",
          html: `<div class="say">
            <div class="who"><div class="av">O</div><div><b>The owner</b><small>Boot camp · front desk</small></div></div>
            <q>Here's how it works. You put $500 down. You show up five days a week, you follow the plan, and on Day 42 you get on that scale. <em>Lose the twenty pounds and I hand the $500 straight back.</em> Miss a day, it's mine — that's the deal. Most people who do the work win. Want a spot?</q>
          </div>`,
          why: [
            ["Say the catch out loud", "“Miss a day, it's mine” is stated before money moves. Honesty here is what lets you keep the deposits later."],
            ["He bets on himself, not on you", "The customer's money rides on his own behaviour. That flips him from sceptic to player."],
            ["Most winners, some non-winners", "The business is fine either way: winners become members, non-winners paid full price for six weeks of training."]
          ],
          q: ["The customer isn't buying a result — he's buying a bet he controls the outcome of.", "framework · win your money back"]
        },
        {
          k: "Sign-up sheet", t: "Paper, pen, and $500.", ch: "Paper · at the desk", when: "Day 0",
          html: `<div class="doc wymb-doc">
            <div class="stamp">PAID · $500</div>
            <div class="k">Challenge sign-up</div>
            <h5>Dave's challenge sheet</h5>
            <div class="chk"><div class="b"></div><div><b>30 of 30 sessions</b><span>Mon–Fri, 6:00 AM. Sign in at the desk.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Food sheet every Friday</b><span>Meal plan given today. Hand in 6 sheets.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Weigh-in Day 0 and Day 42</b><span>Start: 232 lb · Target: 212 lb · Gym scale only.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Win = $500 membership credit</b><span>Applied to any plan within 60 days.</span></div></div>
            <div class="sig wymb-sig"><div class="l">Dave M.</div><small>DAY 0: MON 3 MAR · DAY 42: MON 14 APR</small></div>
          </div>`,
          why: [
            ["Every condition is a habit", "Show up, eat right, get weighed. The rules are the programme. Nobody wins by accident, and nobody who follows them fails."],
            ["Start weight written down", "232 → 212 on one sheet, on one scale. No arguments on Day 42."],
            ["Credit, not cash, even offline", "“$500 membership credit” is written before he pays. The refund is already pointed at the next purchase."]
          ],
          q: ["Conditions should be the things that make the customer succeed. If a rule doesn't cause the result, delete it.", "framework · win your money back"]
        },
        {
          k: "Wall board", t: "Everyone can see everyone.", ch: "Whiteboard · gym wall", when: "Week 3",
          html: `<div class="poster wymb-poster" style="text-align:left;width:440px">
            <div class="k">Challenge board · week 3 of 6</div>
            <h5 style="font-size:26px;margin:8px 0 0">Who's still in the money</h5>
            <div class="wymb-rows">
              <div class="r"><span>Maria</span><span>15/15 sessions</span><b>−11 lb</b></div>
              <div class="r"><span class="me">Dave</span><span>15/15 sessions</span><b>−9 lb</b></div>
              <div class="r"><span>Tom</span><span>15/15 sessions</span><b>−8 lb</b></div>
              <div class="r"><span>Jess</span><span>14/15 sessions</span><span class="warn">out · missed Tue</span></div>
              <div class="r"><span>Sam</span><span>15/15 sessions</span><b>−6 lb</b></div>
            </div>
            <div class="fine" style="text-align:left">Weigh-ins every Monday 6 AM · make-up sessions Saturday 8 AM</div>
          </div>`,
          why: [
            ["Public accountability", "A wall board does what an app does, for free. Seeing your name next to a peer's keeps you coming."],
            ["The rule is enforced visibly", "One “out · missed Tue” tells the room the deal is real. That protects every future deposit."],
            ["Track behaviour weekly", "Sessions are tracked before pounds. You can fix attendance on Tuesday; you can't fix Day 42."]
          ],
          q: ["Make the scoreboard public. People do more for a board than for a bank balance.", "framework · win your money back"]
        },
        {
          k: "Day 42", t: "Paid back, at the desk.", ch: "In person · weigh-in", when: "Day 42",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 42 · challenge weigh-in</div>
              <h5>Dave, you won.</h5>
              <p>232 lb → 210 lb · 30/30 sessions · 6/6 food sheets</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>−22</b><span>lb lost</span></div><div><b>30</b><span>sessions</span></div><div><b>12</b><span>of 20 won</span></div></div>
              <div class="credit">Your $500 is back<b>$500 credit</b>covers your first 3 months of membership at $165/mo · starts today</div>
              <div class="wymb-note">Photo taken by the board. Next challenge starts Monday — bring a friend.</div>
            </div></div>`,
          why: [
            ["The credit rolls straight into membership", "$500 covers three months at $165. He never stops training, and the gym never refunds cash."],
            ["Winners are the next sign", "The photo by the board replaces the counter card next month. Proof beats promise."],
            ["The math works at 12 of 20", "Twelve winners become members; eight non-winners paid $500 each for six weeks. Both outcomes are profitable."]
          ],
          q: ["Every winner is a member and a testimonial. Every non-winner is a full-price customer. There is no losing row.", "framework · win your money back"]
        }
      ]
    },

    /* ───────────────────────── 3 · SERVICE BUSINESS / AGENCY (adapted) ───────────────────────── */
    {
      label: "Agency · 90-day sprint",
      source: "How the book applies it to a service business / agency (adapted)",
      client: "Nikhil",
      about: "Nikhil runs a dental clinic in Pune and buys a 90-day lead-gen sprint for ₹90,000. He wins it back as credit if he does his 4 jobs and the clinic books 40 new-patient calls.",
      copy: `90-DAY GROWTH SPRINT — WIN YOUR ₹90,000 BACK
Pay ₹90,000 once for 90 days of ads + follow-up.
Do your 4 jobs: (1) weekly 30-min call, (2) send photos/testimonials in 48 h,
(3) approve creatives within 24 h, (4) keep ad spend at ₹25,000/month.
Hit 40 booked new-patient calls by Day 90 → ₹90,000 credited to months 4–6.
Miss a job or miss the target: no credit, sprint still delivered.`,
      steps: [
        {
          k: "The ad", t: "A sprint you can win back.", ch: "Instagram · Facebook", when: "Day −5",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">LF</div><div><div class="nm">leadflow.clinics</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">PUNE CLINIC OWNERS</div>
                <div><div class="big">40 new-patient calls in 90 days.<br><em>Or you win the fee back.</em></div>
                <div class="sm">₹90,000 sprint · do your 4 jobs, hit the number, get it all back as credit.</div></div>
              </div>
              <div class="cta"><span>leadflow.in/sprint</span><b>See the 4 jobs</b></div>
              <div class="cap"><b>leadflow.clinics</b> Only 5 clinics per quarter. If you can't do a weekly 30-min call, don't apply.</div>
            </div></div></div>`,
          why: [
            ["A number, not a service", "“40 calls in 90 days” is the promise. Nobody buys “digital marketing”."],
            ["You win it back — not “we refund”", "The client earns the credit by doing his part. That pre-sells the cooperation every agency struggles to get."],
            ["Filter in the caption", "“If you can't do a weekly call, don't apply” removes the client who would fail and blame you."]
          ],
          q: ["Attach the guarantee to the customer's behaviour, not just your delivery. Then the guarantee makes your job easier, not riskier.", "framework · win your money back"]
        },
        {
          k: "The page", t: "Four jobs, one number, one payout.", ch: "Landing page", when: "Day −5",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">leadflow.in/sprint</div></div>
            <div class="body">
              <div class="eyebrow">90-day growth sprint · clinics</div>
              <h5>Pay ₹90,000 once. <em>Win it back on Day 90.</em></h5>
              <div style="font-size:13px;color:var(--dim)">We run ads and follow-up. You do four jobs. Hit 40 booked calls and the fee comes back as credit.</div>
              <div class="rules" style="grid-template-columns:repeat(4,1fr)">
                <div class="rule"><div class="n">JOB 01</div><div class="t">Weekly call</div><div class="s">30 min · 12 of 12</div></div>
                <div class="rule"><div class="n">JOB 02</div><div class="t">Send assets</div><div class="s">photos in 48 h</div></div>
                <div class="rule"><div class="n">JOB 03</div><div class="t">Approve in 24 h</div><div class="s">creatives · offers</div></div>
                <div class="rule"><div class="n">JOB 04</div><div class="t">Fund the ads</div><div class="s">₹25,000 / month</div></div>
              </div>
              <div class="payout"><b>₹90,000</b><span>credited to months 4–6 when the clinic hits 40 booked new-patient calls.</span></div>
              <div class="btn">Apply for a sprint slot <small>5 clinics per quarter · 2 left</small></div>
            </div></div>`,
          why: [
            ["The client's jobs are the product's inputs", "Calls, assets, approvals, ad budget — every one is something a missing client kills a campaign with."],
            ["Target visible before the fee", "40 calls is on the page, not in a proposal PDF. He can decide if it's worth ₹90,000 before talking to anyone."],
            ["Credit, not cash", "Months 4–6 are already named. The win-back is the first retainer payment in disguise."]
          ],
          q: ["Only ask for conditions you'd want them to do even if there were no money on the line.", "framework · win your money back"]
        },
        {
          k: "The call", t: "The deal, in one breath.", ch: "Zoom · sales call", when: "Day −2",
          html: `<div class="say">
            <div class="who"><div class="av">A</div><div><b>Arjun · Leadflow</b><small>Founder · sales call</small></div></div>
            <q>Nikhil, it's simple. ₹90,000 now, ninety days of work from us. You show up to twelve calls, send what we ask within two days, approve within one, keep ₹25,000 a month in the ad account. <em>Hit forty booked calls and your ₹90,000 comes back — as months four to six, on us.</em> If you skip your jobs, no credit, and we still deliver the sprint.</q>
          </div>`,
          why: [
            ["Repeat the rules verbally", "He hears them on the page, on the call and on the invoice. Three exposures, zero surprises on Day 90."],
            ["Both outcomes are profitable", "Win: he pays nothing for months 4–6 but stays a client. Lose: the agency keeps ₹90,000 for 90 days' work."],
            ["Frame it as his win", "“Your money comes back” — the agency hits the number, but the language makes him the player."]
          ],
          q: ["Say the whole deal out loud before you take the money. Clarity now is cheaper than a refund later.", "framework · win your money back"]
        },
        {
          k: "Invoice", t: "One payment. Terms on the invoice.", ch: "Razorpay · invoice", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Leadflow · 90-day sprint</span><b>INVOICE · LF-2041</b></div>
            <div class="body">
              <div class="row"><span>90-day growth sprint (ads + follow-up)</span><span>₹90,000</span></div>
              <div class="row"><span>Ad spend (paid to Meta directly)</span><span>₹25,000/mo</span></div>
              <div class="row"><span>Weekly call · asset review · CRM</span><span>included</span></div>
              <div class="row tot"><span>Pay today</span><span>₹90,000</span></div>
              <div class="note"><b>Win-back on Day 90:</b> ₹90,000 credited to months 4–6 when all 4 jobs are done and 40 booked new-patient calls are logged in the CRM.</div>
              <div class="go">Pay ₹90,000 · UPI / Card / NEFT</div>
              <div class="disc">GST extra · sprint starts Monday</div>
            </div></div>`,
          why: [
            ["Cash first, work second", "₹90,000 on Day 0 funds the sprint. The agency is never financing the client."],
            ["The CRM is the judge", "“Booked calls logged in the CRM” names the scoreboard. Both sides see the same number every week."],
            ["Payout terms on the receipt", "If it's on the invoice, it's in the accountant's file. Payout disputes die here."]
          ],
          q: ["Get paid before you deliver. The attraction offer must fund itself, or it isn't an attraction offer.", "framework · money models"]
        },
        {
          k: "Weekly scorecard", t: "His jobs and our number, weekly.", ch: "WhatsApp", when: "Every Monday · Days 7–84",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">LF</div><div>Leadflow · Nikhil's sprint<small>Arjun, Sneha, you</small></div></div>
              <div class="body">
                <div class="bub">Week 6 scorecard, Dr. Nikhil 👇
                  <div class="board">
                    <div class="t">Win-back · Day 42 of 90</div>
                    <div class="r"><span>Booked calls</span><b>19 / 40</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Weekly calls</span><b>6 / 6</b></div>
                    <div class="r"><span>Approvals in 24 h</span><b>9 / 9</b></div>
                    <div class="r"><span>Testimonial videos</span><span class="warn">2 pending · due Wed</span></div>
                  </div>
                  On pace for 41. Two patient videos pending — send by Wednesday and Job 02 stays green.
                  <span class="tm">Mon 10:02 AM</span>
                </div>
                <div class="bub me">Shooting them tomorrow. Also 3 walk-ins came from the ad 👍<span class="tm">10:20 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The client is tracked too", "His jobs sit on the same board as the agency's number. He can see exactly what keeps his ₹90,000 alive."],
            ["Nudge before failure", "“Due Wed” is a rescue, not a warning. Every job saved is a client who stays cooperative."],
            ["On-pace framing", "“On pace for 41” turns a 90-day promise into a weekly game he's currently winning."]
          ],
          q: ["This is where the offer either makes you money or makes you enemies. Nobody should be surprised on Day 90.", "framework · win your money back"]
        },
        {
          k: "Day 90", t: "Target hit. Fee comes back.", ch: "Email · result report", when: "Day 90",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 90 · Leadflow sprint report</div>
              <h5>Nikhil, you won.</h5>
              <p>44 booked calls · 12/12 weekly calls · 4/4 jobs complete</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>44</b><span>booked calls</span></div><div><b>27</b><span>new patients</span></div><div><b>₹6.1L</b><span>billed</span></div></div>
              <div class="credit">Your win-back is live<b>₹90,000 credit</b>applied to months 4–6 of your retainer · nothing to pay till Day 180</div>
              <div class="wymb-note">Case study drafted from this report — approval needed by Friday.</div>
            </div></div>`,
          why: [
            ["Pay on the day, no haggling", "44 beat 40. The credit is applied the same morning. Speed is what makes the next client believe the offer."],
            ["Result in his currency", "27 patients, ₹6.1L billed — not clicks. The report is the case study for the next clinic."],
            ["Credit means continuity", "“Nothing to pay till Day 180” means he is already a retainer client. The refund never left the building."]
          ],
          q: ["Winners are your ad creative. You paid for it with their own deposit.", "framework · win your money back"]
        },
        {
          k: "The retainer", t: "Three months free, then monthly.", ch: "Proposal · in the report call", when: "Day 90",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">₹90,000 <small>credit on file</small></div>
              <ul><li>Valid 6 months against any Leadflow service</li><li>Ads stop today · CRM handed over</li><li><b>Today:</b> 44 calls a quarter goes back to zero.</li></ul>
              <div class="sub">Your money, your call.</div>
            </div>
            <div class="ch best">
              <div class="badge">What Arjun recommends</div>
              <div class="k">Option B</div>
              <div class="p">₹30,000 <small>/ month retainer</small></div>
              <ul><li>Same team, same ads, same weekly call</li><li>Follow-up team keeps booking</li><li><b>Your ₹90,000 credit pays months 4–6 in full</b></li></ul>
              <div class="cr">₹0 out of pocket till Day 180</div>
              <div class="sub">First debit on Day 181 · cancel before with 15 days' notice</div>
            </div>
          </div>`,
          why: [
            ["Both doors are yes", "Keep the credit or spend it on the retainer. There is no option where he feels cheated."],
            ["Stopping is the expensive choice", "Option A means the ads switch off. The cost of leaving is visible; the cost of staying is zero."],
            ["Sprint → retainer is the whole model", "The ₹90,000 sprint acquired a ₹30,000/month client at a profit. That's the job of an attraction offer."]
          ],
          q: ["The attraction offer isn't supposed to be the profit. It buys the customer at a profit so the continuity has someone to sell to.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 4 · COURSE / COACHING (adapted) ───────────────────────── */
    {
      label: "Course · finish it, win it",
      source: "How the book applies it to coaching / education (adapted)",
      client: "Aarav",
      about: "Aarav, 26, Jaipur, wants to freelance. Pays ₹25,000 for an 8-week accelerator and wins it back as credit if he finishes every module, attends the calls, and lands one paying client.",
      copy: `FREELANCE ACCELERATOR — FINISH IT, WIN ₹25,000 BACK
Pay ₹25,000 for 8 weeks. Win it all back as credit on Day 56 if you:
1. Complete all 8 modules and submit 8 assignments (by Sunday each week)
2. Attend 7 of 8 live calls
3. Send 40 pitches (screenshots logged in the portal)
4. Land 1 paying client by Day 56 (invoice proof)
Credit applies to the 6-month Mastermind (₹5,000/month).`,
      steps: [
        {
          k: "The ad", t: "The course that pays you back.", ch: "Instagram", when: "Day −4",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">FA</div><div><div class="nm">freelance.accel</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">FIRST-TIME FREELANCERS</div>
                <div><div class="big">Land your first client in 8 weeks.<br><em>Finish it, and the fee is yours back.</em></div>
                <div class="sm">₹25,000 · every module, every call, 40 pitches, 1 client. Do that, and it's credited back.</div></div>
              </div>
              <div class="cta"><span>freelanceaccel.in</span><b>Read the 4 rules</b></div>
              <div class="cap"><b>freelance.accel</b> 30 seats per cohort. If you won't do the assignments, save your money — seriously.</div>
            </div></div></div>`,
          why: [
            ["Attacks the #1 objection", "Courses fail because people don't finish. The offer pays you for finishing — so the objection becomes the pitch."],
            ["Result + behaviour in one line", "“1 client” is the result; “every module, every call” is the behaviour. Both are named up front."],
            ["Honest filter", "“Save your money — seriously” costs a few bad buyers and earns trust with every good one."]
          ],
          q: ["The best guarantee makes the customer do the thing that would have got them the result anyway.", "framework · win your money back"]
        },
        {
          k: "Sales page", t: "Four rules, one client, credit back.", ch: "Landing page", when: "Day −4",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">freelanceaccel.in/cohort-7</div></div>
            <div class="body">
              <div class="eyebrow">8-week accelerator · cohort 7</div>
              <h5>Pay ₹25,000. <em>Finish it, win it back.</em></h5>
              <div style="font-size:13px;color:var(--dim)">Do the four things below and land one paying client by Day 56. The whole fee comes back as credit.</div>
              <div class="rules" style="grid-template-columns:repeat(4,1fr)">
                <div class="rule"><div class="n">RULE 01</div><div class="t">8 modules</div><div class="s">assignments by Sunday</div></div>
                <div class="rule"><div class="n">RULE 02</div><div class="t">7 of 8 live calls</div><div class="s">Thursdays 8 PM</div></div>
                <div class="rule"><div class="n">RULE 03</div><div class="t">40 pitches</div><div class="s">logged in portal</div></div>
                <div class="rule"><div class="n">RULE 04</div><div class="t">1 paying client</div><div class="s">invoice by Day 56</div></div>
              </div>
              <div class="payout"><b>₹25,000</b><span>credited to the 6-month Mastermind when you win. Credit valid 12 months.</span></div>
              <div class="btn">Join cohort 7 <small>Starts Monday · 30 seats · 9 left</small></div>
            </div></div>`,
          why: [
            ["The rules are the curriculum", "Modules, calls, pitches, client — that's exactly what a good coach would demand. Nothing is added to make winning hard."],
            ["Pitches are the lever", "40 pitches is the rule most likely to produce the client. Tracking it makes the result almost mechanical."],
            ["Credit points at the Mastermind", "The payout has a destination before he's paid. The win-back is the Mastermind's down payment."]
          ],
          q: ["Conditions should be the things that make the customer succeed. If a rule doesn't cause the result, delete it.", "framework · win your money back"]
        },
        {
          k: "Checkout", t: "Full fee. Win-back on the receipt.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Freelance Accelerator · cohort 7</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>8-week accelerator</span><span>₹25,000</span></div>
              <div class="row"><span>Live calls · portal · pitch templates</span><span>included</span></div>
              <div class="row"><span>Coupon</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹25,000</span></div>
              <div class="note"><b>Win-back on Day 56:</b> ₹25,000 as Mastermind credit when all 4 rules are met and one client invoice is uploaded.</div>
              <div class="go">Pay ₹25,000 · UPI / Card</div>
              <div class="disc">No EMI · no coupons on this cohort</div>
            </div></div>`,
          why: [
            ["No coupon, no EMI", "A discount lowers the stake and the stake is the point. ₹25,000 in one go is what makes him show up on Thursday."],
            ["Terms repeated at the payment moment", "Four rules, one invoice, one credit — stated on the receipt so the payout is never a negotiation."],
            ["Cash on Day 0 funds the cohort", "Thirty seats × ₹25,000 pays the coach and the ads before the first call."]
          ],
          q: ["Pay it back as credit, not cash. Credit stays in the business and becomes the down payment on the next offer.", "framework · win your money back"]
        },
        {
          k: "Welcome email", t: "The scoreboard, on Day 0.", ch: "Email", when: "Day 0",
          html: `<div class="mail">
            <div class="h"><div class="s">Aarav, your win-back tracker is live</div><div class="f">From: Ritu · Freelance Accelerator &lt;ritu@freelanceaccel.in&gt; · to Aarav</div></div>
            <div class="body">
              <p>Welcome to cohort 7. Your ₹25,000 is now a bet on yourself — here is how you win it back:</p>
              <p><b>01</b> 8 modules + assignments, by Sunday 11:59 PM each week<br><b>02</b> 7 of 8 Thursday calls (8 PM)<br><b>03</b> 40 pitches logged in the portal<br><b>04</b> 1 client invoice uploaded by Day 56 (Sun 27 Jul)</p>
              <p>Your portal shows all four counters live. Miss a Sunday and I'll message you before it's a problem.</p>
              <div class="cta">Open my tracker</div>
            </div></div>`,
          why: [
            ["Rules land in his inbox", "The email is the version he can find on Day 55. Written terms, dated, in his own words."],
            ["The tracker is visible from minute one", "Counters at 0/8, 0/8, 0/40, 0/1. Progress bars are the product's engagement loop."],
            ["Rescue is promised in advance", "“I'll message you before it's a problem” — the coach commits to saving him, not catching him."]
          ],
          q: ["Define “win” in writing, before the work starts, in language a 10-year-old could judge.", "framework · win your money back"]
        },
        {
          k: "Week 5 nudge", t: "Behind on pitches, not on time.", ch: "WhatsApp", when: "Week 5",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Ritu · Freelance Accel<small>online</small></div></div>
              <div class="body">
                <div class="bub">Aarav, week 5 check 👇
                  <div class="board">
                    <div class="t">Win-back · Day 35 of 56</div>
                    <div class="r"><span>Modules</span><b>5 / 5 on time</b></div>
                    <div class="r"><span>Live calls</span><b>5 / 5</b></div>
                    <div class="r"><span>Pitches</span><span class="warn">18 / 40</span></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Client</span><b>2 replies · 1 call booked</b></div>
                  </div>
                  Modules perfect. Pitches are behind — 22 more in 3 weeks. Use the Tuesday template, 2 a day. Woh call Friday ko hai na? Tell me how it goes 💪
                  <span class="tm">Mon 8:31 PM</span>
                </div>
                <div class="bub me">2 a day, done. Friday call is with a dental clinic — prepping now 🙏<span class="tm">8:44 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Track the input that predicts the win", "Pitches are behind, so the message is about pitches. Fix the behaviour and the client follows."],
            ["Specific rescue", "“2 a day, Tuesday template” is a plan, not a scolding. He leaves the chat knowing exactly what to do tonight."],
            ["Celebrate the leading signal", "“1 call booked” is highlighted. Momentum is the thing that gets him through week 6."]
          ],
          q: ["Make the scoreboard public. People do more for a board than for a bank balance.", "framework · win your money back"]
        },
        {
          k: "Day 56", t: "First invoice. Fee credited back.", ch: "Result card · cohort group", when: "Day 56",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 56 · Freelance Accelerator</div>
              <h5>Aarav, you won.</h5>
              <p>8/8 modules · 8/8 calls · 43 pitches · 1 client invoiced</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹18,000</b><span>first invoice</span></div><div><b>43</b><span>pitches</span></div><div><b>11</b><span>of 30 won</span></div></div>
              <div class="credit">Your win-back is live<b>₹25,000 credit</b>applied to the Mastermind · covers months 1–5 of 6 · valid 12 months</div>
              <div class="wymb-note">Screenshot of the invoice + 60-sec story posted to the cohort group.</div>
            </div></div>`,
          why: [
            ["The proof is the rule", "An uploaded invoice was Rule 04. Proof of result is collected by the mechanism, not chased afterwards."],
            ["11 of 30 is a great cohort", "Eleven winners fill the Mastermind; nineteen non-winners paid ₹25,000 and got the course. The offer profits both ways."],
            ["Result in his currency", "₹18,000 first invoice — not “completion”. That screenshot is next cohort's ad."]
          ],
          q: ["Winners are your ad creative. You paid for it with their own deposit.", "framework · win your money back"]
        },
        {
          k: "The Mastermind", t: "Credit pays five of six months.", ch: "In the group · Day-56 call", when: "Day 56",
          html: `<div class="choice">
            <div class="ch dim">
              <div class="k">Option A</div>
              <div class="p">₹25,000 <small>credit</small></div>
              <ul><li>Valid 12 months for any programme</li><li>Portal access ends today</li><li><b>Today:</b> one client, no pipeline yet.</li></ul>
              <div class="sub">Totally fine. Come back when ready.</div>
            </div>
            <div class="ch best">
              <div class="badge">What Ritu recommends</div>
              <div class="k">Option B</div>
              <div class="p">₹5,000 <small>/ month · 6-month Mastermind</small></div>
              <ul><li>Weekly hot-seat calls · pricing and retainers</li><li>Client pipeline reviewed every Thursday</li><li><b>Your ₹25,000 credit pays months 1–5</b></li></ul>
              <div class="cr">Pay ₹5,000 once, for month 6</div>
              <div class="sub">Starts Monday · first and only debit in month 6</div>
            </div>
          </div>`,
          why: [
            ["Both options honour the credit", "He never feels the win-back was a trick. Option A is real; Option B is simply better for him."],
            ["₹25,000 buys a Mastermind seat", "The credit converts a course buyer into a 6-month member without him spending anything new."],
            ["Peak excitement", "He just invoiced ₹18,000. Asking now, with his cohort watching, is the highest-conversion moment in the model."]
          ],
          q: ["The attraction offer isn't supposed to be the profit. It buys the customer at a profit so the continuity has someone to sell to.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 5 · PHYSICAL PRODUCT (adapted) ───────────────────────── */
    {
      label: "Product · 90-day kit",
      source: "How the book applies it to a physical product / e-commerce (adapted)",
      client: "Priya",
      about: "Priya, 31, Bengaluru, buys a ₹5,999 90-day hair-growth kit. She wins the price back as store credit if she logs daily use in the app and uploads Day 0 and Day 90 photos.",
      copy: `90-DAY HAIR KIT — USE IT DAILY, WIN ₹5,999 BACK
Pay ₹5,999 for the 90-day kit (serum + supplement + scalp tool).
Win the full price back as store credit if you:
1. Upload a Day 0 scalp photo in the app within 3 days of delivery
2. Log daily use — at least 80 of 90 days
3. Upload the Day 90 photo (same angle, same light)
Credit auto-applies to the 6-month refill subscription (₹1,499/month).`,
      steps: [
        {
          k: "The ad", t: "Use it daily. Get paid back.", ch: "Instagram", when: "Day −2",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">RT</div><div><div class="nm">rootlab.in</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">WOMEN 25–40 · HAIR FALL</div>
                <div><div class="big">90 days. Use it daily.<br><em>Win the ₹5,999 back.</em></div>
                <div class="sm">Log your routine in the app, upload two photos. Do that and the kit pays for itself.</div></div>
              </div>
              <div class="cta"><span>rootlab.in/90</span><b>See the 3 rules</b></div>
              <div class="cap"><b>rootlab.in</b> Results need consistency. This kit only works for people who use it. So does the offer.</div>
            </div></div></div>`,
          why: [
            ["Solve the product's real problem", "Kits fail in the drawer. Paying people to use it daily fixes adherence, which fixes results, which fixes reviews."],
            ["The rule is doable", "Two photos and a daily tap. Anyone can win — which is exactly why the ad converts."],
            ["Honest caption", "“Only works for people who use it” pre-frames non-winners as their own choice, not a scam."]
          ],
          q: ["Attach the guarantee to the customer's behaviour, not just your product. Then the guarantee makes your product work better.", "framework · win your money back"]
        },
        {
          k: "Product page", t: "Three rules under the price.", ch: "Product page", when: "Day −2",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">rootlab.in/90-day-kit</div></div>
            <div class="body">
              <div class="eyebrow">90-day hair kit · serum + supplement + tool</div>
              <h5>₹5,999. <em>Win it back on Day 90.</em></h5>
              <div style="font-size:13px;color:var(--dim)">Use the kit every day, log it in the app, upload two photos. Do all three and the full price comes back as store credit.</div>
              <div class="rules">
                <div class="rule"><div class="n">RULE 01</div><div class="t">Day 0 photo</div><div class="s">within 3 days of delivery</div></div>
                <div class="rule"><div class="n">RULE 02</div><div class="t">Log 80 of 90 days</div><div class="s">one tap in the app</div></div>
                <div class="rule"><div class="n">RULE 03</div><div class="t">Day 90 photo</div><div class="s">same angle, same light</div></div>
              </div>
              <div class="payout"><b>₹5,999</b><span>store credit, auto-applied to the refill subscription when you win.</span></div>
              <div class="btn">Buy the 90-day kit <small>Ships in 24 h · Bengaluru next-day</small></div>
            </div></div>`,
          why: [
            ["Conditions in the product description", "Not in a T&Cs link. A buyer sees the three rules where she sees the price."],
            ["80 of 90, not 90 of 90", "A little slack keeps one missed day from ending the game. Winners stay engaged; the business keeps them logging."],
            ["Credit routes to the subscription", "The payout destination is named on the page. Win-back becomes the refill plan's first four months."]
          ],
          q: ["Make winning likely for the customer who does the work, and impossible for the one who doesn't.", "framework · win your money back"]
        },
        {
          k: "Checkout", t: "Full price. Credit terms on receipt.", ch: "Shopify · Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Rootlab · order #R-11827</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>90-day hair kit</span><span>₹5,999</span></div>
              <div class="row"><span>Rootlab app · daily tracker</span><span>free</span></div>
              <div class="row"><span>Shipping</span><span>free</span></div>
              <div class="row tot"><span>Pay today</span><span>₹5,999</span></div>
              <div class="note"><b>Win-back on Day 90:</b> ₹5,999 store credit when you log 80+ days and upload Day 0 and Day 90 photos in the app.</div>
              <div class="go">Pay ₹5,999 · UPI / Card / COD</div>
              <div class="disc">No discount codes apply to the 90-day kit</div>
            </div></div>`,
          why: [
            ["No codes on this SKU", "Discounting shrinks the stake and the incentive. Full price is what makes the daily tap worth doing."],
            ["Terms on the order confirmation", "Rules travel with the order email. On Day 90 nobody is arguing about what was promised."],
            ["Cash today, refills later", "₹5,999 up front pays for acquisition. The refill subscription is where the margin lives."]
          ],
          q: ["Get paid before you deliver. The attraction offer must fund itself, or it isn't an attraction offer.", "framework · money models"]
        },
        {
          k: "Box insert", t: "The rules, inside the box.", ch: "Printed card · in the box", when: "Day 3 · delivery",
          html: `<div class="poster wymb-poster">
            <div class="k">Rootlab · 90-day kit</div>
            <h5>Your ₹5,999 <em>comes back on Day 90.</em></h5>
            <p><b>1.</b> Open the app · take your Day 0 photo today<br><b>2.</b> Tap “used” every day · 80 of 90 needed<br><b>3.</b> Day 90 photo · same angle, same light</p>
            <div class="big">Day 0 is today</div>
            <p>Credit lands in your account the day your Day 90 photo is approved.</p>
            <div class="fine">Scan the QR on the serum cap to open the app · support on WhatsApp 10 AM – 7 PM</div>
          </div>`,
          why: [
            ["The first action is immediate", "“Day 0 is today” gets the first photo done before the box is even empty. Starting is the hardest rule."],
            ["Physical reminder of a digital rule", "The card sits on the bathroom shelf next to the serum. The offer is visible where the habit happens."],
            ["Rules stated a third time", "Ad, page, box. Repetition is what makes the credit feel earned rather than argued."]
          ],
          q: ["Only ask for conditions you'd want them to do even if there were no money on the line.", "framework · win your money back"]
        },
        {
          k: "Day 45 check-in", t: "Streak alive. Halfway there.", ch: "WhatsApp", when: "Day 45",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">RL</div><div>Rootlab Care<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Hi Priya, halfway mark 🎉
                  <div class="board">
                    <div class="t">Win-back · Day 45 of 90</div>
                    <div class="r"><span>Days logged</span><b>42 / 45</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="miss"></i></div>
                    <div class="r"><span>Day 0 photo</span><b>approved</b></div>
                    <div class="r"><span>Misses allowed</span><span class="warn">7 left of 10</span></div>
                  </div>
                  Aap track pe ho. Serum ka refill Day 60 pe ship hoga — free, kit ka part hai. Day 90 photo: 4 Aug, reminder aayega.
                  <span class="tm">Sat 11:05 AM</span>
                </div>
                <div class="bub me">Missed 3 days on a trip 😅 back on it. Thanks!<span class="tm">11:40 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Show the slack, not the failure", "“7 misses left” tells her she's still winning after a trip. A binary pass/fail would have lost her."],
            ["Refill inside the offer", "The Day 60 refill is a delivery, not a sale. It also keeps the streak physically possible."],
            ["Date the finish line", "“Day 90 photo: 4 Aug” puts the win in her calendar. Vague endings don't get photographed."]
          ],
          q: ["This is where the offer either makes you money or makes you enemies. Nobody should be surprised on Day 90.", "framework · win your money back"]
        },
        {
          k: "Day 90", t: "Photo approved. Credit applied.", ch: "App · result screen", when: "Day 90",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 90 · Rootlab app</div>
              <h5>Priya, you won.</h5>
              <p>84 of 90 days logged · Day 0 and Day 90 photos approved</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>84</b><span>days logged</span></div><div><b>2 / 2</b><span>photos</span></div><div><b>₹5,999</b><span>credit</span></div></div>
              <div class="credit">Your win-back is live<b>₹5,999 store credit</b>auto-applied to the refill subscription · ₹1,499/month · months 1–4 covered</div>
              <div class="wymb-note">Before/after side-by-side ready to share (you choose) · 20% off for a friend inside.</div>
            </div></div>`,
          why: [
            ["Credit becomes the subscription", "₹5,999 covers four months of refills. The customer keeps using it; the cash never leaves the business."],
            ["The photos were the rules", "A before/after was collected by the mechanism itself. Share-worthy proof, with permission, is the next ad."],
            ["Refer at the peak", "She is most excited on Day 90. A friend code on the win screen turns one winner into two buyers."]
          ],
          q: ["Winners are your ad creative. You paid for it with their own deposit.", "framework · win your money back"]
        }
      ]
    }
  ]
});
