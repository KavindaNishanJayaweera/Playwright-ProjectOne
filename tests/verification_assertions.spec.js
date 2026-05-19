import test, { chromium, expect } from "@playwright/test";

//Automatically browser open and Close can for this fixture
test('Invalid login test', async function myFirst({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Type valid Username, Invalid password, Click button
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('123');
    await page.locator('[type=submit]').click();

    //https://playwright.dev/docs/test-assertions
    //Verification
    //Step 1 - Locate element actual error messsage display
    let actualMessage = page.locator('[data-slot="alert-description"]');

    //Step 2 - Get expected error message
    let expectedMessage = 'Invalid email or password. Please try again.';

    //Step 3 -Verify Element is having the expected error message
    await expect(actualMessage).toHaveText(expectedMessage);

    //await page.waitForTimeout(10000);

});

test('Invalid login test II', async function mySecond({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('');
    await page.locator('#password').fill('1234');
    await page.locator('[type=submit]').click();

    //Verification
    //Locate element of Actual error message
    let actualMessage =  page.locator('.emailerror');

    //Get expected error message
    let expectedMessage = 'Email is required';

    //Verify Element is having the expected error message
    await expect(actualMessage).toHaveText(expectedMessage);

    //await page.waitForTimeout(10000);
});


test('Invalid login test III', async function myThird({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('');
    await page.locator('[type=submit]').click();
});

//Verify logged user to title
test('Invalid login test Iv', async function myForth({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('Admin123');
    await page.locator('[type=submit]').click();


    //Verification
    //Locate element of Actual message
    let actualMessage = page.locator('#header');

    //Get expected message
    let expectedMessage = 'Learn Test Automation';

    //Verify Element is having the expected message
    await expect(actualMessage).toHaveText(expectedMessage);

    //wait page.waitForTimeout(10000);
});
