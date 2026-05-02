/**
 * Go to vwo.com free trials and for gmail id (non organizational), verify what message will come?
 */

import {test, expect} from '@playwright/test'

test('vwo.com domain check', async ({page}) =>{
    test.setTimeout(70000);
    await page.goto('https://vwo.com/free-trial/');
    await page.getByRole('textbox', {name: 'email'}).fill("adminlucifer@gmail.com");
    await page.getByRole('checkbox', {name: "I agree to VWO's Privacy Policy & Terms"}).check();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
    await expect(page.locator('#page-free-trial-signup-form-step1 > div > div')).toContainText('gmail.com doesn\'t look like a business domain. Please use your business email.');


    await page.waitForTimeout(3000);
    console.log("All actions are completed ✅");
});
