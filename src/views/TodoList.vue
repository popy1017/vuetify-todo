<template>
  <div>
    <button class="button" @click="toCreateTodo">新規作成</button>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" :show-relative="showRelative"></Todo>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    Todo
  },
  methods: {
    toCreateTodo() {
      this.$router.push("/todo");
    }
  },
  data() {
    return {
      showRelative: true,
      todos: [
        {
          id: uuidv4(),
          title: "クリックで編集画面へ",
          dueDate: Date(),
          note: "Todoをクリックすると、編集画面へ遷移します。"
        },
        {
          id: uuidv4(),
          title: "チェックボックスにチェックを入れて完了",
          dueDate: Date(),
          note: "チェックボックスにチェックを入れるとTodoが完了になります。"
        },
        {
          id: uuidv4(),
          title: "「完了したTodoを表示する」チェックボックスで表示切り替え",
          dueDate: Date(),
          note: "完了したTodoの表示・非表示を切り替えます。"
        },
        {
          id: uuidv4(),
          title: "「相対時間表示」チェックボックスで表示切り替え",
          dueDate: Date(),
          note: "相対時間表示と、日付表示を切り替えます。"
        }
      ]
    };
  }
};
</script>