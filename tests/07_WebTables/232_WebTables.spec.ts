import {test, expect} from '@playwright/test'
import { connect } from 'http2';

test.describe('Web tables test', ()=>{
    test('Verify whether Helen Bennett actually lives in the UK - Using XPath', async({ page }) =>{
        await page.goto("https://awesomeqa.com/webtable.html");
        //Actual XPath: //table[@id="customers"]/tbody/tr[5]/td[2]

        //table[@id="customers"]/tbody/tr[
        // 5 - i
        // ]/ td[
        // 2 - j
        // ]

        const firstPart = '//table[@id="customers"]/tbody/tr[';
        const secondPart = ']/td[';
        const thirdPart = ']';

        const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
        const columns = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();

        for(let i = 2; i<= rows; i++){
            for(let j = 1; j<= columns; j++){
                const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                console.log(dynamicPath);
                const data = await page.locator(dynamicPath).innerText();
                console.log(data);

                if (data.includes('Helen Bennett')){
                    const countryPath = `${dynamicPath}/following-sibling::td`;
                    const countryText = await page.locator(countryPath).innerText();
                    console.log('--------');
                    console.log(`Helen Benett is in - ${countryText}`);
                }
            }
        }

    });

    test('Verify whether Helen Bennett actually lives in the UK - Using Playwright native', async({ page }) =>{
        await page.goto('https://awesomeqa.com/webtable.html');
        const row = page.locator('#customers tbody tr', {hasText: 'Helen Bennett'});
        const country = await row.locator('td').nth(2).innerText();
        console.log(`Helen Bennett is in ${country}`);

    });
})