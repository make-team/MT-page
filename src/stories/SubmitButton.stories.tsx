import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SubmitButton from "components/common/SubmitButton";

export const actions = {
  onCancel: action("cancel"),
  onSubmit: action("submit"),
};

storiesOf("submitButton", module)
  .addDecorator((story) => <div style={{ padding: "0 20rem" }}>{story()}</div>)
  .add("default", () => <SubmitButton {...actions} />)
  .add("cancel", () => <SubmitButton {...actions} />)
  .add("confirm", () => <SubmitButton {...actions} />);
