# Module 04 · Measurement Systems Analysis (Weeks 8–9)

> **Why it matters.** Every number in your project — time-to-hire, an interview score, an onboarding error count — arrives through a *measurement system*: the gauge, the method, the people, and the conditions under which the reading is taken. If that system is noisy or biased, you are improving a signal you cannot trust. A Black Belt who skips MSA can spend a whole project chasing variation that lives in the ruler, not in the process. Before you compare regions, run a capability study, or declare a change significant, you prove the measurement system is good enough to see what you are trying to see.

A note on terms as we go: **accuracy** is about hitting the true value on average; **precision** is about getting the same answer when you measure again. They are independent — a bathroom scale can be precise (same reading every time) yet inaccurate (reads 2 kg heavy). MSA checks both.

---

## The intuition

Imagine three interviewers each score the same ten candidates from the same recorded interviews, twice each. If the scoring system were perfect, every score for a given candidate would be identical, and the only spread you would see across the whole study would be the *real* differences between candidates. In reality you will see three other kinds of wobble:

- **The same interviewer, scoring the same candidate twice, disagrees with themselves.** That is **repeatability** — the equipment/method noise, also called *within-appraiser* variation. Its root is usually a vague rubric or fatigue.
- **Different interviewers score the same candidate differently.** That is **reproducibility** — *between-appraiser* variation. Its root is usually one interviewer being systematically harder or softer than another.
- **Candidates genuinely differ.** That is **part-to-part** variation — the signal you actually want.

Picture the classic dartboard. **Accurate but not precise:** darts scattered around the bullseye — no bias on average, but you cannot trust a single throw. **Precise but not accurate:** a tight cluster in the top corner — consistent, but consistently wrong (that is **bias**). The three accuracy ideas all describe a consistent *offset*:

- **Bias** — the gauge reads consistently high or low versus a known reference. (An interviewer who always adds five "benefit of the doubt" points.)
- **Linearity** — the bias *changes* across the range. (Fair on weak candidates, far too generous on strong ones.)
- **Stability** — the bias *drifts over time*. (Scores creep up over a hiring season as standards slip.)

**A worked example you can do in a spreadsheet.** Take any two interviewers scoring the same five candidates. In a sheet, put candidates down the rows and interviewers across the columns. For *repeatability*, use each interviewer's two trials: the average absolute gap between trial 1 and trial 2 is a plain-language measure of how much the method disagrees with itself. For *reproducibility*, average each interviewer's scores and look at the spread of those averages: if Interviewer B's overall average is five points above Interviewer A's, that five-point gap is reproducibility you can see with your own eyes. For *part-to-part*, average all readings per candidate: the spread of those candidate averages is the real signal. If the interviewer gaps rival the candidate gaps, your scoring system cannot tell a good hire from a mediocre one — and no amount of interviewing harder will fix a broken ruler.

---

## The rigorous method

### Gage R&R by the ANOVA method

A **Gage R&R** study quantifies how much of the total observed variation is measurement error (**G**auge **R**epeatability **&** **R**eproducibility) versus real part variation. Two engines exist: the older **Average–Range (X̄–R)** method, and the **ANOVA method**, which is preferred because it is the only one that can *separate the appraiser × part interaction* and generally gives better estimates. This is the exam-expected method.

**Design and assumptions.** A crossed study: every appraiser measures every part, several times (a balanced, fully crossed design). Parts should be chosen to span the real range of the process. Assumptions: the measurement errors are independent and approximately normal with constant variance; appraisers and parts are **random effects** (you care about the *population* of appraisers, not these three specifically). The model is

> y(ijk) = μ + Partᵢ + Appraiserⱼ + (Part×Appraiser)ᵢⱼ + εᵢⱼk

**The statistic.** A two-way ANOVA with interaction partitions the total sum of squares into Part, Appraiser, Part×Appraiser, and Repeatability (pure error). From the mean squares you back out **variance components** (with p = number of parts, o = appraisers, n = replicates):

| Component | Estimate | Meaning |
|---|---|---|
| Repeatability (equipment) | σ²_rep = MS_error | within-appraiser noise |
| Appraiser | σ²_op = (MS_op − MS_interaction) / (p·n) | between-appraiser offset |
| Interaction | σ²_int = (MS_interaction − MS_error) / n | appraiser treats some parts differently |
| **Reproducibility** | σ²_repro = σ²_op + σ²_int | all appraiser-driven variation |
| Part-to-part | σ²_part = (MS_part − MS_interaction) / (o·n) | the real signal |
| Total GRR | σ²_GRR = σ²_rep + σ²_repro | all measurement error |

**Reporting.** Two ratios are reported, and *you must not confuse them*:

