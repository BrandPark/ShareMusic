import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import CollectionItem from './CollectionItem';

import '../css/follow-modal.css';
import '../css/profile.css';
import '../css/scroll.css';
import FollowItem from './FollowItem';

// import '../css/follow-modal.css';
class ProfileContent extends Component {

    constructor(props) {
        super(props);
        this.state={
            isFollow:true,
            showFollowerModal:false,
            showFollowingModal:false,
            follower:[],
            following:[],
            collections:[{
                collection:{
                },
                songs:[],
                tags:[],
                likes:[]
            }]
        }
        this.onClickFollow = this.onClickFollow.bind(this);
        this.closeFollowerModal = this.closeFollowerModal.bind(this);
        this.closeFollowingModal = this.closeFollowingModal.bind(this);
        this.showFollowerModalToggle = this.showFollowerModalToggle.bind(this);
        this.showFollowingModalToggle = this.showFollowingModalToggle.bind(this);
    }

    componentDidMount() {
        const {match, userId} = this.props;

        fetch("/ShareMusic/collections/userid/" + match.params.userId + "?page=1&amount=20", {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                collections:data
            });
        });

        fetch("/ShareMusic/members/follows/follower/" + match.params.userId, {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                follower:data
            });
        });

        fetch("/ShareMusic/members/follows/following/" + match.params.userId, {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                following:data
            });
        });

        fetch("/ShareMusic/members/follows/following/" + userId, {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.findIndex(following => following == match.params.userId) == -1) {
                this.setState({
                    isFollow:false
                })
            }
        });
    }

    showFollowerModalToggle() {
        const {closeFollowerModal} = this;
        const {match} = this.props;

        if(this.state.showFollowerModal) {
            fetch("/ShareMusic/members/follows/following/" + match.params.userId, {
                method :"GET"
            })
            .then(res=>res.json())
            .then(data=> {
                this.setState({
                    following:data
                });
            });
        }
        closeFollowerModal();
    }

    closeFollowerModal() {
        this.setState({
            showFollowerModal:!this.state.showFollowerModal
        })
    }

    showFollowingModalToggle() {
        const {closeFollowingModal} = this;
        const {match} = this.props;

        if(this.state.showFollowingModal) {
            fetch("/ShareMusic/members/follows/following/" + match.params.userId, {
                method :"GET"
            })
            .then(res=>res.json())
            .then(data=> {
                this.setState({
                    following:data
                });
            });
        }
        closeFollowingModal();
    }

    closeFollowingModal() {
        this.setState({
            showFollowingModal:!this.state.showFollowingModal
        })
    }

    onClickFollow() {
        const {userId, match} = this.props;
        
        if(!this.state.isFollow) {
            fetch("/ShareMusic/members/follows/", {
                method :"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    "fromUserId":userId,
                    "toUserId":match.params.userId
                })
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {        
                    this.setState({
                        isFollow:true
                    });
                    //팔로우 버튼 누르고 프로필 페이지 팔로워 수 업데이트
                    fetch("/ShareMusic/members/follows/follower/" + match.params.userId, {
                        method :"GET"
                    })
                    .then(res=>res.json())
                    .then(data=> {
                        this.setState({
                            follower:data
                        });
                    });
                }
            });
        }
        else {
            fetch("/ShareMusic/members/follows/" + userId + "/" + match.params.userId, {
                method :"DELETE"
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {        
                    this.setState({
                        isFollow:false
                    });
                    //언 팔로우 버튼 누르고 프로필 페이지 팔로워 수 업데이트
                    fetch("/ShareMusic/members/follows/follower/" + match.params.userId, {
                        method :"GET"
                    })
                    .then(res=>res.json())
                    .then(data=> {
                        this.setState({
                            follower:data
                        });
                    });
                }
            });
        }
    }

    render() {
        const {match, userId} = this.props;
        const {collections, follower, following, showFollowerModal, showFollowingModal, isFollow} = this.state;
        const {showFollowerModalToggle, showFollowingModalToggle, closeFollowingModal, closeFollowerModal, onClickFollow} = this;
        
        return (
            <>
            <div className="main">
            <div className="container">
            <div className="profile">
                <div className="col-md-5">
                    <img src={"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                     + match.params.userId + "/" + match.params.userId + ".png"}
                    className="profile-image" alt="image" />
                </div>

                <div className="col-md-7">
                    <div className="collector-name">
                    <div>
                        <strong style={{fontSize:"40px"}}>{match.params.userId}</strong>
                    </div> 
                    {/* 버튼크기조절 */}
                    <button type="button" className={isFollow ? "btn btn-secondary btn-sm" : "btn btn-primary btn-sm"}
                        style={{display:(userId == match.params.userId ? "none":"block"), marginLeft:"40px", marginTop:"18px", height:"30px", verticalAlign:"center"}}
                        onClick={onClickFollow}>
                        {isFollow ? "팔로잉" : "팔로우"}
                    </button>
                    </div>

                    <div className="user-info">
                        <div>
                            <strong>컬렉션</strong>
                            <div>{collections.length}</div>
                        </div>

                        <div>
                            <strong onClick={showFollowerModalToggle}> 
                                팔로워
                            </strong>
                            <div data-toggle="modal" data-target="#follower-modal"
                                onClick={showFollowerModalToggle}
                            >{follower.length}
                            </div>
                        </div>

                        <div>
                            <strong onClick={showFollowingModalToggle}>
                                팔로잉
                            </strong>
                            <div data-toggle="modal" data-target="#following-modal"
                                onClick={showFollowingModalToggle}
                            >{following.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="horizontal-scroll-block">
                <div className="horizontal-scroll">
                    {collections.map((c, i) => {
                        return (
                        <CollectionItem
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

            {/* <!-- Follower-Modal --> */}
            <Modal isOpen={showFollowerModal} toggle={showFollowerModalToggle} className="follow-modal-dialog">
                {/* <!-- Modal content--> */}
                <div className="modal-header" style={{height:"11%", marginBottom:"0px", marginTop:"0px"}}>
                    <div style={{width:"25%"}}>      
                    </div>
                    <div style={{width:"50%", textAlign:"center"}}>
                        <div className="modal-title">
                            <strong style={{fontSize:"17px"}}>팔로워</strong>
                        </div>
                    </div>
                    <div style={{width:"25%", textAlign:"right", verticalAlign:"center"}}>
                        <i className="fas fa-times fa-lg" data-toggle="modal" data-target="#follower-modal" 
                            onClick={showFollowerModalToggle}
                        ></i>
                    </div>
                </div>
                {/* <!-- modal-header -->  */}

                <div className="follow-modal-body">
                    <div className="container-fluid modal-container">
                        {follower.map((f, i) => {
                            return (
                            <FollowItem
                                followId={f}
                                key={i}
                                modalToggle = {closeFollowerModal}
                                {...this.props}
                            ></FollowItem>
                            );
                        })}
                    </div>
                </div>
                {/* <!-- modal-body --> */}
            </Modal>

            {/* <!-- Following-Modal --> */}
            <Modal isOpen={showFollowingModal} toggle={showFollowingModalToggle} className="follow-modal-dialog">
                {/* <!-- Modal content--> */}
                <div className="modal-header" style={{height:"11%", marginBottom:"0px", marginTop:"0px"}}>
                    <div style={{width:"25%"}}>
                    </div>
                     <div style={{width:"50%", textAlign:"center"}}>
                        <div className="modal-title">
                            <strong style={{fontSize:"17px"}}>팔로잉</strong>
                        </div>
                    </div>
                    <div style={{width:"25%", textAlign:"right", verticalAlign:"center"}}>
                        <i className="fas fa-times fa-lg" data-toggle="modal" data-target="#follower-modal" 
                            onClick={showFollowingModalToggle}
                        ></i>
                    </div>
                </div>
                {/* <!-- modal-header -->  */}

                {/* <!-- modal-body -->  */}
                <div className="follow-modal-body">
                    <div className="container-fluid modal-container">
                        {following.map((f, i) => {
                            return (
                            <FollowItem
                                followId={f}
                                key={i} 
                                modalToggle = {closeFollowingModal}
                                {...this.props}
                            ></FollowItem>
                            );
                        })}
                    </div>
                </div>
                {/* <!-- modal-body --> */}
            </Modal>
            </div>
            </>
        );
    }
}

export default ProfileContent;