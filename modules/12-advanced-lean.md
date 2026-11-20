# Module 12 · Advanced Lean for Black Belts (Weeks 24–25)

## Why it matters

At Green Belt, Lean was a toolkit: value-stream maps, 5S, standard work, a kanban board. At Black Belt, Lean becomes a way of reasoning about **whole systems of flow**. Why does adding three more recruiters *not* speed up time-to-hire? Where should the next pound of investment go? How do we level a workload that swings between a quiet August and a frantic January? The tools in this module — the **Theory of Constraints**, **SMED**, **Total Productive Maintenance / OEE**, **Little's Law**, and **Heijunka** (level loading) — answer those questions with a precision that spreadsheet averages cannot, and stop you optimising the wrong thing: the single most expensive mistake a Black Belt can make.

## The intuition

**The constraint is the only thing that matters (for now).** The Theory of Constraints (ToC), from Eliyahu Goldratt, starts with one blunt claim: every process has at least one **constraint** — a **bottleneck**, the slowest step, which governs the pace of the whole chain (usually one governs at a time) — and improving anything *other* than the bottleneck is wasted effort. Picture our recruitment pipeline as a relay: CV screening → phone screen → panel interview → offer → onboarding. If panel interviews can only process 20 candidates a week (managers' diaries are full) while every other step handles 40, the pipeline's output is 20 a week, full stop. Hire more screeners and you just build a bigger pile waiting for interview: work-in-progress grows, time-to-hire gets *worse*, and costs rise — all from "improving" a non-bottleneck.

**The five focusing steps** are ToC's recipe for attacking the constraint in the right order:

1. **Identify** the constraint — the step with the longest queue in front of it and the highest utilisation. Here, panel interviews.
2. **Exploit** it — wring every drop out of the bottleneck *without spending money*: stop panels starting late, pre-brief interviewers so no slot is wasted, never let a no-show idle the room, move admin work off the interviewers' plate.
3. **Subordinate** everything else to it — make the rest of the process serve the bottleneck. Screeners release exactly enough candidates to keep interviews fed, not flood them. This is the counter-intuitive bit: you deliberately *slow down* the fast steps.
4. **Elevate** the constraint — only now, if it is still the bottleneck, spend money: add interviewer capacity, train more panellists, buy scheduling software.
5. **Repeat** — once interviews are no longer the slowest step, the bottleneck has *moved* (perhaps to offer approvals). Go back to step 1, and "prevent inertia from becoming the constraint" — never assume last quarter's bottleneck is still this quarter's.

**Drum–buffer–rope (DBR)** is how you run a process once you know the constraint. The **drum** is the bottleneck's pace, beating the rhythm for everyone. The **buffer** is a small, protective queue kept *just in front of* the bottleneck so it never starves (a time buffer: e.g. always two days of screened candidates ready for interview). The **rope** ties the *release* of new work at the front of the line to the drum — the pipeline pulls in a new requisition only when the bottleneck is ready — so you never dump work in faster than the slowest step can clear it.

**SMED — quick changeover for office handoffs.** SMED (Single-Minute Exchange of Die) came from car plants that cut die-changes from hours to under ten minutes. It transfers straight to office "changeovers" — the lost time *between* pieces of work: reconfiguring, waiting, searching, re-briefing. The core move is to split changeover tasks into **internal** (only possible when the activity is stopped) and **external** (doable in advance, while the previous activity runs), then convert as much internal work to external as possible. For a panel interview, the "changeover" is the gap between candidates: finding the next CV, reading it cold, opening the scoring sheet, chasing the room link. Make those **external** — pre-load every candidate's pack, scorecard and video link before the session — and the panel flows straight on. The same logic cleans up any handoff: a pre-filled handover template between screening and interview means the receiving team never stops to reconstruct context.

**TPM and OEE — are our resources actually available?** Total Productive Maintenance (TPM) keeps the "machines" in reliable working order so they don't fail mid-flow; in an HR operation the "machines" are the applicant-tracking system (ATS), the scheduling tool, and the interviewers' booked time. **Overall Equipment Effectiveness (OEE)** is the single number for how much genuine, good output a resource gives versus its theoretical best. It multiplies three fractions:

> **OEE = Availability × Performance × Quality**

- **Availability** = run time ÷ planned time (did it run when it was meant to?)
- **Performance** = actual output ÷ output it *should* have produced in the run time (did it run at full speed?)
- **Quality** = good output ÷ total output (was it defect-free first time?)

**Worked OEE calculation** (figures illustrative). Take one recruiter's CV-screening day:
- Planned screening time: 8 h = **480 min**.
- System outage + waiting for approvals cost 60 min, so run time = 480 − 60 = **420 min**. Availability = 420 ÷ 480 = **0.875**.
- Ideal pace: one screen every 10 min. In 420 min that is 42 possible; she completed 36. Performance = (10 × 36) ÷ 420 = 360 ÷ 420 = **0.857**.
- Of the 36 screens, 33 were error-free; 3 had to be redone. Quality = 33 ÷ 36 = **0.917**.
- **OEE = 0.875 × 0.857 × 0.917 = 0.688, i.e. 68.8%.**

Cross-check the long way: good units × ideal time ÷ planned time = (33 × 10) ÷ 480 = 330 ÷ 480 = **68.75%** — the same number. The lesson: a resource that *looks* busy all day really delivers under 70% of its potential, and OEE shows *which* loss (availability, speed, or rework) costs most. (85% OEE is an oft-quoted manufacturing benchmark for "world class" — a target to aim at, not an HR law.)

**Little's Law — the law of queues.** The most useful equation in flow:

> **WIP = Throughput × Lead time**   (often written L = λ × W)

where WIP is the average work *in the system*, throughput the average completion rate, and lead time the average time one item spends in the system. It holds for any stable system, regardless of the order work is done in.

**Worked Little's Law example** (figures illustrative). Our pipeline closes **20 hires per week** (throughput) and the average time-to-hire is **6 weeks** (lead time). Then the average number of **open requisitions** in progress is:

> WIP = 20 × 6 = **120 open requisitions in progress at any moment.**

Now turn it around to find the lever: time-to-hire = WIP ÷ throughput. If you cannot raise throughput quickly but *cap* work-in-progress at 80 (never more than 80 live requisitions at once), lead time = 80 ÷ 20 = **4 weeks** — a third off the time-to-hire, bought purely by limiting WIP. This is why pull systems with WIP limits work: they shorten lead time without any new capacity.

**Line balancing and Heijunka.** *Line balancing* shares work across steps so none is badly overloaded while others idle — compare each step's workload to the **takt time** (the customer's demand rhythm) and redistribute tasks until every step sits just under takt. *Heijunka* (level loading) smooths the *mix and volume* of work over time to stop the feast-and-famine: instead of letting January's 200 vacancies all hit screening at once and August's 20 trickle in, you level the intake into small, regular batches so the pipeline runs at a steady, predictable pace.

