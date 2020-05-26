
$('select.dropdown').each(function() {  

    var dropdown = $('<div />').addClass('dropdown selectDropdown'); //새로운 div태그에 dropdown과 selectDropdown을 클래스로 적용시킨다.

    $(this).wrap(dropdown); //dropdown클래스를 가진 select엘리먼트를 생성한 div로 감싼다.

    /* var label = $('<span />').text($(this).attr('placeholder')).insertAfter($(this)); */ //출력창에 출력할 span엘리먼트를 생성하고 텍스트는 select엘리먼트의 placeholder속성 값으로 지정한다. 그것을 select태그 뒤에 삽입.
    var user = $('<span />'); //임시로 UserID란 계정이 있다고 가정하고 출력
    user.append('<i class="fas fa-user-circle" aria-hidden="true"></i>');   //계정 옆에 fontAwesome usericon출력
    user.append('UserID').insertAfter($(this));
  

    var list = $('<ul />');     //ul태그를 만든다.
    $(this).find('option').each(function() {        //select엘리먼트의 자식들 중에 option엘리먼트를 찾아서 각 엘리먼트들에 대해서
        list.append($('<li />').append($('<a />').text($(this).text())));   //만들어둔 ul엘리먼트에 li를 붙이고 option엘리먼트의 내용을 링크로 단다.
        var url = $(this).attr('value');        //option value속성값을 통해 url을 얻는다.
        list.find('a').attr('href',url);        //a태그의 href속성값으로 넣는다. 
    });

    list.insertAfter($(this));                  //select엘리먼트 뒤에 리스트를 붙인다. 

/*     if($(this).find('option:selected').length) {        //선택된 옵션이 있다면 
        label.text($(this).find('option:selected').text());         //선택된 옵션의 텍스트를 라벨에 출력한다.
        list.find('li:contains(' + $(this).find('option:selected').text() + ')').addClass('active');    //선택된 li에 active클래스 추가.
        $(this).parent().addClass('filled');                        //div에 filled추가
        
    } */

});

/* $(document).on('click touch', '.selectDropdown ul li a', function(e) {  //document에서 리스트의 요소를 클릭이나 touch를 할때  발생
    e.preventDefault();                             //이벤트의 기본이벤트 값을 실행한다
    var dropdown = $(this).parent().parent().parent();      //전체를 감싼 div엘리먼트를 변수로 설정
    var active = $(this).parent().hasClass('active');       //클릭한 요소의 li태그가 active 클래스를 갖는가?(참, 거짓)
    var label = active ? dropdown.find('select').attr('placeholder') : $(this).text();   //클릭한 것이 이미 선택된 것이라면 변수에 placeholder값을 아니라면 선택한 값을 넣는다.

    dropdown.find('option').prop('selected', false);    //div안에 option엘리먼트들의 selected속성값을 false로 해준다.
    dropdown.find('ul li').removeClass('active');       //리스트의 항목들에대해서 active클래스를 지운다. 

    dropdown.toggleClass('filled', !active);        //active중인것을 눌렀다면 filled를 지우고 아니라면 filled클래스를 채운다.
    dropdown.children('span').text(label);          //select엘리먼트중 span엘리먼트의 내용을 label로 채운다. 

    if(!active) {           //클릭한 것이 active상태라면 
        dropdown.find('option:contains(' + $(this).text() + ')').prop('selected', true);    //클릭한 요소의 텍스트를 포함한 option엘리먼트를 찾아 selected속성값을 true로 한다.
        $(this).parent().addClass('active'); //클릭한 요소의 부모 li엘리먼트에 active클래스 추가
    }

    dropdown.removeClass('open');           //select엘리먼트에 open클래스 삭제
}); */

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

/* // light
$('.switch input').on('change', function(e) {
    $('.dropdown, body').toggleClass('light', $(this).is(':checked'));
}); */