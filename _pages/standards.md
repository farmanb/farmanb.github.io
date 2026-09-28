---
layout: page
title: Standards
permalink: /standards/
description: Learning standards for the courses I grade with standards-based grading.
---

<ul>
{% assign courses = site.standards | sort: "list_order" %}
{% for course in courses %}
<li>
  <h2><a href="{% link {{course.path}} %}">{{course.course_name}}</a></h2>
</li>
{% endfor %}
</ul>
