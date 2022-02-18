import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from './image/LogoImage.jpg';

function Login() {
    return (
        <div>
            <Link to="/">
                <img alt="" src={LogoImage} />
            </Link>
        </div>
    );
}

export default Login;