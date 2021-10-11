import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./view/Root/Root";
import { CookiesProvider } from "react-cookie";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <CookiesProvider>
    <Root />
  </CookiesProvider>,

  document.getElementById("root")
);

serviceWorker.unregister();
