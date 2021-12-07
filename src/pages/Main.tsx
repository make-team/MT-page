import React, { Suspense } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

import Header from "components/molecules/Header";
import Footer from "components/molecules/Footer";
import Loading from "components/atoms/Loading";

const MENU = [
  {
    title: "해커톤 목록",
    url: "/hackathon",
  },
  {
    title: "팀 목록",
    url: "/team",
  },
  {
    title: "인재 목록",
    url: "/person",
  },
];

function Main() {
  return (
    <>
      <Content>
        <Header />
        <Menu>
          {MENU.map((item) => (
            <ListLink key={item.url} to={item.url} end>
              <div key={item.url}>{item.title}</div>
            </ListLink>
          ))}
        </Menu>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer />
      <Loading />
    </>
  );
}

export default Main;

const Content = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: minmax(0, 66fr);
  grid-template-rows: 11rem 4rem auto 2rem;
  grid-template-areas:
    "nav nav nav"
    "menu menu menu"
    "main main main"
    " . . . ";
  min-height: 100vh;
  margin: 0 auto;
`;

const Menu = styled.div`
  grid-area: menu;
  display: flex;
  height: 2.5rem;
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
  font-size: 0.75rem;
  text-decoration: none;
  &:visited {
    color: white;
  }
  &:link {
    color: white;
  }
  &.active {
    color: black;
  }
`;
