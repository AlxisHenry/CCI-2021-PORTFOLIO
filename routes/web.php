<?php

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\AboutController;

/* RouteServiceProvider */

// Routes to admin views

Route::prefix('admin')->group(function() {

    // Routes with middleware restrictions
    Route::middleware('ip')->group(function() {

        Route::controller(AdminController::class)->group(function () {
            Route::get('/', [AdminController::class, 'Admin'])->name('admin');
            Route::get('/news', [AdminController::class, 'AdminNews'])->name('admin_news');
            Route::get('/news/{ARTICLE_NAME}', [AdminController::class, 'AdminNewsEdit'])->name('admin_news_edit');
            Route::get('/board', [AdminController::class, 'AdminBoard'])->name('admin_board');
            Route::get('/board/{ARTICLE_NAME}', [AdminController::class, 'AdminBoardEdit'])->name('admin_board_edit');
            Route::get('/laravel', [AdminController::class, 'LaravelWelcome'])->name('laravel_welcome');
        });

    });

});

// Routes to authorized views

Route::controller(HomeController::class)->group(function () {

    Route::get('home', [HomeController::class, 'Home'])->name('home');
    Route::get('/home/language/{LANGUAGE}', [HomeController::class, 'WikiLang'])->name('home_language');

});

Route::redirect('/', 'home');

Route::controller(AboutController::class)->group(function () {

    Route::get('about', [AboutController::class, 'About'])->name('about');

});

Route::controller(ProjectsController::class)->group(function () {

    Route::get('projects', [ProjectsController::class, 'Projects'])->name('projects');
    Route::get('projects/{PROJECT_NAME}', [ProjectsController::class, 'TargetProject'])->name('projects_target');

});

Route::controller(BoardController::class)->group(function () {

    Route::get('board', [BoardController::class, 'Board'])->name('board');
    Route::get('board/{ARTICLE_NAME}', [BoardController::class, 'Board'])->name('board_object');

});

Route::prefix('news')->group(function () {

    Route::controller(NewsController::class)->group(function () {
        Route::get('/', [NewsController::class, 'News'])->name('news');
        Route::get('/{ARTICLE_URL_NAME}', [NewsController::class, 'NewsArticle'])->name('news_article');
        Route::get('/word/{KEYWORD}', [NewsController::class, 'NewsKeyword'])->name('news_keyword');
    });

});

// Testing routes

Route::view('/test/downloads', 'test');