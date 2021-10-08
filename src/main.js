import Vue from 'vue'
import App from './App.vue'

import Appsignal from "@appsignal/javascript";
import { errorHandler } from "@appsignal/vue";

const appsignal = new Appsignal({
  key: "YOUR-FONT-END-KEY",
});

Vue.config.productionTip = false
Vue.config.errorHandler = errorHandler(appsignal, Vue);

new Vue({
  render: (h) => h(App),
}).$mount("#app");