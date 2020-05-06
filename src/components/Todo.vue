<template>
  <v-card min-width="400" class="my-2">
    <v-row align="center">
      <v-col cols="2" xl="1" lg="1" md="1" sm="1" class="text-center pr-0">
        <v-btn @click="todo.done = !todo.done" icon color="success">
          <v-icon x-large>{{ doneIcon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-card-title>{{ todo.title }}</v-card-title>
        <v-card-subtitle>{{ todo.dueDate | fromNow }}</v-card-subtitle>
        <v-card-text>
          <pre>{{ todo.note }}</pre>
        </v-card-text>
      </v-col>
      <v-col cols="2" xl="1" lg="1" md="1" sm="1" class="text-center pl-0">
        <v-row class="flex-column fill-height" justify="center">
          <v-col class="pl-0">
            <v-btn @click="toEditTodo" icon>
              <v-icon>mdi-square-edit-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col class="pl-0">
            <v-btn @click="remove" icon>
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["todo", "showRelative"],
  computed: {
    doneIcon() {
      return this.todo.done
        ? "mdi-checkbox-marked-circle-outline"
        : "mdi-checkbox-blank-circle-outline";
    },
  },
  methods: {
    toEditTodo() {
      this.$router.push({
        name: "edit",
        params: {
          todo: this.todo,
        },
      });
    },
    remove() {
      const result = confirm("削除してもよろしいですか？");
      if (result) {
        this.$root.removeTodo(this.todo.id);
      }
    },
  },
};
</script>
