import test, {expect} from "@playwright/test";

test('Enroll Test Automation with Playwright',async function enrollPlaywright({page}){

    await page.goto('https://test-automation-app.vercel.app/login')
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('Admin123');
    await page.getByText('Sign In').click();

    await expect(page.locator('[data-slot="card"]')).toHaveCount(3);

    await page.locator('#enroll-playwright').click();

    await expect(page.locator('#total-price')).toHaveText('LKR 10,200');

    await page.locator('#btn-continue').click();

    await page.getByPlaceholder('Enter name on card').fill('Kav Jay');

    await page.locator('#cardNumber').fill('1234 5678 9192 1112');

    await page.locator('#cvv').fill('123');
    
    await page.locator('#btn-pay').click();

    await expect(page.locator('#success-title')).toHaveText('Payment Successful!');
})