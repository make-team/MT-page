import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SubmitButton from "components/molecules/SubmitButton";

export const actions = {
  onCancel: action("cancel"),
  onSubmit: action("submit"),
};

storiesOf("submitButton", module) // Storybook에 표시될 폴더명
  // 데코레이터를 이용하면 아래와 같이 테스트할 스토리의 래핑 컴포넌트를 작성할 수 있습니다.
  .addDecorator((story) => <div style={{ padding: "0 20rem" }}>{story()}</div>)
  // add('스토리명', 스토리 랜더링)
  .add("default", () => <SubmitButton {...actions} />)
  .add("cancel", () => <SubmitButton {...actions} />)
  .add("confirm", () => <SubmitButton {...actions} />);
