import {test, expect} from '@playwright/test'

test.describe('Selectors box  - Part 1', () =>{
    test('Select box variants - Part 1', async({ page }) =>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

        // Single selector
        await page.locator('#rs-single').click();
        await page.getByText('Cypress',{ exact: true}).click();

        // Multi selector
        await page.locator('#rs-multi').click();
        await page.getByText('Cucumber',{ exact: true}).click();
        await page.getByText('Pytest',{ exact: true}).click();
        await page.keyboard.press("Escape");

        // Creatable
        await page.locator('#rs-creatable').click();
        const tagInput = page.getByTestId('rs-creatable-input');
        await tagInput.fill('Load-Testing');
        await page.keyboard.press("Enter");
        await page.keyboard.press("Escape");

        await page.locator('#rs-grouped').click();
        await page.getByText('AWS', {exact: true}).click();

        // Asynchronous
        await page.locator('#rs-async').click();
        await page.getByTestId('rs-async-input').fill('in');
        await expect(page.getByTestId('rs-async-menu')).toContainText('Berlin');
        await page.getByRole('option', {name: 'Berlin'}).click();

        await page.waitForTimeout(2000);
    });
})