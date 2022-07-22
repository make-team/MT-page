import { useCallback, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { modalState } from "store/modalStatus";

import useLoading from "hooks/loading";
import { usePopup } from "hooks/popup";

import { FIELD } from "constant/checkItems";

import TeamRegist, {
  Team,
  PropTypes as TeamPropTypes,
} from "components/team/Regist";
import SubmitButton from "components/common/button/submit";

import { regist } from "api/team";
// import { RootState } from "store/reducers";
// import { addRecruiment } from "store/reducers/recruiment";
// import { useDispatch, useSelector } from "react-redux";
export interface PropTypes {
  id: string;
}

function RegistContainer({ id }: PropTypes) {
  // const teamRecruiment = useSelector((state: RootState) => state.recruiment);
  // const dispatch = useDispatch();
  const setModalStatus = useSetRecoilState<boolean>(modalState);
  const [setLoading] = useLoading();
  const [togglePopup] = usePopup();
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

  const onClose = () => {
    setModalStatus(false);
    setContents({
      id: 0,
      name: "",
      hackathonId: 0,
      description: "",
      contact: "",
      recruiment: [],
      endTime: new Date(),
      startTime: new Date(),
    });
  };

  const onRegist = async () => {
    try {
      setLoading(true);
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
      onClose();
    } catch {
      togglePopup();
    } finally {
    }
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
      <h2>팀 등록하기</h2>
      <TeamRegist
        contents={contents}
        recruiment={recruiment}
        onChange={changeContents}
        onAddRecruiment={addRecuiment}
        onDelete={removeRecuiment}
      />
      <ButtonWrapper>
        <SubmitButton onCancel={onClose} onSubmit={onRegist} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default RegistContainer;

const Wrapper = styled.div`
  @media (max-width: 700px) {
    flex-direction: column;
    font-size: 0.6rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
