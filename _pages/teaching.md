---
layout: page
title: Teaching
permalink: /teaching/
description: An overview of my teaching.
nav: true
nav_order: 3
universities: [Louisiana Tech University, University of Louisiana at Monroe, Lafayette College, University of South Carolina, University of Vermont]
---

{% for university in page.universities %}
<h1>{{ university }}</h1>
<ul>
  {% assign ulm_courses = site.courses | where: 'university', university | sort: "course_number" | reverse %}
  {% for course in ulm_courses %}
  <li>
    <h2><a href="{% link {{course.path}} %}">{{ course.name }}</a></h2>
    <!-- <h3>{{ course.position }}</h3> -->
    <p>{{ course.content | markdownify }}</p>
  </li>
  {% endfor %}
</ul>
{% endfor %}
