import {test, expect} from '@playwright/test'

test("App.vwo.com login test with invalid creds", async({page}) =>{

    test.setTimeout(60000);
    await page.goto("https://app.vwo.com/#/login")
    let Email = page.getByRole('textbox', { name: 'Email address' });
    let Password = page.getByRole('textbox', { name: 'Password' });
    let button = page.locator('#js-login-btn');
    let errormsg = page.locator('#js-notification-box-msg');

    

    await Email.fill("dummyuser@testing.com");
    await Password.fill("dummyuserpassword@123");
    await button.click();
    await expect(errormsg).toHaveText("Your email, password, IP address or location did not match");

    console.log("All actions are completed ✅");
});
