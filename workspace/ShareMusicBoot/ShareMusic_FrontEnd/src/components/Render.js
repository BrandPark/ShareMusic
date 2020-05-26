import React, { Component } from 'react';
import MainPage from './MainPage';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import IframeTest from './IframeTest';

class Render extends Component {
  render() {
    const {userId, auth, history} = this.props;
    console.log("RENDER!!!!!!!!!!!!!!!!!!!!!!");
    return (
      <>
      {/* history={history} */}
        <Header userId={userId} {...this.props}></Header>
        <Router>
          <Switch>
          <Route path="/i" render={() => <IframeTest {...this.props}/>} />
          <Route path="/main" render={(props) => <MainPage auth={auth} {...props}/>} />
          </Switch>
        </Router>
      </>
    );
  }
};

export default Render;



