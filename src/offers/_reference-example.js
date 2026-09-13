// REFERENCE: one complete example in the required format.
// Agents: copy this structure. This is "Rekha · Fit Studio Chandigarh" for Win Your Money Back.
// (The real win-your-money-back.js will contain this as one of its examples plus the others from the book.)
window.OFFERS.push({
  slug: "win-your-money-back",
  name: "Win your money back",
  css: "", // optional: extra CSS scoped to this offer's mockups (prefix selectors with .wymb- to avoid clashes)
  examples: [
    {
      label: "Alex's gym · 6-week challenge",
      source: "Alex's own gym, as told in the book · localised to Chandigarh",
      client: "Rekha",
      about: "Rekha, 38, Sector 35. Pays ₹15,000 for a 6-week challenge and wins it back as credit if she follows 3 rules and hits 7 kg.",
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
              <div class="cap"><b>fitstudio.chd</b> Sirf 12 seats. Sector 35. Not for everyone — read the 3 rules before you book. 👇</div>
            </div></div></div>`,
          why: [
            ["The offer is the headline", "“Or paisa wapas” is the hook. Not the gym, not the trainer. The mechanism sells itself."],
            ["Specific number, specific window", "7 kg / 6 weeks is winnable in her head. “Get fit” is not."],
            ["Damaging admission", "“Not for everyone — read the 3 rules” pre-filters for people who will actually do the work."]
          ],
          q: ["A guarantee is given. Win-your-money-back is earned. That one word change removes every refund-abuser from your funnel.", "framework · attraction offers"]
        },
        {
          k: "The page", t: "The rules, before the price.", ch: "Landing page", when: "Day −3",
          html: `<div class="web"><div class="bar"><i></i><i></i><i></i><div class="url">fitstudiochd.in/win</div></div>
            <div class="body"><div class="eyebrow">6-week challenge · Sector 35</div>
            <h5>Pay ₹15,000. <em>Win it all back.</em></h5>
            <div style="font-size:13px;color:var(--dim)">Three rules. Follow all three, hit your goal, and every rupee comes back to you.</div>
            <div class="rules">
              <div class="rule"><div class="n">RULE 01</div><div class="t">Show up 3× a week</div><div class="s">18 of 18 sessions</div></div>
              <div class="rule"><div class="n">RULE 02</div><div class="t">Log every meal</div><div class="s">in the app, daily</div></div>
              <div class="rule"><div class="n">RULE 03</div><div class="t">Weigh in on Day 42</div><div class="s">before/after photo</div></div>
            </div>
            <div class="payout"><b>₹15,000</b><span>credited back to you when you win. No fine print.</span></div>
            <div class="btn">Book your free 30-min call <small>Today or tomorrow only · 2 slots left</small></div></div></div>`,
          why: [
            ["Three rules, visible before payment", "This is the trust moment. Hiding conditions in fine print is how this offer gets a bad name."],
            ["Every rule causes the result", "Show up, log food, weigh in — a coach would demand these anyway. No invented hoops."]
          ],
          q: ["Only ask for conditions you'd want them to do even if there were no money on the line.", "framework · win your money back"]
        }
        // ...more steps (payment, signed rules, weekly scorecard, day-42 result, credit → membership)
      ]
    }
  ]
});
