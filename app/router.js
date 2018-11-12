import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'
import Login from './components/login/login'
import Detail from './components/Detail'
import Home from './components/Home'
import {store} from './store'

Vue.use(VueRouter);

/**
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
function beforeRouterEnter(to, from, next) {
    if(store.getters.isLogged) {
        next();
    }
    next(false);
}

/**
 * @type {VueRouter}
 */
export const router = new VueRouter({
    pageRouting: true,
    routes: [
        {path: '/login', component: Login},
        {path: '/detail', component: Detail, beforeEnter: beforeRouterEnter},
        {path: '/home', component: Home, beforeEnter: beforeRouterEnter},
        {path: '*', redirect: '/login'}
    ]
});