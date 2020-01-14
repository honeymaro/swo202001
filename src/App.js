import React, { Component } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";
import { inject, observer } from "mobx-react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "components/Header";
import Footer from "components/Footer";

import Main from "pages/Main";
import Article from "pages/Article";
import Search from "pages/Search";
import Board from "pages/Board";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

@inject("routing")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>swo202001</title>
        </Helmet>
        <Header />
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/articles/:aid" exact component={Article} />
          <Route path="/articles" exact component={Board} />
          <Route path="/search" exact component={Search} />
          <Route path="/account" exact component={Main} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
