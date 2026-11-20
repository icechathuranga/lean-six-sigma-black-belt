# Module 08 · Correlation & regression (Weeks 16–17)

## Why it matters

In Analyse you have a shortlist of suspected drivers (your Xs) and a problem metric (your Y). Hypothesis tests (Module 07) tell you *whether* a difference exists; **regression** tells you *how much* Y moves when an X moves, lets you weigh several Xs at once, and gives you an equation to **predict** and to **set targets** on the vital few. For our running example — reducing time-to-hire across a multi-region HR operation — regression answers: *of interview rounds, offer delay and recruiter caseload, which actually drive the days-to-hire, and by how much each?* That is the bridge from "these look related" to a defensible improvement plan.

Work the real dataset `datasets/time-to-hire-regression.csv` alongside this module. All figures quoted below were computed from that file (n = 120 requisitions).

---

## Correlation vs regression

**The intuition.** Correlation measures how tightly two things move together, on a scale from −1 to +1. In our data, `interview_rounds` and `time_to_hire_days` have r ≈ **0.65** — strong and positive: more rounds, more days. But correlation is symmetric and unitless: it says nothing about *how many days* an extra round costs, and it treats X→Y and Y→X the same. Regression is directional and has units: it fits a line that predicts Y *from* X and gives you a slope in days-per-round. Use correlation to *screen* pairs; use regression to *model* and *predict*.

**The rigorous method.** The Pearson correlation coefficient is r = Σ(xᵢ−x̄)(yᵢ−ȳ) / √[Σ(xᵢ−x̄)²·Σ(yᵢ−ȳ)²]. It assumes a *linear* relationship between two continuous variables and is sensitive to outliers; for ranked or non-linear data use Spearman's rho. Note r² (correlation squared) equals the R² of the simple regression of Y on X — here 0.65² ≈ 0.42. Test H₀: ρ = 0 with a t-statistic on n−2 degrees of freedom. Correlation quantifies *association strength*; regression quantifies the *form and size* of the dependence.

---

## From simple to multiple regression, and reading the coefficients

**The intuition.** Simple linear regression fits one straight line, Ŷ = b₀ + b₁X. Regressing time-to-hire on interview rounds alone gives slope ≈ **3.85 days per round**, intercept ≈ 18.5, R² ≈ 0.42 — rounds alone explain about 42% of the spread. But days-to-hire has more than one cause. **Multiple regression** fits one equation with several Xs at once, so each slope is "the effect of this X *holding the others constant*." Fitting all three predictors gives:

**time_to_hire_days = 9.02 + 3.45·interview_rounds + 1.98·offer_delay_days + 0.37·recruiter_caseload**

Read it plainly: each **extra interview round adds ≈ 3.45 days**; each extra day of **offer delay adds ≈ 1.98 days**; each extra unit of **recruiter caseload adds ≈ 0.37 days**. Notice the rounds slope fell from 3.85 (alone) to 3.45 (adjusted) — that shrink is what "controlling for the others" looks like.

**The rigorous method.** The model is Y = β₀ + β₁X₁ + … + βₖXₖ + ε, fitted by **ordinary least squares (OLS)**, which chooses the bᵢ that minimise the sum of squared residuals Σ(yᵢ−ŷᵢ)². Each bᵢ is a *partial slope*: the mean change in Y per one-unit change in Xᵢ with all other Xs fixed. The intercept b₀ = 9.02 is the predicted Y when **every** X = 0 — a mathematical anchor, not a real requisition (none has zero rounds *and* zero caseload), so do not interpret it as "the fastest possible hire." Coefficients carry units; a one-unit change means one round, one day, or one caseload unit respectively, so you cannot rank importance by raw coefficient size unless the Xs share a scale (use standardised coefficients for that).

---

## R² vs adjusted R², and testing significance

**The intuition.** R² is the share of the variation in Y the model explains: here **0.661**, so the three Xs together account for ~66% of why some roles take longer than others; the remaining ~34% is other causes and noise. The catch: R² can only *rise* as you add predictors, even useless ones. **Adjusted R²** (here **0.652**) charges a penalty for each extra X and only rises if the new X earns its keep. The two are close here (0.661 vs 0.652) because all three predictors are genuinely pulling their weight.

