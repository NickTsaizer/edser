import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import {getRoutes} from './router'
import App from './App.vue'

const app = Vue.createApp(App);

const routes = getRoutes();

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
});
app.use(router);
app.mount('#app');