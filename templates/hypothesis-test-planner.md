# Hypothesis Test Planner — [Question]

> One page per test. Decide everything *before* you look at the result. Module 07.

| Step | Your entry |
|---|---|
| **1. Practical question** | *e.g. "Did the new pre-screen cut time-to-hire?"* |
| **2. Output (Y) & type** | ___ (continuous / discrete) |
| **3. Input (X) & type** | ___ (group / continuous) |
| **4. H₀ (no difference/effect)** | |
| **5. H₁ (the effect)** | one-sided / two-sided |
| **6. Test chosen** | *(see which-statistical-test cheat sheet)* |
| **7. α (significance)** | 0.05 |
| **8. Sample size / power** | n = ___  (target power 0.80) |
| **9. Check assumptions** | normality? equal variance? independence? |
| **10. Result** | statistic = ___  **p = ___** |
| **11. Decision** | p < α → reject H₀ (significant) / else fail to reject |
| **12. Practical conclusion** | *effect size + is it worth acting on?* |

> Worked: `datasets/before-after-tth.csv` → Welch t = 2.88, p = 0.0061 → reject H₀; mean fell 31.0 → 26.6 days (a ~4.4-day, practically useful reduction).
