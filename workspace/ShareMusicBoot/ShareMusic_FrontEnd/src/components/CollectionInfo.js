import React, { Component } from 'react';

class CollectionInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            imgURL:"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
            + this.props.collOwner + "/"
            + this.props.cno + "-"
            + this.props.collectionName + ".png"
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.history.push("/login");
    }

    render() {
        const {onClick} = this;
        const {imgURL} = this.state;
        return (            
        <div className="img-wrapper">
            <img className="collection-image-main" src={imgURL}
                onClick={onClick} />
        </div>
        );
    }
}

export default CollectionInfo;