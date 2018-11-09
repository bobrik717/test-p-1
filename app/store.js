import Vuex from 'vuex'
import Vue from "nativescript-vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
});