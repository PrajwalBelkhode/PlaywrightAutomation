import {test, expect} from '@playwright/test'

test("TTA Bank login and transaction", async({ page }) =>{
    // Navigating to the page
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    // Click on Sign-up buton
    await page.getByRole('button', {name: 'Sign Up'}).click();

    // Fill in the details - Sign up page
    await page.getByRole('textbox', {name: 'John Doe'}).fill("Prajwal Belkhode");
    await page.getByRole('textbox', {name: 'you@example.com'}).fill("prajwal@testingacademy.com");
    await page.getByRole('textbox', {name: '••••••••'}).fill("PrajwalTTA@123");
    await page.getByRole('button', {name: 'Create Account'}).click();

    // Validate the Opening balance

    await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$50,000.00");

    // Navigate to transfer funds tab
    await page.getByText("Transfer Funds").click();

    // Fill in the transfer funds form to transfer $5000
    await page.getByPlaceholder('0.00').fill('5000');
    await page.getByPlaceholder('e.g. Rent for October').fill('Rent for May 2026');
    await page.getByRole('button', {name: "Continue"}).click();

    // Review the transfer details and confirm the operation

    await page.getByRole('button', {name: 'Confirm Transfer'}).click();

    // Navigate to dashboard page to validate the balance - should be 45,000
    await page.getByText('Dashboard').click();
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
    await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$45,000.00");
    
    // Logout from the app
    await page.getByRole('button', {name: 'Sign Out'}).click();

    // Close the page
    await page.close();
})