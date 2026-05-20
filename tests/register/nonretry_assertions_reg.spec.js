import test, { expect } from '@playwright/test';
import { title } from 'node:process';

test('Registraion test', async function registraionTest({page}){

    await page.goto('https://test-automation-app.vercel.app/register')

    // Verify user see the Signup success message
    
    // Verify using retry assertions
    await page.locator('#txtName').fill('Kavinda');
    await page.locator('#btnSignUp').click();
    //untill message comes retry according to the playwrihgt config js time
    //comment this before run second testcases
    await expect(page.locator('[data-slot="alert-description"]')).toHaveText('Sign up successful! Welcome to our platform.');

    //Verify using non-retry assertions
    let alertValue = await page.locator('[data-slot="alert-description"]').textContent();
    //no retry, just come and check pass fail
    //Getting errors - Thatsthe learning curver. cause system not trying getting what expected
    expect(alertValue).toBe('Sign up successful! Welcome to our platform.');


    // Non-retrying assertions
    // These assertions allow to test any conditions, but do not auto-retry. 
    // Most of the time, web pages show information asynchronously, and using non-retrying assertions can lead to a flaky test.

    // Prefer auto-retrying assertions whenever possible. 
    // For more complex assertions that need to be retried, use expect.poll or expect.toPass.

});