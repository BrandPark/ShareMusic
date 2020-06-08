import React, { Component } from 'react';
import Header from './Header';

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
            <Header userId={userId} {...this.props}></Header>
            <AddCollectionContent userId={userId} auth={auth} {...this.props}></AddCollectionContent>
            </>
        );
    }
}

export default AddCollectionPage;