import React, { Component } from 'react';
import {Modal} from 'reactstrap';
import CollectionItem from './CollectionItem';
import FollowItem from './FollowItem';

import '../css/follow-modal.css';
import '../css/profile.css';
import '../css/scroll.css';

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

        //해당 사용자의 컬렉션들 정보 api 호출
        fetch("/ShareMusic/collections/userid/" + match.params.userId + "?page=1&amount=20", {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                collections:data
            });
        });

        //해당 사용자의 팔로워 정보 api 호출
        fetch("/ShareMusic/members/follows/follower/" + match.params.userId, {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                follower:data
            });
        });

        //해당 사용자의 팔로잉 정보 api 호출
        fetch("/ShareMusic/members/follows/following/" + match.params.userId, {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                following:data
            });
        });

        //로그인한 사용자의 팔로우 api 호출로 팔로우 여부 확인
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

    // 팔로워 modal toggle
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

    // 팔로워 modal 닫기
    closeFollowerModal() {
        this.setState({
            showFollowerModal:!this.state.showFollowerModal
        })
    }

    // 팔로잉 modal toggle
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

    // 팔로잉 modal 닫기
    closeFollowingModal() {
        this.setState({
            showFollowingModal:!this.state.showFollowingModal
        })
    }

    // 팔로우 버튼 클릭
    onClickFollow() {
        const {userId, match} = this.props;
        
        //팔로우 안되어 있는 경우, 팔로우하기
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
        //팔로우 되어 있는 경우, 언팔로우하기
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
            <div type="hidden" className="isProfile"></div>
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
                            style={{right:"5vh"}}
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
            <Modal isOpen={showFollowerModal} toggle={showFollowerModalToggle} contentClassName="content-border-radius" className="follow-modal-dialog">
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
            <Modal isOpen={showFollowingModal} toggle={showFollowingModalToggle} contentClassName="content-border-radius" className="follow-modal-dialog">
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