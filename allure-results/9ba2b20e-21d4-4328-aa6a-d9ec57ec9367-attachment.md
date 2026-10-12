# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\238_Advanced_Select_Box_v2.spec.ts >> Select box - Part 2
- Location: tests\07_WebTables\238_Advanced_Select_Box_v2.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('rs-single')

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('Select box - Part 2', async({ page }) =>{
  4  |     // 1) Single, searchable
> 5  | await page.getByTestId('rs-single').click();
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  6  | await page.getByTestId('rs-single-input').fill('play');
  7  | await page.getByRole('option', { name: 'Playwright' }).click();
  8  | await expect(page.locator('#rs-single .tta-rs__single-value')).toHaveText('Playwright');
  9  | 
  10 | // 2) Multi — pick three, remove one
  11 | const multi = page.getByTestId('rs-multi');
  12 | for (const name of ['Playwright', 'Pytest', 'TestNG']) {
  13 |   await multi.click();
  14 |   await page.getByRole('option', { name }).click();
  15 | }
  16 | await multi.locator('.tta-rs__multi-value:has-text("Pytest") .tta-rs__multi-value__remove').click();
  17 | 
  18 | // 3) Creatable — type a brand-new tag and press Enter
  19 | await page.getByTestId('rs-creatable-input').fill('chaos-engineering');
  20 | await page.getByTestId('rs-creatable-input').press('Enter');
  21 | await expect(page.locator('#rs-creatable .tta-rs__multi-value', { hasText: 'chaos-engineering' })).toBeVisible();
  22 | 
  23 | // 4) Grouped — pick from a specific group
  24 | await page.getByTestId('rs-grouped').click();
  25 | await page
  26 |   .locator('.tta-rs__group[data-group="Edge"]')
  27 |   .getByRole('option', { name: 'Vercel Edge' })
  28 |   .click();
  29 | 
  30 | // 5) Async — wait for results
  31 | await page.getByTestId('rs-async-input').fill('pun');
  32 | await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
  33 | await page.getByRole('option', { name: 'Pune' }).click();
  34 | })
```