// Decoy offers — $100M Money Models, Section II "Attraction Offers".
// Mechanic: show a deliberately weaker (free/cheap) option beside the real one so the
// real one looks obviously better and the buyer self-selects into paying. The free
// option is honoured — it still captures the people who would never have paid.
window.OFFERS.push({
  slug: "decoy-offers",
  name: "Decoy offers",
  css: `
    .dcy-note{margin-top:14px;font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute);text-align:center}
    .dcy-wrap{display:flex;flex-direction:column;align-items:center;max-width:100%}
    .dcy-wrap .choice .ch{padding:18px 20px}
    .dcy-wrap .choice .ch .p{font-size:28px}
    .dcy-wrap .choice .ch li{padding:5px 0;font-size:12px}
    .dcy-pick{position:absolute;right:14px;top:14px;width:22px;height:22px;border-radius:50%;background:var(--green);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center}
    .dcy-pick.grey{background:var(--mute)}
    .ch.dim .dcy-pick{opacity:1}
    .dcy-strike{color:var(--coral);font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;margin-top:10px}
  `,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM · BHAVESH PICKS PAID ───────────────────────── */
    {
      label: "Alex's gym · free vs paid",
      source: "Alex's own gym, as told in the book · localised to Ahmedabad",
      client: "Bhavesh",
      about: "Bhavesh, 34, Satellite, Ahmedabad. Answers a FREE 6-week challenge ad, is shown the free version and the ₹12,000 version side by side, and picks paid — like most people do.",
      copy: `FREE 6-WEEK CHALLENGE (the decoy) vs PAID 6-WEEK CHALLENGE (the real offer)
Ad & page say: "Free 6-week challenge — book a consult."
In the consult, show BOTH on one sheet:
FREE — group classes only, off-peak slots (11am–4pm), no meal plan, no coach check-ins, no before/after scan.
₹12,000 — any slot, personalised meal plan, weekly WhatsApp check-in, InBody scan before/after, finish all 6 weeks = ₹12,000 back as credit.
Say: "Both work. One is free, one is paid. You choose."
Honour the free option fully. Never argue. Most pick paid; free-pickers get upsold later.`,
      steps: [
        {
          k: "The ad", t: "The word “free” does the pulling.", ch: "Instagram", when: "Day −4",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">IF</div><div><div class="nm">ironfit.ahd</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">AHMEDABAD · MEN 30+</div>
                <div><div class="big">6-week challenge.<br><em>Bilkul free.</em></div>
                <div class="sm">Satellite Road. 20 seats this batch. Book a 20-min consult to claim yours.</div></div>
              </div>
              <div class="cta"><span>ironfit.in/free</span><b>Book consult</b></div>
              <div class="cap"><b>ironfit.ahd</b> Haan, free. No card, no catch. Consult mein sab samjha denge. 👇</div>
            </div></div></div>`,
          why: [
            ["Free is the most clicked word", "The ad's only job is the consult booking. “Free” pulls in the widest net — including people who would never have paid."],
            ["The paid option is not in the ad", "It appears only once he is in the room, next to the free one. Outside, it would just be a price."],
            ["It has to be truly free", "No card, no catch. The decoy only works if the free option is real and honoured."]
          ],
          q: ["Advertise the free thing. Sell the paid thing beside it. The free option brings the crowd; the comparison does the selling.", "framework · decoy offers"]
        },
        {
          k: "The page", t: "Just book the consult.", ch: "Landing page", when: "Day −4",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">ironfit.in/free</div></div>
            <div class="body"><div class="eyebrow">Free 6-week challenge · Satellite, Ahmedabad</div>
            <h5>Six weeks. Free. <em>Bas ek consult book karo.</em></h5>
            <div style="font-size:13px;color:var(--dim)">20 minutes at the gym. We check where you are, show you the plan, you decide. No payment on this page.</div>
            <div class="rules">
              <div class="rule"><div class="n">STEP 01</div><div class="t">Pick a consult slot</div><div class="s">this week only</div></div>
              <div class="rule"><div class="n">STEP 02</div><div class="t">Come in, 20 min</div><div class="s">bring gym clothes</div></div>
              <div class="rule"><div class="n">STEP 03</div><div class="t">Choose your version</div><div class="s">start Monday</div></div>
            </div>
            <div class="payout"><b>₹0</b><span>to book. 20 free seats · 7 left for the Monday batch.</span></div>
            <div class="btn">Book my free consult <small>Thu 7 PM · Fri 7 PM · Sat 10 AM</small></div></div></div>`,
          why: [
            ["No price anywhere", "The page sells a 20-minute appointment. Prices belong on the one sheet he sees in person, side by side."],
            ["“Choose your version” is planted", "Step 03 tells him there is a choice coming. He arrives expecting to pick, not to be pitched."],
            ["Scarcity is honest", "20 seats, 7 left — batch size is real. Free offers need a limit or nobody books today."]
          ],
          q: ["The consult is where the decoy lives. Get them in the room; do not try to explain two options in an ad.", "framework · decoy offers"]
        },
        {
          k: "Confirmation", t: "Thursday 7 PM. Bring shoes.", ch: "WhatsApp", when: "Day −3",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">K</div><div>Coach Kunal · IronFit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Bhavesh bhai, consult confirmed 👍<br><b>Thu 7:00 PM · IronFit, Satellite Rd</b><br>Gym clothes + shoes le aana — 10 min floor test hoga.<span class="tm">Mon 6:12 PM</span></div>
                <div class="bub">Ek baat pehle bata doon: challenge ke 2 versions hain — ek free, ek paid. Dono chalte hain. Thursday dono dikhaunga, aap choose karna. No pressure.<span class="tm">6:13 PM</span></div>
                <div class="bub me">Done. Thursday 7 pe milte hain.<span class="tm">6:20 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The choice is pre-announced", "“Two versions, both work, you choose” — said 3 days early. No ambush in the room, so no defensiveness."],
            ["Floor test raises show-rate", "A physical task to prepare for makes the appointment real. He shows up dressed to train."],
            ["Coach, not salesperson", "The same person who will train him confirms the slot. The consult feels like session zero."]
          ],
          q: ["Tell them there will be a paid option before they arrive. Surprise is what makes decoys feel like bait-and-switch.", "framework · decoy offers"]
        },
        {
          k: "The consult", t: "“Both work. You pick.”", ch: "In person · sales office", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">K</div><div><b>Coach Kunal</b><small>IronFit · after the floor test</small></div></div>
            <q>Bhavesh, 6 weeks mein 5–6 kg realistic hai. Ab do raaste hain — dono se result aata hai. <em>Ek free hai, ek ₹12,000 ka.</em> Main dono ek sheet pe dikhata hoon. Aap dekho, aap choose karo. Jo bhi lo, Monday se start.</q>
          </div>`,
          why: [
            ["Result first, options second", "He is told the outcome is realistic for him before any price appears. Now both paths lead somewhere he wants."],
            ["“Both work” is said out loud", "The free version is not rubbished. If it were useless, the comparison would feel like a trick."],
            ["The coach steps back", "“Aap choose karo.” No push. The sheet, not the person, will do the persuading."]
          ],
          q: ["Never sell against the free option. Present it fairly and let the gap in the list do the talking.", "framework · decoy offers"]
        },
        {
          k: "The two options", t: "One sheet. Two columns. Obvious.", ch: "Printed sheet · on the desk", when: "Day 0",
          html: `<div class="dcy-wrap"><div class="choice">
            <div class="ch dim">
              <div class="k">Option A · Free challenge</div>
              <div class="p">₹0 <small>6 weeks</small></div>
              <ul>
                <li>Group classes · off-peak only (11 AM–4 PM)</li>
                <li>Gym floor access on class days</li>
                <li class="no">Personalised meal plan</li>
                <li class="no">Weekly coach check-in on WhatsApp</li>
                <li class="no">InBody scan before &amp; after</li>
                <li class="no">Money-back credit on completion</li>
              </ul>
              <div class="sub">Self-driven. Bring your own diet.</div>
            </div>
            <div class="ch best">
              <div class="badge">Most people choose this</div>
              <div class="k">Option B · Paid challenge</div>
              <div class="p">₹12,000 <small>6 weeks</small></div>
              <ul>
                <li>All classes · <b>any slot, incl. 6–9 PM</b></li>
                <li>Gym floor access every day</li>
                <li><b>Personalised meal plan</b> (Gujarati veg friendly)</li>
                <li><b>Weekly coach check-in</b> on WhatsApp</li>
                <li><b>InBody scan</b> before &amp; after</li>
                <li>Finish all 6 weeks → <b>₹12,000 back as credit</b></li>
              </ul>
              <div class="cr">Same 6 weeks. Everything that makes it work.</div>
            </div>
          </div><div class="dcy-note">Same sheet, every consult · he ticks one</div></div>`,
          why: [
            ["The decoy is real but stripped", "Off-peak slots, no food plan, no check-ins. It is a genuine offer — just visibly missing the things that cause results."],
            ["Struck-through lines are the sale", "Four crossed lines on the left are what he is buying on the right. No script needed."],
            ["He chooses, so he commits", "Nobody sold him ₹12,000. He compared two options and picked the better one. Buyer's remorse is far lower."]
          ],
          q: ["Free with nothing next to it is a cost. Free next to paid is a decoy — and the decoy makes the paid option the obvious choice.", "framework · decoy offers"]
        },
        {
          k: "Payment", t: "He picked B. Pays today.", ch: "Razorpay · at the desk", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>IronFit Ahmedabad</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Challenge · Option B</span><span>₹12,000</span></div>
              <div class="row"><span>Meal plan + weekly check-ins + InBody ×2</span><span>included</span></div>
              <div class="row"><span>Option A (free)</span><span>not selected</span></div>
              <div class="row tot"><span>Pay today</span><span>₹12,000</span></div>
              <div class="note"><b>On Day 42:</b> complete all 6 weeks and ₹12,000 comes back to you as IronFit credit.</div>
              <div class="go">Pay ₹12,000 · UPI / Card</div>
              <div class="disc">Batch starts Monday · 6 seats left</div>
            </div>
          </div>`,
          why: [
            ["The unpicked option stays on the receipt", "“Option A (free) — not selected.” He sees, again, that he chose this. Decisions made in the open stick."],
            ["Cash on Day 0", "The free ad just produced a ₹12,000 sale. The ad spend is covered by this batch, not next year's memberships."],
            ["Credit, not cash, on completion", "The ₹12,000 win-back keeps the money inside the gym and becomes his membership deposit later."]
          ],
          q: ["A free offer that collects cash the same day is not a free offer. It is an attraction offer wearing a free headline.", "framework · attraction offers"]
        },
        {
          k: "Week 1 check-in", t: "The paid stuff shows up fast.", ch: "WhatsApp", when: "Day 7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">K</div><div>Coach Kunal · IronFit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Week 1 done, Bhavesh bhai 👇
                  <div class="board">
                    <div class="t">Challenge tracker · Day 7 of 42</div>
                    <div class="r"><span>Sessions</span><b>4 / 4</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i></div>
                    <div class="r"><span>Meal plan days</span><b>6 / 7</b></div>
                    <div class="r"><span>Weight</span><b>86.0 → 84.9 kg</b></div>
                    <div class="r"><span>Credit status</span><b>on track</b></div>
                  </div>
                  Sunday ka cheat meal chal jaata hai 😄 Meal plan week 2 attach kar raha hoon — thepla swap added.
                  <span class="tm">Mon 8:40 AM</span>
                </div>
                <div class="bub me">Thepla swap 🙏 Monday 7 PM slot pakka.<span class="tm">8:52 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Deliver the crossed-out lines first", "Meal plan, check-in, tracker — the exact items missing from Option A arrive in week 1. He feels the difference he paid for."],
            ["Track the credit, not just the weight", "“Credit status: on track” keeps the ₹12,000 in his head. It is why he shows up on a bad day."],
            ["This is the upsell proof", "Free-pickers in the same batch see these check-ins happening. That is how the next example starts."]
          ],
          q: ["The decoy gets the yes. Delivery of everything the decoy lacked is what earns the referral.", "framework · decoy offers"]
        }
      ]
    },

    /* ───────────────────────── 2 · THE FREE-PICKER · SUNITA UPGRADES LATER ───────────────────────── */
    {
      label: "Free-picker · upsold in week 3",
      source: "Alex's gym · what happens to the people who choose free (adapted)",
      client: "Sunita",
      about: "Sunita, 41, Bopal, Ahmedabad. Same consult, same sheet — she picks the free option. She would never have paid on Day 0. Three weeks later, she does.",
      copy: `THE FREE-PICKER PATH
Honour the free option fully — same sheet, same welcome, no sulking.
Give them a written pass: exactly what free includes and excludes.
Put them in the same building as paid challengers (scoreboard on the wall, weigh-ins on Saturday).
Week 3 check-in: show their number vs the paid group's number.
Offer the upgrade pro-rated: remaining 3 weeks at half price (₹6,000), everything paid gets, starts Monday.
No guilt, no “I told you so”. The result gap does the selling.`,
      steps: [
        {
          k: "The two options", t: "She ticks the free box.", ch: "Printed sheet · on the desk", when: "Day 0",
          html: `<div class="dcy-wrap"><div class="choice">
            <div class="ch dim">
              <div class="dcy-pick">✓</div>
              <div class="k">Option A · Free challenge</div>
              <div class="p">₹0 <small>6 weeks</small></div>
              <ul>
                <li>Group classes · off-peak only (11 AM–4 PM)</li>
                <li>Gym floor access on class days</li>
                <li class="no">Personalised meal plan</li>
                <li class="no">Weekly coach check-in on WhatsApp</li>
                <li class="no">InBody scan before &amp; after</li>
                <li class="no">Money-back credit on completion</li>
              </ul>
              <div class="sub">Self-driven. Bring your own diet.</div>
            </div>
            <div class="ch best" style="opacity:.9">
              <div class="badge">Most people choose this</div>
              <div class="k">Option B · Paid challenge</div>
              <div class="p">₹12,000 <small>6 weeks</small></div>
              <ul>
                <li>All classes · <b>any slot, incl. 6–9 PM</b></li>
                <li>Gym floor access every day</li>
                <li><b>Personalised meal plan</b></li>
                <li><b>Weekly coach check-in</b> on WhatsApp</li>
                <li><b>InBody scan</b> before &amp; after</li>
                <li>Finish all 6 weeks → <b>₹12,000 back as credit</b></li>
              </ul>
              <div class="cr">Same 6 weeks. Everything that makes it work.</div>
            </div>
          </div><div class="dcy-note">“Abhi free wala try karti hoon.” — Sunita</div></div>`,
          why: [
            ["Some will pick free. Good.", "She was never going to pay ₹12,000 today. Without the free option she would have left. Now she is a member of the building."],
            ["No pushback from the coach", "“Perfect, Monday 11 AM batch.” The instant the free option is argued with, the whole offer looks like bait."],
            ["The paid column stays in her memory", "She has read the six lines she is not getting. That list resurfaces on its own in week 3."]
          ],
          q: ["The free option is not a loss. It is how you keep the people who would otherwise have walked, so you can sell them later.", "framework · decoy offers"]
        },
        {
          k: "Free pass", t: "Free — in writing, no fine print.", ch: "Paper · at the desk", when: "Day 0",
          html: `<div class="doc">
            <div class="stamp">FREE · OPTION A</div>
            <div class="k" style="padding-right:150px">IronFit · challenge pass</div>
            <h5>Sunita's free challenge</h5>
            <div class="chk"><div class="b"></div><div><b>Group classes, Mon/Wed/Fri 11 AM or 3 PM</b><span>18 sessions · off-peak batch · 6 weeks</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Gym floor access on class days</b><span>11 AM–4 PM · bring your own water bottle</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Not included</b><span>Meal plan · WhatsApp check-ins · InBody scans · completion credit. Upgrade available any time, pro-rated.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Cost</b><span>₹0. Nothing due on Day 42. No auto-conversion.</span></div></div>
            <div class="sig"><div class="l">Sunita Patel</div><small>3 JUN → 14 JUL</small></div>
          </div>`,
          why: [
            ["Write down what free excludes", "The three missing items are printed, not hinted. She cannot later feel tricked, and the upgrade line is already there."],
            ["“No auto-conversion”", "The free option must not secretly become a paid one. Trust here is what makes the week-3 upgrade a yes."],
            ["Pro-rated upgrade is pre-announced", "One sentence. When the coach offers it later, it is a reminder — not a pitch."]
          ],
          q: ["Say what free is, say what it is not, sign it. The decoy only works if the decoy is honest.", "framework · decoy offers"]
        },
        {
          k: "Week 1 schedule", t: "Welcome. Off-peak batch.", ch: "WhatsApp", when: "Day 1",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">K</div><div>Coach Kunal · IronFit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Welcome Sunita ji 🙌 Free batch schedule:<br><b>Mon / Wed / Fri · 11:00 AM</b><br>Trainer: Priyanka. Reach 10 min early on day 1.<span class="tm">Sun 7:05 PM</span></div>
                <div class="bub">Diet ke liye koi doubt ho toh Google se better hai kisi dietician se poochna — hum free batch mein plan nahi dete, but saturday weigh-in wall dekh lena, motivation milta hai 💪<span class="tm">7:06 PM</span></div>
                <div class="bub me">Thank you! Monday 11 pe aa jaungi.<span class="tm">7:30 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Same warmth as a paid member", "Named trainer, exact slot, early arrival tip. A cold welcome would confirm “free = second class” and she would vanish."],
            ["The gap is named, gently", "“We don't give a plan in the free batch” — true, stated once, not rubbed in."],
            ["Point her at the wall", "The Saturday weigh-in wall is where paid results are public. She is invited to look."]
          ],
          q: ["Treat the free customer like a customer. They are the cheapest lead you will ever have — you already paid for them.", "framework · decoy offers"]
        },
        {
          k: "The wall", t: "Paid results, in public.", ch: "Poster · studio wall", when: "Day 13 · Saturday",
          html: `<div class="poster">
            <div class="k">IronFit · Saturday weigh-in</div>
            <h5>Week 2 <em>leaderboard</em></h5>
            <p>Paid challenge batch · InBody scan · Day 14 of 42</p>
            <div class="big">−3.1 kg</div>
            <p>Bhavesh M. · 86.0 → 82.9 kg · 8/8 sessions · meal plan 13/14 days</p>
            <div class="fine">Also this week: Hetal S. −2.6 kg · Ravi P. −2.4 kg · Nikita J. −2.2 kg &nbsp;·&nbsp; Everyone on this wall is on track for ₹12,000 back.</div>
          </div>`,
          why: [
            ["Proof she can walk past", "Real names, real numbers, every Saturday. Nothing is said to her; the wall speaks."],
            ["The credit line is the hook", "“On track for ₹12,000 back” — the paid option is starting to look cheaper than free."],
            ["Her own number is private", "No free-batch wall. She measures herself against it at home, which is stronger than being told."]
          ],
          q: ["Let free customers watch paid customers win. Envy converts better than any script.", "framework · decoy offers"]
        },
        {
          k: "Week 3 check-in", t: "Her number vs their number.", ch: "WhatsApp", when: "Day 21",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">K</div><div>Coach Kunal · IronFit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Sunita ji, 3 weeks ho gaye — 8/9 classes, respect 🙏
                  <div class="board">
                    <div class="t">Day 21 of 42</div>
                    <div class="r"><span>You (free batch)</span><b>−1.2 kg</b></div>
                    <div class="r"><span>Paid batch average</span><b>−3.8 kg</b></div>
                    <div class="r"><span>Difference</span><span class="warn">meal plan + check-ins</span></div>
                  </div>
                  Baaki 3 weeks upgrade karna ho toh: <b>₹6,000</b> (half of ₹12,000). Meal plan Monday se, evening slot, InBody scan, weekly check-in. Finish karo toh ₹6,000 credit wapas. Sochke batao — free batch mein bhi welcome ho.
                  <span class="tm">Mon 9:10 AM</span>
                </div>
                <div class="bub me">Kar deti hoon. Link bhejo.<span class="tm">9:41 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Two numbers, side by side, again", "The decoy structure repeats: her result next to theirs. The gap is the crossed-out lines from Day 0, now in kilos."],
            ["Pro-rated, not punished", "Half the weeks, half the price. She is not paying for the 3 weeks she did free."],
            ["“Free mein bhi welcome ho”", "The exit stays open. That sentence is what lets her say yes without feeling cornered."]
          ],
          q: ["The upsell to a free customer is the same decoy, replayed with their own data.", "framework · decoy offers"]
        },
        {
          k: "Upgrade", t: "₹6,000. Week 4 starts paid.", ch: "Razorpay · WhatsApp link", when: "Day 21",
          html: `<div class="pay">
            <div class="h"><span>IronFit Ahmedabad</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Upgrade · Option A → Option B</span><span>₹12,000</span></div>
              <div class="row"><span>Meal plan + check-ins + evening slot + InBody</span><span>included</span></div>
              <div class="row"><span>Weeks 1–3 already done free (3 of 6)</span><span>−₹6,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹6,000</span></div>
              <div class="note"><b>On Day 42:</b> complete weeks 4–6 and ₹6,000 comes back as IronFit credit.</div>
              <div class="go">Pay ₹6,000 · UPI</div>
              <div class="disc">Meal plan arrives Monday 7 AM</div>
            </div>
          </div>`,
          why: [
            ["A ₹0 lead became ₹6,000", "The free ad, the free pass, three free weeks — all of it was the cost of acquiring this payment. Still profitable."],
            ["Credit mechanic carried over", "Same rule as the paid batch, pro-rated. She now has a reason to finish, and a deposit for membership."],
            ["Count these in the offer's maths", "Day-0 payers plus week-3 upgraders is the real conversion rate of a decoy offer. Judge it on both."]
          ],
          q: ["Free in, paid later is still paid. Measure the decoy on total cash per lead, not on Day-0 conversion alone.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 3 · SERVICE BUSINESS · FREE AUDIT VS DONE-FOR-YOU ───────────────────────── */
    {
      label: "Agency · free audit vs done-for-you",
      source: "How the book applies it to service businesses (adapted) · Pune",
      client: "Rohan",
      about: "Rohan, 31, runs a D2C skincare brand from Pune. Answers a FREE website audit ad. The audit is real — and it is handed over beside a ₹40,000 done-for-you option.",
      copy: `FREE CONVERSION AUDIT (decoy) vs DONE-FOR-YOU FIX (real offer) — agency
Ad: "Free conversion audit for D2C brands doing ₹5L+/month."
Deliver the audit live on a 30-min call. Then show both:
FREE — 12-page PDF of the 10 issues, you implement, no support, no follow-up.
₹40,000 — we implement all 10 in 14 days, weekly report, 60-day tracking, second audit free.
The free PDF is complete and useful. Never withhold findings to force the upgrade.
Free-pickers get a 30-day follow-up: "How many of the 10 did you fix?"`,
      steps: [
        {
          k: "The ad", t: "Free audit. Real findings.", ch: "Instagram", when: "Day −5",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">GL</div><div><div class="nm">growthlab.pune</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">D2C BRANDS · ₹5L+/MONTH</div>
                <div><div class="big">Your website is leaking orders.<br><em>Free audit shows where.</em></div>
                <div class="sm">10 fixes, ranked by revenue impact. 30-min call. No pitch inside the audit.</div></div>
              </div>
              <div class="cta"><span>growthlab.in/audit</span><b>Claim audit</b></div>
              <div class="cap"><b>growthlab.pune</b> 5 audits a week, that's it. Founder-only calls. 👇</div>
            </div></div></div>`,
          why: [
            ["Free + specific", "“10 fixes ranked by revenue impact” is a deliverable, not a discovery call. Free things need to sound like things."],
            ["Qualify in the tag", "₹5L+/month filters out brands that cannot afford the paid option. A decoy needs buyers who can pick either side."],
            ["“No pitch inside the audit”", "Says it upfront. The options come after the value, on a separate screen — and he knows that."]
          ],
          q: ["The free version must be something a stranger would pay for. Otherwise the paid version is compared to nothing.", "framework · decoy offers"]
        },
        {
          k: "The page", t: "Book the call. That's all.", ch: "Landing page", when: "Day −5",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">growthlab.in/audit</div></div>
            <div class="body"><div class="eyebrow">Free conversion audit · D2C · Pune / remote</div>
            <h5>We audit your store live. <em>You keep the findings.</em></h5>
            <div style="font-size:13px;color:var(--dim)">30 minutes on Google Meet. We screen-share your store and walk the 10 biggest leaks. You get the PDF either way.</div>
            <div class="rules">
              <div class="rule"><div class="n">STEP 01</div><div class="t">Share store URL</div><div class="s">+ last 30 days' orders</div></div>
              <div class="rule"><div class="n">STEP 02</div><div class="t">30-min live audit</div><div class="s">founder on the call</div></div>
              <div class="rule"><div class="n">STEP 03</div><div class="t">Pick: DIY or done-for-you</div><div class="s">decide on the call</div></div>
            </div>
            <div class="payout"><b>₹0</b><span>for the audit. 5 slots this week · 2 left.</span></div>
            <div class="btn">Book my audit call <small>Tue 11 AM · Wed 4 PM</small></div></div></div>`,
          why: [
            ["“You keep the findings” — either way", "Removes the fear that free means a teaser. The audit is the full thing; only implementation is sold."],
            ["Choice named in Step 03", "DIY or done-for-you. He arrives knowing the shape of the decision, so the two cards feel expected."],
            ["Ask for data before the call", "Orders data makes the audit specific — and specific findings make the ₹40,000 option concrete."]
          ],
          q: ["Deliver the free thing completely. Then put the paid thing next to it. Do not blend the two into one pitch.", "framework · decoy offers"]
        },
        {
          k: "The audit call", t: "Ten leaks, ranked. Then two paths.", ch: "Google Meet", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">A</div><div><b>Aditya · GrowthLab</b><small>minute 27 of the audit call</small></div></div>
            <q>Rohan, that's all ten — cart page and the mobile checkout are 60% of the leak. PDF is in your inbox already. <em>Two ways to fix it: you do it from the PDF, free, or we do it in 14 days for ₹40,000.</em> I'll put both on screen. Honestly, either works.</q>
          </div>`,
          why: [
            ["Value delivered before the options", "All ten findings, PDF already sent. Nothing is held hostage, so the choice that follows is clean."],
            ["“Either works” is true", "A capable founder can fix ten items from a PDF. The decoy is not fake; it is just slower and lonelier."],
            ["The price is spoken plainly", "₹40,000 said once, next to “free”. No anchoring games — the list on the next screen does the comparing."]
          ],
          q: ["Show the whole result for free. Charge for doing it. That is the service-business decoy.", "framework · decoy offers"]
        },
        {
          k: "The two options", t: "DIY or done-for-you.", ch: "Screen-share · last slide", when: "Day 0",
          html: `<div class="dcy-wrap"><div class="choice">
            <div class="ch dim">
              <div class="k">Option A · Do it yourself</div>
              <div class="p">₹0 <small>you implement</small></div>
              <ul>
                <li>12-page audit PDF · all 10 fixes</li>
                <li>Screenshots + priority order</li>
                <li class="no">Implementation (dev + design)</li>
                <li class="no">Weekly progress report</li>
                <li class="no">60-day conversion tracking</li>
                <li class="no">Second audit at day 60</li>
              </ul>
              <div class="sub">Typical founder: 3–6 weeks, nights and weekends.</div>
            </div>
            <div class="ch best">
              <div class="badge">Most brands choose this</div>
              <div class="k">Option B · Done for you</div>
              <div class="p">₹40,000 <small>one-time</small></div>
              <ul>
                <li>Same 12-page audit PDF</li>
                <li><b>All 10 fixes implemented in 14 days</b></li>
                <li>Shopify dev + design included</li>
                <li><b>Weekly progress report</b> on WhatsApp</li>
                <li><b>60-day conversion tracking</b></li>
                <li><b>Second audit at day 60</b> · free</li>
              </ul>
              <div class="cr">Live in 14 days. You never open the theme editor.</div>
            </div>
          </div><div class="dcy-note">Shown on the call · link to both sent after</div></div>`,
          why: [
            ["Left column is honest and heavy", "“3–6 weeks, nights and weekends” is a fair description of DIY, not a scare line. It is what tips the comparison."],
            ["Same first line on both", "Both start with the same PDF. The paid column is visibly “everything on the left, plus the doing”."],
            ["Time is the crossed-out feature", "For a founder, the decoy costs ₹0 and 40 hours. The paid option costs ₹40,000 and 0 hours. That is the real choice."]
          ],
          q: ["The decoy makes the customer price their own time. Most people, shown the list, decide their time is worth more.", "framework · decoy offers"]
        },
        {
          k: "Payment", t: "₹40,000. Kick-off tomorrow.", ch: "Razorpay · link on WhatsApp", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>GrowthLab Pune</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Done-for-you · 10 fixes · 14 days</span><span>₹40,000</span></div>
              <div class="row"><span>Weekly report + 60-day tracking + day-60 audit</span><span>included</span></div>
              <div class="row"><span>Option A (DIY, free)</span><span>not selected</span></div>
              <div class="row tot"><span>Pay today</span><span>₹40,000</span></div>
              <div class="note"><b>Starts tomorrow 10 AM.</b> Fix #1 (mobile checkout) goes live within 72 hours.</div>
              <div class="go">Pay ₹40,000 · UPI / Card / Net banking</div>
              <div class="disc">GST invoice emailed · 2 project slots left this month</div>
            </div>
          </div>`,
          why: [
            ["First fix in 72 hours", "The paid option's advantage was speed. Prove it immediately — the first crossed-out line delivered before the weekend."],
            ["Free option printed as “not selected”", "He sees his own decision again. It was a comparison, not a pitch."],
            ["Paid on the same day as free", "The free audit generated ₹40,000 in one call. That funds the next five free audits."]
          ],
          q: ["The audit was the ad spend. The done-for-you is the offer. Free is the headline, not the business model.", "framework · attraction offers"]
        },
        {
          k: "Day 14 report", t: "Ten fixes live. Numbers moving.", ch: "WhatsApp", when: "Day 14",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">A</div><div>Aditya · GrowthLab<small>online</small></div></div>
              <div class="body">
                <div class="bub">Rohan, 14 days — all 10 live ✅
                  <div class="board">
                    <div class="t">Fix tracker · Day 14 of 14</div>
                    <div class="r"><span>Fixes shipped</span><b>10 / 10</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i></div>
                    <div class="r"><span>Mobile checkout rate</span><b>1.9% → 2.6%</b></div>
                    <div class="r"><span>Cart abandonment</span><b>74% → 66%</b></div>
                    <div class="r"><span>60-day tracking</span><b>started</b></div>
                  </div>
                  Day-60 audit booked for 12 Aug. Weekly report continues every Monday.
                  <span class="tm">Fri 6:15 PM</span>
                </div>
                <div class="bub me">🔥 Sending you 2 founder friends this week.<span class="tm">6:40 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Report against the crossed-out lines", "Shipped, tracked, second audit booked — each item that DIY did not include, proven done."],
            ["Numbers a founder can repeat", "1.9 → 2.6% is what he will say to the two friends. Referrals come from specifics."],
            ["Day-60 audit is the next decoy", "It will be delivered free — beside a retainer option. Same mechanic, one level up."]
          ],
          q: ["Every free deliverable is a chance to place a paid option beside it. Repeat the decoy at every stage of the relationship.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 4 · INFO / COACHING · FREE MASTERCLASS VS LIVE COHORT ───────────────────────── */
    {
      label: "Course · free class vs live cohort",
      source: "How the book applies it to info & coaching businesses (adapted) · Bengaluru",
      client: "Priya",
      about: "Priya, 27, Koramangala, Bengaluru. Registers for a FREE 90-min money masterclass. On the last slide she is offered the free recording — or the ₹4,999 live 4-week cohort, side by side.",
      copy: `FREE MASTERCLASS (decoy) vs LIVE COHORT (real offer) — info/coaching
Ad: "Free 90-min masterclass: your first ₹10,000 SIP, explained live."
Deliver the full class. Last slide shows both options:
FREE — recording + PDF cheat sheet, watch alone, no Q&A, no templates, no group.
₹4,999 — 4 live weekly sessions, Excel templates, WhatsApp group, 1:1 portfolio review, recording of everything.
Price open for 48 hours after the class. Free-pickers get the recording link the same night, and the offer again at day 7.`,
      steps: [
        {
          k: "The ad", t: "Free class. Real topic.", ch: "Instagram", when: "Day −6",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">MM</div><div><div class="nm">meera.moneyclass</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">FREE LIVE CLASS · SUN 11 AM</div>
                <div><div class="big">Your first ₹10,000 SIP.<br><em>Explained, live, free.</em></div>
                <div class="sm">90 minutes. Which fund, which app, how much. For 25–35s earning ₹50K+.</div></div>
              </div>
              <div class="cta"><span>meeramoney.in/free</span><b>Save my seat</b></div>
              <div class="cap"><b>meera.moneyclass</b> Bilkul free. Recording milegi. Sunday 11 AM — chai leke aana. 👇</div>
            </div></div></div>`,
          why: [
            ["Free class with a concrete outcome", "“Your first ₹10,000 SIP” is a thing she will have done by the end. Free must promise a result, not “learn about”."],
            ["“Recording milegi”", "She is told the free version includes the recording. The free option is generous on purpose — it makes the paid one honest."],
            ["Audience named", "25–35, ₹50K+. The paid cohort is ₹4,999; the ad targets people who could pick either card."]
          ],
          q: ["Give away the best free thing you can afford. The paid offer is measured against it, so it must be measured against something good.", "framework · decoy offers"]
        },
        {
          k: "Registration", t: "Seat saved. Sunday 11 AM.", ch: "Landing page", when: "Day −6",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">meeramoney.in/free</div></div>
            <div class="body"><div class="eyebrow">Free masterclass · Sunday 11:00 AM · Zoom</div>
            <h5>Start your first SIP <em>during the class.</em></h5>
            <div style="font-size:13px;color:var(--dim)">90 minutes, live. Meera opens her own app on screen. You leave with one fund chosen and one SIP set.</div>
            <div class="rules">
              <div class="rule"><div class="n">PART 01</div><div class="t">Which fund &amp; why</div><div class="s">3 rules, no jargon</div></div>
              <div class="rule"><div class="n">PART 02</div><div class="t">Set the SIP live</div><div class="s">app walkthrough</div></div>
              <div class="rule"><div class="n">PART 03</div><div class="t">What happens next</div><div class="s">two ways to continue</div></div>
            </div>
            <div class="payout"><b>₹0</b><span>to attend. Recording + cheat sheet sent to everyone who shows up.</span></div>
            <div class="btn">Save my seat <small>1,000-seat Zoom · 812 registered</small></div></div></div>`,
          why: [
            ["Part 03 is the decoy slot", "“Two ways to continue” is on the agenda. The offer is a scheduled part of the class, not an ambush at the end."],
            ["Show-up bonus is the free deliverable", "Recording + cheat sheet for attendees only. Raises show-rate, and defines exactly what the free option contains."],
            ["Real capacity number", "812 of 1,000 registered. Free offers get treated as worthless unless something is visibly limited."]
          ],
          q: ["Put the paid option on the agenda. People who know it is coming stay for it; people who are surprised by it leave.", "framework · decoy offers"]
        },
        {
          k: "Reminder", t: "Link + one thing to keep open.", ch: "WhatsApp", when: "Day 0 · 10:30 AM",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">M</div><div>Meera's Money Class<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Priya, 30 min to go ⏰<br><b>Zoom: meeramoney.in/live</b><br>Keep your investing app installed &amp; KYC done — we set the SIP live in Part 02.<span class="tm">Sun 10:30 AM</span></div>
                <div class="bub">Part 03 mein 2 options dikhaungi — ek free (recording + cheat sheet), ek paid (4-week live cohort). Dono bataungi, aap decide karna. Koi bhi compulsion nahi.<span class="tm">10:31 AM</span></div>
                <div class="bub me">Joining 🙌<span class="tm">10:52 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Second pre-announcement", "Free vs paid named again, 30 minutes before. By the last slide the choice is familiar, not sudden."],
            ["Preparation = participation", "App installed, KYC done — she will actually set a SIP live. A result during the free class is the proof for the paid one."],
            ["“Koi compulsion nahi”", "The decoy needs zero pressure to work. Pressure makes people defend the free option; a list makes them leave it."]
          ],
          q: ["A decoy is a comparison, not a close. Remove every ounce of pressure and let the two columns do the work.", "framework · decoy offers"]
        },
        {
          k: "The last slide", t: "Free recording or live cohort.", ch: "Zoom · Part 03", when: "Day 0 · 12:25 PM",
          html: `<div class="dcy-wrap"><div class="choice">
            <div class="ch dim">
              <div class="k">Option A · Keep going free</div>
              <div class="p">₹0 <small>recording</small></div>
              <ul>
                <li>Today's full recording (90 min)</li>
                <li>1-page SIP cheat sheet PDF</li>
                <li class="no">4 live weekly sessions</li>
                <li class="no">Excel budget + goal templates</li>
                <li class="no">WhatsApp group with Meera</li>
                <li class="no">1:1 portfolio review (20 min)</li>
              </ul>
              <div class="sub">Watch alone. Figure out the rest yourself.</div>
            </div>
            <div class="ch best">
              <div class="badge">Most attendees choose this</div>
              <div class="k">Option B · 4-week live cohort</div>
              <div class="p">₹4,999 <small>one-time</small></div>
              <ul>
                <li>Today's recording + cheat sheet</li>
                <li><b>4 live sessions</b> · Sundays 11 AM</li>
                <li><b>Excel templates</b> · budget, goals, SIP ladder</li>
                <li><b>WhatsApp group</b> · 100 people, 4 weeks</li>
                <li><b>1:1 portfolio review</b> with Meera</li>
                <li>Recordings of everything · lifetime</li>
              </ul>
              <div class="cr">Price open till Tuesday 11:59 PM · then ₹7,999</div>
            </div>
          </div><div class="dcy-note">Link to both options in the Zoom chat</div></div>`,
          why: [
            ["The free column is genuinely useful", "Recording + cheat sheet is a real gift. That is why the paid column looks like a fair upgrade and not a paywall."],
            ["The first line matches", "Both include today's recording. Everything below it on the right is what ₹4,999 buys. Nothing on the left is hidden."],
            ["Deadline on the paid side only", "The free option never expires; the ₹4,999 price does. Urgency belongs to the thing you want them to pick."]
          ],
          q: ["Make the free option something they would be happy with — and the paid option something they would be happier with.", "framework · decoy offers"]
        },
        {
          k: "Payment", t: "₹4,999. Cohort starts Sunday.", ch: "Razorpay · from the Zoom chat", when: "Day 0 · 12:40 PM",
          html: `<div class="pay">
            <div class="h"><span>Meera's Money Class</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>4-week live cohort · Option B</span><span>₹4,999</span></div>
              <div class="row"><span>Templates + group + 1:1 review + recordings</span><span>included</span></div>
              <div class="row"><span>Option A (free recording)</span><span>included anyway</span></div>
              <div class="row tot"><span>Pay today</span><span>₹4,999</span></div>
              <div class="note"><b>Price holds till Tue 11:59 PM.</b> Cohort 14 starts Sunday 11 AM · 100 seats · 61 taken.</div>
              <div class="go">Pay ₹4,999 · UPI / Card</div>
              <div class="disc">Change your mind before session 1? Full refund, keep the recording.</div>
            </div>
          </div>`,
          why: [
            ["“Included anyway”", "The receipt says the free option is inside the paid one. She loses nothing by upgrading — the decoy was a floor, not a fork."],
            ["Refund before session 1", "Removes the last reason to pick free “to be safe”. The free option and the safe option are now the same option: paid."],
            ["Seats counted live", "61 of 100 in the chat, in real time. Social proof that others read the same two columns and chose the same."]
          ],
          q: ["The paid option should contain the free option. Then choosing paid is never a risk, only an addition.", "framework · decoy offers"]
        },
        {
          k: "Cohort welcome", t: "Templates tonight. Group is open.", ch: "WhatsApp group", when: "Day 0 · 7 PM",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">C</div><div>Cohort 14 · Meera's Money Class<small>94 participants</small></div></div>
              <div class="body">
                <div class="bub">Welcome, Cohort 14 🎉 Everything Option A didn't have, starting now:<br>📎 Budget + goal + SIP-ladder Excel (pinned)<br>🗓 Session 1: Sunday 11 AM · “Emergency fund in 90 days”<br>📅 1:1 review slots open Wednesday — book in the pinned link.<span class="tm">7:02 PM</span></div>
                <div class="bub">Priya, SIP set live in class today? Drop a screenshot (hide the amount) — first 10 get a shout-out Sunday 👏<span class="tm">7:04 PM</span></div>
                <div class="bub me">Done ✅ ₹10K in an index fund, first debit 5th.<span class="tm">7:15 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Deliver the crossed-out lines the same day", "Templates, group, 1:1 slots — the three items the free option lacked, all live within hours. The upgrade feels instantly right."],
            ["Recordings still go to the free-pickers", "Tonight 700 people get the free recording, with the ₹4,999 link again at day 7. The decoy keeps working after the class."],
            ["Her win is the next ad", "“SIP set live in class” screenshots become Sunday's proof — and next month's free-masterclass ad creative."]
          ],
          q: ["The people who chose free are not lost. They are on your list, they saw the paid column, and they will see it again.", "framework · money models"]
        }
      ]
    }
  ]
});
