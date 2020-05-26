import React from 'react';
import '../css/addcoll1.css'
//import {Link } from 'react-router-dom'


class AddColl1 extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onChangeCName = this.onChangeCName.bind(this);
        this.onNext = this.onNext.bind(this);
    };
    
    onChange(e) {
        let reader = new FileReader();

        reader.onloadend = () => {
          // 읽기가 완료되면 아래코드가 실행
          const base64 = reader.result;
          if (base64) {
            // 파일 base64 상태 업데이트
            this.props.onCommunicate(
                this.props.submitSelectedImg, this.props.submitSelectedImgName, base64, this.props.submitCollectionName
            );
          }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]); //파일을 읽어 버퍼에 저장
            //파일 상태 업데이트
            this.props.onCommunicate(
                e.target.files[0], e.target.files[0].name, this.props.submitImgBase64, this.props.submitCollectionName
            );
        }
    }
    
    onChangeCName(e) {
        this.props.onCommunicate(this.props.submitSelectedImg, this.props.submitSelectedImgName , this.props.submitImgBase64, e.target.value);
    }

    onNext() {
        this.props.history.push("/addColl/2");
    }

    render() {
        const { submitCollectionName, submitSelectedImg, submitSelectedImgName, submitImgBase64 } = this.props;
        const { onCommunicate } = this.props;
        const { onChange, onChangeCName, onNext } = this;
        return (
            <>
            {/* <Header userId={userId}></Header> */}
            <h1 className="titlename">Add Collection</h1>
            <div className="info">Input your Image path and Collection Name </div>

            <br/>
            <br/>

            <div className="container row">

                <div className="leftView col-sm-1"></div>
                {/* 이미지 미리보기 */}
                <div className="input-body col-sm-10">
                    <div id='View_area1' style={{display:"inline-block"}}> 
                        <img id="preimg1" src={submitImgBase64} />
                    </div>
                    
                    {/* 이미지 파일 업로드 / 컬렉션 네이밍 */}
                    <div className="filebox bs3-primary preview-image" style={{display:"inline-block"}}>
                        <input id="filename-up" className="upload-name" value={submitSelectedImgName} disabled="disabled" style={{width:"15em"}}></input>
                        &nbsp;<label htmlFor="input_file">Upload</label> 
                        <input type="file" onChange={onChange} id="input_file" className="upload-hidden"></input>
                    
                        {/* 컬렉션 이름 입력 */}
                        <input type="text" onChange={onChangeCName} className="form-control" placeholder="Collceion Name" name="text1" value={submitCollectionName}></input>
                    </div>
                </div>
                <div className="rightView col-sm-1">
                    <button onClick={onNext} className="btn btn-link" style={{height:"17em"}}>
                        {/* <Link to="/addColl/2"> */}
                        <i className="fas fa-caret-right" style={{fontSize:"3em"}}></i>
                        {/* </Link> */}
                    </button>
                </div>
            </div>
            </>
        );
    };
};

export default AddColl1;








// class AddColl1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedImg: null,
//             selectedImgName:'default image',
//             imgBase64:defaultImg,
//             collectionName:''
//         }
//         this.onChange = this.onChange.bind(this);
//         this.onChangeCName = this.onChangeCName.bind(this);
//         this.onNext = this.onNext.bind(this);
//     };

//     onChange(e) {
//         let reader = new FileReader();

//         reader.onloadend = () => {
//           // 읽기가 완료되면 아래코드가 실행
//           const base64 = reader.result;
//           if (base64) {
//             // 파일 base64 상태 업데이트
//             this.setState({
//                 imgBase64:base64.toString()
//             });
//           }
//         }
//         if (e.target.files[0]) {
//             reader.readAsDataURL(e.target.files[0]); //파일을 읽어 버퍼에 저장
//             //파일 상태 업데이트
//             this.setState({
//                 selectedImg:e.target.files[0],
//                 selectedImgName:e.target.files[0].name
//             }); 
//         }
//     }
//     onChangeCName(e) {
//         this.setState({
//             collectionName:e.target.value
//         });
//     }

//     onNext() {
//         this.props.onCommunicate(this.state.selectedImg, this.state.selectedImgName, this.state.imgBase64);
//         this.props.history.push("/addColl/2");
//     }

//     render() {
//         const {selectedImg, selectedImgName, imgBase64, collectionName} = this.state;
//         // const {userId, submitSelectedImg, submitSelectedImgName, submitImgBase64} = this.props;
//         const { onCommunicate } = this.props;
//         const {onChange, onChangeCName, onNext} = this;
//         return (
//             <>
//             {/* <Header userId={userId}></Header> */}
//             <h1 className="titlename">Add Collection</h1>
//             <div className="info">Input your Image path and Collection Name </div>

