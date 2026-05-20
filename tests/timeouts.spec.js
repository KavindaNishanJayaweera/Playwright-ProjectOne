import test, { chromium, expect } from "@playwright/test";

test('Invalid login test III', async function myThird({page}){

    //This is only for this test case
    //test.setTimeout(50000);

    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('');
    await page.locator('[type=submit]').click();

    //Verification
    //Locate element of Actual error message
    let actualMessages =  page.locator('.passworderror');

    //Get expected error message
    let expectedMessages = 'Password is required';

    //Verify Element is having the expected error message

    //await expect(actualMessages).toHaveText(expectedMessages,{timeout:10000});
    //Cannot add every tese case 
    // So change it on playwright config js file

    await expect(actualMessages).toHaveText(expectedMessages);

});