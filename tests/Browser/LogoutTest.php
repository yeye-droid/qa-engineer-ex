<?php

namespace Tests\Browser;

use App\Models\Admin;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LogoutTest extends DuskTestCase
{
    public function test_admin_cannot_access_products_after_logout(): void
    {
        $admin = Admin::factory()->create();

        $this->browse(function (Browser $browser) use ($admin) {
            $browser->visit('/login')
                ->type('email', $admin->email)
                ->type('password', 'password')
                ->press('Sign In')
                ->assertPathIs('/product')
                ->assertSee('Products')

                // Logout
                ->clickLink('Logout')
                ->assertPathIs('/login')
                ->assertSee('Sign In')

                // Try accessing protected page again
                ->visit('/product')
                ->assertPathIs('/login')
                ->assertSee('Sign In');
        });
    }
}
