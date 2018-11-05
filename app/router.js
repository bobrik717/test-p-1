import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'
import Login from './components/login/login'
import Detail from './components/Detail'

Vue.use(VueRouter);


export const router = new VueRouter({
    pageRouting: true,
    routes: [
        {path: '/login', component: Login},
        {path: '/detail', component: Detail},
        {path: '*', redirect: '/login'}
    ]
});