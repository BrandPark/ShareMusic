import React, { Component } from 'react';
// import '../css/addcoll2.css'
//import { Link } from 'react-router-dom';

class AddColl2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            tags:[]
        }
        this.onPre = this.onPre.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onClickTag = this.onClickTag.bind(this);
    }
    onPre(e) {
        this.props.onCommunicate(this.state.tags);
        this.props.history.push("/addColl/1");
    }
    onNext(e) {
        this.props.onCommunicate(this.state.tags);
        this.props.history.push("/addColl/3");
    }
    onClickTag(e) {
        this.setState({
            tags:[
                {tag:e.target.id}
            ]
        })
        this.props.onCommunicate(this.state.tags);
    }
    render() {
        const {onCommunicate} = this.props;
        const {onPre, onNext, onClickTag} = this;
        return (
            <>
            <h1 className="titlename">Add Collection</h1>
            <div className="info"> Check your colleciton's mood </div>
            <br/>
            <br/>
            <div className="container">
                <div className="leftView col-sm-1">
                    <button onClick={onPre} className="btn btn-link" style={{height:"17em"}}>
                        <i className="fas fa-caret-left" style={{fontSize:"3em"}}></i>
                    </button>
                </div>
                <div className="tagView col-sm-10">
                    <div className="wrapper">
                        <div className="tagImg">
                            <i className="fas fa-sad-tear" id="sad" onClick={onClickTag}></i>
                        </div>
                        <div className="tagImg"> 
                            <i className="fas fa-music" id="club" onClick={onClickTag}></i>
                        </div>
                        <div className="tagImg"> 
                            <i className="fas fa-car" id="drive" onClick={onClickTag}></i>
                        </div>
                    </div>
                    
                    <div className="wrapper">
                        <div className="tagImg"> 
                            <i className="far fa-laugh-wink" id="exciting" onClick={onClickTag}></i>
                        </div>
                        <div className="tagImg"> 
                            <i className="fas fa-book-reader" id="study" onClick={onClickTag}></i>
                        </div>
                        <div className="tagImg"> 
                            <i className="fas fa-dumbbell" id="exercise" onClick={onClickTag}></i>
                        </div>
                    </div>
                </div>
                <div className="rightView col-sm-1">
                    <button onClick={onNext} className="btn btn-link" style={{height:"17em"}}>
                        <i className="fas fa-caret-right" style={{fontSize:"3em"}}></i>
                    </button>
                </div>
            </div>
            </>
        );
    }
}

export default AddColl2;