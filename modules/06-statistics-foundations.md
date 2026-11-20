# Module 06 · Statistics Foundations (Weeks 12–13)

> **Why it matters.** Everything in the Analyse and Improve phases — hypothesis tests, ANOVA, regression, DOE, control charts — stands on a handful of ideas: which distribution describes your data, why sample means behave so well, and how to attach an honest margin of error to an estimate. Green Belt used these tools; Black Belt has to *justify* them, pick the right one under pressure, and explain to a sceptical sponsor why a sample of 40 can speak for a population of 40,000. This module is the bedrock the next ten modules build on.

A note on the numbers in this module: because it teaches the *machinery*, most worked figures are **illustrative** and labelled as such. Where we use real data, it is the named project dataset and we say so.

---

## The intuition

**Distributions are just the shapes data make.** Toss onboarding times into a histogram and they pile up in a bell. Count onboarding *errors per file* and you get a lopsided pile near zero. Different processes make different shapes, and each shape has a tidy mathematical model that lets you predict how often things happen. Knowing which model fits means you can answer "how likely is that?" without collecting a lifetime of data.

**The Central Limit Theorem is the most useful magic in statistics.** Here is the trick you can feel in a spreadsheet. Take the response-time data, which is badly right-skewed (skew ≈ 2.8). Draw a random sample and write down the *average*. Do it again, and again, a few hundred times, and histogram those *averages*. With small samples of 5 the pile of averages is already tamer but still clearly leans right (its skew only drops to roughly 1.3). Push the sample size to 30 and the lean nearly vanishes (skew ≈ 0.5) — the averages now form a tidy bell, centred on the true mean and far tighter than the raw data. Averages behave more and more like a normal distribution as the sample grows, **even when the raw data never do**. That single fact is why nearly every test you will run assumes normality of the *estimate*, not the raw data, and still works on messy inputs — provided the sample is big enough.

**A confidence interval is honesty about a guess.** You sampled 100 onboarding files and got a mean of 14.0 days. The true mean of *all* files is not exactly 14.0 — you got close, but not spot on. A confidence interval says "the truth is very probably between 13.6 and 14.4 days." The width is set by how noisy the data are and how many you measured: more data, tighter interval. A point estimate ("14.0") pretends to a precision you do not have; the interval tells the truth about your uncertainty, which is what a decision-maker actually needs.

**A worked feel for standard error.** Standard deviation describes how spread out *individual* values are. Standard error describes how spread out the *average* is — and it shrinks as √n. Quadruple your sample and the error only halves. In a sheet: `SE = STDEV.S(range) / SQRT(COUNT(range))`. That one formula drives every interval and test below.

---

## The rigorous method

### The distributions a Black Belt must know

