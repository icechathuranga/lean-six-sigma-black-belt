# Module 00 · Orientation (Week 1)

## Why it matters

You already hold a Green Belt. You can run a DMAIC project on a well-scoped problem, read a control chart, and run a basic hypothesis test. So what is a Black Belt *for*?

A Green Belt improves a process. A Black Belt improves processes **and** the people and systems around them: bigger problems, more functions, more money at stake, more resistance, and statistics that a spreadsheet alone cannot carry. This module sets your expectations for the next thirty-odd weeks, recaps DMAIC at the depth you will now be held to, and gets your tools installed. If any of the Green Belt foundations feel shaky, pause and revisit the [Green Belt course](https://icechathuranga.github.io/lean-six-sigma-green-belt/) — everything here is built on it.

## What Black Belt adds beyond Green Belt

Think of it as three step-changes.

**1. Scale and scope of the work.** Green Belt projects usually live inside one team or one step of a process. Black Belt projects are **cross-functional**: they cross departments, regions, and systems. Our running example — reducing time-to-hire and the onboarding error rate across a multi-region HR operation — touches recruiters, hiring managers, IT provisioning, payroll, and regional HR leads. No single manager owns the whole thing, which is exactly why it needs a Black Belt. Bigger scope also means bigger *risk*: a change that helps one region can hurt another, so you measure more widely and pilot before you roll out.

**2. People leadership.** As a Black Belt you **lead teams you don't manage**, you **coach Green Belts** through their own projects, and you manage **change** against real resistance. A technically perfect solution that nobody adopts has delivered nothing. A large part of this course — Modules 01, 02, 03 and 14 — is leadership, deployment and change, not statistics. That balance is deliberate.

**3. Advanced analytics.** Green Belt gives you the basics; Black Belt adds the heavy tools: multiple regression (what actually drives time-to-hire), ANOVA (do regions genuinely differ?), advanced measurement systems analysis, capability for non-normal data, and **Design of Experiments (DOE)** — deliberately changing process settings to find the best combination rather than guessing. These are the modules where a free stats package earns its place.

A useful shorthand: **Green Belt solves the problem in front of it; Black Belt chooses which problems are worth solving, builds the case, leads the people, and proves the result with statistics that stand up to challenge.**

## DMAIC at Black Belt depth

You know the five phases. Here is what deepens at Black Belt, phase by phase.

- **Define.** Not just a charter, but a charter negotiated with a sponsor over real money, a stakeholder analysis, a communication plan, and structured Voice of the Customer translated into measurable CTQs (Critical-to-Quality characteristics). Module 03 covers this.
- **Measure.** You no longer *assume* the data is trustworthy — you prove it. Formal Gage R&R for continuous measures and attribute agreement analysis for judgement calls (like interview scoring) come first, before you trust a single number. Then baseline capability, handling non-normal data honestly.
- **Analyse.** This is where Black Belt statistics concentrate: multiple regression, ANOVA, non-parametric tests, and multi-vari studies (charts that reveal *where* variation comes from — within a unit, between units, or over time) — moving from "we think X causes Y" to a quantified, tested relationship with stated confidence.
- **Improve.** DOE lets you *engineer* the solution: test several factors at once, find interactions, and optimise. You pilot, measure the pilot, and only then scale.
- **Control.** Control plans that survive handover across regions, the right control chart for the data, and advanced charts (CUSUM and EWMA, which accumulate evidence across several points to catch small, gradual drifts a standard chart would miss). Then you replicate the win elsewhere.

The discipline that makes it DMAIC and not guesswork: **you do not move to the next phase until the current one holds up to a tollgate review.** As a Black Belt you will *run* those reviews, including for the Green Belts you coach.

## The Black Belt mindset: data **and** leadership

Two habits define the role, and you need both.

**Decide from data, not opinion or rank.** When a regional head insists "my region is slower because the roles are harder," you don't argue — you test it. (In Module 07 you will do exactly this with `datasets/time-to-hire-by-region.csv`.) The data may agree, disagree, or reframe the question. Your loyalty is to the evidence.

**Lead with influence, not authority.** You rarely have line authority over your team. You get results through a clear charter, a credible sponsor, honest communication, and genuine respect for the people whose work you are changing — many of whom will fear that "efficiency" means job cuts. Holding both at once — rigorous about the numbers, humane about the people — is the Black Belt craft.

## How this course works

Each module follows the same shape, so you always know where you are:

1. **Why it matters** — where the topic fits a real project.
2. **The teaching** — for statistical topics, taught twice: **The intuition** (plain language and a worked example) then **The rigorous method** (the formal, exam-aligned procedure with assumptions). For leadership topics, clear frameworks with HR examples.
3. **Do this** — a hands-on exercise using a dataset from `datasets/`.
4. **Common pitfalls** — the classic mistakes.
5. **Self-check** — a few questions with answers.

Plan for about three hours a week across roughly thirty weeks; some modules run two weeks, as the week numbers in each title show. The depth is aligned to the recognised Black Belt bodies of knowledge (such as the IASSC and ASQ frameworks), but written to be understood, not just memorised.

### The running example

One scenario threads through everything: **reducing time-to-hire and the onboarding error rate across a multi-region HR operation** (North, South, East and West regions). It is deliberately rich enough to exercise every tool — regression on what drives time-to-hire, ANOVA across regions, attribute agreement on interview scoring, and DOE on process changes. The datasets in `datasets/` are practice datasets (simulated, seed-fixed) with verified answers in `datasets/ANSWER-KEYS.md`, so when you work an exercise you can check yourself exactly.

### The free tools

You will not spend a penny on software.

- **A spreadsheet** (Excel, Google Sheets, LibreOffice Calc) handles most of the course: charts, basic tests, the business-case arithmetic, selection matrices, and control-chart calculations.
- For the heavy statistics — regression, ANOVA, Gage R&R, DOE — a dedicated stats tool does in a few clicks what a spreadsheet does painfully. Use **[jamovi](https://www.jamovi.org/)** or **[JASP](https://jasp-stats.org/)**, both free and point-and-click. If you code, Python (`scipy`/`statsmodels`) or R will do everything and more. Relevant modules show both the spreadsheet way and the stats-tool way.

Install jamovi or JASP this week so it is ready when Module 04 needs it.

## Do this

1. Open `datasets/ANSWER-KEYS.md` and skim it. You don't need to understand every figure yet — just see the *shape* of what is coming (regression, ANOVA, Gage R&R, capability, DOE, control charts). This is your map.
2. Download and install **jamovi** or **JASP**. Open any CSV from `datasets/` (try `datasets/time-to-hire-by-region.csv`) just to confirm it loads and you can see the columns.
3. Write two sentences: one improvement problem in your own organisation that is genuinely *cross-functional* (crosses at least two departments), and who the sponsor would need to be. You will reuse this instinct in Module 01.

## Common pitfalls

- **Treating Black Belt as "Green Belt with harder maths."** The statistics matter, but the leadership, deployment and change-management half is where most projects succeed or fail. Don't skim Modules 01–03.
- **Skipping the Measure-phase trust check.** Analysing data from a measurement system you haven't validated is the most expensive mistake in the method — you optimise noise. Module 04 exists for a reason.
- **Reaching for DOE or regression on day one.** Advanced tools serve the DMAIC logic; they don't replace it. A clear Define and an honest Measure come first.
- **Leading by authority you don't have.** Trying to *order* a cross-functional team into compliance backfires. Influence, a sponsor, and a shared charter are your real power.

## Self-check

1. **Q: Name one way a Black Belt project typically differs from a Green Belt project.**
   A: It is larger and cross-functional — it crosses departments, regions or systems, so no single manager owns it, which raises both the stakes and the need for leadership and change management.

2. **Q: In the Measure phase, what must you do before trusting your baseline data, and which module covers it?**
   A: Validate the measurement system (Gage R&R for continuous data, attribute agreement analysis for judgement calls) — Module 04. Analysing unvalidated data means optimising noise.

3. **Q: What are the two halves of the Black Belt mindset?**
   A: Decide from data rather than opinion or rank, *and* lead through influence rather than line authority — rigorous about numbers, humane about people.

4. **Q: Which tools will you use for the heavy statistics in this course, and why not just a spreadsheet?**
   A: jamovi or JASP (free, point-and-click), or Python/R if you code. A spreadsheet can do regression and ANOVA only clumsily; the dedicated tools are faster and far less error-prone for DOE and MSA.

5. **Q: What is the running example, and why was it chosen?**
   A: Reducing time-to-hire and the onboarding error rate across a multi-region HR operation. It is rich enough to exercise regression, ANOVA, attribute agreement and DOE, so every tool has a realistic home.
