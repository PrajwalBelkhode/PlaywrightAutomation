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
│   ├── 01_Basics/
│   │   ├── 209.spec.ts           # VWO login page title verification
│   │   └── 210_Test_Annotation.spec.ts  # Test annotations demo (skip, only, fail, etc.)
│   ├── 23_Apr_2026_Automation_cura.spec.ts   # CURA Healthcare login flow
│   ├── 25_Apr_2026_VWO_login.spec.ts         # VWO login with valid/invalid credentials
│   ├── 28_Apr_2026_VWO_Free_Trial.spec.ts    # VWO free trial signup flow
│   ├── Cura-Appointment.spec.ts              # Cura Healthcare appointment booking
│   ├── Simforthings-dev-login.spec.ts        # Sample login flow for a dev site
│   └── Allure-Reports/
│       ├── AllureReport.spec.ts      # Allure reporting demo (VWO login)
│       ├── SaveSession.spec.ts       # Session storage handling with Allure
│       └── TestVWO.spec.ts           # Additional VWO test with Allure steps
├── playwright.config.ts          # Playwright configuration
├── tsconfig.json                 # TypeScript compiler options
├── package.json                  # Project metadata & dependencies
└── README.md                     # ← You are here
```

---

## 🛠️ Tech Stack

| Technology          | Version        | Purpose                                 |
|---------------------|----------------|-----------------------------------------|
| [Playwright](https://playwright.dev/) | ^1.60.0        | Browser automation & testing framework |
| [TypeScript](https://www.typescriptlang.org/) | ESNext (target) | Type‑safe test authoring |
| [Node.js](https://nodejs.org/) | LTS            | Runtime environment                     |
| [GitHub Actions](https://docs.github.com/en/actions) | — | Continuous Integration                     |
| [Allure Playwright](https://www.npmjs.com/package/allure-playwright) | ^3.9.0 | Rich Allure reports (HTML & JSON) |
| [Allure JS Commons](https://www.npmjs.com/package/allure-js-commons) | ^3.9.0 | Allure step/attachment helpers |

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

# (Optional) Install Allure command line to generate reports locally
npm i -g allure-commandline   # or use Scoop/Chocolatey/Homebrew
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

# Run against a specific project/browser
npx playwright test --project=chromium

# Generate and serve an Allure report (after tests have created allure-results/)
npx allure serve allure-results
```

---

## 📊 Test Reports

**HTML Report** – Built‑in Playwright reporter  
```bash
npx playwright show-report
```
Outputs to `playwright-report/` with screenshots, traces, and step‑by‑step details.

**Allure Report** – Generated via the `allure-playwright` reporter  
After a test run, JSON results are placed in `allure-results/`.  
View with: `npx allure serve allure-results`

Both reports are uploaded as artifacts in the GitHub Actions workflow (see below).

---

## 🧪 Test Overview

| Test File                                      | What it Demonstrates                                                                                     |
|------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `example.spec.ts`                              | Basic navigation & title assertions from the Playwright docs                                             |
| `01_Basics/209.spec.ts`                        | Verifies the login page title of [app.vwo.com](https://app.vwo.com)                                      |
| `01_Basics/210_Test_Annotation.spec.ts`        | Showcases Playwright test annotations: `skip`, `only`, `fail`, `slow`, conditional `skip`               |
| `23_Apr_2026_Automation_cura.spec.ts`          | Full login flow on the [CURA Healthcare demo](https://katalon-demo-cura.herokuapp.com/)                |
| `25_Apr_2026_VWO_login.spec.ts`                | Valid & invalid login attempts on VWO with assertions                                                   |
| `28_Apr_2026_VWO_Free_Trial.spec.ts`           | End‑to‑end free‑trial signup flow on VWO                                                                |
| `Cura-Appointment.spec.ts`                     | Booking an appointment on the CURA demo site                                                            |
| `Simforthings-dev-login.spec.ts`               | Sample login flow for a custom development site                                                         |
| `Allure-Reports/AllureReport.spec.ts`          | Example of attaching Allure steps, attachments, and epic/feature/story tags                             |
| `Allure-Reports/SaveSession.spec.ts`           | Demonstrates storing/retrieving session storage while logging Allure steps                              |
| `Allure-Reports/TestVWO.spec.ts`               | Another VWO test illustrating Allure nesting and severity levels                                        |

---

## ⚙️ Configuration Highlights

Key settings from [`playwright.config.ts`](playwright.config.ts):

| Setting                | Value                              | Notes                                                            |
|------------------------|------------------------------------|------------------------------------------------------------------|
| `testDir`              | `./tests`                          | All spec files reside here                                       |
| `fullyParallel`        | `true`                             | Tests run in parallel for speed                                  |
| `forbidOnly`           | `!!process.env.CI`                 | Fails CI if `test.only` is left behind                           |
| `retries`              | `process.env.CI ? 2 : 0`           | Auto‑retry on CI only                                            |
| `workers`              | `process.env.CI ? 1 : undefined`   | Single worker on CI for stability; local uses all cores          |
| `reporter`             | `[['html'], ['allure-playwright']]`| Dual reporting: HTML + Allure                                    |
| `use.trace`            | `'on'`                             | Capture trace on every test (useful for debugging)               |
| Projects               | Chromium (Desktop Chrome)          | Additional browsers (Firefox, WebKit, mobile) are commented out   |

---

## 🔄 CI/CD — GitHub Actions

The workflow (`.github/workflows/playwright.yml`) runs on every `push` and `pull_request` to `main`/`master`:

1. Checkout code  
2. Setup Node.js LTS  
3. Install dependencies (`npm ci`)  
4. Install Playwright browsers  
5. Execute the full test suite  
6. Upload both **HTML** and **Allure** results as build artifacts (retained 30 days)

---

## 🔑 Key Playwright Concepts Covered

- ✅ **Navigation** — `page.goto()`  
- ✅ **Assertions** — `toHaveTitle()`, `toHaveURL()`, `toBeVisible()`  
- ✅ **Locators** — `page.locator()`, `page.getByRole()`  
- ✅ **Actions** — `click()`, `fill()`  
- ✅ **Test Annotations** — `skip`, `only`, `fail`, `slow`  
- ✅ **HTML Reporting** — auto‑generated after each run  
- ✅ **CI Integration** — GitHub Actions pipeline  

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)  
- [Writing Tests](https://playwright.dev/docs/writing-tests)  
- [Test Assertions](https://playwright.dev/docs/test-assertions)  
- [Locators Guide](https://playwright.dev/docs/locators)  
- [Test Annotations](https://playwright.dev/docs/test-annotations)  
- [Trace Viewer](https://playwright.dev/docs/trace-viewer)  
- [CI/CD Integration](https://playwright.dev/docs/ci-intro)  
- [Allure Report Documentation](https://allurereport.org/)  
- [Allure Playwright Reporter](https://www.npmjs.com/package/allure-playwright)  

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

--- 

*Feel free to open issues or pull requests if you have suggestions or find bugs!*