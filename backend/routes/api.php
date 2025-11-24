<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class,'logout']);
    Route::get('/me', [AuthController::class,'me']);

    // contoh route yang hanya untuk admin
    Route::get('/admin-only', function() { return response()->json(['message'=>'admin area']); })
         ->middleware('role:admin');

    // contoh route admin atau editor
    Route::get('/driver-or-admin', function() { return response()->json(['message'=>'editor or admin']); })
         ->middleware('role:admin|driver');
});
