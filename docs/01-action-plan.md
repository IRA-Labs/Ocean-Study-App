# Ocean Study App Action Plan

## Project Summary

Ocean Study App is a React Native Expo mobile learning product for people interested in ocean study. The learner-facing app focuses entirely on ocean knowledge: topic guides, long-form lessons, source-aware facts, glossary terms, quizzes, saved reading, and image-rich exploration.

## Working Principles

- Build as a public-ready learning app: polished, credible, maintainable, and safe to show publicly.
- Use React Native, Expo, TypeScript, and a documented architecture.
- Prefer reusable components, accessible UI, and source-traceable educational content.
- Keep content data local unless a backend is explicitly approved later.
- Treat quality as part of delivery: linting, tests, accessibility checks, device checks, and documentation.
- Do not commit secrets, private API keys, private research, or unlicensed media.

## Roles

| Role | Responsibility |
| --- | --- |
| Project Manager | Scope, milestones, risk tracking, delivery sequencing, documentation hygiene. |
| Tech Lead | Architecture, standards, code review criteria, dependency decisions. |
| Senior Software Engineer | Implementation, integration, performance, maintainability. |
| UI/UX Designer | Information architecture, visual system, flows, interaction model, accessibility. |
| QA Lead | Test strategy, acceptance criteria, defect tracking, release readiness. |

## Status Legend

| Status | Meaning |
| --- | --- |
| Not Started | No implementation or documentation work has begun. |
| In Progress | Work has started and is actively changing. |
| Blocked | Work cannot continue without a decision, asset, credential, or dependency. |
| In Review | Work is complete enough for validation or stakeholder review. |
| Done | Acceptance criteria are met and verification is recorded. |

## Action Tracker

### Phase 0: Repository and Governance Setup

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-000 | Done | Project Manager | Create the initial documentation folder and action plan. | `docs/README.md`, `docs/01-action-plan.md` | Docs folder exists and includes a trackable action plan. | File review. |
| A-001 | Done | Tech Lead | Initialize or connect the local workspace to the IRA Labs repository. | Git repository with correct remote. | `origin` points to `https://github.com/IRA-Labs/Ocean-Study-App.git`. | `git remote -v`. |
| A-002 | Done | Tech Lead | Define branch strategy for release development. | Branch policy note in docs. | Default branch, feature branch naming, PR rules, and branch protection target are documented. | Docs review. |
| A-003 | Done | Project Manager | Define milestone schedule for release delivery. | Milestone section in docs. | MVP, polish, QA, and release-readiness milestones are dated or sequenced. | Docs review. |
| A-004 | Done | Tech Lead | Add repository standards. | `README.md`, `.gitignore`, contribution notes. | Project setup, commands, and contribution expectations are clear. | File review. |
| A-005 | Done | QA Lead | Define definition of done. | Definition of done section in docs. | Each feature requires implementation, tests/checks, accessibility review, and docs update where relevant. | Docs review. |
| A-006 | Done | Project Manager | Create risk register. | Risk section or risk doc. | Product, technical, content, schedule, and licensing risks are tracked. | Docs review. |

### Phase 1: Product Discovery and Scope

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-010 | Done | Project Manager | Define target user groups. | Personas or audience notes. | At least three user types are documented, such as student, hobby learner, educator, and explorer. | Docs review. |
| A-011 | Done | UI/UX Designer | Define primary user journeys. | Journey map. | Home discovery, topic browsing, article learning, quiz interaction, bookmark flow, and search flow are covered. | Docs review. |
| A-012 | Done | Project Manager | Define MVP feature scope. | MVP scope document. | Features are grouped into must-have, should-have, and later. | Stakeholder review. |
| A-013 | Done | Project Manager | Define product success criteria. | Success metrics list. | Criteria include usability, visual polish, performance, and educational credibility. | Docs review. |
| A-014 | Done | QA Lead | Define acceptance criteria for each MVP feature. | Feature acceptance checklist. | Every MVP feature has measurable acceptance criteria. | QA review. |
| A-015 | Done | Project Manager | Define out-of-scope items. | Scope boundary note. | Backend auth, paid APIs, live community features, or other deferred items are explicitly documented if not included. | Docs review. |

### Phase 2: Information Architecture and Content Model

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-020 | Done | UI/UX Designer | Design content taxonomy. | Topic/category model. | Ocean zones, marine life, climate, conservation, exploration, and facts are organized clearly. | Docs review. |
| A-021 | Done | Senior Software Engineer | Define local knowledge-base data schema. | TypeScript data model. | Articles, categories, media, quizzes, facts, and references have typed structures. | Code review. |
| A-022 | Done | Project Manager | Define content sourcing rules. | Content guidelines. | Facts must be source-aware, learner-safe, and free from unsupported claims. | Docs review. |
| A-023 | Done | Senior Software Engineer | Create seed content plan. | Seed content checklist. | Initial content covers all major categories with enough depth for product browsing. | Content review. |
| A-024 | Done | QA Lead | Define content QA checklist. | Content review checklist. | Checks include spelling, source links, age appropriateness, claim quality, and image license safety. | QA review. |

