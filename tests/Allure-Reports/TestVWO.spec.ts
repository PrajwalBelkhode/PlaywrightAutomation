import {test, expect} from '@playwright/test'

test.use({
    storageState:"./user-session.json"
});

test("Directly to to the VWO Dashboard page", async({page}) => {

    await page.goto("https://app.vwo.com/#/dashboard?accountId=1231016");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded, no login needed ✅");
    await page.waitForTimeout(10000);
});

test("Directly navigate to the settings page", async({page}) => {
    await page.goto("https://app.vwo.com/#/settings/accounts/general?accountId=1231016");
    await expect(page).toHaveURL(/settings/);
    console.log("Settings page loaded, no login needed ✅");
    await page.waitForTimeout(10000);
});