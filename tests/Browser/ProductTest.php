<?php

namespace Tests\Browser;

use App\Models\Admin;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProductTest extends DuskTestCase
{
    public function test_admin_can_access_products_page(): void
    {
        $admin = Admin::factory()->create();

        $this->browse(function (Browser $browser) use ($admin) {
            $browser->visit('/login')
                ->type('email', $admin->email)
                ->type('password', 'password')
                ->press('Sign In')
                ->assertPathIs('/product')
                ->assertSee('Products')
                ->assertSee('Create')
                ->assertPresent('input[placeholder="Search Product..."	]');
        });
    }
}
