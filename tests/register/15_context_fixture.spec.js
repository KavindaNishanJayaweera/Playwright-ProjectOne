import test from '@playwright/test';

test('request',async function contextFixture({context}){

    //One test case -- Two dif situations
    //SITUATION 1
    //Admin user
    let pageOne = await context.newPage();

    await pageOne.goto('https://test-automation-app.vercel.app/login');
    await pageOne.locator('#username').fill('test@gmail.com');
    await pageOne.locator('#password').fill('Admin123');
    await pageOne.locator('[type="submit"]').click();

    //Verify payment option is avaible

    //SITUATION 2
    //Normal user
    let pageTwo = await context.newPage();

    await pageTwo.goto('https://test-automation-app.vercel.app/login');
    await pageTwo.locator('#username').fill('user@gmail.com');
    await pageTwo.locator('#password').fill('user123');
    //await pageTwo.locator('[type="submit"]').click();

    await pageTwo.locator('xpath=//*[@id="root"]/div/div/div[1]/div[2]/form/button').click();


});