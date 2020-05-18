import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const [searchBy, setSearchBy] = useState("tag");
    const [text, setText] = useState("");

    const onSearchByChange = (e) => {
        setSearchBy(e.target.value);
        console.log(e.target.value);
    }
    const onTextChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const onSearchClick = () => {
        console.log("search button click !");
        props.onSubmit(searchBy, text);
    }

    return (
        <>
        <div className="row p-3 header">
                <div id="blank"></div>
                <div className="p-1" id="firstHeader">
                    <select className="form-control" onChange={onSearchByChange} defaultValue="tag">
                        <option value="tag">태그</option>
                        <option value="userid">아이디</option>
                        <option value="collectionname">컬렉션</option>
                    </select>
                </div>
                <div className="p-1" id="secondHeader">
                    <input type="text"
                        className="form-control" 
                        placeholder="검색어를 입력하세요"
                        onChange={onTextChange}
                        value={text}
                    />
                </div>
                <div className="p-1" id="thirdHeader">
                <Link to="/searchResultPage"><button type="button" className="btn btn-primary" id="btnHeader" onClick={onSearchClick}>검색</button></Link>
                </div>
                <div id="blank"></div>
        </div>
        </>
    );
};

export default Header;