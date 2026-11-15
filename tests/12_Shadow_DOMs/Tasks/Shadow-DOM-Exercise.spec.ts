import {test, expect, Locator} from '@playwright/test';

let URL = 'https://selectorshub.com/xpath-practice-page/'
test.describe('Selectorhub Shadow DOMs', () =>{
    test.beforeEach(async ({ page }) =>{
        await page.goto(URL);
        console.log('Starting the Suite');
    });

    test('Shadow DOM - part 1', async({ page }) =>{
        const user = page.locator('div.jackPart#userName');
        await user.locator('#kils').fill('Student1234');
        await user.locator('#pizza').fill('Paparoni');
        // Filling the password text box - Closed shadow root
        await page.getByPlaceholder('enter password').fill('password@1234');

        await page.waitForTimeout(2000);
        console.log('Test completed ✅');
    });

    test.afterEach(async ({ page }) =>{
        await page.close();
        console.log('Ending the suite');
    });
});