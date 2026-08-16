import {test, expect} from '@playwright/test'

test('XPath locators', async({ page }) =>{

    page.goto("https://app.vwo.com/#/login");
    // XPath locators
    let usernameField = page.locator("xpath=//input[@data-qa='hocewoqisi']");
    let passwordField = page.locator("xpath=//input[@data-qa='jobodapuxe']");
    let submitButton = page.locator("xpath=//button[@id='js-login-btn']")

    await usernameField.fill("admin");
    await passwordField.fill("Admin@123");
    await submitButton.click();

    console.log("All actions completed using xPath");

})