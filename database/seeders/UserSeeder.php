<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::updateOrCreate(
        ['email' => 'admin@immersivehub.org'],
        [
            'name' => 'Admin',
            'password' => 'ImmersiveHubAdmin2026!',
        ]
        );

        \App\Models\User::updateOrCreate(
        ['email' => 'sales@immersivehub.org'],
        [
            'name' => 'Sales Team',
            'password' => 'ImmersiveHubSales2026!',
        ]
        );
    }
}
