# 12 — Shadow DOMs

This section demonstrates how to interact with elements inside Shadow DOMs using Playwright. It focuses on real widget examples where form fields, counters, and nested UI components are rendered behind a shadow root.

---

## Test File

| # | File | Topic |
|---|------|-------|
| 251 | `251_Shadow_DOMs.spec.ts` | Shadow DOM login flow, counter actions, and nested shadow-hosted components |

---

## Target URL

`https://app.thetestingacademy.com/playwright/widgets/shadow-dom`

---

## Scenarios Covered

### 1) Locate Shadow DOM and assert variables
- Opens the shadow DOM widget page
- Finds the `card-account` component by `data-testid`
- Fills email and password inside the shadow-hosted login form
- Clicks the submit button
- Reads the `.status` text after interaction

### 2) Increment and Decrement buttons
- Locates the `counter-cart` widget
- Clicks the increment button multiple times
- Verifies the counter value becomes `6`

### 3) Nested shadow DOMs
- Finds the nested host element using `data-testid`
- Fills values in a deeper nested shadow UI
- Clicks the submit action
- Reads the output status from the nested card

---

## Key Playwright Concepts

- `page.getByTestId()` to target widget containers
- Interaction with elements inside shadow roots using normal locator chaining
- `expect(locator).toHaveText()` for validation
- `test.beforeEach()` and `test.afterEach()` for setup/cleanup

---

## Run the Tests

### Run all tests in this folder

```bash
npx playwright test tests/12_Shadow_DOMs
```

### Run the specific spec file

```bash
npx playwright test tests/12_Shadow_DOMs/251_Shadow_DOMs.spec.ts
```

### Run in headed mode

```bash
npx playwright test tests/12_Shadow_DOMs --headed
```
