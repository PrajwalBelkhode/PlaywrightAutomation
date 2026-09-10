import {test, expect} from "@playwright/test"
import * as allure from "allure-js-commons";

test ("Verify the VWO login", async({page}) => {

    await allure.epic("VWO login verification");
    await allure.description("Verify that the login page works");
    await allure.feature("Essential features");
    await allure.story("Authentication");

    console.log("Open VWO app ✅");
    await page.goto("https://app.vwo.com/#/login");
    await page.fill("#login-username", "qrfcua18394@aiqseo.com");
    await page.fill("#login-password", "UDH@aiqseo123");

    console.log("Entered valid credentials ✅");

    await page.waitForTimeout(1000);
    await page.click("#js-login-btn");

    console.log("Clicked on Sign--in button");

    await page.waitForURL(/#\/(dashboard|home)/, {timeout: 10000});
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle("Dashboard");
    await expect(page).toHaveURL("https://app.wingify.com/#/dashboard?accountId=1275982");

    console.log("Log in success. Opened dashboard page ✅");
});