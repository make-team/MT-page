import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Main from "pages/Main";
import HackathonDetail from "pages/hackathon/Detail";
import PersonDetail from "pages/person/Detail";
import PersonRegist from "pages/person/Regist";
import TeamDetail from "pages/team/Detail";
import TeamRegist from "pages/team/Regist";

import HackathonCardList from "pages/hackathon/List";
import CardListTeamContainer from "components/hackthon/DetailTeamCard";
import PersonCard from "pages/person/List";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="hackathon" element={<HackathonCardList />} />
          <Route path="/hackathon/:id" element={<HackathonDetail />} />
          <Route path="team" element={<CardListTeamContainer />} />
          <Route path="/team/:id" element={<TeamDetail />} />
          <Route path="person" element={<PersonCard />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="/" element={<Navigate to="/hackathon" />} />
        </Route>
        <Route path="/hackathon/:id/team/regist" element={<TeamRegist />} />
        <Route path="/person/regist" element={<PersonRegist />} />
        <Route path="*" element={<Navigate to="/hackathon" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
