import React from "react";
import { storiesOf } from "@storybook/react";
import HackathonListCard from "components/hackthon/MainCard";

storiesOf("HackathonListCard", module)
  .addDecorator((story) => <div style={{ padding: "0 20rem" }}>{story()}</div>)
  .add("default", () => <HackathonListCard />);
