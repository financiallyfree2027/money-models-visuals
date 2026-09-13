// Anchor Upsell — $100M Money Models, Section III (Upsell Offers)
// Mechanic: present the most expensive, most complete option FIRST (the anchor), then the option you
// actually want to sell. Some buy the anchor; most buy the target — at a higher price than they would
// have accepted had they seen it alone. Examples 1–2 are Alex's gym and Gym Launch as recalled from
// the chapter (localised / illustrative prices). Examples 3–4 are marked "(adapted)" in `source`.
window.OFFERS.push({
  slug: "anchor-upsell",
  name: "Anchor upsell",
  section: "Upsell",
  css: `
.anc-choice .ch{padding:20px}
.anc-choice .ch .p{font-size:28px}
.anc-choice .ch li{padding:5px 0;font-size:12px}
.anc-choice .ch.anc-anchor{border:1.5px solid var(--gold);background:linear-gradient(180deg,#FFFBF0,#fff)}
.anc-choice .ch.anc-anchor .badge{background:var(--gold)}
.anc-choice .ch.anc-anchor .cr{background:var(--gold-l);color:#5A4410}
.anc-menu{text-align:left;margin:14px 0 0}
.anc-menu .sec{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin:12px 0 4px}
.anc-menu .sec:first-child{margin-top:0}
.anc-menu .r{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:6px 0;border-top:1px dashed var(--line);font-size:13px}
.anc-menu .r b{font-family:var(--serif);font-size:15px;white-space:nowrap}
.anc-menu .r small{display:block;font-size:11px;color:var(--mute);margin-top:1px}
.anc-menu .r.top{background:var(--gold-l);margin:0 -10px;padding:8px 10px;border-radius:8px;border-top:0}
.anc-poster{width:460px;padding:26px 30px}
.anc-poster h5{font-size:26px;margin:6px 0 2px}
.anc-say q{font-size:18px}
.anc-doc h5{font-size:22px}
.anc-doc .chk{padding:7px 0}
.anc-doc .sig .l{width:170px}
.anc-doc .sig small{white-space:nowrap}
.anc-tight .wa{min-height:380px}
.anc-tight .wa .body{gap:6px;padding:10px 8px}
.anc-tight .bub{padding:7px 9px}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (from the book, localised) ───────────────────────── */
    {
      label: "Alex's gym · most complete first",
      source: "Alex's own gym, as told in the book · localised to Indore",
      client: "Kavita",
      about: "Kavita, 34, Vijay Nagar, Indore. Comes in for a free body-scan consult expecting a ₹25,000 challenge. The coach shows the ₹1,60,000 Private programme first, then the ₹40,000 Semi-Private — which she buys. Indian persona; prices illustrative.",
      copy: `ANCHOR UPSELL — gym sales sit-down
Show the most complete option FIRST, then the one you want to sell.
Anchor: Private Transformation · 16 weeks · 1-on-1 PT 3×/week, meals delivered, weekly scans · ₹1,60,000
Target: Semi-Private Transformation · 16 weeks · coached sessions 3×/week (max 4), meal plan, weekly check-in · ₹40,000
Say: "Pehle main aapko hamara sabse complete programme dikhata hoon."
Never lead with the cheap option. Some take the anchor; most take the target without flinching.
Upgrade to Private within 30 days: everything paid is credited.`,
      steps: [
        {
          k: "The ad", t: "Sells the consult, not a price.", ch: "Instagram", when: "Day −3",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">IF</div><div><div class="nm">ironfit.indore</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">INDORE WOMEN 30–45</div>
                <div><div class="big">8 kg in 16 weeks.<br><em>With a coach, not an app.</em></div>
                <div class="sm">Free InBody scan + 30-min plan with a coach. Then decide.</div></div>
              </div>
              <div class="cta"><span>ironfit.in/scan</span><b>Book free scan</b></div>
              <div class="cap"><b>ironfit.indore</b> Vijay Nagar. 10 scan slots this week. Aap sirf scan ke liye bhi aa sakte ho — no pressure, promise.</div>
            </div></div></div>`,
          why: [
            ["No price in the ad", "The ad's job is to put her in a chair. A price in the ad would cap what she can be sold in the room."],
            ["The result and the coach are the hook", "8 kg / 16 weeks with a human. That is what the ₹1,60,000 and ₹40,000 versions both deliver — at different levels of hands-on."],
            ["Scan, not sales call", "“Free scan” gets a yes from people who would never book a “consultation”. The consult happens anyway."]
          ],
          q: ["The upsell happens after the yes, not in the ad. Get them in the room first.", "framework · upsell offers"]
        },
        {
          k: "Confirmation", t: "Two programmes. Both shown tomorrow.", ch: "WhatsApp", when: "Day −1",
          html: `<div class="phone anc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">S</div><div>Coach Sameer · IronFit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Hi Kavita, Sameer here from IronFit 👋 Kal 6 PM confirmed. InBody scan (5 min) + your 16-week plan (25 min).<span class="tm">4:10 PM</span></div>
                <div class="bub">Hamare paas 2 transformation programmes hain — kal dono dikhaunga, scan dekh ke jo fit ho woh recommend karunga. Bring water, no heavy meal 2 hrs before.<span class="tm">4:11 PM</span></div>
                <div class="bub me">Done. Roughly kitna hota hai?<span class="tm">4:30 PM ✓✓</span></div>
                <div class="bub">Depends on programme — kal scan ke saath properly batata hoon, 5 min lagega 🙂 See you at 6!<span class="tm">4:32 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Pre-frame that there are options", "She arrives knowing two programmes exist. The anchor won't feel like a bait-and-switch when it appears."],
            ["Price is deferred, politely", "Quoting ₹40,000 on WhatsApp means she compares it to zero. In the room she'll compare it to ₹1,60,000."],
            ["Show rate", "Scan time, plan time, water — logistics make the appointment feel real. No-shows kill every upsell."]
          ],
          q: ["Never quote the target price before the anchor has been seen. Order is the whole mechanism.", "framework · anchor upsell"]
        },
        {
          k: "The opener", t: "“The most complete programme first.”", ch: "In person · after the scan", when: "Day 0",
          html: `<div class="say anc-say">
            <div class="who"><div class="av">S</div><div><b>Coach Sameer</b><small>IronFit · sales desk · scan in hand</small></div></div>
            <q>Kavita, scan ke hisaab se 16 weeks chahiye — 8 kg realistic hai. Do programmes hain. <em>Pehle main aapko hamara sabse complete programme dikhata hoon</em> — jo log fastest results chahte hain aur time nahi hai, woh yeh lete hain. Phir doosra dikhaunga, aur aap decide karo.</q>
          </div>`,
          why: [
            ["Most expensive, on purpose, first", "He does not ask her budget. He starts at the top and lets her walk down — that's the anchor upsell."],
            ["“Most complete”, never “most expensive”", "The framing is service, not price. It sounds like he's being thorough, not aggressive."],
            ["Permission to say no to it", "“Phir doosra dikhaunga” tells her a second option is coming. She listens to the anchor without panic."]
          ],
          q: ["Present the premium version first so every other price is judged against it, not against zero.", "framework · anchor upsell"]
        },
        {
          k: "Two sheets", t: "₹1,60,000 first. Then ₹40,000.", ch: "Printed sheets · across the desk", when: "Day 0",
          html: `<div class="choice anc-choice">
            <div class="ch anc-anchor">
              <div class="badge">Most complete</div>
              <div class="k">Private · 16 weeks</div>
              <div class="p">₹1,60,000 <small>one-time</small></div>
              <ul>
                <li><b>1-on-1</b> with Sameer · 3× a week</li>
                <li>Meals cooked and <b>delivered daily</b></li>
                <li>InBody scan <b>every week</b></li>
                <li>Supplements included · 16 weeks</li>
                <li>Direct line to coach · 7 AM–10 PM</li>
              </ul>
              <div class="cr">For people whose time costs more than money</div>
              <div class="sub">4 private slots · 1 open this month</div>
            </div>
            <div class="ch best">
              <div class="badge">Sameer's pick for your schedule</div>
              <div class="k">Semi-Private · 16 weeks</div>
              <div class="p">₹40,000 <small>one-time</small></div>
              <ul>
                <li><b>Coached sessions</b> · 3× a week · max 4 people</li>
                <li>Meal plan + weekly grocery list</li>
                <li>InBody scan <b>every 2 weeks</b></li>
                <li class="no">Supplements · meals delivered</li>
                <li>WhatsApp check-in every Sunday</li>
              </ul>
              <div class="cr">Same coaches, same plan, same 8 kg</div>
              <div class="sub">Upgrade to Private within 30 days · ₹40,000 credited</div>
            </div>
          </div>`,
          why: [
            ["The anchor makes ₹40,000 look like a quarter", "Seen alone, ₹40,000 is “forty thousand for a gym”. Seen after ₹1,60,000, it is the sensible one."],
            ["She came for ₹25,000", "The old 6-week challenge was ₹25,000. The anchor let the gym sell a ₹40,000 programme with no discount conversation."],
            ["The anchor is real and some people buy it", "Four private slots exist. Roughly one in ten sit-downs takes it — and each one pays like four Semi-Privates."]
          ],
          q: ["The target should look like the reasonable middle even when there are only two options.", "framework · anchor upsell"]
        },
        {
          k: "Payment", t: "₹40,000 today. Anchor stays on the receipt.", ch: "Razorpay · at the desk", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>IronFit Indore</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Semi-Private Transformation · 16 weeks</span><span>₹40,000</span></div>
              <div class="row"><span>InBody scans · meal plan · Sunday check-ins</span><span>included</span></div>
              <div class="row"><span>Private Transformation · ₹1,60,000</span><span>not selected</span></div>
              <div class="row tot"><span>Pay today</span><span>₹40,000</span></div>
              <div class="note"><b>Upgrade window:</b> move to Private any time in the first 30 days — this ₹40,000 is credited in full against ₹1,60,000.</div>
              <div class="go">Pay ₹40,000 · UPI / Card</div>
              <div class="disc">Starts Monday 6:30 AM batch · 16 weeks · no EMI on this programme</div>
            </div></div>`,
          why: [
            ["Full price, no discount", "She never asked for one. After ₹1,60,000, ₹40,000 already felt like the discount."],
            ["The anchor rides along", "“Not selected” keeps Private visible. The upgrade credit makes moving up a zero-loss decision later."],
            ["Cash in full today", "One payment of ₹40,000 versus the ₹25,000 she budgeted. The anchor paid for itself before she trained once."]
          ],
          q: ["An anchor that never sells still earns — it raises what everyone else pays.", "framework · anchor upsell"]
        },
        {
          k: "Week 1", t: "The upgrade stays open.", ch: "WhatsApp", when: "Day 3",
          html: `<div class="phone anc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">S</div><div>Coach Sameer · IronFit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Kavita, session 1 done 💪 Your batch: Mon/Wed/Fri 6:30 AM, 4 of you. Meal plan + grocery list attached. Sunday check-in 8 PM.<span class="tm">Wed 7:40 AM</span></div>
                <div class="bub">FYI — Ritu from Monday's scan took Private this month, so 3 private slots left. Agar 30 din ke andar switch karna ho, ₹40,000 poora adjust hoga. No pressure, bas bata raha hoon.<span class="tm">7:42 AM</span></div>
                <div class="bub me">Semi-private is perfect for now. Grocery list mil gayi 🙏<span class="tm">8:15 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The anchor keeps selling after the sale", "A real person took Private. The ₹1,60,000 option is now social proof, not a sales trick."],
            ["Credit makes the upgrade painless", "₹40,000 fully adjusted means the only question is “do I want more hands-on?”, never “do I lose money?”"],
            ["Low pressure by design", "“Bas bata raha hoon” — she said no once already. Repeating the offer softly beats pushing it."]
          ],
          q: ["Every buyer of the target is a future buyer of the anchor. Keep the door open.", "framework · upsell offers"]
        }
      ]
    },

    /* ───────────────────────── 2 · GYM LAUNCH (from the book, illustrative prices) ───────────────────────── */
    {
      label: "Gym Launch · done-for-you first",
      source: "Gym Launch, as told in the book · US persona, prices illustrative",
      client: "Dan",
      about: "Dan owns a 180-member gym in Columbus, Ohio. On the sales call he is shown the done-for-you launch (team on-site, $60,000) first, then the done-with-you programme ($16,000) — which he buys in full. US persona kept; exact prices and tier names should be verified against the book.",
      copy: `ANCHOR UPSELL — Gym Launch sales call
After the diagnosis, present the most hands-on option FIRST.
Anchor: Done-For-You Launch · our team runs your launch on-site, 12 months support · $60,000
Target: Gym Launch programme · 12 weeks, done-with-you · scripts, ads, weekly coaching · $16,000
Say: "Most owners in your spot ask about done-for-you first, so let me start there."
Some say yes to the anchor. Everyone else buys $16,000 with no discount conversation.
Paid in full before onboarding. Upgrade to DFY within 30 days, $16,000 credited.`,
      steps: [
        {
          k: "The ad", t: "Gym owners. Free training. Apply.", ch: "Facebook", when: "Day −7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">GL</div><div><div class="nm">Gym Launch</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">GYM OWNERS · US</div>
                <div><div class="big">Add 30 members in 30 days.<br><em>Without dropping your price.</em></div>
                <div class="sm">Free 45-min training on the exact launch we run in our own gyms. Then apply for a call.</div></div>
              </div>
              <div class="cta"><span>gymlaunch.com/train</span><b>Watch free</b></div>
              <div class="cap"><b>Gym Launch</b> Not for gyms under 50 members. If you can't run a front-desk script, this won't work for you either.</div>
            </div></div></div>`,
          why: [
            ["Free training, then application", "The ad sells a video, the video sells a call. Prices are never seen before a human is on the line."],
            ["Qualify in the caption", "“Not under 50 members” filters for owners who can afford the target — and a few who can afford the anchor."],
            ["Result framed in members, not marketing", "30 members in 30 days is the same outcome both tiers deliver. The tiers differ only in who does the work."]
          ],
          q: ["The upsell happens after the yes, not in the ad. Get them in the room first.", "framework · upsell offers"]
        },
        {
          k: "Application", t: "Numbers first, so the call can diagnose.", ch: "Application page", when: "Day −6",
          html: `<div class="web">
            <div class="bar"><i></i><i></i><i></i><div class="url">gymlaunch.com/apply</div></div>
            <div class="body">
              <div class="eyebrow">Apply for a launch call · 15 min</div>
              <h5>Tell us about your gym. <em>We'll tell you what a launch would do.</em></h5>
              <div class="rules">
                <div class="rule"><div class="n">Q1</div><div class="t">Current members</div><div class="s">Dan: 180</div></div>
                <div class="rule"><div class="n">Q2</div><div class="t">Monthly revenue</div><div class="s">Dan: $24,000</div></div>
                <div class="rule"><div class="n">Q3</div><div class="t">Staff on the floor</div><div class="s">Dan: 2 coaches + me</div></div>
              </div>
              <div class="payout"><b>Q4</b><span>If we could run the whole launch for you — ads, front desk, sales — would you want that, or do you want to learn to run it yourself?</span></div>
              <div class="btn">Book my launch call <small>Next 48 hours · 6 slots</small></div>
            </div></div>`,
          why: [
            ["Revenue and staff are the anchor's inputs", "$24,000/month with two coaches tells the closer whether done-for-you is affordable before it is mentioned."],
            ["Q4 plants the anchor", "“Run the whole launch for you” is on the form. On the call, starting with done-for-you feels like answering his question."],
            ["Still no price", "Numbers flow from him to the company. Nothing has flowed back yet — the first price he hears will be the anchor."]
          ],
          q: ["Never quote the target price before the anchor has been seen. Order is the whole mechanism.", "framework · anchor upsell"]
        },
        {
          k: "The call", t: "“Let me start with done-for-you.”", ch: "Phone · sales call", when: "Day −4",
          html: `<div class="say anc-say">
            <div class="who"><div class="av">M</div><div><b>Marcus · Gym Launch</b><small>Closer · launch call · minute 9</small></div></div>
            <q>Dan, 180 members, $24K a month, you on the floor — a launch should add 40 to 60 members in six weeks. There are two ways we do it. <em>Most owners in your spot ask about the done-for-you option first, so let me start there,</em> then I'll show you the one most gyms your size actually take.</q>
          </div>`,
          why: [
            ["Diagnosis before price", "Nine minutes of his numbers first. The anchor is presented as a fit for his situation, not a menu."],
            ["Anchor first, explicitly", "“Let me start there” — the most expensive tier is opened deliberately, framed as what people like him ask about."],
            ["The walk-down is announced", "“The one most gyms your size take” pre-sells the target as the popular, reasonable choice before he hears its price."]
          ],
          q: ["Present the premium version first so every other price is judged against it, not against zero.", "framework · anchor upsell"]
        },
        {
          k: "Two options", t: "$60,000 first. Then $16,000.", ch: "Screen share · on the call", when: "Day −4",
          html: `<div class="choice anc-choice">
            <div class="ch anc-anchor">
              <div class="badge">Done-for-you</div>
              <div class="k">DFY Launch · team on-site</div>
              <div class="p">$60,000 <small>one-time</small></div>
              <ul>
                <li>Launch team <b>flies to your gym</b> for 2 weeks</li>
                <li>We run ads, front desk and <b>every sales sit-down</b></li>
                <li>Your staff trained by shadowing, live</li>
                <li>12 months of coaching after the launch</li>
                <li>Private line to a launch director</li>
              </ul>
              <div class="cr">For owners who want it done, not taught</div>
              <div class="sub">2 DFY launches per month · next open in 6 weeks</div>
            </div>
            <div class="ch best">
              <div class="badge">What most gyms your size take</div>
              <div class="k">Gym Launch · done-with-you</div>
              <div class="p">$16,000 <small>one-time</small></div>
              <ul>
                <li>Same launch playbook · <b>you run it</b>, we coach</li>
                <li>Ads, scripts, pricing sheets · all templated</li>
                <li>Weekly group coaching · 12 weeks</li>
                <li class="no">Team on-site · we run sit-downs</li>
                <li>Community of 400+ owners running it</li>
              </ul>
              <div class="cr">Same 40–60 members · you keep the skill</div>
              <div class="sub">Upgrade to DFY within 30 days · $16,000 credited</div>
            </div>
          </div>`,
          why: [
            ["$16,000 after $60,000 reads as a bargain", "Alone, $16,000 is “sixteen grand for a course”. After $60,000 it is “a quarter of the price and I learn it”."],
            ["Some owners say yes to $60,000", "Enough gyms took the done-for-you tier that the anchor was a profit line of its own, not a prop."],
            ["Target priced up, never discounted", "The anchor let the target hold a full-ticket price. Nobody negotiated $16,000 down after seeing $60,000."]
          ],
          q: ["The target should look like the reasonable middle even when there are only two options.", "framework · anchor upsell"]
        },
        {
          k: "Invoice", t: "Paid in full before onboarding.", ch: "Stripe · invoice", when: "Day −4",
          html: `<div class="pay">
            <div class="h"><span>Gym Launch · Dan's Gym, Columbus</span><b>INVOICE · GL-8814</b></div>
            <div class="body">
              <div class="row"><span>Gym Launch programme · 12 weeks · done-with-you</span><span>$16,000</span></div>
              <div class="row"><span>Templates · weekly coaching · owner community</span><span>included</span></div>
              <div class="row"><span>DFY Launch · $60,000</span><span>not selected</span></div>
              <div class="row tot"><span>Pay today</span><span>$16,000</span></div>
              <div class="note"><b>Upgrade window:</b> switch to Done-For-You within 30 days and this $16,000 is credited in full against $60,000.</div>
              <div class="go">Pay $16,000 · Card / ACH</div>
              <div class="disc">Onboarding call within 24 h of payment · no payment plan on this tier</div>
            </div></div>`,
          why: [
            ["One payment, full ticket", "$16,000 on the call, no plan, no discount. The anchor did the negotiating."],
            ["The anchor on the invoice", "“Not selected” plus a 30-day credit keeps the $60,000 door open while he is most excited."],
            ["Cash funds the next ad", "Sixteen thousand today pays for the free-training ads that bring the next twenty owners."]
          ],
          q: ["An anchor that never sells still earns — it raises what everyone else pays.", "framework · anchor upsell"]
        },
        {
          k: "Onboarding", t: "Week 1 plan. Upgrade line included.", ch: "Email", when: "Day −3",
          html: `<div class="mail">
            <div class="h"><div class="s">Dan, your launch starts Monday — here's week 1</div><div class="f">From: Marcus · Gym Launch &lt;marcus@gymlaunch.com&gt; · to Dan</div></div>
            <div class="body">
              <p>Welcome in. Your onboarding call is Friday 2 PM ET. Before then:</p>
              <p><b>01</b> Watch “Launch Setup” (38 min) in the portal<br><b>02</b> Send your current price sheet and front-desk script<br><b>03</b> Load the 6-week ad set — we review it live Friday<br><b>04</b> Block Mon/Wed 10 AM for the 12 weekly coaching calls</p>
              <p>One more thing: if halfway through you'd rather we run it, the DFY team has a slot in 6 weeks and your $16,000 credits across in full. Just reply “DFY”.</p>
              <div class="cta">Open the portal</div>
            </div></div>`,
          why: [
            ["Delivery starts within hours", "Fast onboarding is what makes the target feel worth $16,000 — and keeps the refund question from ever forming."],
            ["The anchor gets one line, not a pitch", "“Reply DFY” is a door, not a push. Owners who struggle in week 4 know exactly where it is."],
            ["The upsell chain continues", "The target buyer today is the anchor buyer, or the continuity buyer, in twelve weeks."]
          ],
          q: ["Every buyer of the target is a future buyer of the anchor. Keep the door open.", "framework · upsell offers"]
        }
      ]
    },

    /* ───────────────────────── 3 · RESTAURANT MENU (adapted) ───────────────────────── */
    {
      label: "Restaurant · chef's counter first",
      source: "How the anchor shows up on a restaurant menu — the classic version of the mechanic (adapted)",
      client: "Arjun",
      about: "Arjun, 36, books a Saturday table in Bandra, Mumbai for two. The menu and the server open with the ₹9,500 chef's counter; he takes the ₹3,800 tasting menu — instead of the ₹2,000 à la carte he would have ordered. Illustrative; not a story the chapter tells.",
      copy: `ANCHOR UPSELL — restaurant menu and server script
Print the most complete experience at the TOP of the menu, and open with it.
Anchor: Chef's Counter · 12 courses at the pass · ₹9,500 per head
Target: Tasting Menu · 7 courses · ₹3,800 per head (wine pairing +₹1,800)
Below both: à la carte, mains ₹900–1,400.
Server line: "Shall I start with the Chef's Counter? It's our most complete experience."
Most tables take the tasting menu. A few take the counter every night.`,
      steps: [
        {
          k: "Reservation", t: "Two seatings named, no prices.", ch: "WhatsApp", when: "Day −2",
          html: `<div class="phone anc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">EM</div><div>Ember · Bandra<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Hi Arjun, table for 2 confirmed — Sat 8:30 PM 🍽️<span class="tm">11:02 AM</span></div>
                <div class="bub">Two ways to eat with us: the Chef's Counter (12 courses, at the pass, 4 seats) or the Tasting Room (7-course tasting or à la carte). Your server will walk you through both when you're seated.<span class="tm">11:02 AM</span></div>
                <div class="bub me">Tasting room is fine. Any veg options?<span class="tm">11:20 AM ✓✓</span></div>
                <div class="bub">Fully veg versions of both menus, yes. See you Saturday!<span class="tm">11:21 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["The anchor is introduced before arrival", "He has heard “Chef's Counter, 12 courses, 4 seats” two days early. It will not feel like a hustle at the table."],
            ["No numbers yet", "Prices belong on the card, in order, with the anchor on top. WhatsApp would put ₹3,800 next to nothing."],
            ["Scarcity is physical", "Four seats at the pass are real. Real limits make the anchor believable — and occasionally sold."]
          ],
          q: ["Never quote the target price before the anchor has been seen. Order is the whole mechanism.", "framework · anchor upsell"]
        },
        {
          k: "The menu", t: "₹9,500 on top. ₹3,800 under it.", ch: "Printed card · at the table", when: "Day 0",
          html: `<div class="poster anc-poster">
            <div class="k">Ember · Bandra · Saturday</div>
            <h5>Tonight</h5>
            <div class="anc-menu">
              <div class="sec">The pass</div>
              <div class="r top"><span>Chef's Counter<small>12 courses · 4 seats at the pass · 2 h 45 min</small></span><b>₹9,500</b></div>
              <div class="sec">The tasting room</div>
              <div class="r"><span>Tasting Menu<small>7 courses · veg or non-veg · 1 h 45 min</small></span><b>₹3,800</b></div>
              <div class="r"><span>Wine pairing<small>5 pours · with either menu</small></span><b>₹1,800</b></div>
              <div class="sec">À la carte</div>
              <div class="r"><span>Mains<small>from the tasting kitchen</small></span><b>₹900–1,400</b></div>
            </div>
            <div class="fine">Prices per person · taxes extra · counter seats by prior booking</div>
          </div>`,
          why: [
            ["Reading order is price order", "The eye lands on ₹9,500 first. Everything below it is now “less than the counter”, not “more than a main”."],
            ["The target sits in the middle", "Counter above, à la carte below. ₹3,800 is the reasonable middle of a three-line menu — by design."],
            ["Highlight the anchor, not the target", "The gold band is on ₹9,500. Highlighting the target would look like pushing; highlighting the anchor looks like pride."]
          ],
          q: ["The target should look like the reasonable middle even when there are only two options.", "framework · anchor upsell"]
        },
        {
          k: "The server", t: "“Shall I start with the counter?”", ch: "In person · at the table", when: "Day 0",
          html: `<div class="say anc-say">
            <div class="who"><div class="av">P</div><div><b>Priyanka</b><small>Server · Ember · table 6</small></div></div>
            <q>Good evening. Two ways to do tonight. <em>Shall I start with the Chef's Counter? It's our most complete experience</em> — twelve courses, you sit at the pass, the chef plates in front of you. Most tables in the room go for the seven-course tasting, which is the same kitchen in an hour forty-five. Either way, veg is sorted.</q>
          </div>`,
          why: [
            ["Anchor spoken, not just printed", "Hearing “most complete experience” before any number does what the card does, twice."],
            ["The walk-down is social", "“Most tables go for the tasting” makes ₹3,800 the normal choice. Nobody wants to be the cheap table."],
            ["No mention of à la carte", "The ₹900 main is on the card but not in the script. The floor of the conversation is ₹3,800."]
          ],
          q: ["Present the premium version first so every other price is judged against it, not against zero.", "framework · anchor upsell"]
        },
        {
          k: "The choice", t: "Counter or tasting. He picks tasting.", ch: "At the table", when: "Day 0",
          html: `<div class="choice anc-choice">
            <div class="ch anc-anchor">
              <div class="badge">Most complete</div>
              <div class="k">Chef's Counter</div>
              <div class="p">₹9,500 <small>per head</small></div>
              <ul>
                <li><b>12 courses</b> · plated at the pass</li>
                <li>Seat at the counter · chef talks you through</li>
                <li>Kitchen tour before service</li>
                <li>Signed menu to take home</li>
                <li>2 h 45 min</li>
              </ul>
              <div class="cr">4 seats · 1 pair open tonight</div>
              <div class="sub">Wine pairing +₹1,800</div>
            </div>
            <div class="ch best">
              <div class="badge">What most tables take</div>
              <div class="k">Tasting Menu</div>
              <div class="p">₹3,800 <small>per head</small></div>
              <ul>
                <li><b>7 courses</b> · same kitchen, same chef</li>
                <li>Tasting room · your own table</li>
                <li class="no">Kitchen tour · counter seat</li>
                <li>Veg or non-veg version</li>
                <li>1 h 45 min</li>
              </ul>
              <div class="cr">The dish everyone posts is course 5</div>
              <div class="sub">Wine pairing +₹1,800</div>
            </div>
          </div>`,
          why: [
            ["Same chef, same kitchen", "The target repeats the anchor's core value. The only thing he gives up is the seat — not the food."],
            ["₹3,800 versus a ₹1,200 main", "Without the anchor he orders two mains: ₹2,400 for the table. With it: ₹7,600 plus wine. Same kitchen, same night."],
            ["Some pairs take the counter", "One pair a night at ₹19,000 is the anchor paying for itself. The rest of the room pays more because it exists."]
          ],
          q: ["An anchor that never sells still earns — it raises what everyone else pays.", "framework · anchor upsell"]
        },
        {
          k: "The bill", t: "₹11,200 for a ₹2,400 table.", ch: "Printed bill", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Ember · table 6 · 2 covers</span><b>BILL · 0417</b></div>
            <div class="body">
              <div class="row"><span>Tasting Menu × 2</span><span>₹7,600</span></div>
              <div class="row"><span>Wine pairing × 2</span><span>₹3,600</span></div>
              <div class="row"><span>Chef's Counter</span><span>—</span></div>
              <div class="row tot"><span>Total</span><span>₹11,200</span></div>
              <div class="note"><b>Next time:</b> counter seats open for Saturday the 21st — reply to your WhatsApp confirmation to hold a pair.</div>
              <div class="go">Pay ₹11,200 · UPI / Card</div>
              <div class="disc">Taxes included · service at your discretion</div>
            </div></div>`,
          why: [
            ["The pairing rode in on the anchor", "After deciding “not ₹9,500”, ₹1,800 for wine feels small. Add-ons sell better below a high anchor."],
            ["The anchor gets a line on the bill", "“Chef's Counter — ”. He reads it again as he pays, and the note offers the seat for next time."],
            ["The whole night was priced by the first line", "Counter on the card, counter in the script, counter on the bill. Every number was compared to ₹9,500."]
          ],
          q: ["Every buyer of the target is a future buyer of the anchor. Keep the door open.", "framework · upsell offers"]
        }
      ]
    },

    /* ───────────────────────── 4 · WEDDING PHOTOGRAPHER (adapted) ───────────────────────── */
    {
      label: "Photographer · signature first",
      source: "How to apply it to a service business — a wedding photographer (adapted)",
      client: "Neha",
      about: "Neha, 29, Jaipur, is getting married in November and budgets ₹1,20,000 for photos. The studio shows its ₹6,00,000 Signature package first on the call, then the ₹1,80,000 Classic — which she books. Illustrative; not a story the chapter tells.",
      copy: `ANCHOR UPSELL — wedding photography packages
On the call, present the Signature package FIRST, then Classic.
Anchor: Signature · 3 days, 3 photographers + 2 cinematographers, drone, same-day edit, 2 albums · ₹6,00,000
Target: Classic · 2 days, 2 photographers + 1 cinematographer, highlight film, 1 album · ₹1,80,000
Say: "Let me start with Signature — it's everything we can do — then Classic."
50% advance on booking. Upgrade to Signature until 60 days before the wedding; only the difference is charged.
Never send a price list by WhatsApp. Prices are shown on the call, Signature first.`,
      steps: [
        {
          k: "The ad", t: "The work, not the price list.", ch: "Instagram", when: "Day −10",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">SL</div><div><div class="nm">saffronlight.studio</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">JAIPUR · NOV–FEB WEDDINGS</div>
                <div><div class="big">Your wedding, shot like a film.<br><em>Not like an event.</em></div>
                <div class="sm">Booking Nov–Feb. 6 weekends left. See packages on a 20-min call.</div></div>
              </div>
              <div class="cta"><span>saffronlight.in</span><b>Book a call</b></div>
              <div class="cap"><b>saffronlight.studio</b> We shoot 30 weddings a year, not 100. Dates go first-come. Packages shared on the call, not over DM 🙏</div>
            </div></div></div>`,
          why: [
            ["“Packages on the call” is the rule", "A price list by DM would be read from the cheapest line up. On a call, the studio controls the order."],
            ["Scarcity from capacity", "Six weekends left is real. It lets the call move fast without discounting."],
            ["Sell the outcome both tiers share", "“Shot like a film” is what Signature and Classic both deliver. The tiers differ in scale, not in quality."]
          ],
          q: ["The upsell happens after the yes, not in the ad. Get them in the room first.", "framework · upsell offers"]
        },
        {
          k: "DM reply", t: "No list. A call, Signature first.", ch: "WhatsApp", when: "Day −9",
          html: `<div class="phone anc-tight"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Rishabh · Saffron Light<small>online</small></div></div>
              <div class="body">
                <div class="bub me">Hi! Wedding 22–23 Nov, Jaipur, ~400 guests. Packages bhej dijiye?<span class="tm">2:05 PM ✓✓</span></div>
                <div class="bub">Hi Neha, congratulations! 22–23 Nov is open 🎉 We don't send a list — every wedding is different, so I walk you through both packages on a 20-min call, starting with everything we can do and then the one most couples pick. Tomorrow 7 PM?<span class="tm">2:12 PM</span></div>
                <div class="bub me">7 PM works. Roughly what range?<span class="tm">2:20 PM ✓✓</span></div>
                <div class="bub">Two packages, one for full-scale 3-day weddings and one for 2-day. I'll show both properly tomorrow with sample films — 20 min, promise 🙂<span class="tm">2:22 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Refuse the list, kindly", "“Every wedding is different” is true and it protects the order of presentation. The anchor must come first."],
            ["Pre-frame the walk-down", "“Everything we can do, then the one most couples pick” — she already expects to choose the second option."],
            ["Two exposures of the anchor before any price", "Ad, then DM. By the call, “full-scale 3-day” is familiar and ₹6,00,000 will not shock."]
          ],
          q: ["Never quote the target price before the anchor has been seen. Order is the whole mechanism.", "framework · anchor upsell"]
        },
        {
          k: "The call", t: "“Let me start with Signature.”", ch: "Video call", when: "Day −8",
          html: `<div class="say anc-say">
            <div class="who"><div class="av">R</div><div><b>Rishabh · Saffron Light</b><small>Founder · video call · minute 6</small></div></div>
            <q>Two days, four hundred guests, haldi in the morning. <em>Let me start with Signature — it's everything we can do</em> — three photographers, two cinematographers, drone, a same-day edit played at the reception, two albums. Then I'll show you Classic, which is what most of our two-day couples take.</q>
          </div>`,
          why: [
            ["Anchor by name, first", "He opens at the top and says so. She hears the full scope before a rupee is mentioned."],
            ["Everything real, everything deliverable", "Three photographers and a same-day edit exist. If she says yes, the studio is glad to shoot it."],
            ["The target is pre-labelled “most couples”", "Classic is introduced as the normal choice before its price. She expects to land there — at ₹1,80,000, not ₹1,20,000."]
          ],
          q: ["Present the premium version first so every other price is judged against it, not against zero.", "framework · anchor upsell"]
        },
        {
          k: "Two packages", t: "₹6,00,000 first. Then ₹1,80,000.", ch: "Screen share · on the call", when: "Day −8",
          html: `<div class="choice anc-choice">
            <div class="ch anc-anchor">
              <div class="badge">Everything we can do</div>
              <div class="k">Signature · 3 days</div>
              <div class="p">₹6,00,000 <small>all-in</small></div>
              <ul>
                <li><b>3 photographers + 2 cinematographers</b></li>
                <li>Drone · all 3 days</li>
                <li><b>Same-day edit</b> played at the reception</li>
                <li>Feature film 12 min + 2 albums</li>
                <li>Pre-wedding shoot · any city</li>
              </ul>
              <div class="cr">For 3-day, 600+ guest weddings</div>
              <div class="sub">2 Signature weddings a season</div>
            </div>
            <div class="ch best">
              <div class="badge">What most 2-day couples take</div>
              <div class="k">Classic · 2 days</div>
              <div class="p">₹1,80,000 <small>all-in</small></div>
              <ul>
                <li><b>2 photographers + 1 cinematographer</b></li>
                <li>Drone · reception day</li>
                <li class="no">Same-day edit</li>
                <li>Highlight film 5 min + 1 album</li>
                <li>Pre-wedding shoot · Jaipur</li>
              </ul>
              <div class="cr">Same team, same edit style</div>
              <div class="sub">Upgrade to Signature till 60 days out · difference only</div>
            </div>
          </div>`,
          why: [
            ["₹1,80,000 after ₹6,00,000 is “under a third”", "Alone it is ₹60,000 over her budget. After the anchor, it is the sensible package for a two-day wedding."],
            ["Some families take Signature", "Two a season at ₹6,00,000 is a real revenue line. The anchor is a product, not a decoy."],
            ["The target lost one thing, visibly", "The struck-out same-day edit shows what ₹4,20,000 buys. It makes Classic feel complete, not stripped."]
          ],
          q: ["The target should look like the reasonable middle even when there are only two options.", "framework · anchor upsell"]
        },
        {
          k: "Advance", t: "50% today holds the date.", ch: "Razorpay · payment link", when: "Day −7",
          html: `<div class="pay">
            <div class="h"><span>Saffron Light · Neha &amp; Karan · 22–23 Nov</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Classic · 2 days · 2 photographers + 1 cinematographer</span><span>₹1,80,000</span></div>
              <div class="row"><span>Highlight film · album · pre-wedding shoot</span><span>included</span></div>
              <div class="row"><span>Signature · ₹6,00,000</span><span>not selected</span></div>
              <div class="row tot"><span>Advance today · 50%</span><span>₹90,000</span></div>
              <div class="note"><b>Balance ₹90,000</b> due 7 days before the wedding. <b>Upgrade to Signature</b> until 23 Sep — pay only the ₹4,20,000 difference.</div>
              <div class="go">Pay ₹90,000 · UPI / Card</div>
              <div class="disc">Date locked on payment · advance non-refundable · GST extra</div>
            </div></div>`,
          why: [
            ["Half now locks the date", "₹90,000 today is more than she planned to spend in total. Nobody asked for a discount — the anchor already gave one."],
            ["Signature stays on the receipt", "“Not selected” and a dated upgrade line. When a parent says “add a same-day edit”, the path is already priced."],
            ["Difference-only upgrade", "Paying only ₹4,20,000 more means moving up never feels like paying twice."]
          ],
          q: ["An anchor that never sells still earns — it raises what everyone else pays.", "framework · anchor upsell"]
        },
        {
          k: "Contract", t: "Scope signed. Upgrade clause in ink.", ch: "PDF · e-sign", when: "Day −7",
          html: `<div class="doc anc-doc">
            <div class="stamp">SIGNED · 50% PAID</div>
            <div class="k">Wedding photography agreement</div>
            <h5>Classic package · 22–23 Nov</h5>
            <div class="chk"><div class="b"></div><div><b>Team</b><span>2 photographers, 1 cinematographer · both days · 8 AM to reception close</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Deliverables</b><span>800+ edited photos · 5-min highlight film · 1 album (40 pages) · pre-wedding shoot, Jaipur</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Payment</b><span>₹1,80,000 + GST · ₹90,000 paid · balance by 15 Nov</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Upgrade to Signature</b><span>Available until 23 Sep · ₹4,20,000 difference · adds 1 photographer, 1 cinematographer, drone both days, same-day edit, 2nd album</span></div></div>
            <div class="sig"><div class="l">Neha Agarwal</div><small>SIGNED 14 JUL · SAFFRON LIGHT STUDIO</small></div>
          </div>`,
          why: [
            ["The anchor is a clause, not a memory", "Everything Signature adds is listed in the contract she signs. The upgrade sells itself every time she rereads it."],
            ["Scope written kills scope creep", "“2 photographers, both days” in ink means any “can we also…” becomes an upgrade, not a favour."],
            ["Deadline on the upgrade", "23 September is a real staffing cut-off. A dated door gets used; an open door gets forgotten."]
          ],
          q: ["Every buyer of the target is a future buyer of the anchor. Keep the door open.", "framework · upsell offers"]
        }
      ]
    }
  ]
});
