# Module 01 · Enterprise deployment & project selection (Weeks 2–3)

## Why it matters

A common way a Six Sigma programme fails is not bad statistics — it is working hard on the wrong projects. A Black Belt is an expensive, scarce resource. Point that resource at a problem that is too small, too vague, or disconnected from what the business actually cares about, and even a flawless project delivers nothing that leadership will fund again. This module is about choosing the right work and proving its worth in money before a single measurement is taken.

## Enterprise deployment: the system around the project

Deployment is how an organisation turns Lean Six Sigma from a few enthusiasts into a repeatable capability. The pieces you should recognise:

- **Executive sponsorship.** A senior leader owns the programme, sets the goals, and removes obstacles. Without this, projects stall at the first departmental boundary.
- **Roles.** A **Master Black Belt (MBB)** sets methodology and coaches Black Belts; **Black Belts** lead projects full-time; **Green Belts** lead smaller projects part-time; a **Champion** owns the programme's direction and selects projects, while a **Sponsor** owns an individual project and clears its roadblocks. (Module 02 details these.)
- **A project pipeline.** A continuously replenished, prioritised list of candidate projects — so that when a Black Belt finishes, the next worthwhile project is ready, not invented on the spot.
- **Governance.** Regular tollgate and portfolio reviews where projects are started, checked, accelerated or killed.

Your job as a Black Belt is partly to *feed* this system: to surface candidate problems, size them, and help leadership pick well.

## Building a project pipeline

A pipeline is a living backlog. Candidate projects arrive from several sources: **Voice of the Customer** (complaints, surveys), **Voice of the Business** (strategy, budget pressure, risk), process metrics that miss target, failed audits, and ideas from staff. Each candidate is captured in a consistent one-line form — *problem, affected metric, rough size, likely sponsor* — so that unlike items can be compared. The pipeline is reviewed on a cadence (say monthly) and reprioritised as the business changes. The goal is simple: **never let a Black Belt sit idle for lack of a vetted, high-value problem.**

## Project selection & prioritisation

Not every problem should become a project. Three screens help you choose.

### The intuition

Imagine ten candidate problems on a whiteboard. You want the ones that matter to the business, that you can actually finish, and that are the *right size* — big enough to be worth a Black Belt, small enough to finish in three to six months. Two quick tools make this visible.

**Benefit/effort grid.** Plot each candidate on two axes: likely benefit (vertical) and effort to deliver (horizontal). The top-left quadrant — high benefit, low effort — is where you start. Bottom-right — low benefit, high effort — is where projects go to die. This is a fast, honest first cut.

**Right-sizing.** A project that is too big ("fix all of HR") will never finish; one too small ("reformat the offer letter") wastes a Black Belt. A good Black Belt project has a problem you can scope in a sentence, a baseline you can measure, and a finish line inside two quarters. Our running example is deliberately scoped to **time-to-hire and onboarding errors**, not "improve HR".

### The rigorous method

For the shortlist, use a **weighted selection matrix** so the decision is explicit and defensible. Each criterion gets a weight; each project is scored on each criterion; the weighted sum ranks them.

| Criterion (weight) | Project A | Project B | Project C |
|---|---|---|---|
| Strategic fit (5) | 5 | 3 | 4 |
| Financial benefit (4) | 4 | 5 | 3 |
| Feasibility (3) | 3 | 4 | 5 |
| Data availability (2) | 4 | 5 | 3 |
| **Weighted total** | **58** | **57** | **53** |

*All scores illustrative.* Project A's total is `5×5 + 4×4 + 3×3 + 2×4 = 25 + 16 + 9 + 8 = 58`. A and B are close, so you would weigh the tie-breaker consciously — here, A's stronger strategic fit — rather than let a hidden preference decide. A blank selection-matrix template lives in `templates/`. The value of the matrix is not the precise number; it is forcing the trade-offs into the open where a sponsor can challenge them.

## The business case & financials

A Black Belt must put a credible number on the problem *before* the project and *after* it. Here is the honest arithmetic, plainly.

### Hard vs soft savings

- **Hard savings** hit the profit-and-loss account: a budget line actually falls. For our example, that means *agency and contractor spend that genuinely drops* because roles fill faster, or overtime no longer paid. Finance can trace it.
- **Soft savings** are real but don't directly cut a budget line: time freed up, reduced risk, better candidate experience, avoided (not actual) cost. "Recruiter days saved" is a soft saving **unless** you can show a cheque that stops being written — don't count days as cash unless a budget truly falls. Report both, but keep them in separate columns and let Finance validate the hard number. Overclaiming is the fastest way to lose credibility.

### Cost of Poor Quality (CoPQ) at enterprise scale

CoPQ is what poor quality *costs you*: the money consumed by **internal failure** (rework before the customer sees it — e.g. re-doing a botched onboarding record) and **external failure** (failure that reaches the customer — e.g. a new hire paid wrong on day one, or quitting in week two). Note what CoPQ is *not*: prevention and appraisal (training, checks, audits) are the **cost of good quality** — money well spent to avoid failure — not CoPQ. At enterprise scale you sum CoPQ across regions and processes to reveal where the biggest money is bleeding, which feeds the pipeline. (Any CoPQ figure in your case is **illustrative** unless Finance supplies a real one; quoted "percentage of revenue" rules of thumb are folklore — size your own.)

### ROI, payback and NPV — the arithmetic

Suppose a project needs a one-off investment of **£100,000** and is expected to deliver **£60,000** of net benefit each year for three years. *(All figures illustrative.)*

