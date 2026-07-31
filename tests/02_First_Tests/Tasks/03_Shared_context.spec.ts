import {test, expect} from '@playwright/test'

test.describe("Shared context tests", () =>{

    test.use({
        viewport: {width: 1280,height: 720},
        locale: 'en-US'
    });
    test("VWO login page", async({ page }) =>{
        await page.goto("https://app.vwo.com/");
        console.log("Page 1 —→ VWO app login ✅")
    });

    test("Cura health login page", async({ page }) =>{
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        console.log("Page 1 —→ Cura healthlogin ✅")
    });

    console.log("Shared context tests —→ PASS ✅");
});