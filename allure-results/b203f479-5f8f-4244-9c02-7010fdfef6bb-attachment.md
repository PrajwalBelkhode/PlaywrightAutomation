# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure-Reports\Tasks\TTA_bank_May_2_10092026.spec.ts >> TTA Bank login and transaction
- Location: tests\05_Allure-Reports\Tasks\TTA_bank_May_2_10092026.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Sign Up' })

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test("TTA Bank login and transaction", async({ page }) =>{
  4  |     // Navigating to the page
  5  |     await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  6  | 
  7  |     // Click on Sign-up buton
> 8  |     await page.getByRole('button', {name: 'Sign Up'}).click();
     |                                                       ^ Error: locator.click: Target page, context or browser has been closed
  9  | 
  10 |     // Fill in the details - Sign up page
  11 |     await page.getByRole('textbox', {name: 'John Doe'}).fill("Prajwal Belkhode");
  12 |     await page.getByRole('textbox', {name: 'you@example.com'}).fill("prajwal@testingacademy.com");
  13 |     await page.getByRole('textbox', {name: '••••••••'}).fill("PrajwalTTA@123");
  14 |     await page.getByRole('button', {name: 'Create Account'}).click();
  15 | 
  16 |     // Validate the Opening balance
  17 | 
  18 |     await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
  19 |     await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$50,000.00");
  20 | 
  21 |     // Navigate to transfer funds tab
  22 |     await page.getByText("Transfer Funds").click();
  23 | 
  24 |     // Fill in the transfer funds form to transfer $5000
  25 |     await page.getByPlaceholder('0.00').fill('5000');
  26 |     await page.getByPlaceholder('e.g. Rent for October').fill('Rent for May 2026');
  27 |     await page.getByRole('button', {name: "Continue"}).click();
  28 | 
  29 |     // Review the transfer details and confirm the operation
  30 | 
  31 |     await page.getByRole('button', {name: 'Confirm Transfer'}).click();
  32 | 
  33 |     // Navigate to dashboard page to validate the balance - should be 45,000
  34 |     await page.getByText('Dashboard').click();
  35 |     await expect(page.locator(".mt-2.text-3xl.font-bold")).toBeVisible();
  36 |     await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$45,000.00");
  37 |     
  38 |     // Logout from the app
  39 |     await page.getByRole('button', {name: 'Sign Out'}).click();
  40 | 
  41 |     // Close the page
  42 |     await page.close();
  43 | })
```