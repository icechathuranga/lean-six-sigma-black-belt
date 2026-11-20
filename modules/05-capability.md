# Module 05 · Process Capability (Weeks 10–11)

> **Why it matters.** Capability is the one number a Black Belt uses to answer the executive's real question: *"Can this process reliably deliver what the customer asked for?"* It fuses the **voice of the process** (how much the process actually varies) with the **voice of the customer** (the specification limits) into a single index. Get it right and you can baseline, set targets, and prove improvement. Get it wrong — usually by ignoring the shape of the data — and you will promise a capability the process cannot keep.

Terms up front: the **specification limits** (USL, LSL) are the customer's boundaries. The **process spread** is the natural variation the process produces. Capability compares the two.

---

## The intuition

Think of the process spread as a car and the specification width as a garage. **Capability is "how comfortably does the car fit in the garage?"** If the garage is three car-widths wide, you can park carelessly and never scrape — highly capable. If the car barely fits, every park is a gamble.

Two things can go wrong, and they are different problems:

- The car is too **wide** — the process varies too much (too much spread). That is a **Cp** problem: even perfectly centred, it will not fit.
- The car is **off to one side** — the process is centred away from the middle of the garage, so it scrapes one wall even though it is narrow enough to fit. That is a **centring** problem, which **Cp cannot see** because Cp only compares widths. **Cpk** adds the centring: it measures the distance to the *nearest* wall, so it catches a process that is drifting towards one limit.

That is the whole intuition for the index family. Now the short-term versus long-term twist. Measure a process over one morning and it looks tight. Measure it across three months — different recruiters, seasons, system updates — and it wobbles more. The tight, one-morning picture gives **Cp/Cpk** (*within*/short-term, variation estimated from the moment-to-moment noise). The three-month picture gives **Pp/Ppk** (*overall*/long-term, variation estimated from every data point you have). **Ppk is almost always the smaller, more honest, customer-facing number**; Cpk tells you the *best the process could do* if you removed the drift between subgroups. The gap between them is your prize for stabilising the process.

**A worked example in a spreadsheet.** Put onboarding times in a column. Compute the mean and the standard deviation (`=AVERAGE(...)`, `=STDEV.S(...)`). Say the customer wants onboarding done within 20 days (an upper spec, USL = 20). Capability against that single wall is `(USL − mean) / (3 × SD)`. If the mean is 14 and the SD is about 1.9, that is roughly `(20 − 14) / (3 × 1.9) ≈ 1.05`. The "3 × SD" is half the natural six-sigma spread, so the index is literally *"how many half-spreads of elbow-room between the average and the wall."* About one. Snug.

---

## The rigorous method

### The index family

With specification limits USL and LSL, process mean μ (estimated by x̄), and process standard deviation σ:

**Potential capability (centring ignored):**
> Cp = (USL − LSL) / (6σ)  and  Pp = (USL − LSL) / (6σ_overall)

**Actual capability (centring included)** — take the worse of the two one-sided distances:
> Cpu = (USL − μ) / (3σ),  Cpl = (μ − LSL) / (3σ)
> **Cpk = min(Cpu, Cpl)**  (and Ppk the same, with σ_overall)

**The critical difference is which σ you use:**

- **Cp/Cpk use *within-subgroup* (short-term) σ**, estimated from rational subgroups as σ̂ = R̄/d₂ (or s̄/c₄). This captures only the common-cause noise *inside* a subgroup.
- **Pp/Ppk use *overall* (long-term) σ**, the ordinary sample standard deviation of *all* the data, which also absorbs drift *between* subgroups.

So Cpk ≥ Ppk nearly always, and a large gap means the process is unstable between subgroups (an opportunity). A capability study on an *out-of-control* process is not meaningful — **always confirm stability on a control chart first.**

### The normality assumption — and why it bites

**The intuition:** the index-to-defect conversion works by reading off the far tail of a *normal bell* laid over your data. If the real data are lopsided — a long tail on one side — then the bell you imagined is in the wrong place, and the sliver of tail you are measuring to predict defects is the wrong sliver. You can get a healthy-looking Cpk and still ship ten times the defects you forecast. That is why the shape of the data is not a technicality; it decides whether the number means anything.

**The rigorous method:** the usual capability maths assumes the data are **approximately normal**, because the indices are converted into defect rates using the normal curve's tails. If the data are skewed, the normal tail is the wrong tail, and your predicted defect rate can be off by an order of magnitude. Test normality with the **Shapiro–Wilk** test (H₀: data are normal; **normal if p > 0.05**), backed by a normal probability plot — never by eye alone. Treat the Shapiro result as a flag, not a verdict: with large n it rejects on trivial departures, and with small n it misses real ones.