**The rigorous method.** R² = SSR/SST = 1 − SSE/SST. Adjusted R² = 1 − (1−R²)(n−1)/(n−k−1), with k predictors — it can fall when a weak X is added. Two significance layers:

- **Overall F-test** (H₀: all slopes = 0): here F(3, 116) ≈ 75.5, **p ≈ 3.8 × 10⁻²⁷** — the model as a whole is overwhelmingly significant.
- **Per-coefficient t-tests** (H₀: βᵢ = 0), each t = bᵢ / SE(bᵢ): interview_rounds p ≈ 7 × 10⁻¹⁹, offer_delay_days p ≈ 4 × 10⁻⁹, recruiter_caseload p ≈ 2 × 10⁻⁹. **All three are highly significant** (p ≪ 0.05), so every predictor stays in the model. Report the 95% confidence interval for each slope too — a CI that excludes 0 is the same verdict as p < 0.05, but shows the *range* of plausible effect sizes.

---

## Residuals, assumptions, and multicollinearity

**The intuition.** A residual is what the model got wrong for one row: actual − predicted. If the model is sound, the residuals should look like structureless noise — no pattern, roughly constant spread, roughly bell-shaped. If you plot residuals and see a curve, a fan (spread growing with the prediction), or a drift over time, the model is missing something. Separately, if two Xs are near-duplicates of each other (**multicollinearity**), the model struggles to tell their effects apart and the individual slopes become unstable — though predictions can still be fine.

**The rigorous method.** OLS inference rests on four assumptions, each with a check (the mnemonic **LINE**):

| Assumption | What it means | How to check |
|---|---|---|
| **L**inearity | Y is linear in the Xs | Residuals vs fitted — should show no curve |
| **I**ndependence | Residuals not related across observations | Residuals vs run order; Durbin–Watson ≈ 2 |
| **N**ormality | Residuals ~ Normal | Normal probability (Q–Q) plot; histogram; Shapiro–Wilk |
| **E**qual variance | Constant spread (homoscedasticity) | Residuals vs fitted — should show no fan |

Residuals always have mean 0 by construction, so that is not a check. **Multicollinearity** is diagnosed with the **Variance Inflation Factor**: VIF_i = 1/(1−R²_i), where R²_i comes from regressing Xᵢ on the other Xs. Rule of thumb: VIF > 5 is a concern, > 10 is serious. In our data the predictors are nearly uncorrelated (pairwise |r| ≤ 0.12) and **all VIFs ≈ 1.0** — a textbook clean case, which is *why* the simple and multiple slopes for rounds differed only modestly. When VIFs are high, drop or combine redundant Xs, or use the model only for prediction, not for interpreting individual slopes.

---

## Prediction vs extrapolation, and correlation ≠ causation

**The intuition.** The equation predicts time-to-hire for a *new* requisition. For 4 rounds, a 3.0-day offer delay and a caseload of 15: Ŷ = 9.02 + 3.45(4) + 1.98(3.0) + 0.37(15) ≈ **34.3 days**. That is trustworthy because all three inputs sit *inside* the range the model learned from. Push an input outside that range — say 8 rounds — and you are **extrapolating**: the line keeps going, but you have no evidence the relationship stays straight out there. And even a perfect fit does not prove *cause*: rounds may simply mark senior roles that are slow for other reasons.

**The rigorous method.** Predict only within the observed ranges — here interview_rounds 2–5, offer_delay_days 0.2–5.9, recruiter_caseload 5–25. Report a **prediction interval** (for a single new case) not just a confidence interval (for the mean response); prediction intervals are wider. **Extrapolation** beyond the data's convex hull is unsupported and a classic Black-Belt trap. Finally, regression establishes **association, not causation**: observational slopes can arise from confounding (a lurking Z driving both X and Y), reverse causation, or selection. To claim that cutting a round *causes* faster hiring, you need a controlled, randomised **experiment** — which is exactly where Modules 10–11 (DOE) take you.

