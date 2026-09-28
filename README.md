# blakefarman.phd

Source for [www.blakefarman.phd](https://www.blakefarman.phd), the professional
site of Blake Farman. Built with [Jekyll](https://jekyllrb.com/) and deployed to
GitHub Pages by `.github/workflows/deploy.yml`.

The site started from the [al-folio](https://github.com/alshedivat/al-folio)
theme and has diverged substantially. See [Divergence from
al-folio](#divergence-from-al-folio) before trusting the upstream documentation
that still ships in this repository.

## Local development

```
bundle install
bundle exec jekyll serve
```

ImageMagick must be installed for the responsive profile images; the build
works without it, but the `.webp` variants will be missing.

## Checks

Every push runs Lighthouse and a WCAG 2 AA audit with pa11y-ci over every page
in the sitemap. Both must pass before the site deploys. To run the
accessibility audit locally:

```
bundle exec jekyll build
bin/a11y
```

Set `PA11Y_CHROME` to a Chrome binary if Puppeteer's bundled one fails to
launch. Lighthouse configuration is in `lighthouserc.json` and pa11y's in
`.pa11yci.js`.

Accessibility is enforced, not aspirational: a contrast or heading-order
regression fails the build and blocks the deploy.

## How the content is organized

| Path | Holds |
| --- | --- |
| `_pages/` | Top-level pages, one file each |
| `_news/` | Announcements, shown on the home page and at `/news/` |
| `_courses/` | One file per course, independent of when it ran |
| `_sections/` | One file per offering of a course |
| `_standards/` | Learning standards, one file per course |
| `_bibliography/papers.bib` | Publications, rendered by jekyll-scholar |
| `materials/` | Syllabi, exams, and notes, served as static files |
| `_data/` | Everything that varies by term or needs to be shared |

### Teaching

Teaching content is split in two. A **course** is the catalog entry, and lives
in `_courses/`. A **section** is one offering of that course in one term, and
lives in `_sections/`. The teaching page groups courses by institution, and each
course page lists its sections.

To add a section:

1. Create `_sections/<course>-<term>.md` with `course_id`, `section_id`,
   `section_name`, `year`, and `semester`. The body is optional; a file with
   only front matter still renders a full page.
2. Add a matching entry to `_data/course_info.yml` with meeting times,
   location, and syllabus links.
3. If the term is new, add office hours to `_data/office_hours.yml`.
4. Put any files under
   `materials/<university_slug>/<course_id>/<year>/<semester>/<section_id>/`.

The section page finds its course info by matching all four of `course_id`,
`section_id`, `year`, and `semester`. **The match is exact, including type.** A
`section_id` of `'001'` in one file and `001` in the other will not match, and
the page will silently render without meeting times or syllabus links. Section
ids that begin with a zero must be quoted in both files.

Courses sort by catalog number, highest first. Special topics courses have a
word rather than a number for a `course_id`, so they carry `special_topics: true`
and are listed above the numbered ones. Without that flag, mixing words and
numbers makes Jekyll compare the whole list as text, and a 500-level course
sorts above a 4000-level one.

### Publications

Entries live in `_bibliography/papers.bib` and are grouped on the publications
page by a `status` field of `published`, `merged`, or `open`. An entry with no
`status` renders nowhere.

- `_data/venues.yml` gives a venue its badge color and link, keyed by the `abbr`
  field. An `abbr` with no entry here renders as an unstyled, unlinked badge.
- `_data/coauthors.yml` links coauthor names to their sites.
- `_data/citations.yml` supplies Google Scholar citation counts.

jekyll-scholar runs a LaTeX filter over every field, which turns the `--` in an
ASEE DOI into an en dash and breaks the link. `_layouts/bib.liquid` normalizes
the DOI before use; do not remove that step.

### CV

The CV page renders `_data/cv.yml`. The PDF linked at the top of the page is
`assets/pdf/CV-BFarman.pdf` and is maintained separately.

## Generated data

Two data files are written by scripts and should not be edited by hand:

- `_data/mathlib.yml` from `bin/mathlib-stats`, which reads the GitHub API.
  mathlib merges through Bors, which closes a pull request rather than marking
  it merged, so the script detects merged work by the title prefix.
- `_data/citations.yml` from `bin/update_scholar_citations.py`, which scrapes
  Google Scholar.

`.github/workflows/refresh-data.yml` runs both weekly and opens a pull request
when either changes. It does not commit to master directly, because Google
blocks datacenter traffic often enough that a failed scrape should be seen
before it lands.

## Titles

Courses and sections have no `title` in their front matter, so Jekyll would fall
back to the filename slug and pages would be titled "4083 F26". Two places build
a real title from the fields those documents carry, and both need updating if
the shape of that data changes:

- `_includes/metadata.liquid` for the browser tab, Open Graph, and Schema.org
- `_scripts/search.liquid.js` for the site search index

## Divergence from al-folio

The following upstream features have been removed from this site. The theme's
own documentation in `CUSTOMIZE.md`, `INSTALL.md`, and `FAQ.md` still describes
them, and those files are excluded from the build:

- **Blog.** No `_posts/`, no pagination, no archives, no related or latest posts.
- **Projects.** The collection, the masonry grid, and the project cards.
- **JSON resume.** The CV renders `_data/cv.yml` only. Do not restore the
  `jekyll_get_json` config; the layout used to hide the real CV whenever a
  resume file existed.
- **RSS.** No feed and no feed icon.
- **InspireHEP.** Badge, plugin, and config.
- **Google Scholar scraping during the build.** Superseded by
  `_data/citations.yml`.
- Nine unused layouts and more than forty unused includes.

Layouts that remain are the ones this site actually uses. Three of them,
`calc1.html`, `calc2.html`, and `standards.html`, were written for this site
rather than inherited, which is why they carry an `.html` extension where the
upstream layouts use `.liquid`.
