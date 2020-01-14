import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router";
import { AuthStore } from "stores/auth";
import { BoardStore } from "stores/board";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const authStore = new AuthStore();
const boardStore = new BoardStore();

const stores = {
  // Key can be whatever you want
  routing: routingStore,
  auth: authStore,
  board: boardStore
  // ...other stores
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
