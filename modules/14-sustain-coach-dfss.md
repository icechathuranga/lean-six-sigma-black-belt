# Module 14 · Sustain, Replicate & Coach (Weeks 28–29)

## Why it matters

Most improvements die quietly. Six months after the celebration, time-to-hire has crept back up, the new checklist is "mostly" used, and nobody notices until the numbers are bad again. The Control phase is where a Black Belt earns the title, because holding a gain across a multi-region operation is harder than making it. Worse, a fix proven in one region often stays stuck there while three other regions keep paying for the same problem — a failure not of analysis but of **replication**. And a Black Belt's leverage is ultimately not the projects they run but the Green Belts they grow. This module is about permanence and multiplication: locking gains in with control plans and audits, spreading them across sites, coaching the next wave of improvers, and knowing when a process is so broken that you should **design a new one** rather than improve the old — the door into Design for Six Sigma.

## The intuition

**A control plan is a promise written down.** When you finish a project, the new way of working lives in people's heads and goodwill — both of which fade. A control plan converts the improvement into a durable document that answers, for every critical input and output: *what* we measure, *how* and *how often*, what the *limits* are, *who* owns it, and *what we do* when it drifts (the reaction plan). For our recruitment process: measure weekly time-to-hire on an Xbar chart (owner: regional talent lead), audit the use of the structured interview guide monthly (owner: hiring managers), and if time-to-hire breaks its upper control limit, trigger a named reaction — review the week's bottleneck within 48 hours. The reaction plan is the part people skip and the part that actually sustains the gain: without a pre-agreed response, a red signal just gets explained away.

**At enterprise scale, the control plan becomes a system, not a sheet.** One region can run off a spreadsheet. Fifty teams across four regions need: a *standard* definition of each metric so numbers are comparable; dashboards that surface only out-of-control signals (not raw data); layered audits where local leaders check weekly, regional leaders monthly, and the Black Belt / sponsor quarterly; and a document-control routine so the "current" standard work is genuinely the one in use everywhere. The enemy at scale is drift *and* divergence — fifty teams each quietly inventing their own version.

**Audits keep the promise honest.** A **process audit** asks "are we doing what the control plan says?" (is the structured guide actually used?). A **results audit** asks "is the outcome still good?" (is time-to-hire still where we left it?). You need both: a process can look compliant while results rot (the metric was gamed), or results can look fine while the process has quietly abandoned the new method (coasting on luck that will run out). **Layered process audits** — the same short checklist run at different levels of the hierarchy at different cadences — are the standard tool, because they make sustaining everyone's visible job, not the Black Belt's lonely one.

**Replication multiplies the win.** You fixed offer delays in the East region and cut three days. The same root cause almost certainly exists in North, South and West. **Replication** (also called "leveraging" or "copy-exact with translation") is the disciplined spread of a proven fix to other sites. The intuition is: don't re-run the whole project four times, and don't blindly paste the solution either. Confirm the *same root cause* is present at each new site (a quick diagnostic, not a full Analyse phase), then translate the solution to local conditions (different systems, languages, volumes, regulations), pilot small, and standardise. Done well, one well-analysed project pays off four, five, ten times — this is where a Black Belt's return on effort explodes.

**Coaching Green Belts — the Black Belt as teacher.** A Black Belt is expected to mentor Green Belts, which is a different skill from doing the analysis yourself. The intuition: your job is to make *them* think, not to hand them answers. Coach with questions — "what does the data say?", "how do you know that's the root cause and not a symptom?", "what would convince a sceptic?" — and let them own the project while you protect them from the classic traps (jumping to solutions, trusting a bad measurement system, declaring victory without a control plan). You review their tollgates, unblock them with sponsors, and model the behaviours — curiosity, honesty about uncertainty, respect for the people in the process. Teaching also sharpens you: nothing exposes a shaky understanding like a Green Belt's innocent "but why?".

**The Black Belt as change agent.** Beyond any one project, the Black Belt carries the improvement culture: challenging "we've always done it this way", building the business case in the language of the executive (money, risk, customer), and absorbing the resistance that every change provokes. Technical skill gets you a correct answer; change-agent skill gets the answer *adopted*.

**When to design new instead of improving.** DMAIC improves an *existing* process. But sometimes the process is so far from what customers need — or doesn't exist yet — that tuning it is polishing the wrong object. If even a perfectly-executed existing process couldn't reach the requirement — its best possible performance (its **entitlement**: the ceiling the current design can achieve even with every special cause removed) still falls short — or you're launching something new (a brand-new onboarding programme for a new region), you switch from DMAIC to **Design for Six Sigma (DFSS)**: you *design quality in* from the start rather than inspecting and improving it afterwards.

## The rigorous method

**Control plans, formally.** A control plan is a structured table keyed to the project's critical-to-quality characteristics and their key process input/output variables (the Xs and Ys), each row specifying: characteristic, specification/target, measurement method and gage, sample size and frequency, control method (which chart or check), and the reaction plan. It is the bridge out of Improve: it inherits the vital few Xs confirmed in Analyse (through hypothesis tests, regression, DOE) and the capability baseline from Measure, and it hands responsibility to the process owner at the final tollgate. Mistake-proofing (**poka-yoke**) is preferred over monitoring wherever feasible — a form that cannot be submitted with a missing field prevents the defect rather than detecting it, and prevention needs no reaction plan.

