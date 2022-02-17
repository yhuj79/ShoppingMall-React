import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import SelectSizeModal from 'react-modal';
import { useStateValue } from './StateProvider';

let headID = 0;
function Product({ id, image, category, title, price }) {
    const addNextID = useRef(headID);
    headID += 1000;
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: addNextID.current += 1,
                image: image,
                category: category,
                title: title,
                price: price,
            }
        })
        setModalIsOpen(false)
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <StyledProduct>
            <StyledButton onClick={() => setModalIsOpen(true)}><ShoppingBasket /><p>Cart</p></StyledButton>
            <SelectSizeModal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(25, 25, 25, 0.75)'
                    },
                    content: {
                        position: 'absolute',
                        width: '800px', height: '600px',
                        top: '50%',
                        left: '50%',
                        right: '40px',
                        bottom: '40px',
                        transform: 'translate(-50%, -50%)',
                        background: '#D5D5D5',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '15px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >
                <div>
                    <StyledImage alt="" src={image} />
                    <div className="">
                        <p>{category}&nbsp;</p>
                        <p>{title}</p>
                    </div>
                    <p className="">
                        <strong>{price.toLocaleString('en')}</strong>
                        <small>원</small>
                    </p>
                </div>
                <button onClick={addToBasket}>245</button>
            </SelectSizeModal>
            <StyledImage alt="" src={image} />
            <div className="product_info">
                <StyledCategory>{category}</StyledCategory>
                <p>{title}</p>
                <p className="product_price">
                    <strong>{price.toLocaleString('en')}</strong>
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
    background-color: #D5D5D5;
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
    border-color: white; border-radius: 7px;
`
const StyledImage = styled.img`
    max-height: 300px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 5px;
`
const StyledCategory = styled.p`
    text-decoration: underline;
    text-underline-position: under;
`
export default Product;