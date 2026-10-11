# 🎭 Playwright Automation Project

An end-to-end test automation project built with [Playwright](https://playwright.dev/) and TypeScript — covering real-world web applications, core testing patterns, advanced selectors, session storage, web tables, custom select-boxes, and CI/CD integration via GitHub Actions.

---

## 📁 Project Structure

```
Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml            # GitHub Actions CI pipeline
├── tests/
│   ├── 01_Basics/                    # Basic tests and test annotations
│   ├── 02_First_Tests/               # Browser contexts, multiple pages, and context reuse
│   │   └── Tasks/                    # Tasks on shared contexts and multiple pages
│   ├── 03_Locators_Commands/         # CSS, XPath, GetByRole, cookies, and sequential keypresses
│   │   └── Tasks/                    # Practice automation tasks (CURA & VWO)
│   ├── 04_Session_Storage/           # Session storage capture and authentication reuse
│   ├── 05_Allure-Reports/            # Rich Allure reports (HTML & JSON) with metadata steps
│   │   └── Tasks/                    # Bank box and bank automation tests
│   ├── 06_Multiple_Elements/         # Handling and filtering lists of elements
│   │   └── Tasks/                    # QA Profile form practice
│   ├── 07_WebTables/                 # Web table parsing, dynamic tables, dropdowns, and select boxes
│   ├── 23_Apr_2026_Automation_cura.spec.ts
│   ├── 25_Apr_2026_VWO_login.spec.ts
│   ├── 28_Apr_2026_VWO_Free_Trial.spec.ts
│   ├── Cura-Appointment.spec.ts
│   ├── Simforthings-dev-login.spec.ts
│   └── example.spec.ts               # Playwright default starter spec
├── utils/
│   └── CustomTTAReporter.ts          # Custom HTML reporter (real-time dashboard with history)
├── tta-report/                       # Custom TTA reporter output (auto-generated)
├── allure-results/                   # Allure reporter output (auto-generated)
├── allure-report/                    # Allure HTML report (auto-generated)
├── playwright-report/                # Playwright HTML report (auto-generated)
├── auth/                             # Saved authentication/session state
├── playwright.config.ts              # Playwright configuration
├── tsconfig.json                     # TypeScript compiler options
├── package.json                      # Project metadata & dependencies
└── README.md                         # ← You are here
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.60.0 | Browser automation & testing framework |
| [TypeScript](https://www.typescriptlang.org/) | ESNext (target) | Type‑safe test authoring |
| [Node.js](https://nodejs.org/) | LTS | Runtime environment |
| [GitHub Actions](https://docs.github.com/en/actions) | — | Continuous Integration |
| [Allure Playwright](https://www.npmjs.com/package/allure-playwright) | ^3.9.0 | Rich Allure reports (HTML & JSON) |
| [Allure JS Commons](https://www.npmjs.com/package/allure-js-commons) | ^3.9.0 | Allure step/attachment helpers |
| Custom TTA Reporter | 1.0.0 | Real-time HTML dashboard with run history |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later — [download here](https://nodejs.org/)
- **npm** (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/PrajwalBelkhode/PlaywrightAutomation.git
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

This project ships with **three** reporters configured in parallel:

| Reporter | Output | View command |
|---|---|---|
| **Playwright HTML** | `playwright-report/` | `npx playwright show-report` |
| **Allure** | `allure-results/` → `allure-report/` | `npx allure serve allure-results` |
| **Custom TTA** | `tta-report/` | Open `tta-report/index.html` in a browser |

### Custom TTA Reporter

The [Custom TTA Reporter](utils/CustomTTAReporter.ts) provides:

- 🔴 **Real-time dashboard** — auto-refreshes every 5 seconds while tests run
- 📸 Screenshots, 🎥 videos, and 📦 trace files embedded per test
- 📝 Console log capture associated with individual test steps
- 📚 **Run history page** — browse all previous report runs at `tta-report/history.html`

All three reports are uploaded as artifacts in the GitHub Actions workflow.

---

## 🧪 Test Overview

| Test File / Directory | Description / Demonstrates |
|---|---|
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
| **`tests/06_Multiple_Elements/`** | Handling multiple elements and list filtering |
| ├─ `231_Multiple_Elements.spec.ts` | Iterating & filtering lists of elements (`allInnerTexts`, `first()`) |
| └─ `Tasks/QA_Form.spec.ts` | QA profile form: text inputs, radio buttons, dropdowns, checkboxes |
| **`tests/07_WebTables/`** | Web tables, dropdowns, and advanced select boxes |
| ├─ `232_WebTables.spec.ts` | Static web table parsing with dynamic XPath |
| ├─ `233_WebTables_Dynamic.spec.ts` | Structured extraction from dynamic web tables |
| ├─ `234_WebTables-Employee_Management.spec.ts` | Employee management table — find-and-click by CSS & XPath |
| ├─ `235_Select_Dropdowns.spec.ts` | Basic HTML `<select>` dropdown interactions |
| ├─ `236_Advanced_Select_frames.spec.ts` | Custom dropdown components (language & framework selectors) |
| ├─ `237_Advanced_Select_Box.spec.ts` | React-Select single, multi, and searchable select boxes |
| └─ `238_Advanced_Select_Box_v2.spec.ts` | React-Select — alternative TTA solution approach |
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

| Setting | Value | Notes |
|---|---|---|
| `testDir` | `./tests` | All spec files reside here |
| `fullyParallel` | `true` | Tests run in parallel for speed |
| `forbidOnly` | `!!process.env.CI` | Fails CI if `test.only` is left behind |
| `retries` | `process.env.CI ? 2 : 0` | Auto‑retry on CI only |
| `workers` | `process.env.CI ? 1 : undefined` | Single worker on CI for stability; local uses all cores |
| `reporter` | `[['html'], ['allure-playwright'], ['./utils/CustomTTAReporter.ts']]` | Triple reporting: HTML + Allure + Custom TTA |
| `use.trace` | `'on'` | Capture trace on every test (useful for debugging) |
| `use.screenshot` | `'on'` | Capture a screenshot after every test |
| `use.video` | `'retain-on-failure'` | Record video, keep only on failure |
| `use.headless` | `false` | Runs in headed mode locally |
| Projects | Chromium (Desktop Chrome) | Additional browsers (Firefox, WebKit, mobile) are commented out |

---

## 🔄 CI/CD — GitHub Actions

The workflow (`.github/workflows/playwright.yml`) runs on every `push` and `pull_request` to `main`/`master`:

1. Checkout code
2. Setup Node.js LTS
3. Install dependencies (`npm ci`)
4. Install Playwright browsers
5. Execute the full test suite
6. Upload **HTML**, **Allure**, and **TTA** results as build artifacts (retained 30 days)

---

## 🔑 Key Playwright Concepts Covered

- ✅ **Navigation** — `page.goto()` with advanced referrers and status handling
- ✅ **Assertions** — `toHaveTitle()`, `toHaveURL()`, `toBeVisible()`
- ✅ **Locators** — CSS, XPath, `page.locator()`, `page.getByRole()`, `page.getByTestId()`
- ✅ **Actions** — `click()`, `fill()`, `selectOption()`, and `pressSequentially()` for keystroke typing
- ✅ **Test Annotations** — `skip`, `only`, `fail`, `slow`
- ✅ **Multi-Context & Pages** — Setting custom viewport sizes and handling multi-page browser states
- ✅ **Session State** — Saving and restoring browser cookie and storage state to skip login flows
- ✅ **Multiple Elements** — Iterating, filtering, and asserting on lists of elements
- ✅ **Web Tables** — Static & dynamic table parsing with XPath and CSS locators
- ✅ **Dropdowns & Select Boxes** — Native `<select>`, custom dropdowns, and React-Select components
- ✅ **Allure Reports** — Epic, feature, story grouping with detailed custom test steps
- ✅ **Custom TTA Reporter** — Real-time HTML dashboard with step-level screenshots, videos, and traces
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
