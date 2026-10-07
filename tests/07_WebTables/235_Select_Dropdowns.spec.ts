import {test, expect} from '@playwright/test'

test.describe('Select dropdowns', () =>{
    test('Basic dropdown select', async({ page }) =>{
        await page.goto("https://the-internet.herokuapp.com/dropdown");
        await page.locator('#dropdown').click();
        await page.locator("#dropdown").selectOption("Option 1");
        await page.waitForTimeout(2000);
        console.log("Option 1 selected");
    })
})