### Phase 3: UX and Visual Design

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-030 | Done | UI/UX Designer | Define visual direction. | Design brief. | Ocean theme uses modern colors, readable contrast, image-rich surfaces, and restrained decorative effects. | Design review. |
| A-031 | Done | UI/UX Designer | Define app navigation structure. | Navigation map. | Tabs, stacks, detail pages, search, and saved content flow are mapped. | Design review. |
| A-032 | Done | UI/UX Designer | Define design tokens. | Colors, spacing, typography, radius, shadows. | Tokens are reusable and accessible. | Code/design review. |
| A-033 | Done | UI/UX Designer | Design core screens. | Screen specs or wireframes. | Home, Explore, Topic Detail, Article Detail, Quiz, Saved, Search, and Settings are specified. | Design review. |
| A-034 | Done | UI/UX Designer | Define interaction patterns. | Interaction notes. | Cards, carousels, filters, quizzes, progress, animations, and empty states are covered. | Design review. |
| A-035 | Done | QA Lead | Define accessibility requirements. | Accessibility checklist. | Text contrast, touch targets, screen reader labels, reduced motion, and dynamic text are covered. | QA review. |

### Phase 4: Technical Architecture

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-040 | Done | Tech Lead | Choose Expo app template and package manager. | Architecture decision note. | Template supports TypeScript, routing, linting, tests, and future growth. | Docs review. |
| A-041 | Done | Tech Lead | Define folder structure. | Architecture document. | `app`, `src/components`, `src/data`, `src/features`, `src/theme`, `src/utils`, and tests are planned. | Docs review. |
| A-042 | Done | Tech Lead | Define navigation architecture. | Expo Router or React Navigation decision. | Routing choice is documented with reasons. | Docs review. |
| A-043 | Done | Tech Lead | Define state management approach. | State decision note. | Local state, derived state, and persistence needs are clear. | Docs review. |
| A-044 | Done | Senior Software Engineer | Define image and asset strategy. | Asset strategy note. | Assets are optimized, credited where needed, and safe for public distribution. | Docs/code review. |
| A-045 | Done | Tech Lead | Define performance standards. | Performance budget. | App startup, list rendering, image loading, and animation expectations are documented. | QA review. |
| A-046 | Done | Tech Lead | Define security and privacy baseline. | Security checklist. | No secrets, no unnecessary tracking, safe external links, and public-safe data are required. | Security review. |

### Phase 5: Project Scaffolding

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-050 | Done | Senior Software Engineer | Scaffold Expo React Native project. | Expo app files. | App runs locally with TypeScript. | `npm start` or Expo start verification. |
| A-051 | Done | Senior Software Engineer | Add linting and formatting tools. | ESLint/Prettier configuration. | Commands exist and run successfully. | `npm run lint`. |
| A-052 | Done | Senior Software Engineer | Add test framework. | Jest or Expo-compatible test setup. | At least one sample test runs. | `npm test`. |
| A-053 | Done | Senior Software Engineer | Add path aliases if useful. | TypeScript config. | Imports remain readable and build-compatible. | TypeScript check. |
| A-054 | Done | Tech Lead | Add environment variable policy. | `.env.example` and docs. | Required variables are documented; no real secrets are committed. | File review. |
| A-055 | Done | Tech Lead | Add CI workflow plan or implementation. | GitHub Actions workflow. | Install, lint, test, type-check, audit threshold, web export, and public repo governance are covered. | CI run. |

### Phase 6: Core App Foundation

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-060 | Done | Senior Software Engineer | Implement theme system. | Theme tokens and helpers. | Colors, typography, spacing, and reusable styles are centralized. | Code review. |
| A-061 | Done | Senior Software Engineer | Implement base layout components. | Screen, section, card, header, button components. | Components are reusable, accessible, and consistent. | Code review. |
| A-062 | Done | Senior Software Engineer | Implement app navigation shell. | Tabs/stacks. | Main screens are reachable and back navigation works. | Manual QA. |
| A-063 | Done | Senior Software Engineer | Implement local data layer. | Typed local content modules. | Content can be queried by category, article, quiz, and saved item. | Unit tests. |
| A-064 | Done | Senior Software Engineer | Implement persistence for saved content. | Bookmark storage. | Saved items persist across app restarts. | Manual QA/test. |
| A-065 | Done | QA Lead | Add smoke test checklist. | Smoke test doc. | Launch, navigation, content load, search, quiz, and saved flow are covered. | QA review. |

