import React, { Component } from 'react';

class AddSongInfo extends Component {
    render() {
        return (
        <tr>
            <td>{this.props.no}</td>
            <td>{this.props.musicName}</td>
            <td>{this.props.singer}</td>
        </tr>
        );
    }
}

export default AddSongInfo;