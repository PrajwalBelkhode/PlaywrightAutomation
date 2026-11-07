import {test, expect, Locator} from '@playwright/test'

const Flipkart_URL = 'https://www.flipkart.com/search';
let cheapestPrice = Infinity;
test.describe('SVG Handling Exercise', () =>{
    test.beforeEach(async( { page }) =>{
        await page.goto(Flipkart_URL);
    });

    test('SVG Handling and Finding the cheapest macmini available', async({ page }) =>{
        await page.getByTitle('Search for Products, Brands and More').fill('macmini');
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();
        await page.waitForTimeout(4000);
        await page.getByText('Price -- Low to High',{exact: true}).first().click();
        const AllPrices: Locator = page.locator('//div[@class="QiMO5r"]');
        const prices:string[] = await AllPrices.allInnerTexts();

        for (const price of prices){
            const actualprice = price.match(/₹[\d,]+/);
            console.log(actualprice ? actualprice[0]: 'Price not found');
        }

        for (let i = 0; i < prices.length; i++){
            const actualprice = prices[i].match(/₹[\d,]+/);
            if(actualprice){
                const numericPrice: number = Number(actualprice[0].replace(/[₹,]/g, ''));
                if(numericPrice < cheapestPrice){
                    cheapestPrice = numericPrice;
                }
            }
        }
        console.log('Cheapest mac mini Price:₹'+cheapestPrice.toLocaleString('en-IN'));
    });

        test.afterEach(async( { page }) =>{
        await page.close();
    });
});