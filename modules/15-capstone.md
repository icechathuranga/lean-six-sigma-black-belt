# Module 15 · Capstone — Lead a Full Black Belt Project (Weeks 30+)

## Why it matters

This is where everything converges. A Black Belt is judged not on knowing t-tests and DOE in isolation but on **driving one hard project from a vague problem to a sustained, money-backed result** — and persuading an executive to care. This capstone walks the whole DMAIC arc on the course's running example (reducing time-to-hire and onboarding errors across a multi-region HR operation), using the real practice datasets so every claim is anchored in analysis you can reproduce. A caution before we start: these datasets each illustrate *one* phase's technique; they were generated separately and do **not** share a single set of candidates, so we treat each as that phase's worked illustration and never invent numbers to bridge them. Every pound figure in the executive section is explicitly **illustrative**, with the arithmetic shown, because there is no financial dataset — making up financials is the fastest way to lose a sponsor's trust and your own credibility.

## The intuition — the one-page storyboard

Think of the project as a story told on a single wall of charts (the **storyboard**), one panel per DMAIC phase. A Black Belt can narrate it in five minutes.

**Define.** The problem: time-to-hire averages in the low 30s of days and varies by region, and onboarding packs carry errors — both hurting candidate experience and costing money. We write a charter (problem statement, goal, scope: the end-to-end hire-to-onboard process across four regions; in-scope/out-of-scope; team; sponsor; timeline) and a high-level process map. Goal, stated as a measurable target with a baseline, e.g. "reduce average time-to-hire by 20% and halve the onboarding error rate within two quarters."

**Measure.** Before trusting any number, test the *measurements*. Our interview scores drive shortlisting decisions, so we run a Gage R&R on `interview-score-gagerr.csv`. The result is sobering: **%GRR (study variation) = 30.9% with ndc = 4** — the measurement system is *not* acceptable (the rule of thumb wants <10% good, 10–30% marginal, >30% unacceptable, and ndc ≥ 5). So the honest Measure-phase story is not "MSA passed" but "**calibrate the interviewers and re-study before relying on scores**" — exactly the kind of inconvenient truth a Black Belt must surface rather than bury. Then we baseline **capability**: on `onboarding-capability.csv` (mean 14.01 days, sd 1.89, USL 20) the upper **Cpk = 1.05** — marginal, and shakier than it looks because Shapiro–Wilk p = 0.039 fails the normality test at 0.05, so the Cpk is only approximate. On `response-time-skewed.csv` the data are clearly non-normal (Shapiro p ≈ 0.000), so we **log-transform** (after which Shapiro p = 0.664, i.e. normal) and report the **median = 4.3 h** rather than a misleading mean.

**Analyse.** Now hunt the drivers. Multiple regression on `time-to-hire-regression.csv` explains **66% of the variation (R² = 0.661)** and finds three significant drivers: each extra **interview round adds ≈ 3.4 days** (coef 3.448), each day of **offer delay adds ≈ 2.0 days** (1.979), and **recruiter caseload adds ≈ 0.37 days** per extra open req (0.373). One-way ANOVA on `time-to-hire-by-region.csv` confirms the regions genuinely differ (**F = 15.01, p = 2.54e-08**; means East 24.5, North 26.8, South 30.0, West 32.2 days) — but ANOVA only says *that* they differ, not *which* pairs, so we don't invent pairwise verdicts without a post-hoc test. A chi-square on `offer-acceptance-by-region.csv` shows **offer acceptance depends on region (χ² = 9.18, df = 3, p = 0.0269)**. Finally, a 2³ DOE on `doe-factorial.csv` tests three process changes.

