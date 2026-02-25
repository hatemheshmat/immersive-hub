<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

Route::get('/reset-database', function () {
    try {
        \Illuminate\Support\Facades\DB::statement('DROP TABLE IF EXISTS bookings');
        \Illuminate\Support\Facades\DB::statement('DROP TABLE IF EXISTS sessions');
        \Illuminate\Support\Facades\Artisan::call('migrate', ['--force' => true]);
        return 'Database completely wiped and rebuilt securely!';
    }
    catch (\Exception $e) {
        return 'Error running migrations: ' . $e->getMessage();
    }
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
