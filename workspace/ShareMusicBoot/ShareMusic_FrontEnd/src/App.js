import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import IframeTest from './components/IframeTest';

function App() {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState('');
  function onCommunicate(a, u) {
    console.log("App, onCommunicate (auth): " + a);
    console.log("App, onCommunicate (userId): " + u);

    setAuth(a);
    setUserId(u);
  }
  return (
    <>
    <Router>
      <Route exact path="/login" render={(props) => <LoginPage auth={auth} onCommunicate={onCommunicate} {...props}/>} />
      <Route exact path="/" render={(props) => <MainPage auth={auth} userId={userId} onCommunicate={onCommunicate} {...props}/>} />
      <Route exact path='/i' component={IframeTest} />
    </Router>
    </>
  );
}

export default App;
