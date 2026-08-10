import {test, expect} from '@playwright/test'

test("Login to app.vwo.com using locators", async({ page }) =>{
    await page.goto("https://app.vwo.com/#/login");
    //<input type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID">

   let usernameField =  await page.locator('#login-username');
   let passwordField = await page.locator('#login-password');
   let loginButton = await page.locator("#js-login-btn");

   // Now playwright finds the elements and acts (auto wait)

   await usernameField.fill("admin");
   await passwordField.fill("passsword");
   await loginButton.click();

   console.log("All actions completed ✅");

   let error_message = page.locator('#js-notification-box-msg');
   await expect(error_message).toContainText("Your email, password, IP address or location did not match");

   console.log("Error message validation completed.")
})