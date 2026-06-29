# Architecture

## Baseline Decision

The app uses Expo with the default TypeScript template and Expo Router. This gives the project file-based routing, web support for previews, and a standard Expo development workflow.

## Folder Structure

| Path | Purpose |
| --- | --- |
| `src/app` | Route-level screens and layout. |
| `src/components` | Shared presentational components. |
| `src/constants` | Theme tokens and app constants. |
| `src/data` | Local typed ocean learning content. |
| `src/hooks` | Theme and platform hooks. |
| `assets/images` | Static app imagery and generated ocean visuals. |
| `docs` | Planning, product, architecture, design, QA, and release documentation. |

## Current Technical Choices

| Area | Decision |
| --- | --- |
| Language | TypeScript with strict mode. |
| Navigation | Expo Router with app-level tab navigation. |
| State | Local React state for first learning interactions. |
| Persistence | AsyncStorage for saved article IDs. |
| Content | Local TypeScript data modules until backend scope is approved. |
| Images | Workspace-owned generated ocean assets imported through Expo. |
| Quality | `npm run typecheck`, `npm run lint`, `npm test`, and manual QA checklist. |

## Dependency Management

- Dependabot is enabled for GitHub Actions and limited npm tooling updates.
- Expo-managed runtime packages are intentionally ignored by Dependabot and should be upgraded through a planned Expo SDK compatibility review.
- React, React DOM, React Native, Expo packages, and AsyncStorage must stay aligned with the supported Expo SDK versions.
- Tooling major versions, such as ESLint major upgrades, should be handled in a dedicated branch with config migration notes.
- Dependency PRs can be merged only when CI passes and the update does not conflict with the Expo compatibility set.

## Engineering Standards

- Keep content typed and source-aware.
- Keep UI components reusable before adding new screens.
- Avoid secrets and runtime-only local configuration in source control.
- Prefer small, testable utilities when search, filtering, saved state, or quiz scoring grows.
- Update docs when architecture, setup, quality gates, or release behavior changes.

## Branch and Pull Request Policy

- `main` is the public release branch.
- Feature work should use short-lived branches named `feature/<scope>` or `codex/<scope>`.
- Every pull request should pass CI before merge.
- Pull requests should describe product impact, validation performed, and any content or asset review needs.
- Direct commits to `main` should be limited to initial setup, urgent documentation fixes, or maintainer-approved release actions.

## Performance Baseline

- Keep first-screen content available without a backend dependency.
- Keep images imported through Expo-managed assets so dimensions are stable and bundling is predictable.
- Avoid rendering unbounded lists on route load; split larger knowledge collections by topic, category, or search query.
- Preserve stable card, tab, and quiz dimensions so touch targets and text do not shift during interaction.
- Treat web export size, image loading, route transitions, and long article scrolling as release QA checkpoints.

## Current Routes

| Route | Purpose |
| --- | --- |
| `/` | Study dashboard and featured learning entry points. |
| `/explore` | Searchable and filterable topic exploration. |
| `/topic/[id]` | Topic guide with articles and quiz check. |
| `/article/[id]` | Article reader with source link and save action. |
| `/saved` | Locally persisted saved article list. |
| `/about` | Ocean Atlas with learning modules, fact cards, and glossary preview. |
| `/glossary` | Searchable glossary with alphabet filters, definitions, and examples. |
