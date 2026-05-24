# Site Spec — Axpri (AI Implementation Lab)
Status: v1 **draft — pending owner confirmation of the 5 assumptions below** · Date: 2026-05-24

## Product
Axpri is an AI implementation lab that builds and ships production AI systems and agents — both for companies adopting AI (services) and as its own products. It does the engineering, not just advisory: turning AI ambitions into working systems in production.
**The one job it does better:** getting AI out of strategy decks and stalled pilots into shipped, production-grade systems — unlike consultancies that stop at advice, and unlike tools that leave you to build it yourself.

## Audience
**Primary (services-led at launch):** a technical or transformation decision-maker at a mid-market/enterprise company — CTO, VP Engineering, Head of AI/Innovation/Digital Transformation, or a budget-holding operations or business-unit leader — who has AI ambition (or board/market pressure) but lacks the in-house team to actually ship it.
**Before → after belief:** "AI could transform our [function], but we can't implement it / our pilots stall" → "These people actually ship production AI — for their own products and for companies like mine."
**Traffic sources:** referral / word-of-mouth (services are relationship-driven); organic + LLM search on AI-implementation and agent topics; the lab's own published content and products as inbound proof.
*(Secondary, growing: the audiences for the lab's own products — represented via product pages now, given dedicated surfaces as products mature.)*

## Site purpose
This site exists to convert companies with AI ambitions into booked consultations, by proving — through shipped products and client outcomes — that the lab builds production AI, not slideware.

## Conversion
**Primary:** book a consultation (discovery call).
**Secondary:** subscribe to insights (newsletter); "notify me" / waitlist on the lab's own products.

## Success metrics (90-day)
- Qualified consultations booked: target ~4–8 / month.
- Consultation → engagement conversion: ~25–40%.
- Newsletter subscribers: steady growth (set baseline after month 1).
- Organic + LLM-referral share of sessions: tracked from day one, growing across the quarter.
*(Targets illustrative — calibrate to real pipeline once data exists.)*

## Positioning
**One-liner:** "For companies serious about AI, [Lab Name] is the implementation lab that ships production AI systems and agents — unlike consultancies that stop at strategy, and tools that leave you to build it alone."
**Proof points:**
1. We build our own AI products and agents — we ship on ourselves, not just advise.
2. Client outcomes — production systems delivered, with measurable results.
3. A rigorous, repeatable implementation approach — method, not improvisation.
**POV / content moat:** hands-on, cross-company implementation experience → publish what actually works in production AI: original benchmarks, pilot post-mortems, and an agentic-systems point of view. This is what makes the lab citable by both search and LLMs (MKT-CONTENT-001).

## Pages (v1)
- **Home** — dual positioning ("we ship production AI — for you, and our own products"); routes to *book a consultation*.
- **Services ("What we do")** — the implementation offering, approach, engagement model; drives consultation.
- **Products ("What we build")** — the lab's own AI products/agents as proof of capability; soft waitlist capture.
- **Work / Case studies** — client outcomes + product results; the believability engine.
- **About** — the lab, team, and why-a-lab-not-a-consultancy; trust + differentiation.
- **Insights (blog)** — the content moat; discoverability, authority, and nurture.
- **Book a consultation (contact)** — the conversion page.

## Discoverability
**Target topics (human + LLM):** "AI implementation services," "AI agent development for [vertical]," "moving AI from pilot to production," "why AI pilots fail," "production AI systems," "[vertical] AI solutions."
**Citability angle:** original, hands-on implementation knowledge — real lessons and benchmarks from shipping production AI across companies and building the lab's own products. (→ MKT-SEO, MKT-AEO, MKT-LLM)

## Scope
**In (v1):** the 7 pages above; consultation booking + lead capture; insights blog with initial posts; the SEO/LLM-readability/performance foundations; i18n routing structure.
**Non-goals (v1):** no self-serve product purchase / e-commerce; no client portal or login (that's the future platform); no per-product microsites; no pricing page (consultative sale); no blog search yet (Pagefind deferred, DEC-033).

## Webapp relation
The lab's products/agents will eventually be delivered via the future platform at `app.[domain]`. v1 product pages use "notify me" / waitlist CTAs that later become the platform's signup/login entry. Consistency to preserve now: brand, root domain, the subdomain plan (`app.[domain]`, DEC-004), and the auth entry point (cookie scope `.[domain]`, CONV-012) — so today's marketing site is built compatible with tomorrow's platform handoff (EXT-002).

## Constraints
- **Languages:** EN at launch; ES on roadmap, with i18n structure from day one (CONV-005). *(Confirm — ES-at-launch may matter for LatAm reach.)*
- **Brand:** name, logo, and design tokens needed (to produce).
- **Timeline / budget:** owner to set; lean/bootstrapped assumed.

## Assumptions confirmed — required for true validation
1. **Services-led at launch** — products are proof of capability, not the primary conversion. *(The central strategic call; everything above flows from it.)*
2. **Primary ICP** is the services buyer described, not the product end-user.
3. **Primary conversion** is a booked consultation (consultative sale), not self-serve.
4. **Languages at launch** — EN + ES.
5. **No pricing page** at v1 (custom/consultative engagements).

## Validation — GATE-DEFINE (vs STD-001 / STD-002)
Structural completeness:
- [x] Product in two jargon-free sentences
- [x] One primary audience with a before→after belief shift
- [x] One-sentence site purpose
- [x] Exactly one primary conversion goal
- [x] 2–4 success metrics with targets
- [x] One-line positioning + 3 proof points
- [x] v1 page list, each with a job
- [x] 3–5 discoverability topics + citability angle
- [x] Explicit scope + non-goals
- [x] Webapp handoff path
- [x] Constraints noted

**Status: structurally complete; strategically validated.** On confirmation, DEF-001 is done and GATE-DEFINE clears → proceed to DEF-002.
