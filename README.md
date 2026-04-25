# 🎭 Playwright Automation Project

An end-to-end test automation project built with [Playwright](https://playwright.dev/) and TypeScript — covering real-world web applications, core testing patterns, and CI/CD integration via GitHub Actions.

---

## 📁 Project Structure

```
Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI pipeline
├── tests/
│   ├── example.spec.ts           # Playwright docs — title & navigation tests
│   ├── 209.spec.ts               # VWO login page title verification
│   ├── 210_Test_Annotation.spec.ts  # Test annotations demo (skip, only, fail, etc.)
│   └── 23_Apr_2026_Automation_cura.spec.ts  # CURA Healthcare login flow
├── playwright.config.ts          # Playwright configuration
├── tsconfig.json                 # TypeScript compiler options
├── package.json                  # Project metadata & dependencies
└── README.md                     # ← You are here
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Playwright](https://playwright.dev/) | ^1.59.1 | Browser automation & testing framework |
| [TypeScript](https://www.typescriptlang.org/) | ESNext (target) | Type-safe test authoring |
| [Node.js](https://nodejs.org/) | LTS | Runtime environment |
| [GitHub Actions](https://docs.github.com/en/actions) | — | Continuous Integration |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later — [download here](https://nodejs.org/)
- **npm** (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd Playwright

# 2. Install dependencies
npm install

# 3. Install Playwright browsers (Chromium, Firefox, WebKit)
npx playwright install --with-deps
```

---

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/example.spec.ts

# Run in headed mode (watch the browser)
npx playwright test --headed

# Run in interactive UI mode
npx playwright test --ui

# Run in debug mode (step through tests)
npx playwright test --debug

# Run with a specific project / browser
npx playwright test --project=chromium
```

---

## 📊 Test Reports

This project uses Playwright's built-in **HTML reporter**.

```bash
# Open the HTML report after a test run
npx playwright show-report
```

Reports are generated in the `playwright-report/` directory and include screenshots, traces, and detailed step-by-step results.

---

## 🧪 Test Overview

### `example.spec.ts`
Starter tests from the Playwright scaffolding:
- Verifies the Playwright docs page title
- Clicks the "Get started" link and asserts the Installation heading

### `209.spec.ts`
- Navigates to [app.vwo.com](https://app.vwo.com) and asserts the login page title

### `210_Test_Annotation.spec.ts`
Demonstrates Playwright's **test annotation** API:
| Annotation | What it does |
|------------|-------------|
| `test.skip()` | Unconditionally skip a test |
| `test.only()` | Focus — run only this test |
| `test.fail()` | Mark a test as expected to fail |
| `test.slow()` | Triple the default timeout |
| `test.skip(condition, reason)` | Conditionally skip at runtime |

### `23_Apr_2026_Automation_cura.spec.ts`
Full login flow on the [CURA Healthcare](https://katalon-demo-cura.herokuapp.com/) demo app:
1. Click "Make Appointment"
2. Fill username & password
3. Submit login
4. Assert redirect to the appointment page

---

## ⚙️ Configuration Highlights

Key settings from [`playwright.config.ts`](playwright.config.ts):

| Setting | Value | Notes |
|---------|-------|-------|
| `testDir` | `./tests` | All spec files live here |
| `fullyParallel` | `true` | Tests run in parallel for speed |
| `reporter` | `html` | Rich HTML report after each run |
| `trace` | `on-first-retry` | Captures traces on failure retries |
| `retries` | `0` (local) / `2` (CI) | Auto-retry on CI only |
| `workers` | `auto` (local) / `1` (CI) | Single worker on CI for stability |
| Browser | Chromium | Desktop Chrome device profile |

---

## 🔄 CI/CD — GitHub Actions

The project includes a pre-configured workflow at [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml) that:

1. **Triggers** on `push` and `pull_request` to `main` / `master`
2. **Runs on** `ubuntu-latest` with Node.js LTS
3. **Steps:**
   - Checkout code
   - Install Node.js dependencies (`npm ci`)
   - Install Playwright browsers
   - Execute the full test suite
4. **Uploads** the HTML report as a build artifact (retained for 30 days)

---

## 🔑 Key Playwright Concepts Covered

- ✅ **Navigation** — `page.goto()`
- ✅ **Assertions** — `toHaveTitle()`, `toHaveURL()`, `toBeVisible()`
- ✅ **Locators** — `page.locator()`, `page.getByRole()`
- ✅ **Actions** — `click()`, `fill()`
- ✅ **Test Annotations** — `skip`, `only`, `fail`, `slow`
- ✅ **HTML Reporting** — auto-generated after each run
- ✅ **CI Integration** — GitHub Actions pipeline

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Test Assertions](https://playwright.dev/docs/test-assertions)
- [Locators Guide](https://playwright.dev/docs/locators)
- [Test Annotations](https://playwright.dev/docs/test-annotations)
- [CI/CD Integration](https://playwright.dev/docs/ci-intro)
- [Trace Viewer](https://playwright.dev/docs/trace-viewer)

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