**Improve.** The DOE (R² = 0.963) is the decision engine. Effects (in days; negative = faster): **structured interview guide −6.34** (p ≈ 1.6e-06), **pre-screen −2.74** (p ≈ 0.0007), **scheduling tool −1.48** (p = 0.0198), and a real **guide×pre-screen interaction +1.43** (p = 0.0229). The guide×scheduling and three-way effects are not significant, and the pre-screen×scheduling interaction sits at **p = 0.0502 — just the wrong side of 0.05, so we treat it as not significant.** The structured guide is the big win; we roll out guide + pre-screen + scheduling tool. A before/after study (`before-after-tth.csv`, a **Welch two-sample** comparison — the columns are independent groups, not the same candidates paired) shows **before mean 31.0 → after 26.6 days, t = 2.88, p = 0.0061** — a real, significant drop.

**Control.** Lock it in. We chart weekly time-to-hire on an **Xbar-R chart** (`tth-subgroups.csv`, n = 5): **X̿ = 26.20, R̄ = 4.57; Xbar UCL = 28.84, LCL = 23.57; R UCL = 9.65**. Subgroup 15 breaks the upper limit — a special cause to investigate — proving the chart is already doing its job. A control plan assigns owners and reaction plans, and we replicate the fix across all four regions.

## The rigorous method

**Phase-by-phase, exam-aligned.** Define produces a signed charter, SIPOC, stakeholder and communication plans, and a validated financial case. Measure requires an acceptable measurement system *before* capability — which is why our 30.9% Gage R&R result blocks reliance on interview scores until re-calibration; capability (Cp/Cpk/Pp/Ppk, sigma level) is only meaningful once the gage is trustworthy and the distribution is correctly modelled (hence the log transform for the skewed response time). Analyse moves from graphical to statistical proof: regression quantifies and ranks the vital few Xs (with residual checks on normality, constant variance and independence), ANOVA and chi-square test group differences with their assumptions stated, and significance (p < 0.05) is distinguished from practical importance. Improve uses DOE to *test* changes rather than guess, reads main effects and interactions together (a significant interaction means you cannot judge one factor in isolation), and confirms the result with a properly chosen hypothesis test — here Welch's two-sample t because the samples are independent with possibly unequal variances. Control selects the right chart by data type (Module 13), writes a control plan keyed to the vital few Xs, prefers poka-yoke to monitoring, and closes only when the gain is held in statistical control.

### Presenting to executives (with financials)

Executives buy outcomes and money, not p-values. Lead with the result and the pound sign; keep the statistics in an appendix. A worked **illustrative** hard-savings case (no financial dataset exists, so these inputs are assumptions you would replace with Finance-validated figures):

- Annual hires across the four regions: **1,200** (illustrative).
- Time-to-hire reduction, from the before/after study: **31.0 − 26.6 = 4.4 days** per hire.
- Fully-loaded cost of a day of vacancy (lost productivity + agency/temp cover): **£150/day** (illustrative, Finance-validated in practice).
- Annual hard saving = 1,200 × 4.4 × £150 = **£792,000/year.**

Show the arithmetic so it can be challenged: 1,200 × 4.4 = 5,280 vacancy-days removed; 5,280 × £150 = £792,000. Add soft benefits (candidate experience, offer-acceptance uplift, reduced rework from fewer onboarding errors) separately and clearly labelled as soft. If you quote a quality level, show it too: an **illustrative** onboarding-error rate of 42 defects across 1,200 packs × 5 error-opportunities = 42 ÷ 6,000 × 1,000,000 = **7,000 DPMO** (defects per million opportunities), which you would track down over time. Finish with the ask: the investment needed, the risks, and the decision you want. Net benefit must net *off* the project and solution cost.

### Leadership checklist

- Signed charter with a quantified, time-bound goal and a Finance-validated benefit.
- Sponsor engaged; stakeholders mapped; resistance anticipated and worked (Module 02).
- Measurement system validated **before** any capability or baseline claim.
- Vital few Xs proven by data (regression/ANOVA/DOE), not asserted.
- Solution piloted, confirmed with the correct hypothesis test, and cost-justified.
- Control plan with owners, charts and reaction plans handed to the process owner.
- Replication plan to leverage the fix across sites.
- Tollgate reviews passed; benefits tracked post-close; lessons captured.

## Do this

