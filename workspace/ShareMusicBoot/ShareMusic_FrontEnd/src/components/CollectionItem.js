import React, { Component } from 'react';
import jQuery from 'jquery';

import '../css/scroll.css';

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

    componentDidMount() {
        var imgWrapper = jQuery(document).find(".img-wrapper");

        imgWrapper.hover(function(e){
            jQuery(this).addClass('img-hover');
            jQuery(this).find('.collection-info-fade').fadeIn(800);
            jQuery(this).find('.collection-info div:first').removeClass('collection-name').addClass('collection-name-hover');        
        },function(e){
            jQuery(this).delay("slow").removeClass('img-hover');
            jQuery(this).find('.collection-info-fade').fadeOut(700);
            jQuery(this).find('.collection-info div:first').removeClass('collection-name-hover').addClass('collection-name');
        });
    }

    //특정 컬렉션 클릭 시 
    onClick(e) {
        // 해당 컬렉션 상세 페이지로 이동
        this.props.history.push("/collection/" + this.props.cno);
    }

    render() {
        const {onClick} = this;
        const {collectionName, regTime, tracks, likes, tags, style} = this.props;
        const {imgURL} = this.state;
        return (            
        <div className="img-wrapper" style={style}>
            <img className="collection-image-scroll" src={imgURL}
                onClick={onClick}>
            </img>
            <div className="collection-info">
                <div className="collection-name">
                    {collectionName}
                </div>
                <div className="collection-info-fade">
                    <div>
                        <small>{String(regTime).substr(0,10)}</small>
                    </div>
                    <div>
                        <strong>{tracks}&nbsp;</strong><small>Tracks</small>&nbsp;&nbsp;
                        <strong>{likes}&nbsp;</strong><small>Likes</small>
                    </div>
                <div>
                {tags.map((tag, i) => {
                    return (
                        <span id="tag" key={i}>
                            #{tag.tag}&nbsp;
                        </span>
                    );
                })}    
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CollectionInfo;