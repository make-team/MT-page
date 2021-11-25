import React, { useCallback, useState } from "react";
import styled from "styled-components";
import TeamRegist, {
  Team,
  PropTypes as TeamPropTypes,
} from "../../components/template/TeamRegist";
import SubmitButton from "../../components/template/SubmitButton";

import { regist } from "../../api/team";
import { FIELD } from "../../constant/checkItems";

export interface PropTypes {
  onCancel: () => void;
}

function TeamContainer({ onCancel }: PropTypes) {
  const [contents, setContents] = useState<Team>({
    id: 0,
    name: "",
    hackathonId: 0,
    description: "",
    contact: "",
    recruiment: [],
    endTime: new Date(),
    startTime: new Date(),
  });

  const [recruiment, setRecruiment] = useState<
    Array<{
      field?: keyof typeof FIELD;
      skill?: string;
      count?: number;
    }>
  >([]);

  const changeContents = useCallback<TeamPropTypes["onChange"]>(
    ({ name, value }) => {
      setContents({ ...contents, [name]: value });
    },
    [contents]
  );

  const onRegist = async () => {
    let bodyData = new FormData();
    bodyData.append("name", contents.name);
    bodyData.append("hackathon_id", `${"0"}`);
    bodyData.append("description", contents.description);
    bodyData.append("contact", contents.contact);
    bodyData.append("end_time", `${contents.endTime.getTime()}`);
    bodyData.append("start_time", `${contents.startTime.getTime()}`);
    bodyData.append("recruiment", `${JSON.stringify(recruiment)}`);
    await regist({ bodyData });
    onCancel();
  };

  const addRecuiment = useCallback<TeamPropTypes["onAddRecruiment"]>(
    ({ field, skill, count }) => {
      setRecruiment((prev) => [...prev, { field, skill, count }]);
    },
    []
  );

  return (
    <Wrapper>
      <TeamRegist
        contents={contents}
        recruiment={recruiment}
        onChange={changeContents}
        onAddRecruiment={addRecuiment}
      />
      <ButtonWrapper>
        <SubmitButton onCancel={onCancel} onSubmit={onRegist} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TeamContainer;

const Wrapper = styled.div`
  grid-area: main;
  background-color: #f7f1f0;
  padding: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
