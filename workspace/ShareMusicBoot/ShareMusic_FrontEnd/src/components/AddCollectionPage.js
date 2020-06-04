import React, { Component } from 'react';
import Header2 from './Header2';

import '../css/add-collection.css';
import AddCollectionContent from './AddCollectionContent';

class AddCollectionPage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const {userId, auth} = this.props;
        return (
            <>
            <Header2 userId={userId} {...this.props}></Header2>
            <AddCollectionContent></AddCollectionContent>
            </>
        );
    }
}

export default AddCollectionPage;