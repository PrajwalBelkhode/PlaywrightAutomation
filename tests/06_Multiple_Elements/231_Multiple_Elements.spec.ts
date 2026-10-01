import {test, expect} from '@playwright/test'

test.describe('Handling multiple elements', () => {
    test('Basic Test', async({ page }) =>{
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
        const rightPanelLinksText: string[] = await page.locator('a.list-group-item').allInnerTexts();
        console.log(`${rightPanelLinksText.length}`);

        for (const linkTest of rightPanelLinksText){
            if (linkTest === 'My Account'){
                await page.getByText(linkTest).first().click();
                break;
            }
        }
    });
});