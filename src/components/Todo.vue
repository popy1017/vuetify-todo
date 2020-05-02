<template>
  <div class="item-card border">
    <input class="checkbox border" type="checkbox" />
    <div class="todo_detail border">
      <h3>{{ todo.title }}</h3>
      <div class="dueDate border">
        <div v-if="showRelative">{{ todo.dueDate | fromNow }}</div>
        <div v-else>{{ todo.dueDate | llll }}</div>
      </div>
      <div class="note">{{ todo.note }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo", "showRelative"],
};
</script>

<style scoped>
/* .border {
  border: solid 1px;
} */
.item-card {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.checkbox {
  display: inline-block;
  vertical-align: middle;
  margin: 0 1rem;
}
.todo_detail {
  width: 90%;
  display: inline-block;
  vertical-align: middle;
  padding-left: 1rem;
}
.dueDate {
  text-align: right;
  height: auto;
}
.note {
  margin-bottom: 1rem;
}
</style>
