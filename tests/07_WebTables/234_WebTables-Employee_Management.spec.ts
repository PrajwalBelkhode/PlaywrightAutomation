import {test, expect} from '@playwright/test'

test.describe('Web tables - Employee Managament', () =>{
    test("Web Tables - Employee management -Find element and click on the checkbox", async({ page }) =>{
        await page.goto("https://app.thetestingacademy.com/playwright/webtable");

        // Find the element using CSS selector
        await page.locator("tr:has(td:text('Rohan.Mehta'))").locator('td').first().click();

        // Find the element using XPath
        await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();
        await page.waitForTimeout(3000);
    })
});