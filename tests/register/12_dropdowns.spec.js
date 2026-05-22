import test, { expect } from '@playwright/test';

test('elements handeling', async function elements({page}){

    //same code base as 11_checkvsclick'.spec.js
    await page.goto('https://test-automation-app.vercel.app/register')

    await page.getByPlaceholder('Name').fill('Kavinda Jay');
    await page.getByLabel('Email').fill('kav@gmail.com');
    await page.getByTestId('pwd').fill('Kavinda');
    //await page.locator('#txtFile').setInputFiles('C:\\Users\\zko78\\Desktop\\Automation\\Playwright cource\\Projects\\ProjectOne\\uploads\\Test.png');
    await page.locator('#cbkSelenium').click();
    await page.locator('#cbkCSharp').check();
    await page.getByRole('checkbox',{name:'Playwright'}).click();
    await page.getByRole('checkbox',{name:'Technology'}).click();
    await page.getByTitle('maleradio').check();

    //dropdown

    //IF DROPDOWN START WITH SELECT TAG ONLY WE CAN USE SELECT OPTION
    await page.locator('#ddlCountry').selectOption('USA');

    //CUSTOM DROPDOWN - START WITH ANY OTHER USING SELECT
    await page.locator('[role="combobox"]').click();
    await page.locator('[index="3"]').click();

    //Button click
    await page.getByText('Sign up').click();



    await page.waitForTimeout(10000);

})