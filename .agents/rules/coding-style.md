---
trigger: always_on
---

# Coding Style

## CLI & Tooling

- **Package Manager**: Always use **`bun`** (e.g., `bun install`, `bun <script>`). Do not use `npm` or `yarn`.
- **TypeScript Execution**: Use **`tsx`** for running script files directly. Do not use `ts-node`.
- **Project Scripts**: Prefer running predefined scripts from `package.json` (e.g., `bun fix`, `bun check`).

## General Formatting

Common standards are governed by:

- **Prettier**: Rules in `.prettierrc`. Apply via `bun format`.
- **ESLint Stylistic**: Rules in `eslint.config.mjs`.
  - Use `bun lint` for static analysis.
  - Use `bun fix` for automated fixes.
- **Imports**: Use the `@/` alias for absolute project root imports.

## TypeScript Standard

- **Strict Typing**: No `any` (use `unknown` if the type is truly dynamic or unknown). Use strongly typed structures for mappings and events.
- **Declarations**: Prefer `type` over `interface`.
- **Returns**: Always explicitly define return types for functions.
