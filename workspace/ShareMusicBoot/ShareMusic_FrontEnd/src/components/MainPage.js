import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';

class MainPage extends Component {
    
    render() {
        const {userId, auth, onCommunicate} = this.props;
        
        if(auth == false) {
            this.props.history.push("/login");
        }

        return (
            <>
            <div className="color-box-top"></div>
            <div className="wave-box">
                <canvas></canvas>
            </div>
            <div className="color-box-bottom"></div>
            <Header userId={userId} auth={auth} onCommunicate={onCommunicate} {...this.props}></Header>
            <MainContent userId={userId} {...this.props}></MainContent>
            </>
        );
    }
}
export default MainPage;