<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="title"
            v-model="tmpTodo.title"
            :rules="[]"
            label="タイトル"
            required
          ></v-text-field>
          <v-row>
            <v-col>
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
                    v-model="date"
                    label="締切日"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="showDatePicker = false"
                  locale="jp-ja"
                  :day-format="(date) => new Date(date).getDate()"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu
                ref="timePicker"
                v-model="showTimePicker"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
                persistent
                :return-value.sync="time"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    prepend-icon="mdi-clock-outline"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="showTimePicker"
                  v-model="time"
                  format="24hr"
                  @click:minute="$refs.timePicker.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-textarea
            clearable
            clear-icon="mdi-close-circle-outline"
            label="メモ"
            v-model="tmpTodo.note"
          ></v-textarea>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn @click="toTodoList" text>
            <v-icon left>mdi-less-than</v-icon> キャンセル
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="registerTodo" :color="registerButtonColor">{{
            registerButtonName
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ["todo"],
  data() {
    return {
      newTodo: true,
      tmpTodo: {
        title: "",
        dueDate: "",
        note: "",
        done: false,
      },
      date: "",
      time: "00:00",
      showDatePicker: false,
      showTimePicker: false,
    };
  },
  computed: {
    registerButtonColor() {
      return this.newTodo ? "success" : "primary";
    },
    registerButtonName() {
      return this.newTodo ? "登録" : "更新";
    },
  },
  methods: {
    toTodoList() {
      this.$router.push("/");
    },
    registerTodo() {
      this.tmpTodo.dueDate = this.dateTime();
      if (this.newTodo) {
        this.$root.addTodo(this.tmpTodo);
      } else {
        this.$root.updateTodo(this.tmpTodo);
      }
      this.toTodoList();
    },
    dateTime() {
      return this.$root
        .$dayjs(`${this.date} ${this.time}`)
        .format("YYYY-MM-DD HH:mm");
    },
  },
  mounted() {
    if (this.todo) {
      this.tmpTodo = Object.assign(this.tmpTodo, this.todo);
      this.newTodo = false;
    }
    this.date = this.$root
      .$dayjs()
      .toISOString()
      .substr(0, 10);
    this.time = this.$root.$dayjs().format("HH:mm");
  },
};
</script>
