import {test, expect} from '@playwright/test'
import * as allure from 'allure-js-commons'

test("Cura automation appointment Negative scenario - Incorrect username", async({ page }) =>{

    await allure.epic("Cura Automation");
    await allure.description("Cura automation appointment Negative scenario - Incorrect username");
    await allure.feature("Essential features");
    await allure.story("Authentication");

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator('#btn-make-appointment').click();
    await page.fill('#txt-username','Prajwal');
    await page.fill('#txt-password','ThisIsNotAPassword');
    await page.locator('#btn-login').click();

    let Error_message = page.locator("//p[@class='lead text-danger']");
    await expect(Error_message).toContainText("Login failed! Please ensure the username and password are valid.");

    console.log("Incorrect username test completed ✅");
});

test("Cura automation appointment Negative scenario - Incorrect password", async({ page }) =>{

    await allure.epic("Cura Automation");
    await allure.description("Cura automation appointment Negative scenario - Incorrect password");
    await allure.feature("Essential features");
    await allure.story("Authentication");
    
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator('#btn-make-appointment').click();
    await page.fill('#txt-username','John Doe');
    await page.fill('#txt-password','Admin@123');
    await page.locator('#btn-login').click();

    let Error_message = page.locator("//p[@class='lead text-danger']");
    await expect(Error_message).toContainText("Login failed! Please ensure the username and password are valid.");

    console.log("Incorrect password test completed ✅");
});

test("Cura automation appointment Success scenario ✅", async({ page }) =>{
    await allure.epic("Cura Automation");
    await allure.description("Cura automation appointment Success scenario ✅");
    await allure.feature("Essential features");
    await allure.story("Authentication");

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator('#btn-make-appointment').click();
    await page.fill('#txt-username','John Doe');
    await page.fill('#txt-password','ThisIsNotAPassword');
    await page.locator('#btn-login').click();
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    console.log("Success scenario verification completed ✅");
});
