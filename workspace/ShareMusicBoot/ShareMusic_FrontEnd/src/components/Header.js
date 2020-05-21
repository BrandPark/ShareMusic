import React from 'react';

const Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <div>
                    {/* <!-- 왼쪽 상단 햄버거 버튼 --> */}
                    <button className="btn" type="submit">
                        <span className="navbar-toggler-icon" style={{fontSize:"1.5em"}}>asdf</span>
                    </button>
                    {/* <!-- 제목 --> */}
                    <a className="navbar-brand" style="font-size:1.5em; margin-top:5px; vertical-align:-3px;" href="#">
                        ShareMusic</a>

                </div>

                {/* <!-- 우측 상단 계정 정보 --> */}
                <div className="dropdown" style="text-align:right;">
                    <button className="btn dropdown-toggle" data-toggle="dropdown">
                        <i className="fas fa-user-circle" style="font-size:1.8em; vertical-align:-3px;"
                            aria-hidden="true"></i>
                        <span style="font-size:1.5em; margin-left:10px;">Mingon</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

            </div>

        </nav>
    </header>
    );
};

export default Header;