import React, { useCallback, useState } from "react";
import styled from "styled-components";
import TeamRegist, {
  Team,
  PropTypes as TeamPropTypes,
} from "components/team/Regist";
import SubmitButton from "components/common/button/submit";

import { regist } from "api/team";
import { FIELD } from "constant/checkItems";

// import { RootState } from "store/reducers";
// import { addRecruiment } from "store/reducers/recruiment";
// import { useDispatch, useSelector } from "react-redux";
export interface PropTypes {
  id: string;
  onCancel: () => void;
}

function RegistContainer({ id, onCancel }: PropTypes) {
  // const teamRecruiment = useSelector((state: RootState) => state.recruiment);
  // const dispatch = useDispatch();
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
    bodyData.append("hackathon_id", id);
    bodyData.append("description", contents.description);
    bodyData.append("contact", contents.contact);
    bodyData.append("end_time", `${contents.endTime.getTime() / 1000}`);
    bodyData.append("start_time", `${contents.startTime.getTime() / 1000}`);
    bodyData.append(
      "recruiment",
      `${JSON.stringify(
        recruiment.map((item) => ({
          field: item.field,
          skill: item.skill,
          count: item.count,
        }))
      )}`
    );
    await regist({ bodyData });
    onCancel();
  };

  const [recruiment, setRecruiment] = useState<
    Array<{
      id: number;
      field: keyof typeof FIELD;
      skill: string;
      count: number;
    }>
  >([]);

  const addRecuiment = useCallback<TeamPropTypes["onAddRecruiment"]>(
    ({ id, field, skill, count }) => {
      setRecruiment((prev) => [...prev, { id, field, skill, count }]);
    },
    []
  );
  const removeRecuiment = useCallback<TeamPropTypes["onDelete"]>((id) => {
    setRecruiment((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <Wrapper>
      <TeamRegist
        contents={contents}
        recruiment={recruiment}
        onChange={changeContents}
        onAddRecruiment={addRecuiment}
        onDelete={removeRecuiment}
      />
      <ButtonWrapper>
        <SubmitButton onCancel={onCancel} onSubmit={onRegist} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default RegistContainer;

const Wrapper = styled.div`
  grid-area: main;
  background-color: #f7f1f0;
  padding: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
