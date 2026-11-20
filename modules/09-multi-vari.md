# Module 09 · Multi-vari studies & advanced root cause (Weeks 18–19)

## Why it matters

By late Analyse you have *too many* candidate Xs and not enough time to test them all. Jumping straight to a Design of Experiments (DOE, Module 10) on fifteen factors is slow and expensive. A **multi-vari study** is the cheap, passive step that comes first: you *observe* the process without changing anything, display the variation it already produces, and let the picture point to the **family** where the big variation lives. You then take only that family's suspects into a DOE. It is the funnel that turns "everything might matter" into "look here first."

Our illustration: the consistency of **interview scores** across a multi-region HR operation. A score should reflect the candidate — not who re-scored them, not which week it was. If scores wobble for the wrong reasons, every downstream hiring decision inherits that noise. **All scoring numbers in this module are illustrative**, chosen to show the method; the plotting exercise uses the real `datasets/tth-subgroups.csv`.

---

## The three families of variation

**The intuition.** Almost any variation you can measure falls into one of three buckets, and knowing the bucket tells you where to look:

- **Within-unit (positional):** variation *inside a single item/event*. Here: the same candidate re-scored by two interviewers gives slightly different marks. If this family is large, your *measurement or scoring* is noisy.
- **Between-unit (piece-to-piece):** variation *from one item to the next, close together in time*. Here: candidate A scores higher than candidate B this week. Usually this is the *legitimate* signal — real differences between people.
- **Temporal (over-time):** variation *from one time period to the next*. Here: this week's cohort averages lower than last week's. If this family is large, something *drifts* — a tiring panel, a changing applicant pool, a new rubric.

The whole point: *which bucket is tallest decides your next move.* A noisy within-unit family sends you to fix the measurement system; a large temporal family sends you to hunt a drift; a dominant between-unit family may mean the process is behaving and the "variation" is real differences you should not try to remove.

**The rigorous method.** Formally, total observed variance is partitioned into additive components, one per family (and per nesting level). The study is *passive*: you sample the process as it runs, with a sampling plan deliberately built to let each family show itself (several readings per unit to expose within-unit; several units per period to expose between-unit; several periods to expose temporal). Crucially you change **no** factor settings — that distinguishes a multi-vari (observational) from a DOE (interventional). The output is an ordered list of variance sources, not a causal model.

---

## The multi-vari chart

**The intuition.** A multi-vari chart draws all three families on one picture so the tallest jumps out. Using the illustrative scoring data (two re-scorings per candidate, three candidates per week, three weeks):

| Week | Candidate | Score 1 | Score 2 | Candidate mean |
|---|---|---|---|---|
| Wk1 | C1 | 70 | 72 | 71.0 |
| Wk1 | C2 | 74 | 75 | 74.5 |
| Wk1 | C3 | 77 | 79 | 78.0 |
| Wk2 | C4 | 66 | 68 | 67.0 |
| Wk2 | C5 | 71 | 72 | 71.5 |
| Wk2 | C6 | 74 | 76 | 75.0 |
| Wk3 | C7 | 63 | 65 | 64.0 |
| Wk3 | C8 | 67 | 69 | 68.0 |
| Wk3 | C9 | 71 | 72 | 71.5 |

Grand mean ≈ 71.2; week means ≈ **74.5, 71.2, 67.8** *(all illustrative)*.

To read the chart: each candidate is a short **vertical tick** joining their two scores — the tick's *height* is the within-candidate family (here small, ~2 points). The scatter of the candidate dots *within one week* is the between-candidate family (here wide — the candidate means span ~7–8 points). Connect the three **week means** with a line — its *slope* is the temporal family (here a clear ~7-point downward drift, 74.5 → 67.8). The eye immediately sees: short ticks, wide within-week scatter, and a sliding week line. Between-candidate is tallest, temporal is real, within-candidate is small.

**The rigorous method.** Build the chart with the *largest/slowest* grouping on the outer x-axis (weeks), the next level nested inside (candidates), and the innermost readings as the plotted points within each unit. Plot every raw reading; overlay unit means and connect the period means. Read three visual signals: tick height = within-unit, within-group dispersion = between-unit, slope/shift of the period-mean line = temporal. The chart is a *diagnostic display*, not a test — quantify what it suggests with components of variation (next).

---

## Components of variation

**The intuition.** The chart shows *which* family is biggest; components of variation put a **number** on each. Decomposing the illustrative data gives roughly:

| Family | Variance | Share of total | (SD) |
|---|---|---|---|
| Within-candidate (positional / re-scoring) | 1.50 | **≈ 7%** | 1.22 |
| Between-candidate (piece-to-piece) | 13.39 | **≈ 63%** | 3.66 |
| Temporal (week-to-week drift) | 6.40 | **≈ 30%** | 2.53 |
| **Total** | **21.29** | **100%** | **4.61** |

*(All illustrative.)* The story: ~63% of score variation is genuine candidate differences — good, the process discriminates. But ~30% is week-to-week **drift**, which should not exist and is worth chasing. Only ~7% is re-scoring noise, so the scoring itself is reasonably repeatable.

**The rigorous method.** The key rule: **variances add, standard deviations do not.** You sum variance components, not SDs, and the total SD is √(sum of components) — here √21.29 ≈ 4.61, which is *less* than 1.22 + 3.66 + 2.53. Components are estimated from a **nested random-effects ANOVA**: each mean square is a blend of the components below it, and you back them out, e.g. for a balanced design σ²_within = MS_within, σ²_between = (MS_between − MS_within)/n, σ²_temporal = (MS_period − MS_between)/(n·a), with n readings per unit and a units per period. A component can come out slightly negative from sampling error; convention is to set it to zero and report the rest. Express each as a percentage of the total to rank the families.

