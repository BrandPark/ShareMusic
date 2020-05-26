import React, { useState } from 'react';
import './css/init.css';
import './css/main.css';
import './css/menu.css';
import './css/title-bar.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import IframeTest from './components/IframeTest';
import AddColl from './components/AddColl';


function App() {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState('');
  function onCommunicate(a, u) {
    setAuth(a);
    setUserId(u);
  }
  return (
    <>
    <Router>
      <Route exact path="/login" render={(props) => <LoginPage auth={auth} onCommunicate={onCommunicate} {...props}/>} />
      <Route exact path="/" render={(props) => <MainPage auth={auth} userId={userId} {...props}/>} />
      <Route exact path='/i' render={(props) => <IframeTest userId={userId} {...props}/>} />
      <Route path="/addColl" render={(props) => <AddColl auth={auth} userId={userId} {...props}/>} />

    </Router>





    {/* <Router>
      <Switch>
      <Route exact path="/login" render={(props) => <LoginPage auth={auth} onCommunicate={onCommunicate} {...props}/>} />
      <Route path="/" render={(props) => <Render auth={auth} userId={userId} {...props}/>} />
      </Switch>
    </Router> */}

    </>
  );
}

export default App;
