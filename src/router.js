import Vue from "vue";
import Router from "vue-router";
import TodoList from "./views/TodoList";
import RegisterTodo from "./views/RegisterTodo";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: TodoList },
    { path: "/create", component: RegisterTodo },
    {
      name: "edit",
      path: "/edit",
      component: RegisterTodo,
      props(route) {
        return {
          ...route.params,
        };
      },
    },
  ],
});
