import React from "react";
import styled from "styled-components";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <CheckoutDiv>
      <div>
        <h1 className="checkout_title">
          {!user ? "Guest" : user?.email}'s
          <br />
          Shopping Cart ( {basket.length} item )
        </h1>
        {basket.map((item, uniqueID) => (
          <CheckoutProduct
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
  align-items: center;
  justify-content: center;
  background-color: #d5d5d5;
  border: 3px solid #7b7b7b;
  padding: 20px 35px 5px 30px;
  margin-left: 40px;
  border-radius: 15px;
  width: 1255px;
  height: max-content;

  .checkout_title {
    font-family: Secular One;
    margin-bottom: 10px;
    padding: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    width: 1025px;
  }
  @media screen and (max-width: 767px) {
    width: 545px;
    margin-left: 15px;
    zoom: 0.9;
  }
`;
export default Checkout;