**Simple payback period** = investment ÷ annual benefit = `100,000 ÷ 60,000 = 1.67 years` (about **20 months**). Payback is intuitive but ignores the time value of money and anything beyond the payback point.

**Return on investment (ROI)**, stated as annual net benefit ÷ investment = `60,000 ÷ 100,000 = 60%` per year. Some texts instead use a cumulative (benefit − cost) ÷ cost over the appraisal period: `(180,000 − 100,000) ÷ 100,000 = 80%` across the three years. Always state which you mean — people define ROI differently.

**Net present value (NPV)** fixes payback's blind spot: money next year is worth less than money today, so future benefits are **discounted**. At a discount rate of 10%, with the outlay at time zero:

| Year | Cash flow | Discount factor | Present value |
|---|---|---|---|
| 0 | −100,000 | 1.000 | −100,000.00 |
| 1 | +60,000 | 1 / 1.10 | +54,545.45 |
| 2 | +60,000 | 1 / 1.10² | +49,586.78 |
| 3 | +60,000 | 1 / 1.10³ | +45,078.89 |
| | | **NPV** | **+49,211.12** |

NPV = `54,545.45 + 49,586.78 + 45,078.89 − 100,000 = £49,211`. A positive NPV means the project earns more than the 10% hurdle — worth doing. These three numbers answer three different questions: *how fast do I get my money back* (payback), *what rate does it return* (ROI), *is it worth more than its cost of capital* (NPV). A business case should show all three.

### Validating the benefit afterwards

The business case is an *estimate*. After the project you prove it. In our running example, a before-and-after study (`datasets/before-after-tth.csv`) shows mean time-to-hire falling from **31.0 days to 26.6 days — a reduction of 4.4 days** (a Welch two-sample test, t = 2.88, p = 0.0061, per `datasets/ANSWER-KEYS.md`). That measured 4.4-day gain is what you translate back into validated savings — never the hopeful figure from the original pitch. (You will run this test yourself in Module 07.)

## Voice of the Business & linking to strategy

**Voice of the Customer (VoC)** tells you what the customer needs. **Voice of the Business (VoB)** tells you what the *organisation* needs: profit, cash, growth, risk reduction, regulatory compliance, strategic goals. The best projects serve both. The discipline is **strategy linkage**: every project on the pipeline should trace to a stated business objective — often drawn down through a tool like **Hoshin Kanri** (policy deployment, which cascades a few top goals into aligned local objectives) or a balanced scorecard. If you cannot say which corporate goal a project advances, it is probably the wrong project, however interesting it looks. For our example, "cut time-to-hire across regions" links cleanly to a growth objective (teams staffed faster) and a cost objective (less agency spend) — which is exactly why a sponsor will fund it.

## Do this

Use the region baselines in `datasets/time-to-hire-by-region.csv` (verified means in `datasets/ANSWER-KEYS.md`: East 24.5, North 26.8, South 30.0, West 32.2 days).

1. Treat East (24.5 days) as the achievable benchmark. Estimate how many days each other region would save if it reached East's level. Which region is the biggest opportunity?
2. Build a one-page business case **outline**: pick an illustrative cost per vacancy-day (what a role sitting open costs the business) and an illustrative agency saving (label them *illustrative*), then compute an illustrative payback, ROI and NPV using the method above.
3. Score three candidate projects on a weighted selection matrix (copy the table above, change the scores). Note which wins and by how much — and whether the margin is wide enough to be confident.

## Common pitfalls

- **Counting soft savings as cash.** Days or hours "saved" are not hard savings unless a real budget line falls. Keep the columns separate and let Finance sign the hard number.
- **Scoping too big.** "Fix recruitment" never finishes. Right-size to a problem you can baseline and close within two quarters.
- **Inventing CoPQ or benefit figures.** Never present an estimate as a measured result, and never borrow a percentage-of-revenue rule of thumb as if it were your data.
- **Ignoring the time value of money.** Comparing projects on payback alone favours quick, small wins and can reject a far more valuable long-horizon project. Use NPV for the real comparison.
- **No strategy link.** A technically worthy project that advances no business objective will lose its sponsor the moment priorities shift.

## Self-check

1. **Q: What is the difference between hard and soft savings?**
   A: Hard savings cut a real budget line Finance can trace (e.g. reduced agency spend); soft savings are real but don't directly reduce a budget line (time freed, risk reduced, cost avoided). Report both separately; only count hard savings as cash.

2. **Q: A project costs £100,000 and returns £60,000 a year. What is the simple payback period, and what does it ignore?**
   A: 100,000 ÷ 60,000 = 1.67 years (about 20 months). It ignores the time value of money and any benefit beyond the payback point — which is why you also compute NPV.

3. **Q: Which costs count as CoPQ, and which do not?**
   A: Internal failure (rework before the customer sees it) and external failure (failure reaching the customer) are CoPQ. Prevention and appraisal are the cost of *good* quality, not CoPQ.

4. **Q: Why use a weighted selection matrix instead of picking the project that "feels" most valuable?**
   A: It makes the criteria, weights and trade-offs explicit and defensible, so a sponsor can challenge the logic rather than argue with a hunch — and it exposes close calls (like A at 58 vs B at 57) that deserve a conscious tie-breaker.

5. **Q: What is Voice of the Business, and how does it relate to project selection?**
   A: It is what the organisation needs — profit, cash, risk, strategy, compliance. Every pipeline project should trace to a business objective (via Hoshin Kanri or a scorecard); if it advances no stated goal, it is probably the wrong project.
