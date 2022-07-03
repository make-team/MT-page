import React from "react";

import Button from "./Button";

export const ButtonComponents = ({ ...props }) => {
  const { onClick, children } = props;

  return <Button onClick={onClick}>{children}</Button>;
};
