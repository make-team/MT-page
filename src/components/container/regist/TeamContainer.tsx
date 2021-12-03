import React, { useCallback, useState } from "react";
import styled from "styled-components";
import TeamRegist, {
  Team,
  PropTypes as TeamPropTypes,
} from "template/TeamRegist";
import SubmitButton from "template/SubmitButton";

import { regist } from "api/team";
import { FIELD } from "constant/checkItems";

import { RootState } from "store/reducers";
import { addRecruiment } from "store/reducers/recruiment";
import { useDispatch, useSelector } from "react-redux";
export interface PropTypes {
  id: string;
  onCancel: () => void;
}

function TeamContainer({ id, onCancel }: PropTypes) {
  const teamRecruiment = useSelector((state: RootState) => state.recruiment);
  const dispatch = useDispatch();
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

  const changeContents = useCallback<TeamPropTypes["onChange"]>(
    ({ name, value }) => {
      setContents({ ...contents, [name]: value });
    },
    [contents]
  );

  const onRegist = async () => {
    let bodyData = new FormData();
    bodyData.append("name", contents.name);
    bodyData.append("hackathon_id", `${id}`);
    bodyData.append("description", contents.description);
    bodyData.append("contact", contents.contact);
    bodyData.append("end_time", `${contents.endTime.getTime()}`);
    bodyData.append("start_time", `${contents.startTime.getTime()}`);
    bodyData.append("recruiment", `${JSON.stringify(teamRecruiment)}`);
    await regist({ bodyData });
    onCancel();
  };

  const addRecuiment = ({
    field,
    skill,
    count,
  }: {
    field: keyof typeof FIELD;
    skill: string;
    count: number;
  }) => {
    dispatch(addRecruiment(field, skill, count));
  };

  return (
    <Wrapper>
      <TeamRegist
        contents={contents}
        recruiment={teamRecruiment}
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
