import React, { useState } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'

import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import AddCollectionPage from './components/AddCollectionPage';
import CollectionPage from './components/CollectionPage';
import ProfilePage from './components/ProfilePage';
import SearchResultPage from './components/SearchResultPage';

import './css/init.css';
import './css/menu.css';
import './css/title-bar.css';

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
      <Route exact path="/" render={(props) => <MainPage onCommunicate={onCommunicate} auth={auth} userId={userId} {...props}/>} />
      <Route path="/addColl" render={(props) => <AddCollectionPage onCommunicate={onCommunicate} auth={auth} userId={userId} {...props}/>} />
      <Route path="/collection/:cno" render={(props) => <CollectionPage onCommunicate={onCommunicate} auth={auth} userId={userId} {...props}/>} />
      <Route path="/profile/:userId" render={(props) => <ProfilePage onCommunicate={onCommunicate} key={props.match.params.userId} auth={auth} userId={userId} {...props}/>} />     
      <Route path="/search/:type/:content" render={(props) => <SearchResultPage onCommunicate={onCommunicate} key={props.match.params.content} auth={auth} userId={userId} {...props}/>} />     
      <Route exact path="/login" render={(props) => <LoginPage auth={auth} onCommunicate={onCommunicate} {...props}/>} />
    </Router>
    </>
  );
}

export default App;
