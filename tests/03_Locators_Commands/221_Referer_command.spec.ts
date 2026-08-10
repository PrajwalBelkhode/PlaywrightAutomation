import { test } from '@playwright/test';

test("Set referer to the entire context", async({ browser }) =>{
    let context = await browser.newContext({
        extraHTTPHeaders:{
            "Referer": "https://thetestingacademy.com"
        }
    });

    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Page 1 - Partner referer included");

    let page2 = await context.newPage();
    await page2.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 - Partner referer included");

});