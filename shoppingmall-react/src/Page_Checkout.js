import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Checkout from './Checkout';
import SubTotal from './SubTotal';
import MainTitle from './MainTitle';
import Background from './image/Background.jpg';

function Page_Checkout() {
    return (
        <StyledPage>
            <Header />
            <MainTitle />
            <StyledDiv>
                <Checkout />
                <SubTotal />
            </StyledDiv>
        </StyledPage>
    );
}
const StyledDiv = styled.div`
    display: flex;
`
const StyledPage = styled.div`
    background: url(https://source.unsplash.com/random/1920x1080);
`
export default Page_Checkout;