| Distribution | Type | Models… | Use it when… |
|---|---|---|---|
| **Normal** | continuous | symmetric, bell-shaped measurements | cycle times, scores, dimensions; the default for averages via the CLT |
| **Binomial** | discrete | number of "successes" in *n* independent yes/no trials | pass/fail, accept/decline counts with fixed *n* and constant p |
| **Poisson** | discrete | number of rare events in a fixed interval | defects per file, calls per hour; counts with no fixed upper bound |
| **t (Student's)** | continuous | a normal mean when σ is **unknown** and estimated from a small sample | t-tests and mean CIs; heavier tails than normal, converges to normal as df grows |
| **Chi-square (χ²)** | continuous | sums of squared normals; variances and counts | variance tests, goodness-of-fit, contingency-table independence |
| **F** | continuous | the ratio of two variances | ANOVA and comparing two variances; the engine of "is between-group bigger than within-group?" |

**Rules of thumb for the discrete two.** Binomial needs a *fixed* number of trials and a defective/non-defective outcome; its mean is np and variance np(1−p). Poisson needs events over a continuous area/time with a known average rate λ; its mean *and* variance both equal λ. As n grows and p is moderate, the binomial approaches the normal; a Poisson with large λ does too — which is why count data can often be handled with normal-based tools once counts get big.

### The Central Limit Theorem (CLT), formally

For a population with mean μ and finite standard deviation σ, the distribution of the sample mean x̄ from samples of size n:

- is centred on **μ** (the sample mean is unbiased),
- has standard deviation **σ/√n** (the **standard error of the mean**),
- and approaches a **normal** distribution as n grows, **regardless of the population's shape**.

In practice **n ≥ 30** is the common threshold for the approximation to be good; heavily skewed populations need more, nearly-normal ones need less. The CLT is *why* we can use normal- and t-based tests on means of non-normal data — it is the estimate, not the raw data, that must be normal.

### Sampling distributions and standard error

A **sampling distribution** is the distribution of a *statistic* (a mean, a proportion, a variance) over all possible samples. Its spread is the **standard error (SE)** — not to be confused with the standard deviation of the raw data. For a mean, SE = σ/√n (use s/√n when σ is unknown). For a proportion, SE = √[p(1−p)/n]. Every confidence interval and test statistic below is "estimate ÷ its standard error."

### Point vs interval estimates

A **point estimate** is a single best guess (x̄ for μ, p̂ for the population proportion). An **interval estimate** attaches a margin of error at a stated **confidence level** (commonly 95%). *Confidence* has a precise meaning: if you repeated the whole sampling exercise many times, 95% of the intervals so constructed would contain the true parameter. It is **not** a 95% probability that this particular interval contains the truth — the truth is fixed; the interval is what varies.

### Confidence interval for a mean

When σ is unknown (the normal case), use the **t-distribution** with n − 1 degrees of freedom:

> **x̄ ± t(α/2, n−1) · (s / √n)**

For large n, t ≈ z and the familiar 1.96 appears for 95%.

**Worked, from real data (`onboarding-capability.csv`).** x̄ = 14.01, s = 1.89, n = 100, SE = 1.89/√100 = 0.189, t(0.025, 99) = 1.984:
> 14.01 ± 1.984 × 0.189 = 14.01 ± 0.375 → **95% CI ≈ [13.64, 14.39] days.**
Read it as: we are 95% confident the true mean onboarding time lies between about 13.6 and 14.4 days.

### Confidence interval for a proportion

Using the normal approximation (valid when np̂ and n(1−p̂) both exceed ~5–10):

> **p̂ ± z(α/2) · √[ p̂(1−p̂) / n ]**

**Worked, from real data (`offer-acceptance-by-region.csv`).** Across all four regions, 155 of 210 offers were accepted, p̂ = 155/210 = 0.738, SE = √(0.738 × 0.262 / 210) = 0.0303, z = 1.96:
> 0.738 ± 1.96 × 0.0303 = 0.738 ± 0.059 → **95% CI ≈ [0.679, 0.798], i.e. about 68%–80%.**
(For small samples or proportions near 0 or 1, prefer the **Wilson** or **Agresti–Coull** interval, which behave better than this simple normal approximation.)

**How to run it.** *Spreadsheet:* `=CONFIDENCE.T(0.05, s, n)` gives the ± margin for a mean; build the proportion margin from the formula. *jamovi/JASP:* Descriptives and the one-sample modules report CIs directly. *Python:* `scipy.stats.t.interval(0.95, n-1, loc=mean, scale=sem)` for the mean; `statsmodels.stats.proportion.proportion_confint(155, 210, method='wilson')` for the proportion. *R:* `t.test()` prints the mean CI; `prop.test()` or `binom.test()` the proportion.

---

## Do this

1. **Feel the CLT.** In a spreadsheet, take `response-time-skewed.csv` (strongly right-skewed). Repeatedly draw samples and record each sample mean (a data-table or a short macro helps), a few hundred times. Do it first with samples of 5, then with samples of 30, and histogram each set of means against the raw values. Watch the right-lean shrink — still visible at n = 5, nearly gone at n = 30 — the CLT, and the role of sample size, in front of you.
2. **Build the mean CI.** Reproduce the `onboarding-capability.csv` interval above from scratch: mean, s, SE, t-multiplier, margin. Confirm you land on ≈ [13.64, 14.39].
3. **Build the proportion CI.** From `offer-acceptance-by-region.csv`, confirm 155/210 = 0.738 and the ≈ [0.68, 0.80] interval, then recompute with the Wilson method and compare the two.
4. **Match distributions to the running example.** For each metric, name the distribution: time-to-hire in days (→ normal / t), offers accepted out of 50 (→ binomial), onboarding errors per file (→ Poisson), "is region associated with acceptance?" (→ chi-square). Writing these down is the muscle Module 07 relies on.

---

## Common pitfalls

- **Confusing standard deviation with standard error.** SD describes individual spread; SE describes the spread of the *estimate* and shrinks as √n. Reporting SD where SE belongs overstates uncertainty of a mean.
- **Misreading a confidence interval.** "95% confident" refers to the long-run behaviour of the *method*, not a probability for this one fixed interval.
- **Forgetting the √n law of diminishing returns.** Halving the margin needs **four times** the data. Budget sampling accordingly.
- **Using z when you should use t.** With an unknown σ and a modest sample, the t-distribution's fatter tails give the honest (wider) interval; z is too optimistic.
- **Forcing the wrong distribution onto counts.** Pass/fail counts are binomial; rare-event counts are Poisson. Treating them as continuous-normal without checking (or without the n being large) distorts the tails.
- **Over-trusting the normal approximation for proportions near 0 or 1.** With few events, switch to Wilson/Agresti–Coull or an exact binomial interval.

## Self-check

1. **Q: The raw response-time data is badly skewed. Why can we still use normal-based tests on its mean?**
   A: The Central Limit Theorem — the *sampling distribution of the mean* approaches normal as n grows, regardless of the raw data's shape. The tests assume the estimate is normal, not the raw data.

2. **Q: Standard deviation vs standard error in one line each.**
   A: SD = spread of individual observations. SE = spread of a sample statistic (e.g. the mean), equal to σ/√n.

3. **Q: Which distribution for: number of accepted offers out of 50 offers made?**
   A: Binomial — a fixed number of independent yes/no trials with a constant acceptance probability.

4. **Q: You want to halve a confidence interval's width. What must happen to n?**
   A: It must roughly quadruple, because the margin scales with 1/√n.

5. **Q: State the 95% CI for the mean onboarding time and interpret it.**
   A: ≈ [13.64, 14.39] days. If we repeated the sampling many times, about 95% of such intervals would contain the true mean onboarding time.
