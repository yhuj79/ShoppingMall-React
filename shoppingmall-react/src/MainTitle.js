import React from 'react';
import styled from 'styled-components';
import LogoText from './image/LogoText.PNG';

function MainTitle() {
    return (
        <MainTitleDiv>
            <Title>
                <img alt="" src={LogoText} />
            </Title>
        </MainTitleDiv>
    );
}
const MainTitleDiv = styled.div`
    background-color: black;
    font-family: 'Monoton'; font-size: 4rem; letter-spacing: 5px;
    text-align: center;
    @media screen and (max-width:767px) {
        zoom: 0.6;
    }
`
const Title = styled.a`
    text-decoration-color : black;
<<<<<<< HEAD
=======

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
    
`
export default MainTitle;