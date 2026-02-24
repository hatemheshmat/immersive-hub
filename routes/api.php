<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Booking;

Route::post('/bookings', function (Request $request) {
    try {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date',
            'notes' => 'nullable|string',
        ]);

        $booking = Booking::create($data);
        return response()->json(['message' => 'Booking created successfully', 'booking' => $booking], 201);
    }
    catch (\Exception $e) {
        return response()->json(['message' => 'Error creating booking', 'error' => $e->getMessage()], 400);
    }
});
