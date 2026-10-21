import {test, expect, FrameLocator, Locator} from '@playwright/test'

test.describe('Playwrighjt IFrames', () =>{
    test('Nested IFrames exercise', async({ page }) =>{
        // Navigate to the page
        await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');
        // Use Frame locators to get the nested frames
        let frame1:FrameLocator = await page.frameLocator('#pact1');
        let frame2:FrameLocator = await frame1.frameLocator('#pact2');
        let frame3:FrameLocator = await frame2.frameLocator('#pact3');

        // Fill values
        await frame1.locator('#inp_val').fill('Playwright');
        await frame2.locator('#jex').fill('Basic Framework');
        await frame3.locator('#glaf').fill('TypeScript');

        const headerText = await page.locator('h3').first().innerText();
        console.log(headerText);
        await page.waitForTimeout(2000);
        await page.close();
    });
});