**Pull at scale.** A **pull** system has each stage signal upstream to send only what it has just consumed (as a kanban card does), so work is drawn through by real demand, not pushed in on a forecast. At enterprise scale you don't run one giant pull loop; you place a **WIP cap on each stage** — or a single system-wide cap, *CONWIP* (constant WIP), that lets a new candidate enter only when one leaves — and hold small, replenished "supermarket" buffers between stages that run at different rhythms. The DBR rope is just the pull signal applied to the constraint. Pull only stays stable when the demand feeding it is level — which is why Heijunka and pull are a pair: level the load, then let pull run it.

## The rigorous method

**Theory of Constraints — formal.** A constraint is any resource whose capacity is at or below the demand placed on it; system throughput (the rate of completed, "sold" units) cannot exceed it. ToC optimises three global measures together: **Throughput** (T), **Inventory/Investment** (I, money tied up in WIP), and **Operating Expense** (OE). Improvements at non-constraints that raise local efficiency but not T are illusory — they typically raise I and OE. DBR schedules the drum to a finite-capacity schedule, protects it with a **time buffer** sized to upstream variability, and gates release with the rope so release rate = constraint consumption rate; buffer penetration is the control signal.

**OEE — formal definitions.** OEE decomposes six big losses: breakdowns and setup/adjustment (→ Availability), idling/minor stops and reduced speed (→ Performance), and defects/rework and start-up losses (→ Quality). Performance is capped at 1.0 — a value above 1 means the ideal cycle time is wrong. Crucially, planned production time already excludes scheduled breaks and no-demand time, which is why the availability losses it reveals are genuine losses, not planned ones.

