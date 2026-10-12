# 🎭 Playwright Automation Project

> Last updated: 2026-10-12

An end-to-end test automation project built with [Playwright](https://playwright.dev/) and TypeScript — covering real-world web applications, core testing patterns, advanced selectors, session storage, web tables, custom select-boxes, and CI/CD integration via GitHub Actions.

> **43 test specs** across **7 learning modules** + standalone practice flows

---

## 📁 Project Structure

```
Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml              # GitHub Actions CI pipeline
├── tests/
│   ├── 01_Basics/                      # Basic tests and test annotations
│   │   └── README.md
│   ├── 02_First_Tests/                 # Browser contexts, multiple pages, and context reuse
│   │   └── Tasks/                      # Tasks on shared contexts and multiple pages
│   ├── 03_Locators_Commands/           # CSS, XPath, GetByRole, cookies, and sequential keypresses
│   │   └── Tasks/                      # Practice automation tasks (CURA & VWO)
│   ├── 04_Session_Storage/             # Session storage capture and authentication reuse
│   ├── 05_Allure-Reports/              # Rich Allure reports (HTML & JSON) with metadata steps
│   │   ├── Tasks/                      # Bank box and bank automation tests
│   │   └── README.md
│   ├── 06_Multiple_Elements/           # Handling and filtering lists of elements
│   │   └── Tasks/                      # QA Profile form practice
│   ├── 07_WebTables/                   # Web table parsing, dynamic tables, dropdowns, and select boxes
│   │   └── readme.md
│   ├── 23_Apr_2026_Automation_cura.spec.ts
│   ├── 25_Apr_2026_VWO_login.spec.ts
│   ├── 28_Apr_2026_VWO_Free_Trial.spec.ts
│   ├── Cura-Appointment.spec.ts
│   ├── example.spec.ts                 # Playwright default starter spec
│   ├── Creds-Jenkins.txt               # Jenkins credential notes
│   └── README.md                       # Tests directory overview
├── utils/
│   └── CustomTTAReporter.ts            # Custom HTML reporter (real-time dashboard with history)
├── auth/                               # Saved authentication / session state
├── tta-report/                         # Custom TTA reporter output (auto-generated)
├── allure-results/                     # Allure reporter output (auto-generated)
├── allure-report/                      # Allure HTML report (auto-generated)
├── playwright-report/                  # Playwright HTML report (auto-generated)
├── playwright.config.ts                # Playwright configuration
├── tsconfig.json                       # TypeScript compiler options
├── package.json                        # Project metadata & dependencies
├── .gitignore                          # Git ignore rules
└── README.md                           # ← You are here
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
| [@types/node](https://www.npmjs.com/package/@types/node) | ^25.6.0 | Node.js type definitions |
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

# Run tests in a specific module
npx playwright test tests/07_WebTables/

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

The [Custom TTA Reporter](utils/CustomTTAReporter.ts) (authored by Pramod Dutta / The Testing Academy) provides:

- 🔴 **Real-time dashboard** — auto-refreshes every 5 seconds while tests run
- 📸 Screenshots, 🎥 videos, and 📦 trace files embedded per test
- 📝 Console log capture associated with individual test steps
- 📊 Stats dashboard with pass rate, duration, environment, and run metadata
- 📚 **Run history page** — browse all previous report runs at `tta-report/history.html`

---

## 🧪 Test Overview

### Module 01 — Basics

| File | Description |
|---|---|
| `209.spec.ts` | Title verification of VWO Login page |
| `210_Test_Annotation.spec.ts` | Test annotations: `skip`, `only`, `fail`, `slow` |

### Module 02 — First Tests (Browser Context & Pages)

| File | Description |
|---|---|
| `211_First_runnning_Test.spec.ts` | Basic browser startup and flow |
| `212_Browser_Context_Pages.spec.ts` | Independent browser contexts |
| `213_Multi_Context.spec.ts` | Multiple contexts within a single browser instance |
| `214_Multiple_Page.spec.ts` | Managing multiple pages simultaneously |
| `215_TEST_PW.spec.ts` | General Playwright test sandbox |
| `216_Manual_context.spec.ts` | Manual page/context construction |
| `217_Manual_context_options.spec.ts` | Context setup with custom viewports and options |
| `218_Context_reuse.spec.ts` | Reusing context across page actions |
| **Tasks/** | |
| `01_Single_Browser_Multi_context_Multi_page.spec.ts` | Single browser → multiple contexts → multiple pages |
| `02_Single_Context_Multiple_pages.spec.ts` | One context with multiple pages |
| `03_Shared_context.spec.ts` | Sharing a context across tests |

### Module 03 — Locators & Commands

| File | Description |
|---|---|
| `219_Commands.spec.ts` | Common interaction commands |
| `220_GotoCommands.spec.ts` | Detailed navigation options and wait statuses |
| `221_Referer_command.spec.ts` | Testing with custom HTTP referrer headers |
| `222_Automation_app.vwo.com.spec.ts` | Full element interactions on VWO |
| `223_XPath.spec.ts` | Querying elements using XPath expressions |
| `224_GetByRole.spec.ts` | Accessible querying using ARIA roles |
| `225_CSS_Locators.spec.ts` | Locating elements via standard CSS selectors |
| `226_PressSequentially.spec.ts` | Real-time keystroke typing simulation |
| `227_Cookies.spec.ts` | Reading and setting browser cookies |
| **Tasks/** | |
| `Automation_cura.spec.ts` | CURA Healthcare automation practice |
| `VWO_Free_Trial.spec.ts` | VWO sign-up flow practice |

### Module 04 — Session Storage

| File | Description |
|---|---|
| `228_Session.spec.ts` | Capturing and loading storage state |
| `229_VWO_Test.spec.ts` | VWO test utilizing saved session context |

### Module 05 — Allure Reports

| File | Description |
|---|---|
| `230_AllureReport.spec.ts` | Allure annotations: Epics, Features, Stories, and Steps |
| **Tasks/** | |
| `bankbox.spec.ts` | Bank-box end-to-end flow with Allure reporting |
| `TTA_bank_May_2_10092026.spec.ts` | TTA bank automation assignment |

### Module 06 — Multiple Elements

| File | Description |
|---|---|
| `231_Multiple_Elements.spec.ts` | Iterating & filtering lists of elements (`allInnerTexts`, `first()`) |
| **Tasks/** | |
| `QA_Form.spec.ts` | QA profile form: text inputs, radio buttons, dropdowns, checkboxes |

### Module 07 — Web Tables & Select Dropdowns

| File | Description |
|---|---|
| `232_WebTables.spec.ts` | Static web table parsing with dynamic XPath and `hasText` filtering |
| `233_WebTables_Dynamic.spec.ts` | Structured extraction from dynamic web tables (`allInnerTexts()`) |
| `234_WebTables-Employee_Management.spec.ts` | Employee management table — find-and-click by CSS & XPath |
| `235_Select_Dropdowns.spec.ts` | Basic HTML `<select>` dropdown interactions with `selectOption()` |
| `236_Advanced_Select_frames.spec.ts` | Custom dropdown components (language, framework, experience selectors) |
| `237_Advanced_Select_Box.spec.ts` | React-Select single, multi, creatable, grouped, and async select boxes |
| `238_Advanced_Select_Box_v2.spec.ts` | React-Select v2 — searchable, multi with removal, creatable tags, grouped & async |

### Root-Level Specs

| File | Description |
|---|---|
| `23_Apr_2026_Automation_cura.spec.ts` | CURA login automation |
| `25_Apr_2026_VWO_login.spec.ts` | VWO credential testing |
| `28_Apr_2026_VWO_Free_Trial.spec.ts` | VWO sign up registration path |
| `Cura-Appointment.spec.ts` | CURA Healthcare appointment flow |
| `example.spec.ts` | Playwright default starter assertions |

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
| `use.trace` | `'on'` | Capture trace on every test |
| `use.screenshot` | `'on'` | Capture a screenshot after every test |
| `use.video` | `'retain-on-failure'` (1280×720) | Record video, keep only on failure |
| `use.headless` | `false` | Runs in headed mode locally |
| Projects | Chromium (Desktop Chrome) | Additional browsers (Firefox, WebKit, mobile) are commented out |

---

## 🔄 CI/CD — GitHub Actions

The workflow ([`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)) runs on every `push` and `pull_request` to `main` / `master`:

