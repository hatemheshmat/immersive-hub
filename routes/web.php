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

Route::post('/api/bookings', function (\Illuminate\Http\Request $request) {
    try {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        $booking = \App\Models\Booking::create($data);
        return response()->json(['message' => 'Booking created successfully', 'booking' => $booking], 201);
    }
    catch (\Exception $e) {
        return response()->json(['message' => 'Error creating booking', 'error' => $e->getMessage()], 400);
    }
})->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
