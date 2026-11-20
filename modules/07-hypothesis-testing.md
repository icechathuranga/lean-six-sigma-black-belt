# Module 07 · Hypothesis Testing in Depth (Weeks 14–15)

> **Why it matters.** This is where a Black Belt earns the title. A sponsor will not fund a change because the "after" average *looks* lower — the numbers always jiggle. Hypothesis testing is the discipline that separates a real effect from random noise, attaches a probability to being wrong, and lets you say "the region genuinely drives time-to-hire" with evidence, not opinion. Choosing the *right* test, checking its assumptions, and reading the p-value honestly are the core analytical skills of the Analyse phase.

---

## The intuition

Every hypothesis test runs the same courtroom drama. The **null hypothesis (H₀)** is the defendant, presumed innocent: *"nothing has changed / the groups are the same / there is no effect."* The **alternative (H₁)** is the prosecution's claim: *"something is going on."* You do not prove H₁ true; you ask whether the evidence against H₀ is strong enough to reject the presumption of innocence. If the data would be very surprising *were H₀ true*, you reject H₀.

The **p-value** is the strength of that surprise: *assuming H₀ is true, how likely is data at least this extreme?* A tiny p-value means "this result would be a freak coincidence if nothing were going on," so you doubt the "nothing" story. You fix your threshold, **alpha (α)**, in advance — usually 0.05 — and reject H₀ when p < α.

Because you are deciding from a sample, you can be wrong two ways, and they are not symmetric:

- **Type I error (α):** convicting an innocent defendant — declaring an effect that is not real. A *false alarm*. You told the sponsor the change worked when it did not.
- **Type II error (β):** acquitting a guilty defendant — missing a real effect. A *missed signal*. The change really worked but your test could not see it.
- **Power (1 − β):** the chance of catching a real effect when it exists. A test with low power is a smoke detector with a flat battery — silent isn't safe.

You cannot drive both errors to zero at once with fixed data: tightening α (fewer false alarms) raises β (more misses). The lever that improves *both* is **more data**.

**A spreadsheet feel for all of it.** Put the before and after time-to-hire columns side by side. The "after" mean is lower — but each column has obvious spread. The question your eye cannot answer is: *is the gap between the means large compared to the noise within the columns?* That ratio — signal ÷ noise — is literally what every test statistic computes. A t of 2.9 means the gap is nearly three "noise units" wide, which rarely happens by luck, hence a small p.

---

## The rigorous method

### The framework, precisely

1. State **H₀** and **H₁** (two-sided unless you have a directional reason). Fix **α** *before* seeing results.
2. Check the test's **assumptions** (independence, normality/CLT, equal variances as required).
3. Compute the **test statistic** and its **p-value**.
4. **Decide:** p < α → reject H₀ ("statistically significant"); p ≥ α → fail to reject (never "accept" H₀).
5. State the result in process terms **and its practical size** — significance is not importance.

**On p-values, rigorously.** The p-value is P(data at least this extreme | H₀ true). It is **not** the probability H₀ is true, **not** the probability the result was chance, and **not** a measure of effect size. A large sample can make a trivial difference "significant"; a small sample can leave a large difference "non-significant." Always pair the p-value with an effect size and a confidence interval.

**Type I / II, β, power — the levers.** Power is fixed by four inputs: α (looser α raises power but costs more false alarms), the real effect size (bigger is easier to detect), the variability (less is better), and the sample size n (more is better). Fold effect size and variability into a single *standardised* effect, and you have four interlocking quantities — α, power, standardised effect, and n — where **fixing any three pins the fourth.** That relationship is the basis of every sample-size calculation.

### A test-selection roadmap

Ask three questions: *What type is the output? How many groups? What are you comparing?*

| You want to… | Continuous output | Discrete/attribute output |
|---|---|---|
| Compare a mean to a target | 1-sample t | 1-proportion test |
| Compare **2 independent** groups | 2-sample t (Welch by default); **Mann–Whitney** if non-normal | 2-proportion test; chi-square (2×2) |
| Compare **2 paired** measurements | Paired t; Wilcoxon signed-rank if non-normal | McNemar's test |
| Compare **3+** groups | One-way ANOVA; **Kruskal–Wallis** if non-normal | Chi-square test of independence |
| Test for an association | Correlation / regression (Module 08) | Chi-square |
| Compare variances | F-test (2 groups); Levene/Bartlett (3+) | — |

