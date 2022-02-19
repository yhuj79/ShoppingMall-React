import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginLogo from './image/LoginLogo.PNG';

function Login() {
    return (
        <LoginDiv>
            <Link to="/">
                <Logo alt="" src={LoginLogo} />
            </Link>
        </LoginDiv>
    );
}
const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
const Logo = styled.img`
    width: 500px;
`
export default Login;