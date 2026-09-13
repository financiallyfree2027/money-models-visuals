// Free Trials — $100M Money Models, Section IV (Downsell Offers)
// Example 1 is the book's gym story (localised). Examples 2–4 are marked "(adapted)" in `source`:
// the chapter cites software trials and gyms he coached in general terms; the personas, prices and
// message flows there are mine. Verify details against the book.
window.OFFERS.push({
  slug: "free-trials",
  name: "Free trials",
  section: "Downsell",
  css: `
.ft-poster h5{font-size:30px}
.ft-poster .big{font-size:44px;margin:10px 0 2px}
.ft-poster p{font-size:12.5px}
.ft-list{margin:12px 0 0;text-align:left}
.ft-list .r{display:flex;gap:10px;align-items:flex-start;padding:7px 2px;border-top:1px dashed var(--line);font-size:12.5px;line-height:1.35}
.ft-list .r:first-child{border-top:0}
.ft-list .r .n{font-family:var(--mono);font-size:10px;color:var(--green);letter-spacing:.1em;padding-top:2px;flex:none;width:52px}
.ft-list .r b{color:var(--ink)}
.ft-list .r span{color:var(--dim)}
.ft-note{font-size:11.5px;color:var(--mute);margin-top:12px;line-height:1.5}
.ft-tight .wa .body{gap:6px;padding:9px 8px}
.ft-tight .bub{padding:6px 9px}
.ft-tight .board{margin:4px 0;padding:6px 9px}
.ft-tight .board .r{padding:2px 0}
.ft-sig .l{width:170px}
.ft-sig small{white-space:nowrap}
.ft-doc h5{font-size:22px}
.ft-doc .chk{padding:7px 0}
.ft-modal{margin-top:14px;border:1.5px solid var(--green);border-radius:12px;padding:16px 18px;background:var(--green-xl);box-shadow:0 18px 40px rgba(30,30,26,.12)}
.ft-modal .k{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--green);margin-bottom:6px}
.ft-modal h6{font-family:var(--serif);font-size:20px;margin:0 0 6px;font-weight:600;line-height:1.1}
.ft-modal p{margin:0;font-size:12.5px;color:var(--dim);line-height:1.45}
.ft-modal .btn{margin-top:10px}
.ft-grey{opacity:.45}
.ft-mail-list{margin:6px 0 10px;padding:0 0 0 18px}
.ft-mail-list li{margin:3px 0}
.ft-mail-box{background:var(--green-xl);border:1px dashed var(--green);border-radius:8px;padding:9px 12px;font-size:12.5px;margin:6px 0 10px}
.ft-mail-box b{color:var(--green-d)}
.ft-charge{background:var(--gold-l);border-radius:8px;padding:9px 12px;font-size:12.5px;color:#5A4410;margin:6px 0 10px}
.ft-strike{color:var(--mute);text-decoration:line-through;font-size:12px;margin-left:6px;font-weight:400}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the book, localised) ───────────────────────── */
    {
      label: "Alex's gym · trial downsell",
      source: "Alex's own gym, as told in the book · localised to Noida",
      client: "Manish",
      about: "Manish, 34, Sector 62 Noida. Says no to the ₹15,000 six-week challenge, so the coach offers 14 days free — card on file, three conditions, a fixed end date, and membership that starts by itself. Indian persona; mechanism as in the book.",
      copy: `FREE 14-DAY TRIAL — offered only after a "no" to the paid challenge
₹0 today. Card saved on file. Trial ends on a fixed date (Day 14).
Stays free if you: (1) attend 6 of 6 sessions, (2) do the Day-1 consult, (3) weigh in on Day 14.
Miss a rule: ₹3,000 trial fee charged to the card.
Day 15: membership starts automatically at ₹3,500/month unless you cancel at the desk by Day 13.
Full experience during the trial — same coach, batch, meal plan, WhatsApp group. Nothing withheld.
Day 14 sit-down: membership (₹3,500/mo) or the ₹15,000 challenge. Either/or.`,
      steps: [
        {
          k: "The no", t: "He says no. She doesn't discount.", ch: "In person · sales desk", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sameer · Iron Habit Gym</b><small>Head coach · after Manish says "abhi nahi"</small></div></div>
            <q>Samajh gaya — ₹15,000 abhi heavy hai. Toh yeh karte hain: 14 din free. Same 7 AM batch, same coach, same meal plan. <em>Sirf ek shart — card file pe rahega, aur aap dikhoge.</em> Dikhe toh ek rupaya nahi. Deal?</q>
          </div>`,
          why: [
            ["A no is a fork, not an exit", "He refused the price, not the gym. A downsell keeps him talking without cutting the price of the thing he refused."],
            ["Same product, smaller ask", "He tries the exact challenge he said no to. Trials of a watered-down version don't convert; trials of the real thing do."],
            ["Card and condition said first", "“Card file pe, aur aap dikhoge” is in the first breath. Nothing at sign-up will surprise him."]
          ],
          q: ["When they won't buy, let them try. But a free trial without a card on file is a gift, not an offer.", "framework · free trials"]
        },
        {
          k: "Trial terms", t: "How the free stays free.", ch: "Counter card · sales desk", when: "Day 0",
          html: `<div class="poster ft-poster">
            <div class="k">Iron Habit · 14-day trial</div>
            <h5>14 days. <em>₹0 if you show up.</em></h5>
            <div class="ft-list">
              <div class="r"><span class="n">RULE 01</span><div><b>6 of 6 sessions</b> <span>· Mon / Wed / Fri, 7 AM batch</span></div></div>
              <div class="r"><span class="n">RULE 02</span><div><b>Day-1 consult</b> <span>· 30 min, meal plan handed over</span></div></div>
              <div class="r"><span class="n">RULE 03</span><div><b>Day-14 weigh-in</b> <span>· same scale, before/after photo</span></div></div>
            </div>
            <div class="big">₹0</div>
            <p>Miss a rule: ₹3,000 trial fee on your card.</p>
            <div class="fine">Trial ends Day 14 · Membership ₹3,500/mo starts Day 15 unless you cancel at the desk by Day 13</div>
          </div>`,
          why: [
            ["A defined end date", "Day 14 is printed. An open-ended trial never ends, so it never converts."],
            ["Conditions cause the result", "Six sessions, one consult, one weigh-in — exactly what a paying member does in fortnight one. No invented hoops."],
            ["The penalty makes free behave like paid", "₹3,000 if he ghosts. He now has something to lose, so he shows up — and people who show up buy."]
          ],
          q: ["Attach a condition to the trial. Free if they do the work; if they don't, they pay for the slot they wasted.", "framework · free trials"]
        },
        {
          k: "Card on file", t: "₹0 today. Membership by default.", ch: "Razorpay · at the desk", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Iron Habit Gym · Noida</span><b>RAZORPAY · SAVE CARD</b></div>
            <div class="body">
              <div class="row"><span>14-day trial (12 – 24 Sept)</span><span>₹0</span></div>
              <div class="row"><span>Trial fee if any rule is missed</span><span>₹3,000</span></div>
              <div class="row"><span>Membership from 26 Sept</span><span>₹3,500 / mo</span></div>
              <div class="row tot"><span>Pay today</span><span>₹0</span></div>
              <div class="note"><b>Auto-start:</b> on 26 Sept your card is charged ₹3,500 for month 1 — unless you cancel at the desk by 24 Sept. No forms, no calls.</div>
              <div class="go">Save card · ₹0 today</div>
              <div class="disc">Card required · cancel any time before Day 13</div>
            </div></div>`,
          why: [
            ["₹0 today removes the objection", "He committed with a card, not with cash. Card-on-file trials convert several times better than trials with no card."],
            ["Opt-out, not opt-in", "Membership starts unless he acts. Doing nothing is a yes — and most people do nothing."],
            ["Every number on one screen", "₹0, ₹3,000, ₹3,500 and two dates. There is no fine print to discover on Day 15."]
          ],
          q: ["Get the card first. A trial that needs a second decision to become paid loses most people at that second decision.", "framework · free trials"]
        },
        {
          k: "Signed sheet", t: "Rules, dates, card — on paper.", ch: "Paper · sales desk", when: "Day 0",
          html: `<div class="doc ft-doc">
            <div class="stamp">CARD ON FILE</div>
            <div class="k">Free trial agreement</div>
            <h5>Manish's 14-day trial</h5>
            <div class="chk"><div class="b"></div><div><b>6 of 6 sessions · 7 AM batch</b><span>Mon / Wed / Fri, 12 – 24 Sept. Sign in at the desk.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Day-1 consult · today 5 PM</b><span>Meal plan + InBody scan. Start: 84.0 kg.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Day-14 weigh-in · Wed 24 Sept</b><span>Same scale, before/after photo, 10-min sit-down.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Membership starts Fri 26 Sept · ₹3,500/mo</b><span>Charged to card ****4417 unless cancelled at the desk by 24 Sept.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Missed rule = ₹3,000 trial fee</b><span>Charged to the same card. No membership starts.</span></div></div>
            <div class="sig ft-sig"><div class="l">Manish Gupta</div><small>DAY 0: 12 SEPT · DAY 14: 24 SEPT</small></div>
          </div>`,
          why: [
            ["He signs the end date", "24 Sept, in ink, next to his name. On Day 15 the charge is something he agreed to, not something that happened to him."],
            ["Penalty and membership on one page", "Both outcomes — ₹3,000 for ghosting, ₹3,500 for joining — are visible together. Neither can feel like a trick."],
            ["Written commitment predicts attendance", "A signature on “6 of 6 sessions” makes Wednesday 7 AM a promise he made, not a suggestion."]
          ],
          q: ["Define how the trial ends before it starts, in language a 10-year-old could judge.", "framework · free trials"]
        },
        {
          k: "Day 1", t: "The full experience, from day one.", ch: "WhatsApp", when: "Day 1",
          html: `<div class="phone ft-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">S</div><div>Coach Sameer · Iron Habit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Manish, welcome to the 7 AM batch 💪 Consult done, meal plan attached. Your trial board 👇
                  <div class="board">
                    <div class="t">Free trial · Day 1 of 14</div>
                    <div class="r"><span>Sessions</span><b>1 / 6</b></div>
                    <div class="pips"><i class="ok"></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Consult</span><b>done</b></div>
                    <div class="r"><span>Weigh-in</span><b>Wed 24 Sept</b></div>
                    <div class="r"><span>Trial cost</span><b>₹0 · on track</b></div>
                  </div>
                  Batch group mein add kar diya. Rahul bhai ka Day-42 result dekh lo — same batch, same plan.
                  <span class="tm">Fri 9:40 AM</span>
                </div>
                <div class="bub me">Plan mil gaya. Monday pakka 🙏<span class="tm">9:52 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Nothing withheld", "Coach, batch, plan, group — everything a member gets. A trial has to feel like membership or it can't sell membership."],
            ["Scoreboard from Day 1", "He sees 1/6 and “₹0 · on track”. The condition is a game he is already winning."],
            ["Proof from a peer", "A real member's Day-42 result in the group is the membership pitch, delivered by someone who isn't selling."]
          ],
          q: ["The trial is the sales pitch. Give them the best two weeks they've ever had and the conversion is a formality.", "framework · free trials"]
        },
        {
          k: "Day 10", t: "Four days out, told in writing.", ch: "WhatsApp", when: "Day 10",
          html: `<div class="phone ft-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">S</div><div>Coach Sameer · Iron Habit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Day 10 update 👇
                  <div class="board">
                    <div class="t">Free trial · Day 10 of 14</div>
                    <div class="r"><span>Sessions</span><b>5 / 6</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i></div>
                    <div class="r"><span>Weight</span><b>84.0 → 82.4 kg</b></div>
                    <div class="r"><span>Trial cost</span><b>₹0 · on track</b></div>
                  </div>
                  Wed 24 ko weigh-in, uske baad 5 min baithte hain. Fri 26 se membership chalu — ₹3,500 card se, same batch. Aapko kuch karna nahi hai.
                  <span class="tm">Mon 8:15 AM</span>
                </div>
                <div class="bub me">Wed done. 1.6 kg already 😄<span class="tm">8:31 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Warn before the charge", "Told four days out, in writing. A surprise charge creates a chargeback; an expected charge creates a member."],
            ["Conditions still tracked", "5 of 6 with one session left. He knows exactly what keeps the trial at ₹0."],
            ["Book the conversion conversation", "“5 min after weigh-in” schedules the close as a meeting, not an ambush."]
          ],
          q: ["Nobody should be surprised on the day the card is charged. Surprise is where trials turn into refunds.", "framework · free trials"]
        },
        {
          k: "Day 14", t: "Membership or challenge — not yes/no.", ch: "In person · after the weigh-in", when: "Day 14",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sameer · Iron Habit Gym</b><small>Head coach · Day-14 sit-down</small></div></div>
            <q>Six of six. Trial stayed at ₹0, jaise bola tha. 84 se 81.9 — 2.1 kg in two weeks. Ab simple hai: Friday se membership, ₹3,500, same 7 AM batch. Ya woh 6-week challenge — ₹15,000, aur aap win it back. <em>Membership ya challenge?</em></q>
          </div>`,
          why: [
            ["Show the deal was honoured", "Free, exactly as promised. That kept promise is what makes the next yes easy."],
            ["Either/or, not yes/no", "Membership or challenge. “Do you want to continue?” invites the original no back into the room."],
            ["Sell at the peak", "Day 14, minutes after a weigh-in with a result. Never let a trial lapse silently and hope."]
          ],
          q: ["The end of the trial is a scripted sales conversation, not an expiry date.", "framework · free trials"]
        },
        {
          k: "Day 15", t: "Charged, as agreed. A member.", ch: "Result card · app + WhatsApp", when: "Day 15",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 15 · Iron Habit Gym</div>
              <h5>Manish, you're a member.</h5>
              <p>6/6 sessions · 84.0 → 81.9 kg · trial cost ₹0</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹0</b><span>trial cost</span></div><div><b>6 / 6</b><span>sessions</span></div><div><b>−2.1</b><span>kg</span></div></div>
              <div class="credit">Month 1 charged today<b>₹3,500</b>card ****4417 · 26 Sept · same 7 AM batch · cancel any time with 7 days' notice</div>
              <div class="ft-note">The ₹15,000 six-week challenge stays open till 10 Oct — ask Sameer at the desk.</div>
            </div></div>`,
          why: [
            ["Conversion by default", "Card charged, membership live. He never had to buy — he only had to not cancel."],
            ["Full price, no discount", "The no became a ₹3,500/mo member at the same price a walk-in pays. The downsell bought time, not margin."],
            ["The paid offer is still open", "Membership today, challenge later. The thing he refused is now an upsell waiting for him."]
          ],
          q: ["A downsell turns a no into a yes without cutting the price of the thing they said no to.", "framework · downsell offers"]
        }
      ]
    },

    /* ───────────────────────── 2 · SOFTWARE FREE TRIAL (adapted) ───────────────────────── */
    {
      label: "Software · card-on-file trial",
      source: "The software-style free trial the chapter cites — card required, auto-converts (adapted: product, prices and emails are mine)",
      client: "Neha",
      about: "Neha, 29, freelance designer in Bengaluru, closes the checkout on a ₹1,499/month invoicing app. The exit screen offers 14 days of the full Pro plan free — card required, fixed end date, a usage condition that extends it, and a scripted charge notice.",
      copy: `FREE 14-DAY PRO TRIAL — Billo (invoicing app)
₹0 today · card required · trial ends on a fixed date (Day 14), shown everywhere.
Full Pro plan during the trial: unlimited invoices, GST reports, auto-reminders. Nothing locked.
Condition that extends it: send 3 invoices in week 1 → +7 days free.
Day 15: Pro starts automatically at ₹1,499/month (or ₹12,000/year) unless you cancel before.
One reminder email 3 days before the charge. Cancel in one click.
On the charge day, offer the annual switch: 12 months for the price of 8.`,
      steps: [
        {
          k: "The no", t: "She closes the checkout.", ch: "Pricing page · exit screen", when: "Day 0",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">billo.in/pricing</div></div>
            <div class="body">
              <div class="ft-grey">
                <div class="eyebrow">Billo Pro · for freelancers</div>
                <h5 style="margin-bottom:4px">₹1,499 / month.</h5>
                <div style="font-size:12.5px;color:var(--dim)">Unlimited invoices · GST reports · auto-reminders · payment links</div>
              </div>
              <div class="ft-modal">
                <div class="k">Not ready to pay today?</div>
                <h6>Try the full Pro plan free for 14 days.</h6>
                <p>Everything above, nothing locked. Card required, ₹0 today. Your trial ends <b>19 Sept</b> — we email you 3 days before anything is charged.</p>
                <div class="btn">Start free trial · ₹0 today <small>Cancel in one click, any time before 19 Sept</small></div>
              </div>
            </div></div>`,
          why: [
            ["Catch the no at the moment it happens", "She closed the checkout. The trial is offered on that exact screen, before she leaves the tab."],
            ["The real product, not a lite version", "Full Pro, nothing locked. A crippled trial shows her what she can't have; a full one shows her what she'll miss."],
            ["End date and card stated up front", "“19 Sept” and “card required” are in the offer itself. Trust is built by saying the catch first."]
          ],
          q: ["When they won't buy, let them try — the whole thing, with a card on file and a date it ends.", "framework · free trials"]
        },
        {
          k: "Card on file", t: "₹0 now. ₹1,499 on Day 15.", ch: "Checkout", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Billo · Pro trial</span><b>SECURE · SAVE CARD</b></div>
            <div class="body">
              <div class="row"><span>Pro plan · 14-day trial (5 – 19 Sept)</span><span>₹0</span></div>
              <div class="row"><span>Pro plan from 19 Sept</span><span>₹1,499 / mo</span></div>
              <div class="row"><span>Bonus: 3 invoices in week 1</span><span>+7 days free</span></div>
              <div class="row tot"><span>Pay today</span><span>₹0</span></div>
              <div class="note"><b>19 Sept:</b> ₹1,499 is charged to this card unless you cancel before. Reminder email on 16 Sept. Cancel from Settings in one click.</div>
              <div class="go">Start trial · ₹0 today</div>
              <div class="disc">Card required · no charge until 19 Sept</div>
            </div></div>`,
          why: [
            ["The card is the commitment", "₹0 today, but a real card. She has done the hard part of buying without spending anything."],
            ["Auto-convert is the default", "Pro starts unless she cancels. The business never has to win a second sale."],
            ["The charge date is repeated", "19 Sept on the exit screen, on the checkout, and later in email. Repetition kills disputes."]
          ],
          q: ["Get the card first. A trial that needs a second decision to become paid loses most people at that second decision.", "framework · free trials"]
        },
        {
          k: "Welcome email", t: "First three things, plus the extension.", ch: "Email", when: "Day 0",
          html: `<div class="mail">
            <div class="h"><div class="s">Neha, your Pro trial ends 19 Sept — do these three things first</div><div class="f">From: Arjun at Billo &lt;arjun@billo.in&gt; · to Neha</div></div>
            <div class="body">
              <p>You have the full Pro plan for 14 days. Fastest way to see it pay for itself:</p>
              <ol class="ft-mail-list"><li><b>Add your GST details</b> — 2 minutes, invoices come out compliant.</li><li><b>Send your first invoice</b> — with a UPI payment link on it.</li><li><b>Switch on auto-reminders</b> — Billo chases late clients so you don't.</li></ol>
              <div class="ft-mail-box"><b>Send 3 invoices this week and we add 7 days</b> to your trial — new end date 26 Sept.</div>
              <p style="font-size:12px;color:var(--mute)">Nothing is charged until your trial ends. Cancel any time from Settings.</p>
              <div class="cta">Send your first invoice</div>
            </div></div>`,
          why: [
            ["Drive the behaviour that hooks", "Three actions that make the app useful by Friday. A trial nobody uses is a trial nobody pays for."],
            ["Condition as a reward", "“3 invoices → +7 days” is the software version of “show up and it's free”. It gets the product used."],
            ["End date in the subject line", "19 Sept is the first thing she reads. The trial has a shape."]
          ],
          q: ["Deliver the full experience during the trial. The more they use, the more the charge feels like keeping, not buying.", "framework · free trials"]
        },
        {
          k: "Day 7", t: "What Pro did for her, in rupees.", ch: "In-app · dashboard", when: "Day 7",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 7 · Billo Pro trial</div>
              <h5>₹1,84,000 collected.</h5>
              <p>12 invoices · 5 clients · 3 late payments auto-chased</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>12</b><span>invoices sent</span></div><div><b>5</b><span>clients</span></div><div><b>2.3 d</b><span>faster paid</span></div></div>
              <div class="credit">Trial extended<b>+7 days</b>you sent 3 invoices in week 1 · Pro now ends 26 Sept · ₹1,499 charged that day unless cancelled</div>
            </div></div>`,
          why: [
            ["Show value in her currency", "₹1.84L collected, paid 2.3 days faster — not “features used”. This is the number she compares ₹1,499 against."],
            ["Pay the condition publicly", "The extension is granted the moment it's earned. A promise kept during the trial sells the plan after it."],
            ["New end date, same rule", "26 Sept replaces 19 Sept everywhere. The trial is longer, not open-ended."]
          ],
          q: ["The trial should make them richer, fitter, faster — visibly — before the charge date arrives.", "framework · free trials"]
        },
        {
          k: "Charge notice", t: "Three days before the card is hit.", ch: "Email", when: "Day 18",
          html: `<div class="mail">
            <div class="h"><div class="s">Your card will be charged ₹1,499 on 26 Sept</div><div class="f">From: Arjun at Billo &lt;arjun@billo.in&gt; · to Neha</div></div>
            <div class="body">
              <p>Your Pro trial ends Friday. Here's what it did in three weeks:</p>
              <div class="ft-mail-box"><b>₹2,61,000 collected</b> · 19 invoices · 4 late payments chased for you</div>
              <div class="ft-charge">On <b>26 Sept</b> we charge ₹1,499 to card ****2210 and Pro continues. Nothing to do.</div>
              <p>Prefer annual? <b>₹12,000/year</b> — 12 months for the price of 8. Switch before Friday and that's what we charge instead.</p>
              <p style="font-size:12px;color:var(--mute)">Not for you? Cancel in one click from Settings before Friday. No charge, no questions.</p>
              <div class="cta">Switch to annual · ₹12,000</div>
            </div></div>`,
          why: [
            ["Warn before the charge", "Date, amount, last four digits. Expected charges become members; surprise charges become chargebacks."],
            ["Value, then price", "₹2.61L collected sits above ₹1,499 charged. The email is a receipt for value, not a bill."],
            ["Either/or at the close", "Monthly or annual — not “stay or go”. The cancel link is honest and small."]
          ],
          q: ["Nobody should be surprised on the day the card is charged. Surprise is where trials turn into refunds.", "framework · free trials"]
        },
        {
          k: "The choice", t: "Monthly by default. Annual if she acts.", ch: "In-app · trial end screen", when: "Day 21",
          html: `<div class="choice">
            <div class="ch">
              <div class="k">Happens by itself</div>
              <div class="p">₹1,499 <small>/ month</small></div>
              <ul><li>Everything in Pro, month to month</li><li>Charged 26 Sept, then every month</li><li><b>Nothing to do</b> — card on file</li></ul>
              <div class="sub">Cancel any time from Settings</div>
            </div>
            <div class="ch best">
              <div class="badge">12 months for the price of 8</div>
              <div class="k">Switch before Friday</div>
              <div class="p">₹12,000 <small>/ year</small><span class="ft-strike">₹17,988</span></div>
              <ul><li>Everything in Pro, 12 months</li><li>One charge on 26 Sept, then nothing till next year</li><li><b>Saves ₹5,988</b> vs monthly</li></ul>
              <div class="cr">Charge ₹12,000 instead of ₹1,499</div>
              <div class="sub">Same card ****2210 · GST invoice emailed</div>
            </div>
          </div>`,
          why: [
            ["Both doors are yes", "Do nothing and pay monthly; click once and pay yearly. There is no path on this screen that ends the relationship."],
            ["Annual anchors the monthly", "₹17,988 struck through makes ₹12,000 a saving and ₹1,499 a fair fallback."],
            ["Cash up front from those who can", "Trial users who saw ₹2.6L collected are the ones most likely to prepay a year."]
          ],
          q: ["At the end of a trial, ask for the bigger commitment first. The default is the floor, not the ceiling.", "framework · free trials (adapted)"]
        },
        {
          k: "Day 22", t: "Charged. Pro continues.", ch: "Receipt · email", when: "Day 22",
          html: `<div class="pay">
            <div class="h"><span>Billo · receipt #BL-48117</span><b>PAID · 26 SEPT</b></div>
            <div class="body">
              <div class="row"><span>Pro plan · annual (26 Sept – 25 Sept next year)</span><span>₹12,000</span></div>
              <div class="row"><span>Trial (5 – 26 Sept)</span><span>₹0</span></div>
              <div class="row"><span>GST 18%</span><span>₹2,160</span></div>
              <div class="row tot"><span>Charged to ****2210</span><span>₹14,160</span></div>
              <div class="note">Next charge: 26 Sept next year. We'll email you 14 days before. Cancel auto-renew any time from Settings.</div>
              <div class="go">Pro is active · 12 months</div>
              <div class="disc">Trial cost: ₹0 · 21 days · ₹2,61,000 collected</div>
            </div></div>`,
          why: [
            ["The no became a year", "She closed a ₹1,499 checkout on Day 0 and paid ₹12,000 on Day 22. The trial did the selling."],
            ["Renewal is already scheduled", "Next year's charge and its warning email are on the receipt. The next conversion is set up on this one."],
            ["Trial cost printed as ₹0", "She sees what she got free next to what she paid. Fairness on the receipt is retention insurance."]
          ],
          q: ["A downsell turns a no into a yes without cutting the price of the thing they said no to.", "framework · downsell offers"]
        }
      ]
    },

    /* ───────────────────────── 3 · GYM LAUNCH CLIENT GYMS (adapted) ───────────────────────── */
    {
      label: "Gym Launch · cold-lead trial",
      source: "How gyms Alex coached at Gym Launch used the trial-with-penalty on leads who went cold (adapted: WhatsApp flow, prices and names are mine)",
      client: "Kavya",
      about: "Kavya, 27, Kochi. Saw the ₹12,000 challenge price on WhatsApp and went quiet. The gym's front desk downsells her a 7-day trial: card via payment link, ₹0 today, free if she attends 3 classes, ₹1,500 if she doesn't, membership auto-starts Day 8.",
      copy: `FREE 7-DAY TRIAL WITH PENALTY — WhatsApp downsell for leads who went quiet
Trigger: lead saw the ₹12,000 challenge price and stopped replying for 48 h.
Offer: 7 days free. Same classes, same coach, InBody scan, meal guide.
Card saved via payment link · ₹0 today.
Free if you attend 3 classes in 7 days. Miss it: ₹1,500 charged.
Day 7: 10-min sit-down with the coach → membership ₹2,499/mo (auto-starts Day 8) or the ₹12,000 challenge.`,
      steps: [
        {
          k: "The no", t: "She went quiet. They downsell.", ch: "WhatsApp", when: "Day −2 → Day 0",
          html: `<div class="phone ft-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">FZ</div><div>Fitzone Kochi<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Kavya, 6-week challenge is ₹12,000 — win it all back as credit if you finish. Batch starts Monday 🙂<span class="tm">Tue 4:10 PM</span></div>
                <div class="bub me">Thoda expensive hai… sochke batati hoon 🙈<span class="tm">Tue 4:32 PM ✓✓</span></div>
                <div class="bub">No problem! Ek option: 7 din free try karo. Same classes, same coach, InBody scan bhi. Card link pe save hoga — 3 classes aao toh ₹0. Nahi aayi toh ₹1,500. Fair?<span class="tm">Thu 11:02 AM</span></div>
                <div class="bub me">Card kyun? 😅<span class="tm">11:10 AM ✓✓</span></div>
                <div class="bub">Taaki slot serious logon ko mile. Aap aaogi, hume pata hai 💪 Link 👇<span class="tm">11:11 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Silence is a no — treat it like one", "48 hours of no reply after a price is a refusal. The downsell goes out without waiting for her to say it."],
            ["Same classes, same coach", "The trial is the challenge with the price removed for a week — not a lite class in a corner."],
            ["Answer “card kyun?” honestly", "“So the slot goes to serious people” is true and flattering. The penalty is framed as a filter, not a trap."]
          ],
          q: ["When they won't buy, let them try — with something to lose if they don't show up.", "framework · free trials"]
        },
        {
          k: "Card link", t: "₹0 today. ₹1,500 if she ghosts.", ch: "Razorpay link · WhatsApp", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Fitzone Kochi · 7-day trial</span><b>RAZORPAY · SAVE CARD</b></div>
            <div class="body">
              <div class="row"><span>7-day trial (15 – 21 Sept)</span><span>₹0</span></div>
              <div class="row"><span>No-show fee if fewer than 3 classes</span><span>₹1,500</span></div>
              <div class="row"><span>Membership from Mon 22 Sept</span><span>₹2,499 / mo</span></div>
              <div class="row tot"><span>Pay today</span><span>₹0</span></div>
              <div class="note"><b>Auto-start:</b> ₹2,499 is charged on 22 Sept and your membership begins — unless you tell the desk by Sun 21 Sept. Sit-down with the coach on Sunday 4 PM.</div>
              <div class="go">Save card · ₹0 today</div>
              <div class="disc">Card required · cancel any time before Day 7</div>
            </div></div>`,
          why: [
            ["The link is the commitment", "She taps once on her phone. No visit, no form — the barrier is a card, which she has."],
            ["Penalty smaller than membership", "₹1,500 stings enough to make her come; ₹2,499 is what she pays if she likes it. Both are printed."],
            ["Auto-start with a named sit-down", "Membership begins by default, but a human meeting is booked first. Default plus conversation converts best."]
          ],
          q: ["Get the card first. A trial that needs a second decision to become paid loses most people at that second decision.", "framework · free trials"]
        },
        {
          k: "Trial card", t: "Handed over at reception, Day 1.", ch: "Paper · reception", when: "Day 1",
          html: `<div class="doc ft-doc">
            <div class="stamp">TRIAL · 7 DAYS</div>
            <div class="k">Fitzone · trial card</div>
            <h5>Kavya's week</h5>
            <div class="chk"><div class="b"></div><div><b>3 classes by Sun 21 Sept</b><span>Any 6:30 PM class. Tap the card at the desk each visit.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>InBody scan · today</b><span>Start: 62.0 kg · 31% body fat. Meal guide given.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Sit-down with Coach Anjali · Sun 4 PM</b><span>10 minutes. Re-scan, then decide.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Membership from Mon 22 Sept · ₹2,499/mo</b><span>Card ****8802 charged automatically unless cancelled by Sun.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Fewer than 3 classes = ₹1,500</b><span>Charged to the same card. No membership starts.</span></div></div>
            <div class="sig ft-sig"><div class="l">Kavya Menon</div><small>DAY 1: 15 SEPT · DAY 7: 21 SEPT</small></div>
          </div>`,
          why: [
            ["The rules travel with her", "One card, five lines, in her bag. The condition is never “I didn't know”."],
            ["A start number to beat", "62.0 kg and 31% written on Day 1. The Day-7 re-scan now has a story to tell."],
            ["The sit-down has a time", "Sunday 4 PM is on the card. The conversion conversation is booked before class one."]
          ],
          q: ["Define how the trial ends before it starts, in language a 10-year-old could judge.", "framework · free trials"]
        },
        {
          k: "Day 4", t: "Two down, one to go.", ch: "WhatsApp", when: "Day 4",
          html: `<div class="phone ft-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">A</div><div>Coach Anjali · Fitzone<small>online</small></div></div>
              <div class="body">
                <div class="bub">Kavya, Day 4 👇
                  <div class="board">
                    <div class="t">Free trial · Day 4 of 7</div>
                    <div class="r"><span>Classes</span><b>2 / 3</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i></i></div>
                    <div class="r"><span>Scan</span><b>done · 31%</b></div>
                    <div class="r"><span>Trial cost</span><b>₹0 · on track</b></div>
                  </div>
                  Ek aur class aur trial ₹0 pakka. Sat 6:30 aa jao — Sunday 4 PM re-scan aur 10 min baat. Monday se ₹2,499 auto, ya challenge — Sunday decide karenge 🙂
                  <span class="tm">Thu 7:45 PM</span>
                </div>
                <div class="bub me">Saturday pakka! Legs are dead but 😂<span class="tm">8:02 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Track the condition, not the mood", "2 of 3 with a suggested slot. The nudge is about the rule she can still keep."],
            ["Repeat the charge date", "“Monday se ₹2,499 auto” is said again, three days out. No surprise on Monday."],
            ["Frame Sunday as a decision, not a bill", "“Sunday decide karenge” makes the end of the trial a choice she owns."]
          ],
          q: ["Nobody should be surprised on the day the card is charged. Surprise is where trials turn into refunds.", "framework · free trials"]
        },
        {
          k: "Day 7", t: "Re-scan, then either/or.", ch: "In person · Sunday sit-down", when: "Day 7",
          html: `<div class="say">
            <div class="who"><div class="av">A</div><div><b>Anjali · Fitzone Kochi</b><small>Coach · after the re-scan</small></div></div>
            <q>Three of three — trial stayed at ₹0, jaise bola tha. 31 se 30.2 percent in one week. Ab do raaste: kal se membership, ₹2,499, jo card pe already set hai. Ya challenge — ₹12,000, six weeks, aur finish karo toh poora wapas as credit. <em>Membership ya challenge?</em></q>
          </div>`,
          why: [
            ["Kept promise first", "“₹0, jaise bola tha” before any ask. The trial's honesty is the credibility for the sale."],
            ["Either/or", "Membership or challenge. Neither option is “stop”. The ₹12,000 she refused is back on the table, now with proof."],
            ["Result in hand", "A re-scan number from one week is the most persuasive thing the gym owns. It is used, not filed."]
          ],
          q: ["The end of the trial is a scripted sales conversation, not an expiry date.", "framework · free trials"]
        },
        {
          k: "The choice", t: "Default membership, or the challenge.", ch: "In person · shown on a tablet", when: "Day 7",
          html: `<div class="choice">
            <div class="ch">
              <div class="k">Happens by itself · tomorrow</div>
              <div class="p">₹2,499 <small>/ month</small></div>
              <ul><li>Unlimited 6:30 PM classes</li><li>Monthly InBody scan</li><li><b>Nothing to do</b> — card ****8802 on file</li></ul>
              <div class="sub">Cancel any time with 7 days' notice</div>
            </div>
            <div class="ch best">
              <div class="badge">What Anjali recommends</div>
              <div class="k">6-week challenge</div>
              <div class="p">₹12,000 <small>once</small></div>
              <ul><li>18 coached sessions + weekly weigh-in</li><li>Personal meal plan · WhatsApp check-ins</li><li><b>Finish it → ₹12,000 back as credit</b></li></ul>
              <div class="cr">Credit covers 4+ months of membership after</div>
              <div class="sub">Batch starts tomorrow · 3 seats left</div>
            </div>
          </div>`,
          why: [
            ["The refused price returns as the upgrade", "On Day −2, ₹12,000 was too much. After a free week with a result, it's the recommended option."],
            ["The default is a real option", "Membership isn't a decoy — it's what happens if she says nothing. Both cards are honest."],
            ["Credit points forward", "“Covers 4+ months after” shows the challenge leads to the same membership anyway, with a win on top."]
          ],
          q: ["A downsell buys the chance to make the original offer again — to someone who now believes you.", "framework · downsell offers"]
        },
        {
          k: "Day 8", t: "Charged. Member. Trial cost ₹0.", ch: "Result card · WhatsApp", when: "Day 8",
          html: `<div class="res">
            <div class="top2">
              <div class="k">Day 8 · Fitzone Kochi</div>
              <h5>Kavya, you're in.</h5>
              <p>3/3 classes · 31% → 30.2% · trial cost ₹0</p>
            </div>
            <div class="body">
              <div class="kv"><div><b>₹0</b><span>trial cost</span></div><div><b>3 / 3</b><span>classes</span></div><div><b>−0.8</b><span>% body fat</span></div></div>
              <div class="credit">Membership live<b>₹2,499</b>charged to ****8802 · 22 Sept · 6:30 PM classes · next scan 22 Oct</div>
              <div class="ft-note">Challenge seat held till Friday at ₹12,000 — first month's ₹2,499 is credited if you switch.</div>
            </div></div>`,
          why: [
            ["From ghosted lead to member in 10 days", "She stopped replying on Tuesday. A card link, one free week and a re-scan turned that into ₹2,499/month."],
            ["Penalty never needed", "Someone with ₹1,500 on the line came three times. The penalty's job was attendance, not revenue."],
            ["Upgrade path stays open", "Month one credited if she moves to the challenge. The membership is a floor, not a ceiling."]
          ],
          q: ["The best trial converts by default, and the penalty is rarely charged — because people with something to lose show up.", "framework · free trials"]
        }
      ]
    },

    /* ───────────────────────── 4 · SERVICE BUSINESS · TUITION CENTRE (adapted) ───────────────────────── */
    {
      label: "Tuition · free two weeks",
      source: "How the chapter's rules apply to a local service business — a tuition centre (adapted)",
      client: "Sunita",
      about: "Sunita, 41, Lucknow, mother of Arnav (Class 10). Says no to the ₹36,000 annual maths fee. The centre offers two weeks free: UPI autopay set up at ₹0, free if Arnav attends 6 classes and sits 2 tests, ₹1,500 if not, monthly fee auto-starts Day 15.",
      copy: `FREE 2-WEEK TRIAL — Vidya Classes, Class 10 Maths (after a no to the annual fee)
₹0 today. UPI autopay mandate set up on sign-up. Trial ends on a fixed date (Day 14).
Free if Arnav: (1) attends 6 of 6 classes, (2) sits both Saturday tests, (3) parent joins the Day-14 review.
Miss a rule: ₹1,500 trial fee via the mandate.
Day 15: monthly fee ₹3,500 auto-debits unless you cancel by Day 13.
Full experience: same batch, same teacher, doubt sessions, test series — nothing withheld.
Day-14 review: monthly ₹3,500 or annual ₹36,000 (test series + doubt app free). Either/or.`,
      steps: [
        {
          k: "The no", t: "\"Pehle dekhna padega.\" Fine — dekh lo.", ch: "In person · reception", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Ravi Sir · Vidya Classes</b><small>Centre head · after Sunita says "pehle dekhna padega"</small></div></div>
            <q>Bilkul sahi — ₹36,000 bina dekhe kyun dein. Toh Arnav do hafte free padhe. Same batch, same teacher, Saturday tests bhi. <em>Sirf ek shart: autopay set karenge, aur Arnav 6 classes aayega.</em> Aaya toh ₹0. Nahi aaya toh ₹1,500. Theek?</q>
          </div>`,
          why: [
            ["Agree with the objection", "“Why pay ₹36,000 without seeing” is true. The trial is offered as the answer to her own point."],
            ["The child's attendance is the condition", "Six classes and two tests are what a paying student does. The rule protects the parent's money and the seat."],
            ["Mandate said out loud", "Autopay is in the first sentence. No surprise on the form."]
          ],
          q: ["When they won't buy, let them try. But a free trial without a card on file is a gift, not an offer.", "framework · free trials"]
        },
        {
          k: "Trial terms", t: "Three rules, one date, one fee.", ch: "Counter card · reception", when: "Day 0",
          html: `<div class="poster ft-poster">
            <div class="k">Vidya Classes · Class 10 maths</div>
            <h5>Two weeks. <em>₹0 if he shows up.</em></h5>
            <div class="ft-list">
              <div class="r"><span class="n">RULE 01</span><div><b>6 of 6 classes</b> <span>· Mon / Wed / Fri, 5 PM batch</span></div></div>
              <div class="r"><span class="n">RULE 02</span><div><b>Both Saturday tests</b> <span>· marks shared on WhatsApp</span></div></div>
              <div class="r"><span class="n">RULE 03</span><div><b>Parent review · Day 14</b> <span>· 15 min with Ravi Sir</span></div></div>
            </div>
            <div class="big">₹0</div>
            <p>Miss a rule: ₹1,500 trial fee via autopay.</p>
            <div class="fine">Trial ends Day 14 · Monthly fee ₹3,500 auto-debits from Day 15 unless cancelled at reception by Day 13</div>
          </div>`,
          why: [
            ["A defined end date", "Day 14 is on the card. Open-ended “come and see” trials never turn into fees."],
            ["The parent has a rule too", "The Day-14 review is a condition. That guarantees the conversion conversation happens with the decision-maker."],
            ["The penalty is smaller than the fee", "₹1,500 makes the free real; ₹3,500 is what she pays if she's happy. Both printed side by side."]
          ],
          q: ["Attach a condition to the trial. Free if they do the work; if they don't, they pay for the slot they wasted.", "framework · free trials"]
        },
        {
          k: "UPI autopay", t: "₹0 today. ₹3,500 from Day 15.", ch: "UPI autopay · Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Vidya Classes · Lucknow</span><b>UPI AUTOPAY · MANDATE</b></div>
            <div class="body">
              <div class="row"><span>2-week trial (8 – 21 Sept)</span><span>₹0</span></div>
              <div class="row"><span>Trial fee if any rule is missed</span><span>₹1,500</span></div>
              <div class="row"><span>Monthly fee from 22 Sept</span><span>₹3,500 / mo</span></div>
              <div class="row tot"><span>Pay today</span><span>₹0</span></div>
              <div class="note"><b>Auto-debit:</b> ₹3,500 on 22 Sept and monthly after — unless you cancel at reception by 20 Sept. Review with Ravi Sir on 21 Sept, 11 AM.</div>
              <div class="go">Approve mandate · ₹0 today</div>
              <div class="disc">Mandate required · pause or cancel from your UPI app any time</div>
            </div></div>`,
          why: [
            ["Mandate = card on file", "In a UPI market the autopay mandate does the card's job: ₹0 now, a real commitment, conversion by default."],
            ["Review date on the receipt", "21 Sept 11 AM is booked before the trial starts. The close is a calendar entry, not a chase."],
            ["Every number on one screen", "₹0, ₹1,500, ₹3,500, two dates. There is no fine print to discover on Day 15."]
          ],
          q: ["Get the card first. A trial that needs a second decision to become paid loses most people at that second decision.", "framework · free trials"]
        },
        {
          k: "Trial sheet", t: "Signed by the parent, Day 0.", ch: "Paper · reception", when: "Day 0",
          html: `<div class="doc ft-doc">
            <div class="stamp">AUTOPAY SET</div>
            <div class="k">Vidya Classes · trial</div>
            <h5>Arnav's two weeks</h5>
            <div class="chk"><div class="b"></div><div><b>6 of 6 classes · 5 PM batch</b><span>Mon / Wed / Fri, 8 – 19 Sept. Attendance tapped at the desk.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Tests · Sat 13 &amp; Sat 20 Sept</b><span>Marks on WhatsApp the same evening.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Parent review · Sun 21 Sept, 11 AM</b><span>15 min with Ravi Sir. Both tests reviewed.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Monthly fee from 22 Sept · ₹3,500</b><span>UPI autopay unless cancelled at reception by 20 Sept.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Missed rule = ₹1,500 trial fee</b><span>Debited via the same mandate. No monthly fee starts.</span></div></div>
            <div class="sig ft-sig"><div class="l">Sunita Verma</div><small>DAY 0: 8 SEPT · DAY 14: 21 SEPT</small></div>
          </div>`,
          why: [
            ["The parent signs the end date", "21 Sept, in ink. The Day-15 debit is something she agreed to, not something that happened."],
            ["Rules are the programme", "Classes, tests, review — a good centre would insist on these anyway. Nothing is added to make “free” hard."],
            ["Both outcomes on one page", "₹1,500 for skipping, ₹3,500 for staying. Nothing here can later feel like a trick."]
          ],
          q: ["Define how the trial ends before it starts, in language a 10-year-old could judge.", "framework · free trials"]
        },
        {
          k: "Week 1", t: "Test marks and attendance, Saturday night.", ch: "WhatsApp", when: "Day 6",
          html: `<div class="phone ft-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">V</div><div>Vidya Classes · Ravi Sir<small>online</small></div></div>
              <div class="body">
                <div class="bub">Sunita ji, Arnav ka week 1 👇
                  <div class="board">
                    <div class="t">Free trial · Day 6 of 14</div>
                    <div class="r"><span>Classes</span><b>3 / 3</b></div>
                    <div class="pips"><i class="ok"></i><i class="ok"></i><i class="ok"></i><i></i><i></i><i></i></div>
                    <div class="r"><span>Test 1 · Quadratics</span><b>21 / 30</b></div>
                    <div class="r"><span>Batch average</span><span>18 / 30</span></div>
                    <div class="r"><span>Trial cost</span><b>₹0 · on track</b></div>
                  </div>
                  Doubt session Tuesday mein usne 4 sawaal poochhe — good sign. Test 2 next Saturday. Review Sunday 21, 11 AM — aap aa rahi hain na?
                  <span class="tm">Sat 8:20 PM</span>
                </div>
                <div class="bub me">Haan, Sunday aa rahi hoon. Marks dekh ke khushi hui 🙏<span class="tm">8:41 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Show the full experience", "Doubt sessions, tests, batch average — she sees everything a paying parent sees. The trial is the real product."],
            ["A result in her currency", "21/30 against a batch average of 18 is what she compares ₹3,500 with. Not “he seems to like it”."],
            ["Confirm the review, a week out", "“Aap aa rahi hain na?” books the decision-maker for the close before the trial is half over."]
          ],
          q: ["The trial is the sales pitch. Give them the best two weeks they've ever had and the conversion is a formality.", "framework · free trials"]
        },
        {
          k: "Day 14", t: "Monthly or annual — not stop/continue.", ch: "In person · Sunday review", when: "Day 14",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Ravi Sir · Vidya Classes</b><small>Centre head · Day-14 parent review</small></div></div>
            <q>Six of six, dono tests — trial free raha, jaise kaha tha. 21 se 25 out of 30 in two weeks. Ab do raaste: kal se ₹3,500 monthly, autopay already set hai. Ya annual ₹36,000 — test series aur doubt app free, aur ₹3,500 monthly ka jhanjhat khatam. <em>Monthly ya annual?</em></q>
          </div>`,
          why: [
            ["Prove the deal was honoured", "Free, as promised, before any ask. The kept promise is the credibility for the annual fee she refused on Day 0."],
            ["Either/or", "Monthly or annual. “Continue karna hai?” invites the original no back."],
            ["Result first, price second", "21 → 25 is said before ₹36,000. She is deciding about a trajectory, not a fee."]
          ],
          q: ["The end of the trial is a scripted sales conversation, not an expiry date.", "framework · free trials"]
        },
        {
          k: "The choice", t: "Autopay by default. Annual if she acts.", ch: "In person · printed sheet", when: "Day 14",
          html: `<div class="choice">
            <div class="ch">
              <div class="k">Happens by itself · tomorrow</div>
              <div class="p">₹3,500 <small>/ month</small></div>
              <ul><li>Same 5 PM batch, same teacher</li><li>Saturday tests · doubt sessions</li><li><b>Nothing to do</b> — autopay debits 22 Sept</li></ul>
              <div class="sub">Cancel from your UPI app any time</div>
            </div>
            <div class="ch best">
              <div class="badge">What Ravi Sir recommends</div>
              <div class="k">Annual · till the board exam</div>
              <div class="p">₹36,000 <small>once</small><span class="ft-strike">₹42,000</span></div>
              <ul><li>Everything on the left, 12 months</li><li>Full test series + doubt app <b>free</b></li><li><b>Saves ₹6,000</b> vs monthly</li></ul>
              <div class="cr">Pay once · autopay cancelled for you</div>
              <div class="sub">Or 3 × ₹13,000 — same bonuses</div>
            </div>
          </div>`,
          why: [
            ["The refused offer returns", "₹36,000 was a no on Day 0. After two free weeks and a 25/30, it is the recommended option."],
            ["Default is a real option", "Monthly happens by itself. It isn't a decoy — it is the floor the trial guaranteed."],
            ["Bonus, not discount, for paying in full", "Test series and doubt app free — high value to her, low cost to the centre. The price stays ₹36,000."]
          ],
          q: ["A downsell buys the chance to make the original offer again — to someone who now believes you.", "framework · downsell offers"]
        }
      ]
    }
  ]
});
