import React, { Component } from 'react';

import '../css/collection.css'
import Header from './Header';
import CollectionContent from './CollectionContent';

class CollectionPage extends Component {
    render() {
        const {userId, auth} = this.props;
        return (
            <>
            <Header userId={userId} {...this.props}></Header>
            <CollectionContent {...this.props}></CollectionContent>
            </>
        );
    }
}

export default CollectionPage;