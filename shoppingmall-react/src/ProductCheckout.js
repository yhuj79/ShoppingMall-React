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
        <div className="productcheckout">
            <StyledImage alt="" src={image} />
            <div className="productcheckout_info">
                <p>{category}</p>
                <p>{title}</p>
                <p className="productcheckout_price">
                    <strong>{price.toLocaleString('en')}</strong>
                    <small>원</small>
                </p>
                <button onClick={removeFromBasket}>장바구니에서 제거</button>
            </div>
        </div>
    );
}
const StyledImage = styled.img`
    width: 100px;
`
export default ProductCheckout;