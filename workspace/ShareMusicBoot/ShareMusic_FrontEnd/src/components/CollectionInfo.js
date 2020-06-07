import React, { Component } from 'react';
import $ from 'jquery';

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
        var imgWrapper = $(document).find(".img-wrapper");


        imgWrapper.hover(function(e){
            $(this).addClass('img-hover');
            $(this).find('.collection-info-fade').fadeIn(800);
            $(this).find('.collection-info div:first').removeClass('collection-name').addClass('collection-name-hover');

        
        },function(e){
            $(this).delay("slow").removeClass('img-hover');
            $(this).find('.collection-info-fade').fadeOut(700);
            $(this).find('.collection-info div:first').removeClass('collection-name-hover').addClass('collection-name');
        });

    }

    onClick(e) {
        this.props.history.push("/collection/" + this.props.cno);
    }

    render() {
        const {onClick} = this;
        const {collectionName, regTime, tracks, likes, tags} = this.props;
        const {imgURL} = this.state;
        return (            
        <div className="img-wrapper">
            <img className="collection-image-scroll" src={imgURL}
                onClick={onClick}>
            </img>
            <div class="collection-info">
                <div class="collection-name">
                    {collectionName}
                </div>
                <div class="collection-info-fade">
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