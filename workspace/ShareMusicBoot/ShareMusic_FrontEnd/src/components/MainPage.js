import React, { Component } from 'react';
import AddColl1 from './AddColl1';
import Header from './Header';

class MainPage extends Component {
    
    render() {
        const {userId, auth} = this.props;

        if(auth == false) {
            this.props.history.push("/login");
        }

        return (
            <>
            <Header userId={userId} {...this.props}></Header>
            <div>
                메인페이지 입니다.
            </div>
            </>
        );
    }
}
export default MainPage;