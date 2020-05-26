import React, { Component } from 'react';
import Header from './Header';

class IframeTest extends Component {

    constructor(props) {
        super(props);
        this.state={
            vId:"https://www.youtube.com/embed/QNvlucGNLO8"
        }
    }
    render() {
        const {userId} = this.props;
        const {vId} = this.state;
        return (
            <>
            <Header userId={userId} {...this.props}></Header>
            <div>
            <iframe width="320" height="180" 
            src={vId}
            frameBorder="0"></iframe>
            </div>
            </>
        );
    }
}

export default IframeTest;