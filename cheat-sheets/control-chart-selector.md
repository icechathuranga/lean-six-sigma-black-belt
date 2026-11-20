# Cheat Sheet — Choosing a Control Chart

First question: **variables data (measured) or attributes data (counted)?**

## Variables (continuous: time, cost, score)
| Subgroup size | Chart | Notes |
|---|---|---|
| 1 (one reading at a time) | **I-MR** (Individuals & Moving Range) | e.g. a daily approval time |
| 2–9 | **X̄-R** (mean & range) | the workhorse; `tth-subgroups.csv` uses n=5 |
| ≥10 | **X̄-S** (mean & standard deviation) | S is more efficient than R for big subgroups |

## Attributes (counts / pass-fail)
| What you count | Constant sample size? | Chart |
|---|---|---|
| Defective **units** (pass/fail) | Yes | **np** chart |
| Defective **units** (proportion) | No | **p** chart |
| **Defects** (a unit can have several) | Yes | **c** chart |
| **Defects per unit** | No | **u** chart |

## X̄-R limits (worked, from `tth-subgroups.csv`, n=5)
X̿ = 26.20, R̄ = 4.57 → **X̄ UCL = 28.84, LCL = 23.57** (X̿ ± A₂R̄); **R UCL = 9.65** (D₄R̄). Subgroup 15 is above the UCL → a **special cause** to investigate.

Constants: n=2 → A₂=1.880, D₄=3.267 · n=3 → 1.023, 2.574 · n=4 → 0.729, 2.282 · n=5 → 0.577, 2.114.

## Reading the chart (special-cause signals — Nelson / Western Electric)
1. Any point beyond 3σ (outside UCL/LCL). 2. Nine points in a row on one side of the centre line. 3. Six in a row steadily increasing or decreasing. 4. Fourteen alternating up/down. 5. Two of three beyond 2σ, same side. (…and more.)

## Small shifts?
Shewhart charts (above) are slow to catch **small, sustained** shifts. Use **CUSUM** or **EWMA** charts — they accumulate evidence and react faster to a drift of ~0.5–1.5σ.

> **Golden rule:** control limits come from the *process's own data* (what it does); specification limits come from the *customer* (what it should do). Never mix them on one chart. React to special causes; do not "tamper" with common-cause noise.
