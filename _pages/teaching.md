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
# {{ university}}
---

  {% assign courses = site.courses | where: 'university', university | sort: "course_id" | reverse %}
  {% for course in courses %}
  - ## [{{ course.name }}]({{course.url | relative_url}})

      {{ course.content | markdownify }}
  {% endfor %}
{% endfor %}

