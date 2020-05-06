<template>
  <v-app>
    <v-app-bar app color="primary" dark class="headline">Todoリスト</v-app-bar>
    <v-content>
      <keep-alive include="TodoList">
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
