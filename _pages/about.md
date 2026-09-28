---
layout: about
title: About
permalink: /
subtitle: Assistant Professor, <a href='https://www.latech.edu'>Louisiana Tech University</a>.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Nethken Hall 235</p>
    <p>Louisiana Tech University</p>
    <p>Ruston, LA 71272</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

---

## About Me
I am a Vermonter, born and raised, and these days I live in Ruston, Louisiana with my wife, our daughter, and our dog, Emmy, named after the eminent algebraist [Emmy Noether](https://en.wikipedia.org/wiki/Emmy_Noether).
When I'm not doing mathematics, I'm usually outside.
I hike, backpack, fly fish, and cycle, and I get back to the snow to ride whenever I can.

---

## Appointments
I am an Assistant Professor of Mathematics and Statistics in the [College of Engineering and Science](https://www.latech.edu/engineering-science/) at [Louisiana Tech University](https://latech.edu).
I am also a fellow of the Mathematical Association of America's [Project NExT (New Experiences in Teaching)](https://maa.org/maa-project-next/), Red '22 cohort.

Before Louisiana Tech, I was an Assistant Professor and the Capital One Endowed Professor of Mathematics at the [University of Louisiana at Monroe](https://ulm.edu), and before that a Visiting Assistant Professor of Mathematics at [Lafayette College](https://lafayette.edu).

---
## Education

I received my Ph.D. on May 12, 2018 from the [Department of Mathematics](https://sc.edu/study/colleges_schools/artsandsciences/mathematics/index.php) at the [University of South Carolina](https://sc.edu) under the direction of [Matthew Ballard](https://www.matthewrobertballard.com). My dissertation is titled [Geometry of Derived Categories on Noncommutative Projective Schemes](https://scholarcommons.sc.edu/etd/4669/).

Before that I completed an M.S. in Mathematics at the [University of Vermont](https://uvm.edu) and a B.S. in Computer Science at [Rensselaer Polytechnic Institute](https://rpi.edu).

Thanks to the [Mathematics Genealogy Project](https://www.genealogy.math.ndsu.nodak.edu/), you can view my [Academic Genealogy]({% link /assets/pdf/genealogy-farman.pdf %}).
More general information about me can be found on my [Curriculum Vitae]({% link _pages/cv.md %}).

---

## Research
Algebraic geometry is a discipline that utilizes tools from many different areas of mathematics that form the basis for our understanding of a vast array of applications: the study of elliptic curves has produced modern cryptographic methods; methods from homological algebra provide data scientists with cutting edge tools for understanding the shape of data; the study of derived categories provides a link to string theory by way of Kontsevich's homological mirror symmetry.

My own work concerns the derived categories of noncommutative projective schemes, and increasingly I approach them through formalization.
Behind the Lean work is one question with a long ladder underneath it.
In algebraic geometry the derived category of a space carries much of its geometry, and theorems of Töen, Orlov and Lunts–Orlov show that equivalences between such categories are always geometric: each comes from a single object, a kernel, on the product of the two spaces.
The same holds, under some hypotheses, for the noncommutative projective schemes of Artin and Zhang, and the aim of the formalization program is to make that statement, and everything under it, checkable in [mathlib](https://github.com/leanprover-community/mathlib4), the mathematics library of the Lean theorem prover.
Those schemes are Grothendieck categories built by localizing modules at a torsion theory, so the bottom rungs are Gabriel topologies, torsion theories, and Stenström's classification of such localizations, which is where the work stands today.
Next comes the injective model structure on complexes in a Grothendieck category, which builds its derived category.
Above that are dg-categories and their derived categories, where "geometric" can be stated at all, and the subject of a project supported by Anthropic's AI for Science program.

For more specific information about my research program, take a look at my [Research Page]({% link _pages/research.md %}).

---

## Teaching
I have taught across the undergraduate curriculum, from general education courses like Contemporary Mathematics and College Algebra, through the calculus sequence and linear algebra, to Real Analysis and Abstract Algebra.
At Louisiana Tech I have also built two courses from scratch, each cross-listed for graduate students: Interactive Theorem Proving with Lean, first offered in Spring 2025, and Algebraic Geometry, first offered in Spring 2026.

I strive to create an inclusive and equitable environment in each of my courses that challenges and engages all of my students.
My classrooms are active, in the sense I learned as a [Project NExT](https://maa.org/maa-project-next/) fellow, and I structure my courses so that students are participants in their own learning, build the intuition to use the material beyond the coursework, and become independent learners who can critically assess the mathematics they and their peers produce.

A full list of my courses is on my [Teaching Page]({% link _pages/teaching.md %}), and my [Teaching Statement]({% link /assets/pdf/teaching-BFarman.pdf %}) goes into more detail on how I run a course.
