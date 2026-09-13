// Feature Downsells — $100M Money Models, Section IV "Downsell Offers", chapter "Feature Downsells".
// Mechanic: when the price is the objection, do NOT discount the same product. Remove features
// (your 1:1 time, bonuses, speed, the done-for-you parts, quantity) until the price fits what the
// customer can pay. They still buy, the full product keeps its price integrity, and every feature
// you removed becomes a later upsell.
// Example 1 is Alex's gym as told in the chapter (localised). Examples 2–4 are marked "(adapted)".
window.OFFERS.push({
  slug: "feature-downsells",
  name: "Feature downsells",
  section: "Downsell",
  css: `
    .fd-wrap{display:flex;flex-direction:column;align-items:center;max-width:100%}
    .fd-wrap .choice .ch{padding:18px 20px}
    .fd-wrap .choice .ch .p{font-size:28px}
    .fd-wrap .choice .ch li{padding:5px 0;font-size:12px}
    .fd-wrap .choice .ch .k{padding-right:70px}
    .fd-cap{margin-top:12px;font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute);text-align:center}
    .fd-doc .chk{padding:7px 0}
    .fd-doc .tot{display:flex;justify-content:space-between;align-items:center;margin-top:14px;padding-top:12px;border-top:1px solid var(--ink);font-size:13px}
    .fd-doc .tot b{font-family:var(--serif);font-size:24px}
    .fd-doc .price{font-family:var(--mono);font-size:11px;color:var(--green-d);white-space:nowrap;margin-left:auto;padding-left:10px}
    .fd-doc .chk{align-items:center}
    .fd-doc .chk > div:not(.b){flex:1}
    .fd-pay .row .off{color:var(--mute);text-decoration:line-through}
    .fd-note{font-size:12px;color:var(--dim);margin-top:10px;line-height:1.5}
    .fd-tight .wa{min-height:0}
    .fd-tight .wa .body{gap:6px;padding:9px 8px}
    .fd-tight .bub{padding:6px 9px}
    .fd-tight .board{margin:4px 0;padding:6px 9px}
    .fd-tight .board .r{padding:2px 0}
    .fd-say q{font-size:18px}
    .fd-mail .h .s{font-size:14px}
    .fd-mail .body{font-size:12.5px}
    .fd-rows{margin:8px 0 0;text-align:left}
    .fd-rows .r{display:flex;justify-content:space-between;align-items:center;padding:6px 2px;border-top:1px dashed var(--line);font-size:12.5px}
    .fd-rows .r:first-child{border-top:0}
    .fd-rows .r b{font-family:var(--mono);font-size:11.5px;color:var(--green-d)}
  `,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the chapter, localised) ───────────────────────── */
    {
      label: "Alex's gym · stripped",
      source: "Alex's own gym, as told in the chapter · localised to Ahmedabad",
      client: "Sunita",
      about: "Sunita, 42, Prahlad Nagar. Hears the full ₹36,000 12-week programme, says it's too much. The coach removes 1:1 sessions, the meal plan and supplements one by one until ₹15,000 fits — never touches the price of the full programme. Indian persona; mechanism as in the book.",
      copy: `FEATURE DOWNSELL — 12-week programme, Fit Studio
Full: ₹36,000 · 12 wk · 1:1 training 3×/wk · custom meal plan · supplements · weekly check-in · group classes
"Too expensive?" → Do NOT discount. Remove features until the price fits:
− 1:1 training (→ group classes only)  − custom meal plan  − supplement pack
Stripped: ₹15,000 · 12 wk · unlimited group classes · weekly check-in · app
Full programme price never changes. Each removed feature is offered back later:
Meal plan ₹6,000 (week 4) · 1:1 block ₹12,000 (week 8) · supplements ₹3,000.`,
      steps: [
        {
          k: "The full pitch", t: "The whole programme, at full price.", ch: "In person · consult room", when: "Day 0",
          html: `<div class="say fd-say">
            <div class="who"><div class="av">V</div><div><b>Coach Vikram</b><small>Fit Studio · consult</small></div></div>
            <q>Sunita ji, here's the whole thing. Twelve weeks. You train with me one-on-one three times a week, I write your meal plan every fortnight, supplements are in the box, and we check your numbers every Monday. <em>₹36,000 for all of it.</em> That's the programme that gets 8–10 kilos off.</q>
          </div>`,
          why: [
            ["Always lead with the full product", "The downsell only works if she has heard the complete, full-price version first. You can't remove features she never saw."],
            ["Every feature is named", "1:1, meal plan, supplements, check-ins. Later each of these is a line she can decide to keep or drop — they have to be visible now."],
            ["Full price, said plainly", "₹36,000 is stated without apology. This number never gets discounted, so it has to be anchored cleanly."]
          ],
          q: ["Present the full offer first. Nobody can choose a smaller version of something they haven't seen in full.", "framework · feature downsells"]
        },
        {
          k: "Price sheet", t: "Every feature has a price.", ch: "Paper · consult room", when: "Day 0",
          html: `<div class="doc fd-doc">
            <div class="k">Fit Studio · 12-week programme</div>
            <h5>What's inside ₹36,000</h5>
            <div class="chk"><div class="b"></div><div><b>1:1 training with Vikram</b><span>3× a week · 36 sessions</span></div><span class="price">₹18,000</span></div>
            <div class="chk"><div class="b"></div><div><b>Custom meal plan</b><span>rewritten every 2 weeks</span></div><span class="price">₹6,000</span></div>
            <div class="chk"><div class="b"></div><div><b>Supplement pack</b><span>whey + multivitamin · 12 weeks</span></div><span class="price">₹3,000</span></div>
            <div class="chk"><div class="b"></div><div><b>Weekly check-in + app</b><span>Monday weigh-in · InBody scan</span></div><span class="price">₹3,000</span></div>
            <div class="chk"><div class="b"></div><div><b>Unlimited group classes</b><span>6 AM – 9 PM · any batch</span></div><span class="price">₹6,000</span></div>
            <div class="tot"><span>Full programme</span><b>₹36,000</b></div>
          </div>`,
          why: [
            ["Itemise, so removal is possible", "A single bundled price can only be discounted. Five priced lines can be crossed out one at a time."],
            ["The 1:1 time is the biggest line", "Coach time is the most expensive thing on the sheet. It's the first feature to go when the budget is tight."],
            ["Her eyes do the math", "She sees that ₹36,000 is the sum of real things, not a number pulled from the air. Price integrity starts here."]
          ],
          q: ["Break the offer into parts with prices. Then a lower budget means fewer parts, not a cheaper version of the same parts.", "framework · feature downsells"]
        },
        {
          k: "The no", t: "“Which of these can you skip?”", ch: "In person · consult room", when: "Day 0",
          html: `<div class="say fd-say">
            <div class="who"><div class="av">V</div><div><b>Coach Vikram</b><small>after she says “bahut zyada hai”</small></div></div>
            <q>Theek hai — ₹36,000 is a lot. I won't cut the price on this, it's what the full programme costs. But tell me what you can do this month, and <em>let's take out the pieces you can live without.</em> One-on-one is the biggest — if you train in the group instead, that's ₹18,000 gone straight away.</q>
          </div>`,
          why: [
            ["Refuse the discount out loud", "“I won't cut the price on this” protects every member who paid full price and keeps ₹36,000 real for next month."],
            ["Ask for her number, not a smaller yes", "“What can you do this month?” makes the budget the constraint. Then features are matched to it."],
            ["Remove your own time first", "1:1 sessions cost the gym the most to deliver. Removing them drops price the furthest at the lowest cost to the business."]
          ],
          q: ["When price is the objection, change what they get — not what it costs. Discounting teaches customers your price was a lie.", "framework · feature downsells"]
        },
        {
          k: "Full vs stripped", t: "Same programme, fewer pieces.", ch: "Paper · consult room", when: "Day 0",
          html: `<div class="fd-wrap"><div class="choice">
            <div class="ch">
              <div class="k">Full programme</div>
              <div class="p">₹36,000 <small>· 12 weeks</small></div>
              <ul>
                <li><b>1:1 training</b> · 3× a week</li>
                <li><b>Custom meal plan</b> · every 2 weeks</li>
                <li><b>Supplement pack</b></li>
                <li>Weekly check-in · InBody scan · app</li>
                <li>Unlimited group classes</li>
              </ul>
              <div class="sub">Price stays. Nothing removed, nothing discounted.</div>
            </div>
            <div class="ch best">
              <div class="badge">Fits ₹15,000</div>
              <div class="k">Stripped programme</div>
              <div class="p">₹15,000 <small>· 12 weeks</small></div>
              <ul>
                <li class="no">1:1 training · 3× a week</li>
                <li class="no">Custom meal plan</li>
                <li class="no">Supplement pack</li>
                <li>Weekly check-in · InBody scan · app</li>
                <li>Unlimited group classes</li>
              </ul>
              <div class="cr">Add any crossed line back, any week</div>
            </div>
          </div><div class="fd-cap">Two columns · the right one is what she can pay today</div></div>`,
          why: [
            ["Crossed out, not hidden", "She sees exactly what ₹21,000 less buys her. The strike-through lines are the future upsell menu, in her own handwriting."],
            ["Full column stays on the page", "₹36,000 is still there, untouched. The stripped version is a smaller product, not a sale."],
            ["Both columns end in a yes", "She was leaving. Now she's choosing between two ways to start. The gym gets a member either way."]
          ],
          q: ["The downsell isn't a worse deal — it's a smaller product at an honest price. The full product keeps its value.", "framework · feature downsells"]
        },
        {
          k: "Payment", t: "₹15,000 today. Removed lines visible.", ch: "Razorpay · at the desk", when: "Day 0",
          html: `<div class="pay fd-pay">
            <div class="h"><span>Fit Studio Ahmedabad</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>12-week programme · group + check-ins + app</span><span>₹15,000</span></div>
              <div class="row"><span class="off">1:1 training · 36 sessions</span><span class="off">₹18,000</span></div>
              <div class="row"><span class="off">Custom meal plan</span><span class="off">₹6,000</span></div>
              <div class="row"><span class="off">Supplement pack</span><span class="off">₹3,000</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹15,000</span></div>
              <div class="note"><b>Removed items can be added any week</b> at the prices above — no re-joining fee.</div>
              <div class="go">Pay ₹15,000 · UPI / Card</div>
            </div></div>`,
          why: [
            ["The receipt shows what she didn't buy", "Three crossed lines with prices. Every time she opens this receipt she is reminded there is more, and what it costs."],
            ["“Discount: —” stays on the bill", "Zero discount, in writing. If she meets a full-price member, both of them see a fair price for what each bought."],
            ["Cash today from a lost sale", "Without the feature downsell this is ₹0 and a walk-out. With it: ₹15,000 and a member to upsell for 12 weeks."]
          ],
          q: ["A downsell turns a no into a smaller yes. Some of the money beats none of the money — as long as the price stays honest.", "framework · downsell offers"]
        },
        {
          k: "Week 4 upsell", t: "The meal plan comes back.", ch: "WhatsApp", when: "Week 4",
          html: `<div class="phone fd-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">V</div><div>Coach Vikram · Fit Studio<small>online</small></div></div>
              <div class="body">
                <div class="bub">Sunita ji, week 4 scan 👇
                  <div class="board">
                    <div class="t">12-week programme · day 28</div>
                    <div class="r"><span>Classes</span><b>14 attended</b></div>
                    <div class="r"><span>Weight</span><b>74.0 → 72.4 kg</b></div>
                    <div class="r"><span>Body fat</span><span class="warn">unchanged</span></div>
                  </div>
                  Training is perfect. Food is what's holding the fat. Remember the meal plan we took out? <b>₹6,000, 8 weeks left</b> — I'll write it tonight if you say yes.
                  <span class="tm">Mon 9:10 AM</span>
                </div>
                <div class="bub me">Haan, add kar do. UPI bhej rahi hoon 🙏<span class="tm">9:26 AM ✓✓</span></div>
                <div class="bub">Done ✅ Plan by 8 PM. Supplements next month if you want — no rush.<span class="tm">9:27 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The removed feature is the upsell", "She already knows the meal plan exists and costs ₹6,000 — she crossed it out herself. No new pitch is needed."],
            ["Timed to a real gap", "Body fat unchanged at week 4 is the moment food matters. The upsell solves a problem she can now see."],
            ["Same price as the sheet", "₹6,000, exactly as on Day 0. Consistency is what makes the next add-back easy too."]
          ],
          q: ["Everything you strip out on the way down is something you can sell on the way up.", "framework · feature downsells"]
        },
        {
          k: "Week 12", t: "She ended up buying the full thing.", ch: "Result card · studio wall", when: "Week 12",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Week 12 · Fit Studio Ahmedabad</div>
              <h5>Sunita, 7.8 kg down.</h5>
              <p>Started at ₹15,000 · added meal plan wk 4 · 1:1 block wk 8</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹15,000</b><span>day 0</span></div><div><b>₹6,000</b><span>week 4</span></div><div><b>₹12,000</b><span>week 8</span></div></div>
              <div class="credit">Total over 12 weeks<b>₹33,000</b>from a customer who said no to ₹36,000 on Day 0</div>
              <div class="fd-note">Next: 6-month membership offered at the week-12 scan.</div>
            </div></div>`,
          why: [
            ["The stripped buyer became a near-full buyer", "₹15,000 + ₹6,000 + ₹12,000 = ₹33,000. Nearly the full price, paid in pieces she chose as she saw results."],
            ["Nobody was discounted", "The full-price members paid ₹36,000. Sunita paid for what she bought. Price integrity held for everyone."],
            ["The downsell fed the continuity", "Twelve weeks of habit and three yeses. The membership ask at week 12 is the easiest one yet."]
          ],
          q: ["A feature downsell is a slower path to the full price, not a permanent smaller one.", "framework · feature downsells"]
        }
      ]
    },

    /* ───────────────────────── 2 · GYM LAUNCH · DONE-FOR-YOU → DO-IT-YOURSELF (adapted) ───────────────────────── */
    {
      label: "Gym Launch · DFY→DIY",
      source: "Gym Launch, per the chapter's done-for-you → do-it-yourself framing (adapted — verify the prices and inclusions against the book)",
      client: "Dave",
      about: "Dave owns a 180-member gym in Ohio. The full done-for-you launch is $16,000 — too much this quarter. The team removes the parts they do for him (ads run, on-site sales training, 1:1 coach) and sells the playbook + weekly group call at $4,000. US persona kept; numbers illustrative.",
      copy: `FEATURE DOWNSELL — Gym Launch, done-for-you → do-it-yourself
Full DFY launch: $16,000 · we run your ads · on-site sales training · 1:1 coach 12 wks · scripts, playbook, weekly group call
"Can't do $16k?" → Remove the done-for-you parts, not the price:
− we run your ads   − on-site sales training   − 1:1 coach
DIY launch: $4,000 · full playbook + ad templates + scripts · weekly group call · community
Full price unchanged. Removed parts offered back: ads managed $2,500/mo · 1:1 coach $6,000.`,
      steps: [
        {
          k: "The full pitch", t: "Done-for-you, sixteen thousand.", ch: "Zoom · sales call", when: "Day 0",
          html: `<div class="say fd-say">
            <div class="who"><div class="av">GL</div><div><b>Gym Launch · closer</b><small>Sales call · minute 32</small></div></div>
            <q>Dave, the full launch is us doing it with you. We run your ads, we fly out and train your front desk to sell, you get a coach on the phone every week for twelve weeks, and you get the whole playbook and scripts. <em>Sixteen thousand, and most gyms make it back in the first six weeks.</em></q>
          </div>`,
          why: [
            ["Done-for-you is sold first", "The most complete, most expensive version goes first. The downsell later only makes sense against this."],
            ["Deliverables are separable", "Ads run, on-site training, 1:1 coach, playbook. Each is a thing that can be taken away without breaking the others."],
            ["Price stated once, straight", "$16,000 is the price of all of it. It will not move; only the list of what's included will."]
          ],
          q: ["Present the full offer first. Nobody can choose a smaller version of something they haven't seen in full.", "framework · feature downsells"]
        },
        {
          k: "The no", t: "Take out what we do for you.", ch: "Zoom · sales call", when: "Day 0",
          html: `<div class="say fd-say">
            <div class="who"><div class="av">GL</div><div><b>Gym Launch · closer</b><small>after “not this quarter”</small></div></div>
            <q>Got it. I'm not going to knock money off the sixteen — that's what done-for-you costs. But the expensive part is <em>us doing the work</em>. What if you do the work and we give you every tool we'd have used? Same playbook, same scripts, same weekly call — just no ads managed, no flight, no private coach. That's four thousand.</q>
          </div>`,
          why: [
            ["Say no to the discount, yes to the sale", "“I'm not going to knock money off” keeps $16,000 honest for every gym that paid it."],
            ["Remove labour, keep IP", "The done-for-you pieces cost the company payroll and flights. The playbook costs nothing to deliver again. Price drops 75%; margin barely moves."],
            ["Names what's gone", "No ads managed, no flight, no private coach. Each is now a thing Dave knows exists and can buy later."]
          ],
          q: ["The first features to remove are the ones that cost you the most to deliver — usually your time and your team's.", "framework · feature downsells"]
        },
        {
          k: "Full vs stripped", t: "Same playbook. You do the doing.", ch: "Screen share · proposal", when: "Day 0",
          html: `<div class="fd-wrap"><div class="choice">
            <div class="ch">
              <div class="k">Done-for-you launch</div>
              <div class="p">$16,000 <small>· 12 weeks</small></div>
              <ul>
                <li><b>We run your ads</b> · 12 weeks</li>
                <li><b>On-site sales training</b> · 2 days</li>
                <li><b>1:1 coach</b> · weekly call</li>
                <li>Playbook · ad templates · scripts</li>
                <li>Weekly group call · community</li>
              </ul>
              <div class="sub">Price unchanged. Most gyms pick this.</div>
            </div>
            <div class="ch best">
              <div class="badge">Fits $4,000</div>
              <div class="k">Do-it-yourself launch</div>
              <div class="p">$4,000 <small>· 12 weeks</small></div>
              <ul>
                <li class="no">We run your ads</li>
                <li class="no">On-site sales training</li>
                <li class="no">1:1 coach · weekly call</li>
                <li>Playbook · ad templates · scripts</li>
                <li>Weekly group call · community</li>
              </ul>
              <div class="cr">Upgrade to any crossed line, any week</div>
            </div>
          </div><div class="fd-cap">The bottom two lines are identical · only the labour is gone</div></div>`,
          why: [
            ["Identical lines at the bottom", "Playbook and group call appear in both columns, word for word. Dave sees he gets the real system, not a lite one."],
            ["Crossed lines are priced later", "The three strikes are exactly the three upsells of weeks 2–8. Dave has already agreed they're worth something."],
            ["$16,000 stays on screen", "The full column is never dimmed or discounted. It's the target, not a decoy."]
          ],
          q: ["The downsell isn't a worse deal — it's a smaller product at an honest price. The full product keeps its value.", "framework · feature downsells"]
        },
        {
          k: "Checkout", t: "$4,000. No discount line.", ch: "Stripe", when: "Day 0",
          html: `<div class="pay fd-pay">
            <div class="h"><span>Gym Launch · DIY launch</span><b>STRIPE · SECURE</b></div>
            <div class="body">
              <div class="row"><span>DIY launch · playbook + templates + group call</span><span>$4,000</span></div>
              <div class="row"><span class="off">Ads managed · 12 weeks</span><span class="off">$7,500</span></div>
              <div class="row"><span class="off">On-site sales training</span><span class="off">$3,000</span></div>
              <div class="row"><span class="off">1:1 coach · 12 weeks</span><span class="off">$6,000</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>$4,000</span></div>
              <div class="note"><b>Add any removed item later</b> at the price shown. Your $4,000 counts toward the full launch.</div>
              <div class="go">Pay $4,000</div>
            </div></div>`,
          why: [
            ["The removed items sit on the invoice", "Three priced lines he didn't buy. The upsell menu ships with the receipt."],
            ["$4,000 counts toward full", "A credit clause makes upgrading feel like finishing a purchase, not starting a new one."],
            ["$4,000 today instead of $0", "The call was ending in a no. Now it ends with cash and a customer inside the community for 12 weeks."]
          ],
          q: ["A downsell turns a no into a smaller yes. Some of the money beats none of the money — as long as the price stays honest.", "framework · downsell offers"]
        },
        {
          k: "Onboarding email", t: "What you have. What you don't.", ch: "Email", when: "Day 1",
          html: `<div class="mail fd-mail">
            <div class="h"><div class="s">Dave, your DIY launch is live — here's the plan</div><div class="f">From: Gym Launch onboarding · to Dave</div></div>
            <div class="body">
              <p>Welcome. You have the full playbook, the ad templates, the front-desk scripts, and Thursday's group call (4 PM ET).</p>
              <p><b>Week 1:</b> launch the “6-week challenge” ad from template 3. <b>Week 2:</b> run the phone script on every lead. <b>Week 3:</b> first report on the group call.</p>
              <p>You're doing the ads and the selling yourself. If either stalls, reply to this email — the managed-ads and 1:1 coach options are the same price as on your invoice, any week.</p>
              <div class="cta">Open the playbook</div>
            </div></div>`,
          why: [
            ["Honest about the gap", "“You're doing the ads and the selling yourself” — said plainly. If he struggles, it's not a surprise and the fix is already named."],
            ["The upgrade path is one reply", "No new sales call needed. The removed features sit one email away at the price he already saw."],
            ["Deliver the DIY version fully", "The playbook and call are real. The downsell must succeed on its own or the upsell becomes a rescue, not a choice."]
          ],
          q: ["Deliver the stripped version completely. A downsell that under-delivers kills the upsell that follows it.", "framework · feature downsells"]
        },
        {
          k: "Week 3 upsell", t: "Ads stalled. Managed ads offered.", ch: "Slack · community DM", when: "Week 3",
          html: `<div class="phone fd-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">C</div><div>Coach Chris · Gym Launch<small>community DM</small></div></div>
              <div class="body">
                <div class="bub">Dave — saw your week-3 report 👇
                  <div class="board">
                    <div class="t">DIY launch · week 3</div>
                    <div class="r"><span>Ad spend</span><b>$1,100</b></div>
                    <div class="r"><span>Leads</span><b>19</b></div>
                    <div class="r"><span>Booked</span><span class="warn">4 · script not run</span></div>
                  </div>
                  Leads are fine, follow-up is the leak. Two options: run the script at 2× calls this week, or hand the ads + follow-up build to us — <b>$2,500/mo managed</b>, same as your invoice.
                  <span class="tm">Mon 10:14 AM</span>
                </div>
                <div class="bub me">Let's do managed for 8 weeks. Send the link.<span class="tm">10:31 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Upsell the feature he removed", "Managed ads were line two on the invoice. He's not being sold something new; he's adding something back."],
            ["Trigger is his own data", "4 booked from 19 leads makes the case. The coach names the problem and offers the removed feature as the fix."],
            ["Same price as Day 0", "$2,500/mo matches the invoice. Consistency keeps trust, and keeps the 1:1 coach upsell open for week 6."]
          ],
          q: ["Everything you strip out on the way down is something you can sell on the way up.", "framework · feature downsells"]
        }
      ]
    },

    /* ───────────────────────── 3 · AGENCY · LESS SCOPE, LESS SPEED (adapted) ───────────────────────── */
    {
      label: "Agency · scope and speed",
      source: "How the framework applies to a service business / agency (adapted)",
      client: "Nikhil",
      about: "Nikhil runs a dental clinic in Pune. The full ₹60,000/month retainer (ads + creatives + follow-up callers + weekly call + 48-hour turnaround) is beyond him. The agency removes the follow-up callers, the weekly call and the fast turnaround; ₹25,000/month fits. Features return one at a time.",
      copy: `FEATURE DOWNSELL — Clinic growth retainer
Full: ₹60,000/mo · ads managed · 8 creatives/mo · follow-up callers · weekly strategy call · 48-h turnaround
"Too much per month?" → Remove features, keep the rate card:
− follow-up callers (₹20,000)  − weekly call (₹8,000 → monthly report)  − 48-h turnaround (→ 7 days)
Stripped: ₹25,000/mo · ads managed · 4 creatives/mo · monthly report · 7-day turnaround
Add-backs at rate-card price, any month. No discount on the full retainer, ever.`,
      steps: [
        {
          k: "Proposal", t: "The full retainer, itemised.", ch: "Proposal page", when: "Day −2",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">leadflow.in/proposal/nikhil-dental</div></div>
            <div class="body">
              <div class="eyebrow">Growth retainer · Dr. Nikhil · Pune</div>
              <h5>₹60,000 / month. <em>Everything, done for you.</em></h5>
              <div class="fd-rows">
                <div class="r"><span>Ads managed · Meta + Google</span><b>₹16,000</b></div>
                <div class="r"><span>8 creatives a month</span><b>₹8,000</b></div>
                <div class="r"><span>Follow-up callers · every lead within 5 min</span><b>₹20,000</b></div>
                <div class="r"><span>Weekly 30-min strategy call</span><b>₹8,000</b></div>
                <div class="r"><span>48-hour turnaround on requests</span><b>₹8,000</b></div>
              </div>
              <div class="payout"><b>₹60,000</b><span>per month · 3-month minimum · each line priced so you can see what it's worth.</span></div>
            </div></div>`,
          why: [
            ["Rate card, not a bundle", "Five lines with prices. This is what lets the agency remove instead of discount when the budget is smaller."],
            ["Speed is a feature", "48-hour turnaround has a price. Slower service is a legitimate, cheaper product — not a worse agency."],
            ["Full price is anchored first", "₹60,000 with every deliverable is what Nikhil reads before any smaller version exists."]
          ],
          q: ["Break the offer into parts with prices. Then a lower budget means fewer parts, not a cheaper version of the same parts.", "framework · feature downsells"]
        },
        {
          k: "The no", t: "Which lines can wait a month?", ch: "Zoom · proposal call", when: "Day 0",
          html: `<div class="say fd-say">
            <div class="who"><div class="av">A</div><div><b>Arjun · Leadflow</b><small>after “₹60,000 monthly is heavy”</small></div></div>
            <q>Fair. I won't discount the ₹60,000 — that's the rate card and every clinic pays it. What I can do is <em>remove lines until it fits ₹25,000</em>. Callers are the big one; you call leads yourself for now. Weekly call becomes a monthly report. And we work on a 7-day turnaround, not 48 hours. Ads and creatives stay.</q>
          </div>`,
          why: [
            ["Discount refused, in his hearing", "“Every clinic pays it” tells him the price is real and protects every other retainer client."],
            ["Remove people, then speed", "Callers cost payroll; weekly calls cost the founder's time; fast turnaround costs priority. Remove the expensive-to-deliver first."],
            ["Core stays intact", "Ads and creatives — the parts that actually generate leads — stay. The stripped product still works."]
          ],
          q: ["When price is the objection, change what they get — not what it costs. Discounting teaches customers your price was a lie.", "framework · feature downsells"]
        },
        {
          k: "Full vs stripped", t: "Same ads. Slower, and you call.", ch: "Screen share", when: "Day 0",
          html: `<div class="fd-wrap"><div class="choice">
            <div class="ch">
              <div class="k">Full retainer</div>
              <div class="p">₹60,000 <small>/ month</small></div>
              <ul>
                <li><b>Follow-up callers</b> · every lead in 5 min</li>
                <li><b>Weekly strategy call</b></li>
                <li><b>48-hour turnaround</b></li>
                <li>Ads managed · Meta + Google</li>
                <li>8 creatives a month</li>
              </ul>
              <div class="sub">Rate card. No discount.</div>
            </div>
            <div class="ch best">
              <div class="badge">Fits ₹25,000</div>
              <div class="k">Stripped retainer</div>
              <div class="p">₹25,000 <small>/ month</small></div>
              <ul>
                <li class="no">Follow-up callers</li>
                <li class="no">Weekly call · monthly report instead</li>
                <li class="no">48-hour turnaround · 7 days instead</li>
                <li>Ads managed · Meta + Google</li>
                <li>4 creatives a month</li>
              </ul>
              <div class="cr">Add any line back from next month</div>
            </div>
          </div><div class="fd-cap">Less scope, less speed, less access · same rate card</div></div>`,
          why: [
            ["Three kinds of removal", "People (callers), access (weekly call), speed (turnaround). The chapter's levers, side by side on one card."],
            ["Quantity halves, not price", "8 creatives → 4 creatives. Less of the same thing is a feature downsell too."],
            ["The full column stays lit", "₹60,000 is not dimmed. It's the version he is meant to grow into."]
          ],
          q: ["Less time, less access, less speed, less done-for-you — remove any of these before you touch the price.", "framework · feature downsells"]
        },
        {
          k: "Invoice", t: "₹25,000. Removed lines priced.", ch: "Razorpay · invoice", when: "Day 0",
          html: `<div class="pay fd-pay">
            <div class="h"><span>Leadflow · month 1</span><b>INVOICE · LF-2210</b></div>
            <div class="body">
              <div class="row"><span>Ads managed + 4 creatives + monthly report</span><span>₹25,000</span></div>
              <div class="row"><span class="off">Follow-up callers</span><span class="off">₹20,000</span></div>
              <div class="row"><span class="off">Weekly strategy call</span><span class="off">₹8,000</span></div>
              <div class="row"><span class="off">48-hour turnaround</span><span class="off">₹8,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹25,000</span></div>
              <div class="note"><b>Rate card holds for 6 months.</b> Any removed line can be added from the next invoice.</div>
              <div class="go">Pay ₹25,000 · UPI / NEFT</div>
              <div class="disc">GST extra · ad spend billed by Meta directly</div>
            </div></div>`,
          why: [
            ["Crossed lines travel with the bill", "Every month the invoice shows what ₹35,000 more would buy. The upsell is on the paperwork, not in a pitch."],
            ["Rate card locked", "“Holds for 6 months” means the add-back price is predictable. He can plan the upgrade instead of dreading a quote."],
            ["₹25,000/mo beats a lost client", "The alternative was no retainer. Now the agency has a paying client with a visible path to ₹60,000."]
          ],
          q: ["A downsell turns a no into a smaller yes. Some of the money beats none of the money — as long as the price stays honest.", "framework · downsell offers"]
        },
        {
          k: "Month 2 report", t: "Leads fine. Follow-up leaking.", ch: "WhatsApp", when: "Month 2",
          html: `<div class="phone fd-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">LF</div><div>Leadflow · Dr. Nikhil<small>Arjun, Sneha, you</small></div></div>
              <div class="body">
                <div class="bub">Month 2 report, Doctor 👇
                  <div class="board">
                    <div class="t">Stripped retainer · month 2</div>
                    <div class="r"><span>Leads</span><b>61</b></div>
                    <div class="r"><span>Called within 1 hr</span><span class="warn">22 of 61</span></div>
                    <div class="r"><span>Booked</span><b>14</b></div>
                  </div>
                  39 leads never got a call in the first hour. Our callers do that for ₹20,000 — the line on your invoice. Want it from month 3?
                  <span class="tm">Wed 6:02 PM</span>
                </div>
                <div class="bub me">Yes. Reception can't keep up. Add callers from month 3.<span class="tm">6:40 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Data makes the upsell", "22 of 61 called is the case for callers. The removed feature is offered at the moment its absence costs him money."],
            ["Same ₹20,000 as the invoice", "No new negotiation. He's reinstating a line he already saw priced."],
            ["One feature at a time", "Callers now; weekly call and turnaround later. Each add-back is a small yes on the way to the full retainer."]
          ],
          q: ["Everything you strip out on the way down is something you can sell on the way up.", "framework · feature downsells"]
        },
        {
          k: "Month 3 invoice", t: "Two lines back. Full price near.", ch: "Razorpay · invoice", when: "Month 3",
          html: `<div class="pay fd-pay">
            <div class="h"><span>Leadflow · month 3</span><b>INVOICE · LF-2298</b></div>
            <div class="body">
              <div class="row"><span>Ads managed + 4 creatives + monthly report</span><span>₹25,000</span></div>
              <div class="row"><span>Follow-up callers <small style="color:var(--green-d)">· added</small></span><span>₹20,000</span></div>
              <div class="row"><span>48-hour turnaround <small style="color:var(--green-d)">· added</small></span><span>₹8,000</span></div>
              <div class="row"><span class="off">Weekly strategy call</span><span class="off">₹8,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹53,000</span></div>
              <div class="note">One line left to the full retainer. Same rate card as Day 0.</div>
              <div class="go">Pay ₹53,000 · UPI / NEFT</div>
            </div></div>`,
          why: [
            ["₹25,000 → ₹53,000 in 90 days", "Two add-backs at the rate-card price. The stripped client is now within one line of the full retainer."],
            ["Never discounted, always upgraded", "Every rupee on this bill matches the Day 0 rate card. Full-price clients and Nikhil are on the same terms."],
            ["Retention rises with each line", "Callers and fast turnaround are things he now can't do without. Each add-back makes leaving harder."]
          ],
          q: ["A feature downsell is a slower path to the full price, not a permanent smaller one.", "framework · feature downsells"]
        }
      ]
    },

    /* ───────────────────────── 4 · COURSE / COACHING · REMOVE ACCESS AND BONUSES (adapted) ───────────────────────── */
    {
      label: "Course · self-paced version",
      source: "How the framework applies to coaching / education (adapted)",
      client: "Meera",
      about: "Meera, 29, Jaipur, wants to freelance. The ₹40,000 accelerator (8 live calls, 1:1 coaching, portfolio review, community, bonuses) is too much. The coach removes the live access and bonuses; the ₹9,000 self-paced version fits. Live calls are added back in week 3.",
      copy: `FEATURE DOWNSELL — Freelance Accelerator
Full: ₹40,000 · 8 modules · 8 live calls · 4× 1:1 coaching · portfolio review · community · bonus templates + client list
"Too much?" → Remove access and bonuses, keep the price of the full cohort:
− live calls  − 1:1 coaching  − portfolio review  − bonus client list  (community read-only)
Self-paced: ₹9,000 · 8 modules + assignments · community (read-only) · templates
Add-backs: live calls ₹8,000 · 1:1 ×4 ₹15,000 · portfolio review ₹5,000. Full cohort never discounted.`,
      steps: [
        {
          k: "Sales page", t: "The full cohort, every feature priced.", ch: "Landing page", when: "Day −3",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">freelanceaccel.in/cohort-9</div></div>
            <div class="body">
              <div class="eyebrow">8-week accelerator · cohort 9</div>
              <h5>₹40,000. <em>Everything in one cohort.</em></h5>
              <div class="fd-rows">
                <div class="r"><span>8 modules + weekly assignments</span><b>₹9,000</b></div>
                <div class="r"><span>8 live calls · Thursdays 8 PM</span><b>₹8,000</b></div>
                <div class="r"><span>4× 1:1 coaching (30 min)</span><b>₹15,000</b></div>
                <div class="r"><span>Portfolio review + rewrite</span><b>₹5,000</b></div>
                <div class="r"><span>Bonus: templates + 200-client outreach list</span><b>₹3,000</b></div>
              </div>
              <div class="payout"><b>₹40,000</b><span>· 30 seats · community included with every seat</span></div>
              <div class="btn">Book a 15-min call <small>Cohort starts Monday</small></div>
            </div></div>`,
          why: [
            ["Every line has a price", "Modules, calls, 1:1, review, bonuses. Priced parts can be removed; a single ₹40,000 can only be cut."],
            ["Coach time is most of the price", "1:1 coaching is ₹15,000 of the ₹40,000. It's the first thing to go — and the most valuable thing to sell back."],
            ["Bonuses are features too", "The client list and templates have a price. Removing bonuses is a downsell that costs the business nothing."]
          ],
          q: ["Break the offer into parts with prices. Then a lower budget means fewer parts, not a cheaper version of the same parts.", "framework · feature downsells"]
        },
        {
          k: "The call", t: "Keep the course. Drop the access.", ch: "Phone · 15-min call", when: "Day 0",
          html: `<div class="say fd-say">
            <div class="who"><div class="av">R</div><div><b>Ritu · Freelance Accel</b><small>after “₹40,000 abhi possible nahi”</small></div></div>
            <q>Samajh gayi. I don't discount the cohort — the 30 people paying ₹40,000 would be right to be upset. But most of that price is <em>my time</em>. Take out the live calls, the one-on-ones, the portfolio review and the bonus list. You keep all eight modules, the assignments and the community. That's ₹9,000, and you can add anything back later.</q>
          </div>`,
          why: [
            ["Discount refused for a reason", "“The 30 people paying ₹40,000” — she names who a discount would betray. That's price integrity said out loud."],
            ["Remove the coach's time first", "Live calls, 1:1, review — all founder hours. Removing them drops the price 77% and costs the business nothing."],
            ["The core product survives", "Eight modules and assignments are the actual curriculum. The self-paced version can still get her a client."]
          ],
          q: ["The first features to remove are the ones that cost you the most to deliver — usually your time and your team's.", "framework · feature downsells"]
        },
        {
          k: "Full vs self-paced", t: "Same modules. No live access.", ch: "WhatsApp · after the call", when: "Day 0",
          html: `<div class="fd-wrap"><div class="choice">
            <div class="ch">
              <div class="k">Full cohort</div>
              <div class="p">₹40,000 <small>· 8 weeks</small></div>
              <ul>
                <li><b>8 live calls</b> · Thursdays</li>
                <li><b>4× 1:1 coaching</b></li>
                <li><b>Portfolio review</b></li>
                <li><b>Bonus</b> · templates + client list</li>
                <li>8 modules + assignments · community</li>
              </ul>
              <div class="sub">Never discounted. 30 seats.</div>
            </div>
            <div class="ch best">
              <div class="badge">Fits ₹9,000</div>
              <div class="k">Self-paced</div>
              <div class="p">₹9,000 <small>· 8 weeks</small></div>
              <ul>
                <li class="no">8 live calls · Thursdays</li>
                <li class="no">4× 1:1 coaching</li>
                <li class="no">Portfolio review</li>
                <li class="no">Bonus client list · templates stay</li>
                <li>8 modules + assignments · community (read-only)</li>
              </ul>
              <div class="cr">Add live calls or 1:1 any week</div>
            </div>
          </div><div class="fd-cap">Access and bonuses removed · curriculum untouched</div></div>`,
          why: [
            ["Four strikes, one keep", "Everything involving the coach's live time is crossed out. The one line that's pure content stays."],
            ["Read-only community", "Less access is a feature downsell too — she can watch, not post. Posting rights come back with the live calls."],
            ["Full cohort not dimmed", "₹40,000 is still the real product. She's buying a smaller one, not a discounted one."]
          ],
          q: ["Less time, less access, less speed, less done-for-you — remove any of these before you touch the price.", "framework · feature downsells"]
        },
        {
          k: "Checkout", t: "₹9,000. Four lines crossed.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay fd-pay">
            <div class="h"><span>Freelance Accelerator · self-paced</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>8 modules + assignments + community</span><span>₹9,000</span></div>
              <div class="row"><span class="off">8 live calls</span><span class="off">₹8,000</span></div>
              <div class="row"><span class="off">4× 1:1 coaching</span><span class="off">₹15,000</span></div>
              <div class="row"><span class="off">Portfolio review</span><span class="off">₹5,000</span></div>
              <div class="row"><span class="off">Bonus client list</span><span class="off">₹3,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹9,000</span></div>
              <div class="note"><b>Upgrade any time:</b> add-backs at the prices above. Pay ₹31,000 more and you're in the full cohort.</div>
              <div class="go">Pay ₹9,000 · UPI / Card</div>
            </div></div>`,
          why: [
            ["The invoice is the upsell menu", "Four crossed lines with prices. Every time she looks, she sees what live access costs."],
            ["Path to full is arithmetic", "“₹31,000 more and you're in the full cohort” — the full product is one sum away, never a separate negotiation."],
            ["₹9,000 from a no", "She was not going to pay ₹40,000. Now she's paid ₹9,000 and is inside the community where the calls happen."]
          ],
          q: ["A downsell turns a no into a smaller yes. Some of the money beats none of the money — as long as the price stays honest.", "framework · downsell offers"]
        },
        {
          k: "Week 3 nudge", t: "Stuck on module 3? Calls are ₹8,000.", ch: "WhatsApp", when: "Week 3",
          html: `<div class="phone fd-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Ritu · Freelance Accel<small>online</small></div></div>
              <div class="body">
                <div class="bub">Meera, week 3 check 👇
                  <div class="board">
                    <div class="t">Self-paced · day 21</div>
                    <div class="r"><span>Modules</span><b>3 / 3 done</b></div>
                    <div class="r"><span>Assignment 3</span><span class="warn">not submitted</span></div>
                    <div class="r"><span>Pitches sent</span><b>4</b></div>
                  </div>
                  Module 3 is pricing — everyone gets stuck here. Thursday's live call is exactly this. <b>₹8,000 adds all 6 remaining calls</b>, same as your receipt. Want in tomorrow?
                  <span class="tm">Wed 7:45 PM</span>
                </div>
                <div class="bub me">Haan, add the calls. Pricing wala doubt bahut hai 😅<span class="tm">8:02 PM ✓✓</span></div>
                <div class="bub">Done. Link at 7:50 tomorrow. Community posting is on for you too ✅<span class="tm">8:03 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Upsell at the point of friction", "Assignment 3 not submitted = the moment live help is worth ₹8,000 to her. The removed feature returns as the fix."],
            ["Same price as the receipt", "₹8,000 matches Day 0. She learns every add-back will be exactly what was printed."],
            ["Access restored with the feature", "Posting rights come back with the calls. The downsell's smaller access unlocks in the same step."]
          ],
          q: ["Everything you strip out on the way down is something you can sell on the way up.", "framework · feature downsells"]
        },
        {
          k: "Week 8", t: "Self-paced buyer, near-full payer.", ch: "Result card · cohort group", when: "Week 8",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Week 8 · Freelance Accelerator</div>
              <h5>Meera, first client signed.</h5>
              <p>₹9,000 self-paced · + calls wk 3 · + 1:1 wk 5 · + review wk 7</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹9,000</b><span>day 0</span></div><div><b>₹23,000</b><span>weeks 3–5</span></div><div><b>₹5,000</b><span>week 7</span></div></div>
              <div class="credit">Total paid<b>₹37,000</b>three yeses after a no to ₹40,000 · bonus list still unsold</div>
              <div class="fd-note">Next: 6-month Mastermind offered on the week-8 call.</div>
            </div></div>`,
          why: [
            ["₹9,000 became ₹37,000", "Three add-backs at printed prices. She is ₹3,000 short of the full cohort and never once saw a discount."],
            ["Price integrity for 30 others", "The full-price cohort paid ₹40,000 for the same things. Nobody in the group has a reason to feel cheated."],
            ["Continuity is next", "Eight weeks, four purchases, one client signed. The Mastermind ask lands on a customer who keeps saying yes."]
          ],
          q: ["A feature downsell is a slower path to the full price, not a permanent smaller one.", "framework · feature downsells"]
        }
      ]
    }
  ]
});
