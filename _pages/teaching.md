---
layout: page
permalink: /teaching/
title: Teaching
description: An overview of my teaching.
nav: true
nav_order: 6
universities: [Louisiana Tech University, University of Louisiana at Monroe, Lafayette College, University of South Carolina, University of Vermont]
---

{% for university in page.universities %}
<h1>{{ university }}</h1>
<ul>
  {% assign my_courses = site.courses | where: 'university', university | sort: "course_number" | reverse %}
  {% for course in my_courses %}
  <li>
    <h2><a href="{% link {{course.path}} %}">{{ course.name }}</a></h2>
    <!-- <h3>{{ course.position }}</h3> -->
    <p>{{ course.content | markdownify }}</p>
  </li>
  {% endfor %}
</ul>
{% endfor %}
