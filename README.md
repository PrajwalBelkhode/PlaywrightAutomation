# 🎭 Playwright Automation Project

An end-to-end test automation project built with [Playwright](https://playwright.dev/) and TypeScript — covering real-world web applications, core testing patterns, advanced selectors, session storage, and CI/CD integration via GitHub Actions.

---

## 📁 Project Structure

```
Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI pipeline
├── tests/
│   ├── 01_Basics/                # Basic tests and test annotations
│   ├── 02_First_Tests/           # Browser contexts, multiple pages, and context reuse
│   │   └── Tasks/                # Tasks on shared contexts and multiple pages
│   ├── 03_Locators_Commands/     # CSS, XPath, GetByRole, cookies, and sequential keypresses
│   │   └── Tasks/                # Practice automation tasks (CURA & VWO)
│   ├── 04_Session_Storage/       # Session storage capture and authentication reuse
│   ├── 05_Allure-Reports/        # Rich Allure reports (HTML & JSON) with metadata steps
│   │   └── Tasks/                # Bank box and bank automation tests
│   ├── 23_Apr_2026_Automation_cura.spec.ts
│   ├── 25_Apr_2026_VWO_login.spec.ts
│   ├── 28_Apr_2026_VWO_Free_Trial.spec.ts
│   ├── Cura-Appointment.spec.ts
│   ├── Simforthings-dev-login.spec.ts
│   └── example.spec.ts           # Playwright default starter spec
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

| Test File / Directory | Description / Demonstrates |
|----------------------|----------------------------|
| **`tests/01_Basics/`** | Basic tests and annotations |
| ├─ `209.spec.ts` | Title verification of VWO Login page |
| └─ `210_Test_Annotation.spec.ts` | Test annotations: `skip`, `only`, `fail`, `slow` |
| **`tests/02_First_Tests/`** | Browser context and multi-page scenarios |
| ├─ `211_First_runnning_Test.spec.ts` | Basic browser startup and flow |
| ├─ `212_Browser_Context_Pages.spec.ts` | Independent browser contexts |
| ├─ `213_Multi_Context.spec.ts` | Multiple contexts within a single browser instance |
| ├─ `214_Multiple_Page.spec.ts` | Managing multiple pages simultaneously |
| ├─ `215_TEST_PW.spec.ts` | General Playwright test sandbox |
| ├─ `216_Manual_context.spec.ts` | Manual page/context construction |
| ├─ `217_Manual_context_options.spec.ts` | Context setup with custom viewports and options |
| ├─ `218_Context_reuse.spec.ts` | Reusing context across page actions |
| └─ `Tasks/` | Shared contexts, single context multiple pages practice |
| **`tests/03_Locators_Commands/`** | Advanced locators and action commands |
| ├─ `219_Commands.spec.ts` | Common interaction commands |
| ├─ `220_GotoCommands.spec.ts` | Detailed navigation options and wait statuses |
| ├─ `221_Referer_command.spec.ts` | Testing with custom HTTP referrer headers |
| ├─ `222_Automation_app.vwo.com.spec.ts` | Full element interactions on VWO |
| ├─ `223_XPath.spec.ts` | Querying elements using XPath expressions |
| ├─ `224_GetByRole.spec.ts` | Accessible querying using ARIA roles |
| ├─ `225_CSS_Locators.spec.ts` | Locating elements via standard CSS selectors |
| ├─ `226_PressSequentially.spec.ts` | Real-time keystroke typing simulation |
| ├─ `227_Cookies.spec.ts` | Reading and setting browser cookies |
| └─ `Tasks/` | Automation tasks for CURA Healthcare and VWO SignUp |
| **`tests/04_Session_Storage/`** | Authenticated state saving and reuse |
| ├─ `228_Session.spec.ts` | Capturing and loading storage state |
| └─ `229_VWO_Test.spec.ts` | VWO test utilizing saved session context |
| **`tests/05_Allure-Reports/`** | Reporting and analytics configurations |
| ├─ `230_AllureReport.spec.ts` | Allure annotations: Epics, Features, Stories, and Steps |
| └─ `Tasks/` | End-to-end banking flow reports and bankbox assignments |
| **`tests/` Root specs** | Legacy and root-level practice flows |
| ├─ `23_Apr_2026_Automation_cura.spec.ts` | CURA login automation |
| ├─ `25_Apr_2026_VWO_login.spec.ts` | VWO credential testing |
| ├─ `28_Apr_2026_VWO_Free_Trial.spec.ts` | VWO sign up registration path |
| ├─ `Cura-Appointment.spec.ts` | CURA Healthcare appointment flow |
| ├─ `Simforthings-dev-login.spec.ts` | Custom login script |
| └─ `example.spec.ts` | Playwright default starter assertions |

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

- ✅ **Navigation** — `page.goto()` with advanced referrers and status handling  
- ✅ **Assertions** — `toHaveTitle()`, `toHaveURL()`, `toBeVisible()`  
- ✅ **Locators** — CSS, XPath, `page.locator()`, `page.getByRole()`  
- ✅ **Actions** — `click()`, `fill()`, and `pressSequentially()` for keystroke typing  
- ✅ **Test Annotations** — `skip`, `only`, `fail`, `slow`  
- ✅ **Multi-Context & Pages** — Setting custom viewport sizes and handling multi-page browser states  
- ✅ **Session State** — Saving and restoring browser cookie and storage state to skip login flows  
- ✅ **Allure Reports** — Epic, feature, story grouping with detailed custom test steps  
- ✅ **CI Integration** — Automated test suite pipeline via GitHub Actions  

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
