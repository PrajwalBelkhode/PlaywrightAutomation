import {test, expect} from '@playwright/test'

test.describe('Web tables test', () =>{
    test('Dynamic web tables - structured extraction', async({ page }) =>{
        await page.goto("https://awesomeqa.com/webtable1.html");
        const rows = page.locator('table[summary="Sample Table"] tbody tr');
        const rowCount = await rows.count();
        console.log(rowCount);

        // Playwright native locator strategy
        for(let i = 1; i<= rowCount; i++){
            const rowData = await rows.nth(i).locator('td').allInnerTexts();
            console.log(`Row ${i + 1}:`, rowData);
        }
    })
})