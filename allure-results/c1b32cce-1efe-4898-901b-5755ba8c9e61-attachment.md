# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_Shadow_DOMs\Tasks\Shadow-DOM-Exercise.spec.ts >> Selectorhub Shadow DOMs >> Shadow DOM - part 1
- Location: tests\12_Shadow_DOMs\Tasks\Shadow-DOM-Exercise.spec.ts:10:9

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://selectorshub.com/xpath-practice-page/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect, Locator} from '@playwright/test';
  2  | 
  3  | let URL = 'https://selectorshub.com/xpath-practice-page/'
  4  | test.describe('Selectorhub Shadow DOMs', () =>{
  5  |     test.beforeEach(async ({ page }) =>{
> 6  |         page.goto(URL);
     |              ^ Error: page.goto: Test ended.
  7  |         console.log('Starting the Suite');
  8  |     });
  9  | 
  10 |     test('Shadow DOM - part 1', async({ page }) =>{
  11 |         const user = page.locator('div.jackPart#userName');
  12 |         await user.locator('#kils').fill('Student1234');
  13 |         await user.locator('#pizza').fill('Paparoni');
  14 |         console.log('Test completed ✅');
  15 |     });
  16 | });
```