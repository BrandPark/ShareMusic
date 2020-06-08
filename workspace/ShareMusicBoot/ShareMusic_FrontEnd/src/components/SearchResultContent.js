import React, { Component } from 'react';

import '../css/search-result.css';

class SearchResultContent extends Component {
    render() {
        return (
            <>
            <div className="main">
                <div className="container-fluid search-info">
                    <div id="result-info">
                        The search you found found <div id="result-count">10</div>
                        results
                    </div>
                    <div id="result-comment">
                        Discover the collections of various users and<br/>
                        follow them to receive news
                    </div>
                </div>

                <div className="horizontal-scroll-block">
                    <div className="horizontal-scroll">
                        
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SearchResultContent;