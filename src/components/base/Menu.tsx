import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import CardListHackatonContainer from "../../container/list/HackathonContainer";
import CardListPersonContainer from "../../container/list/PersonContainer";
import CardListTeamContainer from "../../container/list/TeamContainer";

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
          <ListLink exact to={item.url} activeClassName="selected">
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
  background-color: #3c6382;
  min-width: max-content;
  align-items: center;
`;

const ListLink = styled(NavLink)`
  flex: 1;
  display: flex;
  position: relative;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:link {
    color: white;
  }
  &.selected {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 0.5em;
      background: #bada55;
    }
  }
`;
