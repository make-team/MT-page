import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Main from "pages/Main";
import HackathonRegist from "pages/HackathonRegist";
import HackathonDetail from "pages/HackathonDetail";
import PersonDetail from "pages/PersonDetail";
import PersonRegist from "pages/PersonRegist";
import TeamDetail from "pages/TeamDetail";
import TeamRegist from "pages/TeamRegist";

import HackathonCardList from "template/HackathonCard";
import CardListTeamContainer from "template/TeamCard";
import PersonCard from "template/personCard";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="hackathon" element={<HackathonCardList />} />
          <Route path="team" element={<CardListTeamContainer />} />
          <Route path="person" element={<PersonCard />} />
          <Route
            path="/"
            element={<Navigate to="/hackathon" state={{ test: "test" }} />}
          />
        </Route>
        <Route path="/hackathon/regist" element={<HackathonRegist />} />
        <Route path="/hackathon/:id" element={<HackathonDetail />} />
        <Route path="/hackathon/:id/team/regist" element={<TeamRegist />} />
        <Route path="/team/:id" element={<TeamDetail />} />
        <Route path="/person/regist" element={<PersonRegist />} />
        <Route path="/person/:id" element={<PersonDetail />} />
        <Route
          path="*"
          element={<Navigate to="/hackathon" state={{ test: "test" }} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
