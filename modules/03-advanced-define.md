# Module 03 · Advanced Define (Weeks 6–7)

## Why it matters

Define is where projects are quietly won or lost. A Green Belt Define phase scopes one team's problem. A Black Belt Define phase has to hold a *cross-functional* project together: a charter several leaders have signed, a map of everyone who can help or block you, and a disciplined translation of what customers actually want into measurable characteristics you can later engineer. Get Define right and the rest of DMAIC has firm ground. Get it vague and you will spend the Analyse phase arguing about scope. This module takes the Define tools you know and scales them up.

## The charter at scale

The charter is the project's contract. At Black Belt scale it must survive contact with several departments, so each element carries more weight:

- **Business case** — why this, why now, in money (Module 01).
- **Problem statement** — specific, measurable, neutral. *"Across four regions, mean time-to-hire ranges from 24.5 to 32.2 days (`datasets/time-to-hire-by-region.csv`), against a target of 21 days (illustrative)."* No cause, no blame, no solution.
- **Goal statement** — SMART and tied to the baseline (e.g. "reduce mean time-to-hire to 24 days within two quarters" — illustrative target).
- **Scope** — explicitly *in and out*. For a multi-region project this is where you prevent scope creep: which regions, which roles, which process steps. A clear "out of scope" list is as valuable as the "in".
- **Team, roles and sponsor** — named, with time commitments agreed.
- **Milestones and risks.**

The scaled difference: a Black Belt charter is **negotiated**, not announced. Multiple stakeholders must agree the scope and goal *before* work starts, or they will relitigate it later.

## Stakeholder analysis, RACI and the communication plan

### Stakeholder analysis

A stakeholder is anyone affected by or able to affect the project. List them, then place each on a **power/interest grid** (how much influence they have × how much they care):

- **High power, high interest** — manage closely (your sponsor, regional HR leads).
- **High power, low interest** — keep satisfied (a finance director who only wants the numbers right).
- **Low power, high interest** — keep informed (recruiters doing the new process).
- **Low power, low interest** — monitor.

This tells you where to spend your influence. The most dangerous stakeholder is high-power, currently-low-interest — ignored until they suddenly engage and object.

### RACI

For each major activity, a RACI chart assigns four roles so accountability is unambiguous:

- **R – Responsible:** does the work.
- **A – Accountable:** owns the outcome and signs it off (exactly **one** person per activity).
- **C – Consulted:** gives input before it's done (two-way).
- **I – Informed:** told after it's done (one-way).

| Activity | Black Belt | Sponsor | Regional lead | Recruiter | IT |
|---|---|---|---|---|---|
| Approve charter | R | **A** | C | I | I |
| Map hiring process | **A/R** | I | C | C | C |
| Pilot new interview guide | **A/R** | I | C | R | I |
| Sign off benefits | C | **A/R** | C | I | I |

*Illustrative.* The two classic errors a RACI exposes: **no A** (nobody owns it) and **two A's** (shared accountability, so nobody is really accountable).

### Communication plan

Turn the stakeholder analysis into a schedule: for each audience, *what* message, *how often*, *which channel*, *from whom*. A one-line sponsor dashboard weekly; a working session with the team weekly; a monthly briefing to affected recruiters; an as-needed heads-up to adjacent managers. The plan's job is that no stakeholder is ever surprised.

## Advanced Voice of the Customer

Green Belt VoC gathers feedback. Advanced VoC is disciplined about *who* the customer is and *how* you turn their words into something measurable. First, segment: for time-to-hire the "customers" include the **hiring manager** (wants a good hire fast), the **candidate** (wants a quick, respectful process), and the **business** (wants the role filled cheaply). Their needs differ and sometimes conflict. Second, gather deliberately — interviews, surveys, complaint data, exit interviews of candidates who dropped out — and capture *verbatim* statements. Third, translate each vague verbatim ("the process drags on") into a measurable **Critical-to-Quality characteristic (CTQ)** ("time-to-hire ≤ 21 days" — an illustrative target). The CTQ is the bridge from feeling to metric.

## The Kano model

### The intuition

Not all quality features matter the same way. Noriaki Kano observed that customer satisfaction responds to different features differently. Three main categories:

- **Must-be (basic).** Expected; their absence causes strong dissatisfaction, but their presence earns no praise. A candidate *expects* to be told whether they got the job. Fail it and they're angry; do it and nobody thanks you.
- **One-dimensional (performance).** More is better, linearly. The faster the hiring process, the happier the candidate — satisfaction tracks performance straight up.
- **Attractive (delighters).** Unexpected features that delight when present but aren't missed when absent. A personalised welcome pack before day one. Over time, delighters become expected and decay into must-bes (today's delight is tomorrow's basic).

(Two further categories: **Indifferent** — the customer doesn't care either way — and **Reverse** — a feature some customers actively dislike.) The lesson: satisfy the must-bes *first* (they're non-negotiable), compete on the performance needs, and sprinkle a delighter — but never trade a basic for a delighter.

### The rigorous method

Kano is classified with a paired questionnaire: for each feature ask it **functional** ("how do you feel if the process *is* fast?") and **dysfunctional** ("how do you feel if it is *not* fast?"), each on a five-point scale (like / expect / neutral / tolerate / dislike). Cross-tabulating the two answers against the Kano evaluation table classifies the feature as Must-be, One-dimensional, Attractive, Indifferent, Reverse, or *Questionable* (a contradictory answer pattern that usually signals a misunderstood question). Aggregating across respondents — often summarised as **Better/Worse coefficients**, how much satisfaction rises when a feature is present versus falls when it is absent — tells you which features to prioritise. The output feeds directly into what you commit to in the charter and into QFD.

