import {test, expect} from '@playwright/test'

test.describe('Drag and drop - 1', () =>{
    test('Drag and drop - Simple', async({ page }) =>{
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        const column_A = page.locator('#column-a');
        const column_B = page.locator('#column-b');

        // Initial validation
        await expect(column_A).toHaveText('A');
        await expect(column_B).toHaveText('B');

        await column_A.dragTo(column_B);

        // Post changes validation
        await expect(column_A).toHaveText('B');
        await expect(column_B).toHaveText('A');

        await page.waitForTimeout(3000);

    });
});