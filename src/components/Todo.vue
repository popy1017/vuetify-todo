<template>
  <div>
    <input class="checkbox" type="checkbox">
    <div class="todo_detail">
      <h3>{{todo.title}}</h3>
      <div>
        <p>{{todo.note}}</p>
      </div> 
    </div>   
  </div>
</template>

<script>
export default {
  props: ["todo"],
}
</script>

<style scoped>
.checkbox {
  display: inline-block;
  vertical-align: middle;
}
.todo_detail {
  display: inline-block;
  vertical-align: middle;
  padding-left: 1rem;
}
</style>