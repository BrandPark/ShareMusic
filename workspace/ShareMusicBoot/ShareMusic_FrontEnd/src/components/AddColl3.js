import React, { Component } from 'react';

// import '../css/addcoll3.css';
import defaultImg from '../images/defaultImg.PNG';

class AddColl3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImg: null,
            imgBase64:defaultImg,
            returnData:[],
            songsData:[],
            a:null,
        }
        this.onChange = this.onChange.bind(this);
        this.onClickOCR = this.onClickOCR.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

    onChange(e) {
        console.log("onChange 3 !");
        let reader = new FileReader();

        reader.onloadend = () => {
          // 읽기가 완료되면 아래코드가 실행
          const base64 = reader.result;
          if (base64) {
            // 파일 base64 상태 업데이트
            this.setState({
                imgBase64:base64.toString()
            });
          }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]); //파일을 읽어 버퍼에 저장
            //파일 상태 업데이트
            this.setState({
                selectedImg:e.target.files[0]
            }); 
        }
    }
    
    onClickOCR() {
        if(this.state.imgBase64 === defaultImg) {
            alert("upload an image");
            return;
        }
        console.log("OCR!!");

        const formData = new FormData();
        formData.append('file', this.state.selectedImg);
        console.log(this.state.selectedImg.name);
        fetch("/ShareMusic/ocr/", {
            method :"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(data=> { 
            this.setState({
                returnData: data
            });
            console.log(this.state.returnData);
            const datasList = data.map((d) => (
                <div key={d.musicName} id={d.musicName}>
                    <div className="inputResult">
                        <input type="text" className="form-control" value={d.musicName} ></input>
                    </div>
                    <div className="inputResult">
                        <input type="text" className="form-control" value={d.singer}></input>
                    </div>
                </div>
            ));
            this.setState({
                a:datasList
            })
            this.props.onCommunicate(this.state.returnData);
        });
    }

    onClickAdd() {
        this.props.onCommunicate(this.state.returnData);
        this.props.onCommunicateAdd();
    }

    render() {
        const { onChange, onClickOCR, onClickAdd } = this;
        const { selectedImg, imgBase64, returnData, a } = this.state;
        const { onCommunicate, onCommunicateAdd } = this.props;
        return (
            <>
            <h1 className="titlename">Add Collection</h1>
            <div className="info">Add Music List</div>
            <br/>
            <br/>
            <div className="container">

                {/* 업로드한 이미지 미리보기 */}
                <div className="leftView col-md-6" style={{position:"relative"}}>
                    <div id='View_area3'> 
                        <img id="preimg3" src={imgBase64}/>
                    </div>

                    <div className="filebox bs3-primary preview-image">
                        &nbsp;&nbsp;&nbsp;
                        <label htmlFor="input_file">Upload</label> 
                        <input type="file" onChange={onChange}
                                id="input_file" className="upload-hidden"> 
                        </input>
                        <div className="button-div">
                            <button onClick={onClickOCR} type="button" className="btn btn-danger">OCR</button>
                        </div>
                        <div className="button-div">
                            <button onClick={onClickAdd} type="button" className="btn btn-danger">Add Collection</button>
                        </div>
                    </div>
                </div>
                {/* OCR 결과 출력(수정도 가능하도록 input text로) */}
                <div className="col-md-6" style={{position:"relative"}}>
                   {a}
                </div>
            </div>
            </>
        );
    }
}

export default AddColl3;