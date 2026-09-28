---
layout: page

title: Teaching
permalink: /teaching/
description: Every course I have taught, by institution, with materials and syllabi.
nav: true
nav_order: 4
universities: [Louisiana Tech University, University of Louisiana at Monroe, Lafayette College, University of South Carolina, University of Vermont]
---

{% for university in page.universities %}
## {{ university }}
---

  {%- comment -%}
    Courses sort by catalog number, highest first. Special topics courses have a
    non-numeric course_id, so they are pulled out and listed on top; the rest are
    all integers, which keeps the sort numeric rather than alphabetical.
  {%- endcomment -%}
  {% assign taught = site.courses | where: 'university', university %}
  {% assign topics = taught | where: 'special_topics', true | sort: "name" %}
  {% assign numbered = taught | where_exp: "course", "course.special_topics != true" | sort: "course_id" | reverse %}
  {% assign courses = topics | concat: numbered %}
  {% for course in courses %}
  - ### [{{ course.name }}]({{course.url | relative_url}})

      {{ course.content | markdownify }}
  {% endfor %}
{% endfor %}

