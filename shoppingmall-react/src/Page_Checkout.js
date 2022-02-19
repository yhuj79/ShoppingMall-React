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
`
export default Page_Checkout;