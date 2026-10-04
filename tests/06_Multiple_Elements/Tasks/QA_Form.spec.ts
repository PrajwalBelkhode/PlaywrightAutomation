import {test, expect} from '@playwright/test'

test.describe('QA Profile form - TTA', () => {
    test('QA Profile form', async({ page }) =>{
        // Navigate to the page
       await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
       await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/tables/practice#page');
        console.log("Page - is accessible✅");

        // Personal information
        await page.getByRole("textbox", {name: 'First Name'}).fill('Prajwal');
        await page.getByRole("textbox", {name: 'Last Name'}).fill('Belkhode');

        // Radio button
        await page.locator('input[data-testid="gender-male"]').click();

        // Professional Information
        await page.getByRole('combobox', { name: 'Years of experience' }).selectOption({index: 4});
        await page.locator('input[data-testid="profession-manual"]').click();
    });
});