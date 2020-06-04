import React, { Component } from 'react';
import CollectionInfo from './CollectionInfo';

class MainContent extends Component {

  constructor(props) {
    super(props);
    this.state={
      collections:[{
        collection:{
        }
      }]
    }
  }
  componentDidMount() {
    const {userId} = this.props;
    if(userId) {
      fetch("/ShareMusic/collections/recent/followers/" + userId, {
        method :"GET"
      })
      .then(res=>res.json())
      .then(data=> {
        //console.log("data : " + data);
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
      <div className="main">
        <div className="horizontal-scroll-block">
          <div className="horizontal-scroll">
          {collections.map((c, i) => {
            return (
              <CollectionInfo
                collOwner={c.collection.userId}
                cno={c.collection.cno}
                collectionName={c.collection.collectionName}
                key={c.collection.cno} {...this.props}
              ></CollectionInfo>
            );
          })}
          </div>
        </div>
      </div>
      <span>
      
      </span>
    </section>
    );
  }
}

export default MainContent;