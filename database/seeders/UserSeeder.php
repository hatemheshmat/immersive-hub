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
        \App\Models\User::firstOrCreate(
        ['email' => 'admin@immersivehub.org'],
        [
            'name' => 'Admin',
            'password' => \Illuminate\Support\Facades\Hash::make('ImmersiveHubAdmin2026!'),
        ]
        );

        \App\Models\User::firstOrCreate(
        ['email' => 'sales@immersivehub.org'],
        [
            'name' => 'Sales Team',
            'password' => \Illuminate\Support\Facades\Hash::make('ImmersiveHubSales2026!'),
        ]
        );
    }
}
