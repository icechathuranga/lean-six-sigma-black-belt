# Cheat Sheet — Choosing a Design of Experiments (DOE)

DOE changes several factors together, on purpose, to learn their effects and interactions efficiently — far better than one-factor-at-a-time (OFAT).

## Vocabulary
- **Factor** — an input you set (e.g. structured guide: on/off). **Level** — a setting (−1 low, +1 high). **Response** — the output Y.
- **Run** — one combination of factor levels. **Replicate** — repeating runs to estimate noise. **Randomise** — run order random to avoid lurking trends. **Block** — group out a nuisance source (e.g. week).
- **Main effect** — a factor's average effect. **Interaction** — when one factor's effect depends on another's.

## Which design?

| Situation | Design | Runs (k factors) |
|---|---|---|
| Few factors (2–4), want full detail incl. all interactions | **Full factorial 2ᵏ** | 2ᵏ (×replicates) |
| Many factors (5–15), just *screening* the vital few | **Fractional factorial 2^(k−p)** / **Plackett–Burman** | a fraction of 2ᵏ |
| Suspect curvature / want the optimum settings | **Response Surface (CCD / Box–Behnken)** | more, with centre & axial points |

**Course example:** `doe-factorial.csv` is a full 2³ with 2 replicates (16 runs). Effects: A structured-guide **−6.34** (sig), B pre-screen **−2.74** (sig), C scheduling-tool **−1.48** (sig), A×B **+1.43** (sig).

## Resolution (fractional designs) — what gets confounded (aliased)
- **Res III** — main effects aliased with 2-factor interactions (screening only).
- **Res IV** — main effects clear; 2-factor interactions aliased with each other.
- **Res V** — main effects and 2-factor interactions all clear (best).

## Workflow
1. Define response + factors + ranges. 2. Pick the design (screen first if many factors). 3. **Randomise** run order; add **centre points** to check curvature. 4. Run, measure, analyse (effects, interaction plots, ANOVA of the model). 5. Confirm with a verification run. 6. Optimise (RSM) if needed.

> Analyse DOE in a stats tool (jamovi/JASP, Python `statsmodels`, R, or Minitab) — hand-calculation past a 2² is painful.
