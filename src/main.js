import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "dayjs/locale/ja";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { v4 as uuidv4 } from "uuid";

import localStorage from "vue-ls";
const options = {
  namespace: "vue_todo_ls_", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local", // storage name session, local, memory
};

Vue.use(localStorage, options);

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
    todos: [],
  },
  methods: {
    getTodos() {
      this.todos = this.$ls.get("todos");
    },
    setTodos() {
      this.$ls.set("todos", this.todos);
    },
    addTodo(todo) {
      todo.id = uuidv4();
      this.todos.push(todo);
      this.setTodos();
    },
    updateTodo(todo) {
      const id = this.todos.findIndex((item) => item.id == todo.id);

      if (id >= 0) {
        this.todos[id] = Object.assign(this.todos[id], todo);
        this.setTodos();
      }
    },
    removeTodo(id) {
      const index = this.todos.findIndex((item) => item.id == id);

      if (index >= 0) {
        this.todos.splice(index, 1);
        this.setTodos();
      }
    },
  },
  mounted() {
    this.$root.getTodos();
  },
}).$mount("#app");
