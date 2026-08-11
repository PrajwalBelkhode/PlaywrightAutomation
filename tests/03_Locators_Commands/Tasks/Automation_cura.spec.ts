import {test, expect} from '@playwright/test';

test("Cura health appointment", async({ page }) =>{
    console.log("Home page - Make appointment:")
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let appButton = page.locator("#btn-make-appointment");
    await appButton.click();
    console.log("\nLogin form:");
    let usernameField = page.locator("#txt-username");
    let passswordField = page.locator("#txt-password");
    let submitButton = page.locator("#btn-login");

    await usernameField.fill("John Doe");
    await passswordField.fill("ThisIsNotAPassword");
    await submitButton.click();
    console.log("All actions completed ✅");

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

    console.log("Test case result - PASS ✅")

});