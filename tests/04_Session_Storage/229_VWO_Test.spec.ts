import {test, expect} from '@playwright/test'

// Load saved session

test.use({
    storageState: "./user-session.json"
});

test("go directly to the dashboard, no login", async({ page }) =>{
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1275982");
    await expect(page).toHaveURL('/dashboard/');
    console.log("Dashboard loaded - No login ✅");
});

test(" go directly to the settings page, no login", async({ page }) =>{
    await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1275982");
    await expect(page).toHaveURL('/settings/');
    console.log("Settings page loaded - No login ✅");
})