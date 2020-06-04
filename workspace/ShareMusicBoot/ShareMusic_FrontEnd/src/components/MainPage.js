import React, { Component } from 'react';
import Header from './Header';
import Header2 from './Header2';
import MainContent from './MainContent';

import '../css/mainPage.css';

class MainPage extends Component {
    
    render() {
        const {userId, auth} = this.props;

        if(auth == false) {
            this.props.history.push("/login");
        }

        return (
            <>
            <Header2 userId={userId} {...this.props}></Header2>
            <MainContent userId={userId} {...this.props}></MainContent>
            </>
        );
    }
}
export default MainPage;