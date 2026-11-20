# Black Belt Practice Datasets

Realistic HR-themed CSVs for the exercises, all on the course's running example (time-to-hire / onboarding across a multi-region operation). Every answer below was computed with numpy/scipy/statsmodels — the full key is in **`ANSWER-KEYS.md`**. Open the CSVs in a spreadsheet, **jamovi/JASP**, Python, or R.

| File | Used in | What's inside | Key verified answers |
|---|---|---|---|
| `time-to-hire-regression.csv` | Mod 08 (regression) | 120 hires: interview_rounds, offer_delay_days, recruiter_caseload → time_to_hire_days | R² = **0.661**; +1 interview round ≈ **+3.45 days**; all predictors significant |
| `time-to-hire-by-region.csv` | Mod 07 (ANOVA) | time_to_hire_days for 4 regions (30 each) | means 24.5 / 26.8 / 30.0 / 32.2; **F = 15.0, p = 2.5e-08** (regions differ) |
| `interview-score-gagerr.csv` | Mod 04 (MSA) | 3 interviewers × 10 candidates × 2 ratings | Gage R&R **%study = 30.9%**, **ndc = 4** → *marginal* measurement system |
| `onboarding-capability.csv` | Mod 05 (capability) | 100 onboarding completion times (days), USL = 20 | μ = 14.01, σ = 1.89, **Cpk = 1.05**; Shapiro p = 0.039 (borderline normal) |
| `response-time-skewed.csv` | Mod 05 (non-normal) | 100 first-response times (hours), right-skewed | Shapiro p < 0.0001 (not normal); after **log transform** p = 0.664 |
| `doe-factorial.csv` | Mod 10 (DOE) | 2³ full factorial, 2 replicates (A guide, B pre-screen, C tool) | effects A **−6.34**, B **−2.74**, C **−1.48**, A×B **+1.43** (all significant); R² = 0.963 |
| `before-after-tth.csv` | Mod 07 (t-test) | time-to-hire before vs after a change (25 each) | before 31.0, after 26.6; **t = 2.88, p = 0.0061** (significant) |
| `offer-acceptance-by-region.csv` | Mod 07 (chi-square) | accepted vs declined offers, 4 regions | **χ² = 9.18, dof = 3, p = 0.027** (acceptance depends on region) |
| `tth-subgroups.csv` | Mod 13 (control) | 20 subgroups of 5 (weekly time-to-hire samples) | X̿ = 26.20, R̄ = 4.57; X̄ UCL **28.84** / LCL **23.57**; **subgroup 15 out of control** |

> Want more or different data (bigger samples, a messier set to clean, an attribute-agreement study, an RSM design)? Just ask.
