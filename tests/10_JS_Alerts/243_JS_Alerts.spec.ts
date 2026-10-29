import {test, expect, FrameLocator, Locator} from '@playwright/test'

test.describe('JS Alerts', () =>{

    test.beforeEach(async({ page }) =>{
         await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });
    test('JS Alerts - Accept 1', async({ page }) =>{
        page.once('dialog', async dialog =>{
            console.log('Alert type:', dialog.type());
            console.log('Alert message:',dialog.message());
            expect(dialog.message()).toBe('I am a JS Alert');
            await dialog.accept();
        })
        
        await page.getByRole('button',{name: 'Click for JS Alert'}).click();
    });

    test('JS Confirm - Accept 2', async({ page }) =>{
        page.once('dialog', async dialog =>{
            console.log('Alert type:', dialog.type());
            expect(dialog.type()).toBe('confirm');
            console.log('Alert message:', dialog.message());
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.accept();
            // await dialog.dismiss(); -- In case you want to click on cancel
        });
        await page.getByText('Click for JS Confirm', { exact: true }).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    });

    test('JS Prompt - Accept 3', async({ page }) =>{

        const inputText = 'Hello and Good evening!!!';
        page.once('dialog', async dialog =>{
            expect(dialog.type()).toBe('prompt');
            expect(dialog.defaultValue()).toBe('');
            await dialog.accept(inputText);
            // await dialog.dismiss(); -- In case you want to click on cancel
        });

        await page.locator('button', {hasText:'Click for JS Prompt'}).click();
        await expect(page.locator('#result')).toHaveText('You entered: '+inputText);
    });
});