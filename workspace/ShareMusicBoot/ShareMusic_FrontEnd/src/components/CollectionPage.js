import React, { Component } from 'react';

import '../css/collection.css'
import Header2 from './Header2';
import CollectionContent from './CollectionContent';

class CollectionPage extends Component {
    render() {
        const {userId} = this.props;
        return (
            <>
            <Header2 userId={userId} {...this.props}></Header2>
            <CollectionContent {...this.props}></CollectionContent>
            </>
        );
    }
}

export default CollectionPage;