import React, { Component } from 'react';

class FollowItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            isFollow:false
        }
        this.onClickProfile = this.onClickProfile.bind(this);
        this.onClickFollow = this.onClickFollow.bind(this);
    }

    componentDidMount() {
        const {followId, userId} = this.props;
        
        fetch("/ShareMusic/members/follows/following/" + userId, {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.findIndex(following => following == followId) != -1) {
                this.setState({
                    isFollow:true
                })
            }
        });
    }

    onClickFollow() {
        const {userId, followId} = this.props;
        
        if(!this.state.isFollow) {
            fetch("/ShareMusic/members/follows/", {
                method :"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    "fromUserId":userId,
                    "toUserId":followId
                })
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {        
                    this.setState({
                        isFollow:true
                    });
                }
            });
        }
        else {
            fetch("/ShareMusic/members/follows/" + userId + "/" + followId, {
                method :"DELETE"
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {        
                    this.setState({
                        isFollow:false
                    });
                }
            });
        }
    }

    onClickProfile() {
        const {followId, history, modalToggle} = this.props;

        modalToggle();
        history.push("/profile/" + followId);
    }

    render() {
        const {followId, userId} = this.props;
        const {isFollow} = this.state;
        const {onClickFollow, onClickProfile} = this;
        return (
            <div className="row follow-item">
                <div className="follow-user-image-area">
                    <img className="follow-user-image" alt="image"
                        src={"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                        + followId + "/" + followId + ".png"} 
                    ></img>
                </div>

                <div className="follow-user-id-area">
                    <strong onClick={onClickProfile}>{followId}</strong>
                </div>

                <div className="follow-button-area">
                    <button type="button" className={isFollow ? "btn btn-secondary btn-sm" : "btn btn-primary btn-sm"} onClick={onClickFollow}>
                        {isFollow ? "팔로잉" : "팔로우"}
                    </button>
                </div>  
            </div>
        );
    }
}

export default FollowItem;