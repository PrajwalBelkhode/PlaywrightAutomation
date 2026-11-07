import {test, expect, Locator} from '@playwright/test'

const URL: string = 'https://app.thetestingacademy.com/playwright/widgets/svg'
test.describe('SVG Practice - TTA', () =>{
test.beforeEach(async({ page }) =>{
    await page.goto(URL);
});

    test('locate SVG and assert visible - 1', async( { page }) =>{
        const circleShape: Locator = page.getByTestId('shape-circle-blue');
        await circleShape.click();

        // Validate output
        const output = await page.locator('#shapes-output').innerText();
        console.log(output);

        await page.waitForTimeout(2000);
    });

    test('locate SVG and assert visible - 2', async( { page }) =>{
        const bar: Locator = page.getByTestId('bar-q4');
        await bar.click();

        // Validate output:
        const output = await page.locator('#bars-output').innerText();
        console.log(output);

        await page.waitForTimeout(2000);
    });
    
        test('locate SVG and assert visible - 3', async( { page }) =>{
        const bar: Locator = page.getByTestId('star-5');
        await bar.click();

        // Validate output:
        const output = await page.getByTestId('stars-readout').innerText();
        console.log(output);

        await page.waitForTimeout(2000);
    });

});