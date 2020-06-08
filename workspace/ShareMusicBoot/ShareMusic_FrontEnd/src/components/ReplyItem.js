import React, { Component } from 'react';
import '../css/reply-modal.css';

class ReplyItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {fromUserId, content, history} = this.props;
        return (
            <div className="row reply-item">
                <div className="reply-image">
                    <img className="reply-user-image" alt="image"
                        src={"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                            + fromUserId + "/" + fromUserId + ".png"}
                    ></img>
                </div>
            
                <div className="reply-user">
                    <strong>{fromUserId}</strong>
                </div>
            
                <div id="reply-message">
                    <span className="msg">
                        {content}
                    </span>
                </div>
            </div>
        );
    }
}

export default ReplyItem;