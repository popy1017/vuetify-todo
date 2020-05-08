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
      <v-spacer></v-spacer>
      <v-select
        v-model="sortMode"
        :items="items"
        label="Sort"
        outlined
        dense
      ></v-select>
    </v-row>
    <v-row class="flex-column" justify="center">
      <Todo
        v-for="todo in sortedTodos"
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
  components: {
    Todo,
  },
  data() {
    return {
      hideDoneTodo: true,
      showRelative: true,
      items: ["期日順", "作成順"],
      sortMode: "期日順",
    };
  },
  computed: {
    sortedTodos() {
      const todos = this.shownTodos();
      if (this.sortMode == "期日順") {
        todos.sort(this.compareDate);
      } else if (this.sortMode == "作成順") {
        return todos;
      }

      return todos;
    },
  },
  methods: {
    toRegisterTodo() {
      this.$router.push("/create");
    },
    shownTodos() {
      const todos = [...this.$root.todos];
      if (this.hideDoneTodo) {
        return todos.filter((item) => item.done == false);
      }
      return todos;
    },
    compareDate(a, b) {
      const d1 = this.$root.$dayjs(a.dueDate);
      const d2 = this.$root.$dayjs(b.dueDate);

      if (d1.isAfter(d2)) return 1;
      else if (d1.isBefore(d2)) return -1;
      return 0;
    },
  },
};
</script>
