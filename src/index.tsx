import React from "react";
import ReactDOM from "react-dom";
import { Router as BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store";
import App from "./App";
import history from "./utils/history";

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
