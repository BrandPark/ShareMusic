import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            likeColor:{
                color:"#ff0000",
            },
            likeIcon:true
        }
        this.onTest = this.onTest.bind(this);
    }
    onTest() {
        this.setState({
            likeIcon:!this.state.likeIcon,
            likeColor: {
                color:"black"
            }
        })
    }
    render() {
        const {likeColor, likeIcon} = this.state;
        const {onTest} = this;
        return (
            <i className={likeIcon ? "fas fa-heart" : "far fa-heart"} style={likeColor} 
                onClick={onTest}
            ></i>
        );
    }
}

export default Test;