import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "dayjs/locale/ja";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

import todos from "./assets/mock-todo";
import { v4 as uuidv4 } from "uuid";

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
  data: {
    message: "hello",
    todos,
  },
  methods: {
    addTodo(todo) {
      todo.id = uuidv4();
      this.todos.push(todo);
    },
    updateTodo(todo) {
      const id = this.todos.findIndex((item) => item.id == todo.id);

      if (id >= 0) {
        this.todos[id] = todo;
      }
    },
  },
}).$mount("#app");