- **% Contribution** — a ratio of **variances**: σ²_GRR / σ²_total.
- **% Study Variation (%SV)** — a ratio of **standard deviations**: σ_GRR / σ_total = √(% Contribution). Because you take a square root of a fraction below 1, **%SV is always the larger, scarier-looking number**, and it is the one most standards judge against.

A third ratio, **% Tolerance (%P/T)**, compares the measurement spread to the *specification width* instead of the study spread: 6·σ_GRR / (USL − LSL). Use %SV when you want to know if the gauge can *resolve the process*; use %Tolerance when you want to know if the gauge can *judge parts against spec*. They answer different questions and can disagree sharply.

**Number of distinct categories (ndc).** ndc = 1.41 · (σ_part / σ_GRR), truncated to an integer. It estimates how many non-overlapping groups the system can reliably tell apart. **ndc ≥ 5 is desired**; below that, the gauge is really only sorting parts into a few coarse bins.

**Acceptance rules (AIAG).**

| Metric | Good | Marginal | Unacceptable |
|---|---|---|---|
| % Study Variation (or %Tolerance) | < 10% | 10–30% | > 30% |
| ndc | ≥ 5 | — | < 5 (< 2 is useless) |

**How to run it.** *Spreadsheet first:* **Excel ▸ Data ▸ Data Analysis ▸ Anova: Two-Factor With Replication** takes the 10×3 table with two trials per cell and returns the four mean squares (sample = candidate, columns = interviewer, interaction, within) — from which you compute every variance component by hand with the formulas above. *Point-and-click tool:* **JASP** has a free **Quality Control** module (activate it from the module list) that runs Gauge R&R, attribute agreement and capability with menus — the most accessible one-click route; plain **jamovi** does not ship these, so there you drop to code. *Python:* `statsmodels` `ols('score ~ C(candidate)*C(interviewer)', data).fit()` then `anova_lm(..., typ=2)`, and assemble the variance-component table. *R:* the `SixSigma` package's `ss.rr()` does the whole study in one call. *Minitab* (common on exams): *Stat ▸ Quality Tools ▸ Gage Study ▸ Gage R&R (Crossed)*.

### Accuracy studies — the formal tests

- **Bias:** measure one reference part many times; test whether the mean reading differs from the reference value with a **one-sample t-test** (H₀: bias = 0).
- **Linearity:** measure several reference parts spanning the range; **regress** bias on reference value. A non-zero slope = linearity problem; test the slope against zero.
- **Stability:** measure a reference part periodically and plot an **X̄–R or I-MR control chart** over time; out-of-control signals mean the system is drifting.

### Attribute agreement analysis (conceptual)

When the measurement is a *category* (pass/fail, shortlist/reject, severity A/B/C) rather than a number, you cannot compute variances. Instead you ask whether appraisers *agree*, and whether they agree with a known standard. The headline statistic is **kappa (κ)**, which measures agreement *beyond what chance alone would produce*:

> κ = (p_observed − p_chance) / (1 − p_chance)

κ = 1 is perfect agreement; κ = 0 is no better than chance. Rough guide: κ > 0.75 good, 0.4–0.75 marginal, < 0.4 poor. Use **Cohen's kappa** for two raters (or a rater vs the standard), and **Fleiss' kappa** when three or more raters classify each item. For ordered categories, **weighted kappa** penalises "off by two" more than "off by one". This is the attribute-data twin of Gage R&R: repeatability becomes *within-appraiser* agreement, reproducibility becomes *between-appraiser* agreement.

---

## Do this — `interview-score-gagerr.csv`

Three interviewers (Int-A, B, C) each scored ten candidates twice: a crossed design, 10 × 3 × 2 = 60 rows. Run the ANOVA-method Gage R&R. The verified results (interaction retained in the model) are:

The ANOVA table (from the two-way model with interaction):

| Source | SS | df | MS |
|---|---|---|---|
| Candidate (part) | 3405.71 | 9 | 378.41 |
| Interviewer (appraiser) | 115.30 | 2 | 57.65 |
| Candidate × Interviewer | 85.56 | 18 | 4.75 |
| Repeatability (error) | 94.02 | 30 | 3.13 |

From the mean squares, the variance components:

- Repeatability variance = **3.13** (this is MS_error)
- Reproducibility variance = **3.45** (appraiser (57.65−4.75)/20 = 2.65 + interaction (4.75−3.13)/2 = 0.81)
- Part-to-part variance = **62.28** = (378.41−4.75)/6
- Total GRR variance = 3.13 + 3.45 = 6.58; total = 6.58 + 62.28 = 68.86
- **% Contribution** = 6.58 / 68.86 = **9.6%**
- **% Study Variation** = √(6.58 / 68.86) = **30.9%**
- **ndc** = 1.41 · √(62.28 / 6.58) = 4.34 → **4**

