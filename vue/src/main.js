import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Api from "@/services/Api";
import VuexStore from "./store";

Vue.prototype.$api = Api;
Vue.use(Vuex);
const store = new Vuex.Store(VuexStore);
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch("fetchNodes");
    }
}).$mount("#app");
