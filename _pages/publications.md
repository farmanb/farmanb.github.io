---
layout: page
permalink: /publications/
title: Publications
description: Journal and conference papers, and contributions to the mathlib4 library
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="publication-section">Published</h2>

{% bibliography --query @*[status=published] %}

<h2 class="publication-section">Formalization: merged into mathlib4</h2>

{% bibliography --query @*[status=merged] --group_by none %}

<h2 class="publication-section">Formalization: open pull requests</h2>

{% bibliography --query @*[status=open] --group_by none %}

</div>
