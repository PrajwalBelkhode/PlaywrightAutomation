# 🎭 Playwright Automation Project

An end-to-end test automation project built with [Playwright](https://playwright.dev/) and TypeScript — covering real-world web applications, core testing patterns, advanced selectors, session storage, web tables, frames, keyboard/mouse interactions, SVG handling, Shadow DOMs, and CI/CD integration via GitHub Actions.

> **59 test specs** across **12 learning modules** + standalone practice flows

---

## 📁 Project Structure

```
Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml              # GitHub Actions CI pipeline
├── tests/
│   ├── 01_Basics/                      # Basic tests and test annotations
│   ├── 02_First_Tests/                 # Browser contexts, multiple pages, and context reuse
│   │   └── Tasks/
│   ├── 03_Locators_Commands/           # CSS, XPath, GetByRole, cookies, and sequential keypresses
│   │   └── Tasks/
│   ├── 04_Session_Storage/             # Session storage capture and authentication reuse
│   ├── 05_Allure-Reports/              # Rich Allure reports with metadata steps
│   │   └── Tasks/
│   ├── 06_Multiple_Elements/           # Handling and filtering lists of elements
│   │   └── Tasks/
│   ├── 07_WebTables/                   # Web table parsing, dynamic tables, dropdowns, select boxes
│   ├── 08_Frames_iFrames/             # Single, multi, and nested iFrame handling
│   │   └── Tasks/
│   ├── 09_Keyboard_Hover_Drag_Drop/   # Keyboard events, hover menus, drag-and-drop, right-click
│   │   └── Tasks/
│   ├── 10_JS_Alerts/                  # JavaScript alert, confirm, and prompt dialogs
│   ├── 11_Handle_SVG/                 # SVG element interaction and advanced map selection
│   │   └── Tasks/
│   ├── 12_Shadow_DOMs/                # Shadow DOM element access and interaction
│   ├── *.spec.ts                       # Root-level standalone practice specs
│   └── README.md
├── utils/
│   └── CustomTTAReporter.ts            # Custom HTML reporter (real-time dashboard with history)
├── auth/                               # Saved authentication / session state
├── tta-report/                         # Custom TTA reporter output (auto-generated)
├── allure-results/                     # Allure reporter output (auto-generated)
├── playwright.config.ts                # Playwright configuration
├── package.json                        # Project metadata & dependencies
├── tsconfig.json                       # TypeScript compiler options
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
npm i -g allure-commandline
```

---

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/example.spec.ts

# Run tests in a specific module
npx playwright test tests/08_Frames_iFrames/

# Run in headed mode (watch the browser)
npx playwright test --headed

# Run in interactive UI mode
npx playwright test --ui

# Run in debug mode (step through tests)
npx playwright test --debug

# Run against a specific project/browser
npx playwright test --project=chromium

# Generate and serve an Allure report
npx allure serve allure-results
```

---

## 📊 Test Reports

Three reporters run in parallel:

| Reporter | Output | View |
|---|---|---|
| **Playwright HTML** | `playwright-report/` | `npx playwright show-report` |
| **Allure** | `allure-results/` | `npx allure serve allure-results` |
| **Custom TTA** | `tta-report/` | Open `tta-report/index.html` in a browser |

### Custom TTA Reporter

The [Custom TTA Reporter](utils/CustomTTAReporter.ts) (by Pramod Dutta / The Testing Academy) provides:

- 🔴 **Real-time dashboard** — auto-refreshes every 5 s while tests run
- 📸 Screenshots, 🎥 videos, and 📦 trace files embedded per test
- 📝 Console log capture per test step
- 📊 Stats dashboard with pass rate, duration, environment, and run metadata
- 📚 **Run history** — browse all previous runs at `tta-report/history.html`

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
| `213_Multi_Context.spec.ts` | Multiple contexts in a single browser instance |
| `214_Multiple_Page.spec.ts` | Managing multiple pages simultaneously |
| `215_TEST_PW.spec.ts` | General Playwright test sandbox |
| `216_Manual_context.spec.ts` | Manual page/context construction |
| `217_Manual_context_options.spec.ts` | Context setup with custom viewports and options |
| `218_Context_reuse.spec.ts` | Reusing context across page actions |
| **Tasks/** | |
| `01_Single_Browser_Multi_context_Multi_page` | Single browser → multiple contexts → multiple pages |
| `02_Single_Context_Multiple_pages` | One context with multiple pages |
| `03_Shared_context` | Sharing a context across tests |

### Module 03 — Locators & Commands

| File | Description |
|---|---|
| `219_Commands.spec.ts` | Common interaction commands |
| `220_GotoCommands.spec.ts` | Navigation options and wait-until strategies |
| `221_Referer_command.spec.ts` | Custom HTTP referrer headers |
| `222_Automation_app.vwo.com.spec.ts` | Full element interactions on VWO |
| `223_XPath.spec.ts` | XPath selectors |
| `224_GetByRole.spec.ts` | ARIA role-based querying |
| `225_CSS_Locators.spec.ts` | CSS selectors |
| `226_PressSequentially.spec.ts` | Real-time keystroke typing simulation |
| `227_Cookies.spec.ts` | Reading and setting browser cookies |
| **Tasks/** | |
| `Automation_cura.spec.ts` | CURA Healthcare automation practice |
| `VWO_Free_Trial.spec.ts` | VWO sign-up flow practice |

### Module 04 — Session Storage

| File | Description |
|---|---|
| `228_Session.spec.ts` | Capturing and loading storage state |
| `229_VWO_Test.spec.ts` | VWO test using saved session context |

### Module 05 — Allure Reports

| File | Description |
|---|---|
| `230_AllureReport.spec.ts` | Allure annotations: Epics, Features, Stories, Steps |
| **Tasks/** | |
| `bankbox.spec.ts` | Bank-box end-to-end flow with Allure reporting |
| `TTA_bank_May_2_10092026.spec.ts` | TTA bank automation assignment |

### Module 06 — Multiple Elements

| File | Description |
|---|---|
| `231_Multiple_Elements.spec.ts` | Iterating & filtering element lists (`allInnerTexts`, `first()`) |
| **Tasks/** | |
| `QA_Form.spec.ts` | QA profile form: text inputs, radio buttons, dropdowns, checkboxes |

### Module 07 — Web Tables & Select Dropdowns

| File | Description |
|---|---|
| `232_WebTables.spec.ts` | Static table parsing with dynamic XPath and `hasText` filtering |
| `233_WebTables_Dynamic.spec.ts` | Structured extraction from dynamic tables (`allInnerTexts()`) |
| `234_WebTables-Employee_Management.spec.ts` | Employee table — find-and-click by CSS & XPath |
| `235_Select_Dropdowns.spec.ts` | Basic HTML `<select>` dropdown with `selectOption()` |
| `236_Advanced_Select_frames.spec.ts` | Custom dropdown components (language, framework, experience) |
| `237_Advanced_Select_Box.spec.ts` | React-Select: single, multi, creatable, grouped, async |
| `238_Advanced_Select_Box_v2.spec.ts` | React-Select v2 — searchable, multi with removal, creatable tags |

### Module 08 — Frames & iFrames

| File | Description |
|---|---|
| `239_iFrames.spec.ts` | Single iFrame — filling forms inside `frameLocator()` |
| `240_Multi_Frames.spec.ts` | Multiple `<frame>` elements — counting, locating, reading content |
| `241_Nested_Iframes.spec.ts` | Deeply nested iFrames (3 levels) on SelectorHub |
| **Tasks/** | |
| `TTA_Nested-IFrames.spec.ts` | Nested iFrame exercise on TTA platform |

### Module 09 — Keyboard, Hover, Drag & Drop

| File | Description |
|---|---|
| `242_Keyboard.spec.ts` | Keyboard events: `press()`, modifier keys, screenshots per keypress |
| `244_Spicejet_Hover.spec.ts` | Hover menus on SpiceJet and TTA hover-menu widget |
| `245_Drag_and_Drop.spec.ts` | Simple drag-and-drop with `dragTo()` |
| `246_Drag_and_Drop_advance_Kanban.spec.ts` | Advanced drag-and-drop on a Kanban board |
| `247_Right_Click.spec.ts` | Right-click context menu interaction |
| **Tasks/** | |
| `Keyboard_hover_Task.spec.ts` | TTA keyboard & hover exercise |

### Module 10 — JS Alerts

| File | Description |
|---|---|
| `243_JS_Alerts.spec.ts` | JavaScript `alert()`, `confirm()`, and `prompt()` dialog handling |

### Module 11 — Handle SVG

| File | Description |
|---|---|
| `248_SVG.spec.ts` | Locating SVG elements on Flipkart search results |
| `249_SVG_Practice.spec.ts` | SVG shapes practice — circle, rect, polygon assertions on TTA |
| `250_Advance_SVG_Project.spec.ts` | Advanced SVG — interactive India map state selection (SimpleMaps) |
| **Tasks/** | |
| `Flipkart_SVG_Task.spec.ts` | Find cheapest Mac Mini on Flipkart using SVG star-rating parsing |

### Module 12 — Shadow DOMs

| File | Description |
|---|---|
| `251_Shadow_DOMs.spec.ts` | Shadow DOM element access — filling forms, toggling themes, expanding accordions |

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
| `workers` | `process.env.CI ? 1 : undefined` | Single worker on CI; local uses all cores |
| `reporter` | `[['html'], ['allure-playwright'], ['./utils/CustomTTAReporter.ts']]` | Triple reporting: HTML + Allure + Custom TTA |
| `use.trace` | `'on'` | Capture trace on every test |
| `use.screenshot` | `'on'` | Screenshot after every test |
| `use.video` | `'on'` (1280×720) | Record video for every test |
| `use.headless` | `false` | Runs in headed mode locally |
| Projects | Chromium (Desktop Chrome) | Firefox, WebKit, mobile are commented out |

---

## 🔄 CI/CD — GitHub Actions

The workflow ([`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)) runs on every `push` and `pull_request` to `main` / `master`:

1. **Checkout** code (`actions/checkout@v4`)
2. **Setup** Node.js LTS (`actions/setup-node@v4`)
3. **Install** dependencies (`npm ci`)
4. **Install** Playwright browsers (`npx playwright install --with-deps`)
5. **Run** the full test suite (`npx playwright test`)
6. **Upload** Playwright HTML report as a build artifact (retained 30 days)

> **Note:** The workflow currently uploads only `playwright-report/`. Allure and TTA report artifacts can be added by extending the upload step.

---

## 🔑 Key Playwright Concepts Covered

- ✅ **Navigation** — `page.goto()` with referrers, wait-until strategies, and status handling
- ✅ **Assertions** — `toHaveTitle()`, `toHaveURL()`, `toBeVisible()`, `toHaveText()`
- ✅ **Locators** — CSS, XPath, `page.locator()`, `page.getByRole()`, `page.getByTestId()`, `page.getByText()`
- ✅ **Actions** — `click()`, `fill()`, `selectOption()`, `check()`, `pressSequentially()`
- ✅ **Test Annotations** — `skip`, `only`, `fail`, `slow`, conditional skipping
- ✅ **Multi-Context & Pages** — Custom viewports and multi-page browser states
- ✅ **Session State** — Saving and restoring cookie/storage state to skip login flows
- ✅ **Multiple Elements** — Iterating and filtering with `allInnerTexts()`, `all()`, `first()`
- ✅ **Web Tables** — Static & dynamic table parsing with XPath, `following-sibling`, `hasText`
- ✅ **Dropdowns & Select Boxes** — Native `<select>`, custom dropdowns, React-Select (single, multi, creatable, grouped, async)
- ✅ **Frames & iFrames** — `frameLocator()`, multi-frame navigation, deeply nested iFrames
- ✅ **Keyboard Events** — `keyboard.press()`, modifier keys, key-code verification
- ✅ **Hover & Menus** — `hover()` for dropdown/flyout menus
- ✅ **Drag & Drop** — `dragTo()` for simple and Kanban-board scenarios
- ✅ **Right-Click** — Context menu interaction via `click({ button: 'right' })`
- ✅ **JS Dialogs** — Handling `alert()`, `confirm()`, `prompt()` via the `dialog` event
- ✅ **SVG Handling** — Locating SVG elements, `name()` XPath function, interactive map state selection
- ✅ **Shadow DOM** — Accessing elements inside shadow roots with Playwright's built-in piercing
- ✅ **Cookies** — Reading and setting browser cookies programmatically
- ✅ **Allure Reports** — Epic, feature, story grouping with custom test steps
- ✅ **Custom TTA Reporter** — Real-time HTML dashboard with screenshots, videos, traces, and run history
- ✅ **CI Integration** — Automated test pipeline via GitHub Actions

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Test Assertions](https://playwright.dev/docs/test-assertions)
- [Locators Guide](https://playwright.dev/docs/locators)
- [Frames Guide](https://playwright.dev/docs/frames)
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