### Phase 7: Feature Implementation

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-070 | Done | Senior Software Engineer | Build Home screen. | Home feature. | Shows featured topic, daily fact, topic shortcuts, and visual ocean content. | Manual QA. |
| A-071 | Done | Senior Software Engineer | Build Explore screen. | Category browsing. | Users can browse knowledge categories and featured collections. | Manual QA. |
| A-072 | Done | Senior Software Engineer | Build Topic Detail screen. | Topic detail feature. | Topic intro, articles, facts, media, and quiz entry are visible. | Manual QA. |
| A-073 | Done | Senior Software Engineer | Build Article Detail screen. | Article reader. | Rich content, images, references, reading metadata, and save action are present. | Manual QA. |
| A-074 | Done | Senior Software Engineer | Build Search screen. | Search feature. | Users can search articles, facts, and categories with empty states. | Manual QA/unit tests. |
| A-075 | Done | Senior Software Engineer | Build Quiz feature. | Interactive quiz. | Users answer questions, see feedback, and get a score summary. | Manual QA/unit tests. |
| A-076 | Done | Senior Software Engineer | Build Saved screen. | Bookmark list. | Saved articles appear, can be opened, and can be removed. | Manual QA. |
| A-077 | Done | Senior Software Engineer | Build Ocean Atlas screen. | Atlas reference area. | Learning modules, essential facts, glossary terms, and source-aware study support are available. | Manual QA. |
| A-078 | Done | Senior Software Engineer | Add loading, empty, and error states. | State components. | User-facing states are clear and visually consistent. | Manual QA. |

### Phase 8: Content and Media

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-080 | Done | Project Manager | Approve learning content categories. | Final category list. | Categories match MVP scope and app navigation. | Stakeholder review. |
| A-081 | Done | Senior Software Engineer | Add seed article content. | Local article dataset. | Each category has release-ready article content. | Content QA. |
| A-082 | Done | Senior Software Engineer | Add facts and glossary entries. | Local facts/glossary dataset. | Facts are concise, accurate, and source-aware. | Content QA. |
| A-083 | Done | Senior Software Engineer | Add quiz questions. | Local quiz dataset. | Each major category has questions, answers, and explanations. | QA review. |
| A-084 | Done | UI/UX Designer | Add image assets. | App image set. | Images fit the ocean theme, load correctly, and have safe licensing or generated provenance. | Asset review. |
| A-085 | In Review | QA Lead | Verify content quality. | Content QA report. | No placeholder text, broken references, spelling issues, or unsupported claims remain. | QA review. |

### Phase 9: Polish, Performance, and Accessibility

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-090 | Done | UI/UX Designer | Polish visual hierarchy. | Refined UI. | Screens feel modern, ocean-themed, readable, and consistent. | Design QA. |
| A-091 | Not Started | Senior Software Engineer | Optimize list rendering. | Performance improvements. | Long content lists remain smooth on target devices. | Manual performance check. |
| A-092 | In Progress | Senior Software Engineer | Optimize image loading. | Optimized media usage. | Images display quickly and do not distort layout. | Device QA. |
| A-093 | In Progress | QA Lead | Run accessibility pass. | Accessibility fixes. | Touch targets, labels, contrast, and dynamic text pass baseline checks. | Accessibility checklist. |
| A-094 | Not Started | QA Lead | Run responsive device checks. | Device QA notes. | App works on small phone, large phone, and tablet-sized Expo preview where applicable. | Manual QA. |
| A-095 | In Progress | Tech Lead | Review dependency footprint. | Dependency review. | No unnecessary, risky, or unmaintained dependencies remain. | Package review. |

### Phase 10: Testing and Quality Gates

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-100 | Done | QA Lead | Write test plan. | QA test plan. | Functional, visual, content, accessibility, and regression areas are listed. | QA review. |
| A-101 | Done | Senior Software Engineer | Add unit tests for data utilities. | Unit test files. | Search/filter/bookmark logic is covered. | `npm test`. |
| A-102 | Not Started | Senior Software Engineer | Add component tests for key UI. | Component tests. | Core reusable components render expected states. | `npm test`. |
| A-103 | Not Started | QA Lead | Run manual regression test. | Regression report. | All MVP flows pass or defects are tracked. | QA signoff. |
| A-104 | Done | Tech Lead | Run static quality checks. | Lint/type/test results. | Lint, type check, and tests pass. | Command output. |
| A-105 | In Review | Project Manager | Track and close release blockers. | Blocker list. | No critical or high-priority release blockers remain. | Release review. |

