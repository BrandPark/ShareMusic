import React from 'react';

const Header = ({userId}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <div>
                    <button className="btn" type="submit">
                        <span className="navbar-toggler-icon" style={{fontSize:"1.2em"}}></span>
                    </button>
                    <a className="navbar-brand" 
                        style={{fontSize:"1.5em", marginTop:"5px", verticalAlign:"-3px"}} href="#">
                        ShareMusic
                    </a>
                </div>

                {/* 우측 상단 계정 정보 */}
                <div className="dropdown" style={{textAlign:"right"}}>
                    <button className="btn dropdown-toggle" data-toggle="dropdown">
                        <i className="fas fa-user-circle" 
                            style={{fontSize:"1.8em", verticalAlign:"-3px"}}
                            aria-hidden="true">
                        </i>
                        <span style={{fontSize:"1.2em", marginLeft:"10px"}}>
                            {userId}
                        </span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

