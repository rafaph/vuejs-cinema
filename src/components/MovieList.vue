<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-for="(movie, index) in filteredMovies" :key="index" :movie="movie.movie" :sessions="movie.sessions" :day="day" />
        </div>
        <div v-else-if="movies.length" class="no-results">
            No results.
        </div>
        <div v-else class="no-results">
            Loading...
        </div>
    </div>
</template>

<script>
import genres from '../util/genres';
import MovieItem from './MovieItem.vue';

export default {
    components: {
        MovieItem
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
    },
    computed: {
        filteredMovies() {
            return this.movies.filter(this.moviePassesGenreFilter);
        }
    },
    methods: {
        moviePassesGenreFilter(movie) {
            if (!this.genre.length) {
                return true;
            }

            const movieGenres = movie.movie.Genre.split(', ');
            let matched = true;

            this.genre.forEach(genre => {
                if (movieGenres.indexOf(genre) === -1) {
                    matched = false;
                    return false;
                }
            });

            return matched;
        }
    }
};
</script>