1. **Checkout** code (`actions/checkout@v4`)
2. **Setup** Node.js LTS (`actions/setup-node@v4`)
3. **Install** dependencies (`npm ci`)
4. **Install** Playwright browsers (`npx playwright install --with-deps`)
5. **Run** the full test suite (`npx playwright test`)
6. **Upload** Playwright HTML report as a build artifact (retained 30 days)

> **Note:** The workflow currently uploads only the `playwright-report/` artifact. Allure and TTA report artifacts can be added by extending the upload step.

---

## 🔑 Key Playwright Concepts Covered

- ✅ **Navigation** — `page.goto()` with advanced referrers, wait-until strategies, and status handling
- ✅ **Assertions** — `toHaveTitle()`, `toHaveURL()`, `toBeVisible()`
- ✅ **Locators** — CSS, XPath, `page.locator()`, `page.getByRole()`, `page.getByTestId()`, `page.getByText()`
- ✅ **Actions** — `click()`, `fill()`, `selectOption()`, `check()`, and `pressSequentially()` for keystroke typing
- ✅ **Test Annotations** — `skip`, `only`, `fail`, `slow`, and conditional skipping
- ✅ **Multi-Context & Pages** — Setting custom viewport sizes and handling multi-page browser states
- ✅ **Session State** — Saving and restoring browser cookie and storage state to skip login flows
- ✅ **Multiple Elements** — Iterating, filtering, and asserting on lists of elements with `allInnerTexts()`
- ✅ **Web Tables** — Static & dynamic table parsing with XPath iteration, `following-sibling`, and `hasText` filtering
- ✅ **Dropdowns & Select Boxes** — Native `<select>`, custom dropdowns, and React-Select components (single, multi, creatable, grouped, async)
- ✅ **Cookies** — Reading and setting browser cookies programmatically
- ✅ **Allure Reports** — Epic, feature, story grouping with detailed custom test steps
- ✅ **Custom TTA Reporter** — Real-time HTML dashboard with step-level screenshots, videos, traces, and run history
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
- [The Testing Academy](https://thetestingacademy.com/)

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

*Feel free to open issues or pull requests if you have suggestions or find bugs!*
