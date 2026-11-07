import {test, expect, Locator} from '@playwright/test'

const simpleMaps: string = 'https://simplemaps.com/svg/country/in'
test.describe('Advanced SVG Handling - Map selection', () =>{
    test.beforeEach(async({ page }) =>{
        await page.goto(simpleMaps);
    });

    test('Generate the list of all the states', async({ page }) =>{
        const states = await page
            .locator(
                `//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]`,
            )
            .allTextContents();
            // Printing all the states and clicking on UP
            for (const state of states){
                if(state.trim() === 'Uttar Pradesh'){
                    await page.locator(`//*[name()='path' and contains(@class,'INUP')]`).click();
                }
            }
    });


});