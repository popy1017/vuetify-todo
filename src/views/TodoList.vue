<template>
  <v-container>
    <v-row justify="end">
      <v-switch
        v-model="hideDoneTodo"
        label="完了したTodoを隠す"
        class="mx-1"
      ></v-switch>
      <v-switch
        v-model="showRelative"
        label="相対時間表示"
        class="mx-1"
      ></v-switch>
    </v-row>
    <v-row>
      <v-btn @click="toRegisterTodo" color="success" class="font-weight-bold">
        <v-icon left>mdi-pencil-plus</v-icon> 新規作成
      </v-btn>
    </v-row>
    <v-row class="flex-column" justify="center">
      <Todo
        v-for="todo in filteredTodo"
        :key="todo.id"
        :todo="todo"
        :show-relative="showRelative"
      ></Todo>
    </v-row>
  </v-container>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  name: "TodoList",
  data() {
    return {
      hideDoneTodo: true,
      showRelative: true,
    };
  },
  computed: {
    filteredTodo() {
      if (this.hideDoneTodo) {
        return this.$root.todos.filter((item) => item.done == false);
      }
      return this.$root.todos;
    },
  },
  components: {
    Todo,
  },
  methods: {
    toRegisterTodo() {
      this.$router.push("/create");
    },
  },
};
</script>
