# Cheat Sheet — Black Belt Formulas (with worked numbers)

### Process capability
- **Cp** = (USL − LSL) / (6σ_within) — potential spread vs spec (ignores centring).
- **Cpk** = min[(USL − μ)/(3σ_within), (μ − LSL)/(3σ_within)] — penalises off-centre.
- **Pp / Ppk** — same formulas but with **σ_overall** (long-term). Cpk ≈ Ppk ⇒ stable process.
- **Sigma level (Z)** ≈ 3 × Cpk (for a centred process, short-term). *Worked (`onboarding-capability.csv`):* μ=14.01, σ=1.89, USL=20 → Cpk = (20−14.01)/(3×1.89) = **1.05**.
- Non-normal data: transform (log, **Box–Cox**) or use percentile-based capability. *`response-time-skewed.csv`:* Shapiro p<0.0001; after log, p=0.664.

### Measurement System Analysis (Gage R&R, ANOVA method)
- Total variance = **Repeatability** (equipment) + **Reproducibility** (appraiser) + **Part-to-part**.
- GRR = Repeatability + Reproducibility. **%Study = √(GRR/Total) × 100**. **ndc = 1.41 × √(Var_part / Var_GRR)**.
- Accept: %Study <10% good · 10–30% marginal · >30% unacceptable; **ndc ≥ 5**. *Worked (`interview-score-gagerr.csv`):* %Study = **30.9%**, ndc = **4** → marginal.

### Hypothesis tests
- **2-sample t** = (x̄₁ − x̄₂) / √(s₁²/n₁ + s₂²/n₂). *`before-after-tth.csv`:* t=**2.88**, p=**0.0061**.
- **One-way ANOVA F** = MS_between / MS_within. *`time-to-hire-by-region.csv`:* F=**15.0**, p=2.5e-08.
- **Chi-square** = Σ (O − E)² / E. *`offer-acceptance-by-region.csv`:* χ²=**9.18**, dof=3, p=0.027.
- **Confidence interval (mean)** = x̄ ± t_(α/2, n−1) × (s/√n).
- **Power** = 1 − β (chance of detecting a real effect). Levers: effect size, α, n, σ.

### Regression
- Model: Ŷ = b₀ + b₁X₁ + … + bₖXₖ. **R²** = fraction of variation explained; use **adjusted R²** to compare models.
- *`time-to-hire-regression.csv`:* R²=**0.661**; each extra interview round adds **3.45 days** (p≈0).
- Check residuals: random, constant spread, roughly normal. Watch **multicollinearity** (VIF).

### DOE
- **Effect** of a factor = (mean at +1) − (mean at −1) = 2 × its regression coefficient (coded units).
- *`doe-factorial.csv` (2³, 2 reps):* A=−6.34, B=−2.74, C=−1.48, A×B=+1.43 (all significant).

### Lean / finance
- **OEE** = Availability × Performance × Quality. *e.g.* 0.90 × 0.95 × 0.99 = **84.6%**.
- **Little's Law:** WIP = Throughput × Lead time ⇒ Lead time = WIP / Throughput. *e.g.* 40 reqs ÷ 8 per day = **5 days**.
- **ROI** = (gain − cost) / cost. **Payback** = cost / annual saving. **NPV** = Σ cashflowₜ / (1+r)ᵗ − investment.
