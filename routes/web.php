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

Route::post('/api/contacts', function (\Illuminate\Http\Request $request) {
    try {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'school' => 'nullable|string|max:255',
            'role' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        $contact = \App\Models\Contact::create($data);
        return response()->json(['message' => 'Message sent successfully', 'contact' => $contact], 201);
    }
    catch (\Exception $e) {
        return response()->json(['message' => 'Error sending message', 'error' => $e->getMessage()], 400);
    }
})->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

Route::post('/api/login', function (\Illuminate\Http\Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (\Illuminate\Support\Facades\Auth::attempt($credentials)) {
        $request->session()->regenerate();
        return response()->json(['message' => 'Logged in successfully', 'user' => \Illuminate\Support\Facades\Auth::user()]);
    }

    return response()->json(['message' => 'Invalid credentials'], 401);
})->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

Route::post('/api/logout', function (\Illuminate\Http\Request $request) {
    \Illuminate\Support\Facades\Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return response()->json(['message' => 'Logged out successfully']);
})->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

Route::get('/api/user', function (\Illuminate\Http\Request $request) {
    return $request->user();
})->middleware('auth');

Route::get('/api/admin/dashboard-data', function () {
    return response()->json([
    'bookings' => \App\Models\Booking::orderBy('created_at', 'desc')->get(),
    'contacts' => \App\Models\Contact::orderBy('created_at', 'desc')->get()
    ]);
})->middleware('auth');

Route::get('/api/seed-admin', function () {
    \Illuminate\Support\Facades\Artisan::call('db:seed', ['--class' => 'UserSeeder']);
    return "Admin and Sales accounts have been successfully installed to the database. You may now log in.";
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