The parametric tests (t, ANOVA) assume approximately normal data (or large n via the CLT) and, classically, equal variances. When those fail, use the **non-parametric** alternatives, which test medians/ranks and make no normality assumption.

---

### Worked test 1 — Two-sample Welch t: `before-after-tth.csv`

**Question:** did a process change lower time-to-hire? The file holds 25 time-to-hire values from *before* the change and 25 from *after*. **These are two independent sets of requisitions**, not the same reqs measured twice — so this is a **two independent samples** problem, and the correct test is a two-sample t. (This is the key teaching contrast: *if* they had been the very same requisitions measured before and after, a **paired** t-test would apply and would be more powerful because it removes requisition-to-requisition variation. Here they are different hires, so we treat the samples as independent.)

- **H₀:** μ_before = μ_after. **H₁:** μ_before ≠ μ_after. α = 0.05.
- Use **Welch's t** (does not assume equal variances) as the safe default.
- before: mean = **31.0**, s ≈ 6.1; after: mean = **26.6**, s ≈ 4.7.
- **t = 2.88, p = 0.0061** (Welch df ≈ 45).

**p = 0.0061 < 0.05 → reject H₀.** The ~4.4-day drop is statistically significant; the change plausibly worked. The non-parametric check agrees: **Mann–Whitney p ≈ 0.012** — reassuring, since it does not lean on normality. Report the effect size too: a 4.4-day reduction on a 31-day baseline is a ~14% improvement — practically meaningful, not just significant.

*Run it.* Spreadsheet: `=T.TEST(before, after, 2, 3)` (type 3 = unequal-variance two-sample) returns the p-value. Python: `scipy.stats.ttest_ind(before, after, equal_var=False)`. jamovi/JASP: *T-Tests ▸ Independent Samples*, tick Welch's and the Mann–Whitney box.

### Worked test 2 — One-way ANOVA: `time-to-hire-by-region.csv`

**Question:** does time-to-hire differ across the four regions? Four groups → **ANOVA**, which asks whether the variation *between* group means is large relative to the variation *within* groups (an **F**-ratio).

