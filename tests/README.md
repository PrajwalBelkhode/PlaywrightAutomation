# 🎭 Playwright Test Suite

This directory contains automated end-to-end tests built with [Playwright](https://playwright.dev/) — a modern, reliable framework for browser automation and testing.

---

## 📁 Test Files

| File | Description |
|------|-------------|
| `example.spec.ts` | Starter tests that verify the Playwright docs site — checks the page title and navigates the "Get started" link. |
| `209.spec.ts` | Verifies the title of the [VWO](https://app.vwo.com) login page. |
| `210_Test_Annotation.spec.ts` | Demonstrates Playwright **test annotations** — `skip`, `only`, `fail`, `slow`, and conditional skipping. |
| `23_Apr_2026_Automation_cura.spec.ts` | An end-to-end login flow on the [CURA Healthcare](https://katalon-demo-cura.herokuapp.com/) demo app using locators like `fill()` and `click()`. |

---

## 📂 Section Directories

| # | Directory | Topics Covered |
|---|-----------|----------------|
| 01 | [`01_Basics`](./01_Basics) | Playwright basics and fundamentals |
| 02 | [`02_First_Tests`](./02_First_Tests) | Writing your first Playwright tests |
| 03 | [`03_Locators_Commands`](./03_Locators_Commands) | Locator strategies and commands |
| 04 | [`04_Session_Storage`](./04_Session_Storage) | Session and local storage handling |
| 05 | [`05_Allure-Reports`](./05_Allure-Reports) | Allure reporting integration |
| 06 | [`06_Multiple_Elements`](./06_Multiple_Elements) | Handling multiple elements |
| 07 | [`07_WebTables`](./07_WebTables) | Web table interactions |
| 08 | [`08_Frames_iFrames`](./08_Frames_iFrames) | Frames and iFrames handling |
| 09 | [`09_Keyboard_Hover_Drag_Drop`](./09_Keyboard_Hover_Drag_Drop) | Keyboard events, hover, drag & drop, right-click |
| 10 | [`10_JS_Alerts`](./10_JS_Alerts) | JavaScript alerts, confirms, and prompts |
| 11 | [`11_Handle_SVG`](./11_Handle_SVG) | SVG element interaction and data extraction |

---

## ⚙️ Configuration

Tests are configured via [`playwright.config.ts`](../playwright.config.ts) at the project root. Key settings:

| Setting | Value |
|---------|-------|
| Test directory | `./tests` |
| Browser | Chromium (Desktop Chrome) |
| Parallel execution | Enabled (`fullyParallel: true`) |
| Reporter | HTML |
| Trace collection | On first retry |
| Retries (CI) | 2 |
| Retries (local) | 0 |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Install project dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/example.spec.ts

# Run tests in headed mode (see the browser)
npx playwright test --headed

# Run tests in UI mode (interactive)
npx playwright test --ui

# Run tests in debug mode
npx playwright test --debug
```

---

## 📊 Viewing Reports

After a test run, an HTML report is generated automatically:

```bash
npx playwright show-report
```

Reports are saved in the `playwright-report/` directory.

---

## 🏷️ Test Annotations Reference

The `210_Test_Annotation.spec.ts` file showcases the following annotations:

| Annotation | Purpose |
|------------|---------|
| `test.skip()` | Skip a test entirely |
| `test.only()` | Run only the marked test(s) |
| `test.fail()` | Mark a test as expected to fail |
| `test.slow()` | Triple the test timeout |
| `test.skip(condition, reason)` | Conditionally skip based on runtime info (e.g., browser) |

---

## 🔑 Key Concepts Used

- **Assertions** — `expect(page).toHaveTitle()`, `expect(page).toHaveURL()`, `toBeVisible()`
- **Locators** — `page.locator()`, `page.getByRole()`
- **Actions** — `page.goto()`, `click()`, `fill()`
- **Test Annotations** — `skip`, `only`, `fail`, conditional skip

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Test Assertions](https://playwright.dev/docs/test-assertions)
- [Locators Guide](https://playwright.dev/docs/locators)
- [Test Annotations](https://playwright.dev/docs/test-annotations)
- [Configuration Reference](https://playwright.dev/docs/test-configuration)
