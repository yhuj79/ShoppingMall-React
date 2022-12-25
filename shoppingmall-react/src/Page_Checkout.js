import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Checkout from "./Checkout";
import SubTotal from "./SubTotal";
import MainTitle from "./MainTitle";

function Page_Checkout() {
  return (
    <div>
      <Header />
      <MainTitle />
      <PageCheckout>
        <Checkout />
        <SubTotal />
      </PageCheckout>
    </div>
  );
}
const PageCheckout = styled.div`

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    zoom: 0.8;
  }
  @media screen and (max-width: 767px) {
    zoom: 0.6;
  }
`;
export default Page_Checkout;
