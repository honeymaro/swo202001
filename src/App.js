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
          <Route path='/' exact component={Main} />
          <Route path='/auth/signin' exact component={SignIn} />
          <Route path='/auth/signup' exact component={SignUp} />
          <PrivateRoute path='/payment/charge' exact component={Charge} />
          <PrivateRoute path='/payment/history' exact component={History} />
          <PrivateRoute path='/users/me' exact component={Me} />
          <PrivateRoute path='/admin/owdin' exact component={Admin} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
