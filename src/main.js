import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import moment from 'moment-timezone';
import './style.scss';


import { checkFilter, setDay } from './util/bus';
import Tooltip from './util/tooltip';
import genres from './util/genres';
import routes from './util/routes';

Vue.use(VueAxios, axios);

Vue.use(VueRouter);

Vue.use(Tooltip);

moment.tz.setDefault('America/Sao_Paulo');
Object.defineProperty(Vue.prototype, '$moment', {
    get() {
        return moment;
    }
});

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus;
    }
});

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    data: {
        genre: [],
        time: [],
        movies: [],
        day: moment(),
        bus
    },
    created() {
        this.$http.get('/api').then(response => {
            this.movies = response.data;
        });

        this.$bus.$on('check-filter', checkFilter.bind(this));

        this.$bus.$on('set-day', setDay.bind(this));
    }
});
