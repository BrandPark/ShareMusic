import '../css/ShareMusic.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import MyFooter from './MyFooter';
import React, { useState } from 'react';
import CompA from './CompA';
import Header from './pastHeader';
import SearchResultPage from './SearchResultPage';


const MainPage = () => {
    const [searchBy, setSearchBy] = useState();
    const [text, setText] = useState();
    const [datas, setDatas] = useState([]);

    //검색
    const onSearchSubmit = (type, content) => {
        console.log("rest api search/{type}/{content}.json call !");
        fetch('http://localhost:8080/ShareMusic/search/' + type + '/' + content + '.json')
        .then(res => res.json())
        .then(data => setDatas(data));
        setSearchBy(type);
        setText(content);
    }
    
    return (
        <Router>
            <div>
            <Header onSubmit={onSearchSubmit}></Header>
            <div>
                <Route exact path='/searchResultPage' render={() => <SearchResultPage searchBy={searchBy} text={text} datas={datas}/>} />
                <Route exact path='/'component={CompA} />
            </div>
            <MyFooter></MyFooter>
            </div>
        </Router>
    );
};

export default MainPage;