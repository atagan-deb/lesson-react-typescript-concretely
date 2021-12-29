import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FC<type>: 暗黙的にchildrenを肯定する関数型コンポーネントの型定義
// react18以降ではFCでもchildrenが肯定されなくなる予定 - 2021/12/29
// VFC<type>: 暗黙的にchildrenを肯定しない関数型コンポーネントの型定義
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
