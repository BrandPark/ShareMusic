import React, { Component } from 'react';
import ProfileContent from './ProfileContent';
import Header from './Header';

class ProfilePage extends Component {
    
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
            <ProfileContent {...this.props}></ProfileContent>
            </>
        );
    }
}

export default ProfilePage;