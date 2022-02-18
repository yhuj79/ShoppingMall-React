import React from 'react';
import styled from 'styled-components';
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <StyledCheckout>
            <div className="checkout_list">
                <h2 className="checkout_title">Guest's Cart</h2>
                {basket.map((item, uniqueID) => (
                    <ProductCheckout
                        id={item.id}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        price={item.price}
                        key={uniqueID}
                    />
                ))}
            </div>
        </StyledCheckout>

    );
}
const StyledCheckout = styled.div`
    display: flex;
    background-color: #D5D5D5;
    padding: 20px;
    margin: 20px; margin-left: 40px;
    border-radius: 15px;
    width: 1230px; height: max-content;

    .checkout_list {
    }
    .checkout_title {
        margin-right: 10px;
        padding: 10px;
    }
`
export default Checkout;