# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_Shadow_DOMs\251_Shadow_DOMs.spec.ts >> Shadow Handling >> Locate Shadow DOM and assert variables
- Location: tests\12_Shadow_DOMs\251_Shadow_DOMs.spec.ts:10:9

# Error details

```
Error: locator.fill: Unexpected token "" while parsing css selector "input[name="password"". Did you mean to CSS.escape it?
Call log:
  - waiting for internal:testid=[data-testid="card-account"s] >> input[name="password"

```

# Test source

```ts
  1  | import {test, expect, Locator} from '@playwright/test'
  2  | 
  3  | const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';
  4  | 
  5  | test.describe('Shadow Handling', () =>{
  6  |     test.beforeEach(async({ page }) =>{
  7  |         await page.goto(URL);
  8  |     });
  9  | 
  10 |     test('Locate Shadow DOM and assert variables', async( { page} ) =>{
  11 |         const card = page.getByTestId('card-account');
  12 |         await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
> 13 |         await card.locator('input[name="password"').fill('Student@123');
     |                                                     ^ Error: locator.fill: Unexpected token "" while parsing css selector "input[name="password"". Did you mean to CSS.escape it?
  14 |         await card.getByTestId('card-account-submit').click();
  15 |         let text = await card.locator('.status').innerText()
  16 |         console.log(text);
  17 |         await page.waitForTimeout(5000);
  18 |     });
  19 | 
  20 |     test.afterEach(async( { page }) =>{
  21 |         await page.close();
  22 |     });
  23 | });
```