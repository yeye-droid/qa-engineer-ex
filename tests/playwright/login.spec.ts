import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('admin can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
        'kling.rod@example.com',
        'password'
    );

    await expect(page).not.toHaveURL(/\/login/);
});
