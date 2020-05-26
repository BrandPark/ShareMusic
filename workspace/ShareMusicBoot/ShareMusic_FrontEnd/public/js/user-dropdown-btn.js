
$('select.dropdown').each(function() {  

    var dropdown = $('<div />').addClass('dropdown selectDropdown'); //새로운 div태그에 dropdown과 selectDropdown을 클래스로 적용시킨다.

    $(this).wrap(dropdown); //dropdown클래스를 가진 select엘리먼트를 생성한 div로 감싼다.

    var user = $('<span />'); //임시로 UserID란 계정이 있다고 가정하고 출력
    user.append('<i class="fas fa-user-circle" aria-hidden="true"></i>');   //계정 옆에 fontAwesome usericon출력
    user.append('UserID').insertAfter($(this));
  

    var list = $('<ul />');     //ul태그를 만든다.
    $(this).find('option').each(function(e) {        //select엘리먼트의 자식들 중에 option엘리먼트를 찾아서 각 엘리먼트들에 대해서
        list.append($('<li />').append($('<div />').text($(this).text())));
    });
    list.find('div').click(function(){      //div에 클릭 리스너를 단다.
         alert($(this).text());           
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

