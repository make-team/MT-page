import styled from "styled-components";

import { FIELD } from "constant/checkItems";

import DateTerm from "components/common/date/term";
import StartEndPicker from "components/common/date/stardEnd";
import Quill from "components/common/editor/Quill";

import ModifyItem from "../common/modify/ModifyItem";
import TeamRecruimentCardList from "components/team/RecruimentCardList";
import LinkButton from "components/common/button/link";

export interface Team {
  id: number;
  hackathon: {
    id: number;
    title: string;
  }[];
  name: string;
  description: string;
  contact: string;
  startTime: Date;
  endTime: Date;
  recruiment: { field: keyof typeof FIELD; skill: string; count: number }[];
}

export interface PropTypes {
  contents: Team;
  modifyStatus: boolean;
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
  goHackathon: (id: number) => void;
}

function HackathonDetail({
  contents,
  modifyStatus,
  onChange,
  goHackathon,
}: PropTypes) {
  const handleClick = (id: number) => {
    goHackathon(id);
  };

  return (
    <Wrapper>
      <Info>
        <div>
          <h3> - 팀 명 -</h3>
          <ModifyItem
            name="name"
            content={contents.name}
            onChange={modifyStatus ? onChange : undefined}
          />
        </div>
        <div>
          <h3> - 연락처 - </h3>
          <ModifyItem
            name="contact"
            content={contents.contact}
            onChange={modifyStatus ? onChange : undefined}
          />
        </div>
        <div>
          <h3> - 참여하는 공모전 - </h3>
          {contents.hackathon &&
            contents.hackathon.map((item) => (
              <div key={item.id}>
                <LinkButton
                  onClick={() => handleClick(item.id)}
                  text={item.title}
                />
              </div>
            ))}
        </div>
      </Info>
      <h3> - 팀 상세 - </h3>
      <TextEditorBox>
        <Quill
          name="description"
          toolbarOff={modifyStatus}
          text={contents.description}
          onChange={onChange}
          readonly={!modifyStatus}
        />
      </TextEditorBox>
      <h3> - 구 인 - </h3>
      <div>
        {modifyStatus ? (
          <StartEndPicker
            startTime={contents.startTime}
            endTime={contents.endTime}
            onChange={onChange}
          />
        ) : (
          <DateTerm startTime={contents.startTime} endTime={contents.endTime} />
        )}
      </div>
      <TeamRecruimentCardList recruiment={contents.recruiment} />
    </Wrapper>
  );
}

export default HackathonDetail;

const Wrapper = styled.div`
  padding: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const TextEditorBox = styled.div`
  height: 22rem;
  margin-bottom: 3rem;
  background-color: inherit;
`;
