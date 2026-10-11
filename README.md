# My research website

This is the personal research website of Lukas Horn. It was forked from [Astro Academia](https://github.com/maiobarbero/astro_academia) by [Matteo Barbero](https://github.com/maiobarbero).

## Getting started

```sh
nvm install
nvm use
npm ci
npm run dev
```

Build and preview locally:

```sh
npm run build
npm run preview
```

## Active pages

- **Home** (`/`) — short bio, research areas, and recent publications
- **Publications** (`/papers`) — full list of publications
- **CV** (`/cv`) — education, experience, and publications timeline
- **Imprint** (`/imprint`)
- **Privacy Policy** (`/privacy`)

## Deleted pages

The following pages and features from the original Astro Academia template were removed because they are not currently used:

- Research statement page (`src/pages/research.astro`)
- Blog index page (`src/pages/blog/[page].astro`)
- Individual blog posts (`src/pages/blog/[slug].astro`)
- Blog tag pages (`src/pages/blog/tags/[tag].astro`)
- Blog content collection (`src/content/BlogPosts/`, `src/content.config.ts`)
- Blog RSS feed (`src/pages/rss.xml.js`)
- Blog-only UI components (`src/components/ui/BlogPostCard.astro`, `src/components/ui/Pagination.astro`)
- Unused template assets (`src/assets/astro.svg`, `src/assets/background.svg`, `src/assets/blogpost_placeholder.webp`, `public/favicon.svg`)
- Unused React integration and related dependencies (`@astrojs/react`, `react`, `react-dom`, etc.)
- Unused helpers and the `scripts/update-changelog.mjs` script

### Restoring deleted files

Deleted files can be recovered either from the upstream template at <https://github.com/maiobarbero/astro_academia> or from the git history of this repository:

```sh
# List commits where the files existed
git log --all --full-history -- src/pages/research.astro

# Restore a deleted file from a specific commit
git checkout <commit-hash> -- src/pages/research.astro
```

The commit just before the cleanup also retains the previous state, so the deleted files can be checked out from earlier history at any time.
