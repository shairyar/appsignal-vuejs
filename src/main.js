import Vue from 'vue'
import App from './App.vue'

import appsignal from "./appsignal";
import { errorHandler } from "@appsignal/vue";
import router from './router'

Vue.config.productionTip = false
Vue.config.errorHandler = errorHandler(appsignal, Vue);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");