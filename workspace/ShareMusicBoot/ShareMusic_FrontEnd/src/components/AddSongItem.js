import React, { Component } from 'react';

class AddSongItem extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {onClickDelete, no} = this.props;
        onClickDelete(no - 1);
    }

    render() {
        const {onClick} = this;
        return (
        <tr>
            <td>{this.props.no}</td>
            <td>{this.props.musicName}</td>
            <td>{this.props.singer}</td>
            <td>
                <i className="fas fa-trash" onClick={onClick}></i>
            </td>
        </tr>
        );
    }
}

export default AddSongItem;