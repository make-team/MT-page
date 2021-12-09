import React, { useState } from "react";
import styled from "styled-components";

import TeamRecruimentItem from "components/molecules/TeamRecruimentItem";

import { FIELD } from "constant/checkItems";

interface PropTypes {
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
  heightLimit?: boolean;
}

function TeamRecruimentCardList({ heightLimit, recruiment }: PropTypes) {
  const [toggle, setToggle] = useState<boolean>(heightLimit ?? false);

  const clickButton = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <ToggleButton onClick={clickButton}>
        <span> - 모집 중 - </span>
        {heightLimit && <button onClick={changeToggle}>펼쳐보기</button>}
      </ToggleButton>

      <Wrapper data-toggle={toggle}>
        {recruiment.map((item) => {
          return (
            <TeamRecruimentItem
              key={item.field + item.skill + item.count}
              field={item.field}
              skill={item.skill}
              count={item.count}
            />
          );
        })}
      </Wrapper>
    </>
  );
}

export default TeamRecruimentCardList;

const Wrapper = styled.div<{ "data-toggle": boolean }>`
  display: flex;
  height: 3.75rem;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  &[data-toggle="false"] {
    overflow-y: unset;
    height: fit-content;
  }
`;
const ToggleButton = styled.div`
  display: inline-block;
  & > span {
    font-size: 1.025rem;
    font-weight: bold;
  }
`;
