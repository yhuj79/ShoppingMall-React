import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Checkout from './Checkout';
import SubTotal from './SubTotal';
import MainTitle from './MainTitle';

function Page_Checkout() {
    return (
        <div>
            <Header />
            <MainTitle />
            <StyledDiv>
                <Checkout />
                <SubTotal />
            </StyledDiv>
        </div>
    );
}
const StyledDiv = styled.div`
    display: flex;
`
export default Page_Checkout;