import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../css/modal.css';
import defaultImg from '../images/defaultImg.PNG';
import ReplyItem from './ReplyItem';
import SongItem from './SongItem';

class CollectionContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            vId:'',
            replyText:'',
            showModal:false,
            likeColor:{
                color:"#DEE1E6"
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
        this.showModalToggle = this.showModalToggle.bind(this);
    }

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
                    likeColor:{
                        color:"#ED4956"
                    }
                })
            }
        });
    }

    onClickLike(e) {
        const {likeColor} = this.state;
        const {userId, match} = this.props;
        
        // 좋아요 안 눌러져 있으면
        if(likeColor.color == "#DEE1E6") {
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
                        likeColor:{
                            color:"#ED4956"
                        }
                    });

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
        else if(likeColor.color == "#ED4956"){
            fetch("/ShareMusic/collections/likes/" + match.params.cno + "/" + userId, {
                method :'DELETE'
            })
            .then(res=>res.text())
            .then(data=> {
                if(data == "success") {           
                    this.setState({
                        likeColor:{
                            color:"#DEE1E6"
                        }
                    });
                    
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

    showModalToggle() {
        this.setState({
            showModal:!this.state.showModal
        })
    }

    onChangeReply(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

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

    onClickVideo(index) {
        const {collectionInfo} = this.state;
        this.setState({
            vId:collectionInfo.songs[index].videoId
        });
    }

    render() {
        const {match, userId} = this.props;
        const {imgURL, collectionInfo, likeColor, showModal, replyText, vId} = this.state;
        const {onClickVideo, onClickLike, showModalToggle, onChangeReply, onClickPost} = this;
        return (
            <section>
            <div className="main">
                <div className="container-fluid" id="top">
                <div className="profile">
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
                            <i className="fas fa-heart fa-lg" style={likeColor} 
                                onClick={onClickLike}
                            ></i>
                            </span>
                            </div>

                            <div style={{display:"inline-block", marginLeft:"2vh"}}>
                            <span> 
                            <i className="far fa-comment fa-lg"
                                datatoggle="modal" datatarget="#myModal"
                                onClick={showModalToggle}
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

                <div id="youtube">
                    <iframe
                        id="ytplayer"
                        type="text/html"
                        width="100%"
                        height="100%"
                        src={"https://www.youtube.com/embed/"+ vId +"?autoplay=1&origin=http://example.com"}
                        frameBorder="0"
                        //   -webkit-border-radius:30px;
                        //   float:right;
                    >
                    </iframe>
                </div>
                </div>
                {/* <!-- container --> */}
            </div>
            {/* modal start*/}
            <Modal isOpen={showModal} toggle={showModalToggle}  className="modal-content">
                {/* <ModalHeader toggle={showModalToggle}>Modal title</ModalHeader> */}
                {/* <ModalBody> */}
                <div className="modal-body">
                    <div className="container-fluid modal-container">
                        {collectionInfo.replys.map((reply, i) => {
                            return (
                                <ReplyItem
                                    fromUserId={reply.fromUserId}
                                    content={reply.content}
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
                            <img className="collection-image" alt="image"
                                src={"https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/"
                                + userId + "/" + userId + ".png"}
                            ></img>
                            </div>
            
                            <div className="reply-user">
                                <strong>{userId}</strong>
                            </div>
        
                            <div id="reply-input">
                                <div style={{width:"75%"}}>
                                    <textarea className="form-control" style={{overflow:"hidden", width:"100%", height:"100%"}} name="replyText"
                                        rows="1" placeholder="reply..." value={replyText} onChange={onChangeReply}
                                    ></textarea>
                                </div>
                                <div style={{width:"25%"}}>
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