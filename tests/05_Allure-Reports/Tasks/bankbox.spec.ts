import {test, expect} from '@playwright/test'

test('Bankbox transaction simulation', async({ page }) =>{
    await page.goto("https://bankbox.cs.umanitoba.ca/");
    await page.locator('button').filter({ hasText: 'Open Exploration' }).first().click();

    await page.getByRole('button', {name: 'Start'}).click();
    await page.getByRole('textbox', {name: 'Card number'}).fill("123123");
    await page.getByRole('button', {name: 'Continue'}).click();
    await page.getByLabel('Password (case sensitive)').fill('exploration');
    await page.getByRole('button', { name: 'Sign on' }).click();
    await expect(page).toHaveURL("https://bankbox.cs.umanitoba.ca/cibc-home");
    console.log("CIBC Bank account login success ✅");

    // Transaction
    await page.locator('button').filter({ hasText: 'Transfer Funds' }).last().click();
    await page.getByLabel('From:').selectOption({ index: 2});
    await page.getByLabel('To:').selectOption({ index: 1});
    await page.getByRole('textbox', { name: 'Amount:' }).fill("120");
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Transfer' }).click();
    
    // Confirmation URL 
    await expect(page).toHaveURL('https://bankbox.cs.umanitoba.ca/transfer-funds/confirmation');
});