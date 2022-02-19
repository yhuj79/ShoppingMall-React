import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import BackButtonWhite from './image/BackButtonWhite.png';
import CartModal from 'react-modal';
import InfoModal from 'react-modal';
import './Modal.css'
import { useStateValue } from './StateProvider';

let headID = 0;
function Product({ id, image, category, title, price,
    // Info Modal
    subImageOne, subImageTwo, subImageThree, color, rdate, titleKR }) {
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
        setInfoModalIsOpen(false)
        setCartModalIsOpen(false)
    }
    const [infomodalIsOpen, setInfoModalIsOpen] = useState(false);
    const [cartmodalIsOpen, setCartModalIsOpen] = useState(false);
    return (
        <ProductDiv>
            {/* Product - Main */}
            <CartButton onClick={() => setCartModalIsOpen(true)}><ShoppingBasket /><p>Cart</p></CartButton>
            <div onClick={() => setInfoModalIsOpen(true)}>
                <ProductImage alt="" src={image} />
                <div className="product_info">
                    <Category>{category}</Category>
                    <p>{title}</p>
                    <p className="product_price">
                        <strong>{price.toLocaleString('en')}</strong>
                        <small>원</small>
                    </p>
                </div>
            </div>

            {/* Product - Click Infomation */}
            <InfoModal closeTimeoutMS={400} ariaHideApp={false} isOpen={infomodalIsOpen}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 1)'
                    },
                    content: {
                        position: 'absolute',
                        width: '1500px', height: '900px',
                        top: '50%',
                        left: '50%',
                        right: '40px',
                        bottom: '40px',
                        transform: 'translate(-50%, -50%)',
                        border: 'none',
                        background: '#000000',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '15px',
                        outline: 'none',
                        padding: '20px',
                    }
                }}
            >
                <div>
                    <InfoTitle>
                        <p>{category}</p>
                        <p>{title}</p>
                        <p className="info_KR">{titleKR}</p>
                    </InfoTitle>
                    <div>
                        <InfoImage alt="" src={subImageOne} />
                        <InfoImage alt="" src={subImageTwo} />
                        <InfoImage alt="" src={subImageThree} />
                        <BackImage onClick={() => setInfoModalIsOpen(false)} src={BackButtonWhite} alt="" />
                    </div>
                    <InfoUnder>
                        <p>Color&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;-&emsp;{color}</p>
                        <p>Release date&emsp;-&emsp;{rdate}</p>
                        <p className="info_price">
                            <strong>{price.toLocaleString('en')}</strong>
                            <small>원</small>
                        </p>
                    </InfoUnder>
                    <InfoCartButton onClick={() => setCartModalIsOpen(true)}><ShoppingBasket /><p>Cart</p></InfoCartButton>
                </div>
            </InfoModal>

            {/* Product - Click Cart */}
            <CartModal closeTimeoutMS={400} ariaHideApp={false} isOpen={cartmodalIsOpen} onRequestClose={() => setCartModalIsOpen(false)}
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
                        padding: '20px',
                    }
                }}
            >
                <CartModalTop>
                    <ProductImage alt="" src={image} />
                    <div>
                        <p>{category}</p>
                        <p>{title}</p>
                    </div>
                    <p className="modal_price">
                        <strong>{price.toLocaleString('en')}</strong>
                        <small>원</small>
                    </p>
                </CartModalTop>
                <CartModalBottom>
                    <p className="modal_bottomtext">Cart에 추가</p>
                    <CartModalBottomButton onClick={() => addToBasket(size = 250)}>250</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 255)}>255</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 260)}>260</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 265)}>265</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 270)}>270</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 275)}>275</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 280)}>280</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 285)}>285</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 290)}>290</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 295)}>295</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 300)}>300</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 305)}>305</CartModalBottomButton>
                    <CartModalBottomButton onClick={() => addToBasket(size = 310)}>310</CartModalBottomButton>
                </CartModalBottom>
            </CartModal>

        </ProductDiv>
    );
}

// Product css

const ProductDiv = styled.div`
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
        font-weight: 500;
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .product_price {
        margin-top: 1px;
    }
`
const CartButton = styled.button`
    width: 50px; height: 50px;
    background-color: black;
    color: white;
    border-color: white; border-radius: 7px;
    position: absolute;
    margin-left: 300px;

    &:hover {
        background-color: white; border-color: black;
        color: black;
        font-weight: 600;
    }
`
const ProductImage = styled.img`
    max-height: 300px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 5px;
`
const Category = styled.p`
    text-decoration: underline;
    text-underline-position: under;
`
// Cart Modal css

const CartModalTop = styled.div`
    font-size: 20px; font-weight: 600;

    .modal_price{
        font-size: 25px;
        margin-top: 10px;
    }
`
const CartModalBottom = styled.div`
    margin-top: 40px;
    .modal_bottomtext {
        margin-bottom: 10px;
        font-size: 25px; font-weight: 600;
    }
`
const CartModalBottomButton = styled.button`
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
// Info Modal css

const InfoTitle = styled.div`
    margin-top: 70px;
    color: white; font-size: 2rem; font-family: Righteous;

    .info_KR {
        font-size: 1.2rem;
    }
`
const InfoImage = styled.img`
    object-fit: contain;
    width: 400px; height: 300px;
    margin-right: 15px;
`
const InfoUnder = styled.div`
    color: white; font-size: 1.2rem; font-family: Secular One;
    margin-top: 50px;

    .info_price {
        margin-top: 20px;
        font-size: 2rem;
    }
`
const BackImage = styled.img`
    width: 150px;
    opacity: 0.5;
    margin-left: 40px; margin-bottom: 300px;

    &:hover {
        opacity: 0.8;
    }
`
const InfoCartButton = styled(CartButton)`
    width: 100px; height: 100px;
    font-size: 2rem;
    margin-left: 1100px;

    .MuiSvgIcon-root {
        font-size: 2rem;
    }
`
export default Product;