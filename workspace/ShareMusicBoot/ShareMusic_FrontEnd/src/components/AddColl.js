import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header';
import AddColl1 from './AddColl1';
import AddColl2 from './AddColl2';
import AddColl3 from './AddColl3';

import defaultImg from '../images/defaultImg.PNG'

class AddColl extends Component {

    constructor(props) {
        super(props);
        this.state= {            
            submitSelectedImg: null,
            submitSelectedImgName:'default image',
            submitImgBase64:defaultImg,
            submitCollectionName:'',
            submitTag:[],
            submitSongs:[]
        }
        this.onCommunicate1 = this.onCommunicate1.bind(this);
        this.onCommunicate2 = this.onCommunicate2.bind(this);
        this.onCommunicate3 = this.onCommunicate3.bind(this);
        this.onCommunicateAdd = this.onCommunicateAdd.bind(this);
    }

    onCommunicate1(selectedImg, selectedImgName, imgBase64, collectionName) {
        console.log("1");
        this.setState({
            submitSelectedImg: selectedImg,
            submitSelectedImgName:selectedImgName,
            submitImgBase64:imgBase64,
            submitCollectionName:collectionName
        });
    }

    onCommunicate2(tag) {
        this.setState({
            submitTag:tag
        })
        console.log("tag : ");
        console.log(tag);
    }

    onCommunicate3(songsInfo) {
        this.setState({
            submitSongs:songsInfo
        })
        
    }

    onCommunicateAdd() {
        console.log("add");
        const fd = new FormData();
        // fd.append("collection.userId", this.props.userId);
        // fd.append("collection.collectionName", this.state.submitCollectionName);

        // for(let i=0; i<this.state.submitSongs.length; i++) {
        //     fd.append("song[" + i + "].musicName", this.state.submitSongs[i].musicName);
        //     fd.append("song[" + i + "].singer", this.state.submitSongs[i].singer);
        // }
        // for(let i=0; i<this.state.submitTag.length; i++) {
        //     fd.append("tags[" + i + "].tag", this.state.submitTag[i].tag);
        // }
        fd.append("collection.userId", "admin");
        console.log(fd.get("collection.userId"));
        fd.append("collection.collectionName", "888");

        fd.append("songs[0].musicName", "call you bae");
        fd.append("songs[0].singer", "jay park");

        fd.append("song[1].musicName", "killa");
        fd.append("song[1].singer", "jay park");

        fd.append("tags[0].tag", "1ttttag0");

        console.log(fd);

        fetch("/ShareMusic/collections/new", {
            method :"POST",
            body:fd
        })
      .then(res=>res.text())
      .then(data=> {
        console.log("data : " + data);
        data === "success" ? alert("SUCCESS!!") : alert("FAIL!!");
        
      });
      console.log(fd);
    }   

    render() {
        const {submitCollectionName,submitSelectedImg, submitSelectedImgName, submitImgBase64} = this.state; //addcoll1
        const {submitTag} = this.state; //addcoll2
        const {submitSongs} = this.state; //addcoll3
        const {onCommunicate1, onCommunicate2, onCommunicate3, onCommunicateAdd} = this;
        const {userId} = this.props;
        // selectedImg={selectedImg} selectedImgName={selectedImgName} imgBase64={imgBase64}
        return (
            <>
            <Header userId={userId} {...this.props}></Header>
            <div className="main">
            <scroll>
            <Router>
                <Route path="/addColl/1" render={(props) => 
                    <AddColl1 submitCollectionName={submitCollectionName} submitSelectedImg={submitSelectedImg} submitSelectedImgName={submitSelectedImgName} submitImgBase64={submitImgBase64} onCommunicate={onCommunicate1} {...props}/>} >
                </Route>
                <Route path="/addColl/2" render={(props) => <AddColl2 submitTag={submitTag} onCommunicate={onCommunicate2} {...props}/>} >
                </Route>
                <Route path="/addColl/3" render={(props) => <AddColl3 onCommunicate={onCommunicate3} onCommunicateAdd={onCommunicateAdd} {...props}/>} >
                </Route>
           </Router>
           </scroll>
           </div>
            </>
        );
    }
}

