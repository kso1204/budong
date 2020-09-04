require('./bootstrap');

window.Vue = require('vue')

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

import router from './router'

Vue.component('mainapp', require('./components/mainapp.vue').default)

const app=new Vue({
    el: '#app',
    router,
})