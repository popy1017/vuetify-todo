<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="title"
            v-model="title"
            :rules="[]"
            label="タイトル"
            required
          ></v-text-field>
          <v-menu
            v-model="showDatePicker"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dueDate"
                label="締切日"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dueDate"
              @input="showDatePicker = false"
              locale="jp-ja"
              :day-format="(date) => new Date(date).getDate()"
            ></v-date-picker>
          </v-menu>
          <v-textarea
            clearable
            clear-icon="mdi-close-circle-outline"
            label="メモ"
            v-model="note"
          ></v-textarea>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn @click="toTodoList" text>
            <v-icon left>mdi-less-than</v-icon> キャンセル
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="registerTodo">登録</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      dueDate: new Date().toISOString().substr(0, 10),
      note: "",
      done: false,
      showDatePicker: false,
    };
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    registerTodo() {
      const todo = {
        title: this.title,
        dueDate: this.dueDate,
        note: this.note,
        done: false,
      };
      this.$root.addTodo(todo);
      this.toTodoList();
    },
  },
};
</script>
