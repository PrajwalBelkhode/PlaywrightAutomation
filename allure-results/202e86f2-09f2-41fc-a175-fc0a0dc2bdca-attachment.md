# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_Frames_iFrames\Tasks\TTA_Nested-IFrames.spec.ts >> Playwrighjt IFrames >> Nested IFrames exercise
- Location: tests\08_Frames_iFrames\Tasks\TTA_Nested-IFrames.spec.ts:4:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#pact1').contentFrame().locator('#glaf')

```

# Test source

```ts
  1  | import {test, expect, FrameLocator, Locator} from '@playwright/test'
  2  | 
  3  | test.describe('Playwrighjt IFrames', () =>{
  4  |     test('Nested IFrames exercise', async({ page }) =>{
  5  |         await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');
  6  |         let frame1:FrameLocator = await page.frameLocator('#pact1');
  7  |         let frame2:FrameLocator = await frame1.frameLocator('#pact2');
  8  |         let frame3:FrameLocator = await frame2.frameLocator('#pact3');
  9  | 
  10 |         await frame1.locator('#inp_val').fill('Playwright');
  11 |         await frame2.locator('#jex').fill('Basic Framework');
> 12 |         await frame1.locator('#glaf').fill('TypeScript');
     |                                       ^ Error: locator.fill: Target page, context or browser has been closed
  13 | 
  14 |         const headerText = await frame1.locator('h3').innerText();
  15 |         console.log(headerText);
  16 |     });
  17 | });
```