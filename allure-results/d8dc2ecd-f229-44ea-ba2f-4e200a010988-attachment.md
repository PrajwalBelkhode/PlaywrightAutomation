# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Keyboard_Hover_Drag_Drop\245_Drag_and_Drop.spec.ts >> Drag and drop - 1 >> Drag and drop - Simple
- Location: tests\09_Keyboard_Hover_Drag_Drop\245_Drag_and_Drop.spec.ts:4:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#column-a')
Expected: "B"
Received: "A"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#column-a')
    14 × locator resolved to <div id="column-a" class="column" draggable="true">…</div>
       - unexpected value "A"

```

```yaml
- banner: A
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.describe('Drag and drop - 1', () =>{
  4  |     test('Drag and drop - Simple', async({ page }) =>{
  5  |         await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  6  |         const column_A = page.locator('#column-a');
  7  |         const column_B = page.locator('#column-b');
  8  | 
  9  |         // Initial validation
  10 |         await expect(column_A).toHaveText('A');
> 11 |         await expect(column_A).toHaveText('B');
     |                                ^ Error: expect(locator).toHaveText(expected) failed
  12 | 
  13 |         await column_A.dragTo(column_B);
  14 | 
  15 |         // Post changes validation
  16 |         await expect(column_A).toHaveText('A');
  17 |         await expect(column_A).toHaveText('B');
  18 | 
  19 |         await page.waitForTimeout(3000);
  20 | 
  21 |     });
  22 | })
```