### Phase 11: Documentation Completion

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-110 | Done | Project Manager | Write product overview. | Product docs. | Purpose, audience, MVP features, and release positioning are documented. | Docs review. |
| A-111 | Done | Tech Lead | Write architecture documentation. | Architecture docs. | Folder structure, routing, data model, state, and dependency decisions are documented. | Docs review. |
| A-112 | Done | UI/UX Designer | Write design system documentation. | Design docs. | Tokens, components, interaction patterns, and accessibility rules are documented. | Docs review. |
| A-113 | Done | QA Lead | Write QA documentation. | QA docs. | Test strategy, smoke tests, regression checklist, and known issues are documented. | QA review. |
| A-114 | Done | Senior Software Engineer | Write developer setup guide. | Setup docs. | Install, run, test, build, and troubleshooting steps are clear. | Fresh setup verification. |
| A-115 | Done | Project Manager | Write release notes. | Release notes. | Scope, limitations, known issues, and next steps are clear. | Release review. |

### Phase 12: Demo Release Readiness

| ID | Status | Owner Role | Action | Deliverable | Acceptance Criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| A-120 | In Review | Tech Lead | Prepare production build settings. | Build configuration. | Expo config is correct for a public learning release. | Build review. |
| A-121 | Done | Senior Software Engineer | Run final build. | Release build artifact or Expo preview. | Build completes successfully. | Build command. |
| A-122 | Not Started | QA Lead | Run final release QA. | QA signoff. | Critical user journeys pass on target devices. | QA report. |
| A-123 | Done | Project Manager | Finalize public repository presentation. | Polished repository README and docs. | Public visitors can understand the project and run it. | Repository review. |
| A-124 | Done | Project Manager | Create product backlog. | Backlog document. | Future features and technical improvements are prioritized. | Docs review. |
| A-125 | Not Started | Project Manager | Approve learning app release. | Release approval note. | Product, engineering, design, and QA criteria are satisfied. | Release signoff. |

## Initial MVP Proposal

| Area | MVP Feature |
| --- | --- |
| Knowledge Base | Ocean categories, article detail pages, source-aware facts, glossary-style explanations. |
| Discovery | Home dashboard, featured topic, daily ocean fact, explore categories. |
| Interactivity | Quiz flow, saved articles, topic filters, search. |
| Design | Ocean-based theme, image-rich cards, modern icons, accessible typography. |
| Quality | TypeScript, linting, tests for core logic, manual QA checklist, documentation. |

## Proposed Milestones

| Milestone | Target Outcome | Exit Criteria |
| --- | --- | --- |
| M1: Foundation | Repo, Expo app, standards, architecture, design direction. | App launches and docs define the build direction. |
| M2: Core Experience | Navigation, content model, home, explore, article screens. | Users can browse and read seed ocean content. |
| M3: Interactive Learning | Search, saved content, quiz, facts/glossary. | Users can interact with learning flows. |
| M4: Polish and QA | Visual polish, accessibility, performance, tests, docs. | Demo is stable and presentation-ready. |
| M5: Public Release | Final build, release notes, repository presentation. | Public repo is ready for stakeholders and learners. |

## Risk Register

| Risk | Impact | Mitigation | Status |
| --- | --- | --- | --- |
| Unverified educational claims | Public credibility risk | Use source-aware content guidelines and content QA. | Open |
| Unlicensed images | Legal/reputation risk | Use generated assets, public-domain assets, or properly licensed assets. | Open |
| Scope creep | Schedule risk | Maintain MVP scope and later backlog. | Open |
| Overly heavy UI | Performance risk | Use performance budget and device checks. | Open |
| Inconsistent design | Product quality risk | Define design tokens and reusable components early. | Open |
| Missing QA coverage | Demo stability risk | Add test plan, smoke checklist, and regression checklist. | Open |

## Definition of Done

An action can be marked `Done` only when:

- The deliverable exists in code or documentation.
- Acceptance criteria are satisfied.
- Required verification has been run or reviewed.
- Public release safety has been considered.
- Related documentation is updated when the action changes product, architecture, design, QA, or setup behavior.

## Immediate Next Actions

| Priority | Action ID | Next Step |
| --- | --- | --- |
| 1 | A-085 | Complete human content QA and subject matter review. |
| 2 | A-093 | Run accessibility pass on device previews. |
| 3 | A-094 | Run responsive device checks on phone and tablet viewports. |
| 4 | A-102 | Add component tests for key UI states. |
| 5 | A-125 | Approve release after stakeholder review. |
