# Module 13 · Advanced Statistical Process Control (Weeks 26–27)

## Why it matters

A control chart is a process's heartbeat monitor: it separates the ordinary, background **common-cause** variation a process always has from the unusual, assignable **special-cause** variation that signals something has genuinely changed. Green Belt taught you to read one chart; Black Belt asks the harder questions. *Which* chart is correct for this data? How do I subgroup it so the chart can actually detect a shift? Why does my Shewhart chart miss a small, slow drift for months — and what detects it faster? And how do I run control across fifty teams without drowning in false alarms? Choosing the wrong chart or the wrong subgroup quietly destroys the chart's power, so you react to noise and miss real problems. This module makes you the person who gets it right.

## The intuition

**First, name your data.** Every control-chart decision starts with one fork: is the thing you measure **variables** data (a measurement on a continuous scale — days, hours, pounds, a score) or **attributes** data (a count — how many defects, how many defective items)? Time-to-hire in days is variables. "Number of onboarding packs with an error" is attributes. Get this fork right and the rest of the choice almost makes itself.

**Variables charts** always come in pairs — one chart for the process *centre* (the average) and one for the process *spread* (the variation), because a process can drift in either without the other noticing:

- **I-MR (Individuals and Moving Range):** use when you measure *one* value at a time — monthly regional time-to-hire, or a single cost figure per week. The "moving range" (the gap between consecutive points) stands in for spread.
- **Xbar-R (Average and Range):** use when data comes in small **subgroups** of equal size (roughly n = 2 to 9), e.g. five hires closed each week. The range (max − min within the subgroup) tracks spread.
- **Xbar-S (Average and Standard Deviation):** use for larger subgroups (n ≈ 10 or more), where the standard deviation is a more faithful measure of spread than the range.

**Attributes charts** split by what you count — *defectives* (whole items that pass or fail) or *defects* (flaws, of which one item may carry several) — and whether the sample or area of opportunity is constant:

- **p / np:** proportion vs number *defective*. Use **p** when the sample size varies (fraction of offers declined when weekly offer counts change), **np** when it is constant (declined offers when exactly 50 go out each week).
- **c / u:** *defects* per unit. Use **c** for a constant opportunity (data-entry errors per equal-size onboarding batch), **u** when the opportunity varies (errors per 100 records when batch sizes differ).

**Rational subgrouping — the quiet skill that decides everything.** A subgroup is a small set of measurements you treat as "one point" on the chart. The art is to group so that **variation *within* a subgroup is only common cause**, and the special causes you care about show up *between* subgroups. Five hires closed in the *same week by the same team* make a sensible subgroup: within-week differences are just noise, so a week-to-week jump stands out. Rule of thumb: never span a known source of variation *within* a subgroup; let it vary *between* subgroups (this is exactly why mixing all four regions into one subgroup wrecks the chart).

