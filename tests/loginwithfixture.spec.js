import test, { chromium } from "@playwright/test";

//Automatically browser open and Close can for this fixture
test('Invalid login test', async function myFirst({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Type valid Username, Invalid password, Click button
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('123');
    await page.locator('[type=submit]').click();

});

test('Invalid login test II', async function mySecond({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('');
    await page.locator('#password').fill('1234');
    await page.locator('[type=submit]').click();
});


test('Invalid login test III', async function myThird({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('');
    await page.locator('[type=submit]').click();
});

test('Invalid login test Iv', async function myForth({page}){

    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('Admin123');
    await page.locator('[type=submit]').click();
});
