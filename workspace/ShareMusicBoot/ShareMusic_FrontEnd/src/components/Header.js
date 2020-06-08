import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy:'컬렉션',
            searchType:false
        }
        this.onClickSearchBy = this.onClickSearchBy.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClickLogo = this.onClickLogo.bind(this);
        this.onSearchType = this.onSearchType.bind(this);
    };

    onSearchType() {
        this.setState({
            searchType:!(this.state.searchType)
        });
    }

    onClick(e) {
        console.log("this.props.history.push(e.target.accessKey);");
        this.props.history.push(e.target.accessKey);
        // if(e.target.innerHTML === "Link1")
        //     this.props.history.push("/i");
        // else if(e.target.innerHTML === "Link2")
        //     this.props.history.push("/");
        // else if(e.target.innerHTML === "Link3")
        //     this.props.history.push("/addColl/1");
        // else if(e.target.innerHTML === "Link4")
        //     this.props.history.push("/addColl/2");
    }


    searchToggle(e) {
        console.log("searchToggle");
        var container = $(document).find('.search-wrapper');
        var searchDropdown = $(document).find('.search-dropdown');
        //펼쳐진 상태가 아니라면 
        if(!container.hasClass('active')){
            console.log("has");
            container.addClass('active');
            searchDropdown.removeClass('hide');
            e.preventDefault();
        }
        //펼쳐진 상태라면   if(container.hasClass('active') && $(document).find('.input-holder').length == 0)
        else {
            console.log("hasNot");
            container.removeClass('active');
            searchDropdown.addClass('hide');
            // clear input
            container.find('.search-input').val('');
        }
    }

    componentDidMount() {
        var dropdownMenu = $(document).find('.dropdown-menu');
        var dropdownItem = dropdownMenu.find('.dropdown-item');


        $(document).on('click touch', '.dropdown-menu .dropdown-item', function(e) {  //document에서 리스트의 요소를 클릭이나 touch를 할때  발생
            e.preventDefault();                             //이벤트의 기본이벤트 값을 실행한다
            var dropdownButton = $(document).find('.search-dropdown').children('button'); 
            dropdownButton.text($(this).text());
        });


        var currentUserId = this.props.userId;
        var t = this;

        $('select.dropdown').each(function() {  

            var dropdown = $('<div />').addClass('dropdown selectDropdown'); //새로운 div태그에 dropdown과 selectDropdown을 클래스로 적용시킨다.
        
            $(this).wrap(dropdown); //dropdown클래스를 가진 select엘리먼트를 생성한 div로 감싼다.
        
            var user = $('<span />'); //임시로 UserID란 계정이 있다고 가정하고 출력
            //user.append('<i aria-hidden="true"><img width="30px" height="30px" src="https://sharemusic-bucket.s3.ap-northeast-2.amazonaws.com/admin/collection-image2.png"></i>');
            user.append('<i class="fas fa-user-circle" aria-hidden="true"></i>');   //계정 옆에 fontAwesome usericon출력
            user.append(currentUserId).insertAfter($(this));
          
        
            var list = $('<ul />');     //ul태그를 만든다.
            $(this).find('option').each(function(e) {        //select엘리먼트의 자식들 중에 option엘리먼트를 찾아서 각 엘리먼트들에 대해서
                var name = $(this).attr('value');      //옵션 태그의 name 
                var text = $(this).text();          //옵션 태그의 text */
                var div = $('<div />').attr('accessKey',name).text(text);        //div블럭을 생성하고 name속성값과 text를 셋팅한다.

                list.append($('<li />').append(div));    
            });


            // var list = $('<ul />');     //ul태그를 만든다.
            // $(this).find('option').each(function(e) {        //select엘리먼트의 자식들 중에 option엘리먼트를 찾아서 각 엘리먼트들에 대해서
            //     list.append($('<li />').append($('<div />').text($(this).text())));
            // });

            //div에 클릭 리스너를 단다.
            list.find('div').click(function(e) {
                console.log("jjjjqqqqq");
                console.log(e.target.text);
                console.log(e.target);
                console.log(e);
                t.onClick(e);
            });
        
            list.insertAfter($(this));                  //select엘리먼트 뒤에 리스트를 붙인다. 
        
        });
        
        $('.dropdown > span').on('click touch', function(e) {       //선택한것을 출력해주는 창에 클릭 이벤트리스너
            var self = $(this).parent();        //출력창을 변수로 설정
            self.toggleClass('open');       //출력창의 클래스에 open클래스를 껏다 켰다. 
        });

        $(document).on('click touch', function(e) {     //다큐먼트에 클릭리스너
            var dropdown = $('.dropdown');      //전체 div 변수
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
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            lineOne.classList.toggle('line-cross');
            lineTwo.classList.toggle('line-fade-out');
            lineThree.classList.toggle('line-cross');
            link.classList.toggle('fade-in');
            title.classList.toggle('slide')
        });
    }

    onClickLogo() {
        this.props.history.push("/");
    }

    onClickSearchBy(e) {
        if(e.target.id == "tag") {
            this.setState({
                searchBy:'태그'
            });
        }
        else if(e.target.id == "collectionName") {
            this.setState({
                searchBy:'컬렉션'
            }); 
        }
    }

    render() {
        const { onClick, onClickLogo, searchToggle, onSearchType, onClickSearchBy } = this;
        const {searchBy} = this.state;
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
                    <button
                    type="button"
                    className="btn dropdown-toggle"
                    datatoggle="dropdown"
                    onClick={onSearchType}
                    >
                    {searchBy}
                    </button>
                    {/* <!-- 검색 드롭다운 메뉴: id넣어야함 --> */}
                    <div className={"dropdown-menu" + show}>
                        <div id="collectionName" className="dropdown-item" onClick={onClickSearchBy}>
                            컬렉션
                        </div>
                        <div id="tag" className="dropdown-item" onClick={onClickSearchBy}>
                            태그
                        </div>
                    </div>
                </div>
                <div className="input-holder">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Type to search"
                    />
                    <button
                        type="button"
                        className="search-icon"
                        onClick={searchToggle}
                    >
                    <span></span>
                    </button>
                </div>
                <span className="close" onClick={searchToggle}></span>
                </form>

                <div className="user">
                    <select className="dropdown" >
                        <option value={"/profile/" + userId}>My Page</option>
                        <option value="/addColl">Add Collection</option>             
                        <option value="/login">Logout</option>
                    </select>
                </div>
            </div>

            <nav>
                <div className="menu-btn">
                    <div className="line line--1"></div>
                    <div className="line line--2"></div>
                    <div className="line line--3"></div>
                </div>

                <div className="nav-links">
                    <a href="#" className="link">Link1</a>
                    <a href="#" className="link">Link2</a>
                    <a href="#" className="link">Link3</a>
                    <a href="#" className="link">Link4</a>
                </div>
            </nav>
            </header>
            </>
        );
    };
}

export default Header;