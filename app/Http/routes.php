<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
// CORS
//header('Access-Control-Allow-Origin: http://testquickr.netlify.com');
header('Access-Control-Allow-Credentials: true'); //allow cookies with cors
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'); // allow certain headers


Route::get('/', function () {
    return view('app');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['prefix' => 'api/v1', 'middleware' => ['web', 'cors']], function () {
    Route::get('products/res', 'ProductController@getProducts');
    Route::resource('products', 'ProductController');

    Route::get('clients/res', 'ClientController@getClients');
    Route::resource('clients', 'ClientController');
});

//url ..with methods getting called
Route::group(['prefix' => 'api/v1','middleware' => ['web','cors']], function(){	
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');
});
// Templates
Route::group(array(['middleware' => 'cors', 'prefix'=>'/templates/']),function(){
    Route::get('{template}', array( function($template)
    {
        $template = str_replace(".html","",$template);
        View::addExtension('html','php');
        return View::make('templates.'.$template);
    }));
});
