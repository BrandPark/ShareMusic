import React, { Component } from 'react';
import CollectionItem from './CollectionItem';
import '../css/mainPage.css';
import '../css/scroll.css';
class MainContent extends Component {

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
  
  // 최근 팔로워들의 업데이트 목록 api 호출
  componentDidMount() {
    const {userId} = this.props;
    if(userId) {
      fetch("/ShareMusic/collections/recent/followers/"
       + userId + "?page=1&amount=20", {
        method :"GET"
      })
      .then(res=>res.json())
      .then(data=> {
        this.setState({
          collections:data
        })
      });
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <section>
      <div type="hidden" className="isMain"></div>
      <div className="main">
        <div className="container-fluid main-info">
            <div id="main-info">
              Follower's Recent Updates Collections
            </div>
            <div id="result-comment">
              Discover the collections of various users and<br/>
              follow them to receive news
            </div>
        </div>
        <div className="horizontal-scroll-block">
          <div className="horizontal-scroll">
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
    </section>
    );
  }
}

export default MainContent;