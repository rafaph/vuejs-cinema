<template>
    <div id="overview">
        <day-select :selected="day" />
        <div class="main">
            <movie-list :genre="genre" :time="time" :movies="movies" :day="day" />
            <movie-filter />
        </div>
    </div>
</template>

<script>
import MovieList from './MovieList.vue';
import MovieFilter from './MovieFilter.vue';
import DaySelect from './DaySelect.vue';

export default {
    components: {
        MovieList,
        MovieFilter,
        DaySelect
    },
    props: {
        genre: {
            type: Array,
            required: true
        },
        time: {
            type: Array,
            required: true
        },
        movies: {
            type: Array,
            required: true
        },
        day: {
            type: Object,
            required: true
        }
    }
};
</script>

