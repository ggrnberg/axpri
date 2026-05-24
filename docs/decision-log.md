# Decision Log — axpri

Instance record of how **axpri**'s build relates to the framework's **Decisions Registry** (`DEC-*` in the Reference Layer). This logs only **deviations** and **site-specific choices** — everything not listed here inherits the Registry default as-is. This file is the `DEF-002` output.

## Inheritance

axpri inherits all framework decisions `DEC-001 … DEC-037` as defaults, except where a deviation is logged below.

## Deviations & site-specific decisions

| Date | Ref | Decision for axpri | Default it changes | Rationale |
|------|-----|--------------------|--------------------|-----------|
| 2026-05-24 | CONV-005 | **Launch in EN + ES (both active at launch)** | Spec default assumed EN at launch, ES on roadmap | LatAm + Spain reach is core to axpri's market; ship bilingual from day one. i18n structure was always required (CONV-005); this activates both locales immediately rather than EN-only first. |

## Confirmed strategic assumptions

(Recorded in `site-spec.md`; summarized here for traceability.)

1. Services-led at launch; the lab's own products are proof of capability, not the primary conversion.
2. Primary ICP = the services buyer (technical/transformation decision-maker).
3. Primary conversion = booked consultation.
4. No pricing page at v1 (consultative sale).
5. Languages = EN + ES at launch (see deviation above).

## Open / pending decisions

| Date | Topic | Status |
|------|-------|--------|
| 2026-05-24 | Domain / TLD (`axpri.com`) and `app.axpri.com` subdomain | resolved |
| 2026-05-24 | Brand assets (name treatment, logo, design tokens) | pending |

---

*Maintenance:* add a row whenever you deviate from a `DEC-*` default or make an axpri-specific technical decision, with the date and rationale. Deviations that recur across sites are candidates to revise the framework default via PR (MAINT-011).
