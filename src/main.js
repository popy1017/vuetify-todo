import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./libs/day";
import "./libs/localstorage";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  vuetify,
  data: {
    todos: [],
  },
  methods: {
    getTodos() {
      this.todos = this.$ls.get("todos") || [];
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
