import {test, expect, Locator} from '@playwright/test'

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';

test.describe('Shadow Handling', () =>{
    test.beforeEach(async({ page }) =>{
        await page.goto(URL);
    });

    test('Locate Shadow DOM and assert variables', async( { page} ) =>{
        const card = page.getByTestId('card-account');
        await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
        await card.locator('input[name="password"]').fill('Student@123');
        await card.getByTestId('card-account-submit').click();
        let text = await card.locator('.status').innerText()
        console.log(text);

        await page.waitForTimeout(2000);
    });

    test('Increment and Decrement buttons', async( { page }) =>{
        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', {name: 'Increment'}).click();
        await cart.getByRole('button', {name: 'Increment'}).click();
        await cart.getByRole('button', {name: 'Increment'}).click();
        await expect(cart.getByTestId('counter-value')).toHaveText('6');
    });

    test('Nested shadow DOMs', async({ page }) =>{
        const Nested =  page.getByTestId('nested-host');
        await Nested.getByTestId('card-inside-email').fill('student@thetestingacademy.com');
        await Nested.getByTestId('card-inside-password').fill('Student@123');
        await Nested.getByTestId('card-inside-submit').click();
        const output = await Nested.getByTestId('card-inside-status').innerText();
        console.log(output);

        await page.waitForTimeout(2000);
    });

    

    test.afterEach(async( { page }) =>{
        await page.close();
    });
});