**A convention note worth knowing.** The interaction here is *not* statistically significant (F = 1.52, p = 0.15). These headline figures come from the model that **keeps** the interaction — repeatability is pure error (3.13) and reproducibility bundles appraiser + interaction (3.45). A tool set to **pool** a non-significant interaction into the error term (Minitab's default behaviour) folds those 85.56/18 into the residual and instead reports repeatability ≈ 3.74, reproducibility ≈ 2.70, part ≈ 62.45 (%SV ≈ 30.6%, ndc = 4). The verdict is identical either way; know which convention your software used before you compare two studies.

**Interpretation — this system is MARGINAL, sitting right on the unacceptable boundary.** %SV of 30.9% is *over* the 30% line (do not misread it as comfortably inside the 10–30% band — it has crossed out of it), and ndc = 4 is below the desired 5. Repeatability (3.13) and reproducibility (3.45) are of **comparable size** — roughly a 48/52 split that reverses to 58/42 under the pooled convention — so *both* need attention, not one. The appraiser averages show the reproducibility half concretely: Int-B averages about 69 while Int-C averages about 66, a three-point systematic leniency gap.

**What to do about it.** Because the two halves are comparable, attack both: (1) **for repeatability**, tighten the scoring rubric with behaviourally anchored descriptions for each band, so a single interviewer rescoring the same interview lands on the same number; (2) **for reproducibility**, run a calibration session where all three interviewers score the same recorded interviews and reconcile the Int-B/Int-C gap; (3) re-run the study and confirm %SV drops below 30% and ndc reaches 5 before trusting interview scores in any capability or hypothesis work downstream.

**Spreadsheet check first, then the tool.** In a sheet, pivot the mean score per interviewer — you will see B high and C low with your own eyes, which motivates the formal study. Then run the ANOVA (Excel's *Anova: Two-Factor With Replication*) and reproduce the variance components in Python (`statsmodels`) or R (`SixSigma::ss.rr`).

**%Tolerance aside (illustrative).** Suppose the hiring decision used an illustrative scoring tolerance of 30 points (say a usable band of 55–85). Then %Tolerance = 6·√6.58 / 30 ≈ **51%** — worse than the 30.9% %SV, because tolerance is narrower than the study's total spread. (The 30-point tolerance is illustrative; `interview-score-gagerr.csv` carries no real spec.)

---

## Common pitfalls

- **Quoting % Contribution to look better.** 9.6% sounds fine; the honest headline is %SV = 30.9%. Report the metric your standard judges on, and never quietly swap the variance ratio for the standard-deviation ratio.
- **Parts that don't span the range.** If your sample candidates are all mediocre, part variation collapses, σ_part shrinks, and %SV and ndc look terrible even with a fine gauge. Choose parts that cover the real process spread.
- **Confusing repeatability and reproducibility.** Repeatability = same person, repeat reading. Reproducibility = different people. The fix differs: equipment/method vs calibration/training.
- **Skipping accuracy entirely.** Gage R&R is a *precision* study. A perfectly repeatable, reproducible gauge can still be biased — you need bias/linearity/stability checks too.
- **Treating kappa like a correlation.** κ corrects for chance agreement; two raters can correlate highly yet still have a low κ if they rarely land on the exact same category.

## Self-check

1. **Q: %SV is 30.9% but % Contribution is only 9.6% — which do you report, and why the gap?**
   A: Report %SV (30.9%). %Contribution is a variance ratio; %SV is its square root (a standard-deviation ratio), so it is always larger and is the figure the AIAG acceptance bands are written against.

2. **Q: Repeatability (3.13) and reproducibility (3.45) are comparable. What two fixes does that call for?**
   A: Both halves matter, so tackle both: a clearer, behaviourally anchored rubric reduces repeatability (a person disagreeing with themselves), and a calibration session reduces reproducibility (the systematic Int-B/Int-C gap). It is not an equipment problem.

3. **Q: ndc = 4. What does that mean in plain terms, and is it acceptable?**
   A: The system can reliably distinguish only about four non-overlapping groups of candidates. The desired minimum is 5, so it is not acceptable — it is too coarse to trust for fine comparisons.

4. **Q: Distinguish bias, linearity, and stability.**
   A: Bias is a constant offset from truth; linearity is a bias that changes across the measurement range; stability is a bias that drifts over time.

5. **Q: Your measurement is "shortlist / reject" by three recruiters. Which MSA tool, and which statistic?**
   A: Attribute agreement analysis; use Fleiss' kappa (three or more raters), which measures agreement beyond chance.
