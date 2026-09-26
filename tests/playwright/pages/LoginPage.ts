import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }



async goto() {
    await this.page.goto('/login');
    console.log('LOGIN URL:', this.page.url());
    console.log('LOGIN TITLE:', await this.page.title());
    console.log(
        'LOGIN HTML:',
        (await this.page.locator('body').innerText()).substring(0, 1000)
    );
}
async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
  }
}
