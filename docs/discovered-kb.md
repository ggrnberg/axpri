# Discovered KB — axpri

Site-specific troubleshooting entries captured while building and operating **axpri**. Curated, known-in-advance issues live in the framework **Reference Layer** (`R6`); this is the **discovered layer** for this site.

**The ritual:** the moment you solve a real problem, append an entry here — don't rely on memory. Entries that recur or generalize beyond axpri get promoted to the framework's curated KB via PR (MAINT-011 / OP-005), where they receive a framework `KB-NNN` id.

**ID scheme:** `KB-axpri-NNN` (namespaced so instance discoveries never collide with the framework's curated `KB-NNN`).

## Entry schema (from R6)

`KB-axpri-NNN | symptom/trigger | stage · component | root cause | solution | prevention | severity | frequency | tags`

## Entries

### KB-axpri-001 — stray next-env.d.ts recommitted after app deletion
- Symptom / trigger: after `git rm -r apps/docs`, `pnpm build` regenerated `apps/docs/next-env.d.ts`, which `git add .` then committed into the deleted directory.
- Stage · component: SCAF-002 · Turborepo / Next.js build
- Root cause: Next.js writes `next-env.d.ts` at build for any app still in the workspace task graph; building before `pnpm install` cleaned the workspace re-created the removed app's file.
- Solution: remove the stray file, recommit; ensure `pnpm install` precedes `pnpm build` after removing an app.
- Prevention: `pnpm install` before `pnpm build` after any `git rm` of an app; inspect `git status` before `git add .`.
- Severity: low · Frequency: once · Tags: turborepo, nextjs, git, build
- Promote? Yes → promoted to framework KB-008.

<!-- Copy this block for each new entry:

### KB-axpri-001 — <short symptom>
- **Symptom / trigger:**
- **Stage · component:**
- **Root cause:**
- **Solution:**
- **Prevention:**
- **Severity:**
- **Frequency:**
- **Tags:**
- **Promote?** (recurring / generalizable → PR to framework R6):

-->
