<template>
  <div>
    <h1>Todo編集</h1>
    <p>{{todo.id}}</p>
    <p>{{todo.title}}</p>
  </div>
</template>

<script>
export default {
  props: ["todo"]
};
</script>