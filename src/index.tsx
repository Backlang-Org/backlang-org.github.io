/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Router, hashIntegration } from "solid-app-router";
import App from "./App";

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
