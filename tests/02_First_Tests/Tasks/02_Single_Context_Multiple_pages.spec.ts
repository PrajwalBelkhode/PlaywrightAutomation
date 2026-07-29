import {test, expect} from '@playwright/test'

test('Single_context_multiple_browser', async({ browser }) =>{
    let browserContext = await browser.newContext();

    //VWO Login page

    let VWOLoginPage = await browserContext.newPage();
    await VWOLoginPage.goto("https://app.vwo.com/");
    
    //Cura health Login page
    let CurahealthLoginPage = await browserContext.newPage();
    await CurahealthLoginPage.goto("https://katalon-demo-cura.herokuapp.com/");

    console.log("Single_context_multiple_browser is PASS ✅");
})