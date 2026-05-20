import test, { expect } from '@playwright/test';
import { title } from 'node:process';

test('Registraion test', async function registraionTest({page}){

    await page.goto('https://test-automation-app.vercel.app/register')

    //Verify the page title
    await expect(page).toHaveTitle('Test Automation');

    //Verify the page URL
    await expect(page).toHaveURL('https://test-automation-app.vercel.app/register');

    //Page logo
    await expect(page.locator('[alt="Logo"]')).toBeVisible();

    //Sign up button disabled
    await expect(page.locator('#btnSignUp')).toBeDisabled();

    //Class name of the Password field
    await expect(page.locator('#txtPassword')).toContainClass('password');

    //File upload button visibility
    await expect(page.locator('#txtFile')).toBeEnabled();

    //Click on Playwrihgt check box and checked the status of checked
    //Click Checkbox
    await page.locator('#cbkPlaywright').click();
    //Verify its clicked or not
    await expect(page.locator('#cbkPlaywright')).toBeChecked();

    //Check the interests items checkbox count
    await expect(page.locator('[role="checkbox"]')).toHaveCount(8);

    //Check FB icon have attribute as title and value is facebook

    //This is for an attribut -- Like id, class, title or any other
    await expect(page.locator('[title="facebook"]')).toHaveAttribute('title','facebook');
    
    //Another working code for attribute
    //await expect(page.locator('[role="radiogroup"]')).toHaveAttribute('role','radiogroup');


});