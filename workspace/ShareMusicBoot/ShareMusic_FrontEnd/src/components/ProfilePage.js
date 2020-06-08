import React, { Component } from 'react';
import ProfileContent from './ProfileContent';
import Header from './Header';

class ProfilePage extends Component {
    
    render() {
        const {userId, auth} = this.props;
        return (
            <>
            <Header userId={userId} {...this.props}></Header>
            <ProfileContent {...this.props}></ProfileContent>
            </>
        );
    }
}

export default ProfilePage;