---

## Do this — `time-to-hire-regression.csv`

1. **Spreadsheet first.** Compute `=CORREL()` of each X with Y. Then run the regression three ways and confirm they agree: (a) `=SLOPE`, `=INTERCEPT`, `=RSQ` for the simple rounds model; (b) the **Data Analysis → Regression** dialog (tick *Residuals*) for the full three-X model — but note Excel's built-in *Normal Probability Plot* option charts the response Y, **not** the residuals, so build the residual Q–Q plot yourself from the residual column; (c) `=LINEST(Y, Xrange, TRUE, TRUE)` as an array. **Watch out:** LINEST returns coefficients **right-to-left** — the rightmost X's slope first, the intercept last — the reverse of the dialog's order.
2. **Then the stats-tool way.** In **jamovi/JASP**, open a linear-regression analysis, set the continuous dependent variable and the three covariates, and request the model fit, coefficients, VIF/collinearity, and residual plots. In **Python**: `import statsmodels.formula.api as smf; m = smf.ols('time_to_hire_days ~ interview_rounds + offer_delay_days + recruiter_caseload', data=df).fit(); print(m.summary())`. In **R**: `summary(lm(time_to_hire_days ~ interview_rounds + offer_delay_days + recruiter_caseload, data=df))`.
3. **Confirm** R² = 0.661, adjusted R² = 0.652, overall p ≈ 3.8 × 10⁻²⁷, and the four coefficients (9.02 / 3.45 / 1.98 / 0.37). Then inspect the residual-vs-fitted and Q–Q plots and the VIFs, and write one sentence on which lever gives the biggest payback per unit of effort.

---

## Common pitfalls

- **Reading the intercept as a real scenario.** b₀ = 9.02 is Y at *all* Xs = 0, which no requisition is — it is an anchor, not an achievable target.
- **Ranking drivers by raw coefficient size.** 3.45 (rounds) vs 0.37 (caseload) are in different units; one extra round ≠ one extra caseload unit. Use standardised coefficients or realistic change sizes to compare leverage.
- **Chasing R².** Adding predictors always lifts R²; judge extra Xs by adjusted R² and their t-tests, and prefer the simpler model when fits are close.
- **Skipping the residual plots.** A high R² with a curved or fanned residual plot is a mis-specified model, not a good one.
- **Extrapolating.** Predicting outside the training ranges (e.g. 8 rounds) is unsupported however tidy the equation looks.
- **Declaring causation.** A significant slope is association; only a designed experiment licenses a causal claim.

## Self-check

1. **Q:** The rounds slope is 3.45 in the multiple model but 3.85 alone. Why the difference, and which do you report? **A:** The multiple-regression slope is *adjusted* for offer delay and caseload — it is the effect of rounds holding the others constant. Report 3.45 as the driver estimate; the 3.85 includes a little of the other Xs' influence. (They are close here only because the predictors are nearly uncorrelated.)
2. **Q:** R² = 0.661 and adjusted R² = 0.652. What does the small gap tell you? **A:** All three predictors earn their place — the penalty for model size barely dented R², so none is dead weight.
3. **Q:** All VIFs ≈ 1.0. What does that let you trust, and what would VIF = 12 have threatened? **A:** Near-1 VIFs mean no multicollinearity, so the individual slopes are stable and interpretable. VIF = 12 would mean two Xs are near-redundant, making individual slopes unreliable (though predictions could still hold).
4. **Q:** Is predicting time-to-hire for a role with 8 interview rounds sound? **A:** No — the data only span 2–5 rounds, so 8 is extrapolation; the linear relationship is unverified there.
5. **Q:** The model says rounds strongly predict days-to-hire. Can you tell the client that cutting a round will save ~3.4 days? **A:** Not from this alone — it is association, possibly confounded (e.g. senior roles have both more rounds and slower processes). Confirm the causal size with a designed experiment (Module 10) before promising the saving.
