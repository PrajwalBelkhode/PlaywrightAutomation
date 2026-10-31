import {test, expect} from '@playwright/test'

test.describe('Drag and drop - 2', () =>{

    // Kanban board drag and drop

    test('Drag and drop - Advanced', async({ page }) =>{
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
        await page.getByTestId('card-write-spec').dragTo(page.locator('[data-status="in-progress"]'));
        await page.getByTestId('card-write-spec').dragTo(page.getByTestId('col-review'));
        await page.getByTestId('card-update-readme').dragTo(page.getByTestId('col-done'));

        await page.getByRole('button',{name: 'Snapshot state'}).click();
        let output_data = await page.getByTestId('board-output').innerText();
        console.log(output_data);
        await page.waitForTimeout(3000);
    });
});
