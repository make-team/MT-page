import React, { useEffect, useState } from "react";

import { list } from "../../api/hackathon";
import HackathonCard, {
  Hackathon,
} from "../../components/template/HackathonCard";

function CardListHackatonContainer() {
  const [dataList, setDataList] = useState<Hackathon[]>();
  const updateList = async () => {
    const { data } = await list();
    setDataList(
      data.map((item) => ({
        id: item._id,
        title: item.title,
        description: item.description,
        contact: item.contact,
        endTime: new Date(item.end_time),
        startTime: new Date(item.start_time),
      }))
    );
  };

  useEffect(() => {
    updateList();
  }, []);
  return <HackathonCard items={dataList} add={true} toUrl="/hackathon" />;
}

export default CardListHackatonContainer;
