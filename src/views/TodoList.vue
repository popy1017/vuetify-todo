<template>
  <div>
    <input type="checkbox" v-model="showRelative" />
    <label for="show-relative-time">相対時間表示</label>
    <br />
    <button class="button" @click="toCreateTodo">新規作成</button>
    <Todo
      v-for="todo in this.$root.todos"
      :key="todo.id"
      :todo="todo"
      :show-relative="showRelative"
    ></Todo>
  </div>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  data() {
    return {
      showRelative: true
    };
  },
  components: {
    Todo
  },
  methods: {
    toCreateTodo() {
      this.$router.push("/todo");
    }
  }
};
</script>