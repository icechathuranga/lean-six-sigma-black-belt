# Cheat Sheet — Which Statistical Test?

The Black Belt's most-used decision. Answer three questions, then read off the test.

**Q1 — What is your output (Y) data type?**  Continuous (time, cost, score) or Discrete (counts, pass/fail, category)?
**Q2 — What is your input (X)?**  A group/category, or another continuous variable?
**Q3 — How many groups, and are they paired?**

## Output = Continuous

| Question | Groups | Test | Course example |
|---|---|---|---|
| Is the average different from a target? | 1 | 1-sample t-test | — |
| Do two independent groups differ? | 2 | 2-sample t-test (Welch if variances differ) | `before-after-tth.csv` → t=2.88, p=0.0061 |
| Do two *paired* measurements differ? | 2 (paired) | Paired t-test | before/after on the *same* units |
| Do 3+ groups differ? | 3+ | One-way ANOVA | `time-to-hire-by-region.csv` → F=15.0, p=2.5e-08 |
| Effect of 2+ categorical factors? | — | Two-way ANOVA / DOE | `doe-factorial.csv` |
| Does a continuous X predict Y? | — | Regression | `time-to-hire-regression.csv` → R²=0.66 |
| Are two continuous things related? | — | Correlation (r) | — |

**If the data are badly non-normal or ordinal**, use the non-parametric twin: 2 groups → **Mann–Whitney U**; 3+ groups → **Kruskal–Wallis**; paired → **Wilcoxon signed-rank**.

## Output = Discrete / counts

| Question | Test | Course example |
|---|---|---|
| Are two proportions different? | 2-proportion test | — |
| Is a category related to another category? | Chi-square test of independence | `offer-acceptance-by-region.csv` → χ²=9.18, p=0.027 |
| Do observed counts fit expected? | Chi-square goodness-of-fit | — |

## Always
- State **H₀** (no difference / no effect) and **H₁** first.
- Pick **α** (usually 0.05) *before* looking.
- **p < α → reject H₀** (effect is real/significant). p ≥ α → insufficient evidence.
- Check the test's **assumptions** (normality, equal variance, independence) and **power/sample size**.
- **Statistical** significance ≠ **practical** significance. A tiny, real effect can be useless.
