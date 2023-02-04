import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://74.207.231.71/';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
createApp(App).use(store).use(router, axios).mount('#app');
