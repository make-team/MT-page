import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Main from "components/pages/Main";
import HackathonRegist from "components/pages/HackathonRegist";
import HackathonDetail from "components/pages/HackathonDetail";
import PersonDetail from "components/pages/PersonDetail";
import PersonRegist from "components/pages/PersonRegist";
import TeamDetail from "components/pages/TeamDetail";
import TeamRegist from "components/pages/TeamRegist";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={["/hackathon", "/team", "/person"]}
          component={Main}
        />
        <Route exact path="/hackathon/regist" component={HackathonRegist} />
        <Route exact path="/hackathon/:id" component={HackathonDetail} />
        <Route exact path="/hackathon/:id/team/regist" component={TeamRegist} />
        <Route exact path="/team/:id" component={TeamDetail} />
        <Route exact path="/person/regist" component={PersonRegist} />
        <Route exact path="/person/:id" component={PersonDetail} />
        <Redirect to="/hackathon" />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
