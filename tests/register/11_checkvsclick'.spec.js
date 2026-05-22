import test, { expect } from '@playwright/test';

test('elements handeling', async function elements({page}){

    //same code base as 10_elements_handling.spec.js
    await page.goto('https://test-automation-app.vercel.app/register')

    await page.getByPlaceholder('Name').fill('Kavinda Jay');
    await page.getByLabel('Email').fill('kav@gmail.com');
    await page.getByTestId('pwd').fill('Kavinda');
    await page.locator('#txtFile').setInputFiles('C:\\Users\\zko78\\Desktop\\Automation\\Playwright cource\\Projects\\ProjectOne\\uploads\\Test.png');
    await page.locator('#cbkSelenium').click();
    await page.locator('#cbkCSharp').check();
    await page.getByRole('checkbox',{name:'Playwright'}).click();
    await page.getByRole('checkbox',{name:'Technology'}).click();
    await page.getByTitle('maleradio').check();

    //Element type Checkbox or Radio then we can use checked other than clicked
    //type="button" then cant user checked, Use clicked
    //type="button" but role="checkebox" or "radio" we can use checked

    //Check working due to one match
    //await page.getByRole('checkbox',{name:'Playwright'}).check(); 

    await page.waitForTimeout(10000);

})