**Little's Law — formal.** L = λW holds for any stable queueing system in steady state (arrival rate = departure rate, no unbounded growth), independent of the arrival- and service-time distributions and of queue discipline. The averages must be taken over a long, representative window; it describes only the long-run average, not an individual item's time. Being distribution-free, it is a sanity check you can always apply: if stated WIP, throughput and lead time don't satisfy L = λW, at least one measurement is wrong.

**Takt and balance — formal.** Takt time = available working time per period ÷ customer demand per period. For each step, operators (or parallel servers) needed ≈ step work content ÷ takt time, rounded up. A line is "balanced" when each station's cycle time ≤ takt and the **balance loss** — Σ(takt − station time) ÷ (takt × stations) — is minimised. Heijunka implements level loading through a *heijunka box* (a schedule interleaving work types in small, repeating pitches) so that average, not peak, demand sets capacity.

## Do this

Map the pipeline's five steps and estimate each step's weekly capacity. (1) Identify the constraint — the lowest-capacity step. (2) Apply Little's Law: using your throughput and average time-to-hire (if you have none to hand, use ~26 days, the average in `tth-subgroups.csv`), compute implied WIP, then the lead time you would get capping WIP at 70% of it. (3) Compute OEE for one interviewer-day from the worked template, using your own planned time, downtime, pace and rework. (4) List three changeover tasks in the candidate-to-candidate interview gap, sort each into internal or external, and move the external ones upstream. Then write the five focusing steps as an action list for *your* bottleneck.

## Common pitfalls

- **Optimising a non-constraint.** Speeding up screening when interviews are the bottleneck just grows the queue. Prove where the constraint is before acting.
- **Confusing utilisation with throughput.** A 100%-busy non-bottleneck is not a win; it is WIP being manufactured. Non-constraints *should* have slack.
- **Pushing work in faster than the drum.** Without a rope or WIP limit, lead time balloons — Little's Law guarantees it.
- **Treating OEE factors as independent targets.** They multiply, so 90% × 90% × 90% = 73%; small losses compound. And never let Performance exceed 100% — that means your "ideal" cycle time is fiction.
- **Levelling volume but not the mix.** Smoothing volume while still batching one job type creates internal famines — Heijunka levels *both*.
- **Declaring the bottleneck "fixed" forever.** Elevate it and it moves; skipping step 5 lets the new constraint hide.

## Self-check

1. **Q: Our pipeline does 15 hires/week with an average time-to-hire of 8 weeks. What is the average WIP, and what lead time would a WIP cap of 90 give?**
   A: WIP = 15 × 8 = 120 open requisitions. With WIP capped at 90 and throughput held at 15/week, lead time = 90 ÷ 15 = 6 weeks.

2. **Q: A resource has Availability 0.90, Performance 0.80, Quality 0.95. What is OEE, and which loss should you tackle first?**
   A: OEE = 0.90 × 0.80 × 0.95 = 0.684 (68.4%). Performance (0.80) is the largest single loss, so attack speed losses — minor stops and slow running — first.

3. **Q: In drum–buffer–rope, what does the "rope" do, and why?**
   A: It ties the release of new work at the front of the line to the bottleneck's consumption rate, so work enters no faster than the constraint can process it — preventing WIP build-up and keeping lead time short.

4. **Q: Panel interviews are the constraint. Why might hiring more CV screeners make time-to-hire worse, and what should steps 2–3 of the five focusing steps do instead?**
   A: Screeners aren't the bottleneck; extra screening just enlarges the interview queue, so WIP rises and, by Little's Law, lead time grows while throughput stays pinned at interview capacity. Instead, *exploit* the interviews (waste no slot) and *subordinate* screening to them — release only enough candidates to keep interviews fed.
