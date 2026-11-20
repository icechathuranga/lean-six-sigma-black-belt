# Lean Six Sigma — Black Belt Course

**For:** someone who already understands Green Belt (DMAIC, basic stats, the core Lean tools). If you don't yet, do the [Green Belt course](https://icechathuranga.github.io/lean-six-sigma-green-belt/) first — this course assumes it.
**Goal:** be able to **lead larger, harder improvement projects**, coach Green Belts, and use the advanced statistics (hypothesis testing, regression, Design of Experiments, advanced MSA and control) with confidence.
**Depth:** every topic is taught **twice over** — first in plain language with a spreadsheet-based worked example (the *intuition*), then with the **rigorous, exam-aligned** detail (the *method*, aligned to the IASSC / ASQ Black Belt bodies of knowledge).
**Pace:** relaxed — about 3 hours a week. Black Belt is bigger and deeper than Green Belt, so plan for roughly **30 weeks** (some modules run two weeks).

> This is the source for a static course website (built later) + downloadable templates. New to all of it? Start with `modules/00-orientation.md`.

---

## How each module works

Black Belt modules are deeper, so each one has:

1. **Why it matters** — where this fits in a real project.
2. **The intuition** — plain language + a worked example you can follow in a spreadsheet.
3. **The rigorous method** — the formal statistics / procedure, exam-aligned, with the assumptions and when-to-use rules.
4. **Do this** — a hands-on exercise using a dataset from `datasets/`.
5. **Pitfalls & self-check** — the classic mistakes, then questions with answers.

**Tools:** a spreadsheet covers most of it. For the heavier statistics (regression, ANOVA, DOE) you'll get far more from a free stats tool — **[jamovi](https://www.jamovi.org/)** or **[JASP](https://jasp-stats.org/)** (free, point-and-click), or **Python** (`scipy`/`statsmodels`) / **R** if you code. Each relevant module shows the spreadsheet way *and* the stats-tool way.

---

## The curriculum (16 modules)

A **running example** threads through the course: *reducing the time-to-hire and onboarding error rate across a multi-region HR operation* — rich enough for regression (what drives time-to-hire), ANOVA (comparing regions/teams), attribute agreement (interview-scoring consistency), and DOE (testing process changes).

| # | Module | Focus |
|---|---|---|
| 00 | Orientation | What Black Belt adds beyond Green Belt; the leader's role |
| 01 | Enterprise deployment & project selection | Portfolio, business case, ROI/NPV, voice of the business |
| 02 | Team leadership & change management | Forming/leading teams, facilitation, resistance, coaching |
| 03 | Advanced Define | Charter at scale, stakeholder & communication plans, QFD, Kano |
| 04 | Measurement systems analysis (MSA) | Gage R&R (continuous), attribute agreement analysis, bias/linearity |
| 05 | Process capability | Normal & non-normal data, transformations, Cp/Cpk/Pp/Ppk, sigma level |
| 06 | Statistics foundations | Distributions, central limit theorem, sampling, confidence intervals |
| 07 | Hypothesis testing in depth | t-tests, paired, ANOVA, chi-square, non-parametric; power & sample size |
| 08 | Correlation & regression | Simple & multiple regression, R², residuals, prediction, pitfalls |
| 09 | Multi-vari studies & advanced root cause | Sources of variation, multi-vari charts, components of variation |
| 10 | Design of Experiments I | Factorials, main effects & interactions, full factorial analysis |
| 11 | Design of Experiments II | Fractional factorials, blocking, center points, response surface & optimization |
| 12 | Advanced Lean | Theory of Constraints, SMED, TPM, pull & flow at scale |
| 13 | Advanced control | Control-chart selection, subgrouping, CUSUM/EWMA, control at scale |
| 14 | Sustain, replicate & coach | Control plans at scale, replication, mentoring Green Belts, DFSS (DMADV) intro |
| 15 | Capstone | Lead a full Black Belt project end to end and present it |

---

## Folder map

- **`modules/`** — the 16 lesson files (your main study).
- **`templates/`** — advanced fill-in tools (project selection matrix, Gage R&R sheet, regression/DOE planners, FMEA, control plan at scale).
- **`cheat-sheets/`** — quick references (which statistical test to use, DOE design chooser, control-chart selector, key formulas).
- **`datasets/`** — richer practice datasets (CSV) for regression, ANOVA, MSA, DOE, with answer keys.
- **`glossary.md`**, **`resources.md`**, **`progress-tracker.md`** — terms, verified resources, and your checklist.

A visual website and downloadable templates are generated from these files (separate build), and the whole thing is published to its own GitHub repository with free hosting.
