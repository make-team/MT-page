import { useNavigate } from "react-router-dom";

import ListContainer from "container/hackton/ListContainer";

function HackathonList() {
  const history = useNavigate();

  const goDetail = (id: number) => {
    history(`/hackathon/${id}`);
  };

  return <ListContainer goDetail={goDetail} />;
}

export default HackathonList;