**Sustaining, formally.** Sustainment rests on: standardised work (the single documented best-known method, under version control), training and certification to that standard, SPC on the vital few outputs, layered audits on cadence, and a management review that treats a broken control-plan signal as an action, not a footnote. Define success criteria for "sustained" (e.g. the improved mean held for N months with the process in statistical control) and formally close only when they're met.

**Replication, formally.** Treat replication as a scaled-down DMAIC: a rapid Define (confirm scope and that the target problem exists at the new site), a focused Measure/Analyse (confirm the *same* root cause — don't assume), Improve (translate and pilot the known solution), and Control (local control plan). A replication register tracks each site's status so leverage is visible and nothing stalls half-adopted. Validate measurement-system equivalence across sites before comparing their numbers.

**DFSS and the DMADV roadmap, formally.** DFSS replaces DMAIC with a design roadmap; the most common is **DMADV** — **Define, Measure, Analyse, Design, Verify**:

- **Define** — the design goals aligned to business strategy and customer need (scope, charter for a design project).
- **Measure** — capture the Voice of the Customer and translate it into measurable **Critical-to-Quality (CTQ)** requirements (tools: Kano, QFD / House of Quality).
- **Analyse** — generate and evaluate design *concepts* against the CTQs (concept selection, e.g. Pugh matrix), choosing the best architecture.
- **Design** — develop the detailed design, predict its performance, and build in robustness and capability (tolerance design, DOE, FMEA on the design).
- **Verify** — pilot, test against the CTQs, confirm the design meets requirements, then hand to operations with a control plan.

(Other DFSS roadmaps exist — IDOV, DMADOV — but DMADV is the exam-standard one.) Use DFSS when: the process is new; the requirement is beyond the existing process's entitlement; a disruptive change is needed; or repeated DMAIC projects keep hitting the same design-imposed ceiling. The payoff is that quality designed in is far cheaper than quality improved in, but DFSS is slower and more front-loaded — don't reach for it when an existing process merely needs tuning.

## Do this

Take the control plan for the recruitment running example and write three rows: time-to-hire (output), structured-interview-guide usage (input), and onboarding-pack error rate (output). For each, specify metric, measurement method, frequency, control method (name the chart from Module 13), owner, and a concrete reaction plan — for the time-to-hire row, use an Xbar-R chart with the limits computed in Module 13 from `tth-subgroups.csv` (UCL 28.84, LCL 23.57 days) and a reaction plan triggered when a weekly subgroup breaks them. Then sketch a one-page replication plan to take the fix from one region to the other three: the diagnostic that confirms the same root cause, the local translation needed, and the pilot. Finally, write five coaching questions you would ask a Green Belt who has just declared their root cause "obvious".

## Common pitfalls

- **A control plan with no reaction plan.** A signal nobody is obliged to act on changes nothing.
- **Monitoring where you could mistake-proof.** If a poka-yoke can prevent the defect, don't settle for a chart that merely spots it.
- **Auditing results but not the process (or the reverse).** Compliant process + bad results = a gamed metric; good results + abandoned process = luck about to run out.
- **"Replicating" by pasting the solution without confirming the root cause.** The new site may have a different cause; the copied fix then fails and discredits the method.
- **Coaching by taking over.** Doing the Green Belt's analysis for them builds your reputation and their dependence — ask questions instead.
- **Using DFSS to dodge a DMAIC problem (or DMAIC where the design is the ceiling).** Match the roadmap to whether you are improving an existing process or designing a new capability.

## Self-check

1. **Q: What are the five columns a control-plan row must answer, in essence?**
   A: What is measured (the characteristic), how it's measured, how often/what sample, the control method and limits, and the reaction plan — plus a named owner.

2. **Q: Why run both process audits and results audits?**
   A: A process can appear compliant while results degrade (a gamed or wrong metric), and results can look fine while the improved process is quietly abandoned (coasting on luck). Each audit catches what the other misses.

3. **Q: Before replicating the East-region fix to West, what must you confirm, and why not just copy the solution?**
   A: Confirm the *same root cause* is present in West (a quick diagnostic), because a pasted solution aimed at a cause that isn't there will fail and discredit the approach; then translate it to local conditions and pilot.

4. **Q: Spell out DMADV and say when you'd use it instead of DMAIC.**
   A: Define, Measure, Analyse, Design, Verify. Use it when designing a new process/product, or when an existing process's best possible performance still can't meet the requirement — i.e. when you must design quality in, not improve it in.

5. **Q: A Green Belt says "the root cause is obviously the slow managers." What's a better coaching move than agreeing?**
   A: Ask a question that tests the claim with evidence — e.g. "What data separates manager delay from a symptom of something upstream, and how would you prove it to a sceptic?" — so they verify the cause rather than guess it.
