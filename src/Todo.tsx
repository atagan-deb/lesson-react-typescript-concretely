import { TodoType } from "./types/todo";

export const Todo = (
  // Pick<T, Key | key>: 指定したkeyの型定義を抜き出す
  // props: Pick<TodoType, "userId" | "title" | "completed">
  // Omit<T, key>: 指定したkeyの型定義を除外する
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
