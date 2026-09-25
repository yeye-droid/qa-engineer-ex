

import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Products', () => {

    // Test 1: UI
    test('admin can view the products page', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(
            'kling.rod@example.com',
            'password'
        );

        await page.goto('/product');

        await expect(
            page.getByText('Products', { exact: true }).first()
        ).toBeVisible();

        await expect(
            page.locator('table')
        ).toBeVisible();
    });


    // Test 2: Functionality / Navigation
    test('admin can navigate to the create product form', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(
            'kling.rod@example.com',
            'password'
        );

        await page.goto('/product');

        const createButton = page
            .getByText('Create', { exact: true })
            .first();

        await expect(createButton).toBeVisible();

        await createButton.click();

        await expect(page).toHaveURL(
            'http://127.0.0.1:8000/product/form'
        );
    });


    // Test 3: Data / Content
    test('products table contains product data', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(
            'kling.rod@example.com',
            'password'
        );

        await page.goto('/product');

        const productTable = page.locator('table');
        const productRows = productTable.locator('tbody tr');

        await expect(productTable).toBeVisible();
        await expect(productRows.first()).toBeVisible();

        const rowCount = await productRows.count();

        expect(rowCount).toBeGreaterThan(0);
    });

});