---

## Using multi-vari to narrow sources before a DOE

**The intuition.** DOE is powerful but costs runs. The multi-vari tells you *which* factors are even worth putting into the experiment. Here, the small within-candidate family means you would *not* spend DOE runs on scoring-rubric tweaks — that is not where the action is. The sizeable temporal family tells you to bring *time-linked* factors (panel fatigue, weekly applicant source, rota changes) into the DOE. You enter the experiment with a short, evidence-backed factor list instead of guesses.

**The rigorous method.** The flow is **funnel then confirm**: brainstorm many Xs → multi-vari narrows them to the dominant family (observationally) → DOE actively manipulates the surviving few to establish causal effect sizes and interactions. A multi-vari never proves cause (it changes nothing), so it cannot *replace* a DOE — it *targets* one, cutting factors and therefore runs. Document the excluded families explicitly so reviewers see why they were dropped.

---

## Nested vs crossed sampling

**The intuition.** It matters how your samples are related. **Nested:** each lower unit belongs to exactly one upper unit — candidate C1 exists only in Week 1; a different candidate is in Week 2. You cannot ask "the Week effect *for candidate C1*," because C1 never appears in another week. **Crossed:** every level of one factor meets every level of the other — e.g. the *same two interviewers* score candidates in *every* week, so interviewer and week cross, and you *can* isolate an interviewer×week interaction.

**The rigorous method.** In a **nested (hierarchical)** design, factor B is nested in A (written B(A)) when each B level occurs under one A level only; you estimate variance *components* but not cross-factor interactions. In a **crossed** design, all factor combinations appear, so interactions are estimable (this is the structure DOE uses). The distinction drives the ANOVA model and the degrees of freedom: nest when units are naturally non-repeatable across levels (candidates within weeks); cross when the same factor levels genuinely recur (fixed interviewers across weeks). Mis-specifying one as the other biases the component estimates.

---

## Do this — `tth-subgroups.csv`

1. **Spreadsheet first.** Open `datasets/tth-subgroups.csv` (20 subgroups of 5 time-to-hire readings). Each of the 5 readings is a *different hire*, so within a subgroup they are the **between-unit (piece-to-piece)** family, and the **subgroup number** is the **temporal** family; this dataset has no within-unit family (each hire is measured once). Plot a multi-vari chart: subgroup on the x-axis, the 5 raw points stacked vertically at each subgroup, and the subgroup means connected by a line. Judge by eye which family is larger — the piece-to-piece spread *within* subgroups or the drift *across* them. (You should see subgroup 15 sitting noticeably high.)
2. **Build the components picture.** Type the illustrative scoring table above into a sheet. Compute each candidate's mean, each week's mean, and the grand mean; then the three **mean squares** and back out the variance components using the formulas in *Components of variation* above (naïve variances of the means will **not** reproduce 1.50 / 13.39 / 6.40). Confirm the total SD is √(sum of the three variances), **not** their sum. Note that three weeks is far too few for a trustworthy temporal estimate in practice — treat this split as illustrative.
3. **Then the stats-tool way.** Fit a nested random-effects model. In **R**: `lme4::lmer(score ~ 1 + (1|week/candidate), data=df)` then `VarCorr()`. In **Python**: a `statsmodels` mixed model, or compute the nested mean squares directly. If your tool has a mixed-model or variance-components module (some builds of jamovi/JASP do), fit week and candidate-within-week as random factors there instead. Reconcile the components with your hand figures (≈ 7% / 63% / 30%).

---

## Common pitfalls

- **Adding standard deviations.** Families combine by **variance**; adding SDs overstates the total. Always sum variances, then square-root.
- **Mistaking real signal for a defect.** A large between-candidate family is usually *good* (true differences) — do not launch a project to "remove" it.
- **Sampling that blinds a family.** One reading per unit hides the within-unit family; one unit per period hides between-unit. Build the sampling plan to expose all three.
- **Treating multi-vari as confirmation.** It is observational — it narrows suspects, it does not prove cause. Confirm with a DOE.
- **Nesting/crossing confusion.** Calling a nested factor "crossed" invents interactions that cannot exist and corrupts the components.
- **Negative variance components reported as-is.** A small negative estimate is sampling noise — set it to zero.

## Self-check

1. **Q:** Name the three families and the HR example of each. **A:** Within-unit/positional (same candidate re-scored differently), between-unit/piece-to-piece (candidate A vs candidate B), temporal/over-time (this week's cohort vs last week's).
2. **Q:** The three variances are 1.50, 13.39 and 6.40. What is the total SD, and why isn't it 1.22 + 3.66 + 2.53? **A:** Total variance = 21.29, so total SD = √21.29 ≈ 4.61. Variances add; SDs don't — summing SDs double-counts and overstates.
3. **Q:** Between-candidate is 63% of the variation. Is that a problem to fix? **A:** Usually not — it is likely genuine candidate-to-candidate difference, which is what a scoring process *should* reveal. Focus instead on the ~30% temporal drift, which shouldn't be there.
4. **Q:** Why run a multi-vari *before* a DOE rather than instead of it? **A:** The multi-vari is passive — it narrows the many Xs to the dominant family cheaply, but changes nothing, so it can't establish cause or effect sizes. The DOE then manipulates only the surviving factors.
5. **Q:** The same two interviewers score candidates every week. Are interviewer and week nested or crossed? **A:** Crossed — every interviewer meets every week — so an interviewer×week interaction is estimable. (Candidates, who appear in only one week, are nested within week.)
