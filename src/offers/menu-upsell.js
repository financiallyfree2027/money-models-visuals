// Menu Upsell — $100M Money Models, Section III (Upsell Offers), chapter "Menu Upsell"
// Example 1 is the book's gym supplement story (localised to Pune). Examples 2–4 are marked "(adapted)"
// in `source`: service menu, agency à-la-carte menu, course add-on menu — framework applications, not chapter stories.
window.OFFERS.push({
  slug: "menu-upsell",
  name: "Menu upsell",
  section: "Upsell",
  css: `
.mu-menu{width:480px;max-width:100%;background:#FFFDF7;border:1px solid var(--line);box-shadow:0 24px 60px rgba(30,30,26,.14);padding:24px 26px 20px;font-size:13px;position:relative;border-radius:6px;text-align:left}
.mu-menu::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--green)}
.mu-menu .k{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--mute)}
.mu-menu h5{font-family:var(--serif);font-size:22px;margin:4px 0 4px;font-weight:600;line-height:1.1}
.mu-menu h5 em{font-style:italic;color:var(--green-d)}
.mu-menu .lead{font-size:11.5px;color:var(--dim);margin-bottom:8px}
.mu-menu .row{display:grid;grid-template-columns:18px 1fr auto;gap:10px;align-items:start;padding:7px 0;border-top:1px dashed var(--line)}
.mu-menu .row .b{width:16px;height:16px;border:1.5px solid var(--ink);border-radius:3px;flex:none;position:relative;margin-top:1px}
.mu-menu .row.on .b::after{content:"✓";position:absolute;left:1px;top:-3px;font-size:14px;font-weight:700;color:var(--green-d)}
.mu-menu .row .n{font-weight:600;line-height:1.3}
.mu-menu .row .n i{font-style:normal;display:inline-block;margin-left:6px;background:var(--green);color:#fff;font-family:var(--mono);font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;padding:2px 6px;border-radius:999px;vertical-align:1px}
.mu-menu .row .d{font-size:11px;color:var(--mute);line-height:1.35}
.mu-menu .row .p{font-family:var(--mono);font-size:12px;color:var(--ink);white-space:nowrap;padding-top:1px}
.mu-menu .row.on .p{color:var(--green-d);font-weight:500}
.mu-menu .strip{margin-top:10px;background:var(--gold-l);border-left:3px solid var(--gold);padding:8px 10px;border-radius:0 6px 6px 0;font-size:11.5px;color:#5A4410;line-height:1.4}
.mu-menu .tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px;padding-top:10px;border-top:1px solid var(--line2);font-weight:600}
.mu-menu .tot b{font-family:var(--serif);font-size:20px;color:var(--green-d)}
.mu-menu .tot small{font-weight:400;color:var(--mute);font-size:11px}
.mu-menu .hand{font-family:var(--serif);font-style:italic;color:#1B3A8A;font-size:12.5px}
.mu-web .body{padding:18px 22px}
.mu-web .mu-menu{width:100%;box-shadow:none;border:0;padding:0;background:transparent}
.mu-web .mu-menu::before{display:none}
.mu-web .btn{margin-top:10px;width:100%;text-align:center}
.mu-app{padding:10px 12px 12px;font-size:12px}
.mu-app .hd{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--green);margin-bottom:4px}
.mu-app h6{font-family:var(--serif);font-size:17px;margin:0 0 4px;font-weight:600;line-height:1.15}
.mu-app .lead{font-size:10.5px;color:var(--dim);margin-bottom:4px}
.mu-app .row{display:grid;grid-template-columns:16px 1fr auto;gap:8px;align-items:start;padding:6px 0;border-top:1px dashed var(--line)}
.mu-app .row .b{width:14px;height:14px;border:1.5px solid var(--ink);border-radius:3px;position:relative;margin-top:1px}
.mu-app .row.on .b::after{content:"✓";position:absolute;left:1px;top:-3px;font-size:12px;font-weight:700;color:var(--green-d)}
.mu-app .row .n{font-weight:600;font-size:11.5px;line-height:1.25}
.mu-app .row .n i{font-style:normal;display:inline-block;margin-left:4px;background:var(--green);color:#fff;font-family:var(--mono);font-size:7.5px;letter-spacing:.08em;text-transform:uppercase;padding:1px 5px;border-radius:999px;vertical-align:1px}
.mu-app .row .d{font-size:10px;color:var(--mute)}
.mu-app .row .p{font-family:var(--mono);font-size:11px;white-space:nowrap}
.mu-app .row.on .p{color:var(--green-d)}
.mu-app .strip{margin-top:6px;background:var(--gold-l);border-left:3px solid var(--gold);padding:6px 8px;border-radius:0 6px 6px 0;font-size:10.5px;color:#5A4410;line-height:1.35}
.mu-app .go{margin-top:8px;background:var(--green);color:#fff;text-align:center;padding:9px;border-radius:8px;font-weight:600;font-size:12px}
.mu-app .skip{text-align:center;font-size:10px;color:var(--mute);margin-top:5px}
.mu-poster{text-align:left;width:440px}
.mu-poster h5{font-size:28px;margin:6px 0 2px}
.mu-poster .mu-menu{width:100%;box-shadow:none;border:0;padding:0;background:transparent;margin-top:8px}
.mu-poster .mu-menu::before{display:none}
.mu-doc .k,.mu-doc h5{width:calc(100% - 120px)}
.mu-note{font-size:11.5px;color:var(--mute);margin-top:10px;line-height:1.5}
.mu-tight .wa .body{gap:6px;padding:9px 8px}
.mu-tight .bub{padding:6px 9px}
.mu-tight .board{margin:4px 0;padding:6px 9px}
.mu-tight .board .r{padding:2px 0;gap:8px}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM — supplement prescription (from the book, localised) ───────────────────────── */
    {
      label: "Alex's gym · supplement menu",
      source: "Alex's own gym, as told in the book · localised to Pune",
      client: "Meera",
      about: "Meera, 34, Kothrud. Has just paid ₹12,000 for the 6-week challenge. Before she leaves, the coach walks her to the supplement wall with a prescription pad: seven items, ordered top to bottom, three ticked as “what I'd take”. She picks. Indian persona; mechanic as in the book, supplement list adapted.",
      copy: `SUPPLEMENT MENU — offered right after the challenge purchase (same visit)
Intake sheet first (goal, diet, sleep, current protein). Coach fills a prescription pad from it.
Menu of 7, ordered highest price → lowest: Whey ₹3,500 · Fat burner ₹1,800 · Pre-workout ₹1,600
· BCAA ₹1,400 · Meal bars ₹1,200 · Multivitamin ₹900 · Omega-3 ₹800.
Coach ticks the 3 he would take (“most members take these”) and writes when/how much.
Client picks any number; nothing is mandatory. Paid at the counter, taken home today.
Week 4: refill message with the same menu + one “most people add at week 4” item.`,
      steps: [
        {
          k: "Core purchase", t: "The challenge is paid. Then the menu.", ch: "Razorpay · at the desk", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Fit Studio Kothrud</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Challenge</span><span>₹12,000</span></div>
              <div class="row"><span>Meal plan + weekly check-ins</span><span>included</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Paid</span><span>₹12,000</span></div>
              <div class="note"><b>Next:</b> 10-minute intake with Coach Rahul, then your supplement prescription. Nothing on it is compulsory.</div>
              <div class="go">Paid ✓ · UPI</div>
              <div class="disc">Receipt sent on WhatsApp · Batch starts Monday 6:30 AM</div>
            </div></div>`,
          why: [
            ["The upsell starts after the yes", "She has already bought. A menu shown before the core purchase competes with it; shown after, it adds to it."],
            ["Highest buying temperature", "She just committed ₹12,000 to a goal. The next ten minutes are the easiest sale the gym will ever make."],
            ["Pre-frame it as a prescription", "“Nothing is compulsory” on the receipt sets the tone: this is advice she can take, not a pitch she must resist."]
          ],
          q: ["The best time to sell someone is right after they've bought. They've decided; now they want to do it right.", "framework · upsell offers"]
        },
        {
          k: "Intake sheet", t: "Ten questions before any menu.", ch: "Paper · sales office", when: "Day 0",
          html: `<div class="doc mu-doc">
            <div class="stamp">INTAKE · DAY 0</div>
            <div class="k">Challenge intake</div>
            <h5>Meera's sheet</h5>
            <div class="chk"><div class="b"></div><div><b>Goal by Day 42</b><span>76 kg → 70 kg. Wedding on 20 Aug.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Protein today</b><span>Vegetarian. Roughly 35 g/day. Needs 90+.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Energy in the evening</b><span>“Dead by 6 PM.” Training slot is 6:30 PM.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Sleep</b><span>5.5 hours. Wakes at 3 AM.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Skips meals?</b><span>Lunch, 3 days a week. Eats biscuits at 4 PM.</span></div></div>
            <div class="sig"><div class="l">Meera K.</div><small>COACH: RAHUL · 12 MAY</small></div>
          </div>`,
          why: [
            ["The menu is built from her answers", "35 g protein, no evening energy, skipped lunches. Every tick on the pad will point back to a line she wrote."],
            ["Diagnosis before prescription", "A doctor asks first. Asking first is what makes the recommendation feel like care instead of commission."],
            ["Same visit, same desk", "The sheet takes ten minutes and keeps her in the chair. Sending her home to “think about supplements” sells nothing."]
          ],
          q: ["Prescribe, don't sell. Ask what's wrong, then write down what you'd take if you were them.", "framework · menu upsell"]
        },
        {
          k: "The walk", t: "Said on the way to the wall.", ch: "In person · supplement wall", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Coach Rahul</b><small>Fit Studio · walking her to the wall</small></div></div>
            <q>Meera, your sheet says 35 grams of protein and no energy by evening. That's the whole problem. I'm going to write you what I'd take if I were you — three things, in order. <em>Pick whatever you want off it. None of it is mandatory, but the three I tick are what most members in your batch take.</em></q>
          </div>`,
          why: [
            ["Problem first, product second", "He repeats her own words back before naming a single product. She is nodding before the pad appears."],
            ["“What I'd take if I were you”", "This one sentence turns a sales conversation into advice. It is the menu upsell's core line."],
            ["Choice is stated out loud", "“Pick whatever you want” removes pressure. People buy more from a menu they feel free to refuse."]
          ],
          q: ["A menu is not a pitch. You hand them options, you point at the ones you'd choose, and you let them order.", "framework · menu upsell"]
        },
        {
          k: "Prescription pad", t: "Seven items. Three ticked. Ordered.", ch: "Paper · prescription pad", when: "Day 0",
          html: `<div class="mu-menu">
            <div class="k">Fit Studio · supplement prescription</div>
            <h5>What I'd take if I were you, Meera</h5>
            <div class="lead">Ordered top to bottom by impact for a vegetarian at 35 g protein. Tick anything, skip anything.</div>
            <div class="row on"><div class="b"></div><div><div class="n">Whey protein · 1 kg <i>Coach's pick</i></div><div class="d hand">1 scoop after training, 1 at breakfast → 90 g/day</div></div><div class="p">₹3,500</div></div>
            <div class="row on"><div class="b"></div><div><div class="n">Fat burner <i>Coach's pick</i></div><div class="d hand">1 capsule at 5 PM · fixes the 6 PM slump</div></div><div class="p">₹1,800</div></div>
            <div class="row"><div class="b"></div><div><div class="n">Pre-workout</div><div class="d">Optional · only if evenings stay flat after week 2</div></div><div class="p">₹1,600</div></div>
            <div class="row"><div class="b"></div><div><div class="n">BCAA</div><div class="d">Skip · whey covers this</div></div><div class="p">₹1,400</div></div>
            <div class="row"><div class="b"></div><div><div class="n">Meal-replacement bars · 12</div><div class="d">For the skipped lunches, instead of biscuits</div></div><div class="p">₹1,200</div></div>
            <div class="row on"><div class="b"></div><div><div class="n">Multivitamin <i>Coach's pick</i></div><div class="d hand">1 with breakfast · vegetarian gap</div></div><div class="p">₹900</div></div>
            <div class="row"><div class="b"></div><div><div class="n">Omega-3</div><div class="d">Nice to have · add at week 4</div></div><div class="p">₹800</div></div>
            <div class="strip"><b>Most members in your batch take the three ticked.</b> Bars are the usual fourth if lunch is the weak spot.</div>
            <div class="tot"><span>Ticked <small>· 3 of 7</small></span><b>₹6,200</b></div>
          </div>`,
          why: [
            ["Order is the anchor", "Whey at ₹3,500 sits on top. Everything below it reads as cheaper. Reverse the list and the whole pad feels expensive."],
            ["Ticks do the selling", "Three ticks, each with a one-line reason from her sheet. She isn't choosing seven products; she's confirming three."],
            ["Honest skips build the ticks", "“BCAA · skip, whey covers this” is a product he refuses to sell her. That line is why she trusts the other three."]
          ],
          q: ["Put the highest-value item first, mark what you'd choose, and give a reason next to each. The menu sells; you stay quiet.", "framework · menu upsell"]
        },
        {
          k: "Add-on bill", t: "She took three, plus the bars.", ch: "Counter · POS", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Fit Studio · counter</span><b>BILL #0412 · SAME VISIT</b></div>
            <div class="body">
              <div class="row"><span>Whey protein · 1 kg · chocolate</span><span>₹3,500</span></div>
              <div class="row"><span>Fat burner · 30 caps</span><span>₹1,800</span></div>
              <div class="row"><span>Meal-replacement bars · box of 12</span><span>₹1,200</span></div>
              <div class="row"><span>Multivitamin · 60 tabs</span><span>₹900</span></div>
              <div class="row tot"><span>Add-ons today</span><span>₹7,400</span></div>
              <div class="note"><b>Your visit today:</b> Challenge ₹12,000 + supplements ₹7,400 = ₹19,400. Prescription pad stapled to this bill.</div>
              <div class="go">Paid ✓ · UPI</div>
              <div class="disc">Taken home today · refill reminder in week 4</div>
            </div></div>`,
          why: [
            ["Ticket grew 60% without a pitch", "₹12,000 became ₹19,400 from a sheet, a walk and a pad. Nobody said “would you like to add…”."],
            ["She added one herself", "The bars weren't ticked. A menu she felt free to refuse is a menu she felt free to add to."],
            ["Paid and carried out, same visit", "Stock on the wall, bill at the counter. A supplement “ordered for next week” is a sale that never happens."]
          ],
          q: ["The average order goes up when the customer chooses from a menu, not when the salesperson pushes a single item.", "framework · menu upsell"]
        },
        {
          k: "Day 1 message", t: "How to take what she bought.", ch: "WhatsApp", when: "Day 1",
          html: `<div class="phone mu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Coach Rahul · Fit Studio<small>online</small></div></div>
              <div class="body">
                <div class="bub">Meera ji, your prescription in one screen 👇
                  <div class="board">
                    <div class="t">Daily · from tomorrow</div>
                    <div class="r"><span>Breakfast</span><b>Whey + multivitamin</b></div>
                    <div class="r"><span>Lunch (if skipped)</span><b>1 bar, not biscuits</b></div>
                    <div class="r"><span>5:00 PM</span><b>Fat burner 1 cap</b></div>
                    <div class="r"><span>After training</span><b>Whey 1 scoop</b></div>
                  </div>
                  Whey 1 kg = 33 scoops → lasts ~17 days. Refill reminder aayega, tension nahi. 💪
                  <span class="tm">Tue 8:05 AM</span>
                </div>
                <div class="bub me">Saved. Bar lunch mein rakh liya 🙏<span class="tm">8:20 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Usage is the product", "A tub in the cupboard produces no result and no refill. The schedule is what makes the ₹7,400 worth it to her."],
            ["Tie every item to the sheet", "“1 bar, not biscuits” is her 4 PM line from intake. The prescription keeps pointing at her own words."],
            ["Seed the refill", "“Lasts ~17 days” is said on Day 1. The week-4 message will not be a surprise; it will be expected."]
          ],
          q: ["An upsell that isn't used isn't an upsell — it's a refund waiting to happen. Teach the use.", "framework · upsell offers"]
        },
        {
          k: "Week 4 refill", t: "The same menu, one item added.", ch: "WhatsApp", when: "Week 4",
          html: `<div class="phone mu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Coach Rahul · Fit Studio<small>online</small></div></div>
              <div class="body">
                <div class="bub">Week 4, Meera ji — 3.4 kg down 🎉 Whey should be finishing this week. Refill menu 👇
                  <div class="board">
                    <div class="t">Refill · same as last time</div>
                    <div class="r"><span>Whey 1 kg</span><b>₹3,500</b></div>
                    <div class="r"><span>Fat burner</span><b>₹1,800</b></div>
                    <div class="r"><span>Bars · 12</span><b>₹1,200</b></div>
                    <div class="r"><span>+ Omega-3 (most add at week 4)</span><b>₹800</b></div>
                  </div>
                  Reply with what you want and I'll keep it at the desk for Wednesday. Skip anything.
                  <span class="tm">Mon 9:10 AM</span>
                </div>
                <div class="bub me">Whey + bars + omega-3. Fat burner abhi 10 left hai.<span class="tm">9:31 AM ✓✓</span></div>
                <div class="bub">Done — ₹5,500, Wednesday 6:30 👍<span class="tm">9:32 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The menu repeats itself", "Same items, same order, one new line. The first purchase becomes a monthly reorder without a new sales conversation."],
            ["Result before refill", "“3.4 kg down” comes first. She's re-buying from a coach whose advice is visibly working."],
            ["“Most add at week 4” is the new tick", "One recommended addition per cycle. Not seven. The menu stays a menu, not a catalogue."]
          ],
          q: ["Every consumable on the menu is a future upsell with a date on it. Track the run-out date, not the sale date.", "framework · menu upsell"]
        }
      ]
    },

    /* ───────────────────────── 2 · SERVICE MENU — salon add-ons (adapted) ───────────────────────── */
    {
      label: "Salon · add-on menu",
      source: "How the book's service-menu idea applies to a salon (adapted)",
      client: "Ananya",
      about: "Ananya, 29, Indiranagar. Books a ₹1,200 haircut online. At the chair she gets a printed “while you're here” menu, ordered by price, with the stylist's two ticks. She adds two. Adapted from the framework; not a chapter story.",
      copy: `WHILE YOU'RE HERE — add-on menu (shown at the chair, after the booking)
Core: Haircut ₹1,200 (booked and confirmed online).
Menu, highest → lowest: Keratin ₹4,500 · Hair spa ₹1,800 · Scalp detox ₹900 · Head massage ₹600 · Gloss rinse ₹400.
Stylist ticks what she'd do for this client (usually 2) with a one-line reason.
“Most guests add the spa + massage.” Client picks any, none required. Billed together.
Day 7: WhatsApp with next-visit menu, previous picks pre-ticked.`,
      steps: [
        {
          k: "Booking", t: "The haircut is booked. Only that.", ch: "WhatsApp · booking confirmation", when: "Day −1",
          html: `<div class="phone mu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">LB</div><div>Lumen Salon · Indiranagar<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Hi Ananya, you're booked ✂️
                  <div class="board">
                    <div class="t">Booking · LB-2208</div>
                    <div class="r"><span>Service</span><b>Haircut · ₹1,200</b></div>
                    <div class="r"><span>Stylist</span><b>Neha</b></div>
                    <div class="r"><span>When</span><b>Sat 11:30 AM</b></div>
                  </div>
                  Neha will do a 2-minute hair check before she starts. See you Saturday!
                  <span class="tm">Fri 6:12 PM</span>
                </div>
                <div class="bub me">Perfect, thanks!<span class="tm">6:30 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Sell one thing online", "The booking page sells a haircut. Adding a menu there lowers bookings; the menu belongs at the chair."],
            ["Pre-frame the check", "“2-minute hair check” is the intake. It's announced before she arrives so it never feels like a sales moment."],
            ["The core purchase is locked", "She has a slot, a stylist and a price. Everything from here is addition, not negotiation."]
          ],
          q: ["The best time to sell someone is right after they've bought. They've decided; now they want to do it right.", "framework · upsell offers"]
        },
        {
          k: "Chair menu", t: "A card on the mirror.", ch: "Printed card · at the chair", when: "Day 0",
          html: `<div class="mu-menu">
            <div class="k">Lumen Salon · while you're here</div>
            <h5>Neha's picks for you, Ananya</h5>
            <div class="lead">Everything below can be done today in the same chair. Tick any, skip any.</div>
            <div class="row"><div class="b"></div><div><div class="n">Keratin smoothing</div><div class="d">Not today · your hair isn't frizzy enough to need it</div></div><div class="p">₹4,500</div></div>
            <div class="row on"><div class="b"></div><div><div class="n">Hair spa · 30 min <i>Neha's pick</i></div><div class="d hand">Ends are dry from the straightener — this fixes it for 6 weeks</div></div><div class="p">₹1,800</div></div>
            <div class="row"><div class="b"></div><div><div class="n">Scalp detox</div><div class="d">Only if there's build-up · there isn't</div></div><div class="p">₹900</div></div>
            <div class="row on"><div class="b"></div><div><div class="n">Head massage · 15 min <i>Neha's pick</i></div><div class="d hand">Goes with the spa · same slot, no extra wait</div></div><div class="p">₹600</div></div>
            <div class="row"><div class="b"></div><div><div class="n">Gloss rinse</div><div class="d">Nice for an event · skip on a normal day</div></div><div class="p">₹400</div></div>
            <div class="strip"><b>Most guests add the spa + massage.</b> Adds 45 minutes; you'd be out by 1:15.</div>
            <div class="tot"><span>Ticked <small>· 2 of 5</small></span><b>₹2,400</b></div>
          </div>`,
          why: [
            ["The card does the asking", "A printed menu says “would you like to add” so the stylist never has to. The customer reads it while her hair is being checked."],
            ["Keratin at the top on purpose", "₹4,500 first makes ₹1,800 look modest. Then it's honestly declined — an anchor and a trust signal in one line."],
            ["Reasons tied to the check", "“Ends are dry from the straightener” came from the two-minute look. Recommendation without diagnosis reads as upselling."]
          ],
          q: ["Put the highest-value item first, mark what you'd choose, and give a reason next to each. The menu sells; you stay quiet.", "framework · menu upsell"]
        },
        {
          k: "The line", t: "One sentence, then silence.", ch: "In person · at the chair", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">N</div><div><b>Neha</b><small>Stylist · Lumen Salon</small></div></div>
            <q>Your cut's going to look great either way. Your ends are dry from the straightener — <em>if it were my hair I'd do the spa today and skip the keratin.</em> Have a look at the card, tick what you want, and I'll get started.</q>
          </div>`,
          why: [
            ["“If it were my hair”", "The menu-upsell line in salon language. It's a recommendation, not a request, and it includes a thing she is not selling."],
            ["Hand over the pen", "“Tick what you want” gives the customer the decision. She chooses; the stylist just starts the cut."],
            ["One line only", "No follow-up pitch, no “are you sure?”. The card carries the rest. Silence is what makes the menu feel optional."]
          ],
          q: ["A menu is not a pitch. You hand them options, you point at the ones you'd choose, and you let them order.", "framework · menu upsell"]
        },
        {
          k: "The bill", t: "Haircut plus the two ticks.", ch: "Counter · POS", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Lumen Salon · Indiranagar</span><b>BILL · LB-2208</b></div>
            <div class="body">
              <div class="row"><span>Haircut · Neha</span><span>₹1,200</span></div>
              <div class="row"><span>Hair spa · 30 min</span><span>₹1,800</span></div>
              <div class="row"><span>Head massage · 15 min</span><span>₹600</span></div>
              <div class="row tot"><span>Total today</span><span>₹3,600</span></div>
              <div class="note"><b>Booked for:</b> ₹1,200. <b>Paid:</b> ₹3,600. Two ticks on a card, no discount, no pressure.</div>
              <div class="go">Paid ✓ · Card</div>
              <div class="disc">Next-visit menu on WhatsApp in a week</div>
            </div></div>`,
          why: [
            ["Ticket tripled from a card", "₹1,200 became ₹3,600. The salon's only extra cost was 45 minutes of a chair it already owns."],
            ["No discount anywhere", "Add-ons are full price. The reason to buy was the recommendation, so nothing needed to be cheaper."],
            ["Book the next menu", "The receipt promises the next-visit menu. The upsell now has a rhythm, not a one-off."]
          ],
          q: ["The average order goes up when the customer chooses from a menu, not when the salesperson pushes a single item.", "framework · menu upsell"]
        },
        {
          k: "Next-visit menu", t: "Her picks, pre-ticked, six weeks out.", ch: "WhatsApp", when: "Day 7",
          html: `<div class="phone mu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">LB</div><div>Lumen Salon · Indiranagar<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Hi Ananya, Neha here. Spa lasts about 6 weeks — your next slot menu 👇
                  <div class="board">
                    <div class="t">Sat 5 Jul · 11:30 AM · held for you</div>
                    <div class="r"><span>Trim</span><b>₹1,200</b></div>
                    <div class="r"><span>Hair spa ✓ (as last time)</span><b>₹1,800</b></div>
                    <div class="r"><span>Head massage ✓ (as last time)</span><b>₹600</b></div>
                    <div class="r"><span>+ Gloss rinse (Riya's wedding?)</span><b>₹400</b></div>
                  </div>
                  Reply “same” to keep it, or tell me what to change. Skip anything.
                  <span class="tm">Sat 10:02 AM</span>
                </div>
                <div class="bub me">Same + gloss 😄 wedding is the 6th!<span class="tm">10:40 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Pre-ticked from her last visit", "She doesn't decide again; she confirms. “Reply same” is the lowest-effort reorder a salon can offer."],
            ["Timed to the run-out", "“Spa lasts 6 weeks” makes the message useful, not promotional. The date on the menu is the reason it converts."],
            ["One new line per cycle", "Gloss is the single addition, with a reason she mentioned in the chair. The menu grows one item at a time."]
          ],
          q: ["Every consumable on the menu is a future upsell with a date on it. Track the run-out date, not the sale date.", "framework · menu upsell"]
        }
      ]
    },

    /* ───────────────────────── 3 · AGENCY — à-la-carte add-on menu (adapted) ───────────────────────── */
    {
      label: "Agency · à-la-carte menu",
      source: "How the book applies it to an agency / B2B service (adapted)",
      client: "Kabir",
      about: "Kabir runs a D2C skincare brand in Delhi and signs a ₹60,000/month ads retainer. On the onboarding call he gets a five-line add-on menu, ordered by price, with “most brands your size take the first two”. He takes two. Adapted from the framework.",
      copy: `ADD-ON MENU — shown on the onboarding call, after the retainer is signed
Core: Ads management retainer ₹60,000/month (signed).
Menu, highest → lowest: Landing page build ₹40,000 · Email + WhatsApp flows ₹25,000
· UGC video batch (8) ₹20,000 · Monthly creative refresh ₹15,000/mo · Review widget setup ₹8,000.
Two ticked: “most brands at your stage take these before ads go live.” Reason next to each.
Client picks any; invoiced with month 1. Month 2: same menu returns with one new tick (UGC).`,
      steps: [
        {
          k: "Retainer signed", t: "The retainer is in. Only that.", ch: "Razorpay · invoice", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Northstar Ads · Kabir's brand</span><b>INVOICE · NS-0917</b></div>
            <div class="body">
              <div class="row"><span>Ads management retainer · month 1</span><span>₹60,000</span></div>
              <div class="row"><span>Ad spend (paid to Meta directly)</span><span>₹1,50,000/mo</span></div>
              <div class="row"><span>Weekly call · reporting · creative briefs</span><span>included</span></div>
              <div class="row tot"><span>Paid</span><span>₹60,000</span></div>
              <div class="note"><b>Onboarding call:</b> Thursday 4 PM. We'll walk your funnel and share the add-on menu — everything on it is optional.</div>
              <div class="go">Paid ✓ · NEFT</div>
              <div class="disc">GST extra · ads live in 10 working days</div>
            </div></div>`,
          why: [
            ["Close the core, then open the menu", "The proposal sold one thing. Add-ons on a proposal make it look expensive; add-ons after signature make it look thorough."],
            ["Announce the menu in advance", "“We'll share the add-on menu” on the invoice means Thursday's list is expected, not sprung."],
            ["Optional, in writing", "Saying it's optional before the call is what lets the agency recommend firmly on the call."]
          ],
          q: ["The best time to sell someone is right after they've bought. They've decided; now they want to do it right.", "framework · upsell offers"]
        },
        {
          k: "Onboarding line", t: "The funnel walk, then the menu.", ch: "Zoom · onboarding call", when: "Day 4",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sameer · Northstar Ads</b><small>Founder · onboarding call</small></div></div>
            <q>Kabir, the retainer covers the ads. Your product page converts at 0.9% — that's where the money leaks. I'm sending a menu of five things we can add. <em>If it were my brand I'd do the first two before we go live; most brands your size do.</em> Take any, take none. Ads run either way.</q>
          </div>`,
          why: [
            ["Diagnosis first", "0.9% conversion is his number, found on his site. The recommendation is anchored to a fact he can check, not to a package."],
            ["“Most brands your size do”", "Social proof from the menu's own history. He is not the first to be handed this list, and that's reassuring."],
            ["Retainer is safe either way", "“Ads run either way” protects the core sale. The menu never threatens what he already bought."]
          ],
          q: ["Prescribe, don't sell. Ask what's wrong, then write down what you'd take if you were them.", "framework · menu upsell"]
        },
        {
          k: "The menu", t: "Five lines. Two ticked. Priced high-to-low.", ch: "Client portal · web page", when: "Day 4",
          html: `<div class="web mu-web">
            <div class="bar"><i></i><i></i><i></i><div class="url">northstar.in/clients/kabir/add-ons</div></div>
            <div class="body">
              <div class="mu-menu">
                <div class="k">Northstar · add-on menu · before ads go live</div>
                <h5>What we'd add if it were our brand</h5>
                <div class="lead">Ordered by impact on your 0.9% product-page conversion. Tick any. None affect the retainer.</div>
                <div class="row on"><div class="b"></div><div><div class="n">Landing page build <i>Recommended</i></div><div class="d">Replaces the 0.9% product page for paid traffic · 10 days</div></div><div class="p">₹40,000</div></div>
                <div class="row on"><div class="b"></div><div><div class="n">Email + WhatsApp flows <i>Recommended</i></div><div class="d">Abandoned cart, post-purchase, win-back · 5 flows</div></div><div class="p">₹25,000</div></div>
                <div class="row"><div class="b"></div><div><div class="n">UGC video batch · 8 videos</div><div class="d">Usually month 2, once we know which angle wins</div></div><div class="p">₹20,000</div></div>
                <div class="row"><div class="b"></div><div><div class="n">Monthly creative refresh</div><div class="d">Not yet · your 4 existing creatives will last month 1</div></div><div class="p">₹15,000/mo</div></div>
                <div class="row"><div class="b"></div><div><div class="n">Review widget setup</div><div class="d">Only if you have 50+ reviews · you have 31</div></div><div class="p">₹8,000</div></div>
                <div class="strip"><b>Most brands at your stage take the two ticked</b> before launch, and add UGC in month 2.</div>
                <div class="tot"><span>Ticked <small>· 2 of 5</small></span><b>₹65,000</b></div>
              </div>
              <div class="btn">Confirm my picks <small>Invoiced with month 1 · change anytime before Monday</small></div>
            </div></div>`,
          why: [
            ["High to low, so ₹25,000 feels light", "The landing page at ₹40,000 leads. Everything after it is “less than that”. Order is the only design decision that matters."],
            ["Three honest “not yet”s", "Refresh, widget and UGC are declined with reasons. A menu that says no to itself is a menu people say yes to."],
            ["Ticks come with a date", "“Usually month 2” for UGC pre-sells the next round. The menu is a sequence, not a one-time list."]
          ],
          q: ["Put the highest-value item first, mark what you'd choose, and give a reason next to each. The menu sells; you stay quiet.", "framework · menu upsell"]
        },
        {
          k: "His picks", t: "Two yes, one later, two no.", ch: "WhatsApp", when: "Day 5",
          html: `<div class="phone mu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">NS</div><div>Northstar · Kabir's brand<small>Sameer, Priya, you</small></div></div>
              <div class="body">
                <div class="bub me">Went through the menu. Landing page + flows, yes. UGC in month 2 like you said. Skip refresh and widget for now.<span class="tm">Fri 11:14 AM ✓✓</span></div>
                <div class="bub">Perfect — exactly what I'd have done.
                  <div class="board">
                    <div class="t">Confirmed add-ons</div>
                    <div class="r"><span>Landing page build</span><b>₹40,000</b></div>
                    <div class="r"><span>Email + WhatsApp flows</span><b>₹25,000</b></div>
                    <div class="r"><span>UGC batch</span><span class="warn">revisit · month 2</span></div>
                  </div>
                  Invoice today, page brief call Monday 11 AM. Ads still go live on the 10th.
                  <span class="tm">11:20 AM</span>
                </div>
              </div>
            </div></div></div>`,
          why: [
            ["He ordered in his own words", "“Landing page + flows, yes” — the client wrote the order. No closing, no objection handling, no follow-up call."],
            ["“Month 2 like you said”", "He repeated the agency's own timeline. The recommendation for the next menu is already accepted."],
            ["Confirm and move on", "One reply, one board, one date. Lingering on an accepted order makes people re-examine it."]
          ],
          q: ["A menu is not a pitch. You hand them options, you point at the ones you'd choose, and you let them order.", "framework · menu upsell"]
        },
        {
          k: "Add-on invoice", t: "Month 1 more than doubled.", ch: "Razorpay · invoice", when: "Day 5",
          html: `<div class="pay">
            <div class="h"><span>Northstar Ads · Kabir's brand</span><b>INVOICE · NS-0918</b></div>
            <div class="body">
              <div class="row"><span>Landing page build (one-time)</span><span>₹40,000</span></div>
              <div class="row"><span>Email + WhatsApp flows · 5 flows (one-time)</span><span>₹25,000</span></div>
              <div class="row"><span>Retainer · month 1 (paid NS-0917)</span><span>₹60,000 ✓</span></div>
              <div class="row tot"><span>Add-ons due</span><span>₹65,000</span></div>
              <div class="note"><b>Month 1 total:</b> ₹1,25,000 vs ₹60,000 signed. Both add-ons were on the menu, ticked, with a reason.</div>
              <div class="go">Pay ₹65,000 · NEFT / UPI</div>
              <div class="disc">GST extra · landing page brief Monday 11 AM</div>
            </div></div>`,
          why: [
            ["₹60,000 became ₹1,25,000", "The proposal that would have died at ₹1,25,000 closed at ₹60,000 and grew to it from a menu."],
            ["One-time and recurring, separated", "Add-ons that are one-time are labelled so. Mixing them with the retainer is how clients start doubting the retainer."],
            ["The menu is on the paperwork", "“Both were on the menu, ticked” — when the invoice references the choice, there is nothing to dispute."]
          ],
          q: ["The average order goes up when the customer chooses from a menu, not when the salesperson pushes a single item.", "framework · menu upsell"]
        },
        {
          k: "Month 2 menu", t: "Same menu. One new tick.", ch: "Email", when: "Day 32",
          html: `<div class="mail">
            <div class="h"><div class="s">Kabir — month 1 numbers, and the month 2 menu</div><div class="f">From: Sameer · Northstar Ads &lt;sameer@northstar.in&gt; · to Kabir</div></div>
            <div class="body">
              <p>Landing page is at <b>2.6%</b> (from 0.9%). Flows recovered <b>₹1.4L</b> in abandoned carts. Ads ROAS 3.1.</p>
              <p>The angle that's winning is “dermat-tested, no fragrance”. That's exactly when UGC pays off, so here's the menu again with one change:</p>
              <p><b>✓ UGC video batch · 8 videos · ₹20,000</b> — recommended now<br>Monthly creative refresh · ₹15,000/mo — month 3, once UGC is in<br>Review widget · ₹8,000 — you're at 58 reviews; it's ready when you are</p>
              <p>Reply “UGC” and we brief creators Thursday. Skip it and nothing changes on the ads.</p>
              <div class="cta">Open month 2 menu</div>
            </div></div>`,
          why: [
            ["Result first, menu second", "2.6%, ₹1.4L recovered — the first two ticks paid for themselves. The third tick is being recommended by proof."],
            ["Only the tick moves", "The list is the same list he saw on Day 4. Consistency is what makes a monthly menu feel like a plan, not a pitch."],
            ["The widget matured on its own", "“58 reviews, it's ready when you are” — the earlier “no” becomes a future “yes” without anyone pushing."]
          ],
          q: ["Every consumable on the menu is a future upsell with a date on it. Track the run-out date, not the sale date.", "framework · menu upsell"]
        }
      ]
    },

    /* ───────────────────────── 4 · COURSE — post-checkout add-on menu (adapted) ───────────────────────── */
    {
      label: "Course · post-checkout menu",
      source: "How the book applies it to an online course / info product (adapted)",
      client: "Sana",
      about: "Sana, 27, Hyderabad, buys a ₹4,999 Excel-for-finance course. The thank-you page is a four-line add-on menu with two ticked (“most students add these”). She adds two, then gets the third on Day 30. Adapted from the framework.",
      copy: `POST-CHECKOUT MENU — thank-you page, right after the ₹4,999 course purchase
Menu, highest → lowest: 1:1 model review call ₹2,500 · Template pack (40 files) ₹1,499
· 6-month community + weekly office hours ₹999 · Verified certificate ₹499.
Two pre-ticked: templates + community — “most students add these”. One-line reason each.
Any selection, one tap, added to the same order. Skip link is visible.
Day 30: the one un-ticked item that now makes sense (1:1 review) offered on its own.`,
      steps: [
        {
          k: "Checkout", t: "The course, and only the course.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>SheetSense · Excel for Finance</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Excel for Finance · 8 modules · lifetime access</span><span>₹4,999</span></div>
              <div class="row"><span>Coupon</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹4,999</span></div>
              <div class="note"><b>After payment:</b> you'll see a short add-on menu. Most students take two of the four. All optional.</div>
              <div class="go">Pay ₹4,999 · UPI / Card</div>
              <div class="disc">Access opens instantly · 7-day refund</div>
            </div></div>`,
          why: [
            ["One product on the checkout", "Order bumps on the payment page cost conversions. The menu waits one screen, when the card has already gone through."],
            ["Tell them the menu is coming", "“You'll see a short add-on menu” lowers the surprise and raises the pick rate on the next page."],
            ["State the norm early", "“Most students take two of the four” is said before the menu exists. The default is set."]
          ],
          q: ["The best time to sell someone is right after they've bought. They've decided; now they want to do it right.", "framework · upsell offers"]
        },
        {
          k: "Thank-you menu", t: "Four lines, two pre-ticked, one tap.", ch: "Thank-you page · mobile", when: "Day 0 · +10 sec",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="mu-app">
              <div class="hd">SheetSense · order #SS-3310 · paid ✓</div>
              <h6>Sana, you're in. Add anything below?</h6>
              <div class="lead">Ordered by how much they help. Ticked = what most students add.</div>
              <div class="row"><div class="b"></div><div><div class="n">1:1 model review call · 45 min</div><div class="d">Best after module 6 · we'll offer it then</div></div><div class="p">₹2,500</div></div>
              <div class="row on"><div class="b"></div><div><div class="n">Template pack · 40 files <i>Most add</i></div><div class="d">Every model from the course, editable</div></div><div class="p">₹1,499</div></div>
              <div class="row on"><div class="b"></div><div><div class="n">Community · 6 months <i>Most add</i></div><div class="d">Weekly office hours · answers within a day</div></div><div class="p">₹999</div></div>
              <div class="row"><div class="b"></div><div><div class="n">Verified certificate</div><div class="d">Only if you'll put it on LinkedIn</div></div><div class="p">₹499</div></div>
              <div class="strip"><b>Most students add templates + community.</b> Same order, no new checkout.</div>
              <div class="go">Add 2 items · ₹2,498</div>
              <div class="skip">No thanks, take me to module 1</div>
            </div></div></div>`,
          why: [
            ["Pre-ticked is the recommendation", "Two boxes already checked, with “most add”. She isn't building an order; she's approving one."],
            ["The top item is declined for now", "₹2,500 leads the list to anchor, then says “after module 6”. It anchors today and sells on Day 30."],
            ["The skip link is visible", "A menu with no exit feels like a trap. The obvious “no thanks” is what makes the “add 2” tap feel like her choice."]
          ],
          q: ["Put the highest-value item first, mark what you'd choose, and give a reason next to each. The menu sells; you stay quiet.", "framework · menu upsell"]
        },
        {
          k: "Updated receipt", t: "One order, three lines.", ch: "Email · receipt", when: "Day 0",
          html: `<div class="mail">
            <div class="h"><div class="s">Receipt · SheetSense order #SS-3310 (updated)</div><div class="f">From: SheetSense &lt;billing@sheetsense.in&gt; · to Sana</div></div>
            <div class="body">
              <p><b>Excel for Finance · 8 modules</b> — ₹4,999<br><b>Template pack · 40 files</b> — ₹1,499<br><b>Community · 6 months</b> — ₹999</p>
              <p><b>Total paid: ₹7,497</b> · one order, one UPI transaction.</p>
              <p>Templates are in your dashboard now. Community invite is in the next email. Module 1 is open.</p>
              <div class="cta">Open module 1</div>
            </div></div>`,
          why: [
            ["₹4,999 became ₹7,497", "A 50% larger order from one screen that took ten seconds and pushed nothing."],
            ["Deliver the add-ons instantly", "Templates and the invite arrive before module 1. Fast delivery is why she'll trust the Day-30 menu."],
            ["One receipt, not three", "Merging the add-ons into the original order makes them feel like part of the course, not extra purchases."]
          ],
          q: ["The average order goes up when the customer chooses from a menu, not when the salesperson pushes a single item.", "framework · menu upsell"]
        },
        {
          k: "Office hours", t: "The add-on gets used.", ch: "WhatsApp · community", when: "Day 9",
          html: `<div class="phone mu-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">SS</div><div>SheetSense Community<small>412 members</small></div></div>
              <div class="body">
                <div class="bub me">Module 4 DCF template — my terminal value keeps going negative. Sheet attached.<span class="tm">Wed 9:12 PM ✓✓</span></div>
                <div class="bub">Sana, your growth rate is above the discount rate in cell C14 — swap 0.12 and 0.08. Fixed copy attached. Bring it to Friday office hours if you want to walk the whole model.
                  <div class="board">
                    <div class="t">Your progress · Day 9</div>
                    <div class="r"><span>Modules</span><b>4 / 8</b></div>
                    <div class="r"><span>Templates opened</span><b>11 / 40</b></div>
                    <div class="r"><span>Office hours</span><b>1 attended</b></div>
                  </div>
                  <span class="tm">9:40 PM</span>
                </div>
              </div>
            </div></div></div>`,
          why: [
            ["Prove the add-on paid off", "A 28-minute answer on a Wednesday night is what ₹999 bought. Now she knows the menu was honest."],
            ["Track the usage", "Modules, templates opened, office hours — the same board will decide when the 1:1 call is offered."],
            ["Usage precedes the next menu", "Nobody is sold the review call at module 4. The menu waits for the moment it was promised."]
          ],
          q: ["An upsell that isn't used isn't an upsell — it's a refund waiting to happen. Teach the use.", "framework · upsell offers"]
        },
        {
          k: "Day 30 menu", t: "The un-ticked item, now it fits.", ch: "Email", when: "Day 30 · after module 6",
          html: `<div class="mail">
            <div class="h"><div class="s">Sana — module 6 done. The one thing I left off your menu.</div><div class="f">From: Arjun · SheetSense &lt;arjun@sheetsense.in&gt; · to Sana</div></div>
            <div class="body">
              <p>On Day 0 you'll remember the top line of the menu said “best after module 6 — we'll offer it then”. That's now.</p>
              <p><b>✓ 1:1 model review call · 45 min · ₹2,500</b><br>Bring your module-6 three-statement model. I go line by line and you leave with a portfolio-ready file.<br>Most students who finish module 6 in the first month take this — it's the part the course can't do alone.</p>
              <p>Verified certificate · ₹499 — still there if you want it for LinkedIn after module 8.</p>
              <div class="cta">Book my review call</div>
            </div></div>`,
          why: [
            ["The menu kept its promise", "“We'll offer it then” on Day 0 becomes “that's now” on Day 30. Delayed items convert because they were announced."],
            ["Recommendation earned by behaviour", "Module 6 in a month puts her in the group “most take this”. The tick is personal, not generic."],
            ["Still one tick at a time", "The certificate stays un-ticked with a later date. The menu never offers everything at once."]
          ],
          q: ["Every consumable on the menu is a future upsell with a date on it. Track the run-out date, not the sale date.", "framework · menu upsell"]
        }
      ]
    }
  ]
});
