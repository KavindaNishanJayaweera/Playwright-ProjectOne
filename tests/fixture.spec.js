import test, { chromium, firefox } from "@playwright/test";

//Browser fixture
test('Invalid login test', async function myFirst({browser}){

    // Open chrome browser -- 1. Open Chromium Engine 2. Open new tab in engine

    //Commmenting this section you dont have to idea which browser will be open.. 
    //Goto Playwrihgt.config.js and open browsers
    //let browserEngine = await chromium.launch();
    //let browserEngine = await firefox.launch();

    //now you dont have idea which browser open - so do the chnage with Playwright.config.js and add only relevent
    let newTab = await browser.newPage();
    
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
    //await browserEngine.close();

});

//Page fixture
test('Invalid login test II', async function mySecond({page}){

    //Engine open and then chrome browser open
    //let browserEngine = await chromium.launch();
    //let newTab = await browserEngine.newPage();

    //Navigate to site
    await page.goto('https://test-automation-app.vercel.app/login');

    //Enter Valid password, Empty username,  Click login button
    await page.locator('#username').fill('');
    await page.locator('#password').fill('1234');
    await page.locator('[type=submit]').click();

    //Close the browser and Engine
    //await page.close();
    //await browserEngine.close();
});


//Browser name fixture
//Test only
test.only('Invalid login test III', async function myThird({browserName}){

    test.skip(browserName=='firefox');
    console.log(browserName);

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