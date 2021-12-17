import React from "react";
import styled from "styled-components";

interface PropTypes {
  title: string;
  child: JSX.Element;
}

function DetailBaseTemplate({ title, child }: PropTypes) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {child}
    </Wrapper>
  );
}

export default DetailBaseTemplate;

const Wrapper = styled.div``;
