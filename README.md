# skill-test

Tiny pricing-utilities library. Exists only as a scratch target for testing the
`om-fix` skill's Intention-Learning + Red/Green regression gate (open-mercato/skills
PR #94/#95) end to end, on a real GitHub issue, in a real (if minimal) TypeScript
project.

- `src/currency.ts` — formatting/tax helpers, already covered by tests.
- `src/discount.ts` — `applyDiscount` has a deliberately seeded bug and **no test
  yet**, so any fix must derive the correct behavior from the issue/docstring
  rather than from an existing (possibly-buggy) test.

```bash
npm install
npm run typecheck
npm test
```
