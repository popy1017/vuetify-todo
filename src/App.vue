<template>
  <div id="app">
    <p>Todoリストもどき</p>
    <hr>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"></Todo>
  </div>
</template>

<script>
import Todo from "./components/Todo";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'App',
  components: {
    Todo
  },
  data() {
    return {
      todos: [
        {id: uuidv4(), title: "Todoリストを作る", dueDate: Date(), note: "CSSの知識が足りない・・・。"},
        {id: uuidv4(), title: "デザインフレームワークを使っておしゃれにする", dueDate: Date(), note: "Vuetifyを使ってみたい。"},
        {id: uuidv4(), title: "ログイン機能を追加する", dueDate: Date(), note: "Udemyのボーナス講座を受講"},
        {id: uuidv4(), title: "次にうける講座を決める", dueDate: Date(), note: "Vueを極めるか、他の勉強をするか・・・"},    
      ],
    }
  }
}
</script>

<style scoped>
#app {
  width: 70%;
  margin: auto;
}
#header {
  width: 100%;
  margin: auto;
}
</style>