<template>
  <div id="create-todo">
    <router-link to="/">＜ 戻る</router-link>
    <p>
      <label for="title">タイトル</label>
      <br />
      <input id="title" type="text" />
    </p>
    <p>
      <label for="dueDate">締め切り</label>
      <br />
      <input id="dueDate" type="date" />
    </p>
    <p>
      <label for="note">タイトル</label>
      <br />
      <textarea name id="note" cols="30" rows="10"></textarea>
    </p>
    <button>登録</button>
  </div>
</template>

<style scoped>
#create-todo {
  width: 80%;
  margin: auto;
}

#title,
#dueDate,
#note {
  width: 90%;
}
</style>