<template>
  <div class="item-card">
    <div class="check-area">
      <input class="checkbox" type="checkbox" />
    </div>
    <div class="title-area" @click="toEditTodo(todo.uuid)">{{ todo.title }}</div>
    <div class="due-date-area">
      <template v-if="showRelative">{{ todo.dueDate | fromNow }}</template>
      <template v-else>{{ todo.dueDate | llll }}</template>
    </div>
    <div class="note-area">{{ todo.note }}</div>
  </div>
</template>

<script>
export default {
  props: ["todo", "showRelative"],
  methods: {
    toEditTodo() {
      this.$router.push(`/todo/${this.todo.id}`);
    }
  }
};
</script>

<style scoped>
.item-card {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 1rem auto;
  display: grid;
  grid-template-rows: 40% 20% 40%;
  grid-template-columns: 50px 1fr;
}
.check-area {
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-area {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  margin: 10px;
  font-size: 1.5rem;
  font-weight: bold;
}
.due-date-area {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  text-align: right;
  margin: 0 1rem;
}
.note-area {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  margin: 10px;
}
</style>
