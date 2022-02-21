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
    border-top: 1px solid black; border-bottom: 1px solid black;
    border-top-left-radius: 15px; border-bottom-left-radius: 15px;
    border-top-right-radius: 15px; border-bottom-right-radius: 15px;
    line-height: 95px;

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
    }
    .productcheckout_button {
        width: 50px;
        margin-left: 20px;
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