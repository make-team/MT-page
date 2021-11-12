import React from "react";
import styled from "styled-components";

interface PropTypes {
  name: string;
  list: [string, string][];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Radio({ list, name, onChange }: PropTypes) {
  return (
    <>
      {list &&
        list.map((item, index) => {
          return (
            <Wrapper>
              <input
                type="radio"
                id={`${index}`}
                name={name}
                value={item}
                onChange={onChange}
              ></input>
                <label htmlFor={`${index}`}>{Object.values(item[1])}</label>
            </Wrapper>
          );
        })}
    </>
  );
}

export default Radio;

const Wrapper = styled.div``;
