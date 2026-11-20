# Black Belt datasets — verified answer keys

All numbers below were computed with numpy/scipy/statsmodels (seed-fixed). Lesson authors MUST use these exact figures.

## 1. Multiple regression — time-to-hire-regression.csv
R-squared = 0.661, adj R2 = 0.652, F p-value = 3.84e-27
  coef Intercept: 9.016  (p=1.13e-07)
  coef interview_rounds: 3.448  (p=6.64e-19)
  coef offer_delay_days: 1.979  (p=3.59e-09)
  coef recruiter_caseload: 0.373  (p=2.49e-09)
  => each extra interview round adds ~3.4 days; model explains ~66% of variation.

## 2. One-way ANOVA — time-to-hire-by-region.csv
group means (days): {'East': 24.5, 'North': 26.8, 'South': 30.0, 'West': 32.2}
ANOVA F = 15.01, p = 2.54e-08  => regions differ significantly

## 3. Gage R&R (ANOVA method) — interview-score-gagerr.csv
repeatability var=3.13, reproducibility var=3.45, part var=62.28
%GRR (contribution)=9.6%, %GRR (study var)=30.9%, ndc=4
  => rule of thumb: %study <10% good, 10-30% marginal, >30% unacceptable; ndc>=5 desired. Here %study=31%.

## 4a. Capability (normal) — onboarding-capability.csv
mean=14.01, sd=1.89, USL=20 -> Cpk(upper)=1.05; Shapiro p=0.039 (normal if p>0.05)
## 4b. Capability (non-normal) — response-time-skewed.csv
Shapiro p=0.0000 (NOT normal) -> after log transform Shapiro p=0.664; median=4.3h

## 5. DOE 2^3 full factorial (2 reps) — doe-factorial.csv
R2=0.963. Effects (= 2*coef) and p-values:
  A_structured_guide: effect=-6.34 (p=1.63e-06)  *sig
  B_prescreen: effect=-2.74 (p=0.000668)  *sig
  A_structured_guide:B_prescreen: effect=+1.43 (p=0.0229)  *sig
  C_scheduling_tool: effect=-1.48 (p=0.0198)  *sig
  A_structured_guide:C_scheduling_tool: effect=-0.12 (p=0.823)
  B_prescreen:C_scheduling_tool: effect=-1.17 (p=0.0502)
  A_structured_guide:B_prescreen:C_scheduling_tool: effect=+0.38 (p=0.474)

## 6a. Two-sample t (Welch) — before-after-tth.csv
before mean=31.0, after=26.6, t=2.88, p=0.0061 -> significant
## 6b. Chi-square independence — offer-acceptance-by-region.csv
chi2=9.18, dof=3, p=0.0269 -> acceptance rate depends on region

## 7. Xbar-R control chart — tth-subgroups.csv (n=5)
Xbarbar=26.20, Rbar=4.57; Xbar UCL=28.84 LCL=23.57; R UCL=9.65
  out-of-control subgroups (special cause): [15]
