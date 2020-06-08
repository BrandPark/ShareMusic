import React, { Component } from 'react';
import Header from './Header';
import SearchResultContent from './SearchResultContent';

class SearchResultPage extends Component {
    render() {
        const {userId, auth} = this.props;
        return (
            <>
            <Header userId={userId} {...this.props}></Header>
            <SearchResultContent {...this.props}></SearchResultContent>
            </>
        );
    }
}

export default SearchResultPage;