import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Main } from "./src/Page";

const App: FC = () => <>
  <Main />
</>;

ReactDOM.render(<App />, document.getElementById("app"));
