import {chromium} from "playwright"

async function saveSession() {

    console.log("Opening browser")
    let browser = await chromium.launch({headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();

    console.log("I am going to VWO app")
    await page.goto("https://app.vwo.com/#/login");
    await page.waitForTimeout(2000);

    console.log("Entering username")
    await page.fill('#login-username', "crubij1654@supermmw.online");
    console.log("Entering password");
    await page.fill('#login-password', "VwoAdmin@#123");
    // Add timeout of 1 second
    await page.waitForTimeout(1000);
    console.log("Clicking on submit button");
    await page.click("#js-login-btn");
    
    console.log("Verifying dashboard page")
    await page.waitForURL(/#\/(dashboard|home)/, {timeout: 10000});
    await page.waitForTimeout(2000);

    await context.storageState({path:"./user-session.json"});
    console.log("Session saved to user session.js ✅");

    await page.waitForTimeout(2500);
    console.log("Closing the browser");
    await browser.close();

}


saveSession().catch((err) => {
    console.error("ERROR OCCURRED:");
    console.error(err);
});