//             <br/>
//             <br/>

//             <div className="container row">

//                 <div className="leftView col-sm-1"></div>
//                 {/* 이미지 미리보기 */}
//                 <div className="input-body col-sm-10">
//                     <div id='View_area' style={{display:"inline-block"}}> 
//                         <img id="preimg" src={imgBase64} />
//                     </div>
                    
//                     {/* 이미지 파일 업로드 / 컬렉션 네이밍 */}
//                     <div className="filebox bs3-primary preview-image" style={{display:"inline-block"}}>
//                         <input id="filename-up" className="upload-name" value={selectedImgName} disabled="disabled" style={{width:"15em"}}></input>
//                         &nbsp;<label htmlFor="input_file">Upload</label> 
//                         <input type="file" onChange={onChange} id="input_file" className="upload-hidden"></input>
                    
//                         {/* 컬렉션 이름 입력 */}
//                         <input type="text" onChange={onChangeCName} className="form-control" placeholder="Collceion Name" name="text1" value={collectionName}></input>
//                     </div>
//                 </div>
//                 <div className="rightView col-sm-1">
//                     <button onClick={onNext} className="btn btn-link" style={{height:"17em"}}>
//                         {/* <Link to="/addColl/2"> */}
//                         <i className="fas fa-caret-right" style={{fontSize:"3em"}}></i>
//                         {/* </Link> */}
//                     </button>
//                 </div>
//             </div>
//             </>
//         );
//     };
// };

// export default AddColl1;





// import React from 'react';
// import '../css/addcoll1.css'
// import defaultImg from '../images/defaultImg.PNG'
// import Header from './Header';
// import {Link } from 'react-router-dom'


// class AddColl1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedImg: null,
//             selectedImgName:'default image',
//             imgBase64:defaultImg
//         }
//         this.onChange = this.onChange.bind(this);
//     };

//     onChange(e) {
//         let reader = new FileReader();

//         reader.onloadend = () => {
//           // 읽기가 완료되면 아래코드가 실행
//           const base64 = reader.result;
//           if (base64) {
//             // 파일 base64 상태 업데이트
//             this.setState({
//                 imgBase64:base64.toString()
//             });
//           }
//         }
//         if (e.target.files[0]) {
//             reader.readAsDataURL(e.target.files[0]); //파일을 읽어 버퍼에 저장
//             //파일 상태 업데이트
//             this.setState({
//                 selectedImg:e.target.files[0],
//                 selectedImgName:e.target.files[0].name
//             }); 
//         }
//     }

//     render() {
//         const {selectedImg, selectedImgName, imgBase64} = this.state;
//         const {onChange, onTest} = this;
//         const {userId} = this.props;
//         return (
//             <>
//             {/* <Header userId={userId}></Header> */}
//             <h1 className="titlename">Add Collection</h1>
//             <div className="info">Input your Image path and Collection Name </div>

//             <br/>
//             <br/>

//             <div className="container row">

//                 <div className="leftView col-sm-1"></div>
//                 {/* 이미지 미리보기 */}
//                 <div className="input-body col-sm-10">
//                     <div id='View_area' style={{display:"inline-block"}}> 
//                         <img id="preimg" src={imgBase64} />
//                     </div>
                    
//                     {/* 이미지 파일 업로드 / 컬렉션 네이밍 */}
//                     <div className="filebox bs3-primary preview-image" style={{display:"inline-block"}}>
//                         <input id="filename-up" className="upload-name" value={selectedImgName} disabled="disabled" style={{width:"15em"}}></input>
//                         &nbsp;<label htmlFor="input_file">Upload</label> 
//                         {/* onChange바꿔야댐  "previewImage(this,'View_area')"  */}
//                         <input type="file" onChange={onChange} id="input_file" className="upload-hidden"></input>
                    
//                         {/* 컬렉션 이름 저장해야... */}
//                         <input type="text" className="form-control" placeholder="Collceion Name" name="text1" ></input>
//                     </div>
//                 </div>
//                 <div className="rightView col-sm-1">
//                     <button type="submit" className="btn btn-link" style={{height:"17em"}}>
//                         <Link to="/addColl/2">
//                         <i className="fas fa-caret-right" style={{fontSize:"3em"}}></i>
//                         </Link>
//                     </button>
//                 </div>
//             </div>
//             </>
//         );
//     };
// };

// export default AddColl1;