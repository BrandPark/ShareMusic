import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
class MainPage extends Component {
    
    render() {
        const {onCommunicate, userId, auth} = this.props;
        console.log("auth::::" + auth);
        console.log("userId::::" + userId);

        if(auth == false) {
            this.props.history.push("/login");
        }

        return (
            <>
            <Header></Header>
            <h1>{userId}</h1>
            <div>
                Mainpage
            </div>
            
            </>
        );
    }
}
export default MainPage;