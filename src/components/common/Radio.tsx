import React from "react";
import styled from "styled-components";

interface PropTypes {
  name: "INTEREST" | "SKILL" | "JOB";
  list: [string, string][];
}

function Radio({ list, name }: PropTypes) {
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
              ></input>
                <label htmlFor={`${index}`}>{item.values}</label>
            </Wrapper>
          );
        })}
    </>
  );
}

export default Radio;

const Wrapper = styled.div``;
