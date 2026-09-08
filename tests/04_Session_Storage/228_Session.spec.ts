import {chromium} from 'playwright'

async function saveSession() {
    let browser = await chromium.launch();
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.vwo.com/#/login");
    await page.fill("#login-username", "qrfcua18394@aiqseo.com");
    await page.fill("#login-password", "UDH@aiqseo123");
    await page.click("#js-login-btn");

    await context.storageState({ path: "./auth/user-session.json"});
    console.log("Session saved to user-session.json ✅");
    await browser.close();
}

saveSession();