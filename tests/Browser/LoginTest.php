<?php

namespace Tests\Browser;

use App\Models\Admin;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    public function test_admin_can_login(): void
    {
        $admin = Admin::factory()->create();

        $this->browse(function (Browser $browser) use ($admin) {
            $browser->visit('/login')
                ->assertSee('Sign In')
                ->type('email', $admin->email)
                ->type('password', 'password')
                ->press('Sign In')
                ->assertPathIs('/product');
        });
    }
}