Rebuild the storyboard yourself. Working through the datasets in order (Gage R&R → capability → regression → ANOVA → chi-square → DOE → before/after → Xbar-R), reproduce each headline figure above in a spreadsheet or jamovi/JASP and write the one-sentence conclusion each phase earns — being honest where the data is marginal (the 30.9% gage, the Cpk 1.05 that fails normality, the p = 0.0502 interaction). Then draft a single executive slide: the result, the illustrative £792k with its arithmetic, the ask. Finally, complete the self-assessment below.

### Self-assessment (score yourself 1–5)

- I can select and justify the right statistical test or chart for a given data type and question.
- I can run and interpret MSA, capability, regression, ANOVA and DOE, and state their assumptions.
- I can tell significance from practical importance, and say honestly when data is marginal or a measurement system is untrustworthy.
- I can build a control plan and replication plan that hold a gain across sites.
- I can lead a team, manage resistance, and present results to executives in money.

Anything scored 3 or below is your next study target; re-read the matching module and redo its exercise.

### Where to go next

The topics in this course — enterprise deployment, advanced Define/MSA/capability, hypothesis testing, regression, DOE, advanced Lean and control, and sustain/DFSS — map to the **IASSC Certified Black Belt** and **ASQ Certified Six Sigma Black Belt (CSSBB)** bodies of knowledge. ASQ additionally expects evidence of completed projects; check ASQ's current certification page for the exact project/affidavit requirements, as they are periodically updated. The next rung is **Master Black Belt**: coaching a portfolio of Black Belts, owning the deployment, teaching the methodology, and tackling enterprise-level DFSS. Keep a project log — real, signed-off savings are the currency of the whole discipline, and the thing every certification and every next role will ask you to show.

## Common pitfalls

- **Quoting capability or results off an unvalidated gage.** Our 30.9% Gage R&R means interview scores must be fixed first — report the inconvenient truth.
- **Presenting p-values to executives.** They buy money and risk; lead with the result and the (validated) financials, statistics in the appendix.
- **Inventing or over-claiming figures.** No financial or error-rate dataset exists here, so every such number is illustrative with arithmetic shown; and ANOVA doesn't tell you *which* regions differ without a post-hoc test.
- **Treating a near-miss p-value as significant.** The pre-screen×scheduling effect at p = 0.0502 is *not* significant — don't round your way to a conclusion.
- **Using a paired test on independent samples.** `before-after-tth.csv` is two independent groups (Welch), not matched pairs.
- **Closing without control and replication.** An unsustained, un-replicated fix forfeits most of the available value.

## Self-check

1. **Q: The Gage R&R returns %GRR (study variation) = 30.9% and ndc = 4. Can you trust the interview scores, and what do you do?**
   A: No — >30% is unacceptable and ndc should be ≥ 5. Re-calibrate/train the interviewers and repeat the study before relying on the scores or building decisions on them.

2. **Q: Regression gives R² = 0.661 with an interview_rounds coefficient of 3.448. State both findings in plain English.**
   A: The model explains about 66% of the variation in time-to-hire, and each additional interview round adds roughly 3.4 days, on average, holding the other factors constant.

3. **Q: The DOE shows the structured guide effect = −6.34 and a guide×pre-screen interaction = +1.43 (p = 0.0229). Why can't you read the guide's effect in isolation?**
   A: Because the interaction is significant — the benefit of the structured guide depends on whether pre-screen is also on, so main effect and interaction must be interpreted together.

4. **Q: Turn a 4.4-day time-to-hire reduction into an illustrative annual saving for 1,200 hires at £150/vacancy-day, showing the arithmetic.**
   A: 1,200 × 4.4 = 5,280 vacancy-days removed; 5,280 × £150 = £792,000 per year (illustrative; Finance would validate the £/day and net off solution cost).

5. **Q: In Control, subgroup 15 of the Xbar-R chart breaks the UCL of 28.84. What does that mean and what is the Black Belt's job?**
   A: It is a special-cause signal — something specific changed that week. The reaction plan is triggered: investigate the assignable cause, act on it, and confirm the process returns within its control limits.
