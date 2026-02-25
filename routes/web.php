<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

Route::get('/migrate', function () {
    try {
        Artisan::call('migrate:fresh', ['--force' => true]);
        return 'Migrations completed successfully! Your database is completely fresh and ready to use.';
    }
    catch (\Exception $e) {
        return 'Error running migrations: ' . $e->getMessage();
    }
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