## Quality Function Deployment — the House of Quality

### The intuition

QFD answers a hard question: *given what customers want, which process changes should we actually make?* The **House of Quality** is a single diagram that connects the two. The "rooms" of the house:

- **Left (WHATs):** the customer needs/CTQs, each with an importance rating.
- **Ceiling (HOWs):** the technical or process characteristics you could change.
- **Body (relationship matrix):** how strongly each HOW affects each WHAT, scored **9 (strong) / 3 (moderate) / 1 (weak)**.
- **Roof (correlations):** how the HOWs interact with each other (a change that helps one may hurt another).
- **Right (competitive assessment):** how you compare with alternatives on each WHAT.
- **Basement (targets/priorities):** the weighted score and target for each HOW.

You multiply each need's importance by its relationship strength and sum down each column; the HOWs with the highest totals are where to focus.

### A worked column

Take three customer needs and two possible process changes (*illustrative importances and relationships*):

| Customer need (importance) | Structured interview guide | Automated scheduling tool |
|---|---|---|
| Fast time-to-hire (5) | 3 | 9 |
| Consistent, fair scoring (4) | 9 | 1 |
| Clear candidate communication (3) | 1 | 3 |
| **Column score** | **54** | **58** |

The structured interview guide scores `5×3 + 4×9 + 3×1 = 15 + 36 + 3 = 54`; the scheduling tool `5×9 + 4×1 + 3×3 = 45 + 4 + 9 = 58`. Both are worth doing, and they serve *different* needs — the guide mainly buys consistency, the tool mainly buys speed. QFD makes that explicit and stops you funding one while assuming it solves everything.

### The rigorous method

Full QFD is a cascade of houses: customer needs → design characteristics → part characteristics → process characteristics → production controls, each house's HOWs becoming the next house's WHATs. Most Six Sigma projects use only the first House of Quality — translating customer CTQs into prioritised process characteristics. The roof matters: before committing, check the correlation roof for conflicts (e.g. "cut interview rounds for speed" may conflict with "assess candidates thoroughly"), and resolve them consciously.

## CTQ flow-down / critical-to trees

A **CTQ flow-down** (or critical-to tree) decomposes a broad customer need into specific, measurable drivers — moving from the vague top to the measurable bottom:

```
Need: "a fast hiring process"
   └─ CTQ: time-to-hire ≤ 21 days (illustrative target)
        ├─ driver: number of interview rounds
        ├─ driver: offer delay (days)
        └─ driver: recruiter caseload
```

This is more than a tidy diagram — it is the hypothesis you test in Analyse. In our example, multiple regression on `datasets/time-to-hire-regression.csv` finds all three are significant predictors and the model explains about **66% of the variation** (R² = 0.661), with **each extra interview round adding ~3.4 days** (coefficient 3.448), plus offer delay and recruiter caseload, per `datasets/ANSWER-KEYS.md`. So the flow-down you drew in Define turns out to be measurably right — which is exactly what a good critical-to tree is for: it points Analyse at the drivers worth measuring. Keep the tree in the charter and revisit it when the data arrives.

## Do this

For the time-to-hire project:

1. **Charter scope.** Write an explicit in-scope / out-of-scope list (regions, roles, process steps). Make the "out" list at least three items long.
2. **Stakeholder grid + RACI.** Place six stakeholders on a power/interest grid, then build a five-activity RACI — check every activity has exactly one A.
3. **Kano sort.** Classify four candidate improvements (e.g. "tell every candidate the outcome", "offer within 21 days", "personalised welcome pack", "self-service interview scheduling") as Must-be, One-dimensional or Attractive, and say which you'd commit to first and why.
4. **House of Quality.** Extend the worked table above with a third HOW of your own and recompute the column score.

## Common pitfalls

- **A charter nobody negotiated.** On a cross-functional project, a scope only you agreed to will be reopened mid-project. Get sign-off first.
- **Fuzzy scope.** Without an explicit "out of scope" list, a four-region project grows into "fix all of HR". Bound it.
- **A RACI with no A, or two A's.** Exactly one Accountable per activity — this is the whole point of the chart.
- **Treating all customer needs as equal.** Kano exists because they aren't. Deliver the must-bes before chasing delighters.
- **Confusing WHATs and HOWs in QFD.** WHATs are customer needs (speed, fairness); HOWs are the process levers (structured guide, scheduling tool). Mixing them breaks the whole translation.

## Self-check

1. **Q: In a RACI chart, how many people should be Accountable for a single activity, and why?**
   A: Exactly one. More than one means shared accountability where no single person truly owns the outcome; zero means nobody does.

2. **Q: Give the three main Kano categories and an HR example of each.**
   A: Must-be (candidates are told the outcome — expected, absence angers), One-dimensional (faster process — more is linearly better), Attractive (unexpected personalised welcome pack — delights but isn't missed if absent).

3. **Q: In the House of Quality, what are the WHATs, the HOWs, and what does the relationship matrix do?**
   A: WHATs are weighted customer needs/CTQs; HOWs are the process characteristics you could change; the relationship matrix scores (9/3/1) how strongly each HOW affects each WHAT, and the weighted column sums prioritise the HOWs.

4. **Q: What is a CTQ flow-down for, beyond looking tidy?**
   A: It decomposes a vague need into specific measurable drivers, which become the hypotheses you test in Analyse — e.g. interview rounds, offer delay and recruiter caseload as drivers of time-to-hire.

5. **Q: Why must a Black Belt charter be negotiated rather than announced?**
   A: Because a cross-functional project depends on several stakeholders; if they don't agree the scope and goal up front, they will reopen them mid-project and stall it.
