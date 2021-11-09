import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import HackathonRegist from "../pages/HackathonRegist";
import HackathonDetail from "../pages/HackathonDetail";
import PersonDetail from "../pages/PersonDetail";
import PersonRegist from "../pages/PersonRegist";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/hackathon/regist" component={HackathonRegist} />
        <Route exact path="/hackathon/:id" component={HackathonDetail} />
        <Route exact path="/team/regist" component={HackathonRegist} />
        <Route exact path="/team/:id" component={HackathonDetail} />
        <Route exact path="/person/regist" component={PersonRegist} />
        <Route exact path="/person/:id" component={PersonDetail} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
