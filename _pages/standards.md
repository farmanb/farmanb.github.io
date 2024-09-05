---
layout: page
title: Standards
permalink: /standards/
---

<ul>
{% assign courses = site.standards | sort: "list_order" %}
{% for course in courses %}
<li>
  <h2><a href="{% link {{course.path}} %}">{{course.course_name}}</a></h2>
</li>
{% endfor %}
</ul>
