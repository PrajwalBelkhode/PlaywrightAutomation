import {test, expect, Locator} from '@playwright/test'
import path from 'path';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';
test.describe('Multi File upload', () =>{
    test.beforeEach(async({ page }) =>{
        await page.goto(URL);
    });

    test('Multiple File Upload and Upload', async( { page }) =>{
        
            await page.locator('input[type="file"]').setInputFiles(
            [{
                name: 'SS1.png',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('Screenshot-1')
            },
            {
                name: 'SS2.png',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('Screenshot-1')
            }

            ]);
    await page.waitForTimeout(3000);
    });
    
    test.afterEach(async( { page }) =>{
        await page.close();
    });
});