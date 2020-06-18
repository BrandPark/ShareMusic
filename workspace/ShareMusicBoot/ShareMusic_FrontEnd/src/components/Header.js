import React, { Component } from 'react';
import {BrowserRouter as Link } from 'react-router-dom'
import jQuery from 'jquery';
import '../css/wave.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy:'컬렉션',
            content:'',
            searchType:false
        }
        this.onClickMenu = this.onClickMenu.bind(this);
        this.searchToggle = this.searchToggle.bind(this);
        this.searchToggleX = this.searchToggleX.bind(this);
        this.search= this.search.bind(this);
        this.onPressContent = this.onPressContent.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onClickSearchBy = this.onClickSearchBy.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClickLogo = this.onClickLogo.bind(this);
        this.onSearchType = this.onSearchType.bind(this);
    };

    //검색 버튼 클릭
    search() {
        const {history} = this.props;
        const {searchBy, content} = this.state;
        
        if(searchBy == "태그")
            history.push("/search/tag/" + content);
        else if(searchBy == "컬렉션")
            history.push("/search/collectionname/" + content);
    }
    //검색 창에서 Enter 입력
    onPressContent(e) {
        const {search} = this;
        if(e.key === 'Enter') {
            search();
        }
    }

    // 검색 input value 변화 시
    onChangeContent(e) {
        this.setState({
            content:e.target.value
        });
    }

    // 검색 타입 설정
    onSearchType() {
        this.setState({
            searchType:!(this.state.searchType)
        });
    }

    onClick(e) {
        console.log("this.props.history.push(e.target.accessKey);");
        this.props.history.push(e.target.accessKey);
    }

    // 검색 창 닫기
    searchToggleX(e) {
        var container = jQuery(document).find('.search-wrapper');
        var searchDropdown = jQuery(document).find('.search-dropdown');
        
        container.removeClass('active');
        searchDropdown.addClass('hide');
        // clear input
        container.find('.search-input').val('');
        this.setState({
            content:''
        }); 
    }

    // 검색 창 펼치기
    searchToggle(e) {
        const {search} = this;

        console.log("searchToggle");
        var container = jQuery(document).find('.search-wrapper');
        var searchDropdown = jQuery(document).find('.search-dropdown');
        //펼쳐진 상태가 아니라면 
        if(!container.hasClass('active')){
            console.log("has");
            container.addClass('active');
            searchDropdown.removeClass('hide');
            e.preventDefault();
        }
        //펼쳐진 상태라면   if(container.hasClass('active') && jQuery(document).find('.input-holder').length == 0)
        else {
            search();
        }
    }

    componentDidMount() {
        var dropdownMenu = jQuery(document).find('.dropdown-menu');
        var dropdownItem = dropdownMenu.find('.dropdown-item');

        //document에서 리스트의 요소를 클릭이나 touch를 할때  발생
        jQuery(document).on('click touch', '.dropdown-menu .dropdown-item', function(e) {  
            e.preventDefault(); //이벤트의 기본이벤트 값을 실행한다
            var dropdownButton = jQuery(document).find('.search-dropdown').children('.dropdown-toggle');     
            dropdownButton.text(jQuery(this).text());
            var paddingLeft = dropdownButton.width()+40;
            jQuery(document).find('.search-input').css("padding-left",paddingLeft+"px");
        });

        var currentUserId = this.props.userId;
        var t = this;

        jQuery('select.dropdown').each(function() {  
            //새로운 div태그에 dropdown과 selectDropdown을 클래스로 적용시킨다.
            var dropdown = jQuery('<div />').addClass('dropdown selectDropdown'); 
        
            //dropdown클래스를 가진 select엘리먼트를 생성한 div로 감싼다.
            jQuery(this).wrap(dropdown); 
        
            //임시로 UserID란 계정이 있다고 가정하고 출력
            var user = jQuery('<span />'); 
            //계정 옆에 fontAwesome usericon출력
            user.append('<i class="fas fa-user-circle" aria-hidden="true"></i>');
            user.append(currentUserId).insertAfter(jQuery(this));
          
        
            var list = jQuery('<ul />');     //ul태그를 만든다.
            jQuery(this).find('option').each(function(e) {        //select엘리먼트의 자식들 중에 option엘리먼트를 찾아서 각 엘리먼트들에 대해서
                var name = jQuery(this).attr('value');      //옵션 태그의 name 
                var text = jQuery(this).text();          //옵션 태그의 text */
                var div = jQuery('<div />').attr('accessKey',name).text(text);        //div블럭을 생성하고 name속성값과 text를 셋팅한다.

                list.append(jQuery('<li />').append(div));    
            });

            //div에 클릭 리스너를 단다.
            list.find('div').click(function(e) {
                console.log(e.target.text);
                console.log(e.target);
                console.log(e);
                t.onClick(e);
            });
            //select엘리먼트 뒤에 리스트를 붙인다. 
            list.insertAfter(jQuery(this));                  
        
        });
        
        jQuery('.dropdown > span').on('click touch', function(e) {       //선택한것을 출력해주는 창에 클릭 이벤트리스너
            var self = jQuery(this).parent();        //출력창을 변수로 설정
            self.toggleClass('open');       //출력창의 클래스에 open클래스를 껏다 켰다. 
        });

        jQuery(document).on('click touch', function(e) {     //다큐먼트에 클릭리스너
            var dropdown = jQuery('.dropdown');      //전체 div 변수
            if(dropdown !== e.target && !dropdown.has(e.target).length) {   //클릭한것이 div가 아니고 div에서 선택한 부분에 아무 요소가 없을 때
                dropdown.removeClass('open');   //창을 닫는다.
            }
        });


        var menuBtn = document.querySelector('.menu-btn');
        var nav = document.querySelector('nav');
        var lineOne = document.querySelector('nav .menu-btn .line--1');
        var lineTwo = document.querySelector('nav .menu-btn .line--2');
        var lineThree = document.querySelector('nav .menu-btn .line--3');
        var link = document.querySelector('nav .nav-links');
        var title = document.querySelector('.title');
        var blur = document.querySelector('.blur');
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            lineOne.classList.toggle('line-cross');
            lineTwo.classList.toggle('line-fade-out');
            lineThree.classList.toggle('line-cross');
            link.classList.toggle('fade-in');
            title.classList.toggle('slide');
            blur.classList.toggle('open');
        });


         //wave.js
        /*========================================
            move-wave-box height
        ========================================*/
        var waveBox = jQuery(document).find(".wave-box");
        var colorBoxTop = jQuery(document).find(".color-box-top");
        var colorBoxBottom = jQuery(document).find(".color-box-bottom");

        jQuery(document).ready(function(){
            // hidden div 태그들로 페이지 구분
            if(jQuery(this).find('.isMain').length){
                waveBox.css('transform','translateY(40vh)');
                colorBoxTop.css('height','40vh');
            }
            else if(jQuery(this).find('.isProfile').length){
                waveBox.css('transform','translateY(40vh)');
                colorBoxTop.css('height','40vh');
            }
            else if(jQuery(this).find('.isSearchResult').length){
                waveBox.css('transform','translateY(40vh)');
                colorBoxTop.css('height','40vh');
            }
            else if(jQuery(this).find('.isCollection').length){
                waveBox.css('transform','translateY(-15vh)');
                colorBoxBottom.css('height','15vh');
            }
            else if(jQuery(this).find('.isAddCollection').length){
                waveBox.css('transform','translateY(40vh)');
                colorBoxTop.css('height','40vh');
            }
        });


        const gui = new window.dat.GUI(),
        guiSet = {
        frequency: 5,
        reset: () => {
            $.reset();
        } };


        gui.add(guiSet, 'frequency').min(5).max(50);
        gui.add(guiSet, 'reset');

        const $ = {};

        /*========================================
                    Initialize
        ========================================*/

        $.init = () => {
        $.c = document.querySelector('canvas');
        $.ctx = $.c.getContext('2d');
        $.simplex = new window.SimplexNoise();
        $.events();
        $.reset();
        $.loop();
        };

        /*========================================
        Reset
        ========================================*/

        $.reset = () => {
            $.w = window.innerWidth;
            $.h = window.innerHeight;
            $.cx = $.w / 2;
            $.cy = $.h / 2;
            $.c.width = $.w;
            $.c.height = $.h;
            $.count = Math.floor($.w / guiSet.frequency); // Wave frequency
            $.xoff = 0;
            $.xinc = 0.015;
            $.yoff = 0;
            $.yinc = 0.016; // Speed
            $.goff = 0;
            $.ginc = 0;
            $.y = $.h * 0.65;
            $.length = $.w + 0;
            $.amp = 15; // Wave height
        };

        /*========================================
        Event
        ========================================*/

        $.events = () => {
            window.addEventListener('resize', $.reset.bind(undefined));
        };

        /*========================================
        Wave
        ========================================*/

        $.wave = (color, amp, height, comp) => {
        $.ctx.beginPath();

        const sway = $.simplex.noise2D($.goff, 0) * amp;

        for (let i = 0; i <= $.count; i++) {
            $.xoff += $.xinc;

            const x = $.cx - $.length / 2 + $.length / $.count * i,
            y = height + $.simplex.noise2D($.xoff, $.yoff) * amp + sway;

            $.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
        }

        $.ctx.lineTo($.w, -$.h); // -$.h - Vertically reflection
        $.ctx.lineTo(0, -$.h); // -$.h - Vertically reflection
        $.ctx.closePath();
        $.ctx.fillStyle = color;

        if (comp) {
            $.ctx.globalCompositeOperation = comp;
        }

        $.ctx.fill();
        };

        /*========================================
        Loop
        ========================================*/

        $.loop = () => {
            requestAnimationFrame($.loop);

            $.ctx.clearRect(0, 0, $.w, $.h);
            $.xoff = 0;

            $.ctx.fillStyle = "#182645";
            $.ctx.fillRect(0, 0, $.w, $.h);

            $.wave("#fb0000", 20, $.h * .5, "screen");
            $.wave("#00ff8e", 20, $.h * .5, "screen");
            $.wave("#6F33FF", 20, $.h * .5, "screen");

            $.ctx.fillStyle = "#ebcdcd";
            $.ctx.globalCompositeOperation = "darken";
            $.ctx.fillRect(0, 0, $.w, $.h);

            $.yoff += $.yinc;
            $.goff += $.ginc;
        };

        /*========================================
        Start
        ========================================*/

        $.init();
    }

    onClickLogo() {
        this.props.history.push("/");
    }

    onClickSearchBy(e) {
        const {onSearchType} = this;

        onSearchType();

        if(e.target.id == "searchType-tag") {
            this.setState({
                searchBy:'태그'
            });
        }
        else if(e.target.id == "searchType-collectionName") {
            this.setState({
                searchBy:'컬렉션'
            }); 
        }
    }

    onClickMenu(e) {
        const {history, userId, onCommuicate} = this.props;
        if(e.target.id === "home") {
            history.push("/");
        }
        else if(e.target.id === "myPage") {
            history.push("/profile/" + userId);
        }
        else if(e.target.id === "upload") {
            history.push("/addColl");
        }
        else if(e.target.id === "logout") {
            onCommuicate(false,'');
            history.push("/login");
        }
        else if(e.target.id === "about") {
            // git 주소 새 창에 띄우기
        }
    }

    render() {
        const { onClickMenu, search, onPressContent, onChangeContent, onClick, onClickLogo, searchToggle, searchToggleX, onSearchType, onClickSearchBy } = this;
        const {searchBy, content} = this.state;
        const {userId} = this.props;
        const show = (this.state.searchType) ? "show" : "";
        return (
            <>          
            <header>
            <div className="title-bar">
                <div className="title" onClick={onClickLogo}>
                    <a>ShareMusic</a>
                </div>


                {/* <!-- 검색 --> */}
                <form className="search-wrapper">
                <div className="search-dropdown hide">
                    <div
                    type="button"
                    className="btn dropdown-toggle "
                    datatoggle="dropdown"
                    onClick={onSearchType}
                    style={{color:"white", fontSize:"17px"}}
                    >
                        {searchBy}
                    </div>
                    {/* <!-- 검색 드롭다운 메뉴: id넣어야함 --> */}
                    <div className={"dropdown-menu" + show}>
                        <div id="searchType-collectionName" className="dropdown-item" onClick={onClickSearchBy}
                        >
                            컬렉션
                        </div>
                        <div id="searchType-tag" className="dropdown-item" onClick={onClickSearchBy}
                        >
                            태그
                        </div>
                    </div>
                </div>
                <div className="input-holder">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Type to search"
                        value={content}
                        onChange={onChangeContent}
                        onKeyPress={onPressContent}
                    ></input>
                    <button
                        type="button"
                        className="search-icon"
                        onClick={searchToggle}
                    >
                    <span></span>
                    </button>
                </div>
                <span className="close" onClick={searchToggleX}></span>
                </form>

                <div className="user">
                    <select className="dropdown" >
                        <option value={"/profile/" + userId}>My Page</option>
                        <option value="/addColl">Add Collection</option>             
                        <option value="/login">Logout</option>
                    </select>
                </div>
            </div>
            <div className="blur"></div>
            <nav>
                <div className="menu-btn">
                    <div className="line line--1"></div>
                    <div className="line line--2"></div>
                    <div className="line line--3"></div>
                </div>

                <div className="nav-links">
                    <div onClick={onClickMenu} id="home" style={{marginTop:"50px"}}>HOME</div> 
                    <div onClick={onClickMenu} id="myPage">MY PAGE</div> 
                    <div onClick={onClickMenu} id="upload">UPLOAD</div> 
                    <div onClick={onClickMenu} id="logout" style={{marginTop:"80px", fontSize:"2.0rem"}}>Logout</div>
                    <div onClick={onClickMenu} id="about" style={{fontSize:"2.0rem"}}>About</div>
                    <div style={{fontSize:"0.8rem", marginTop:"120px"}}>This web service is developed for <br/>Hansung univercity capstone design</div> 
                </div>
            </nav>
            </header>
            </>
        );
    };
}

export default Header;