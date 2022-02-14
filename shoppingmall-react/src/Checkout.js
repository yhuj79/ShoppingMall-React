import React from 'react';
import styled from 'styled-components';
import SubTotal from './SubTotal';

function Checkout() {
    return (
        <StyledCheckout>
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">장바구니입니다</h2>

                </div>
            </div>
            <div className="checkout_right">
                <SubTotal />
            </div>
        </StyledCheckout>
    );
}
const StyledCheckout = styled.div`
    background-color: gray;
    display: flex;
    padding: 20px;
    height: max-content;

    .checkout_title {
        margin-right: 10px;
        padding: 10px;
        border-bottom: 1px solid lightskyblue;
    }
`
export default Checkout;