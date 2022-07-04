import React from "react";

import CheckList from "./index";

export default {
  title: "CheckBox",
  component: CheckList,
  argTypes: {
    onClick: () => {},
  },
};

export const List = ({ ...props }) => {
  const { items, onChange } = props;

  return <CheckList items={items} onChange={onChange} />;
};
