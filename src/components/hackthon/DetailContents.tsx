import React from "react";
import styled from "styled-components";

import DetailItem from "../common/modify/ModifyItem";

export interface PropTypes {
  description: string;
  contact: string;
  onChange?: ({ name, value }: { name: string; value: string | Date }) => void;
}

function HackathonDetailContents({
  description,
  contact,
  onChange,
}: PropTypes) {
  return (
    <>
      <DetailItem
        name="description"
        title="- 설명 -"
        content={description}
        onChange={onChange}
      />
      <DetailItem
        name="contact"
        title="- 연락처 -"
        content={contact}
        onChange={onChange}
      />
    </>
  );
}

export default HackathonDetailContents;
