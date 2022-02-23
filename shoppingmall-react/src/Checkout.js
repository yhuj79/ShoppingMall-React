import React from 'react';
import styled from 'styled-components';
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <CheckoutDiv>
            <div>
                <h1 className="checkout_title">{!user ? "Guest" : user?.email}'s&nbsp; Shopping Cart ( {basket.length} item )</h1>
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
<<<<<<< HEAD
=======

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
    @media screen and (max-width:767px) {
        width: 540px;
        margin-left: 15px;
    }
    
    .checkout_title {
        font-family: Secular One;
        margin-bottom: 10px; padding: 10px;
    }
`
export default Checkout;