### Sigma level / Z-score

The **Z-score** rescales the distance to a spec into standard-deviation units: Z = (USL − μ)/σ for an upper spec. It links straight to defect rates via the normal tail and to the capability index: **Z_bench (short-term) ≈ 3 × Cpk**. The Six Sigma convention adds a **1.5σ long-term shift**: a process running at a short-term Z of 6 is quoted as "Six Sigma" and reports a long-term Z of 4.5, i.e. 3.4 defects per million opportunities (DPMO). Keep "short-term Z" and "the sigma level after the 1.5 shift" clearly labelled — mixing them is a classic error.

### Non-normal capability — two routes

1. **Transform to normality, then use the normal maths.** Common transforms: the **log** transform (for right-skewed, multiplicative data) and the more general **Box–Cox**, which finds the power λ that best normalises the data (λ = 0 *is* the log transform; λ = 1 is no transform). Fit the index on the transformed scale, and transform the spec limits the same way.
2. **Fit a non-normal distribution** (e.g. Weibull, lognormal) and compute capability from its actual percentiles. Here the modern definition uses percentiles rather than σ:
   > Ppk = min[ (USL − median)/(P99.865 − median), (median − LSL)/(median − P0.135) ]
   where P99.865 and P0.135 are the distribution's 99.865th and 0.135th percentiles (the points a normal curve would place at +3σ and −3σ).

### Capability for attribute (discrete) data

**The intuition:** when there is no measurement to spread out — just "error / no error" on each onboarding file — "capability" collapses to one honest question: *what fraction goes wrong, and how good is that?* You count the defects, turn them into a rate per million chances, and translate that rate into the same sigma language used for continuous data, so a pass/fail process can be compared like-for-like with a cycle-time process.

**The rigorous method:** there is no σ and no spec width, so capability is expressed directly as a **defect rate converted to a sigma level**: compute DPMO = (defects / (units × opportunities)) × 1,000,000, then look up (or compute) the Z that corresponds to that tail area and add the 1.5σ convention if you are quoting a long-term sigma level. For count data, the underlying models are the **binomial** (defectives) and **Poisson** (defects) — see Module 06. *Worked illustration (figures illustrative):* if 18 onboarding errors occur across 300 files with 2 error opportunities each, DPMO = 18 / (300 × 2) × 1,000,000 = 30,000, whose right-tail Z ≈ 1.88 (short-term), i.e. roughly a 3.4σ process once the 1.5σ shift is added.

**How to run it.** *Spreadsheet:* mean, SD, and the Cpk formula directly; `=NORM.S.INV(1 − DPMO/1e6)` turns a defect rate into a Z, `=NORM.S.DIST(z, TRUE)` turns a Z into a tail. *Point-and-click tool:* **JASP's Quality Control module** runs normal *and* non-normal capability from menus (activate it from the module list); plain **jamovi** gives you Shapiro–Wilk and Q–Q plots under Descriptives but not the index, so compute that in code there. *Python:* `scipy.stats.shapiro`, `scipy.stats.boxcox`, and the formulas above. *Minitab:* *Stat ▸ Quality Tools ▸ Capability Analysis (Normal / Nonnormal / Between-Within)*.

---

## Do this

### A — Normal(ish) data: `onboarding-capability.csv`

100 onboarding times, upper spec USL = 20 days (faster is better; no meaningful lower limit, so this is a one-sided study and **Cpk = Cpu**). Verified figures:

- mean = **14.014**, overall SD = **1.894** (quoted in the key as 14.01 and 1.89)
- **Cpk = (20 − 14.014) / (3 × 1.894) = 5.986 / 5.682 = 1.05**
- equivalently the **Z-score**: Z_USL = (20 − 14.014) / 1.894 = **3.16**, and indeed Z ≈ 3 × Cpk = 3 × 1.05 = 3.15
- Shapiro–Wilk **p = 0.039**; measured skew ≈ **−0.58** (a mild left tail)

