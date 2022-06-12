@extends('layouts.app')

@section('content')

    <section id="__homePresentation" class="__homepage__presentation__">

        @include('components.sections.spoilers.presentation')

    </section>

    @include('components.mouse')

    <section id="__spoilerAbout" class="homepage-section __spoiler__about__">

        @include('components.sections.spoilers.about')

    </section>

    <section id="__spoilerProjects" class="homepage-section __spoiler__projects__">

        <!--
        todo : Optimize responsive of projects cards
        -->

        @include('components.sections.spoilers.projects')

    </section>

    <section id="__spoilerBoard" class="homepage-section __spoiler__board__">

        @include('components.sections.spoilers.board')

    </section>

    <section id="__spoilerCards" class="homepage-section __spoiler__cards__">

        @include('components.sections.spoilers.news')

    </section>

    <section id="__ContactForm" class="homepage-section __contact__form__">

        <!--
        todo: Contact form
        -->
        @include('components.sections.contact')

    </section>

@stop

@section('footer')

    <script src="{{ url('js/homepage.js') }}"></script>

@stop