@component('components.underline-title')
    @slot('Title')
        Board
    @endslot
@endcomponent

<div class="__board__cards__" data-aos="fade-left">

    @foreach($Boards as $Board)
        @include('components.board-cards')
    @endforeach

</div>

@include('components.more', ['to' => '/board'])