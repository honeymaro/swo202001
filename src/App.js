import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

@inject('routing')
@observer
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>APPNAME</title>
        </Helmet>
        <Header />
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        <Switch>
          {/* <Route path='/' exact component={Main} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
