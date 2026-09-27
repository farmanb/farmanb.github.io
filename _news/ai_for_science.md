---
layout: post
title: Anthropic AI for Science Award to Formalize dg-Categories in Lean
date: 2026-09-27
inline: false
related_posts: false
---

**Anthropic has selected Blake Farman's project for its AI for Science program**, awarding
**<span class="tex2jax_ignore">$20,000</span> in Claude usage credits** to support a six-month effort to formalize
**dg-categories and the derived category of a dg-category** in Lean's
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
Triangulated categories are the working language of homological algebra, but they
forget too much: cones are not functorial, and functor categories and tensor products
between triangulated categories are poorly behaved. Differential graded (dg)
categories, which are categories enriched over chain complexes, repair this, and derived
categories of abelian categories, perfect complexes on schemes, and noncommutative
projective schemes all carry such enhancements.

mathlib currently has triangulated categories, derived categories of abelian categories, and
enriched categories, but no dg-categories at all. This project builds that missing
layer, following Keller's ICM survey as its roadmap: dg-categories and dg-functors,
the functors \\(Z^0\\) and \\(H^0\\), quasi-equivalences, dg-modules, and the derived category
\\(D(\mathscr{A})\\) of a dg-category \\(\mathscr{A}\\). The finish line is a consistency theorem: when
\\(\mathscr{A}\\) is the ringoid associated to an ordinary ring \\(A\\), that is, the dg-category with one
object whose endomorphisms are \\(A\\) in degree zero, \\(D(\mathscr{A})\\) recovers mathlib's derived
category \\(D(A)\\) of \\(A\\)-modules.

---

### How Claude is used
Claude runs inside Claude Code against a live Lean language server, under mathlib's
AI disclosure policy and with the PI supervising every line: searching mathlib for
existing API, turning statements from Keller's survey into Lean skeletons within
definitions the PI has fixed, and iterating on routine lemmas until they compile.
Nothing reaches mathlib except by the PI re-deriving it, and every AI-assisted
contribution is disclosed in the pull request.

The project also produces something the Lean community currently lacks: a
baseline-controlled, public record of LLM assistance on a research-level
formalization, measured against the PI's six AI-free mathlib pull requests merged
in early 2026.

---

### Deliverables
- A sequence of reviewed mathlib pull requests delivering the dg-category layer
- A public [Lean blueprint](https://github.com/LATechLean/dgcat-blueprint) with a
  dependency graph mapping Keller's survey onto the formalization
- A public metrics log of Claude's contribution, per lemma
- A short paper on the formalization and the workflow

---

*This work is supported in part by Anthropic's AI for Science program.*
