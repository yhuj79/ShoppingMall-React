import React from 'react';
import styled from 'styled-components';
import { useStateValue } from './StateProvider';

function ProductCheckout({ id, image, category, title, price }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <StyledProductCheckout>
            <StyledImage alt="" src={image} />
            <div className="productcheckout_title">
                <p className="text">{category}&nbsp;</p>
                <p className="text">{title}</p>
            </div>
            <p className="productcheckout_price">
                <strong>{price.toLocaleString('en')}</strong>
                <small>원</small>
            </p>
            <div className="productcheckout_button">
                <StyledButton onClick={removeFromBasket}>삭제</StyledButton>
            </div>
        </StyledProductCheckout>
    );
}
const StyledProductCheckout = styled.div`
    display: flex;
    padding: 20px;
    border-bottom: 2px solid black;
    line-height: 95px;

    .productcheckout_title {
        display: flex;
        width: 480px;
        .text {
            font-weight: 500;
        }
    }
    .productcheckout_price {
        width: 90px;
        margin-left: 400px;
    }
    .productcheckout_button {
        width: 50px;
        margin-left: 20px;
    }
`
const StyledImage = styled.img`
    width: 150px;
`
const StyledButton = styled.button`

`
export default ProductCheckout;