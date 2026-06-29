# Design System

## Visual Direction

Ocean Study should feel calm, credible, modern, and exploratory. The UI uses deep teal, aqua, crisp white surfaces, and small warm accents inspired by research lights and coral.

## Core Tokens

| Token | Purpose |
| --- | --- |
| `background` | App canvas. |
| `card` | Primary readable content containers. |
| `cardMuted` | Secondary panels and feedback states. |
| `tint` | Primary action and educational emphasis. |
| `accent` | Highlights and quiz emphasis. |
| `success` / `danger` | Quiz and validation feedback. |
| `border` | Quiet structure between surfaces. |

## UX Patterns

- Use real app content on the first screen, not a landing page.
- Keep cards compact with 8px radius.
- Prefer source-aware summaries over long unverified content.
- Use image-led discovery only when text remains readable and accessible.
- Use pressable chips for filters and clear feedback for quiz answers.
- Keep touch targets at least 42px high where practical.

## Accessibility Baseline

- Maintain readable contrast between text and surface colors.
- Avoid text embedded in images.
- Provide accessible labels for inputs and meaningful pressable actions.
- Keep dynamic content from shifting layout abruptly.
- Support light and dark mode through centralized theme tokens.
