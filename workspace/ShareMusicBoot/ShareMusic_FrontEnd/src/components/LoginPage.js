import React, { Component } from 'react';
import jQuery from 'jquery';
import '../css/login-page.css';
import '../css/wave.css';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            userId:'',
            userPw:'',
        }
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onSignin = this.onSignin.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSignin(e) {
        const {history} = this.props;
        history.push("/signin");
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onKeyPress(e) {
        const {onClickLogin} = this;

        if(e.key === 'Enter') {
            onClickLogin();
        }
    }

    onClickLogin(e) {
        const {userId, userPw} = this.state;
        const {onCommunicate, history} = this.props;
        // login rest api 호출
        fetch("/ShareMusic/members/doLogin", {
            method :"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify({
                "userId":userId,
                "userPw":userPw
            })
          })
          .then(res=>res.text())
          .then(data=> {
            //로그인 성공
            if(data == "success") {
                onCommunicate(true, userId); //권한,id 전달
                //이동
                history.push("/");
            }
        });

    }

    componentDidMount() {
        //login-page.js
        var logo = jQuery(document).find(".wave-box .logo");
        var moveWaveBox = jQuery(document).find(".move-wave-box");
        var loginWrapper = jQuery(document).find('.login-wrapper');

        logo.hover(function(e) {
            logo.find('.fa-play-circle').addClass('show');
            logo.find('.fa-play-circle').removeClass('hide');
        
        },function(e) {
            logo.find('.fa-play-circle').addClass('hide');
            logo.find('.fa-play-circle').removeClass('show');
        });
        logo.click(function(e) {
            logo.addClass('slide');
            loginWrapper.delay(1000).queue(function (next) { 
                loginWrapper.addClass('show');
                next(); 
            });
        });

        var loginTitle = jQuery(document).find('.login-title.hide');

        logo.hover(function(e){
            logo.find('.fa-play-circle').addClass('show');
            logo.find('.fa-play-circle').removeClass('hide');
            
        
        },function(e){
            logo.find('.fa-play-circle').addClass('hide');
            logo.find('.fa-play-circle').removeClass('show');
        
        });
        logo.click(function(e){
            console.log("aaaaaaaaaaaa");
            /* 제목 사라지게 */
            logo.addClass('slide');
            
            /* 물결 내려가게 */
            moveWaveBox.delay(700).animate({
                height:'30vh'
            });
            
            /* 로그인창 보이게 */
            loginWrapper.delay(1000).queue(function (next) { 
                loginWrapper.addClass('show');
                loginTitle.removeClass('hide').addClass('show');
                next(); 
            });
        });



        //wave.js

        /*========================================
            move-wave-box height
        ========================================*/
        var moveWaveBox = jQuery(document).find(".move-wave-box");
        jQuery(document).ready(function(){
            if(jQuery(this).find('.main__page').length){
                moveWaveBox.css('height','20%');
            } else if(jQuery(this).find('.profile-image').length){
            moveWaveBox.css('height','20%');
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
    render() {
        const {userId, userPw} = this.state;
        const {onKeyPress, onClickLogin, onInputChange} = this;
        return (
            <>
            <div className="move-wave-box"></div>
            <div className="wave-box">
                <canvas></canvas>
                <div className="logo is-animetion">
                    <span>S</span>
                    <span>h</span>
                    <span>a</span>
                    <span>r</span>
                    <span>e</span>
                    <span>M</span>
                    <span>u</span>
                    <span>s</span>
                    <span>i</span>
                    <span>c</span>
                    <span><i className="fas fa-play-circle hide"></i></span>
                </div>
                <div class="login-title hide">
                    <div class="horizontal-line"></div>
                    <div class="line"></div>
                    <div>Share Music</div>
                    <div class="line"></div>
                    <div class="horizontal-line"></div>
                </div>
                <div className="login-wrapper hide">
                    <div className="form login">
                        <div className="form__field">
                            <label htmlFor="login__username" style={{margin:"0px"}}>
                                <i className="fas fa-user"></i>
                            </label>
                            <input id="login__username" type="text" name="userId" className="form__input" placeholder="Username" required
                                value={userId}
                                onChange={onInputChange}
                                onKeyPress={onKeyPress}
                            >
                            </input>
                        </div>

                        <div className="form__field">
                            <label htmlFor="login__password" style={{margin:"0px"}}>
                                <i className="fas fa-lock icon"></i>
                            </label>
                            <input id="login__password" type="password" name="userPw" className="form__input" placeholder="Password" required
                                value={userPw}
                                onChange={onInputChange}
                                onKeyPress={onKeyPress}
                            >
                            </input>
                        </div>

                        <div className="form__field" >
                            <input type="submit" value="Sign In"
                                onClick={onClickLogin}
                            ></input>
                        </div>
                    </div> {/*form */}
                    <p className="text--center">Not a member? <a href="#">Sign up now</a></p>
                </div>
            </div>
            </>
        );
    }
}

export default LoginPage;