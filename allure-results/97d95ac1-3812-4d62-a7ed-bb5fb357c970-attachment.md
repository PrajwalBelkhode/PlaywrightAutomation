# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\235_Select_Dropdowns.spec.ts >> Select dropdowns >> Basic dropdown select
- Location: tests\07_WebTables\235_Select_Dropdowns.spec.ts:4:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Option 1', { exact: true })
    - locator resolved to <option value="1">Option 1</option>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    11 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "Dropdown List" [level=3] [ref=e8]
      - combobox [active] [ref=e9]:
        - option "Please select an option" [disabled] [selected]
        - option "Option 1"
        - option "Option 2"
  - generic [ref=e11]:
    - separator [ref=e12]
    - generic [ref=e13]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e14] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.describe('Select dropdowns', () =>{
  4  |     test('Basic dropdown select', async({ page }) =>{
  5  |         await page.goto("https://the-internet.herokuapp.com/dropdown");
  6  |         await page.locator('#dropdown').click();
> 7  |         await page.getByText('Option 1', {exact : true}).click();
     |                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  8  |         await page.waitForTimeout(2000);
  9  |         console.log("Option 1 selected");
  10 |     })
  11 | })
```