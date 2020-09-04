<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/','SpaController@index');
Route::get('{slug}','SpaController@index');

Route::post('/submit','SpaController@submit');
Route::get('/api/get','SpaController@get');