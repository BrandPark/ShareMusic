import React, { Component } from 'react';
import jQuery from 'jquery';

import Header from './Header';
import CollectionContent from './CollectionContent';

class CollectionPage extends Component {

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
            <CollectionContent {...this.props}></CollectionContent>
            </>
        );
    }
}

export default CollectionPage;