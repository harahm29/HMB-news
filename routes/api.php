<?php
use App\Http\Controllers\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// routes/api.php

Route::get('/news/newsapi', [NewsController::class, 'index']);
Route::get('/news/theguardian', [NewsController::class, 'theguardian']);
Route::get('/news/nytimes', [NewsController::class, 'nytimes']);
Route::get('/sources', [NewsController::class, 'sources']);