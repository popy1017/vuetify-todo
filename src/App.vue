<template>
  <v-app id="app">
    <p>Todoリストもどき</p>
    <hr />
    <keep-alive include="TodoList">
      <router-view></router-view>
    </keep-alive>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
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
