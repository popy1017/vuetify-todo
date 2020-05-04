<template>
  <div id="create-todo">
    <router-link to="/">＜ 戻る</router-link>
    <p>
      <label for="title">タイトル</label>
      <br />
      <input id="title" type="text" v-model="title" />
    </p>
    <p>
      <label for="dueDate">締め切り</label>
      <br />
      <input id="dueDate" type="date" v-model="dueDate" />
    </p>
    <p>
      <label for="note">タイトル</label>
      <br />
      <textarea name id="note" cols="30" rows="10" v-model="note"></textarea>
    </p>
    <button @click="registerTodo">登録</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      dueDate: Date(),
      note: "",
      done: false
    };
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    registerTodo() {
      const todo = {
        title: this.title,
        dueDate: this.dueDate,
        note: this.note,
        done: false
      };
      this.$root.addTodo(todo);
      this.toTodoList();
    }
  }
};
</script>

<style scoped>
#create-todo {
  width: 80%;
  margin: auto;
}

#title,
#dueDate,
#note {
  width: 90%;
}
</style>