- **H₀:** μ_East = μ_North = μ_South = μ_West. **H₁:** at least one differs. α = 0.05.
- Assumptions: independent observations, roughly normal residuals, similar group variances (Levene's test here gives p ≈ 0.43 — equal-variance assumption holds).
- means (days): **East 24.5, North 26.8, South 30.0, West 32.2** (30 per region).
- **F = 15.01, p = 2.5 × 10⁻⁸.**

**p ≪ 0.05 → reject H₀.** Regions genuinely differ; this is a real, large effect, not sampling noise. ANOVA only says *at least one* differs — follow with a **post-hoc** test (Tukey's HSD) to find *which* pairs differ while controlling the family-wise error from many comparisons. Tukey here flags East–West (≈ 7.8 days), East–South and North–West as clearly significant, while East–North is not. The non-parametric counterpart, **Kruskal–Wallis**, also rejects strongly (p ≈ 2 × 10⁻⁷), so the finding is not an artefact of distribution shape. Practically: East hires ~8 days faster than West — a prime target for replication (what is East doing right?).

*Run it.* Spreadsheet: *Data ▸ Data Analysis ▸ Anova: Single Factor* (one column per region). Python: `scipy.stats.f_oneway(east, north, south, west)`, then `statsmodels` `pairwise_tukeyhsd`. jamovi: *ANOVA ▸ One-Way ANOVA* offers Welch's F and a Kruskal–Wallis option; use the standard *ANOVA* analysis for Tukey post-hoc comparisons. JASP: *ANOVA* with post-hoc Tukey, or the dedicated Kruskal–Wallis option.

### Worked test 3 — Chi-square test of independence: `offer-acceptance-by-region.csv`

**Question:** is offer acceptance *associated with* region, or independent of it? Two categorical variables (region × accepted/declined) → **chi-square test of independence**, which compares observed counts to the counts expected if the two were independent.

- **H₀:** acceptance is independent of region. **H₁:** acceptance depends on region. α = 0.05.
- Assumption: expected count ≥ 5 in every cell (satisfied — the smallest expected count here is ~13).
- **χ² = 9.18, df = 3, p = 0.027.**

**p = 0.027 < 0.05 → reject H₀.** Acceptance rate depends on region. The observed rates make it concrete: North 84%, East 80%, South 70%, **West 60%** — West's offers are declined far more often, worth a focused root-cause look (pay bands? competing employers? offer speed?). Degrees of freedom = (rows − 1)(cols − 1) = 3 × 1 = 3.

*Run it.* Spreadsheet: build the expected-count table (row total × column total ÷ grand total) and use `=CHISQ.TEST(observed_range, expected_range)`. Python: `scipy.stats.chi2_contingency(table)`. jamovi/JASP: *Frequencies ▸ Independent Samples (χ² test of association)*.

### Non-parametric alternatives (overview)

Reach for these when normality fails *and* the sample is too small for the CLT to rescue you, or when the data are ordinal. They test **ranks/medians**, so outliers and skew bother them far less:

- **Mann–Whitney U** — the rank-based stand-in for the **two-sample t** (two independent groups).
- **Wilcoxon signed-rank** — the stand-in for the **paired t**.
- **Kruskal–Wallis** — the stand-in for **one-way ANOVA** (3+ groups).

They cost a little power when the data *are* normal, which is why you default to the parametric test and switch only with cause.

### Sample size and power (conceptual + the levers)

Before collecting data, a Black Belt asks: *how many observations do I need to detect an effect that matters?* A power calculation ties together five quantities — **α, power (1 − β, usually 0.80 or 0.90), the effect size worth detecting, the process variability, and n** — fix four and solve for the fifth. The levers you control:

- **Bigger target effect** → smaller n needed (you only promise to catch effects of consequence).
- **Lower variability** (better measurement system — see Module 04 — or tighter sampling) → smaller n.
- **Looser α or lower required power** → smaller n, but more false alarms / more misses.
- Everything else fixed, **n is the master lever** that improves power without trading errors against each other.

*Run it.* Python: `statsmodels.stats.power` (`TTestIndPower().solve_power(...)`). Free tool: **G\*Power**. Do this *before* the study — discovering you were underpowered *after* a non-significant result is the most expensive mistake in the Analyse phase.

---

## Common pitfalls

- **"Fail to reject" ≠ "H₀ is true."** A non-significant result may mean no effect — or an underpowered test. Report the power or the CI so the sponsor knows which.
- **Confusing statistical and practical significance.** A huge n can make a 0.2-day difference "significant." Always quote the effect size.
- **Misinterpreting the p-value.** It is not the probability H₀ is true, nor the probability the result was luck. It is P(data this extreme | H₀).
- **Running many tests and keeping the one that "worked."** Twenty tests at α = 0.05 give roughly one false positive by chance. Use ANOVA + a controlled post-hoc (Tukey) rather than many separate t-tests.
- **Ignoring assumptions.** A t-test on wildly skewed small samples, or chi-square with expected counts < 5, gives an untrustworthy p. Check first; switch to Welch, non-parametric, or Fisher's exact as needed.
- **Treating paired data as independent (or vice versa).** It changes the test and the power. Ask whether each "before" pairs with a specific "after."
- **One-sided tests chosen after seeing the data.** Decide the direction (and α) before you look.

## Self-check

1. **Q: In plain words, what does p = 0.0061 for the before/after test mean?**
   A: If the change had truly made no difference, data showing a gap this large (or larger) would occur only about 0.6% of the time. That is strong enough evidence (p < 0.05) to reject "no difference."

2. **Q: ANOVA on regions gives p = 2.5 × 10⁻⁸. Can you now say which regions differ?**
   A: Not yet. ANOVA says *at least one* mean differs. Run a post-hoc test (Tukey's HSD) to identify which specific pairs differ while controlling the family-wise error rate.

3. **Q: Define Type I error, Type II error, and power.**
   A: Type I (α) = declaring an effect that is not real (false alarm). Type II (β) = missing a real effect. Power (1 − β) = probability of detecting a real effect when it exists.

4. **Q: Why is Welch's t the safer default over the classic two-sample t?**
   A: It does not assume the two groups have equal variances, so it stays valid when variances differ — a common situation — at almost no cost when they are equal.

5. **Q: Data for a two-group comparison are strongly skewed with n = 12 per group. Which test, and why?**
   A: Mann–Whitney U — the sample is too small for the CLT to normalise the means, so the rank-based test avoids the normality assumption the t-test would violate.
