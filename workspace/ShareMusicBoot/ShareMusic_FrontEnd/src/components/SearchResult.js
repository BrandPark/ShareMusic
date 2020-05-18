import React, { Component } from 'react';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:false,
            songs:[]
        }
        this.showSongs =this.showSongs.bind(this);
        console.log("constructor ! ");
    }

    // componentDidMount() {
    //     console.log("componentDidMount !");
    //     console.log("cno : "+ this.props.cno);
    //     fetch('http://localhost:8080/ShareMusic/collection/song/all/' + this.props.cno + '.json')
    //         .then(res => res.json())
    //         .then(data => this.setState({
    //             songs: data
    //         }));
    // }

    showSongs(e) {
        if(this.state.flag === false) {

            console.log("showSongs !");
            fetch('http://localhost:8080/ShareMusic/collection/song/all/' + this.props.cno + '.json')
                .then(res => res.json())
                .then(data => this.setState({
                    songs: data
                }));

            this.setState({
                flag:true
            });
        }
        else {
            this.setState({
                flag:false
            });
        }
    }

    render() {
        console.log("render ! ");
        const {userId, collectionName, cno} = this.props;
        const {showSongs} = this;
        const {flag,songs} = this.state;

        if(flag === true) {            
            const songList = songs.map((song) => (
                <div key={song.sno} id={song.sno}>
                    <h4>노래 : {song.musicName}</h4>
                    <h4>가수 : {song.singer}</h4>
                </div>
            ));
            return (
                <div>
                    <h4>{userId}</h4>
                    <h4>{collectionName}</h4>
                    <button className="btn btn-primary" type="button" onClick={showSongs}>곡 접기</button>
                    <h4>{songList}</h4>
                </div>
            );
        }
        else {    
            return (
                <div>
                    <h4>{userId}</h4>
                    <h4>{collectionName}</h4>
                    <button className="btn btn-primary" type="button" onClick={showSongs}>곡 보기</button>
                </div>
            );
        }
    }
}

export default SearchResult;