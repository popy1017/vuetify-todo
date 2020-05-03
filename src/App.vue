<template>
  <div id="app">
    <p>Todoリストもどき</p>
    <hr />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
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
