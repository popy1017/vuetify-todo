import Vue from "vue";
import localStorage from "vue-ls";

const options = {
  namespace: "vue_todo_ls_", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local", // storage name session, local, memory
};

Vue.use(localStorage, options);