**Worked Xbar-R using `tth-subgroups.csv`.** This file holds 20 weekly subgroups of n = 5 hires each, time-to-hire in days. (That each row is "five hires closed in the same week" is an assumption I've attached to the data for teaching; the file itself only labels the columns.)

Compute each subgroup's mean and range, then average them:
- Grand average: sum of the 20 subgroup means = 524.0, so **X̿ (X-double-bar) = 524.0 ÷ 20 = 26.202 days** (rounds to **26.20**).
- Average range: sum of the 20 ranges = 91.3, so **R̄ = 91.3 ÷ 20 = 4.565 days** (rounds to **4.57**).

Now apply the standard constants for n = 5: A₂ = 0.577, D₄ = 2.114, D₃ = 0.

- Xbar chart: **UCL = X̿ + A₂R̄ = 26.202 + 0.577 × 4.565 = 28.84**;  **LCL = 26.202 − 0.577 × 4.565 = 23.57**.
- R chart: **UCL = D₄R̄ = 2.114 × 4.565 = 9.65**;  LCL = D₃R̄ = 0 (no lower range limit for n = 5).

Read the charts. Every subgroup *range* sits below 9.65, so spread is stable — the R chart is in control, which we check *first* (if spread is unstable, the Xbar limits aren't trustworthy). On the Xbar chart, **subgroup 15's mean = 29.30 days exceeds the UCL of 28.84 — a special cause.** That one week, something changed: a holiday backlog, a system outage, a policy change. The beyond-limits test flags exactly subgroup 15, matching the dataset's answer key.

(Going further — my own computation, not in the answer key — if you apply the *full* run rules below, subgroups 4–8 also trip a signal: four of those five weekly means sit below the −1σ line at 25.32 days, a sustained low cluster the single beyond-limits test misses. That is a preview of why run rules and the CUSUM/EWMA charts exist.)

**Reading the chart — run rules.** A point outside 3σ is the obvious signal, but a controlled process also shouldn't show *patterns*. The **Western Electric** and **Nelson** rule sets codify the patterns too unlikely to be chance. Divide each half of the chart into three zones: A (2σ–3σ from the centre), B (1σ–2σ), C (centre–1σ). Classic signals: one point beyond 3σ; two of three consecutive points in zone A or beyond on one side; four of five in zone B or beyond on one side; and a long run on one side of the centreline — **8 consecutive points** in Western Electric, **9** in Nelson (name the rule set; the difference is examined). Nelson adds four distinctive patterns: **6 points** trending up or down; **14** alternating up/down (over-adjustment); **15** in a row within ±1σ (too little variation — often stratification); and **8** in a row all outside ±1σ on either side (a mixture of two streams).

**CUSUM and EWMA — catching the slow leak.** A Shewhart chart (Xbar, I-MR, p, etc.) judges only the *latest* point against the limits, so it is powerful at a big, sudden jump but slow — sometimes months slow — at a *small, sustained* shift of half a sigma. Two charts fix this by giving the process a memory:

- **CUSUM (cumulative sum):** keeps a running total of how far each point sits from target, so a persistent small bias accumulates into a visible climb long before any single point breaks a limit — adding up the small overspends until the total is undeniable.
- **EWMA (exponentially weighted moving average):** plots a weighted average that leans on recent points but never forgets older ones (weight λ, typically 0.1–0.3), smoothing out noise so a gentle drift shows.

Both beat Shewhart for small sustained shifts (≈ 0.5σ–1.5σ) because they pool information across time instead of judging each point alone; Shewhart still wins for large, abrupt shifts.

**Pre-control — the quick traffic-light.** Pre-control is a simpler, specification-based scheme (not a true SPC chart): split the tolerance into a central green zone (the middle half), yellow zones either side, and red beyond the specification limits. The rules are memorable: to qualify at set-up, get five consecutive units in the green zone; then, running, check units in pairs — two greens, carry on; one green and one yellow, carry on; **two yellows on the same side, adjust; two yellows on opposite sides (or any red), stop and investigate.** It needs no computation and suits a front-line team, but it watches the *specification*, not the *process voice*, so it is weaker than a control chart and shouldn't replace one for a well-understood process.

## The rigorous method

**Selection, formally.** Decide data type first, then sample structure. This decision table is the exam-reference form of the bullets above:

| Data | Situation | Chart | Model |
|---|---|---|---|
| Variables | n = 1 | I-MR | — |
| Variables | 2 ≤ n ≤ 9 | Xbar-R | — |
| Variables | n ≥ 10 | Xbar-S | — |
| Attributes — defectives | sample size varies | p | binomial |
| Attributes — defectives | sample size constant | np | binomial |
| Attributes — defects | opportunity varies | u | Poisson |
| Attributes — defects | opportunity constant | c | Poisson |

The range loses efficiency as a spread estimate as n grows, which is why S replaces R at large n. Control limits are always centre ± 3σ of the plotted statistic, with σ estimated from within-subgroup variation (R̄/d₂, or S̄/c₄) — never from the overall standard deviation, which would fold special-cause variation into the limits and widen them wrongly.

**Rational subgrouping, formally.** Choose subgroups so within-subgroup variation estimates only the inherent short-term (common-cause) variation while between-subgroup variation carries the signals. Because that within-subgroup variation is the yardstick for the Xbar limits, it is also why the R (or S) chart is validated *before* the Xbar chart — unstable spread makes the Xbar limits meaningless.

**CUSUM and EWMA, formally.** The tabular CUSUM accumulates C⁺ᵢ = max(0, C⁺ᵢ₋₁ + (xᵢ − target) − K) and C⁻ᵢ = max(0, C⁻ᵢ₋₁ − (xᵢ − target) − K), signalling when either exceeds a decision interval H; the slack K (usually ½ the shift to detect, in σ units) and H (often 4σ–5σ) are tuned to the shift and the desired **average run length (ARL)** — the mean number of points before a false alarm (in control) or before detection (out of control). EWMA plots zᵢ = λxᵢ + (1 − λ)zᵢ₋₁ with limits that widen to a steady state; smaller λ detects smaller shifts. Both are designed by trading a long in-control ARL (~370+) against a short out-of-control one.

**Control at enterprise scale.** A single pooled chart across sites masks site-to-site signals, while many independent charts steadily accumulate false alarms. On the 3σ test alone each chart signals falsely about 1 point in 370; fifty weekly charts throw roughly 50 ÷ 370 ≈ 0.14 false alarms a week — about one nuisance signal every seven weeks, before run rules (illustrative) — and across fifty metrics the noise is real. The enterprise approach: standardise the metric and subgrouping definition so charts compare; chart each site on its *own* limits so a local special cause shows locally; roll up to a dashboard that flags only sites breaking their own control state; and automate the run-rule checks so humans review signals, not raw points.

## Do this

Open `tth-subgroups.csv` and reproduce the worked Xbar-R in a spreadsheet: the 20 subgroup means and ranges, X̿ = 26.20, R̄ = 4.57, then the limits (28.84 / 23.57 for Xbar, 9.65 for R). Confirm subgroup 15 breaks the Xbar UCL. Overlay the zone lines (±1σ = ±0.88 around 26.20), apply the run rules, and see whether you find the subgroup 4–8 cluster. Finally, pick three HR metrics (weekly declined-offer rate, errors per onboarding batch, a single monthly cost) and name the correct chart for each, with the reason.

## Common pitfalls

- **Using an attributes chart for variables data (or vice versa).** Charting average time-to-hire on a p-chart throws away information; counting defectives on an Xbar chart is meaningless.
- **Computing limits from the overall standard deviation, or reading Xbar before R.** Limits must come from *within-subgroup* variation (R̄/d₂ or S̄/c₄); and if the R chart is out of control the Xbar limits are invalid, so clear spread first.
- **Irrational subgrouping.** Mixing regions or shifts inside one subgroup widens limits and kills detection power.
- **Expecting Shewhart to catch small drifts.** It won't, quickly — reach for CUSUM or EWMA for sustained ≈0.5σ shifts.
- **Treating pre-control as SPC.** It watches tolerances, not the process voice, and can't tell common from special cause.

## Self-check

1. **Q: You record one overall time-to-hire figure per region per month. Which control chart?**
   A: I-MR (individuals and moving range) — the data are single measurements, not subgroups, so the moving range estimates short-term variation.

2. **Q: You chart weekly time-to-hire but each subgroup mixes all four regions. Why does that weaken the chart?**
   A: Region is a known source of variation, so folding it inside a subgroup inflates the within-subgroup range (R̄), widening the Xbar limits until real shifts hide inside them — a rational-subgrouping failure. Subgroup by one region, letting regions vary *between* subgroups.

3. **Q: Why check the R chart before the Xbar chart?**
   A: The Xbar limits are built from within-subgroup variation (via R̄). If the R chart is out of control, that variation is unstable, so the Xbar limits are untrustworthy and must not be interpreted until spread is controlled.

4. **Q: A regional time-to-hire drifts up by about 0.5σ and holds there. Which chart detects it soonest — Shewhart Xbar or CUSUM — and why?**
   A: CUSUM. By accumulating small deviations from target it builds a persistent small shift into a clear signal, whereas a Shewhart chart judges each point alone and is slow for shifts under ~1.5σ.

5. **Q: You count declined offers each week, but the number of offers made varies week to week. Which attributes chart?**
   A: A p-chart — it plots the *proportion* defective and adjusts its limits for the varying sample size each week (np requires a constant sample size).
