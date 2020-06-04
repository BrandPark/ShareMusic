import React, { Component } from 'react';
import $ from 'jquery';
import defaultImg from '../images/defaultImg.PNG'
import AddSongInfo from './AddSongInfo';

class AddCollectionContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            cImg64:defaultImg,
            cFileName:'file name',
            collectionName:'',
            tagName:'',
            addMusic:'',
            addSinger:'',
            songs:[],
            tags:[],
            ocrImg64:defaultImg,
            ocrFile:null,
        }
        this.onClickOCR = this.onClickOCR.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickTag = this.onClickTag.bind(this);
        this.onChange = this.onChange.bind(this);
        this.previewImage1 = this.previewImage1.bind(this);
        this.previewImage2 = this.previewImage2.bind(this);
    };
    
    componentDidMount() {
        var moveArea = $(document).find('.move-area');
        var leftBtn = $(document).find('.left-btn');
        var rightBtn = $(document).find('.right-btn');
        
        //왼쪽 화살표를 눌렀을 때
        $(document).on('click touch', '.left-btn',function(e){
            e.preventDefault();
            rightBtn.removeClass('right-btn-hide')
            leftBtn.addClass('left-btn-hide');
            moveArea.removeClass('move-right'); 
        });
        //오른쪽 화살표를 눌렀을 때
        $(document).on('click touch', '.right-btn',function(e){
            e.preventDefault();
            leftBtn.removeClass('left-btn-hide');
            rightBtn.addClass('right-btn-hide');
            moveArea.addClass('move-right');
        });
    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    previewImage1(e) {
        let reader = new FileReader();

        reader.onloadend = () => {
          // 읽기가 완료되면 아래코드가 실행
          const base64 = reader.result;
          if (base64) {
            // 파일 base64 상태 업데이트
            this.setState({
                cImg64:base64
            })
          }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]); //파일을 읽어 버퍼에 저장
            this.setState({
                cFileName:e.target.files[0].name
            })
            //파일 상태 업데이트
            // this.props.onCommunicate(
            //     e.target.files[0], e.target.files[0].name, this.props.submitImgBase64, this.props.submitCollectionName
            // );
        }
    }

    previewImage2(e) {
        let reader = new FileReader();

        reader.onloadend = () => {
          // 읽기가 완료되면 아래코드가 실행
          const base64 = reader.result;
          if (base64) {
            // 파일 base64 상태 업데이트
            this.setState({
                ocrImg64:base64
            })
          }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]); //파일을 읽어 버퍼에 저장
            this.setState({
                ocrFile:e.target.files[0]
            })
            //파일 상태 업데이트
            // this.props.onCommunicate(
            //     e.target.files[0], e.target.files[0].name, this.props.submitImgBase64, this.props.submitCollectionName
            // );
        }
    }

    onClickTag(e) {
        console.log(this.state.tags);
        const str = this.state.tagName.substring(1);
        this.setState({
            tags:str.split('#')
        })
    }

    onClickAdd(e) {
        const {songs, addMusic, addSinger} = this.state;

        if(addMusic === '' || addSinger === '') {
            console.log("musicName / singer is empty");
            return;
        }

        this.setState({
            songs:songs.concat({
                musicName:addMusic,
                singer:addSinger
            })
        });

        this.setState({
            addMusic:'',
            addSinger:''
        });
    }

    onClickDelete(e) {
        const { songs } = this.state;
        this.setState({
          songs:songs.filter(song => song.musicName !== "aaa")
        });
    }

    onClickOCR(e) {

    }

    render() {
        const {cImg64, cFileName, collectionName, tagName, addMusic, addSinger, songs, ocrImg64} = this.state;
        const {previewImage1, previewImage2, onChange, onClickTag, onClickAdd, onClickOCR} = this;
        return (
            <section>
            <div className="main">
                <div className="small-title">
                    Add Collection
                </div>
                <div className="move-area">
                    {/* <!-- 컬렉션 이미지와 정보 입력 --> */}
                    <div className="profile-area">
                        <img src={cImg64} id='view'></img>
                        <div id="forms">
                            <div className="filebox bs3-primary preview-image"> 
                                <input id="filename-up" className="upload-name" disabled="disabled" value={cFileName}></input>
                                <label htmlFor="input_file"><i className="far fa-images"></i></label>
                                <input type="file" id="input_file" className="upload-hidden"
                                    accept="image/jpeg,image/png" onChange={previewImage1} 
                                ></input>
                                <input type="text" className="form-control" placeholder="Collceion Name" name="collectionName"
                                    value={collectionName} onChange={onChange}
                                ></input>
                                <input type="text" className="form-control" placeholder="#Tag" name="tagName"
                                    value={tagName} onChange={onChange}
                                ></input>
                            </div>
                        </div>
                    </div>
                    {/* <!-- OCR을 이용한 노래제목 입력 --> */}
                    <div className="ocr-area">
                        <div className="table-wrapper">
                            <div className="table-box">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{width:"3em"}}></th>
                                            <th>곡명</th>
                                            <th>가수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {songs.map((song, i) => {
                                            return (
                                                <AddSongInfo
                                                    musicName={song.musicName}
                                                    singer={song.singer}
                                                    no={i+1}
                                                    key={i+1}
                                                ></AddSongInfo>
                                            );
                                        })}
                                        {/* <tr>
                                            <td>1</td>
                                            <td>aaaaaa</td>
                                            <td>bbbbbbb</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td></td>
                                            <td></td>
                                        </tr> */}
        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            {/* <!--직접 입력--> */}
                            <div className="input-direct">
                                {/* <!--input text: 곡/가수 명--> */}
                                <div style={{display:"inline-block"}}>
                                    <div className="input-in">
                                        <span>곡명</span>
                                        <input type="text" className="form-control " placeholder="곡 이름"
                                            value={addMusic} onChange={onChange} name="addMusic"
                                        ></input>
                                    </div>
                                    <div className="input-in">
                                        <span>가수</span>
                                        <input type="text" className="form-control" placeholder="가수 이름"
                                            value={addSinger} onChange={onChange} name="addSinger"
                                        ></input>
                                    </div>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    {/* <!--button: 컬렉션 추가 함수 등록--> */}
                                    <button type="button" className="btn btn-info"
                                        onClick={onClickAdd}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
        
                            {/* <!--OCR--> */}
                            <div className="image-up">
                                <img src={ocrImg64} id="ocr-view"></img>
                                    <div className="filebox bs3-primary preview-image button-plus">
                                        <label htmlFor="input_file2" className="image-btn">
                                            <i className="far fa-images"></i>
                                        </label>
        
                                        {/* <!--미리보기 함수(priviewImage) 등록--> */}
                                        <input type="file" id="input_file2"
                                            accept="image/jpeg,image/png" onChange={previewImage2}
                                            className="upload-hidden">
                                        </input>
                                    </div>
                                
        
        
                                <div className="add-btn">
                                    {/* <!--button: OCR 버튼--> */}
                                    <button type="button" className="btn btn-info"
                                        onClick={onClickOCR}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        
                {/* <!-- 화살표 버튼 --> */}
                <div className="blank-block-left"></div>
                <div className="left-btn left-btn-hide">
                    <span type="submit" className="btn btn-link">
                        <i className="fas fa-caret-left"></i>
                    </span>
                </div>
                <div className="right-btn">
                    <span type="submit" className="btn btn-link"
                        onClick={onClickTag}
                    >
                        <i className="fas fa-caret-right"></i>
                    </span>
                </div>
                <div className="blank-block-right"></div>
            </div>
        </section>
        );
    }
}

export default AddCollectionContent;