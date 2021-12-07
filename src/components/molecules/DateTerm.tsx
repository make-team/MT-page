import React from "react";
import styled from "styled-components";

interface PropTypes {
  startTime: Date;
  endTime: Date;
}

function DateTerm({ startTime, endTime }: PropTypes) {
  return (
    <Wrapper>
      <div>
        {`${startTime.getFullYear().toString().substr(-2)}.` +
          `${startTime.getMonth()}.` +
          `${startTime.getDay()}`}
      </div>
      <div>~</div>
      <div>
        {`${endTime.getFullYear().toString().substr(-2)}.` +
          `${endTime.getMonth()}.` +
          `${endTime.getDay()}`}
      </div>
      <div>
        {"(" +
          parseInt(
            `${
              (endTime.getTime() - startTime.getTime()) / (24 * 60 * 60 * 1000)
            }`
          ) +
          "일간" +
          ")"}
      </div>
    </Wrapper>
  );
}

export default DateTerm;

const Wrapper = styled.div`
  display: flex;
  & > div {
    margin-right: 0.5rem;
    &:last-child {
      margin: 0;
    }
  }
`;
