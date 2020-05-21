import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const LoginPage = ({location, history, auth, onCommunicate}) => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [idWrong, setIdWrong] = useState(false);
    const [pwWrong, setPwWrong] = useState(false);
    const [bothCorrect, setBothCorrect] = useState(false);
    const onSignin = (e) => {
        console.log("go to signin page");
        //history.push("/signin");
    }

    const onInputChange = (e) => {
        if(e.target.name == "userId") {
            setUserId(e.target.value);
        }
        else if(e.target.name == "userPw") {
            setUserPw(e.target.value);
        }
        console.log("id : " + userId);
        console.log("pw : " + userPw);
    }

    const onLoginClick = (e) => {
        console.log(location);
        console.log(history);
        console.log(auth);
        // login rest api 호출
        fetch('http://localhost:8081/ShareMusic/member/doLogin', {
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
            console.log("data : " + data);
            //로그인 성공
            if(data == "success") {
                setBothCorrect(true);
            }
            // pw 틀린 경우
            else if(data == "NotExistPassword") {
                setPwWrong(true);
                setIdWrong(false);
            }
            // id 틀린 경우
            else if(data == "NotExistUserId") {
                setIdWrong(true);
                setPwWrong(false);
            }
            
        });

        if(bothCorrect) {
            // 다른 페이지로 이동 전 초기화
            onCommunicate(true, userId); //권한,id 전달
            setIdWrong(false);
            setPwWrong(false);
            setBothCorrect(false);
            // 이동
            history.push("/");
        }

    }
    return (
        <Form className="login-form">
            <h1 className="font-weight-bold text-center">Share Music</h1>
            <h3 className={idWrong?'showError text-center':'hideError text-center'}>Wrong ID</h3>
            <h3 className={pwWrong?'showError text-center':'hideError text-center'}>Wrong Password</h3>

            <FormGroup>
                <Label>ID</Label>
                <Input type="text" placeholder="ID" name="userId" value={userId} onChange={onInputChange}></Input>
                <Label>Password</Label>
                <Input type="password" placeholder="Password" name="userPw" value={userPw} onChange={onInputChange}></Input>
            </FormGroup>

            <Button 
                type="button"
                className="btn-lg btn-primary btn-block"
                onClick={onLoginClick}
            >
                Log in
            </Button>

            <Button 
                className="btn-lg btn-dark btn-block"
                onClick={onSignin}
            >
                Sign in
            </Button>
        </Form>
    );
};

export default LoginPage;