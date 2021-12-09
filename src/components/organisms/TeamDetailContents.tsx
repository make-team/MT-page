import React from "react";
import styled from "styled-components";

import DetailItem from "../molecules/ModifyItem";
import LinkButton from "components/atoms/LinkButton";

interface PropTypes {
  name: string;
  hackathon: {
    id: number;
    title: string;
  }[];
  description: string;
  contact: string;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
}

function TeamDetailContents({
  name,
  hackathon,
  description,
  contact,
  onChange,
}: PropTypes) {
  return (
    <Wrapper>
      {hackathon &&
        hackathon.map((item) => (
          <>
            <DetailItem
              name="description"
              title="공모전 명 : "
              content={item.title}
              onChange={onChange}
            />
            <LinkButton
              text="공모전 상세보기"
              goUrl={`/hackathon/${item.id}`}
            />
          </>
        ))}
      <DetailItem
        name="description"
        title="팀 명 : "
        content={name}
        onChange={onChange}
      />
      <DetailItem
        name="description"
        title="설명 : "
        content={description}
        onChange={onChange}
      />
      <DetailItem
        name="contact"
        title="연락처 : "
        content={contact}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default TeamDetailContents;

const Wrapper = styled.div`
  padding: 1rem;
`;
