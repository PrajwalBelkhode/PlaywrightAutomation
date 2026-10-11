import {test, expect} from '@playwright/test'

test.describe('Dropdowns - Part 2', () =>{
    test('Dropdowns - Part 2', async({ page }) =>{
        await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
        // CSS Selectors - Language dropdown
        await page.locator("[data-testid='lang-trigger']").click();
        await page.locator(".select-option[data-value='JavaScript']").click();
        // Web framework dropdown
        await page.locator(".select-trigger[data-testid='framework-trigger']").click();
        await page.locator(".select-option[data-value='React']").click();
        // Experience dropdown
        await page.locator("[id='experience-trigger']").click();
        await page.getByText('Mid-level (4-6 years)', { exact: true }).click();
        await page.getByRole('button',{name: 'Save selection'}).click();

        const output = page.locator('#dropdown-output');
        const text = await output.textContent();
        if (text != null){
            const data = JSON.parse(text);
        expect(data['dropdown-language']).toBe('JavaScript');
        expect(data['dropdown-framework']).toBe('React');
        expect(data['dropdown-experience']).toBe('Mid-level (4-6 years)');
        }

        await page.waitForTimeout(2000);
    });
});