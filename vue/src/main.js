import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Api from "@/services/Api";
import store from "./store";
import routerConfig from "./routes";
import "./less/main.less";


Vue.prototype.$api = Api;

/**
 * install Vue router
 */
Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

Vue.config.productionTip = false;

store.dispatch("fetchData")
    .then(() => {
        new Vue({
            store,
            router,
            render: h => h(App),
        }).$mount("#app");
    })

