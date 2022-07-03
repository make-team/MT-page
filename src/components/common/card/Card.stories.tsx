import React from "react";

import Card from "./Card";
import CardDelete from "./CardDeleteButton";
import CardContents from "./CardItem";
import RecruimentCard from "./RecruimentCardContents";

export const Button = ({ ...props }) => {
  const { children, onClick, width, height } = props;

  return (
    <Card width={width} height={height} onClick={onClick}>
      {children}
    </Card>
  );
};

export const DeleteButton = ({ ...props }) => {
  const { id, onDelete } = props;

  return <CardDelete id={id} onDelete={onDelete} />;
};

export const CardItem = ({ ...props }) => {
  const { contentTitle, content } = props;

  return <CardContents contentTitle={contentTitle} content={content} />;
};

export const RecruimentCardContents = ({ ...props }) => {
  const { items } = props;

  return <RecruimentCard items={items} />;
};
