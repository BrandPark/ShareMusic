import React, { Component } from 'react';
import CollectionItem from './CollectionItem';

import '../css/search-result.css';
import '../css/scroll.css';

class SearchResultContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            collections:[{
                collection:{
                },
                songs:[],
                tags:[],
                likes:[]
            }]
        }
    }

    componentDidMount() {
        const {match} = this.props;

        // 검색 api call
        fetch("/ShareMusic/search/" + match.params.type + "/" + match.params.content + "?page=1&amount=30", {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                collections:data
            })
        });
    }
    render() {
        const {collections} = this.state;
        return (
            <>
            <div type="hidden" className="isSearchResult"></div>
            <div className="main">
                <div className="container-fluid search-info">
                    <div id="result-info">
                        There are <div id="result-count">{collections.length}</div> search results you found
                    </div>
                    <div id="result-comment">
                        Discover the collections of various users and<br/>
                        follow them to receive news
                    </div>
                </div>

                <div className="horizontal-scroll-block">
                    <div className="horizontal-scroll" >
                    {collections.map((c, i) => {
                        return (
                            <CollectionItem
                                style={{left:"5vh"}}
                                collOwner={c.collection.userId}
                                cno={c.collection.cno}
                                collectionName={c.collection.collectionName}
                                regTime={c.collection.regTime}
                                tracks={c.songs.length}
                                likes={c.likes.length}
                                tags={c.tags}
                                key={c.collection.cno} {...this.props}
                            ></CollectionItem>
                        );
                    })}
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SearchResultContent;