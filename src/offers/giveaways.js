// GIVEAWAYS — $100M Money Models, Section II "Attraction Offers".
// Mechanic: give away one big prize → collect many entrants → announce ONE winner publicly →
// tell every non-winner they won a runner-up prize (a deadline-bound version of the core offer) → follow up → ascend.
window.OFFERS.push({
  slug: "giveaways",
  name: "Giveaways",
  css: `
.gv-form{margin:12px 0 0}
.gv-form .f{display:flex;align-items:center;justify-content:space-between;border:1px solid var(--line2);border-radius:8px;padding:9px 12px;margin-bottom:8px;font-size:12.5px;color:var(--ink);background:#fff}
.gv-form .f span{font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute)}
.gv-form .f.ok{border-color:var(--green);background:var(--green-xl)}
.gv-form .f i{width:14px;height:14px;border:1.5px solid var(--green);border-radius:3px;background:var(--green);position:relative;flex:none;margin-right:8px;font-style:normal}
.gv-form .f i::after{content:"";position:absolute;left:4px;top:1px;width:4px;height:7px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}
.gv-form .f .l{display:flex;align-items:center}
.gv-two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.gv-count{display:flex;gap:6px;justify-content:center;margin:10px 0}
.gv-count div{background:#1E1E1A;color:#fff;border-radius:8px;padding:8px 10px;min-width:56px;text-align:center}
.gv-count b{display:block;font-family:var(--serif);font-size:22px;line-height:1}
.gv-count span{font-family:var(--mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.7}
.gv-sms .h{background:#1E1E1A}
.gv-sms .h .av{background:#7FE7C4;color:#1E1E1A}
.gv-sms .body{background:#F2F2F7}
.gv-sms .bub.me{background:#1E1E1A;color:#fff}
.gv-sms .bub.me .tm{color:#bbb}
.gv-post{padding:10px 12px;font-size:12.5px;line-height:1.45;color:#222;flex:none}
.gv-post b{display:block;margin-bottom:2px}
.gv-post .mt{font-size:10.5px;color:#777;margin-top:4px}
.gv-ticket{margin:6px 0;background:#fff;border:1px dashed var(--green);border-radius:8px;padding:8px 10px;font-family:var(--mono);font-size:10.5px;letter-spacing:.04em;color:var(--green-d)}
.gv-ticket b{display:block;font-family:var(--serif);font-size:18px;letter-spacing:0;color:var(--ink);margin-top:2px}
.gv-ig-img{background:linear-gradient(160deg,#173D2C,#2E9E6E)!important}
.gv-ig-img.gold{background:linear-gradient(160deg,#5A4410,#C9962B)!important}
.gv-ig-img.coral{background:linear-gradient(160deg,#7A2A28,#E8706E)!important}
.gv-ig-img.ink{background:linear-gradient(160deg,#1E1E1A,#4A4A44)!important}
.gv-stat{display:flex;gap:8px;margin:8px 0 0}
.gv-stat div{flex:1;background:rgba(255,255,255,.12);border-radius:8px;padding:6px 8px;text-align:center}
.gv-stat b{display:block;font-family:var(--serif);font-size:16px;line-height:1}
.gv-stat span{font-family:var(--mono);font-size:8px;letter-spacing:.1em;text-transform:uppercase;opacity:.8}
.gv-strike{color:var(--mute);text-decoration:line-through;font-weight:400;font-size:13px;margin-right:6px}
`,
  examples: [

    /* ───────────────────────── 1 · ALEX'S GYM (US) ───────────────────────── */
    {
      label: "Alex's gym · free year",
      source: "Alex's own gym, as told in the book · kept US-native ($) · call-script details adapted",
      client: "Megan",
      about: "Megan, 34, enters a Facebook giveaway for a free year of membership. She doesn't win. Alex calls her the next morning: she won the runner-up prize instead.",
      copy: `WIN A FREE YEAR — Giveaway
Grand prize: 12 months of membership ($1,188 value). One winner, drawn live Friday.
Enter: name + phone + email. Extra entries for every friend you tag.
Runner-up prize (every non-winner, by phone, within 24 h):
6-Week Challenge at $299 (normally $599) + free nutrition plan.
Condition: claim within 48 hours; start by Monday; 20 spots.
After challenge: challenge fee applied as credit to a 12-month membership.`,
      steps: [
        {
          k: "The giveaway ad", t: "Give away the biggest thing you sell.", ch: "Facebook", when: "Day −7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">AF</div><div><div class="nm">Alex's Fitness · Sacramento</div><div class="sp">Sponsored</div></div></div>
              <div class="img gv-ig-img">
                <div class="tag">GIVEAWAY · ENDS FRIDAY</div>
                <div><div class="big">Win a FREE YEAR<br><em>of membership.</em></div>
                <div class="sm">$1,188 value · one winner drawn live Friday 6 PM · takes 30 seconds to enter.</div></div>
              </div>
              <div class="cta"><span>alexsfitness.com/win</span><b>Enter now</b></div>
              <div class="cap"><b>alexsfitness</b> Tag a friend who needs this = 1 extra entry each. No purchase, no catch. Winner announced on this page. 🎉</div>
            </div></div></div>`,
          why: [
            ["Prize = your core offer, super-sized", "A free year attracts only people who want a gym. A free iPad attracts everyone — and nobody buys."],
            ["Zero-friction entry gets cheap leads", "Nothing to buy, nothing to lose. Cost per lead on a giveaway ad is a fraction of a sales ad."],
            ["Tagging makes the ad spread itself", "Each entrant recruits their own friends for an extra entry. Free reach, pre-qualified by association."]
          ],
          q: ["The giveaway isn't the offer. It's the excuse to collect hundreds of hand-raisers you can make an offer to.", "framework · giveaways"]
        },
        {
          k: "Entry form", t: "Thirty seconds, three fields.", ch: "Landing page", when: "Day −7",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">alexsfitness.com/win</div></div>
            <div class="body"><div class="eyebrow">Free-year giveaway · draws Friday 6 PM</div>
            <h5>Enter to win <em>12 months free.</em></h5>
            <div style="font-size:13px;color:var(--dim)">One winner. Drawn live on our Facebook page. Fill this in and you're entered.</div>
            <div class="gv-form">
              <div class="f"><div>Megan Reyes</div><span>Name</span></div>
              <div class="gv-two"><div class="f"><div>(916) 555-0142</div><span>Mobile</span></div><div class="f"><div>megan.r@gmail.com</div><span>Email</span></div></div>
              <div class="f ok"><div class="l"><i></i>Text me the result on Friday</div><span>SMS</span></div>
              <div class="f ok"><div class="l"><i></i>Tagged 2 friends on the post</div><span>+2 entries</span></div>
            </div>
            <div class="btn">Enter the giveaway <small>Winner drawn Fri 6 PM · 312 entries so far</small></div></div></div>`,
          why: [
            ["The phone number is the product", "Every field after name and mobile is a leak. The whole giveaway exists to earn permission to call her."],
            ["Opt-in for the result", "“Text me the result” is her asking to be contacted. The runner-up call now arrives as expected news."],
            ["Public entry count", "312 entries makes the prize feel real and worth having — and tells her she probably won't win."]
          ],
          q: ["Ask for what you need to follow up, and not one thing more.", "framework · giveaways"]
        },
        {
          k: "Entry confirmed", t: "Now she's waiting for Friday.", ch: "SMS", when: "Day −7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa gv-sms">
              <div class="h"><div class="av">AF</div><div>Alex's Fitness<small>SMS · (916) 555-0100</small></div></div>
              <div class="body">
                <div class="bub">Megan, you're in! 🎟 Entry #313 for the FREE YEAR giveaway.
                  <div class="gv-ticket">ENTRY NO.<b>#313 · +2 bonus</b></div>
                  Drawing is LIVE this Friday 6 PM on our Facebook page. I'll text you the result either way. — Alex<span class="tm">Mon 7:41 PM</span></div>
                <div class="bub me">Awesome, fingers crossed 🤞<span class="tm">7:44 PM</span></div>
                <div class="bub">Ha — 3 entries is better odds than most. Talk Friday.<span class="tm">7:45 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["A ticket number makes it feel like a lottery", "#313 is a thing she owns now. She'll open Friday's message to find out what happened to it."],
            ["“Either way” pre-frames the runner-up call", "She's been told a message is coming even if she loses. The follow-up is now expected, not spam."],
            ["Signed by a person", "“— Alex” means the number she hears from on Saturday belongs to someone she's already talked to."]
          ],
          q: ["Set the expectation of contact before the contact. The giveaway buys you the right to follow up.", "framework · giveaways"]
        },
        {
          k: "Winner drawn", t: "One winner. Loudly. On video.", ch: "Facebook Live", when: "Day 0 · Friday 6 PM",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">AF</div><div><div class="nm">Alex's Fitness · Sacramento</div><div class="sp">Was live · 2.1K views</div></div></div>
              <div class="img gv-ig-img gold">
                <div class="tag">LIVE DRAW · 418 ENTRIES</div>
                <div><div class="big">Entry #207<br><em>wins the free year.</em></div>
                <div class="gv-stat"><div><b>418</b><span>entries</span></div><div><b>1</b><span>winner</span></div><div><b>417</b><span>runner-ups</span></div></div></div>
              </div>
              <div class="gv-post"><b>alexsfitness</b> Congrats to our winner — a full year on us! 🎉 Everyone else: check your phone tomorrow morning. You didn't leave empty-handed.<div class="mt">Friday 6:14 PM · 64 comments · 38 shares</div></div>
            </div></div></div>`,
          why: [
            ["A real draw, in public", "The live video is proof the prize was real. That credibility is what makes tomorrow's call believable."],
            ["Tease the runner-up prize on the post", "“Check your phone tomorrow” means 417 people are now waiting for the call instead of dodging it."],
            ["The winner is your next ad", "A year on us, filmed. Her 12 months of results become the creative for the next giveaway."]
          ],
          q: ["Pay the prize in public. The one winner is your proof; the 417 losers are your customers.", "framework · giveaways"]
        },
        {
          k: "The runner-up call", t: "“You didn't win… but you did win.”", ch: "Phone call", when: "Day 1 · Saturday 9 AM",
          html: `<div class="say"><div class="who"><div class="av">A</div><div><b>Alex · owner</b><small>Phone · 9:12 AM · Saturday</small></div></div>
            <q>Hey Megan, it's Alex from the gym — you entered the free-year giveaway. Bad news first: you didn't win the grand prize. Good news: <em>you did win a runner-up prize.</em> Everyone who entered gets our 6-Week Challenge at half — $299 instead of $599, nutrition plan included. Only catch: it's for the next batch, which starts Monday, and I've got 20 spots. <em>Want me to hold one for you?</em></q></div>`,
          why: [
            ["Everybody wins something", "The runner-up prize is the actual offer. It's your core product with a real discount and a real reason for it."],
            ["Bad news first, then the gift", "She braced for a loss; she got a prize. The relief is what makes “yes” easy on a Saturday morning."],
            ["A deadline that makes sense", "Monday's batch and 20 spots aren't invented scarcity — a challenge cohort really does start on a date."]
          ],
          q: ["The giveaway prize costs you one membership. The runner-up prize is where the money is made — call every single entrant.", "framework · giveaways"]
        },
        {
          k: "Claim the prize", t: "Claim it in 48 hours.", ch: "Checkout link · SMS", when: "Day 1",
          html: `<div class="pay"><div class="h"><span>Alex's Fitness · Runner-up prize</span><b>STRIPE · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Challenge · Monday batch</span><span><span class="gv-strike">$599</span>$299</span></div>
              <div class="row"><span>Nutrition plan + weekly check-ins</span><span>included</span></div>
              <div class="row"><span>Giveaway runner-up discount</span><span>−$300</span></div>
              <div class="row tot"><span>Pay today</span><span>$299</span></div>
              <div class="note">🎟 <b>Entry #313 · runner-up prize.</b> Link expires Sunday 9 PM. 14 of 20 spots left.</div>
              <div class="go">Claim my spot · $299</div>
              <div class="disc">Split in 2 · $150 today, $149 on Day 21</div>
            </div></div>`,
          why: [
            ["The prize has a price", "Runner-up ≠ free. She pays $299 for something worth $599; the giveaway is why the discount is legitimate."],
            ["Expiry is on the receipt", "Sunday 9 PM. Without a hard close, “I'll do it next month” eats most of the 417."],
            ["Cash on Day 1", "Half of a challenge fee from a fraction of 417 entrants pays for the whole giveaway and the ads many times over."]
          ],
          q: ["A discount with no reason is a price cut. A discount with a reason is a prize.", "framework · giveaways"]
        },
        {
          k: "After the challenge", t: "The $299 becomes the down payment.", ch: "In person · Week 6", when: "Week 6",
          html: `<div class="choice">
            <div class="ch dim"><div class="k">Option A</div><div class="p">$0 <small>walk away</small></div>
              <ul><li>Challenge complete · 11 lb down</li><li>Nutrition plan is yours to keep</li><li class="no">Coach check-ins</li><li class="no">6 AM crew</li></ul>
              <div class="sub">Totally fine. Door's open.</div></div>
            <div class="ch best"><div class="badge">Runner-up bonus</div><div class="k">Option B</div><div class="p">$99 <small>/ month · 12 months</small></div>
              <ul><li>Same coach, same 6 AM crew</li><li>Check-ins + plan continue</li><li><b>Your $299 challenge fee applied as credit</b></li></ul>
              <div class="cr">First 3 months already paid</div>
              <div class="sub">First debit in month 4 · cancel any time before</div></div>
          </div>`,
          why: [
            ["Fee-as-credit closes the loop", "The $299 she paid to claim the prize now pays her first three months. Nothing new leaves her wallet today."],
            ["Ascend at peak momentum", "Week 6, results visible, habit built. This is the cheapest moment to sell a year."],
            ["Both options are dignified", "No pressure on A. B just happens to be the path of least resistance."]
          ],
          q: ["The attraction offer buys the customer. The continuity is where the giveaway finally gets paid for.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 2 · GYM LAUNCH CLIENT · PUNE ───────────────────────── */
    {
      label: "Gym Launch · quarterly giveaway",
      source: "Gym Launch client playbook (adapted) · localised to Pune, run on WhatsApp",
      client: "Priyanka",
      about: "Priyanka, 29, Kothrud. Enters an Instagram giveaway for a free year at FitNation. Tags friends for bonus entries, doesn't win, gets the runner-up WhatsApp, a reminder, then a 72-hour claim window.",
      copy: `JEETO 1 SAAL FREE — FitNation Pune Giveaway
Grand prize: 12-month membership + 12 PT sessions (₹42,000 value). 1 winner, drawn live Sunday 7 PM.
Enter: name + WhatsApp number. Tag 3 friends = +3 entries.
Runner-up prize (every non-winner, via WhatsApp + call within 24 h):
6-Week Transformation at ₹4,999 (regular ₹9,999) + free diet chart.
Condition: claim within 72 h; batch starts Monday; 25 seats.
Day 42: ₹4,999 applied as credit to annual plan ₹2,499/mo.
Run once a quarter.`,
      steps: [
        {
          k: "The giveaway reel", t: "Jeeto ek saal FREE.", ch: "Instagram", when: "Day −7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">FN</div><div><div class="nm">fitnation.pune</div><div class="sp">Sponsored</div></div></div>
              <div class="img gv-ig-img">
                <div class="tag">KOTHRUD · GIVEAWAY</div>
                <div><div class="big">Jeeto 1 saal<br><em>FREE membership.</em></div>
                <div class="sm">₹42,000 value · 12 months + 12 PT sessions · draw LIVE Sunday 7 PM.</div></div>
              </div>
              <div class="cta"><span>fitnationpune.in/jeeto</span><b>Enter free</b></div>
              <div class="cap"><b>fitnation.pune</b> Sirf naam + WhatsApp number. 3 dost tag karo = 3 extra entries. Winner is page pe announce hoga. Koi purchase nahi. 🎁</div>
            </div></div></div>`,
          why: [
            ["Prize is a year of what you sell", "Only people who'd join a gym enter. The list is pre-qualified before a single call is made."],
            ["Tagging = free distribution", "3 tags for 3 entries. Every entrant brings three lookalikes; the ad budget stretches without touching it."],
            ["Quarterly rhythm", "Run every 90 days. Each round fills one batch and refreshes the lead list."]
          ],
          q: ["Give away the thing you sell, to the people who'd buy it, and let them bring their friends.", "framework · giveaways"]
        },
        {
          k: "Entry form", t: "Name and WhatsApp. That's it.", ch: "Landing page", when: "Day −7",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">fitnationpune.in/jeeto</div></div>
            <div class="body"><div class="eyebrow">FitNation Kothrud · 1-year giveaway</div>
            <h5>Enter to win <em>12 months free.</em></h5>
            <div style="font-size:13px;color:var(--dim)">Ek winner. Live draw Sunday 7 PM on Instagram. Result WhatsApp pe milega.</div>
            <div class="gv-form">
              <div class="f"><div>Priyanka Deshmukh</div><span>Name</span></div>
              <div class="f"><div>+91 98220 41xxx</div><span>WhatsApp</span></div>
              <div class="gv-two"><div class="f ok"><div class="l"><i></i>Send result on WhatsApp</div><span>Yes</span></div><div class="f ok"><div class="l"><i></i>Tagged 3 friends</div><span>+3</span></div></div>
            </div>
            <div class="payout"><b>₹42,000</b><span>grand prize · 1 winner · 540 entries so far</span></div>
            <div class="btn">Enter the giveaway <small>Closes Sunday 6 PM</small></div></div></div>`,
          why: [
            ["Two fields", "Every extra field costs entrants. Name + WhatsApp is enough to run the whole runner-up sequence."],
            ["Result via WhatsApp is consent", "She ticked it. The Monday message is a result she asked for, not a broadcast."],
            ["Show the prize value again", "₹42,000 keeps the reason-to-enter in front of her at the moment of commitment."]
          ],
          q: ["The form's only job is to collect a phone number you have permission to use.", "framework · giveaways"]
        },
        {
          k: "Entry confirmed", t: "Entry number, bonus entries, draw date.", ch: "WhatsApp", when: "Day −7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">FN</div><div>FitNation Pune<small>Business account</small></div></div>
              <div class="body">
                <div class="bub">Priyanka ji, aapki entry confirm ho gayi 🎟
                  <div class="gv-ticket">ENTRY NO.<b>#541 · +3 bonus</b></div>
                  <div class="board"><div class="t">Giveaway · 1 saal free</div>
                    <div class="r"><span>Your entries</span><b>4</b></div>
                    <div class="r"><span>Total entries</span><b>2,164</b></div>
                    <div class="r"><span>Live draw</span><b>Sun 7 PM · IG live</b></div></div>
                  Result Monday subah yahin bhejenge — jeete ya nahi. 🙏<span class="tm">Tue 8:05 PM</span></div>
                <div class="bub me">Done! Bhai ko bhi bola enter karne 😄<span class="tm">8:11 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Odds on display", "4 of 2,164. She knows she probably won't win — which is exactly why Monday's runner-up lands as good news."],
            ["“Jeete ya nahi” = the follow-up is booked", "She's been told a message comes either way. Monday's WhatsApp is expected."],
            ["Referral loop confirmed", "Her brother is a new lead the gym never paid for."]
          ],
          q: ["Tell them a message is coming regardless of the result. Then the offer arrives as news, not as a pitch.", "framework · giveaways"]
        },
        {
          k: "Winner announced", t: "One winner. Two thousand runner-ups.", ch: "Instagram Live · gym wall", when: "Day 0 · Sunday 7 PM",
          html: `<div class="res"><div class="top2"><div class="k">FitNation Pune · live draw · 2,164 entries</div><h5>Entry #1,382 wins.</h5><p>One year free + 12 PT sessions · drawn live on Instagram</p></div>
            <div class="body">
              <div class="kv"><div><b>2,164</b><span>entries</span></div><div><b>1</b><span>winner</span></div><div><b>2,163</b><span>runner-ups</span></div></div>
              <div class="credit">Baaki sab ke liye<b>Runner-up prize</b>check your WhatsApp Monday morning · sab kuch nahi haara</div>
              <div style="font-size:11.5px;color:var(--mute);margin-top:12px">Winner's photo on the gym wall + IG story · certificate handed over Monday 6 AM</div>
            </div></div>`,
          why: [
            ["One winner, publicly", "The draw on live video and the photo on the wall make the prize undeniably real."],
            ["Pre-announce the runner-up prize", "2,163 people now expect Monday's message. Open rate follows expectation."],
            ["The winner is content for 12 months", "Her transformation is filmed quarterly and becomes the next giveaway's reel."]
          ],
          q: ["The grand prize buys credibility. The runner-up prize buys customers. You need both.", "framework · giveaways"]
        },
        {
          k: "Runner-up message", t: "“Grand prize nahi… lekin runner-up jeeta.”", ch: "WhatsApp", when: "Day 1 · Monday 9 AM",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Rohan · FitNation<small>online</small></div></div>
              <div class="body">
                <div class="bub">Priyanka ji, giveaway ka result 👇 Grand prize aap nahi jeete — entry #1,382 ne jeeta. Lekin aap ne <b>runner-up prize</b> jeeta hai 🏆
                  <div class="board"><div class="t">Runner-up prize · entry #541</div>
                    <div class="r"><span>6-Week Transformation</span><b>₹4,999</b></div>
                    <div class="r"><span>Regular price</span><span class="gv-strike">₹9,999</span></div>
                    <div class="r"><span>Diet chart + trainer</span><b>free</b></div>
                    <div class="r"><span>Claim by</span><span class="warn">Thu 9 AM · 25 seats</span></div></div>
                  Batch Monday se shuru. Seat hold karoon? Reply <b>YES</b> ya call karo.<span class="tm">Mon 9:02 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Named prize, named entry number", "“Runner-up prize · entry #541” makes it hers. A generic 50%-off broadcast would be ignored."],
            ["The discount has a story", "Half price because she entered. That reason is what protects the regular ₹9,999 for everyone else."],
            ["72 hours, 25 seats", "Real batch, real cap. The clock is what turns 2,163 “maybe”s into a few hundred decisions."]
          ],
          q: ["Everyone who entered gets a prize. The prize is your core offer with a reason to buy now.", "framework · giveaways"]
        },
        {
          k: "Follow-up call", t: "No reply? Call. Then call again.", ch: "Phone call", when: "Day 2 · Tuesday 6 PM",
          html: `<div class="say"><div class="who"><div class="av">R</div><div><b>Rohan · FitNation front desk</b><small>Phone · 6:20 PM · Tuesday</small></div></div>
            <q>Priyanka ji, Rohan from FitNation — giveaway wala runner-up prize ke baare mein. Aapka ₹4,999 seat abhi bhi hold pe hai, <em>Thursday 9 AM tak.</em> Uske baad ₹9,999 wapas ho jaata hai aur batch full ho jaayega — 9 seats bachi hain. Ek minute lagega — <em>abhi link bhej doon?</em></q></div>`,
          why: [
            ["Most money is in attempt 2–5", "A WhatsApp nobody replied to isn't a no. Every entrant gets a call, then another."],
            ["Restate the expiry, not the pitch", "Thursday 9 AM, 9 seats. The prize is already understood; only the clock needs repeating."],
            ["Make claiming effortless", "“Abhi link bhej doon?” turns a decision into a tap."]
          ],
          q: ["Follow-up is where the giveaway makes its money. One message is an announcement; five attempts is a campaign.", "framework · giveaways"]
        },
        {
          k: "Claim & pay", t: "₹4,999. Before Thursday.", ch: "Razorpay link · WhatsApp", when: "Day 2",
          html: `<div class="pay"><div class="h"><span>FitNation Pune · Runner-up prize</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-Week Transformation · Monday batch</span><span><span class="gv-strike">₹9,999</span>₹4,999</span></div>
              <div class="row"><span>Diet chart + trainer check-ins</span><span>included</span></div>
              <div class="row"><span>Giveaway runner-up discount</span><span>−₹5,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹4,999</span></div>
              <div class="note">🎟 <b>Entry #541 · runner-up prize.</b> Link expires Thu 9 AM · 9 of 25 seats left.</div>
              <div class="go">Claim my seat · ₹4,999 · UPI / Card</div>
              <div class="disc">Day 42: ₹4,999 counts as credit towards annual plan</div>
            </div></div>`,
          why: [
            ["Full price shown, then struck", "₹9,999 → ₹4,999 on the receipt keeps the anchor. She's paying for a prize, not buying a cheap thing."],
            ["The credit is announced now", "“Counts towards annual plan” is planted on Day 2, so Week 6's upsell is a reminder, not a surprise."],
            ["Cash covers the giveaway", "A few hundred claims × ₹4,999 pays for the ₹42,000 prize and the ads on Day 2."]
          ],
          q: ["Charge for the runner-up prize. Free runner-ups don't show up; paid ones do.", "framework · giveaways"]
        },
        {
          k: "Day 42 ascension", t: "The prize money becomes the membership.", ch: "In person · at the weigh-in", when: "Week 6",
          html: `<div class="choice">
            <div class="ch dim"><div class="k">Option A</div><div class="p">₹0 <small>walk away</small></div>
              <ul><li>6 weeks done · 5.8 kg down</li><li>Diet chart aapka hai</li><li class="no">Trainer check-ins</li><li class="no">6:30 AM batch</li></ul>
              <div class="sub">Bilkul theek hai.</div></div>
            <div class="ch best"><div class="badge">Runner-up bonus</div><div class="k">Option B</div><div class="p">₹2,499 <small>/ month · 12 months</small></div>
              <ul><li>Same trainer, same batch</li><li>Check-ins + diet chart continue</li><li><b>₹4,999 already paid = first 2 months</b></li></ul>
              <div class="cr">₹0 out of pocket till month 3</div>
              <div class="sub">Next giveaway: you're the “before/after” reel</div></div>
          </div>`,
          why: [
            ["Credit makes “yes” free today", "The ₹4,999 she paid to claim the prize pays two months. The upsell costs nothing at the moment of decision."],
            ["Results sell the year", "5.8 kg at Week 6 is the best sales pitch the gym has ever had, and she made it herself."],
            ["Feed the next giveaway", "Her reel is next quarter's ad. The loop closes and restarts every 90 days."]
          ],
          q: ["The giveaway buys the lead, the runner-up prize buys the customer, the credit buys the year.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 3 · DENTAL CLINIC · JAIPUR ───────────────────────── */
    {
      label: "Other industries · dental clinic",
      source: "“Apply it to your business” (adapted) · a dental clinic in Jaipur · phone + email flow",
      client: "Arjun",
      about: "Arjun, 41, Vaishali Nagar. Enters a giveaway for a full smile makeover. Doesn't win; the clinic calls with a runner-up prize — a free check-up and ₹5,000 off any treatment, if he books this week.",
      copy: `WIN A ₹1,00,000 SMILE MAKEOVER — Smile Studio Jaipur Giveaway
Grand prize: full smile makeover (aligners/veneers/whitening as needed). 1 winner, drawn on the 30th.
Enter: name + mobile + email. Extra entry for each friend referred.
Runner-up prize (every non-winner, by phone within 48 h):
Free consultation + scan + cleaning (₹2,500 value) AND ₹5,000 credit on any treatment.
Condition: book the visit within 7 days; credit valid 30 days from visit.
At visit: treatment plan with credit applied; annual dental plan offered.`,
      steps: [
        {
          k: "The giveaway ad", t: "The biggest thing a dentist can give.", ch: "Facebook", when: "Day −10",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">SS</div><div><div class="nm">Smile Studio Jaipur</div><div class="sp">Sponsored</div></div></div>
              <div class="img gv-ig-img ink">
                <div class="tag">VAISHALI NAGAR · GIVEAWAY</div>
                <div><div class="big">Win a ₹1 lakh<br><em>smile makeover.</em></div>
                <div class="sm">Aligners, veneers or whitening — whatever your smile needs. One winner, 30th of this month.</div></div>
              </div>
              <div class="cta"><span>smilestudiojpr.in/win</span><b>Enter free</b></div>
              <div class="cap"><b>Smile Studio Jaipur</b> No purchase. 30 seconds to enter. Refer a friend = extra entry. Winner announced by email + on this page. 🦷</div>
            </div></div></div>`,
          why: [
            ["Prize = the top of your menu", "A ₹1 lakh makeover only tempts people with teeth they want fixed. Every entrant is a treatment lead."],
            ["Cost of prize = one patient's ad budget", "Materials and chair time for one makeover is cheap next to paying for hundreds of leads."],
            ["Referral entry", "Friends of people with dental worries tend to have dental worries."]
          ],
          q: ["Give away your most expensive service. It costs you cost-of-goods and buys you a list of your best prospects.", "framework · giveaways"]
        },
        {
          k: "Entry form", t: "Name, mobile, email.", ch: "Landing page", when: "Day −10",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">smilestudiojpr.in/win</div></div>
            <div class="body"><div class="eyebrow">Smile Studio · smile-makeover giveaway</div>
            <h5>Enter to win <em>the full makeover.</em></h5>
            <div style="font-size:13px;color:var(--dim)">Drawn on the 30th. Result by email and phone — win or not.</div>
            <div class="gv-form">
              <div class="f"><div>Arjun Mehta</div><span>Name</span></div>
              <div class="gv-two"><div class="f"><div>+91 94140 27xxx</div><span>Mobile</span></div><div class="f"><div>arjun.m@outlook.com</div><span>Email</span></div></div>
              <div class="f"><div>Teeth alignment · a bit of yellowing</div><span>What bothers you?</span></div>
              <div class="f ok"><div class="l"><i></i>Call me with the result</div><span>Yes</span></div>
            </div>
            <div class="btn">Enter the giveaway <small>Closes on the 29th · 1 winner</small></div></div></div>`,
          why: [
            ["One qualifying question", "“What bothers you?” turns a raw entry into a treatment lead the dentist can quote from."],
            ["Consent to call", "A ticked box. The runner-up call is now a result delivery, not cold outreach."],
            ["Email + phone", "Two channels for the runner-up sequence. One will get through."]
          ],
          q: ["Collect only what the follow-up needs. Here that's a number and a reason.", "framework · giveaways"]
        },
        {
          k: "Winner announced", t: "The result, in his inbox.", ch: "Email", when: "Day 0 · the 30th",
          html: `<div class="mail"><div class="h"><div class="s">Giveaway result: the smile-makeover winner is…</div><div class="f">Smile Studio Jaipur &lt;hello@smilestudiojpr.in&gt; · to Arjun</div></div>
            <div class="body">
              <p>Arjun, thank you for entering. Out of <b>764 entries</b>, the ₹1 lakh smile makeover goes to <b>entry #319</b> — congratulations to her! Her journey starts next week and we'll share it on our page.</p>
              <p><b>You didn't win the grand prize — but you didn't lose either.</b> Every entrant has won a runner-up prize. Dr. Kapoor's team will call you tomorrow between 10 AM and 1 PM to tell you what it is.</p>
              <p style="color:var(--mute);font-size:12px">Can't take a call? Reply with a better time.</p>
              <span class="cta">See the live draw</span>
            </div></div>`,
          why: [
            ["Announce the winner to everyone", "764 people learn the prize was real. That's the trust the runner-up call spends tomorrow."],
            ["Tease, don't reveal", "The runner-up prize is delivered by voice. Curiosity keeps the phone answered."],
            ["Book the call window", "10 AM–1 PM tomorrow. He's expecting it, so the pickup rate is high."]
          ],
          q: ["Announce one winner publicly. Then make everyone else a winner privately.", "framework · giveaways"]
        },
        {
          k: "Runner-up call", t: "“Free visit and ₹5,000 towards your teeth.”", ch: "Phone call", when: "Day 1 · 11 AM",
          html: `<div class="say"><div class="who"><div class="av">N</div><div><b>Nisha · Smile Studio front desk</b><small>Phone · 11:05 AM</small></div></div>
            <q>Arjun ji, Nisha from Smile Studio — about the giveaway. Grand prize toh nahi mila, but <em>aapne runner-up prize jeeta hai:</em> a free consultation, 3D scan and cleaning with Dr. Kapoor — plus <em>₹5,000 credit on any treatment</em> you choose. You'd mentioned alignment — this is a good first step. Only condition: the visit has to be booked within 7 days. Thursday 5 PM or Saturday 11 AM?</q></div>`,
          why: [
            ["Free visit + credit = two-step prize", "The free scan gets him in the chair; the ₹5,000 makes the plan he's shown feel already-discounted."],
            ["Use the form answer", "“You'd mentioned alignment” turns a call script into a conversation about his teeth."],
            ["Either/or booking", "Thursday or Saturday. Not “would you like to come in?”"]
          ],
          q: ["The runner-up prize should get them physically into your business. Everything sells better in the chair.", "framework · giveaways"]
        },
        {
          k: "Booking confirmed", t: "Slot held. Credit noted.", ch: "WhatsApp", when: "Day 1",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">SS</div><div>Smile Studio Jaipur<small>Business account</small></div></div>
              <div class="body">
                <div class="bub">Arjun ji, booking confirmed ✅
                  <div class="board"><div class="t">Runner-up prize · entry #402</div>
                    <div class="r"><span>Consult + 3D scan + cleaning</span><b>free</b></div>
                    <div class="r"><span>Treatment credit</span><b>₹5,000</b></div>
                    <div class="r"><span>Visit</span><b>Sat 11 AM · Dr. Kapoor</b></div>
                    <div class="r"><span>Credit valid</span><span class="warn">30 days from visit</span></div></div>
                  Location pin 📍 neeche. Reminder Friday shaam bhejenge.<span class="tm">11:14 AM</span></div>
                <div class="bub me">Thank you, Saturday pakka 👍<span class="tm">11:20 AM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Write the prize down", "Scan, cleaning, ₹5,000, date. What he was told on the phone is now a document he can re-read."],
            ["Credit expiry is visible", "30 days from the visit. The treatment decision has a clock before he's even seen the plan."],
            ["Reminder promised", "Show rate is the whole game for a free visit. Friday's nudge is booked in advance."]
          ],
          q: ["A booked appointment is a lead. A shown appointment is a customer. Do everything to close that gap.", "framework · giveaways"]
        },
        {
          k: "Treatment plan", t: "The plan, with the prize already applied.", ch: "Paper · in the clinic", when: "Day 6 · Saturday",
          html: `<div class="doc"><div class="stamp">RUNNER-UP CREDIT</div>
            <div class="k">Smile Studio · plan</div>
            <h5>Arjun Mehta · aligners</h5>
            <div class="chk"><div class="b"></div><div><b>Consult, 3D scan, cleaning — done today</b><span>₹2,500 · runner-up prize · ₹0</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Clear aligners · 8 months</b><span>₹68,000 · EMI ₹5,900 × 12 available</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Whitening after aligners</b><span>₹8,000 · bundled ₹4,000</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Giveaway credit applied</b><span>−₹5,000 · valid till the 6th next month</span></div></div>
            <div class="sig"><div class="l">Arjun Mehta</div><small>TOTAL ₹67,000 · DAY 6</small></div>
          </div>`,
          why: [
            ["The prize shows up on the invoice", "−₹5,000 in ink. He's seeing the plan already discounted, on a day he was promised something free."],
            ["Sold in the chair", "The scan he just saw is the pitch. Aligners are easier to say yes to with your own teeth on screen."],
            ["Deadline on the credit", "Start within 30 days or lose ₹5,000. Loss aversion does the closing."]
          ],
          q: ["The giveaway got him in the door for free. The treatment plan is where the clinic gets paid.", "framework · giveaways"]
        },
        {
          k: "Annual plan", t: "From one visit to a yearly patient.", ch: "In person · reception", when: "Day 6",
          html: `<div class="choice">
            <div class="ch dim"><div class="k">Option A</div><div class="p">₹67,000 <small>aligners only</small></div>
              <ul><li>Aligners + whitening, credit applied</li><li>Pay per visit after that</li><li class="no">6-monthly cleanings</li><li class="no">Emergency visits covered</li></ul>
              <div class="sub">Perfectly fine.</div></div>
            <div class="ch best"><div class="badge">Recommended</div><div class="k">Option B</div><div class="p">₹67,000 <small>+ ₹499/mo family</small></div>
              <ul><li>Everything in A</li><li>2 cleanings a year · every check-up free</li><li><b>Family of 4 covered · 15% off all treatments</b></li></ul>
              <div class="cr">Aligner check-ups (8 visits) included · saves ₹6,400</div>
              <div class="sub">First debit next month · cancel anytime</div></div>
          </div>`,
          why: [
            ["Continuity on top of the ticket", "₹499/month for the household is small next to ₹67,000, and it makes him a patient for years."],
            ["The plan saves him money on the plan", "8 aligner check-ups covered — the membership pays for itself inside the treatment he just chose."],
            ["Family = 3 more patients", "The giveaway entrant turns into a household."]
          ],
          q: ["Every attraction offer should end with a recurring reason to come back.", "framework · money models"]
        }
      ]
    },

    /* ───────────────────────── 4 · ONLINE COURSE · MUMBAI ───────────────────────── */
    {
      label: "Online course · lifetime access",
      source: "“Apply it to your business” (adapted) · an online stock-market course · email + live-stream flow",
      client: "Neha",
      about: "Neha, 27, Thane, works in IT. Enters a giveaway for lifetime access to a trading course. Loses on the Sunday live, and the same evening gets the runner-up email: 60% off with a 48-hour clock.",
      copy: `WIN LIFETIME ACCESS — ChartPath Academy Giveaway
Grand prize: lifetime access to the course + 1 year of live Q&A (₹49,999 value). 1 winner, drawn on Sunday's live.
Enter: name + email + WhatsApp. Share the giveaway = extra entry.
Runner-up prize (every non-winner, by email + WhatsApp within 2 h of the draw):
Full course at ₹9,999 (regular ₹24,999) + bonus 1-on-1 onboarding call.
Condition: claim within 48 h; 100 seats; cohort starts next Monday.
Week 4: upsell to ₹2,999/month live-trading room; ₹9,999 credited if joined by Week 6.`,
      steps: [
        {
          k: "The giveaway ad", t: "Win the course, forever.", ch: "Instagram", when: "Day −5",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">CP</div><div><div class="nm">chartpath.academy</div><div class="sp">Sponsored</div></div></div>
              <div class="img gv-ig-img coral">
                <div class="tag">GIVEAWAY · DRAW SUNDAY 8 PM</div>
                <div><div class="big">Win lifetime access.<br><em>₹49,999. Free.</em></div>
                <div class="sm">Full course + 1 year of live Q&A · 1 winner · drawn on Sunday's live stream.</div></div>
              </div>
              <div class="cta"><span>chartpath.in/win</span><b>Enter free</b></div>
              <div class="cap"><b>chartpath.academy</b> Naam + email, bas. Share this post = +1 entry. Winner Sunday live pe. Baaki sab ke liye bhi kuch hai 👀</div>
            </div></div></div>`,
          why: [
            ["Digital prize, zero cost of goods", "Lifetime access costs nothing to fulfil. The only real prize cost is one lost sale."],
            ["“Baaki sab ke liye bhi kuch hai”", "The runner-up prize is hinted at from the first touch. Losing is pre-framed as not losing."],
            ["Live draw = live audience", "Sunday's stream is the winner announcement and a sales event at the same time."]
          ],
          q: ["If your product is digital, the giveaway prize is free to give. Give a lot of it.", "framework · giveaways"]
        },
        {
          k: "Entry page", t: "Enter, then share.", ch: "Landing page", when: "Day −5",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">chartpath.in/win</div></div>
            <div class="body"><div class="eyebrow">ChartPath Academy · lifetime-access giveaway</div>
            <h5>Enter to win <em>the whole course, forever.</em></h5>
            <div class="gv-form">
              <div class="f"><div>Neha Kulkarni</div><span>Name</span></div>
              <div class="gv-two"><div class="f"><div>neha.k@gmail.com</div><span>Email</span></div><div class="f"><div>+91 98923 51xxx</div><span>WhatsApp</span></div></div>
              <div class="f"><div>Beginner · want a second income</div><span>Where are you?</span></div>
              <div class="f ok"><div class="l"><i></i>Shared to my story</div><span>+1 entry</span></div>
            </div>
            <div class="gv-count"><div><b>02</b><span>days</span></div><div><b>14</b><span>hrs</span></div><div><b>37</b><span>min</span></div></div>
            <div class="btn">Enter the giveaway <small>3,208 entries · draw Sunday 8 PM live</small></div></div></div>`,
          why: [
            ["Segmenting question", "“Beginner · second income” is the language the runner-up email will mirror back at her."],
            ["Countdown to the draw", "The clock is for the draw, not a sale. It builds a habit of watching the timer before one that matters."],
            ["Share for an entry", "Her story is an ad the academy didn't pay for, seen by people like her."]
          ],
          q: ["Every entrant should have a reason to tell someone else. That's how a giveaway pays for its own reach.", "framework · giveaways"]
        },
        {
          k: "Entry confirmed", t: "Calendar invite for the draw.", ch: "Email", when: "Day −5",
          html: `<div class="mail"><div class="h"><div class="s">You're entered (#3,209) — draw is Sunday 8 PM, live</div><div class="f">Karan @ ChartPath &lt;karan@chartpath.in&gt; · to Neha</div></div>
            <div class="body">
              <p>Neha — you're in. Entry <b>#3,209</b>, plus 1 bonus for sharing.</p>
              <p>The winner is drawn <b>live this Sunday at 8 PM</b> on Instagram (I'll also email you the result within an hour, either way). While you wait: the first module is unlocked below — it's the same one lifetime-access students start with.</p>
              <p style="color:var(--mute);font-size:12px">You said “beginner, second income”. Module 1 is exactly that.</p>
              <span class="cta">Add draw to calendar</span> &nbsp; <span class="cta" style="background:#fff;color:var(--green-d);border:1.5px solid var(--green)">Watch Module 1 free</span>
            </div></div>`,
          why: [
            ["Free sample before the draw", "Module 1 unlocked. By Sunday she's a student who hasn't paid, not a stranger who entered a contest."],
            ["“Either way” again", "The runner-up email is promised in writing. Sunday night's message is opened, not filtered."],
            ["Calendar invite", "A draw with 3,000 viewers is a warm live audience for the announcement and the offer."]
          ],
          q: ["Use the waiting period. Between entry and draw is the best free attention you'll ever get.", "framework · giveaways"]
        },
        {
          k: "Live draw", t: "One winner. Everyone else: check inbox.", ch: "Instagram Live", when: "Day 0 · Sunday 8 PM",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">CP</div><div><div class="nm">chartpath.academy</div><div class="sp">LIVE · 3.4K watching</div></div></div>
              <div class="img gv-ig-img coral">
                <div class="tag">LIVE DRAW · 3,911 ENTRIES</div>
                <div><div class="big">Entry #2,046<br><em>gets lifetime access.</em></div>
                <div class="gv-stat"><div><b>3,911</b><span>entries</span></div><div><b>1</b><span>winner</span></div><div><b>3,910</b><span>runner-ups</span></div></div></div>
              </div>
              <div class="gv-post"><b>chartpath.academy</b> Congrats #2,046 🎉 Everyone else — you also won something. Email + WhatsApp in the next 10 minutes. It expires Tuesday 8 PM, so read it tonight.<div class="mt">Sunday 8:09 PM · 1.2K comments</div></div>
            </div></div></div>`,
          why: [
            ["Draw on camera", "3,400 people watched a random number land. The prize is real; the runner-up prize inherits that trust."],
            ["Announce the deadline on the live", "“Expires Tuesday 8 PM” is said out loud before the email is even opened."],
            ["Ten minutes, not tomorrow", "The runner-up offer arrives while 3,910 people are still on the stream, still excited."]
          ],
          q: ["The moment after losing is the highest-attention moment you will ever have with a lead. Send the offer then.", "framework · giveaways"]
        },
        {
          k: "Runner-up email", t: "“You won the runner-up prize.”", ch: "Email + WhatsApp", when: "Day 0 · Sunday 8:18 PM",
          html: `<div class="mail"><div class="h"><div class="s">Neha, you won the runner-up prize (expires Tue 8 PM)</div><div class="f">Karan @ ChartPath &lt;karan@chartpath.in&gt; · to Neha</div></div>
            <div class="body">
              <p>Entry #3,209 didn't take the lifetime prize tonight — #2,046 did. But every one of the 3,910 runner-ups gets this:</p>
              <p><b>The full ChartPath course at ₹9,999</b> (regular ₹24,999) <b>+ a 1-on-1 onboarding call</b> to build your beginner → second-income plan.</p>
              <p>Runner-up prize, so two rules: claim by <b>Tuesday 8 PM</b>, and it's capped at <b>100 seats</b> because of the calls. Cohort starts Monday.</p>
              <span class="cta">Claim my runner-up prize · ₹9,999</span>
            </div></div>`,
          why: [
            ["Named prize, personal reason", "“Beginner → second income” is her form answer, returned as the promise. It reads written for her."],
            ["Bonus call justifies the cap", "100 seats because a human has to do 100 calls. Scarcity that is true is scarcity that works."],
            ["Same night, same channel twice", "Email and WhatsApp within minutes of the draw. One of them gets read tonight."]
          ],
          q: ["The runner-up prize is a discount with a reason, a bonus with a cost, and a deadline with a cause.", "framework · giveaways"]
        },
        {
          k: "Claim", t: "₹9,999. 48 hours. 100 seats.", ch: "Checkout", when: "Day 1",
          html: `<div class="pay"><div class="h"><span>ChartPath Academy · Runner-up prize</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Full course · lifetime updates</span><span><span class="gv-strike">₹24,999</span>₹9,999</span></div>
              <div class="row"><span>1-on-1 onboarding call (45 min)</span><span>bonus</span></div>
              <div class="row"><span>Giveaway runner-up discount</span><span>−₹15,000</span></div>
              <div class="row tot"><span>Pay today</span><span>₹9,999</span></div>
              <div class="gv-count"><div><b>22</b><span>hrs</span></div><div><b>41</b><span>min</span></div><div><b>63</b><span>seats left</span></div></div>
              <div class="go">Claim my prize · ₹9,999 · UPI / Card</div>
              <div class="disc">Entry #3,209 · price returns to ₹24,999 on Tue 8 PM</div>
            </div></div>`,
          why: [
            ["The clock is on the checkout", "22 hours and 63 seats, live. This is the page where deadlines earn their keep."],
            ["Anchor stays visible", "₹24,999 struck through. She's saving ₹15,000, not spending ₹9,999."],
            ["Low-hundreds × ₹9,999", "A few hundred of 3,910 runner-ups claiming pays for the ads and the lifetime prize many times over."]
          ],
          q: ["Every non-winner is a buyer with a reason and a deadline. That is the entire business model of a giveaway.", "framework · giveaways"]
        },
        {
          k: "Onboarding call", t: "The bonus call sells the next thing.", ch: "Zoom · 45 min", when: "Week 1",
          html: `<div class="say"><div class="who"><div class="av">K</div><div><b>Karan · ChartPath founder</b><small>Zoom · onboarding call · 45 min</small></div></div>
            <q>Neha, plan is simple: modules 1–4 this month, paper trade alongside. <em>Around Week 4 you'll want live feedback</em> — that's the trading room, ₹2,999 a month. Runner-up bonus: if you join by Week 6, <em>your ₹9,999 counts as credit</em> — the first three months are already paid. No decision today. Just know it's there.</q></div>`,
          why: [
            ["The bonus is a sales call in disguise", "45 minutes of genuine help, with the continuity offer planted at the end. It's a plan, not a pitch."],
            ["Credit turns course-fee into deposit", "₹9,999 → 3 months of the room. Ascending costs nothing at the moment she's most engaged."],
            ["Deadline on the credit, not the room", "Join any time; the credit expires Week 6. Urgency without pressure."]
          ],
          q: ["The giveaway makes the list. The runner-up prize makes the customer. The credit makes the subscriber.", "framework · money models"]
        }
      ]
    }
  ]
});
