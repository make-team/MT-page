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
        {`${startTime.getFullYear().toString().substr(-2)}년` +
          `${startTime.getMonth()}월` +
          `${startTime.getDay()}일`}
      </div>
      <div>~</div>
      <div>
        {`${endTime.getFullYear()}년` +
          `${endTime.getMonth()}월` +
          `${endTime.getDay()}일`}
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
  text-overflow: ellipsis;
  & > div {
    margin-right: 0.5rem;
    &:last-child {
      margin: 0;
    }
  }
`;
