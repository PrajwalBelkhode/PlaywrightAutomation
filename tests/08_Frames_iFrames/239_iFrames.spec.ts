import {test, expect, FrameLocator} from '@playwright/test'

test.describe('Frames and iFrames', () =>{
    test('Single Frames', async ({ page }) =>{ 
        await page.goto('https://app.thetestingacademy.com/playwright/frames/');
        let vehicleFrame: FrameLocator = await page.frameLocator('#frame-one');
        await vehicleFrame.getByPlaceholder('e.g. Test Automation').fill('Hyundai Verna');
        await vehicleFrame.getByPlaceholder('Aarav Sharma').fill('Prajwal Madan Belkhode');
        await vehicleFrame.getByPlaceholder('MH-12-AB-1234').fill('MH-31-DV-8919');
        await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Sedan');
        await vehicleFrame.locator('#RESULT_TextField-4').fill('2027');
        await vehicleFrame.locator('#RESULT_TextArea-1').fill('Classy - comfortable and a good car');
        await vehicleFrame.locator('#vehicle-submit').click();

        let output = await vehicleFrame.locator('#vehicle-output').innerText();
        console.log(output);

        await page.waitForTimeout(3000);
    });
})