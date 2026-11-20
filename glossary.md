# Glossary — Black Belt

The advanced terms, in plain words. Assumes the [Green Belt glossary](https://icechathuranga.github.io/lean-six-sigma-green-belt/reference/glossary.html) (DMAIC, DPMO, basic stats, core Lean). Grouped by module.

## Deployment & leadership
- **Deployment** — rolling Lean Six Sigma out across an organisation (governance, training, project pipeline).
- **Project selection matrix** — scoring candidate projects by benefit, effort, strategic fit to pick the right ones.
- **Hard vs soft savings** — cash that hits the P&L vs avoided cost / productivity.
- **ROI / NPV / payback** — return on investment; net present value (future cash discounted to today); time to recoup the cost.
- **Voice of the Business (VOB)** — what the organisation needs (cost, growth, risk), alongside the Voice of the Customer.
- **Tuckman stages** — forming, storming, norming, performing: how teams mature.
- **RACI** — Responsible, Accountable, Consulted, Informed: a role-clarity grid.
- **Change management (ADKAR / Kotter)** — structured approaches to getting people to adopt a change.
- **Nominal group technique / multivoting** — structured ways to generate and prioritise ideas fairly.

## Advanced Define
- **QFD (Quality Function Deployment)** — the "House of Quality"; translates customer needs into design/process requirements.
- **Kano model** — classifies features as basic (must-be), performance, or delighters.
- **CTQ flow-down** — breaking a big customer need into specific, measurable critical-to-quality requirements.

## Measurement Systems Analysis
- **MSA** — checking the measurement system itself is trustworthy before trusting the data.
- **Accuracy** — bias (off on average), linearity (bias changes across range), stability (bias drifts over time).
- **Precision** — repeatability (same person/gauge, same result) and reproducibility (different people, same result).
- **Gage R&R** — a study quantifying repeatability + reproducibility as a share of total variation.
- **%Study variation / %Tolerance** — GRR relative to total process variation / to the spec width.
- **ndc (number of distinct categories)** — how many groups the system can tell apart; want ≥ 5.
- **Attribute agreement analysis / kappa** — MSA for pass/fail or rating data; kappa measures agreement beyond chance.

## Capability & distributions
- **Cp/Cpk (within, short-term) vs Pp/Ppk (overall, long-term)** — capability indices; a gap signals instability.
- **Sigma level (Z)** — capability expressed as a sigma score.
- **Normality test (Shapiro–Wilk, Anderson–Darling)** — checks whether data follow a normal distribution.
- **Transformation (log, Box–Cox)** — re-expressing non-normal data so normal-based tools apply.
- **Central Limit Theorem** — averages of samples tend to be normal, even when the data aren't.
- **Standard error** — the standard deviation of a sample statistic (e.g. the mean).
- **Confidence interval** — a plausible range for a true value, at a stated confidence (e.g. 95%).

## Hypothesis testing
- **H₀ / H₁** — null (no effect) and alternative (an effect).
- **α (significance) / β** — chance of a false positive (Type I) / false negative (Type II).
- **Power** — 1 − β; the chance of detecting a real effect.
- **p-value** — probability of the data if H₀ were true; p < α ⇒ significant.
- **t-test / ANOVA / chi-square** — compare 2 means / 3+ means / category counts.
- **Non-parametric tests (Mann–Whitney, Kruskal–Wallis, Wilcoxon)** — distribution-free alternatives.

## Regression & variation
- **Correlation (r)** — strength/direction of a linear relationship (−1 to +1).
- **Regression** — an equation predicting Y from one or more X's.
- **R² / adjusted R²** — share of Y's variation explained by the model.
- **Residual** — actual minus predicted; residual plots check assumptions.
- **Multicollinearity (VIF)** — predictors that are themselves correlated, distorting coefficients.
- **Multi-vari study** — a graphical study splitting variation into within-unit, unit-to-unit, and over-time families.

## Design of Experiments
- **Factor / level / response / run** — input you set / its setting / the output / one combination tested.
- **Main effect / interaction** — a factor's average effect / when one factor's effect depends on another.
- **Full factorial (2ᵏ)** — every combination of factor levels.
- **Fractional factorial (2^(k−p))** — a carefully chosen subset; cheaper but some effects are aliased.
- **Resolution / aliasing (confounding)** — which effects get mixed together in a fractional design.
- **Response Surface Methodology (RSM) / central composite design** — designs to find the optimum settings.
- **Centre points** — runs at mid-levels to detect curvature.

## Advanced Lean
- **Theory of Constraints (TOC)** — manage the system by its bottleneck (the five focusing steps).
- **Drum–buffer–rope** — a TOC scheduling method pacing the system to the constraint.
- **SMED** — Single-Minute Exchange of Die; slashing changeover/setup time.
- **TPM / OEE** — Total Productive Maintenance; Overall Equipment Effectiveness = Availability × Performance × Quality.
- **Little's Law** — WIP = Throughput × Lead time.
- **Heijunka** — levelling the mix and volume of work.

## Advanced control & DFSS
- **Rational subgrouping** — sampling so within-subgroup variation is only common-cause.
- **CUSUM / EWMA** — control charts that catch small, sustained shifts faster than Shewhart charts.
- **Run rules (Nelson / Western Electric)** — patterns that signal a special cause.
- **DFSS / DMADV** — Design for Six Sigma; Define–Measure–Analyse–Design–Verify, for creating new processes/products rather than fixing existing ones.
