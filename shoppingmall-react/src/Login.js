import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterModal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import LoginLogo from './image/LoginLogo.PNG';
import { auth } from './Firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [regiModalIsOpen, setRegiModalIsOpen] = useState(false);

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("/")
            })
            .catch(error => alert(error.message))
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
            .catch(error => alert(error.message))
    }
    const regiClick = () => {
        setEmail('')
        setPassword('')
        setRegiModalIsOpen(true)
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
                <RegiButton onClick={regiClick}><h3>회원가입</h3></RegiButton>
            </LoginForm>

            <RegisterModal closeTimeoutMS={400} ariaHideApp={false} isOpen={regiModalIsOpen} onRequestClose={() => setRegiModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    },
                    content: {
                        position: 'absolute',
                        width: '630px', height: '600px',
                        top: '50%',
                        left: '50%',
                        right: '40px',
                        bottom: '40px',
                        transform: 'translate(-50%, -50%)',
                        border: 'none',
                        background: '#D5D5D5',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '15px',
                        outline: 'none',
                        padding: '20px',
                    }
                }}
            >
                <LoginForm>
                    <LoginTitle>REGISTER</LoginTitle>
                    <form>
                        <h3>신규 이메일</h3>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                        <h3>신규 비밀번호</h3>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    </form>
                    <RegiFinalButton onClick={register}><h3>회원가입</h3></RegiFinalButton>
                </LoginForm>
            </RegisterModal>
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
const RegiFinalButton = styled(LoginButton)`
    margin-top : 50px;
`
export default Login;