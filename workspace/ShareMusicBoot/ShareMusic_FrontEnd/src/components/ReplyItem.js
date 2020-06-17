import React, { Component } from 'react';
import '../css/reply-modal.css';

class ReplyItem extends Component {
    constructor(props) {
        super(props);
        this.onClickLink = this.onClickLink.bind(this);
    }

    //댓글 단 사용자의 profile page로 이동
    onClickLink() {
        const {history,fromUserId} = this.props;
        history.push("/profile/" + fromUserId);
    }

    render() {
        const {fromUserId, content, regTime, history} = this.props;
        const {onClickLink} = this;
        return (
            <div className="row reply-item" onClick={onClickLink}>
                <div className="reply-image">
                    <img className="reply-user-image" alt="image"
                        src={"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                            + fromUserId + "/" + fromUserId + ".png"}
                    ></img>
                </div>
            
                <div className="reply-user">
                    <div>
                        <strong>{fromUserId}</strong>
                    </div>
                    <div className="reply-date">
                        {String(regTime).substr(0,16)}
                    </div>
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