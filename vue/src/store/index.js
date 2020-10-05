import Vue from 'vue';
import Vuex from "vuex";
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

/**
 * install Vuex
 */
Vue.use(Vuex);

/**
 * Create instance Vuex
 */
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});
