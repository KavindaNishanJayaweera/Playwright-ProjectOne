import test, {expect} from "@playwright/test";


test('Add Students', async function addStudent({page}){

    await page.goto('https://test-automation-app.vercel.app/login');
    await page.locator('#username').fill('test@gmail.com');
    await page.locator('#password').fill('Admin123');
    await page.getByText('Sign In').click();

    await page.locator('#btnaddStudent').click();

    //await page.locator('#profilePicture').setInputFiles('C:\\Users\\zko78\\Desktop\\Automation\\Playwright cource\\Projects\\ProjectOne\\uploads\\Test.png');
    await page.locator('#profilePicture').setInputFiles('uploads\/Test.png');

    await page.getByPlaceholder('Enter first name').fill('Kav');
    await page.getByPlaceholder('Enter last name').fill('Jay');
    await page.getByPlaceholder('Enter email address').fill('Kav@gamil.com');
    await page.getByPlaceholder('Enter phone number').fill('+94789419247');

    await page.locator('#gender-male').click();
    await page.getByLabel('playwright').click();

    await page.locator('#btn-submit').click();

    await expect(page.locator('#success-title')).toHaveText('Student Added Successfully!');

})