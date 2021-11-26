import React from "react";
import styled from "styled-components";

interface PropTypes {
  name: string;
  list: Array<[string, string]>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioList({ list, name, onChange }: PropTypes) {
  return (
    <>
      {list &&
        list.map((item, index) => {
          return (
            <Wrapper key={index}>
              <input
                type="radio"
                id={`${index}`}
                name={name}
                value={item[0]}
                onChange={onChange}
              ></input>
                <label htmlFor={`${index}`}>{Object.values(item[1])}</label>
            </Wrapper>
          );
        })}
    </>
  );
}

export default RadioList;

const Wrapper = styled.div``;
