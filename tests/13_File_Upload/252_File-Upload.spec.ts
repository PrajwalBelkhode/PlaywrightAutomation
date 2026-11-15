import {test, expect, Locator} from '@playwright/test';
import path from 'path'

const URL = 'https://the-internet.herokuapp.com/upload';
test.describe('Basic File upload', () =>{
    test.beforeEach(async({ page }) =>{
        await page.goto(URL);
    });

    test('Locate FileUpload and Upload', async( { page } ) =>{
        const filePath = path.join(__dirname, `testdata.txt`);
        console.log('File Path:', filePath);
        await page.locator('#file-upload').setInputFiles([filePath]);
        await page.locator('#file-submit').click();
        await expect(page.locator(`#uploaded-files`)).toContainText('testdata.txt');
        await page.waitForTimeout(3000);
        console.log('File uploaded successful ✅');
    });
});