// Buy X, get Y free — $100M Money Models, Section II "Attraction Offers".
// Five examples in chapter order: observed at retail → Alex's gym → Gym Launch clients → supplement company → applied to another business.
window.OFFERS.push({
  slug: "buy-x-get-y-free",
  name: "Buy X, get Y free",
  css: `
    .bxgy-sub{font-size:13px;color:var(--dim);line-height:1.5}
    .bxgy-free{display:inline-block;background:var(--green);color:#fff;font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;padding:3px 8px;border-radius:999px;vertical-align:middle}
    .bxgy-strike{color:var(--mute);text-decoration:line-through;font-weight:400}
    .bxgy-list{margin:10px 0 0;padding:0;list-style:none;font-size:13px}
    .bxgy-list li{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-top:1px dashed var(--line)}
    .bxgy-list li b{color:var(--green-d)}
    .poster .bxgy-line{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 0;border-top:1px dashed var(--line);font-size:13px;text-align:left}
    .poster .bxgy-line b{font-family:var(--serif);font-size:18px}
    .wa .bub .b2{display:block;font-weight:600}
  `,
  examples: [

    /* ───────────────────────── 1 · OBSERVED AT RETAIL ───────────────────────── */
    {
      label: "Retail · buy 2 get 1",
      source: "Observed at retail / supplement counters, as told in the book · localised to Pune (adapted)",
      client: "Arjun",
      about: "Arjun, 27, Kothrud. Walks into a nutrition store for one tub of whey and walks out with three — two paid at full MRP, one free. The store banks double the cash of a single-tub sale and never prints the word 'discount'.",
      copy: `BUY 2, GET 1 FREE — Whey Protein 1 kg
Pay full MRP on 2 tubs (₹2,999 each = ₹5,998). Third tub free.
Any flavour mix. Same day, same bill.
No coupon, no minimum beyond the 2 tubs.
Free tub is the same product, not a smaller/older SKU.
Valid every day — this is the standing offer, not a sale.`,
      steps: [
        {
          k: "Counter card", t: "The word is FREE, not off.", ch: "Counter card · at the till", when: "Day 0",
          html: `<div class="poster">
            <div class="k">NutriHub Kothrud · Whey 1 kg</div>
            <h5>Buy 2,<br><em>get 1 free.</em></h5>
            <p>Any flavour. Same bill. Every day.</p>
            <div class="bxgy-line"><span>Tub 1 · Whey 1 kg</span><b>₹2,999</b></div>
            <div class="bxgy-line"><span>Tub 2 · Whey 1 kg</span><b>₹2,999</b></div>
            <div class="bxgy-line"><span>Tub 3 · Whey 1 kg</span><b style="color:var(--green-d)">FREE</b></div>
            <div class="fine">Full MRP on the two you pay for. The third is a full-size tub, not a sample.</div>
          </div>`,
          why: [
            ["Free beats percent-off", "“Buy 2 get 1 free” and “33% off 3 tubs” are the same money. The first one is what people walk to the counter for."],
            ["Full price stays on the sign", "₹2,999 is printed twice. The customer never learns a lower price exists, so nothing is anchored down for next time."],
            ["The free thing is the thing", "The Y is the same product the customer already wants — highest possible perceived value, at cost price to the store."]
          ],
          q: ["The customer values the free item at its full price. You pay for it at cost. That gap is the whole offer.", "framework · buy x get y free"]
        },
        {
          k: "The counter line", t: "One sentence at the till.", ch: "In person · shop counter", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sameer · NutriHub counter</b><small>as Arjun puts one tub down</small></div></div>
            <q>Sir, ek tub ₹2,999. <em>Do lo — teesra free hai.</em> Same price per tub you always pay, just one more in the bag. Chocolate aur vanilla mix kar doon?</q>
          </div>`,
          why: [
            ["Ask at the moment of buying", "He already decided on one tub. The offer only asks him to change the quantity, not the decision."],
            ["“Same price you always pay”", "The line reassures him that he is not being upsold into a worse deal — just more of the deal he came for."],
            ["Flavour question closes it", "“Which two flavours?” assumes the yes. He answers the question instead of re-deciding."]
          ],
          q: ["More of the same thing is the easiest yes in commerce. The decision was already made; you only change the quantity.", "framework · buy x get y free"]
        },
        {
          k: "The bill", t: "Two at full price. One at zero.", ch: "Printed bill · counter", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>NutriHub Kothrud · Bill #4471</span><b>GST INVOICE</b></div>
            <div class="body">
              <div class="row"><span>Whey 1 kg · Chocolate</span><span>₹2,999</span></div>
              <div class="row"><span>Whey 1 kg · Vanilla</span><span>₹2,999</span></div>
              <div class="row"><span>Whey 1 kg · Chocolate <span class="bxgy-free">Free</span></span><span>₹0</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Paid · UPI</span><span>₹5,998</span></div>
              <div class="note"><b>3 tubs · 3 kg protein.</b> Value on shelf ₹8,997. Buy-2-get-1 is our standing offer — it will be here when you come back.</div>
              <div class="disc">Free tub is full-size, same batch, same expiry.</div>
            </div>
          </div>`,
          why: [
            ["Cash doubled at the till", "He came for ₹2,999. He paid ₹5,998. The third tub cost the store its wholesale price, not its shelf price."],
            ["“Discount — ” printed on purpose", "Zero on the discount line trains him that this store does not discount. It gives more instead."],
            ["Value stated in his units", "“3 kg protein · ₹8,997 on shelf” is how he will describe it to friends."]
          ],
          q: ["Collect more cash per transaction without touching the price. Add units, never subtract rupees.", "framework · buy x get y free"]
        },
        {
          k: "Welcome ping", t: "The free tub gets a date.", ch: "WhatsApp", when: "Day 1",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">N</div><div>NutriHub Kothrud<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Arjun, thanks for yesterday 🙏 <span class="b2">3 tubs · 90 scoops</span>At 1 scoop a day your free tub opens around <b>Day 60</b> and runs out around <b>Day 90</b>.<span class="tm">10:12 AM</span></div>
                <div class="bub">Saved you in our members list. Buy-2-get-1 runs every day, so no need to wait for a sale. Ping here to reserve stock.<span class="tm">10:12 AM</span></div>
                <div class="bub me">Great, thanks. Vanilla was better btw 😄<span class="tm">10:40 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Turn the bonus into a calendar", "“Day 60 · Day 90” gives the store an exact day to message him again. The free tub sets the reorder clock."],
            ["“No need to wait for a sale”", "Says out loud what the bill implied: the price never drops, the quantity goes up. Kills discount-waiting."],
            ["Capture the number", "A walk-in became a WhatsApp contact. Now the next sale costs a message, not an ad."]
          ],
          q: ["A free unit is also a timer. You know exactly when it runs out, so you know exactly when to ask again.", "framework · buy x get y free"]
        },
        {
          k: "Reorder ping", t: "Same offer, one week early.", ch: "WhatsApp", when: "Day 83",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">N</div><div>NutriHub Kothrud<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Arjun, tub 3 must be near the bottom 👀
                  <div class="board">
                    <div class="t">Restock · buy 2, get 1 free</div>
                    <div class="r"><span>2 × Whey 1 kg</span><b>₹5,998</b></div>
                    <div class="r"><span>3rd tub</span><b>FREE</b></div>
                    <div class="r"><span>Shaker + scoop</span><b>FREE this week</b></div>
                  </div>
                  Reply <b>VANILLA</b> or <b>CHOCO</b> and I'll keep the set aside — pick up by Sunday.<span class="tm">Wed 9:05 AM</span></div>
                <div class="bub me">2 vanilla 1 choco. Sunday 6 pm 👍<span class="tm">9:31 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Ask before it runs out", "Day 83, not Day 95. If he hits an empty tub he buys wherever he is standing — you lose the sale."],
            ["Stack a second small Y", "A ₹150 shaker on a ₹5,998 order is a rounding error to the store and a reason to buy this week."],
            ["Reply-word ordering", "“VANILLA / CHOCO” removes every step between intent and order. Friction is where reorders die."]
          ],
          q: ["Free stacks. When the customer already expects one free thing, a second small one is what makes them act today.", "framework · buy x get y free"]
        }
      ]
    },

    /* ───────────────────────── 2 · ALEX'S GYM ───────────────────────── */
    {
      label: "Alex's gym · 6+6 weeks",
      source: "Alex's own gym, as told in the book · localised to Bengaluru",
      client: "Priya",
      about: "Priya, 34, Indiranagar. Instead of a discount, the gym doubles her time: pay full price for 6 weeks, get 6 more free. At the desk she is shown the bigger version — pay for 12, get 12 — and takes it. Cash collected doubles, the price per week is never cut.",
      copy: `BUY 6 WEEKS, GET 6 WEEKS FREE — Coaching programme
6 weeks = ₹18,000 (full price, 3 sessions/week + diet plan).
Pay for 6, train for 12. Free weeks start the day paid weeks end.
Upgrade at the desk: buy 12 weeks (₹36,000), get 12 free = 24 weeks.
No discount on the per-week price, ever. Renewal after = ₹18,000 / 6 weeks.
Free weeks are non-transferable and must run continuously.
Starts Monday. 15 seats per batch.`,
      steps: [
        {
          k: "The ad", t: "Double the time, same price.", ch: "Instagram", when: "Day −2",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">IF</div><div><div class="nm">ironfit.indiranagar</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">INDIRANAGAR · 30–45</div>
                <div><div class="big">Buy 6 weeks.<br><em>Get 6 weeks free.</em></div>
                <div class="sm">₹18,000 for 6 weeks of coaching — and we double it. 12 weeks, one payment.</div></div>
              </div>
              <div class="cta"><span>ironfit.in/66</span><b>Claim my 12 weeks</b></div>
              <div class="cap"><b>ironfit.indiranagar</b> Not a discount. Same coaching, twice the time. Batch starts Monday — 15 seats. 👇</div>
            </div></div></div>`,
          why: [
            ["“Free” is the headline, not “% off”", "“6 weeks free” lands harder than “50% off 12 weeks” — same money, different word. The brain prices the free weeks at ₹18,000."],
            ["Price shown in full", "₹18,000 is on the ad. No one is trained to expect a cheaper number later; the anchor is set at full."],
            ["“Not a discount” said out loud", "Pre-empts the “what's the catch” reflex and positions the gym as generous, not desperate."]
          ],
          q: ["Discounts make the price smaller. Bonuses make the offer bigger. Only one of those still lets you charge full price next time.", "framework · buy x get y free"]
        },
        {
          k: "The page", t: "What free actually includes.", ch: "Landing page", when: "Day −2",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">ironfit.in/66</div></div>
            <div class="body"><div class="eyebrow">Coaching programme · Indiranagar</div>
            <h5>Pay for 6 weeks. <em>Train for 12.</em></h5>
            <div class="bxgy-sub">₹18,000 buys 6 weeks of coaching. Weeks 7–12 are free — same coach, same batch, same diet plan.</div>
            <div class="rules">
              <div class="rule"><div class="n">PAID · WEEKS 1–6</div><div class="t">3 sessions a week</div><div class="s">+ diet plan + weekly weigh-in</div></div>
              <div class="rule"><div class="n">FREE · WEEKS 7–12</div><div class="t">Exactly the same</div><div class="s">starts the Monday after week 6</div></div>
              <div class="rule"><div class="n">ALWAYS</div><div class="t">Full price, no coupons</div><div class="s">renew later at ₹18,000 / 6 wks</div></div>
            </div>
            <div class="payout"><b>₹18,000</b><span>one payment. 12 weeks. Free weeks are non-transferable and run continuously.</span></div>
            <div class="btn">Book a 20-min consult <small>Batch starts Monday · 15 seats</small></div></div></div>`,
          why: [
            ["Define the free half precisely", "“Exactly the same” — not a lite version. A free bonus that feels lesser is a discount in disguise."],
            ["Conditions protect the maths", "Non-transferable, continuous. Otherwise the free weeks become a coupon that floats around town."],
            ["Renewal price shown early", "“₹18,000 / 6 weeks” on the landing page means week 24 is not a shock. The anchor never moves."]
          ],
          q: ["Free must be real, full-strength, and fenced. Real so it sells; fenced so it does not leak.", "framework · buy x get y free"]
        },
        {
          k: "The consult", t: "The bigger version, in person.", ch: "In person · gym office", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">D</div><div><b>Coach Deepak · IronFit</b><small>after her weigh-in and goal chat</small></div></div>
            <q>Priya, 6 + 6 gets you 12 weeks for ₹18,000. Honestly? With your goal I'd rather see you for 24. <em>Buy 12, get 12 free — same rate, same rule, just longer.</em> Which one do you want?</q>
          </div>`,
          why: [
            ["Increase X, keep Y proportional", "Buy 12 get 12 collects ₹36,000 today instead of ₹18,000. The free half costs the gym almost nothing extra."],
            ["Tie it to her goal, not to sales", "“With your goal” makes the longer option a coaching recommendation. It is also the higher-cash option."],
            ["Either/or, both yes", "“Which one” assumes she is buying. She is choosing between 12 and 24 weeks, not between yes and no."]
          ],
          q: ["Once the customer accepts the ratio, make X bigger. The same offer at double size collects double the cash.", "framework · buy x get y free"]
        },
        {
          k: "The choice", t: "Same rate. Longer runway.", ch: "Tablet · gym office", when: "Day 0",
          html: `<div class="choice">
            <div class="ch">
              <div class="k">Option A</div>
              <div class="p">₹18,000 <small>· 12 weeks</small></div>
              <ul><li><b>Buy 6 weeks</b> at ₹3,000 / week</li><li><b>Get 6 weeks free</b></li><li>Renew at ₹18,000 after week 12</li></ul>
              <div class="sub">Solid. Most people start here.</div>
            </div>
            <div class="ch best">
              <div class="badge">Deepak's pick for your goal</div>
              <div class="k">Option B</div>
              <div class="p">₹36,000 <small>· 24 weeks</small></div>
              <ul><li><b>Buy 12 weeks</b> at ₹3,000 / week</li><li><b>Get 12 weeks free</b></li><li>Body-composition scan every 4 weeks · <b>free</b></li></ul>
              <div class="cr">Same ₹3,000 / week. Twice the time to finish the job.</div>
              <div class="sub">One payment today · batch starts Monday</div>
            </div>
          </div>`,
          why: [
            ["Per-week rate identical in both", "₹3,000 / week on both cards. Nothing is cheaper; one is simply more. The upgrade is not a discount."],
            ["Second small Y on the bigger card", "Free scans cost the gym minutes. They make Option B feel like a different tier, not just a longer one."],
            ["Show both, recommend one", "A recommended card converts better than a single price — and the non-recommended card still sells."]
          ],
          q: ["Present the small version and the big version side by side. The rate stays flat; only the cash collected changes.", "framework · buy x get y free"]
        },
        {
          k: "Payment", t: "Full rate. Twice the weeks.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>IronFit Indiranagar</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>Coaching · 12 weeks (paid)</span><span>₹36,000</span></div>
              <div class="row"><span>Coaching · weeks 13–24 <span class="bxgy-free">Free</span></span><span>₹0</span></div>
              <div class="row"><span>Body-composition scans × 6 <span class="bxgy-free">Free</span></span><span>₹0</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹36,000</span></div>
              <div class="note"><b>24 weeks of coaching.</b> Free weeks start Monday of week 13 and run continuously. Non-transferable.</div>
              <div class="go">Pay ₹36,000 · UPI / Card</div>
              <div class="disc">EMI available · rate stays ₹3,000 / week</div>
            </div>
          </div>`,
          why: [
            ["The free items are line items", "Each bonus is printed at ₹0 so she sees what she is getting, not just what she is paying."],
            ["Cash collected doubled", "₹36,000 today, versus ₹18,000 for the small version. Ads for next batch are funded before this batch starts."],
            ["Discount line left blank", "Same trick as the retail bill: prove the price is never cut."]
          ],
          q: ["The receipt should make the free look large and the discount look absent.", "framework · buy x get y free"]
        },
        {
          k: "Signed terms", t: "Free, with three fences.", ch: "Paper · gym office", when: "Day 0",
          html: `<div class="doc">
            <div class="stamp">SIGNED · DAY 0</div>
            <div class="k">Buy 12, get 12 free · terms</div>
            <h5>Priya's 24 weeks</h5>
            <div class="chk"><div class="b"></div><div><b>Weeks 1–12 · paid · ₹36,000</b><span>Mon · Wed · Fri, 7:00 AM batch. Starts 8 Sep.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Weeks 13–24 · free · starts 1 Dec</b><span>Runs continuously. Cannot be paused, banked or gifted.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Free weeks are coaching, not a membership</b><span>Same batch, same coach, same diet plan. Attendance expected.</span></div></div>
            <div class="chk"><div class="b"></div><div><b>Renewal after week 24 · ₹18,000 / 6 weeks</b><span>Standard rate. No discount was applied today and none applies later.</span></div></div>
            <div class="sig"><div class="l">Priya Nair</div><small>5 SEP · ENDS 22 FEB</small></div>
          </div>`,
          why: [
            ["Continuous, non-transferable, no pausing", "The three fences that stop 12 free weeks becoming 12 floating coupons."],
            ["Attendance expected on the free half", "Free time that is not used produces no result and no testimonial. Written expectation keeps her coming."],
            ["Renewal rate in ink", "She signs the ₹18,000 renewal number today. In February it is a known quantity, not a negotiation."]
          ],
          q: ["Write the fences down on Day 0. Every dispute about a free bonus is a fence you forgot to draw.", "framework · buy x get y free"]
        },
        {
          k: "Free weeks begin", t: "The bonus arrives as an event.", ch: "WhatsApp", when: "Week 12",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">D</div><div>Coach Deepak · IronFit<small>online</small></div></div>
              <div class="body">
                <div class="bub">Priya, paid weeks done ✅
                  <div class="board">
                    <div class="t">Week 12 of 24</div>
                    <div class="r"><span>Sessions</span><b>34 / 36</b></div>
                    <div class="r"><span>Weight</span><b>71.0 → 66.4 kg</b></div>
                    <div class="r"><span>Free weeks 13–24</span><b>start Mon 1 Dec</b></div>
                  </div>
                  Same 7 AM batch. New programme card on Monday — we go for 62 by Feb.<span class="tm">Fri 6:10 PM</span></div>
                <div class="bub me">Can't believe it's still 12 more weeks 😄 See you Monday.<span class="tm">6:22 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Mark the hand-over", "Week 13 should feel like a gift landing, not a continuation. Naming it re-earns the goodwill she paid for in September."],
            ["New goal for the free half", "“62 by Feb” gives the free weeks their own finish line. Bonus time with no goal is skipped time."],
            ["Result before renewal", "By Week 24 she has two goals hit and six scans. The renewal conversation starts with evidence."]
          ],
          q: ["Deliver the free part loudly. A bonus nobody notices bought you nothing.", "framework · buy x get y free"]
        },
        {
          k: "Renewal", t: "Full price feels normal now.", ch: "In person · after final scan", when: "Week 24",
          html: `<div class="say">
            <div class="who"><div class="av">D</div><div><b>Coach Deepak · IronFit</b><small>final scan, week 24</small></div></div>
            <q>71 to 61.8. Six months, no missed month. Next block is the same ₹18,000 for 6 weeks you signed for in September — <em>or buy 12 and I'll give you 12 again.</em> Same deal, your call.</q>
          </div>`,
          why: [
            ["The anchor never moved", "She has only ever seen ₹3,000 / week. Renewing at that rate is normal, not a price rise — the thing a discount would have broken."],
            ["Offer the same mechanism again", "Buy 12 get 12 on renewal collects another ₹36,000 and keeps her for six more months."],
            ["Result does the selling", "“71 to 61.8” is the pitch. The offer is just the way to say yes."]
          ],
          q: ["Because you never discounted, renewal at full price is not a conversation. That is the long-term payoff of free over off.", "framework · buy x get y free"]
        }
      ]
    },

    /* ───────────────────────── 3 · GYM LAUNCH · BRING A FRIEND ───────────────────────── */
    {
      label: "Gym Launch · bring a friend",
      source: "Gym Launch clients, as told in the book · localised to Indore",
      client: "Neha",
      about: "Neha, 29, Vijay Nagar. Buys a 6-week programme at full price and brings her friend Kavya for free. The gym gets two bodies in the room for one payment — and at week 5, Kavya gets her own full-price offer. The free Y is a second customer.",
      copy: `BUY ONE, BRING A FRIEND FREE — 6-Week Programme
₹15,000 for 6 weeks (full price). Bring one friend for ₹0.
Friend trains the same batch, same coach, same plan, all 6 weeks.
Friend must be new to the gym and join on the same day.
One friend per paying member. Free seat cannot be sold or split.
At week 6 both may continue at ₹15,000 / 6 weeks — friend offer applies again.`,
      steps: [
        {
          k: "The ad", t: "One pays. Two train.", ch: "Instagram", when: "Day −3",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">SF</div><div><div class="nm">strongher.indore</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">INDORE WOMEN · 25–40</div>
                <div><div class="big">6 weeks, ₹15,000.<br><em>Bring a friend free.</em></div>
                <div class="sm">Same batch, same coach, both of you. One payment.</div></div>
              </div>
              <div class="cta"><span>strongher.in/friend</span><b>Pick my friend</b></div>
              <div class="cap"><b>strongher.indore</b> Akeli kyun aao? Tag the friend who keeps saying “Monday se”. Batch starts 8 Sep. 👇</div>
            </div></div></div>`,
          why: [
            ["The free thing is a person", "A friend's seat costs the gym an empty spot in a class already running. To Neha it is worth ₹15,000."],
            ["Two leads per click", "Every buyer arrives with a second name. Ad spend per body halves before the sales call even starts."],
            ["“Tag the friend”", "The ad tells her to do the referral in the comments. Distribution is built into the creative."]
          ],
          q: ["Give away a seat you were not going to fill anyway, and you have bought a second customer for nothing.", "framework · buy x get y free"]
        },
        {
          k: "The page", t: "Name the friend before you pay.", ch: "Landing page", when: "Day −3",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">strongher.in/friend</div></div>
            <div class="body"><div class="eyebrow">6-week programme · Vijay Nagar</div>
            <h5>You pay ₹15,000. <em>She pays nothing.</em></h5>
            <div class="bxgy-sub">Both of you get the full 6 weeks — 3 sessions a week, diet plan, weekly check-in. One rule: she has to be new to us.</div>
            <div class="rules">
              <div class="rule"><div class="n">YOU</div><div class="t">₹15,000 · 6 weeks</div><div class="s">full programme, full price</div></div>
              <div class="rule"><div class="n">YOUR FRIEND</div><div class="t">₹0 · same 6 weeks</div><div class="s">new to StrongHer · joins same day</div></div>
              <div class="rule"><div class="n">AFTER WEEK 6</div><div class="t">₹15,000 / 6 weeks each</div><div class="s">friend offer applies again</div></div>
            </div>
            <div class="payout"><b>2 for 1</b><span>Enter her name and number below. We message her the batch details the moment you pay.</span></div>
            <div class="btn">Book both of us <small>Batch starts Mon 8 Sep · 10 pairs</small></div></div></div>`,
          why: [
            ["“New to us” is the only fence", "The free seat must be a genuinely new body. Without that rule, existing members pair up and the gym gives away revenue."],
            ["Friend's number collected at checkout", "The gym contacts Kavya directly from Day 0. She is a lead in the CRM, not a plus-one."],
            ["Continuation price for both, shown now", "Both women see “₹15,000 / 6 weeks each” before anyone pays. Week 6 is pre-announced."]
          ],
          q: ["The free seat only counts if it is a stranger to your business. Fence it, or you are discounting your own members.", "framework · buy x get y free"]
        },
        {
          k: "The forward", t: "The buyer sells the friend.", ch: "WhatsApp · Neha to Kavya", when: "Day −2",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">K</div><div>Kavya 💛<small>online</small></div></div>
              <div class="body">
                <div class="bub me">Kav — StrongHer 6-week batch. Main ₹15k de rahi hoon, tu FREE aa rahi hai. Monday 7 AM 😤<br>strongher.in/friend<span class="tm">8:41 PM ✓✓</span></div>
                <div class="bub">Wait FREE free? Full 6 weeks?<span class="tm">8:47 PM</span></div>
                <div class="bub me">Haan. Same coach, same plan. Sirf new people — tu qualify karti hai 😂<span class="tm">8:48 PM ✓✓</span></div>
                <div class="bub">Ok done. Monday. Don't let me back out 🙈<span class="tm">8:50 PM</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Neha does the selling", "The gym never pitched Kavya. Her friend did, with a deadline and social pressure no ad could buy."],
            ["Free removes the friend's objection", "Kavya has no ₹15,000 decision to make — only a “Monday 7 AM” decision. Yes is cheap."],
            ["Accountability is the product", "Two friends in the same batch show up more. The free seat improves Neha's result too."]
          ],
          q: ["The customer becomes your salesperson the moment their bonus depends on someone else saying yes.", "framework · buy x get y free"]
        },
        {
          k: "Payment", t: "One line paid, one line free.", ch: "Razorpay", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>StrongHer Indore</span><b>RAZORPAY · SECURE</b></div>
            <div class="body">
              <div class="row"><span>6-week programme · Neha</span><span>₹15,000</span></div>
              <div class="row"><span>6-week programme · Kavya <span class="bxgy-free">Friend · free</span></span><span>₹0</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹15,000</span></div>
              <div class="note"><b>Two seats reserved · 7:00 AM batch, Mon 8 Sep.</b> Kavya gets her joining message the moment this goes through.</div>
              <div class="go">Pay ₹15,000 · UPI / Card</div>
              <div class="disc">Friend seat is non-transferable · new members only</div>
            </div>
          </div>`,
          why: [
            ["Full price collected, nothing cut", "₹15,000 at the standard rate. The friend is a bonus line at ₹0, not a 50% discount on two."],
            ["Second name is on the receipt", "Kavya is now a record in the system with a start date — the gym owns the relationship, not Neha."],
            ["Deadline attached", "“Mon 8 Sep” prints the start on the receipt. Both women now have a day to show up for."]
          ],
          q: ["Two customers for one payment at full price is not a discount. It is a doubling of your class with no extra rupee spent.", "framework · buy x get y free"]
        },
        {
          k: "First session", t: "Both treated as clients, day one.", ch: "In person · gym floor", when: "Day 1",
          html: `<div class="say">
            <div class="who"><div class="av">R</div><div><b>Coach Ritu · StrongHer</b><small>Monday 7:02 AM, to both</small></div></div>
            <q>Neha, Kavya — same plan for both of you, same weigh-in every Friday. Kavya, you're not a guest here, <em>you're my client for six weeks.</em> Let's see what we can do with that.</q>
          </div>`,
          why: [
            ["Free client, full treatment", "A friend treated as a plus-one never converts. Treated as a client, she gets a result and a reason to pay."],
            ["Same measurements from day one", "Kavya's Friday numbers become her own before/after — the evidence for her week-5 offer."],
            ["Said in front of both", "Neha hears her friend being valued. That is the referral she will make next batch."]
          ],
          q: ["Deliver the free thing at the same standard as the paid thing. The free customer is the one you are trying to convert.", "framework · buy x get y free"]
        },
        {
          k: "The friend's offer", t: "The free seat becomes a buyer.", ch: "WhatsApp · to Kavya", when: "Week 5",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">R</div><div>Coach Ritu · StrongHer<small>online</small></div></div>
              <div class="body">
                <div class="bub">Kavya, week 5 ✅
                  <div class="board">
                    <div class="t">Your 6 weeks · free seat</div>
                    <div class="r"><span>Sessions</span><b>14 / 15</b></div>
                    <div class="r"><span>Weight</span><b>68.0 → 64.9 kg</b></div>
                    <div class="r"><span>Free weeks end</span><span class="warn">Fri 17 Oct</span></div>
                  </div>
                  Next batch starts Mon 20 Oct — ₹15,000 for 6 weeks, same as Neha paid. And yes: <b>you can bring a friend free too.</b> Who's your Neha?<span class="tm">Mon 8:15 AM</span></div>
                <div class="bub me">Haha. Sending you Pooja's number 😄<span class="tm">8:33 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Ask before the free ends, not after", "Week 5, with an end date in red. Week 7 is a cold lead again."],
            ["Same price Neha paid", "Kavya has watched a friend pay ₹15,000 for what she got. The price is pre-validated."],
            ["Hand her the same offer", "“Bring a friend free” given to the free friend. One paid seat became two, then three."]
          ],
          q: ["The bonus customer gets the same offer that brought them in. That is how one sale turns into a chain.", "framework · buy x get y free"]
        }
      ]
    },

    /* ───────────────────────── 4 · SUPPLEMENT COMPANY · BUNDLE ───────────────────────── */
    {
      label: "Supplements · buy 3 get 2",
      source: "Alex's supplement company sold through gyms, as told in the book · localised to Hyderabad (adapted)",
      client: "Rohan",
      about: "Rohan, 31, Gachibowli. A gym member whose coach's plan needs protein for 20 weeks. At the front desk: buy 3 months of protein, get 2 free. Five tubs, one bill, no discount — and a reorder date written into the calendar.",
      copy: `BUY 3, GET 2 FREE — Protein · gym members only
3 tubs at full price (₹3,500 each = ₹10,500). Tubs 4 and 5 free.
Free tubs are the same product, full size. Any flavour mix.
Sold at the front desk or in the member app. Pick up any time — we hold stock.
One order per member per 20 weeks (5 tubs ≈ 20 weeks at 1 scoop / day).
Reorder at the same offer; never a percentage off.`,
      steps: [
        {
          k: "Desk poster", t: "Two free, on the counter.", ch: "Poster · front desk", when: "Day 0",
          html: `<div class="poster">
            <div class="k">Members only · Prime Whey 1 kg</div>
            <h5>Buy 3,<br><em>get 2 free.</em></h5>
            <p>5 tubs. About 20 weeks at a scoop a day. One bill.</p>
            <div class="big">₹10,500</div>
            <p>3 tubs paid at ₹3,500 · tubs 4 and 5 at ₹0</p>
            <div class="fine">Full-size tubs, any flavour mix. Held at the desk — take one home each month.</div>
          </div>`,
          why: [
            ["Ratio bigger than retail", "Buy 3 get 2 is 5 tubs for the price of 3. The margin on protein makes the two free tubs cheap to give and huge to receive."],
            ["Sold inside a paid relationship", "It sits at the desk of a gym the member already pays. Trust is borrowed; no ad spend."],
            ["Quantity framed as weeks", "“About 20 weeks” turns 5 tubs from a bulk buy into a plan that matches his training block."]
          ],
          q: ["Your bonus should be the product you have the most margin on. High perceived value, low cost to you — that is the ratio to widen.", "framework · buy x get y free"]
        },
        {
          k: "Coach line", t: "The plan needs it anyway.", ch: "In person · after session", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">A</div><div><b>Coach Arvind · Prime Fitness</b><small>walking Rohan to the desk</small></div></div>
            <q>Your plan says 150 g protein a day, Rohan — you're at 90 without a shake. Five tubs covers the whole 20-week block. <em>Buy three, the other two are on us.</em> Grab it now so I know you've got it.</q>
          </div>`,
          why: [
            ["Prescribed, not pitched", "The coach ties the product to the plan the member already bought. The supplement completes the result."],
            ["Whole block in one purchase", "Five tubs = one buying decision for 20 weeks instead of five monthly ones — cash collected five months early."],
            ["“So I know you've got it”", "Compliance framing. He buys to satisfy the coach, not the store."]
          ],
          q: ["Sell the bonus as part of the result the customer is already paying for. Then it is advice, not an upsell.", "framework · buy x get y free"]
        },
        {
          k: "The bill", t: "Three paid. Two at zero.", ch: "Member app · checkout", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Prime Fitness · Member store</span><b>MEMBER #2214</b></div>
            <div class="body">
              <div class="row"><span>Prime Whey 1 kg × 3 · Choco / Choco / Coffee</span><span>₹10,500</span></div>
              <div class="row"><span>Prime Whey 1 kg × 2 · Vanilla <span class="bxgy-free">Free</span></span><span>₹0</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Pay today</span><span>₹10,500</span></div>
              <div class="note"><b>5 tubs · held at the desk.</b> Collect one each month or all today. Reorder window opens around week 17.</div>
              <div class="go">Pay ₹10,500 · UPI / Card</div>
              <div class="disc">Members only · one order per 20 weeks</div>
            </div>
          </div>`,
          why: [
            ["₹10,500 instead of ₹3,500", "Same member, same desk, three times the cash in one transaction. The two free tubs cost the company cost price."],
            ["Held at the desk", "Removes the “where do I keep 5 tubs” objection and gives him a reason to walk past the desk every month."],
            ["Reorder window on the receipt", "Week 17 is written on Day 0. The next sale has a date before this one is finished."]
          ],
          q: ["More units per transaction is the cheapest revenue you will ever collect. The customer is already at the counter.", "framework · buy x get y free"]
        },
        {
          k: "Pickup ping", t: "The free tubs get a schedule.", ch: "WhatsApp", when: "Day 1",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">P</div><div>Prime Fitness desk<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Rohan, your 5 tubs are tagged at the desk 👍
                  <div class="board">
                    <div class="t">Pickup plan · 20 weeks</div>
                    <div class="r"><span>Wk 1 · Choco</span><b>collected</b></div>
                    <div class="r"><span>Wk 5 · Choco</span><span>paid</span></div>
                    <div class="r"><span>Wk 9 · Coffee</span><span>paid</span></div>
                    <div class="r"><span>Wk 13 · Vanilla</span><b>free</b></div>
                    <div class="r"><span>Wk 17 · Vanilla</span><b>free</b></div>
                  </div>
                  Arvind will remind you at each weigh-in. 💪<span class="tm">9:02 AM</span></div>
                <div class="bub me">Perfect. Thanks!<span class="tm">9:20 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Free tubs labelled as free, on dates", "Weeks 13 and 17 are when he feels the gift. Two moments of goodwill spread across the block."],
            ["Monthly desk visit", "Each pickup is a touchpoint at the counter — where the next offer lives."],
            ["Coach in the loop", "Reminders come from the coach at weigh-in. Product and programme stay one thing in his head."]
          ],
          q: ["Spread the free part across time and it buys you goodwill more than once.", "framework · buy x get y free"]
        },
        {
          k: "Reorder", t: "Same ratio, auto-shipped.", ch: "WhatsApp", when: "Week 17",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">P</div><div>Prime Fitness desk<small>business account</small></div></div>
              <div class="body">
                <div class="bub">Rohan — last free tub collected today ✅ Reorder window is open.
                  <div class="board">
                    <div class="t">Buy 3, get 2 free · again</div>
                    <div class="r"><span>3 × Prime Whey</span><b>₹10,500</b></div>
                    <div class="r"><span>2 × Prime Whey</span><b>FREE</b></div>
                    <div class="r"><span>Home delivery every 4 wks</span><b>FREE</b></div>
                  </div>
                  Reply <b>YES</b> and it auto-ships every 20 weeks at this same offer. Stop any time.<span class="tm">Sat 10:30 AM</span></div>
                <div class="bub me">YES. Keep 2 choco 3 coffee this time.<span class="tm">11:02 AM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Ask on the day the last free tub leaves", "Peak gratitude, zero inventory at home. The reorder is the path of least resistance."],
            ["Third small Y: delivery", "Free home delivery costs a courier fee and turns a reorder into a subscription."],
            ["Ratio never changes", "Still buy 3 get 2. He never sees a “20% off” because there never was one to see."]
          ],
          q: ["A bonus that recurs becomes a subscription. The customer keeps saying yes to the same generous ratio.", "framework · buy x get y free"]
        }
      ]
    },

    /* ───────────────────────── 5 · APPLY TO YOUR BUSINESS ───────────────────────── */
    {
      label: "Coaching centre · free bundle",
      source: "Applying the offer to another business type, per the chapter · coaching centre in Jaipur (adapted)",
      client: "Meera",
      about: "Meera, 42, Malviya Nagar, choosing a 12-month JEE course for her son Aarav. The centre never discounts the course; it adds high-value, near-zero-cost extras free: the online test series and the doubt app. Y is digital, so the cost of giving it is almost nothing.",
      copy: `BUY THE 12-MONTH COURSE, GET THE TEST SERIES + DOUBT APP FREE
12-month JEE classroom course: ₹60,000 (full fee, no discount).
Free with enrolment: Online test series (₹12,000) + 24×7 doubt app (₹6,000).
Both free items run the full 12 months, same login, activated on Day 0.
Fee payable in full or 3 instalments — free items unlock on first instalment.
Sibling enrolled in the same year: sibling's test series free too.
Batch starts 15 Sep. 40 seats.`,
      steps: [
        {
          k: "The ad", t: "The fee stays. The bundle grows.", ch: "Instagram", when: "Day −7",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="ig">
              <div class="h"><div class="av">AC</div><div><div class="nm">apexclasses.jaipur</div><div class="sp">Sponsored</div></div></div>
              <div class="img">
                <div class="tag">JAIPUR · CLASS 11 PARENTS</div>
                <div><div class="big">JEE course ₹60,000.<br><em>Test series + doubt app free.</em></div>
                <div class="sm">₹18,000 of tools, ₹0. Same batch, same teachers, one fee.</div></div>
              </div>
              <div class="cta"><span>apexclasses.in/jee</span><b>Book counselling</b></div>
              <div class="cap"><b>apexclasses.jaipur</b> Hum fee kam nahi karte. Hum zyada dete hain. Batch 15 Sep · 40 seats. 👇</div>
            </div></div></div>`,
          why: [
            ["Y is digital: near-zero marginal cost", "One more login on a test platform costs the centre nothing. To a parent it is ₹18,000 of tools."],
            ["“We don't cut fees, we give more”", "Positions the centre as premium and generous at once. A fee cut would have said the opposite."],
            ["Value stated as a rupee number", "“₹18,000 of tools” makes the free half concrete. Free with no number is ignored."]
          ],
          q: ["The best Y costs you almost nothing to deliver one more of. Digital, time, access, seats — pick from those first.", "framework · buy x get y free"]
        },
        {
          k: "The page", t: "Each free item, priced.", ch: "Landing page", when: "Day −7",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">apexclasses.in/jee</div></div>
            <div class="body"><div class="eyebrow">JEE 12-month classroom course · Malviya Nagar</div>
            <h5>One fee. <em>Three things.</em></h5>
            <div class="bxgy-sub">₹60,000 buys the classroom course. Enrol and the two tools that top rankers use every day come with it, free, for the full 12 months.</div>
            <div class="rules">
              <div class="rule"><div class="n">YOU BUY</div><div class="t">Classroom course</div><div class="s">₹60,000 · 12 months · 6 days / week</div></div>
              <div class="rule"><div class="n">FREE · ₹12,000</div><div class="t">Online test series</div><div class="s">48 tests · All-India rank</div></div>
              <div class="rule"><div class="n">FREE · ₹6,000</div><div class="t">24×7 doubt app</div><div class="s">photo a doubt, answer in 10 min</div></div>
            </div>
            <div class="payout"><b>₹18,000</b><span>of tools at ₹0. Activated on Day 0, same login, all 12 months. Fee in full or 3 instalments.</span></div>
            <div class="btn">Book a counselling slot <small>Batch starts 15 Sep · 40 seats</small></div></div></div>`,
          why: [
            ["Price each free item", "“₹12,000” and “₹6,000” are what the centre actually sells them for standalone. Free is credible because the price exists."],
            ["Free items are outcome tools", "Tests and doubt-solving are what produce ranks. The bonus improves the result the fee is paying for."],
            ["Instalments do not touch the bonus", "The free items unlock on first instalment — the parent's cash-flow objection does not cost the offer."]
          ],
          q: ["A free bonus only feels free if it has a real price somewhere. Sell it standalone so the number is true.", "framework · buy x get y free"]
        },
        {
          k: "Counselling", t: "Free, explained as strategy.", ch: "In person · counselling room", when: "Day 0",
          html: `<div class="say">
            <div class="who"><div class="av">S</div><div><b>Sunita ma'am · Apex Classes</b><small>with Meera and Aarav</small></div></div>
            <q>Meera ji, fee ₹60,000 hai — that is the number for everyone, no discount. But Aarav gets the test series and the doubt app free, because <em>rank ka 40% wahin banta hai.</em> Woh ₹18,000 hum aapse nahi lenge.</q>
          </div>`,
          why: [
            ["“Same fee for everyone”", "No parent will hear of a cheaper deal in the WhatsApp group. Uniform full price protects every future sale."],
            ["Bonus tied to the outcome", "“40% of rank comes from there” makes the free items the reason to enrol, not a sweetener."],
            ["Said with a rupee value", "“₹18,000 we will not take from you” is the sentence Meera repeats to her husband."]
          ],
          q: ["Hold the price. Explain the bonus as the reason for the result. Generosity reads as confidence.", "framework · buy x get y free"]
        },
        {
          k: "Fee receipt", t: "One paid line. Two free lines.", ch: "Fee counter · receipt", when: "Day 0",
          html: `<div class="pay">
            <div class="h"><span>Apex Classes Jaipur · Fee receipt</span><b>ROLL 11-JEE-087</b></div>
            <div class="body">
              <div class="row"><span>JEE classroom course · 12 months</span><span>₹60,000</span></div>
              <div class="row"><span>Online test series · 48 tests <span class="bxgy-free">Free</span></span><span>₹0</span></div>
              <div class="row"><span>24×7 doubt app · 12 months <span class="bxgy-free">Free</span></span><span>₹0</span></div>
              <div class="row"><span>Discount</span><span>—</span></div>
              <div class="row tot"><span>Instalment 1 of 3</span><span>₹20,000</span></div>
              <div class="note"><b>Aarav's login is live.</b> Test 1 opens Sun 21 Sep. Instalments 2 and 3 due 15 Dec and 15 Mar.</div>
              <div class="go">Paid ₹20,000 · UPI</div>
              <div class="disc">Free items activated on first instalment · valid full 12 months</div>
            </div>
          </div>`,
          why: [
            ["Free lines printed at ₹0", "Meera sees three things on one receipt. The ₹18,000 line is what she photographs."],
            ["Full fee, instalment cash-flow", "₹60,000 total is never cut. Splitting timing is not discounting — the anchor holds."],
            ["Bonus live before the course starts", "Aarav uses the free tools from Day 0. Engagement starts before the first class."]
          ],
          q: ["Split the timing of payment if you must. Never split the price. The bonus carries the deal.", "framework · buy x get y free"]
        },
        {
          k: "Welcome email", t: "The free tools show up first.", ch: "Email", when: "Day 0",
          html: `<div class="mail">
            <div class="h"><div class="s">Aarav's logins: test series + doubt app (free with your course)</div><div class="f">Apex Classes Jaipur · to Meera · 5 Sep, 6:40 PM</div></div>
            <div class="body">
              <p>Meera ji, Aarav is enrolled — roll no. 11-JEE-087, batch starts 15 Sep.</p>
              <p>Two things are already active on his login, at no charge, for the full 12 months:</p>
              <ul class="bxgy-list">
                <li><span>Online test series · 48 tests · All-India rank</span><b>₹0</b></li>
                <li><span>24×7 doubt app · 10-min answers</span><b>₹0</b></li>
              </ul>
              <p style="margin-top:12px">First mock: <b>Sun 21 Sep, 9 AM.</b> Take it before classes begin — we use it to place him in the right group.</p>
              <div class="cta">Open Aarav's login</div>
            </div>
          </div>`,
          why: [
            ["First contact is about the free part", "The welcome leads with the bonus. It re-earns the decision Meera made two hours ago."],
            ["A date on the bonus", "“Sun 21 Sep, 9 AM” makes the free test series used, not just owned. Used bonuses retain."],
            ["Bonus feeds the core product", "The free mock places him in a group. The free thing improves the paid thing."]
          ],
          q: ["Deliver the free part first and fast. A bonus that arrives late or unused was never a bonus.", "framework · buy x get y free"]
        },
        {
          k: "Rank update", t: "The free tool proves its value.", ch: "WhatsApp", when: "Month 3",
          html: `<div class="phone"><div class="screen"><div class="notch"><i></i></div>
            <div class="wa">
              <div class="h"><div class="av">S</div><div>Sunita ma'am · Apex<small>online</small></div></div>
              <div class="body">
                <div class="bub">Meera ji, Aarav's 3-month card 📋
                  <div class="board">
                    <div class="t">Test series · month 3</div>
                    <div class="r"><span>Mocks taken</span><b>11 / 12</b></div>
                    <div class="r"><span>All-India rank</span><b>4,120 → 1,860</b></div>
                    <div class="r"><span>Doubts solved</span><b>67</b></div>
                  </div>
                  Instalment 2 due 15 Dec — reminder only. Keep him on the Sunday mocks, that is where the jump came from.<span class="tm">Mon 7:30 PM</span></div>
                <div class="bub me">Thank you ma'am 🙏 Will make sure.<span class="tm">7:52 PM ✓✓</span></div>
              </div>
            </div></div></div>`,
          why: [
            ["Report on the free items", "The scorecard measures the bonus, so the bonus gets used — and its ₹18,000 value gets felt monthly."],
            ["Instalment reminder rides on good news", "Rank jump first, fee reminder second. Cash collection with zero friction."],
            ["Next year's referral", "This card is what Meera forwards to the other Class 11 parents. Free tools, visible result."]
          ],
          q: ["Measure the bonus and report it. What is measured gets used, and what gets used gets talked about.", "framework · buy x get y free"]
        }
      ]
    }
  ]
});
