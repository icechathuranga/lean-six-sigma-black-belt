# DOE Planner — [Experiment]

> Plan a designed experiment before you run it. Module 10–11.

**Response (Y) & how measured:** ______________________
**Objective:** ☐ screen many factors  ☐ characterise/interactions  ☐ optimise (RSM)

### Factors & levels
| Factor | Low (−1) | High (+1) | Notes |
|---|---|---|---|
| A | | | |
| B | | | |
| C | | | |

**Design:** ☐ Full factorial 2ᵏ  ☐ Fractional 2^(k−p) (resolution ___)  ☐ RSM/CCD
**Replicates:** ___  **Centre points:** ___  **Blocks:** ___  **Run order:** randomised ☐

### Run matrix (coded) — 2³ example
| Run (randomise!) | A | B | C | Response Y |
|---|---|---|---|---|
| 1 | − | − | − | |
| 2 | + | − | − | |
| 3 | − | + | − | |
| 4 | + | + | − | |
| 5 | − | − | + | |
| 6 | + | − | + | |
| 7 | − | + | + | |
| 8 | + | + | + | |

### Analysis plan
Compute **main effects** (= 2 × coded coefficient) and **interactions**; plot effects & interaction plots; keep significant terms (p < 0.05); **confirm** the chosen settings with verification runs.

> Worked: `datasets/doe-factorial.csv` → A = −6.34, B = −2.74, C = −1.48, A×B = +1.43 (all significant).
