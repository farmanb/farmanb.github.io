# blakefarman.phd

Source for [www.blakefarman.phd](https://www.blakefarman.phd), the professional
site of Blake Farman. Built with [Jekyll](https://jekyllrb.com/) on the
[al-folio](https://github.com/alshedivat/al-folio) theme and deployed to
GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Local development

```
bundle install
bundle exec jekyll serve
```

## Checks

Every push runs Lighthouse and a WCAG 2 AA audit with pa11y-ci over every
page in the sitemap; both must pass before the site deploys. To run the
accessibility audit locally:

```
bundle exec jekyll build
bin/a11y
```

Set `PA11Y_CHROME` to a Chrome binary if Puppeteer's bundled one fails to
launch. Lighthouse configuration is in `lighthouserc.json` and pa11y's in
`.pa11yci.js`.

## Layout

- `_pages/` top-level pages; `_news/` announcements shown on the home page
- `_courses/`, `_sections/`, `_standards/` teaching pages, with per-term data
  in `_data/course_info.yml`, `_data/exams.yml`, and `_data/office_hours.yml`
- `materials/` syllabi, exams, and notes served as static files
- `_bibliography/papers.bib` publications, rendered by jekyll-scholar
- `_data/cv.yml` the CV page; `assets/pdf/CV-BFarman.pdf` the PDF version

The theme's own documentation is in `CUSTOMIZE.md`, `FAQ.md`, and `INSTALL.md`.
