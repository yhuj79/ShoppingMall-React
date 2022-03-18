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
            <PageCheckout>
                <Checkout />
                <SubTotal />
            </PageCheckout>
        </div>
    );
}
const PageCheckout = styled.div`
    display: flex;
    
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        display: inline-block;
        zoom: 0.65;
    }
    @media screen and (max-width:767px) {
        display: inline-block;
        zoom: 0.5;
    }
`
export default Page_Checkout;