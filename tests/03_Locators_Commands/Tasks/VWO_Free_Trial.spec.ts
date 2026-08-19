import {test, expect} from '@playwright/test'

test("VWO free trial - Error message verification", async({ page }) =>{
    await page.goto("https://vwo.com/free-trial/");
    await page.locator("#page-v1-step1-email").fill("adminlucifer@gmail.com");

    await page.getByRole("checkbox", {name: 'I agree to Wingify\'s Privacy Policy & Terms'}).check();
    await page.getByRole("button", {name: 'Create a Free Trial account'}).click();
    await expect(page.locator('#page-v1-step1-email')
        .locator('..')
        .locator('.invalid-reason')).toContainText('gmail.com doesn\'t look like a business domain. Please use your business email.');

    await page.waitForTimeout(3000);
    console.log("All actions completed ✅");
});