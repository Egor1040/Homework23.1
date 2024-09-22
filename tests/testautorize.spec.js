import {test, expect} from '@playwright/test';

test('positive test for form autorization', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const header = page.locator('.header')
    const signInButton = header.locator('.header_signin');
    await signInButton.click();

    const RegistrationBtn = await page.getByText('Registration');
    await RegistrationBtn.click();

    const inputName = page.locator('#signupName');
    await inputName.fill('Ihor');

    const lastName = page.locator('#signupLastName');
    await lastName.fill('Motrii');

    const emailForm = page.locator('#signupEmail');
    await emailForm.fill('imotrii@trump.com');

    const firstPassword = page.locator('#signupPassword');
    await firstPassword.fill('12345678Motrii');

    const repeatPassword = page.locator('#signupRepeatPassword');
    await repeatPassword.fill('12345678Motrii');

    const Register = await page.getByText('Register');
    await Register.click();
})

test('negative test with Name', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const header = page.locator('.header')
    const signInButton = header.locator('.header_signin');
    await signInButton.click();

    const RegistrationBtn = await page.getByText('Registration');
    await RegistrationBtn.click();

    const inputName = page.locator('#signupName');
    await inputName.fill('2323');

    await page.click('.modal-header');
    await page.waitForTimeout(500);

    const borderColor = await inputName.evaluate((el) => window.getComputedStyle(el).borderColor);
    expect(borderColor).toBe('rgb(220, 53, 69)');
})

test('negative test with LastName', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const header = page.locator('.header')
    const signInButton = header.locator('.header_signin');
    await signInButton.click();

    const RegistrationBtn = await page.getByText('Registration');
    await RegistrationBtn.click();

    const lastName = page.locator('#signupLastName');
    await lastName.fill('231312');

    await page.click('.modal-header');
    await page.waitForTimeout(500);

    const borderColor = await lastName.evaluate((el) => window.getComputedStyle(el).borderColor);
    expect(borderColor).toBe('rgb(220, 53, 69)');
})

test('negative test with Email', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const header = page.locator('.header')
    const signInButton = header.locator('.header_signin');
    await signInButton.click();

    const RegistrationBtn = await page.getByText('Registration');
    await RegistrationBtn.click();

    const emailForm = page.locator('#signupEmail');
    await emailForm.fill('421421');

    await page.click('.modal-header');
    await page.waitForTimeout(500);

    const borderColor = await emailForm.evaluate((el) => window.getComputedStyle(el).borderColor);
    expect(borderColor).toBe('rgb(220, 53, 69)');
})

test('negative test with password', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const header = page.locator('.header')
    const signInButton = header.locator('.header_signin');
    await signInButton.click();

    const RegistrationBtn = await page.getByText('Registration');
    await RegistrationBtn.click();

    const firstPassword = page.locator('#signupPassword');
    await firstPassword.fill('12345678');

    const repeatPassword = page.locator('#signupRepeatPassword');
    await repeatPassword.fill('1278768768i');

    await page.click('.modal-header');
    await page.waitForTimeout(500);

    const borderColor = await firstPassword.evaluate((el) => window.getComputedStyle(el).borderColor);
    expect(borderColor).toBe('rgb(220, 53, 69)');
})