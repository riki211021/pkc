<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\PendudukController;
use App\Http\Controllers\PekerjaanController;
use App\Http\Controllers\PendidikanController;
use App\Http\Controllers\KesehatanController;
use App\Http\Controllers\PerangkatDesaController;
use App\Http\Controllers\UmkmController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\KepalaDesaController;





Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);

//landingpage
Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/data-penduduk', [PendudukController::class, 'index']);
Route::get('/pekerjaan', [PekerjaanController::class, 'index']);
Route::get('/pendidikan', [PendidikanController::class, 'index']);
Route::get('/kesehatan/fasilitas', [KesehatanController::class, 'fasilitas']);
Route::get('/kesehatan/tenaga-medis', [KesehatanController::class, 'tenagaMedis']);
Route::get('/perangkat-desa', [PerangkatDesaController::class, 'index']);
Route::get('/umkm', [UmkmController::class, 'index']);
Route::get('/layanan', [LayananController::class, 'index']);
Route::get('/kepala-desa', [KepalaDesaController::class, 'index']);





Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class,'logout']);
    Route::get('/me', [AuthController::class,'me']);

    // contoh route yang hanya untuk admin
    Route::get('/admin-only', function() { return response()->json(['message'=>'admin area']); })
         ->middleware('role:admin');

    // contoh route admin atau editor
    Route::get('/driver-or-admin', function() { return response()->json(['message'=>'editor or admin']); })
         ->middleware('role:admin|driver');


     Route::post('/berita', [BeritaController::class, 'store']);
     Route::post('/berita/{id}', [BeritaController::class, 'update']);
     Route::delete('/berita/{id}', [BeritaController::class, 'destroy']);

     Route::get('/data-pendudukadmin', [PendudukController::class, 'getadmin']);
     Route::post('/penduduk', [PendudukController::class, 'store']);
     Route::put('/penduduk/{id}', [PendudukController::class, 'update']);
     Route::delete('/penduduk/{id}', [PendudukController::class, 'destroy']);

     Route::get('/pekerjaanadmin', [PekerjaanController::class, 'indexadmin']);
     Route::post('/pekerjaan', [PekerjaanController::class, 'store']);
     Route::put('/pekerjaan/{id}', [PekerjaanController::class, 'update']);
     Route::delete('/pekerjaan/{id}', [PekerjaanController::class, 'destroy']);

     Route::post('/faskes', [KesehatanController::class, 'store']);
     Route::post('/faskes/{id}', [KesehatanController::class, 'update']); 
     Route::delete('/faskes/{id}', [KesehatanController::class, 'destroy']);

     Route::post('/tenaga-medis', [KesehatanController::class, 'storetenaga']);
     Route::post('/tenaga-medis/{id}', [KesehatanController::class, 'updatetenaga']);
     Route::delete('/tenaga-medis/{id}', [KesehatanController::class, 'destroytenaga']);

     Route::post('/perangkat-desa', [PerangkatDesaController::class, 'store']);
     Route::post('/perangkat-desa/{id}', [PerangkatDesaController::class, 'update']); 
     Route::delete('/perangkat-desa/{id}', [PerangkatDesaController::class, 'destroy']);

     Route::post('/umkm', [UmkmController::class, 'store']);
     Route::post('/umkm/{id}', [UmkmController::class, 'update']); 
     Route::delete('/umkm/{id}', [UmkmController::class, 'destroy']);

     Route::post('/layanan', [LayananController::class, 'store']);
     Route::put('/layanan/{id}', [LayananController::class, 'update']);
     Route::delete('/layanan/{id}', [LayananController::class, 'destroy']);

     Route::post('/kepaladesa', [KepalaDesaController::class, 'store']);
     Route::put('/kepaladesa/{id}', [KepalaDesaController::class, 'update']);
     Route::delete('/kepaladesa/{id}', [KepalaDesaController::class, 'destroy']);
     

});
