import React from "react";
import styled from "styled-components";

import Checkbox from "components/atoms/CheckBox";

interface PropTypes {
  items: Array<[string, string]>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckButtonList({ items, onChange }: PropTypes) {
  return (
    <Wrapper>
      {items.map((item) => {
        return (
          <label key={item[0]}>
            <Checkbox name="interest" value={item[0]} onChange={onChange} />
            {item[1]}
          </label>
        );
      })}
    </Wrapper>
  );
}

export default CheckButtonList;

const Wrapper = styled.div``;
