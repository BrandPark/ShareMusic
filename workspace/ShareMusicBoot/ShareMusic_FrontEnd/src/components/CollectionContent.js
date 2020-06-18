import React, { Component } from 'react';
import {Modal} from 'reactstrap';
import defaultImg from '../images/defaultImg.PNG';
import ReplyItem from './ReplyItem';
import SongItem from './SongItem';

import '../css/reply-modal.css';
import '../css/youtube-modal.css';
import '../css/collection.css'

class CollectionContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            likeIcon:false,
            vId:'',
            replyText:'',
            showVideoModal:false,
            showReplyModal:false,
            likeColor:{
                color:"black"
            },
            imgURL:defaultImg,
            collectionInfo:{
                collection:{
                },
                songs:[],
                likes:[],
                tags:[],
                replys:[]
            }
        }
        this.onClickVideo = this.onClickVideo.bind(this);
        this.onClickPost = this.onClickPost.bind(this);
        this.onChangeReply = this.onChangeReply.bind(this);
        this.onClickLike = this.onClickLike.bind(this);
        this.showVideoModalToggle = this.showVideoModalToggle.bind(this);
        this.showReplyModalToggle = this.showReplyModalToggle.bind(this);
    }

    //컬렉션 정보 api 호출
    componentDidMount() {
        const {match, userId} = this.props;
        fetch("/ShareMusic/collections/cno/" + match.params.cno, {
            method :"GET"
        })
        .then(res=>res.json())
        .then(data=> {
            this.setState({
                vId:data.songs[0].videoId,
                collectionInfo:data,
                imgURL:"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                + data.collection.userId + "/"
                + data.collection.cno + "-"
                + data.collection.collectionName + ".png",
            });
            
            if(data.likes.findIndex(like => like.fromUserId == userId) != -1) {
                this.setState({
                    likeIcon:true,
                    likeColor:{
                        color:"red"
                    }
                })
            }
        });
    }

    //좋아요 클릭
    onClickLike(e) {
        const {likeColor} = this.state;
        const {userId, match} = this.props;
        
        // 좋아요 안 눌러져 있으면
        if(likeColor.color == "black") {
            fetch("/ShareMusic/collections/likes/", {
                method :"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    "cno":Number(match.params.cno),
                    "fromUserId":userId
                })
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {        
                    this.setState({
                        likeIcon:true,
                        likeColor:{
                            color:"red"
                        }
                    });

                    //좋아요 수 업데이트
                    fetch("/ShareMusic/collections/cno/" + match.params.cno, {
                        method :"GET"
                    })
                    .then(res=>res.json())
                    .then(data=> {
                        this.setState({
                            collectionInfo:data
                        });
                    });
                }
            });
        }

        // 이미 좋아요 눌러져있으면
        else if(likeColor.color == "red"){
            fetch("/ShareMusic/collections/likes/" + match.params.cno + "/" + userId, {
                method :'DELETE'
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {           
                    this.setState({
                        likeIcon:false,
                        likeColor:{
                            color:"black"
                        }
                    });
                    
                    //좋아요 수 업데이트
                    fetch("/ShareMusic/collections/cno/" + match.params.cno, {
                        method :"GET"
                    })
                    .then(res=>res.json())
                    .then(data=> {
                        this.setState({
                            collectionInfo:data
                        });
                    });
                }
            });
        }
    }

    //유튜브 modal toggle
    showVideoModalToggle() {
        this.setState({
            showVideoModal:!this.state.showVideoModal
        })
    }
    //댓글 modal toggle
    showReplyModalToggle() {
        this.setState({
            showReplyModal:!this.state.showReplyModal
        })
    }
    //댓글 입력 value 변화 시
    onChangeReply(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    //댓글 등록
    onClickPost(e) {
        const {match, userId} = this.props;
        const {replyText} = this.state;
        if(replyText == '') return;
        else {
            fetch("/ShareMusic/collections/replys/", {
                method :"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    "cno":match.params.cno,
                    "fromUserId":userId,
                    "content":replyText
                })
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {
                    //댓글 업데이트
                    fetch("/ShareMusic/collections/cno/" + match.params.cno, {
                        method :"GET"
                    })
                    .then(res=>res.json())
                    .then(data=> {
                        this.setState({
                            collectionInfo:data
                        });
                    });

                    this.setState({
                        replyText:''
                    })
                }
            });
        }
    }

    //특정 SongItem 클릭 시 유튜브 video id 해당 곡으로 변경
    onClickVideo(index) {
        const {collectionInfo} = this.state;
        this.setState({
            vId:collectionInfo.songs[index].videoId
        });
    }

    render() {
        const {match, userId} = this.props;
        const {imgURL, collectionInfo, likeColor, showVideoModal, showReplyModal, replyText, vId, likeIcon} = this.state;
        const {onClickVideo, onClickLike, showVideoModalToggle, showReplyModalToggle, onChangeReply, onClickPost} = this;
        return (
            <section>
            <div type="hidden" className="isCollection"></div>
            <div className="main">
                <div className="container-fluid" id="top">
                <div className="profile-collection">
                    <div id="image-box">
                    <img
                        src={imgURL}
                        className="collection-image"
                        alt="image"
                    />
                    </div>

                    <div className="container collection-information">
                        <div className="row">
                            <div id="collection-title" style={{fontSize:"4vh"}}>
                            {collectionInfo.collection.collectionName}
                            </div>
                        </div>
                        <div className="row">
                            <strong>{collectionInfo.collection.userId}</strong>
                        </div>
                        <div className="row"> {/* {collectionInfo.collection.songs.length} */}
                            <strong>{collectionInfo.songs.length}&nbsp;</strong><small>Tracks</small>
                        </div>
                        <div className="row">
                            <strong>{collectionInfo.likes.length}&nbsp;</strong><small>Likes</small> 
                        </div>

                        <div className="row">
                            {collectionInfo.tags.map((tag, i) => {
                                return (
                                    <span id="tag" key={i}>
                                        #{tag.tag}&nbsp;
                                    </span>
                                );
                            })}
                        </div>

                        <div className="row" style={{width:"80%", marginTop:"0.5vh"}}>
                            <div style={{display:"inline-block"}}>
                            <span> {/*#ED4956*/}
                            <i className={likeIcon ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"} style={likeColor} 
                                onClick={onClickLike}
                            ></i>
                            </span>
                            </div>

                            <div style={{display:"inline-block", marginLeft:"2vh"}}>
                            <span> 
                            <i className="far fa-comment fa-lg"
                                datatoggle="modal" datatarget="#myModal"
                                onClick={showReplyModalToggle}
                            ></i>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* <!-- container --> */}

                <div className="container-fluid" id="bottom">
                    <div id="track">
                        <ul className="list-group mb-3">
                            {collectionInfo.songs.map((song, i) => {
                                return (
                                    <SongItem
                                        showVideoModalToggle={showVideoModalToggle}
                                        musicName={song.musicName}
                                        singer={song.singer}
                                        no={i+1}
                                        onClickVideo={onClickVideo}
                                        key={i} {...this.props}
                                    ></SongItem>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {/* <!-- container --> */}
            </div>


            {/* <!-- Youtube-Modal --> */}
            <Modal isOpen={showVideoModal} toggle={showVideoModalToggle} contentClassName="content-border-radius" style={{top:"13%"}}> 
                {/* <!-- modal-header --> */}
                <div className="modal-header" style={{height:"11%", marginBottom:"0px", marginTop:"0px"}}>
                    <div style={{width:"25%"}}>
                    </div>
                    <div style={{width:"50%", textAlign:"center"}}>
                        <div className="modal-title">
                            <strong style={{fontSize:"17px"}}>
                                YouTube<i className="fab fa-youtube fa-lg" style={{color:"red"}}></i>
                            </strong>
                        </div>
                    </div>
                    <div style={{width:"25%", textAlign:"right", verticalAlign:"center"}}>
                        <i className="fas fa-times fa-lg" data-toggle="modal" data-target="#youtube-modal" 
                            onClick={showVideoModalToggle}
                        ></i>
                    </div>
                </div>
                {/* <!-- modal-header -->  */}

                {/* <!-- modal-body --> */}
                <div className="modal-body">
                    <div className="container-fluid modal-container" style={{height:"100%"}}>                
                    <iframe id="ytplayer" type="text/html" width="100%" height="87%" allow="autoplay" frameBorder="0" src={"https://www.youtube.com/embed/"+ vId +"?autoplay=1&origin=http://example.com"}>
                    </iframe>
                    </div>
                </div>
                {/* <!-- modal-body --> */}
            </Modal>
            





            {/* modal start*/}
            <Modal isOpen={showReplyModal} toggle={showReplyModalToggle}  contentClassName="content-border-radius" style={{top:"10%"}}>
                {/* <ModalBody> */}
                <div className="modal-body">
                    <div className="container-fluid modal-container">
                        {collectionInfo.replys.map((reply, i) => {
                            return (
                                <ReplyItem
                                    fromUserId={reply.fromUserId}
                                    content={reply.content}
                                    regTime={reply.regTime}
                                    key={i} {...this.props}
                                ></ReplyItem>
                            );
                        })}
                    </div>
                </div>
                {/* </ModalBody> */}
                {/* <ModalFooter> */}
                <div className="modal-footer">                  
                    <div className="container-fluid modal-container">
                        <div className="row reply-item">
                            <div className="reply-image">
                            <img className="reply-user-image" alt="image"
                                src={"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                                + userId + "/" + userId + ".png"}
                            ></img>
                            </div>
            
                            <div className="reply-login-user">
                                <strong>{userId}</strong>
                            </div>
        
                            <div id="reply-input">
                                <div style={{width:"73%"}}>
                                    <textarea className="form-control" style={{overflow:"hidden", width:"100%", height:"100%"}} name="replyText"
                                        rows="1" placeholder="reply..." value={replyText} onChange={onChangeReply}
                                    ></textarea>
                                </div>
                                <div style={{width:"27%"}}>
                                    <button type="button"  className="btn btn-secondary btn-lg" id="reply-btn" style={{marginLeft:"1vh", marginRight:"1px"}}
                                        onClick={onClickPost}
                                    >Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </ModalFooter> */}
            </Modal>
            </section>
        );
    }
}

export default CollectionContent;