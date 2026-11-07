import {test, expect, Locator} from '@playwright/test'

const URL = 'https://www.flipkart.com/search'
test.describe('SVG handling', () =>{

    test.beforeEach(async ({ page }) =>{
        await page.goto(URL);
    });

    test('locate SVG root and assert variable', async({ page }) =>{
        await page.getByTitle('Search for Products, Brands and More').fill('macmini m6');
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();
        await page.waitForTimeout(3000);

        const firstResult: Locator = page.locator('//div[contains(@data-id,"CPU")]/div/a[2]');
        await expect(firstResult.first()).toBeVisible({ timeout: 5000});

        const titleResults: Locator = page.locator('//div[contains(@data-id,"MP")]/div/a[2]');
        const count: number = await titleResults.count();
        console.log('Total products found:'+count);

        for (let i  = 0; i < count; i++){
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title?.trim());
        }
        await page.waitForTimeout(2000);
    });
});