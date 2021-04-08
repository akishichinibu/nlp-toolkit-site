import React, { FC } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ServiceBert } from "./src/bert/index";
import { Entry, serviceInfos } from "./src/Entry";

const App: FC = () => <>
  <Router>
    <Switch>
      <Route path="/bert"><ServiceBert /></Route>
      <Route path="/users">
      </Route>
      <Route path="/">
        <Entry services={serviceInfos} title={"hello"} description={"hi"} />
      </Route>
    </Switch>
  </Router>
</>;

ReactDOM.render(<App />, document.getElementById("app"));
