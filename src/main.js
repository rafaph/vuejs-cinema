import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment-timezone';
import './style.scss';

import genres from './util/genres';
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

Vue.use(VueAxios, axios);

moment.tz.setDefault("America/Sao_Paulo");
Object.defineProperty(Vue.prototype, '$moment', {
    get() {
        return moment;
    }
});

new Vue({
    el: '#app',
    components: {
        MovieList,
        MovieFilter
    },
    data: {
        genre: [],
        time: [],
        movies: [],
        day: moment()
    },
    created() {
        this.$http.get('/api').then(response => {
            this.movies = response.data;
        });
    },
    methods: {
        checkFilter(category, title, checked) {
            if (checked) {
                this[category].push(title);
            } else {
                const index = this[category].indexOf(title);
                if (index > -1) {
                    this[category].splice(index, 1);
                }
            }
        }
    }
});
