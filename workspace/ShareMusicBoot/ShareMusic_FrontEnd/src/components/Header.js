import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClickLogo = this.onClickLogo.bind(this);
    };

    onClick(e) {
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

    componentDidMount() {
        var currentUserId = this.props.userId;
        var t = this;

        $('select.dropdown').each(function() {  

            var dropdown = $('<div />').addClass('dropdown selectDropdown'); //새로운 div태그에 dropdown과 selectDropdown을 클래스로 적용시킨다.
        
            $(this).wrap(dropdown); //dropdown클래스를 가진 select엘리먼트를 생성한 div로 감싼다.
        
            var user = $('<span />'); //임시로 UserID란 계정이 있다고 가정하고 출력
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

    render() {
        const { onClick, onClickLogo } = this;

        return (
            <>
            <header>
            <div className="title-bar">
                <div className="title" onClick={onClickLogo}>
                    <a>ShareMusic</a>
                </div>
    
                <div className="user">
                    <select className="dropdown" >
                        <option value="/" >Home</option>
                        <option value="/addColl/1">Add Collection</option>
                        <option value="/i">iFrame</option>
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
};

export default Header;