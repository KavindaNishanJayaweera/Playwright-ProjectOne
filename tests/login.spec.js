import test, { chromium } from "@playwright/test";

test('Invalid login test', async function myFirst(){

    // Open chrome browser -- 1. Open Chromium Engine 2. Open new tab in engine
    let browserEngine = await chromium.launch();
    let newTab = await browserEngine.newPage();
    
    //Go to https://test-automation-app.vercel.app/login
    await newTab.goto('https://test-automation-app.vercel.app/login');

    //Type valid username
    await newTab.locator('#username').fill('test@gmail.com');

    //Type invalid password
    await newTab.locator('#password').fill('123');

    //Click Login button
    await newTab.locator('[type=submit]').click();

    //Verify error message - Later

    //Close the browser -- tab and engine both
    await newTab.close();
    await browserEngine.close();

    // //By default Playwirght automaticalyy close the browser
    // //SO Im giving a condition to a newtab open
    // // Ms 5000 =  5s
    // await newTab.waitForTimeout(5000);
});


test('Invalid login test II', async function mySecond(){

    //Engine open and then chrome browser open
    let browserEngine = await chromium.launch();
    let newTab = await browserEngine.newPage();

    //Navigate to site
    await newTab.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await newTab.locator('#username').fill('');
    await newTab.locator('#password').fill('1234');
    await newTab.locator('[type=submit]').click();

    //Close the browser and Engine
    await newTab.close();
    await browserEngine.close();
});


test('Invalid login test III', async function myThird(){

    //Engine open and then chrome browser open
    let browserEngineII = await chromium.launch();
    let newTabII = await browserEngineII.newPage();

    //Navigate to site
    await newTabII.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await newTabII.locator('#username').fill('test@gmail.com');
    await newTabII.locator('#password').fill('');
    await newTabII.locator('[type=submit]').click();

    //Close the browser and Engine
    await newTabII.close();
    await browserEngineII.close();
});

test('Invalid login test Iv', async function myForth(){

    //Engine open and then chrome browser open
    let browserEngineII = await chromium.launch();
    let newTabII = await browserEngineII.newPage();

    //Navigate to site
    await newTabII.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await newTabII.locator('#username').fill('test@gmail.com');
    await newTabII.locator('#password').fill('Admin123');
    await newTabII.locator('[type=submit]').click();

    //Close the browser and Engine
    await newTabII.close();
    await browserEngineII.close();
});
