import React from "react";
import styled from "styled-components";

interface PropTypes {
  title: string;
  child: JSX.Element;
}

function Detail({ title, child }: PropTypes) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {child}
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  max-width: 90rem;
  margin: 1rem auto;
  border: 1px solid black;
`;

const Title = styled.h2``;
