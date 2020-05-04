import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    title: "クリックで編集画面へ",
    dueDate: Date(),
    note: "Todoをクリックすると、編集画面へ遷移します。",
    done: false,
  },
  {
    id: uuidv4(),
    title: "チェックボックスにチェックを入れて完了",
    dueDate: Date(),
    note: "チェックボックスにチェックを入れるとTodoが完了になります。",
    done: false,
  },
  {
    id: uuidv4(),
    title: "「完了したTodoを隠す」チェックボックスで表示切り替え",
    dueDate: Date(),
    note: "完了したTodoの表示・非表示を切り替えます。",
    done: false,
  },
  {
    id: uuidv4(),
    title: "「相対時間表示」チェックボックスで表示切り替え",
    dueDate: Date(),
    note: "相対時間表示と、日付表示を切り替えます。",
    done: false,
  },
];
