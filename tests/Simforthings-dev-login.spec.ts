import {test, expect} from '@playwright/test'
import * as allure from 'allure-js-commons'


test("SIM for Things - Dev login", async({page}) =>{
    await allure.epic("SIM for Things - Login");
    await allure.description("SIM for Things - Non PROD login page happy path");
    await allure.feature("Essential features");
    await allure.story("Authentication");
    
    console.log("Login to the SIM for Things");
    await page.goto("https://simforthings-dev.bics.com/login");
    await page.getByRole('textbox', { name: 'User Name' }).fill("Prajwal");
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Password' }).fill("Adminuser@123");
    await page.waitForTimeout(3000);
    await page.getByRole('button', {name: 'Login'}).click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveURL("https://simforthings-dev.bics.com/#/home")
    console.log("SIM for Things - Dev login - Happy path completed ✅");
});