**Read this honestly, two ways.** First, normality: p = 0.039 is *just below* 0.05, so the test formally rejects normality — but only *borderline*. With a skew of about −0.58 and near-zero excess kurtosis the data are roughly bell-shaped with a mild left tail; this is the real-world grey zone where a strict p-value and a reasonable Q–Q plot nearly agree. A Black Belt reports the tension rather than hiding it: "near-normal, borderline by Shapiro — capability is usable but I would not quote defect rates to three decimals." Second, a subtlety the figure hides: **1.894 is the *overall* standard deviation, so strictly this 1.05 is a Ppk-type (long-term) index.** We follow the answer key in calling it Cpk ≈ 1.05, but you should know the label. For the within/short-term contrast, estimating σ_within from the average moving range (MR̄/1.128 — valid only if the rows are in time/collection order, which we assume here) gives σ_within ≈ 1.79 and a within-capability of about **1.12** — modestly better than the overall 1.05, which tells you the process has only a little drift between successive hires. **Verdict: Cpk ≈ 1.05 is marginally capable** — above the old 1.00 floor but short of the 1.33 most customers expect. The one-sided predicted fallout is roughly 790 parts-per-million beyond USL (*illustrative*, and only as trustworthy as the normality assumption).

### B — Clearly non-normal data: `response-time-skewed.csv`

100 first-response times in hours, strongly right-skewed (a few very slow responses drag the tail). Verified figures:

- Shapiro–Wilk on the raw data **p < 0.0001** — decisively **not** normal. Running normal capability here would be malpractice.
- After a **log transform**, Shapiro–Wilk **p = 0.664** — comfortably normal. Box–Cox independently returns **λ ≈ −0.15**, essentially confirming the log (λ = 0) as the right choice.
- **median = 4.3 h** — for skewed data the median, not the mean, is the honest centre (the mean is pulled up by the tail to about 5.6 h).

**What to do:** work on the log scale. Transform the data *and the spec limit* with the log, compute Cpk/Z in log-space, then report. Or fit a lognormal/Weibull and use the percentile method. Either way, quote the **median (4.3 h)** as the typical response, not the mean. (`response-time-skewed.csv` carries no customer spec, so any USL used to demonstrate the index here is *illustrative*.)

**Spreadsheet first, then tool.** You can add a `=LN(value)` column and watch a long right tail become a tidy bell in a histogram — that visual sells the transform better than any p-value. Confirm with Shapiro (p jumps from ~0 to 0.664) and get λ from `scipy.stats.boxcox` in Python or `MASS::boxcox` in R.

---

## Common pitfalls

- **Running capability on an unstable process.** Cpk assumes statistical control. Check a control chart first; otherwise the index describes a process that no longer exists.
- **Assuming normality without testing.** The default formulas bake in the normal curve. For skewed data (cycle times, response times, costs) this over- or under-states defects badly. Always test, and look at the Q–Q plot.
- **Confusing Cpk and Ppk.** Within-σ vs overall-σ. Reporting the optimistic within-σ Cpk to a customer who will live with long-term performance over-promises. Say which one, and which σ, you used.
- **Treating a borderline Shapiro p as a hard wall.** p = 0.039 does not make near-normal data unusable, and p = 0.06 does not make skewed data safe. Combine the test with a plot and judgement.
- **Transforming the data but not the spec.** If you log the measurements, you must log the USL/LSL too, or the index is nonsense.
- **Chasing Cpk when the process is off-centre.** If Cp is healthy but Cpk is poor, you have a *centring* problem — re-centre the mean, do not just reduce variation.

## Self-check

1. **Q: Cp = 1.8 but Cpk = 0.7. What is wrong, and what do you fix?**
   A: The spread is fine (high Cp) but the process is badly off-centre (low Cpk). Re-centre the mean towards the middle of the spec; do not attack variation first.

2. **Q: Why is Ppk usually smaller than Cpk, and what does a big gap signal?**
   A: Ppk uses overall (long-term) σ, which includes drift between subgroups that within-σ excludes. A big gap signals an unstable process — stabilising it is the opportunity.

3. **Q: Shapiro p = 0.039 on the onboarding data. Can you still report capability?**
   A: Yes, with a caveat. It is only borderline non-normal and looks near-bell on a Q–Q plot; the Cpk ≈ 1.05 is usable, but do not quote precise defect-rate decimals that lean hard on the tail.

4. **Q: Response times fail Shapiro at p < 0.0001. Name two valid routes to a capability number.**
   A: (1) Transform to normality — log or Box–Cox (λ ≈ −0.15 here ≈ log) — transform the spec too, and use normal maths. (2) Fit a non-normal distribution (Weibull/lognormal) and use the percentile method.

5. **Q: Your output is pass/fail. How do you express capability?**
   A: As a defect rate (DPMO) converted to a sigma level via the normal tail, using binomial/Poisson thinking — there is no σ or spec width to form Cpk.
