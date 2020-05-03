import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "dayjs/locale/ja";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale("ja");

Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false;

Vue.filter("fromNow", (date) => dayjs().to(date));
Vue.filter("llll", (date) => dayjs(date).format("llll"));

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
