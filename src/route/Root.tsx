import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import HackathonRegist from "../pages/HackathonRegist";
import HackathonDetail from "../pages/HackathonDetail";
function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Hackathon/Detail" component={HackathonDetail} />
        <Route exact path="/Hackathon/Regist" component={HackathonRegist} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
