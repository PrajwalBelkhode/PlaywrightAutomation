import {test, expect} from '@playwright/test'

test('To Verify Cura app login', async({page}) =>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let make_appointment_button = page.locator('#btn-make-appointment');
    let username = page.locator('#txt-username');
    let passsword = page.locator('#txt-password');
    let login_button = page.locator('#btn-login')

    await make_appointment_button.click();
    await username.fill("John Doe");
    await passsword.fill("ThisIsNotAPassword");
    await login_button.click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    console.log("All the actions are completed ✅");
});