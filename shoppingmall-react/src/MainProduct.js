import React, { useRef, useState } from "react";
import styled from "styled-components";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import BackButtonWhite from "./image/BackButtonWhite.png";
import CartModal from "react-modal";
import InfoModal from "react-modal";
import "./Modal.css";
import { useStateValue } from "./StateProvider";

let headID = 0;
function Product({
  id,
  image,
  category,
  title,
  price,
  subImageOne,
  subImageTwo,
  subImageThree,
  color,
  rdate,
  titleKR,
}) {
  const addNextID = useRef(headID);
  let size = 0;
  headID += 1000;
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: (addNextID.current += 1),
        image: image,
        category: category,
        title: title + "ㅤ[ " + size + " ]",
        price: price,
      },
    });
    setInfoModalIsOpen(false);
    setCartModalIsOpen(false);
  };
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false);
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  return (
    <ProductDiv>
      {/* Product - Main */}
      <CartButton onClick={() => setCartModalIsOpen(true)}>
        <ShoppingBasket />
        <p>Cart</p>
      </CartButton>
      <div onClick={() => setInfoModalIsOpen(true)}>
        <ProductImage alt="" src={image} />
        <div className="main_text">
          <Category>{category}</Category>
          <p>{title}</p>
          <p className="main_price">
            <strong>{price.toLocaleString("en")}</strong>
            <small>원</small>
          </p>
        </div>
      </div>

      {/* Product - Info Modal */}
      <InfoModal
        closeTimeoutMS={400}
        ariaHideApp={false}
        isOpen={infoModalIsOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 1)",
          },
          content: {
            position: "absolute",
            width: "1500px",
            height: "900px",
            top: "50%",
            left: "50%",
            right: "40px",
            bottom: "40px",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#000000",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "15px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div>
          <InfoTitle>
            <p>{category}</p>
            <p>{title}</p>
            <p className="info_KR">{titleKR}</p>
          </InfoTitle>
          <InfoImageDiv>
            <InfoImage alt="" src={subImageOne} />
            <InfoImage alt="" src={subImageTwo} />
            <InfoImage alt="" src={subImageThree} />
            <BackImage
              onClick={() => setInfoModalIsOpen(false)}
              src={BackButtonWhite}
              alt=""
            />
          </InfoImageDiv>
          <InfoUnder>
            <p>Color&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;-&emsp;{color}</p>
            <p>Release date&emsp;-&emsp;{rdate}</p>
            <p className="info_price">
              <strong>{price.toLocaleString("en")}</strong>
              <small>원</small>
            </p>
          </InfoUnder>
          <InfoCartButton onClick={() => setCartModalIsOpen(true)}>
            <ShoppingBasket />
            <p>&nbsp;Add To Cart</p>
          </InfoCartButton>
        </div>
      </InfoModal>

      {/* Product - Cart Modal */}
      <CartModal
        closeTimeoutMS={400}
        ariaHideApp={false}
        isOpen={cartModalIsOpen}
        onRequestClose={() => setCartModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "absolute",
            width: "600px",
            height: "600px",
            top: "50%",
            left: "50%",
            right: "40px",
            bottom: "40px",
            transform: "translate(-50%, -50%)",
            border: "3px solid #7B7B7B",
            background: "#D5D5D5",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "15px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <div>
          <CartModalTop>
            <ProductImage alt="" src={image} />
            <div>
              <p className="cart_category">{category}</p>
              <p className="cart_title">{title}</p>
            </div>
            <p className="cart_price">
              <strong>{price.toLocaleString("en")}</strong>
              <small>원</small>
            </p>
          </CartModalTop>
          <CartModalBottom>
            <p className="cart_bottomtext">Cart에 추가</p>
            <CartModalBottomButton onClick={() => addToBasket((size = 250))}>
              250
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 255))}>
              255
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 260))}>
              260
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 265))}>
              265
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 270))}>
              270
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 275))}>
              275
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 280))}>
              280
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 285))}>
              285
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 290))}>
              290
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 295))}>
              295
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 300))}>
              300
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 305))}>
              305
            </CartModalBottomButton>
            <CartModalBottomButton onClick={() => addToBasket((size = 310))}>
              310
            </CartModalBottomButton>
          </CartModalBottom>
        </div>
      </CartModal>
    </ProductDiv>
  );
}

// Product CSS

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 35px;
  padding: 20px;
  max-height: 400px;
  width: 350px;
  background-color: #d5d5d5;
  border: 3px solid #7b7b7b;
  border-radius: 15px;

  .main_text {
    height: 50px;
    font-weight: 500;
    margin-bottom: 15px;
    line-height: 1.5;
  }
  .main_price {
    margin-top: 1px;
  }

  @media screen and (max-width: 767px) {
    -webkit-text-size-adjust: 60%; /* Chrome, Safari, NewOpera */
    -ms-text-size-adjust: 60%; /* IE */
    -moz-text-size-adjust: 60%; /* FireFox */
    -o-text-size-adjust: 60%; /* NewOpera */
  }
`;
const CartButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  border-color: white;
  border-radius: 7px;
  position: absolute;
  margin-left: 300px;

  &:hover {
    background-color: white;
    border-color: black;
    color: black;
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
    -webkit-text-size-adjust: 60%; /* Chrome, Safari, NewOpera */
    -ms-text-size-adjust: 60%; /* IE */
    -moz-text-size-adjust: 60%; /* FireFox */
    -o-text-size-adjust: 60%; /* NewOpera */
  }
`;
const ProductImage = styled.img`
  max-height: 300px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 5px;
`;
const Category = styled.p`
  text-decoration: underline;
  text-underline-position: under;
`;
// Cart Modal CSS

const CartModalTop = styled.div`
  font-size: 20px;
  font-weight: 600;

  .cart_price {
    font-size: 25px;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    .cart_category,
    .cart_title,
    .cart_price {
      display: none;
    }
  }
`;
const CartModalBottom = styled.div`
  margin-top: 40px;

  .cart_bottomtext {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    .cart_bottomtext {
      margin-top: -20px;
      font-size: 25px;
    }
  }
`;
const CartModalBottomButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 18px;
  border-color: white;
  border-radius: 10px;
  margin: 7px;

  &:hover {
    background-color: white;
    border-color: black;
    color: black;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    width: 100px;
    height: 60px;
  }
`;
// Info Modal CSS

const InfoTitle = styled.div`
  margin-top: 70px;
  color: white;
  font-size: 2.5rem;
  font-family: Righteous;

  .info_KR {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 460px;
  }
`;
const InfoImageDiv = styled.div``;
const InfoImage = styled.img`
  object-fit: contain;
  width: 400px;
  height: 300px;
  margin-right: 15px;

  @media screen and (max-width: 767px) {
    margin-left: 460px;
  }
`;
const InfoUnder = styled.div`
  color: white;
  font-size: 1.2rem;
  font-family: Secular One;
  margin-top: 50px;

  .info_price {
    margin-top: 20px;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    margin-left: 460px;
  }
`;
const BackImage = styled.img`
  width: 150px;
  opacity: 0.5;
  margin-left: 40px;
  margin-bottom: 300px;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 767px) {
    width: 200px;
    margin: 0;
    margin-left: 800px;
    display: flex;
  }
`;
const InfoCartButton = styled(CartButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 265px;
  height: 100px;
  font-size: 30px;
  margin-left: 950px;
  padding: 20px;

  .MuiSvgIcon-root {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    margin-top: -120px;
    margin-left: 730px;
    width: 500px;
    height: 130px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 730px;
  }
`;
export default Product;
