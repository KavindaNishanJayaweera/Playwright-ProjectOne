import test, { chromium, firefox } from "@playwright/test";

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