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
<<<<<<< HEAD
=======

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
    @media screen and (max-width:767px) {
        display: inline-block;
        zoom: 0.5;
    }
`
export default Page_Checkout;