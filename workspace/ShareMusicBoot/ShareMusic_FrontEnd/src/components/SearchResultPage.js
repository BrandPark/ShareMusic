import React, { Component } from 'react';
import SearchResult from './SearchResult';

class SearchResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }
    
    onLoadSongs(e) {
        console.log("value : " + e.target.value);
        console.log("name : " + e.target.name);
    }
    render() {
        const {searchBy, text, datas} = this.props;
        const {onLoadSongs} = this;
        const datasList = datas.map((data) => (
            <SearchResult key={data.cno} id={data.cno}
                userId={data.userId}
                collectionName={data.collectionName}
                cno={data.cno} >
            </SearchResult>
        ));
        
        return (
            <>
            <div className="container m-4">
                <h1>"{text}" 로 검색한 결과입니다.</h1>            
                <div>
                    {datasList}
                </div>                
            </div>
            </>
        );
    }
}

export default SearchResultPage;