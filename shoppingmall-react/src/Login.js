import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import LoginLogo from './image/LoginLogo.PNG';
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("/")
            })
            .catch(error => alert(error.message()))
    }
    const register = e => {
        e.preventDefault();
        // firebase에서 제공하는 메서드
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate("/")
                }
            })
            .catch(error => alert(error.message()))
    }
    return (
        <LoginDiv>
            <Link to="/">
                <Logo alt="" src={LoginLogo} />
            </Link>
            <LoginForm>
                <LoginTitle>ACCOUNT LOGIN</LoginTitle>
                <form>
                    <h3>이메일</h3>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h3>비밀번호</h3>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <LoginButton onClick={signIn}><h3>로그인</h3></LoginButton>
                </form>
                <RegiButton onClick={register}><h3>회원가입</h3></RegiButton>
            </LoginForm>
        </LoginDiv>
    );
}
const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Logo = styled.img`
    width: 500px;
    margin-top: 30px;
`
const LoginForm = styled.div`
    width: 500px;
    background-color: #D5D5D5;
    margin: 40px; padding: 20px;
    border-radius: 15px;

    & > form > h3 {
        margin-bottom: 5px;
    }
    & > form > input {
        height: 30px;
        margin-bottom: 10px;
        width: 98.3%;
        border-radius: 5px;
        border-color: #EAEAEA;
    }
`
const LoginTitle = styled.h1`
    margin-bottom: 20px;
    font-family: Righteous;
`
const LoginButton = styled.button`
    background: #F2CB61;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    border: 1px solid;
    margin-top: 15px;
    border-color: #CEA73D;

    &:hover {
        background: #E0B94F;
    }
`
const RegiButton = styled(LoginButton)`
    background: #EAEAEA;
    margin-top: 10px;
    border-color: #C6C6C6;

    &:hover {
        background: #D8D8D8;
    }
`
export default Login;