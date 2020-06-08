import React, { Component } from 'react';

class ProfileContent extends Component {
    render() {
        return (
            <>
            <div className="profile">
                <div className="col-md-5">
                    <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image.png"
                    className="profile-image" alt="image" />
                </div>

                <div className="col-md-7">
                    <div className="collector-name">
                    <div>
                        <strong style={{fontSize:"40px"}}>hyongsoo</strong>
                    </div> 
                    {/* 버튼크기조절 */}
                    <button type="button" className="btn btn-primary btn-sm"
                        style={{marginLeft:"50px", marginTop:"18px", height:"30px", verticalAlign:"center"}}>팔로우</button>
                    </div>

                    <div className="user-info">
                        <div>
                            <strong> 컬렉션 </strong>
                            <div>55</div>
                        </div>

                        <div>
                            <strong> 팔로워 </strong>
                            <div data-toggle="modal" data-target="#follower-modal">50</div>
                        </div>

                        <div>
                            <strong> 팔로우 </strong>
                            <div data-toggle="modal" data-target="#following-modal">78</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="horizontal-scroll-block">
                <div className="horizontal-scroll">

                <div className="img-wrapper">
                    <img style={{display:"inline-block"}} className="collection-image"
                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                    alt="image"></img>
                    {/* <!-- 정보 시작 --> */}
                    <div className="collection-info">
                    <div className="collection-name">
                        Collection Name
                    </div>
                    <div className="collection-info-fade">
                        <div><strong>32&nbsp;</strong><small>Tracks</small></div>
                        <div><strong>20&nbsp;</strong><small>Likes</small></div>
                        <div><span id="tag">#sleepy #hello #lonely</span></div>
                    </div>
                    </div>
                </div>


                <div className="img-wrapper">
                    <img className="collection-image"
                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                    alt="image"></img>
                    {/* <!-- 정보 시작 --> */}
                    <div className="collection-info">
                    <div className="collection-name">
                        Collection Name
                    </div>
                    <div className="collection-info-fade">
                        <div><strong>32&nbsp;</strong><small>Tracks</small></div>
                        <div><strong>20&nbsp;</strong><small>Likes</small></div>
                        <div><span id="tag">#sleepy #hello #lonely</span></div>
                    </div>
                    </div>
                </div>

                <div className="img-wrapper">
                    <img className="collection-image"
                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                    alt="image"></img>
                    <div className="collection-info">
                    <div className="collection-name">
                        Collection Name
                    </div>
                    <div className="collection-info-fade">
                        <div><strong>32&nbsp;</strong><small>Tracks</small></div>
                        <div><strong>20&nbsp;</strong><small>Likes</small></div>
                        <div><span id="tag">#sleepy #hello #lonely</span></div>
                    </div>
                    </div>
                </div>


                <div className="img-wrapper">
                    <img className="collection-image"
                    src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image5.png"
                    alt="image"></img>
                    <div className="collection-info">
                    <div className="collection-name">
                        Collection Name
                    </div>
                    <div className="collection-info-fade">
                        <div><strong>32&nbsp;</strong><small>Tracks</small></div>
                        <div><strong>20&nbsp;</strong><small>Likes</small></div>
                        <div><span id="tag">#sleepy #hello #lonely</span></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

               {/* <!-- Follower-Modal --> */}
            <div class="modal fade" id="follower-modal" role="dialog">
                <div class="modal-dialog">
                {/* <!-- Modal content--> */}
                <div class="modal-content" style="border-radius: 30px;">
                    <div class="modal-header" style="height: 11%; margin-bottom: 0px; margin-top: 0px;">
                        <div style="width: 25%;">
                        
                        </div>
                        <div style="width:50%; text-align:center;">
                        <div class="modal-title">
                            <strong style="font-size: 17px;">팔로워</strong>
                        </div>
                        </div>
                        <div style="width: 25%; text-align: right; vertical-align: center;">
                        <i class="fas fa-times fa-lg" data-toggle="modal" data-target="#follower-modal" ></i>
                        </div>
                        
                    </div>
                    {/* <!-- modal-header -->  */}

                    <div class="modal-body">
                        <div class="container-fluid modal-container">
                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>parkmingon</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>youngho</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>hyongsoo</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image5.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>yeeun</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image6.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>aliceKim</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image7.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>BobMally</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>CharileChoi</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>SamKim</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>TrudyPark</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>sallyMins</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image5.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>TimLee</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>
                    
                        {/* <!-- reply-item --> */}
                    </div>
                    </div>

                    {/* <!-- modal-body --> */}
                </div>
                </div>
            </div>

               {/* <!-- Following-Modal --> */}
            <div class="modal fade" id="following-modal" role="dialog">
                <div class="modal-dialog">
                {/* <!-- Modal content--> */}
                <div class="modal-content" style="border-radius: 30px;">
                    <div class="modal-header" style="height: 11%; margin-bottom: 0px; margin-top: 0px;">
                        <div style="width: 25%;">
                        
                        </div>
                        <div style="width:50%; text-align:center;">
                        <div class="modal-title">
                            <strong style="font-size: 17px;">팔로잉</strong>
                        </div>
                        </div>
                        <div style="width: 25%; text-align: right; vertical-align: center;">
                        <i class="fas fa-times fa-lg" data-toggle="modal" data-target="#following-modal" ></i>
                        </div>
                        
                    </div>
                    {/* <!-- modal-header -->  */}

                    <div class="modal-body">
                        <div class="container-fluid modal-container">
                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>parkmingon</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>youngho</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>hyongsoo</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image5.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>yeeun</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image6.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>aliceKim</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image7.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>BobMally</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>CharileChoi</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>SamKim</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image3.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>TrudyPark</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image4.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>sallyMins</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>

                        <div class="row reply-item">
                            <div class="user-image-area">
                            <img src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image5.png"
                                class="user-image" alt="image" />
                            </div>

                            <div class="user-id-area">
                            <strong>TimLee</strong>
                            </div>

                            <div class="follow-button-area">
                            <button type="button" class="btn btn-primary btn-sm">팔로우</button>
                            </div>  
                        </div>
                    
                        {/* <!-- reply-item --> */}
                    </div>
                </div>

                    {/* <!-- modal-body --> */}
                </div>
            </div>
            </div>
            </>
        );
    }
}

export default ProfileContent;