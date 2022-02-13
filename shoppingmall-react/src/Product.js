import React from 'react';
import styled from 'styled-components';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function Product({ id, image, category, title, price }) {
    return (
        <StyledProduct className="product">
            <StyledButton><ShoppingBasket /><p>Cart</p></StyledButton>
            <StyledImage alt="" src={image} />
            <div className="product_info">
                <Category>{category}</Category>
                <p>{title}</p>
                <p className="product_price">
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
            </div>
        </StyledProduct>
    );
}
const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 35px; padding: 20px;
    max-height: 400px;
    width: 350px;
    background-color: #D8D8D8;
    border-radius: 15px;

    .product_info {
        height: 50px;
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .product_price {
        margin-top: 1px;
    }
`
const StyledButton = styled.button`
    width: 50px; height: 50px;
    background-color: black;
    color: white;
    border-color: white;
`
const StyledImage = styled.img`
    max-height: 300px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 5px;
`
const Category = styled.p`
    text-decoration: underline;
    text-underline-position: under;
`
export default Product;