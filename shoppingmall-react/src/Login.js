import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from './image/LogoImage.jpg';
import MainTitle from './MainTitle';

function Login() {
    return (
        <StyledLogin>
            <Link to="/">
                <StyledImage alt="" src={LogoImage} />
                <MainTitle />
            </Link>
        </StyledLogin>
    );
}
const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
const StyledImage = styled.img`
    width: 300px;
    margin-top: 30px; margin-left: 65px;
`
export default Login;