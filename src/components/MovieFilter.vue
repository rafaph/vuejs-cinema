<template>
    <div id="movie-filter">
        <h2>Filter results</h2>
        <h3>By time of day</h3>
        <div class="filter-group">
            <check-filter v-for="(time, index) in times" :key="index" :title="time" category="time" />
        </div>
        <h3>By genre</h3>
        <div class="filter-group">
            <check-filter v-for="(genre, index) in genres" :key="index" :title="genre" category="genre" />
        </div>
    </div>
</template>

<script>
import CheckFilter from './CheckFilter.vue';
import genres from '../util/genres';
import times from '../util/times';

export default {
    components: {
        CheckFilter
    },
    data() {
        return {
            genres,
            times
        };
    }
};
</script>

