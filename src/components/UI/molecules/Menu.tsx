import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import CardListHackatonContainer from "components/container/list/HackathonContainer";
import CardListPersonContainer from "components/container/list/PersonContainer";
import CardListTeamContainer from "components/container/list/TeamContainer";

const MENU = [
  {
    title: "해커톤 목록",
    url: "hackathon",
  },
  {
    title: "팀 목록",
    url: "team",
  },
  {
    title: "인재 목록",
    url: "person",
  },
];

function Menu() {
  return (
    <>
      <Wrapper>
        {MENU.map((item) => (
          <ListLink
            key={item.url}
            exact
            to={item.url}
            activeClassName="selected"
          >
            <div key={item.url}>{item.title}</div>
          </ListLink>
        ))}
      </Wrapper>

      <Switch>
        <Route exact path="/hackathon" component={CardListHackatonContainer} />
        <Route exact path="/team" component={CardListTeamContainer} />
        <Route exact path="/person" component={CardListPersonContainer} />
      </Switch>
    </>
  );
}

export default Menu;

const Wrapper = styled.div`
  grid-area: menu;
  display: flex;
  height: 4rem;
  background-color: #100c0d;
  min-width: max-content;
  align-items: center;
`;

const ListLink = styled(NavLink)`
  flex: 1;
  display: flex;
  position: relative;
  background-color: #a15c38;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 1rem;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:link {
    color: white;
  }
  &.selected {
    color: #262220;
  }
`;
