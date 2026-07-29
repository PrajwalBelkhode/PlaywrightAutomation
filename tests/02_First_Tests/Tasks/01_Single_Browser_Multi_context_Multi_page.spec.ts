import {test, expect} from '@playwright/test'

test('Single_browser_with_multi_context_Muti_Page', async({browser}) =>{

    //First context and page
    let SuperadminContext = await browser.newContext();
    let SuperadminLoginPage = await SuperadminContext.newPage();

    let trialUserContext = await browser.newContext();
    let trialUserPage = await trialUserContext.newPage();

    await SuperadminLoginPage.goto("https://app.vwo.com/");
    await expect(SuperadminLoginPage).toHaveTitle("Login - Wingify")
    await trialUserPage.goto("https://vwo.com/");
    await expect(trialUserPage).toHaveURL("https://vwo.com/");

    console.log("Single_browser_with_multi_context is PASS ✅");

})