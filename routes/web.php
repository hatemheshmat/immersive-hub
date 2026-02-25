<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

Route::get('/migrate', function () {
    try {
        Artisan::call('migrate', ['--force' => true]);
        return 'Migrations completed successfully! You can now use the database.';
    }
    catch (\Exception $e) {
        return 'Error running migrations: ' . $e->getMessage();
    }
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
