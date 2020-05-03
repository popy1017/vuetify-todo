import Vue from "vue";
import Router from "vue-router";
import TodoList from "./views/TodoList";
import CreateTodo from "./views/CreateTodo";
import EditTodo from "./views/EditTodo";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: TodoList },
    { path: "/todo", component: CreateTodo },
    { path: "/todo/:uuid", component: EditTodo, props: true },
  ],
});
