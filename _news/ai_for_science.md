---
layout: post
title: Anthropic AI for Science Award to Formalize dg-Categories in Lean
date: 2026-09-27
inline: false
related_posts: false
---

Anthropic has selected my project for its AI for Science program.
The award provides <span class="tex2jax_ignore">$20,000</span> in Claude usage credits to support a six-month effort to formalize
dg-categories and the derived category of a dg-category in Lean's
[mathlib](https://github.com/leanprover-community/mathlib4) library.

---

### Quick facts
- **Program:** Anthropic AI for Science
- **Project:** *Formalizing the dg-Enhancement of Triangulated Categories*
- **Award:** <span class="tex2jax_ignore">$20,000</span> in Claude usage credits over six months
- **Home:** Mathematics & Statistics, Louisiana Tech University
- **Focus:** Research-level formalization in Lean, with disclosed, supervised AI assistance

---

### The mathematics
Triangulated categories are the working language of homological algebra.
However, they lose too much information.
Cones are not functorial, and both functor categories and tensor products
of triangulated categories are poorly behaved.
Differential graded (dg) categories, which are categories enriched over chain complexes, remedy these defects.
Moreover, derived categories of abelian categories, perfect complexes on schemes, and noncommutative
projective schemes all carry such enhancements.

While mathlib currently has triangulated categories, derived categories of abelian categories, and
enriched categories, it has no dg-categories.
This project formalizes the missing theory, following Keller's ICM survey: dg-categories and dg-functors,
the functors \\(Z^0\\) and \\(H^0\\), quasi-equivalences, dg-modules, and the derived category
\\(D(\mathscr{A})\\) of a dg-category \\(\mathscr{A}\\).
The final goal is a consistency theorem, which states that \\(D(\mathscr{A})\\) recovers mathlib's derived
category \\(D(A)\\) of \\(A\\)-modules when \\(\mathscr{A}\\) is the ringoid associated to an ordinary ring \\(A\\),
that is, the dg-category with one object whose endomorphisms are \\(A\\) in degree zero.

---

### How Claude is used
Claude runs inside Claude Code against a live Lean language server, in accordance with mathlib's
AI disclosure policy, and I supervise every line.
Its tasks are searching mathlib for existing API, turning statements from Keller's survey into Lean
skeletons within definitions that I have fixed, and iterating on routine lemmas until they compile.
Nothing reaches mathlib unless I have re-derived it myself, and every AI-assisted
contribution is disclosed in the pull request.

The project also produces a baseline-controlled, public record of LLM assistance on a research-level
formalization, which the Lean community currently lacks.
This record is measured against my six mathlib pull requests merged in early 2026, which were written
without AI assistance.

---

### Deliverables
- A sequence of reviewed mathlib pull requests delivering the dg-category layer
- A public [Lean blueprint](https://github.com/LATechLean/dgcat-blueprint) with a
  dependency graph mapping Keller's survey onto the formalization
- A public metrics log of Claude's contribution, per lemma
- A short paper on the formalization and the workflow

---

*This work is supported in part by Anthropic's AI for Science program.*
