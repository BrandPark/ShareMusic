import React, { useState } from 'react';
import MainPage from './MainPage';
import CompA from './CompA';
import Header from './Header';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';

const Render = () => {

  const [auth, setAuth] = useState("false");
  const onCommunicate = (aut) => {
    console.log("onCommunicate on Render");
    setAuth(aut);
    console.log(aut + " , " + auth);
  }
  
  return (
    <>
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' render={() => <MainPage auth={auth} onCommunicate={onCommunicate}/>} />
          <Route exact path='/login' render={() => <LoginPage auth={auth} onCommunicate={onCommunicate}/>}/>
        </Switch>
    </Router>
    </>
    );
};

export default Render;



