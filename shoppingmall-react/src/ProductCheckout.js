import React from 'react';
import styled from 'styled-components';
import { useStateValue } from './StateProvider';

function ProductCheckout({ id, image, category, title, price }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <ProductCheckoutDiv>
            <CartImage alt="" src={image} />
            <div className="productcheckout_title">
                <p className="text">{category}&nbsp;</p>
                <p className="text">{title}</p>
            </div>
            <p className="productcheckout_price">
                <strong>{price.toLocaleString('en')}</strong>
                <small>원</small>
            </p>
            <div className="productcheckout_button">
                <RemoveButton onClick={removeFromBasket}>삭제</RemoveButton>
            </div>
        </ProductCheckoutDiv>
    );
}
const ProductCheckoutDiv = styled.div`
    display: flex;
    padding: 20px; margin-bottom: 25px;
    border: 3px solid #B1B1B1; border-radius: 15px;
    line-height: 95px;
<<<<<<< HEAD
=======

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
    @media screen and (max-width:767px) {
            display: inline-block;
            line-height: 1.5;
        }
<<<<<<< HEAD
    &:hover {
        background-color: #C3C3C3;
    }
=======

    &:hover {
        background-color: #C3C3C3;
    }

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
    .productcheckout_title {
        display: flex;
        width: 500px;
        .text {
            font-weight: 500;
        }
    }
    .productcheckout_price {
        width: 100px;
        margin-left: 390px;
<<<<<<< HEAD
=======

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
        @media screen and (max-width:767px) {
            display: inline-block;
            margin-left: 0;
        }
    }
    .productcheckout_button {
        width: 50px;
        margin-left: 20px;
<<<<<<< HEAD
=======

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
        @media screen and (max-width:767px) {
            margin-left: 0;
        }
    }
`
const CartImage = styled.img`
    width: 150px;
`
const RemoveButton = styled.button`
    width: 45px; height: 35px;
    background-color: black;
    color: white;
    border-color: white; border-radius: 7px;
    &:hover {
        background-color: white; border-color: black;
        color: black;
        font-weight: 600;
    }
`
export default ProductCheckout;