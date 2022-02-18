import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Modal from 'react-modal';
import { useStateValue } from './StateProvider';

let headID = 0;
function Product({ id, image, category, title, price }) {
    const addNextID = useRef(headID);
    let size = 0;
    headID += 1000;
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: addNextID.current += 1,
                image: image,
                category: category,
                title: title + "ㅤ[ " + size + " ]",
                price: price,
            }
        })
        setModalIsOpen(false)
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <StyledProduct>
            <StyledButton onClick={() => setModalIsOpen(true)}><ShoppingBasket /><p>Cart</p></StyledButton>
            <StyledImage alt="" src={image} />
            <div className="product_info">
                <StyledCategory>{category}</StyledCategory>
                <p>{title}</p>
                <p className="product_price">
                    <strong>{price.toLocaleString('en')}</strong>
                    <small>원</small>
                </p>
            </div>

            <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        position: 'absolute',
                        width: '600px', height: '600px',
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
                <StyledModalTop>
                    <StyledImage alt="" src={image} />
                    <div>
                        <p>{category}&nbsp;</p>
                        <p>{title}</p>
                    </div>
                    <p className="modal_price">
                        <strong>{price.toLocaleString('en')}</strong>
                        <small>원</small>
                    </p>
                </StyledModalTop>
                <StyledModalBottom>
                    <p className="modal_bottomtext">Cart에 추가</p>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 250)}>250</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 255)}>255</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 260)}>260</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 265)}>265</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 270)}>270</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 275)}>275</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 280)}>280</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 285)}>285</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 290)}>290</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 295)}>295</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 300)}>300</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 305)}>305</StyledModalBottomButton>
                    <StyledModalBottomButton onClick={() => addToBasket(size = 310)}>310</StyledModalBottomButton>
                </StyledModalBottom>
            </Modal>

        </StyledProduct>
    );
}

// Product

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

    &:hover {
        background-color: white; border-color: black;
        color: black;
        font-weight: 600;
    }
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
// Modal

const StyledModalTop = styled.div`
    font-size: 20px; font-weight: 600;

    .modal_price{
        font-size: 25px;
        margin-top: 10px;
    }
`
const StyledModalBottom = styled.div`
    margin-top: 40px;
    .modal_bottomtext {
        margin-bottom: 10px;
        font-size: 25px; font-weight: 600;
    }
`
const StyledModalBottomButton = styled.button`
    width: 60px; height: 40px;
    background-color: black;
    color: white; font-size: 18px;
    border-color: white; border-radius: 10px;
    margin: 7px;

    &:hover {
        background-color: white; border-color: black;
        color: black;
        font-weight: 600;
    }
`
export default Product;