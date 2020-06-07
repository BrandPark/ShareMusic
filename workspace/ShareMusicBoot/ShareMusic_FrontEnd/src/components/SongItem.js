import React, { Component } from 'react';

class SongItem extends Component {
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {onClickVideo, no} = this.props;
        onClickVideo(no - 1);
    }

    render() {
        const {no, musicName, singer} = this.props;
        const {onClick} = this;

        return (
        <li className="list-group-item d-flex" onClick={onClick}>
            <div className="col-md-2" style={{textAlign:"left"}}>
                <h6 className="my-0"><b>{no}</b></h6>
            </div>

            <div className="col-md-5" style={{textAlign:"left"}}>
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