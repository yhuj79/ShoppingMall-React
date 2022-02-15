import React from 'react';
import styled from 'styled-components';
import SubTotal from './SubTotal';
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <StyledCheckout>
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">장바구니입니다</h2>
                    {basket.map(item => (
                        <ProductCheckout
                            id={item.id}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            price={item.price}
                        />
                    ))}
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