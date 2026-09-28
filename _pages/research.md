---
layout: page
title: Research
permalink: /research/
description: Derived categories of noncommutative projective schemes, and formalizing them in Lean.
nav: true
nav_order: 2
---

## Derived categories of noncommutative projective schemes

Algebraic geometry exploits the duality between commutative algebra and geometry, combining the technical power of the former with the intuition of the latter.
Over the past three decades derived categories have become central to this, often revealing relationships between varieties that the classical geometry hides.
Artin and Zhang's noncommutative projective schemes extend the geometric picture to noncommutative graded algebras, and my work develops the theory of their derived categories through differential graded categories.

## The question

The derived category of a space carries much of its geometry, and a run of theorems by Töen, Orlov and Lunts–Orlov shows that equivalences between such categories are always geometric: each arises from a single object, a kernel, on the product of the two spaces.
Whether the same holds for noncommutative projective schemes is the question that organizes my research.
With Matthew Ballard I showed that it does, under natural finiteness hypotheses, by identifying the internal Hom of dg-categories between two noncommutative projective schemes with the derived category of their product ([Kernels for noncommutative projective schemes](https://doi.org/10.4171/jncg/427), *J. Noncommut. Geom.* 2021).

## Formalization

Increasingly I approach this program by formalizing it in [mathlib](https://github.com/leanprover-community/mathlib4), the mathematics library of the Lean theorem prover.
The goal is to make the theorem above, and everything beneath it, machine-checkable.
That requires building a ladder from the bottom.

### Torsion theories and Giraud subcategories

Noncommutative projective schemes are Grothendieck categories obtained by localizing graded modules at a torsion theory, and by the Gabriel–Popescu theorem every Grothendieck category arises as such a localization of a module category.
The first rungs are therefore Gabriel topologies on a ring, torsion theories on its modules, and Stenström's classification of these localizations as Giraud subcategories.
This is where the work stands today.

{% include mathlib_contributions.liquid level=4 %}

### The injective model structure

A Grothendieck category has enough injectives but typically no projectives, so its derived category has to be assembled from injective resolutions.
The injective model structure on complexes, due to Hovey and Beke, organizes that construction and also yields the dg-category that enhances the derived category.
Formalizing it rests on Hovey's recognition theorem for cofibrantly generated model categories, which is the next target.

### dg-categories

The top of the ladder is the layer in which "geometric" can be stated: dg-categories, dg-functors, dg-modules, and the derived category of a dg-category, following Keller's ICM survey.
With support from Anthropic's AI for Science program I am building that layer, with a consistency theorem as the finish line: for the dg-category with one object and endomorphism ring \\(A\\), the construction recovers mathlib's derived category of \\(A\\)-modules.

## Further reading

My [research statement]({% link /assets/pdf/research-BFarman.pdf %}) gives the algebraic-geometry side in more detail.
Publications and mathlib contributions are listed on the [Publications]({% link _pages/publications.md %}) page, and my ORCID is <a href="https://orcid.org/0000-0002-3624-837X">0000-0002-3624-837X</a>.
