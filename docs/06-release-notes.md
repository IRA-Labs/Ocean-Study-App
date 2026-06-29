# Release Notes

## Current Scope

Ocean Study App now has a complete learning-app MVP:

- Study dashboard with ocean hero image, facts, learning route, quiz check, and featured topics.
- Explore screen with search, category filters, topic previews, and source links.
- Topic guide route with metadata, related articles, and topic quiz.
- Article reader route with takeaways, body sections, source link, and save action.
- Saved tab with local persistence through AsyncStorage.
- Ocean Atlas tab with learning modules, fact cards, and glossary entries.
- Documentation for product scope, architecture, design, QA, release notes, and backlog.
- Ocean-themed app icon, favicon, splash, and adaptive Android icon assets replacing Expo starter branding.
- GitHub Actions CI for install, typecheck, lint, tests, production audit threshold, and web export verification.

## Verification

| Check | Result |
| --- | --- |
| `npm run typecheck` | Passed |
| `npm run lint` | Passed |
| `npm test` | Passed, 6 data utility tests |
| `npm run check` | Passed |
| `npm audit --omit=dev --audit-level=high` | Passed, with moderate Expo transitive findings remaining |
| `npx expo export --platform web --output-dir dist` | Passed |
| `http://localhost:8081` | Returned 200 after Expo preview restart |

## Known Limitations

- Content is introductory learning material and needs subject matter review before formal educational use.
- Saved articles are local to the device/browser storage.
- No authentication, backend sync, analytics, or content management system is included.
- Generated and locally drawn ocean assets are original workspace assets but should still be reviewed before public launch.
- npm audit reports moderate transitive findings in Expo CLI/config dependencies; forced remediation would downgrade Expo and should not be applied without dependency review.

## Local Preview URL

Local Expo preview: `http://localhost:8081`

If the preview is not running, start it with:

```bash
npm run web
```
