# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commit & push authorship

Do not add Claude as a commit author or co-author. Use only the repository owner's git identity (the configured `user.name` / `user.email`) when committing or pushing.

@AGENTS.md

## Architecture Big Picture

This is a personal academic site built on the **al-folio** Jekyll theme. Content lives in collection directories that Jekyll assembles into a static site; layout is driven by Liquid templates and SCSS.

### Content collections → pages flow

- `_pages/*.md` — top-level routes (`about.md`, `cv.md`, `publications.md`, `projects.md`, `teaching.md`, `blog.md`). Each declares a `layout:` in its frontmatter that resolves to a file in `_layouts/`.
- `_posts/YYYY-MM-DD-*.md` — blog posts, listed by `_layouts/blog.liquid`.
- `_projects/*.md` — project cards, rendered through `_layouts/projects.liquid` and `_pages/projects.md`.
- `_news/*.md` — short announcements surfaced on the about page.
- `_teachings/*.md` — course entries.
- `_bibliography/papers.bib` — publications source; rendered via `jekyll-scholar` through `_layouts/bib.liquid` and `_pages/publications.md`.
- `_data/*.yml` — structured inputs (`cv.yml`, `socials.yml`, `coauthors.yml`, `venues.yml`, `repositories.yml`, `citations.yml`) consumed by includes/layouts.

### Configuration

- `_config.yml` is the single source of truth for site-wide flags (most features are toggled by `enabled: true/false`), `url`/`baseurl`, navigation, and plugin behavior. Changes require a server restart (Docker rebuild not needed unless gems change).
- When changing `url`/`baseurl`, update both together — mismatches break asset URLs in production. Personal site: `url: https://username.github.io`, empty `baseurl`. Project site: `baseurl: /repo-name/`.

### Custom Ruby plugins (`_plugins/`)

These run at build time and are specific to this theme:

- `google-scholar-citations.rb`, `inspirehep-citations.rb` — fetch live citation counts for bib entries.
- `hide-custom-bibtex.rb` — strips al-folio's custom BibTeX fields (e.g. `pdf`, `preview`, `selected`) from rendered citations so the BibTeX export stays standards-compliant.
- `external-posts.rb` — pulls in posts hosted elsewhere.
- `details.rb`, `file-exists.rb`, `remove-accents.rb` — Liquid filter/tag helpers used inside templates.

### Build/deploy pipeline

- Local dev: `docker compose up` serves at `http://localhost:8080` (port differs from the bare-metal Jekyll default of 4000).
- CI (`.github/workflows/deploy.yml`): builds with `JEKYLL_ENV=production`, runs PurgeCSS (`purgecss.config.js`) to strip unused CSS, then publishes to the `gh-pages` branch. Documentation-only changes are skipped by path filters.
- `.github/workflows/prettier.yml` blocks PRs on formatting — always run `npx prettier . --write` before committing, especially after touching `.liquid`/`.md`/`.scss`.
- `.github/workflows/render-cv.yml` regenerates the CV PDF from RenderCV; do not hand-edit the generated PDF.

### Where to look for common edits

| Goal                            | Edit                                                          |
| ------------------------------- | ------------------------------------------------------------- |
| Add a publication               | `_bibliography/papers.bib`                                    |
| Add a project card              | New file in `_projects/`                                      |
| Update CV content               | `_data/cv.yml` (and/or the RenderCV source if used)           |
| Add a blog post                 | `_posts/YYYY-MM-DD-title.md`                                  |
| Change nav / toggle a section   | `_config.yml` (look for `enabled:` flags and `navbar` config) |
| Change colors / typography      | `_sass/_themes.scss`, `_sass/_variables.scss`                 |
| Add a reusable template snippet | `_includes/`                                                  |


