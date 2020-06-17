import React, { Component } from 'react';
import Header from './Header';
import AddCollectionContent from './AddCollectionContent';

import '../css/add-collection.css';

class AddCollectionPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    
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
            <div className="color-box-bottom">
                <div className="loading">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
            <Header userId={userId} auth={auth} onCommunicate={onCommunicate} {...this.props}></Header>
            <AddCollectionContent userId={userId} auth={auth} {...this.props}></AddCollectionContent>
            </>
        );
    }
}

export default AddCollectionPage;