export default AddColl;


// import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Header from './Header';
// import AddColl1 from './AddColl1';
// import AddColl2 from './AddColl2';
// import AddColl3 from './AddColl3';

// import defaultImg from '../images/defaultImg.PNG'

// class AddColl extends Component {

//     constructor(props) {
//         super(props);
//         this.state= {            
//             submitSelectedImg: null,
//             submitSelectedImgName:'default image',
//             submitImgBase64:defaultImg,
//             submitCollectionName:'',
//             submitTag:[],
//             submitSongs:[]
//         }
//         this.onCommunicate1 = this.onCommunicate1.bind(this);
//         this.onCommunicate2 = this.onCommunicate2.bind(this);
//         this.onCommunicate3 = this.onCommunicate3.bind(this);
//         this.onCommunicateAdd = this.onCommunicateAdd.bind(this);
//     }

//     onCommunicate1(selectedImg, selectedImgName, imgBase64, collectionName) {
//         console.log("1");
//         this.setState({
//             submitSelectedImg: selectedImg,
//             submitSelectedImgName:selectedImgName,
//             submitImgBase64:imgBase64,
//             submitCollectionName:collectionName
//         });
//     }

//     onCommunicate2(tag) {
//         this.setState({
//             submitTag:tag
//         })
//         console.log("tag : ");
//         console.log(tag);
//     }

//     onCommunicate3(songsInfo) {
//         this.setState({
//             submitSongs:songsInfo
//         })
        
//     }

//     onCommunicateAdd() {
//         const newCollection={
//             collection:{
//                 userId:this.props.userId,
//                 collectionName:this.state.submitCollectionName
//             },
//             songs:this.state.submitSongs,
//             tags:this.state.submitTag
//         }
//         console.log(newCollection);

//         fetch('http://localhost:8081/ShareMusic/collections/', {
//         method :"POST",
//         headers:{
//           'content-type':'application/json'
//         },
//         body:JSON.stringify(newCollection)
//       })
//       .then(res=>res.text())
//       .then(data=> {
//         console.log("data : " + data);
//         data === "success" ? alert("SUCCESS!!") : alert("FAIL!!");
        
//       });
//     }

//     render() {
//         const {submitCollectionName,submitSelectedImg, submitSelectedImgName, submitImgBase64} = this.state; //addcoll1
//         const {submitTag} = this.state; //addcoll2
//         const {submitSongs} = this.state; //addcoll3
//         const {onCommunicate1, onCommunicate2, onCommunicate3, onCommunicateAdd} = this;
//         const {userId} = this.props;
//         // selectedImg={selectedImg} selectedImgName={selectedImgName} imgBase64={imgBase64}
//         return (
//             <>
//             <Header userId={userId} {...this.props}></Header>
//             <div className="main">
//             <scroll>
//             <Router>
//                 <Route path="/addColl/1" render={(props) => 
//                     <AddColl1 submitCollectionName={submitCollectionName} submitSelectedImg={submitSelectedImg} submitSelectedImgName={submitSelectedImgName} submitImgBase64={submitImgBase64} onCommunicate={onCommunicate1} {...props}/>} >
//                 </Route>
//                 <Route path="/addColl/2" render={(props) => <AddColl2 submitTag={submitTag} onCommunicate={onCommunicate2} {...props}/>} >
//                 </Route>
//                 <Route path="/addColl/3" render={(props) => <AddColl3 onCommunicate={onCommunicate3} onCommunicateAdd={onCommunicateAdd} {...props}/>} >
//                 </Route>
//            </Router>
//            </scroll>
//            </div>
//             </>
//         );
//     }
// }

// export default AddColl;

