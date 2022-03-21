import React from 'react';
import styled from 'styled-components';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <CheckoutDiv>
            <div>
                <h1 className="checkout_title">{!user ? "Guest" : user?.email}'s<br />Shopping Cart ( {basket.length} item )</h1>
                {basket.map((item, uniqueID) => (
                    <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        category={item.category}
                        title={item.title}
                        price={item.price}
                        key={uniqueID}
                    />
                ))}
            </div>
        </CheckoutDiv>

    );
}
const CheckoutDiv = styled.div`
    display: flex;
    background-color: #D5D5D5;
    border: 3px solid #7B7B7B;
    padding: 20px 35px 5px 30px;
    margin: 20px; margin-left: 40px;
    border-radius: 15px;
    width: 1250px; height: max-content;

    .checkout_title {
        font-family: Secular One;
        margin-bottom: 10px; padding: 10px;
    }

    @media screen and (min-width: 768px) and (max-width: 1368px) {
        width: 1020px;
    }
    @media screen and (max-width:767px) {
        width: 540px;
        margin-left: 15px;
    }
`
export default Checkout;