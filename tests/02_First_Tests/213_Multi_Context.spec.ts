import {chromium, Browser} from 'playwright';

async function multiUserTest() {
    let browser: Browser = await chromium.launch({ headless: false});

    //Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/#/login");
    console.log("Admin: On login page");

    // Viewere
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/#/login");
    console.log("Viewer: On login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();
}

multiUserTest();