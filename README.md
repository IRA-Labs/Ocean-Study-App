# Ocean Study App

Ocean Study App is a React Native Expo learning app for people interested in ocean study.

The current app includes an ocean-themed study dashboard, original ocean visuals, a source-linked knowledge base, searchable topic exploration, topic guides, article readers, saved articles with local persistence, an Ocean Atlas, a dedicated searchable glossary, learning modules, fact cards, and interactive quiz checks.

## Tech Stack

- React Native with Expo
- Expo Router file-based routing
- TypeScript
- Local learning content stored as typed data
- Expo Image for performant app visuals
- AsyncStorage for saved article persistence
- Node test runner with `tsx` for data utility tests

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Run quality checks:

```bash
npm test
npm run typecheck
npm run lint
npm run check
```

## Project Structure

```text
src/app/            App routes and screens
src/components/     Reusable UI components
src/constants/      Theme tokens and app constants
src/data/           Local ocean knowledge-base data
src/hooks/          Theme and platform hooks
assets/images/      App imagery and generated ocean visuals
docs/               Product, engineering, design, QA, and release docs
```

## Product Features

- Study dashboard with hero visual, daily facts, learning route, quiz check, and featured topics.
- Explore screen with search, category filters, expandable topic previews, and source links.
- Topic guide pages with article lists, topic metadata, and quiz checks.
- Article reader pages with takeaways, sections, source links, and save action.
- Saved screen backed by local persistence.
- Ocean Atlas with learning modules, fact cards, and a glossary preview.
- Dedicated glossary route with search, alphabet filters, definitions, and examples.

## Public Release Rules

- Do not commit secrets, private keys, or private datasets.
- Educational claims should be source-aware and reviewed before release.
- Images must be generated, owned, public-domain, or properly licensed.
- UX should remain accessible, readable, and useful on mobile first.

## Documentation

Start with [docs/README.md](./docs/README.md) and [docs/01-action-plan.md](./docs/01-action-plan.md).
