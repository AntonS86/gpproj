import Vue from "vue";
import App from "./App.vue";
const axios = require("axios");

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
