<?php

namespace Tests\Browser;

use App\Models\Admin;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProductCreateTest extends DuskTestCase
{
    public function test_admin_can_access_create_product_form(): void
    {
        $admin = Admin::factory()->create();

        $this->browse(function (Browser $browser) use ($admin) {
            $browser->visit('/login')
                ->type('email', $admin->email)
                ->type('password', 'password')
                ->press('Sign In')
                ->assertPathIs('/product')
                ->clickLink('Create')
                ->assertPathIs('/product/form')
                ->assertSee('Product Create')
                ->assertSee('Name')
                ->assertSee('Category')
                ->assertSee('Description')
                ->assertSee('Step 1 / 3');
        });
    }
} 
