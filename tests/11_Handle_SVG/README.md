# 11 — Handle SVG Elements

This section contains Playwright exercises covering how to interact with SVG elements on web pages, along with a practical task that combines SVG handling with data extraction and comparison logic.

---

## Test Files

| # | File | Topic |
|---|------|-------|
| 248 | `248_SVG.spec.ts` | Locating & clicking SVG elements, iterating over search results |
| 249 | `249_SVG_Practice.spec.ts` | SVG shapes, bar charts, and star ratings on TTA widget page |
| 250 | `250_Advance_SVG_Project.spec.ts` | Advanced SVG — interactive India map, state extraction and click |
| Task | `Tasks/Flipkart_SVG_Task.spec.ts` | SVG handling + finding the cheapest product from search results |

---

## Exercises & Key Commands

### Exercise 248 — SVG Handling

**URL:** `https://www.flipkart.com/search`

Fills the Flipkart search bar, clicks the SVG search icon to trigger the search, then iterates over all product results and prints their titles.

**Key Playwright Commands:**

- `page.getByTitle('Search for Products, Brands and More').fill('macmini m6')` — Fill a search input located by its `title` attribute
- `page.locator('svg')` — Locate all SVG elements on the page
- `svgElements.first().click()` — Click the first SVG element (search icon)
- `expect(firstResult.first()).toBeVisible({ timeout: 5000 })` — Assert an element is visible with a custom timeout
- `titleResults.count()` — Get the count of matching elements
- `titleResults.nth(i).textContent()` — Get the text content of the i-th matching element

**Concepts Covered:**

- Using `page.locator('svg')` to target SVG elements
- Using XPath selectors with `contains()` — e.g., `//div[contains(@data-id,"CPU")]/div/a[2]`
- Iterating over multiple elements with a `for` loop using `.count()` and `.nth()`
- TypeScript type annotations with `Locator`, `number`, and `string | null`

---

### Exercise 249 — SVG Practice (TTA Widgets)

**URL:** `https://app.thetestingacademy.com/playwright/widgets/svg`

Interacts with various SVG widget types — circle shapes, bar charts, and star ratings — by clicking on them via `data-testid` and validating the output text.

**Key Playwright Commands:**

- `page.getByTestId('shape-circle-blue').click()` — Click an SVG circle shape by test ID
- `page.locator('#shapes-output').innerText()` — Read the output text after clicking a shape
- `page.getByTestId('bar-q4').click()` — Click a specific bar in an SVG bar chart
- `page.locator('#bars-output').innerText()` — Read the bar chart output
- `page.getByTestId('star-5').click()` — Click a star rating SVG element
- `page.getByTestId('stars-readout').innerText()` — Read the star rating output

**Concepts Covered:**

- Interacting with different SVG element types (circles, bars, stars)
- Using `getByTestId()` for precise SVG element targeting
- Reading output feedback after SVG interactions
- `test.beforeEach()` hook for shared setup across multiple tests

---

### Exercise 250 — Advanced SVG Project (India Map)

**URL:** `https://simplemaps.com/svg/country/in`

Extracts all state names from an interactive SVG map of India, iterates through them to find "Uttar Pradesh", and clicks on the corresponding SVG `<path>` element.

**Key Playwright Commands:**

- `page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]").allTextContents()` — Extract all state label texts from SVG `<text>` elements using XPath with `name()` function
- `page.locator("//*[name()='path' and contains(@class,'INUP')]").click()` — Click a specific SVG `<path>` element by its class

**Concepts Covered:**

- XPath `name()` function to select SVG-namespaced elements (`svg`, `text`, `path`)
- `allTextContents()` to extract text from all matching SVG labels
- Conditional logic — iterating and matching a specific state before clicking
- Working with real-world interactive SVG maps

---

### Task — Flipkart SVG Task (Find Cheapest Mac Mini)

**URL:** `https://www.flipkart.com/search`

Searches for "macmini" on Flipkart, clicks the SVG search icon, sorts results by "Price -- Low to High", extracts all prices, and determines the cheapest Mac Mini available.

**Key Playwright Commands:**

- `page.locator('svg').first().click()` — Click the SVG search icon
- `page.getByText('Price -- Low to High', { exact: true }).first().click()` — Click a sort option by exact text
- `page.locator('//div[@class="QiMO5r"]').allInnerTexts()` — Extract all price texts using XPath and `allInnerTexts()`
- `price.match(/₹[\d,]+/)` — Use regex to extract price values from text
- `Number(actualprice[0].replace(/[₹,]/g, ''))` — Parse price string to number for comparison

**Concepts Covered:**

- SVG element interaction for search submission
- Sorting search results by clicking filter options
- Extracting data from multiple elements with `allInnerTexts()`
- Regex-based text parsing for price extraction
- Finding the minimum value by iterating and comparing prices
- `test.beforeEach()` and `test.afterEach()` hooks for setup and teardown

---

## Running the Tests

### Run all tests in this section

```bash
npx playwright test tests/11_Handle_SVG
```

### Run individual test files

```bash
# Exercise 248 — SVG Handling
npx playwright test tests/11_Handle_SVG/248_SVG.spec.ts

# Exercise 249 — SVG Practice (TTA Widgets)
npx playwright test tests/11_Handle_SVG/249_SVG_Practice.spec.ts

# Exercise 250 — Advanced SVG Project (India Map)
npx playwright test tests/11_Handle_SVG/250_Advance_SVG_Project.spec.ts

# Task — Flipkart SVG Task
npx playwright test tests/11_Handle_SVG/Tasks/Flipkart_SVG_Task.spec.ts
```

### Run in headed mode (see the browser)

```bash
npx playwright test tests/11_Handle_SVG --headed
```

### Run in debug mode (step through)

```bash
npx playwright test tests/11_Handle_SVG --debug
```

---

## Playwright API Summary

| API | Purpose |
|-----|---------|
| `page.locator('svg')` | Locate SVG elements |
| `page.getByTitle()` | Locate element by its `title` attribute |
| `page.getByText()` | Locate element by visible text |
| `page.getByTestId()` | Locate element by `data-testid` attribute |
| `locator.first()` | Select the first matching element |
| `locator.nth(i)` | Select the i-th matching element |
| `locator.count()` | Get the number of matching elements |
| `locator.fill()` | Fill an input field |
| `locator.click()` | Click an element |
| `locator.textContent()` | Get text content of an element |
| `locator.innerText()` | Get inner text of a single element |
| `locator.allInnerTexts()` | Get inner text of all matching elements |
| `locator.allTextContents()` | Get text content of all matching elements |
| `expect(locator).toBeVisible()` | Assert element is visible |
| `test.beforeEach()` | Run setup before each test |
| `test.afterEach()` | Run teardown after each test |
| XPath `name()` | Select SVG-namespaced elements (e.g., `*[name()='svg']`) |
