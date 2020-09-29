import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Axios from "axios";
import VuexStore from "./store";


Vue.prototype.$axios = Axios;
Vue.use(Vuex);
const store = new Vuex.Store(VuexStore);
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
