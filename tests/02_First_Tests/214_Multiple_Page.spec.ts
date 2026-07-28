import {Browser,chromium} from 'playwright'

async function multiTabTest(){
    let browser:Browser = await chromium.launch({headless: false});
    let context = await browser.newContext();

    //Tab 1:
    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Page 1: Login");

    //Tab 2:
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
    console.log("Page 2: Dashboard")

    //Cleanup

    await page1.close();
    await page2.close();
    await context.close();
    await browser.close();
}

multiTabTest();