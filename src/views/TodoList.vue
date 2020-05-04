<template>
  <div>
    <div id="config">
      <input class="config-check-box" id="hide-done-todo" type="checkbox" v-model="hideDoneTodo" />
      <label for="hide-done-todo">完了したTodoを隠す</label>
      <input
        class="config-check-box"
        id="show-relative-time"
        type="checkbox"
        v-model="showRelative"
      />
      <label for="show-relative-time">相対時間表示</label>
    </div>
    <br />
    <button class="button" @click="toCreateTodo">新規作成</button>
    <Todo v-for="todo in filteredTodo" :key="todo.id" :todo="todo" :show-relative="showRelative"></Todo>
  </div>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  name: "TodoList",
  data() {
    return {
      hideDoneTodo: true,
      showRelative: true
    };
  },
  computed: {
    filteredTodo() {
      if (this.hideDoneTodo) {
        return this.$root.todos.filter(item => item.done == false);
      }
      return this.$root.todos;
    }
  },
  components: {
    Todo
  },
  methods: {
    toCreateTodo() {
      this.$router.push("/create");
    }
  }
};
</script>

<style scoped>
#config {
  text-align: right;
}
.config-check-box {
  margin: 0 0 0 1rem;
}
.button {
  width: 100%;
  font-size: 1.2rem;
}
</style>