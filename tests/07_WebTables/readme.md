# 07 — Web Tables & Select Dropdowns

This module covers interacting with **HTML tables** and **dropdown / select-box elements** using Playwright, progressing from basic static tables to dynamic data tables, employee management tables, and advanced custom select components.

---

## 📁 Test Files

| # | File | Topic |
|---|------|-------|
| 232 | [`232_WebTables.spec.ts`](./232_WebTables.spec.ts) | Static table — XPath iteration vs Playwright-native `hasText` filtering |
| 233 | [`233_WebTables_Dynamic.spec.ts`](./233_WebTables_Dynamic.spec.ts) | Dynamic table — structured row extraction with `allInnerTexts()` |
| 234 | [`234_WebTables-Employee_Management.spec.ts`](./234_WebTables-Employee_Management.spec.ts) | Employee table — finding rows by text & clicking checkboxes |
| 235 | [`235_Select_Dropdowns.spec.ts`](./235_Select_Dropdowns.spec.ts) | Basic native `<select>` dropdown with `selectOption()` |
| 236 | [`236_Advanced_Select_frames.spec.ts`](./236_Advanced_Select_frames.spec.ts) | Custom dropdowns — language, framework, experience selectors with JSON output verification |
| 237 | [`237_Advanced_Select_Box.spec.ts`](./237_Advanced_Select_Box.spec.ts) | React-Select components — single, multi, creatable, grouped, and async select |
| 238 | [`238_Advanced_Select_Box_v2.spec.ts`](./238_Advanced_Select_Box_v2.spec.ts) | React-Select v2 — searchable single, multi with removal, creatable tags, grouped & async |

---

## 🔑 Key Concepts

### Web Tables

| Technique | Example | Used In |
|-----------|---------|---------|
| **XPath cell iteration** | Build dynamic XPath `//table/tbody/tr[i]/td[j]` and loop | 232 |
| **`following-sibling` XPath** | Locate a sibling cell after matching a name | 232 |
| **Playwright `hasText` filter** | `page.locator('#customers tbody tr', { hasText: 'Helen Bennett' })` | 232 |
| **`allInnerTexts()`** | Extract all cell text from a row in one call | 233 |
| **`:has()` CSS pseudo-class** | `tr:has(td:text('Rohan.Mehta'))` to find a row containing text | 234 |
| **`preceding-sibling` XPath** | Reach a checkbox before a specific `<td>` | 234 |

### Select Dropdowns & Custom Select Components

| Technique | Example | Used In |
|-----------|---------|---------|
| **Native `selectOption()`** | `page.locator('#dropdown').selectOption("Option 2")` | 235 |
| **Custom dropdown (click → select)** | Click trigger, then click option by `data-value` | 236 |
| **`getByText()` with exact match** | `page.getByText('Mid-level (4-6 years)', { exact: true })` | 236, 237 |
| **JSON output assertion** | Parse `#dropdown-output` text and assert values | 236 |
| **React-Select single** | Click container → `getByRole('option', { name })` | 237, 238 |
| **React-Select multi** | Click, select multiple, press `Escape` to close | 237, 238 |
| **Creatable select** | Fill custom text → press `Enter` to create tag | 237, 238 |
| **Grouped select** | Navigate groups via `data-group` attribute | 238 |
| **Async select** | Type partial text, wait for menu to contain result, select | 237, 238 |
| **Remove multi-value** | Click `.tta-rs__multi-value__remove` on a selected tag | 238 |

---

## 🌐 Target Sites

| Site | Used In |
|------|---------|
| [AwesomeQA — Web Table](https://awesomeqa.com/webtable.html) | 232 |
| [AwesomeQA — Web Table 1](https://awesomeqa.com/webtable1.html) | 233 |
| [The Testing Academy — Web Table](https://app.thetestingacademy.com/playwright/webtable) | 234 |
| [The Internet — Dropdown](https://the-internet.herokuapp.com/dropdown) | 235 |
| [The Testing Academy — Dropdowns](https://app.thetestingacademy.com/playwright/tables/dropdowns) | 236 |
| [The Testing Academy — Select Boxes](https://app.thetestingacademy.com/playwright/tables/select-boxes) | 237, 238 |

---

## ▶️ Running the Tests

```bash
# Run all tests in this module
npx playwright test tests/07_WebTables/

# Run a specific test file
npx playwright test tests/07_WebTables/232_WebTables.spec.ts

# Run in headed (visible browser) mode
npx playwright test tests/07_WebTables/ --headed
```
