# QA Plan

## Quality Gates

| Gate | Command or Method | Required Before Release |
| --- | --- | --- |
| TypeScript | `npm run typecheck` | Yes |
| Lint | `npm run lint` | Yes |
| Unit tests | `npm test` | Yes |
| CI | GitHub Actions `CI` workflow | Yes |
| Manual smoke test | Device or Expo preview | Yes |
| Content review | Source-aware content checklist | Yes |
| Accessibility pass | Manual checklist | Yes |

## Smoke Test Checklist

- App launches without runtime errors.
- Study tab loads the hero image and content.
- Next fact button cycles through facts.
- Quiz answers show correct or retry feedback.
- Explore tab opens.
- Search filters topics.
- Category chips filter topics.
- Topic cards expand and collapse.
- Topic guide pages open from Explore and show related articles.
- Article pages open and save/remove actions update the Saved tab.
- Saved tab shows empty, loading, and saved states.
- Atlas tab shows ocean learning modules, facts, and glossary preview.
- Glossary route opens from Atlas and supports search, letter filters, empty states, definitions, and examples.
- Source links open externally or in the in-app browser.
- UI remains readable in light and dark mode.

## Regression Areas

- Navigation between Study and Explore.
- Local data imports and TypeScript types.
- Image asset paths.
- Search and category filtering.
- Quiz answer state.
- Accessibility labels and touch target sizes.

## Known Follow-Up QA Work

- Expand automated tests beyond filtering, saved ordering, and quiz scoring.
- Add component tests for content cards and interactive states.
- Test on small Android phone, large iPhone-class viewport, and web preview.
- Track current npm audit findings: production audit reports moderate transitive findings through Expo CLI/config packages, and the suggested forced fix would downgrade Expo, so no forced fix should be applied without a dependency review.
