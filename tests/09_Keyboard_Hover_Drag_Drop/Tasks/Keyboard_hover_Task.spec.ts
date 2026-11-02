import {test, expect} from '@playwright/test'

test.describe('Keyboard and hover', () =>{
    test('TTA Keyboard hover', async({ page }) =>{
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
        await page.getByTestId('nav-add-ons').hover();
        await page.getByTestId('test-id-Activities').click();
        const output = await page.getByTestId('hover-output').innerText();
        console.log(output);

        // Content validation
        expect(output).toContain('Activities');
    });
});