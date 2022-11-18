@include('layouts.header')
@if(Route::currentRouteName() === "index" || Route::currentRouteName() === 'contact.get')
        <body class="loader-body">
        @include('layouts.loader', ['status' => true])
    @else
        <body>
@endif
@include('components.scrollbar')
@include('components.cursor')
@include('layouts.navbar')
@yield('content')
@include('layouts.footer')