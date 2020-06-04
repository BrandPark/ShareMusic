import React, { useState } from 'react';
import './css/init.css';
import './css/menu.css';
//import './css/mainPage.css';
import './css/title-bar.css';
// import './css/login.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import IframeTest from './components/IframeTest';
import AddColl from './components/AddColl';
import AddCollectionPage from './components/AddCollectionPage';
import CollectionPage from './components/CollectionPage';


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
      <Route path="/addColl" render={(props) => <AddCollectionPage auth={auth} userId={userId} {...props}/>} />
      <Route path="/collection/:cno" render={(props) => <CollectionPage auth={auth} userId={userId} {...props}/>} />
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
