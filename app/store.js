import Vuex from 'vuex'
import Vue from "nativescript-vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        logged: false,
    },
    mutations: {
        login: state => state.logged = true,
        logout: state => state.logged = false,
    },
    getters: {
        isLogged: state => {
            return state.logged;
        }
    },
});