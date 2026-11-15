# 12 — Shadow DOMs

Interact with elements inside **Shadow DOMs** using Playwright. Covers open and closed shadow roots, nested shadow hosts, and real-world widget examples where form fields, counters, and nested UI components live behind a shadow boundary.

---

## 🎯 Learning Objectives

- Understand what Shadow DOM is and how it encapsulates markup.
- Locate and interact with elements inside **open** shadow roots using standard Playwright locators.
- Handle **closed** shadow roots with alternative strategies (e.g., `getByPlaceholder()`).
- Work with **nested** shadow DOMs (shadow host inside another shadow host).
- Use `test.beforeEach()` / `test.afterEach()` for setup and teardown in a shadow DOM context.

---

## 📁 Test Files

| # | File | Topic |
|---|------|-------|
| 251 | [`251_Shadow_DOMs.spec.ts`](./251_Shadow_DOMs.spec.ts) | Shadow DOM login flow, counter increment, and nested shadow-hosted components |

### Scenarios in `251_Shadow_DOMs.spec.ts`

#### 1) Locate Shadow DOM and assert variables
- Opens the shadow DOM widget page.
- Finds `card-account` component via `getByTestId()`.
- Fills email and password inside the shadow-hosted login form.
- Clicks submit and reads the `.status` text.

#### 2) Increment and Decrement buttons
- Locates `counter-cart` widget.
- Clicks the increment button 3 times (initial value is 3).
- Asserts counter value becomes `6`.

#### 3) Nested shadow DOMs
- Finds `nested-host` element using `getByTestId()`.
- Fills email and password in a deeper nested shadow UI via `getByTestId()`.
- Clicks submit and reads the output status from the nested card.

---

## 📝 Tasks / Exercises

| File | Topic |
|------|-------|
| [`Tasks/Shadow-DOM-Exercise.spec.ts`](./Tasks/Shadow-DOM-Exercise.spec.ts) | Practice exercise — open & closed shadow roots on SelectorsHub |

### Exercise: Shadow-DOM-Exercise.spec.ts

- **Target:** [SelectorsHub XPath Practice Page](https://selectorshub.com/xpath-practice-page/)
- Fills a username field (`#kils`) and a pizza field (`#pizza`) inside an open shadow root under `div.jackPart#userName`.
- Fills a password field inside a **closed** shadow root using `getByPlaceholder('enter password')`.
- Uses `beforeEach` / `afterEach` hooks for navigation and cleanup.

---

## 🔑 Key Playwright Concepts

| Concept | Usage |
|---------|-------|
| **`page.getByTestId()`** | Target shadow-host containers by `data-testid` |
| **Normal locator chaining** | `card.locator('input[name="email"]')` — Playwright pierces open shadow roots automatically |
| **`getByPlaceholder()`** | Access elements in closed shadow roots via accessible attributes |
| **`getByRole('button', { name })`** | Locate buttons by accessible name inside shadow DOM |
| **`expect().toHaveText()`** | Assert text content of shadow-hosted elements |
| **`beforeEach` / `afterEach`** | Navigate to URL before each test, close page after |

---

## 🌐 Target Sites

| Site | Used In |
|------|---------|
| [TTA — Shadow DOM Widget](https://app.thetestingacademy.com/playwright/widgets/shadow-dom) | 251 |
| [SelectorsHub — XPath Practice Page](https://selectorshub.com/xpath-practice-page/) | Exercise |

---

## ▶️ Run the Tests

```bash
# Run all tests in this folder
npx playwright test tests/12_Shadow_DOMs/

# Run the main spec file
npx playwright test tests/12_Shadow_DOMs/251_Shadow_DOMs.spec.ts

# Run the exercise
npx playwright test tests/12_Shadow_DOMs/Tasks/Shadow-DOM-Exercise.spec.ts

# Run in headed mode
npx playwright test tests/12_Shadow_DOMs/ --headed
```
