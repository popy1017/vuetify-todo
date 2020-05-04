<template>
  <div id="edit-todo" :key="todo.id">
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
    <button class="button" @click="update">更新</button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      title: "",
      dueDate: Date(),
      note: ""
    };
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    update() {
      this.$root.updateTodo({
        id: this.todo.id,
        title: this.title,
        dueDate: this.dueDate,
        note: this.note
      });
      this.toTodoList();
    }
  },
  created() {
    this.title = this.todo.title;
    this.dueDate = this.todo.dueDate;
    this.note = this.todo.note;
  }
};
</script>

<style scoped>
#edit-todo {
  width: 80%;
  margin: auto;
}

#title,
#dueDate,
#note {
  width: 100%;
}
.button {
  width: 100%;
  font-size: 1.2rem;
  margin: auto;
}
</style>