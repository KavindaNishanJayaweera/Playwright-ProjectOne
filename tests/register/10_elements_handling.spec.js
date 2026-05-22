import test, { expect } from '@playwright/test';

test('elements handeling', async function elements({page}){

    await page.goto('https://test-automation-app.vercel.app/register')

    //get By Place Holder
    await page.getByPlaceholder('Name').fill('Kavinda Jay');

    //get By Lable
    await page.getByLabel('Email').fill('kav@gmail.com');

    //get By
    //data-testid="pwd"
    await page.getByTestId('pwd').fill('Kavinda');

    //File upload
    // Copy path - C:\Users\zko78\Desktop\Automation\Playwright cource\Projects\ProjectOne\uploads\Test .png
    //Edit with //
    await page.locator('#txtFile').setInputFiles('C:\\Users\\zko78\\Desktop\\Automation\\Playwright cource\\Projects\\ProjectOne\\uploads\\Test.png');
    
    //relative path - working
    //await page.locator('#txtFile').setInputFiles('uploads\/Test.png');

    //Click type 1 check box - click only check box 
    //Role is check box and lable name is playwright
    await page.locator('#cbkSelenium').click();
    await page.locator('#cbkCSharp').check();

    //Handle this need to link lable and check box using for
    //Click type 2 check box - click anywhere on the check box 
    await page.getByRole('checkbox',{name:'Playwright'}).click();

    //Technology
    await page.getByRole('checkbox',{name:'Technology'}).click();

    //Radio buttons
    await page.getByTitle('maleradio').check();

    await page.waitForTimeout(10000);

})