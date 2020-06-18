import React, { Component } from 'react';
import jQuery from 'jquery';

class SongItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPlay:false
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        const {no} = this.props;

        //1번만 함수 실행을 위해 no=1인 경우에만 실행
        if(no == 1) {
            var currentIndex = 0;

            jQuery("#track ul li").click( function() {
                // 현재 재생 중인 곡의 색 복원
                var currentList = jQuery("#track ul li").get(currentIndex);
                jQuery(currentList).css("background-color","#182645");  //373D51

                // marking표시 제거
                jQuery("#mark").remove();
    
                // 클릭된 곡 색 변경
                jQuery(this).css("background-color", "#2b2f3b");
    
                // 클릭된 곡 marking 표시
                var clickedIndex = jQuery(this).index();
                var target = jQuery(".singer").get(clickedIndex);
                jQuery(target).prepend(jQuery("<span id='mark' style='color: mediumspringgreen; margin-right: 10px; font-size:13px'>▶</span>"));
    
                // 현재 곡 인덱스 최신화
                currentIndex = clickedIndex;
            });
        }

        
    }

    onClick() {
        const {onClickVideo, showVideoModalToggle, no} = this.props;
        
        this.setState({
            isPlay:!this.state.isPlay
        })
        onClickVideo(no - 1);
        showVideoModalToggle();
    }

    render() {
        const {no, musicName, singer} = this.props;
        const {onClick} = this;
        const {isPlay} = this.state;

        return (
        <li className="list-group-item d-flex" onClick={onClick}>
            <div className="col-md-2" style={{textAlign:"left"}}>
                <h6 className="my-0"><b>{no}</b></h6>
            </div>

            <div className="col-md-5 singer" style={{textAlign:"left"}}>
                <h6 className="my-0"><b>{singer}</b></h6>
            </div>

            <div className="col-md-5" style={{textAlign:"left"}}>
                <h6 className="my-0"><b>{musicName}</b></h6>
            </div>
        </li>
        );
    }
}

export default SongItem;