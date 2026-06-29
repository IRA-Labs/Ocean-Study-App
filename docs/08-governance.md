# Repository Governance

## Public Repository Settings

- Visibility: public.
- Issues: enabled.
- Merge strategy: squash merge only.
- Delete branch on merge: enabled.
- Topics: `react-native`, `expo`, `ocean`, `education`, `marine-science`.

## Branch Protection Target

The `main` branch should require:

- Pull request review before merge.
- Passing `CI / Quality gates`.
- Up-to-date branches before merge.
- Conversation resolution before merge.
- Admin enforcement when the organization is ready for it.

## Current Branch Protection

Configured on June 29, 2026:

- Requires one approving pull request review.
- Dismisses stale approvals after new commits.
- Requires approval from someone other than the most recent pusher.
- Requires `Quality gates` to pass.
- Requires branches to be up to date before merge.
- Requires linear history.
- Requires conversation resolution.
- Blocks force pushes and branch deletion.
- Does not currently enforce admin restrictions or code owner review, so the initial maintainer can complete setup while IRA Labs formalizes reviewer teams.

## Ownership

Initial CODEOWNERS points to the current maintainer account. Replace it with IRA Labs teams when maintainers, design reviewers, content reviewers, and QA owners are formalized in GitHub.

## Issue Triage

- `bug`: user-visible defect or broken workflow.
- `enhancement`: product or engineering improvement.
- `content`: educational claim, glossary, source, quiz, or media review.
- `qa`: manual verification, device QA, accessibility, or release checklist work.
- `documentation`: README, docs, templates, governance, or setup updates.
