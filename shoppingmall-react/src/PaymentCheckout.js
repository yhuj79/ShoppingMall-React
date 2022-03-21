import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';

function PaymentPC({ id, image, category, title, price }) {
    return (
        <ProductCheckoutDiv>
            <CartImage alt="" src={image} />
            <div className="productcheckout_title">
                <p className="text">{category}&nbsp;</p>
                <p className="text">{title}</p>
            </div>
            <p className="productcheckout_price">
                <CurrencyFormat
                    renderText={(value) => (
                        <strong>{value}</strong>
                    )}
                    value={price.toLocaleString('en')}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₩ "}
                />
            </p>
        </ProductCheckoutDiv>
    );
}
const ProductCheckoutDiv = styled.div`
    background-color: #C7C7C7;
    display: flex;
    padding: 20px; margin-bottom: 25px;
    border: 3px solid #B1B1B1; border-radius: 15px;
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

    @media screen and (min-width: 768px) and (max-width: 1368px) {
        display: inline-block;
        line-height: 1.5;
        width: 980px;

        .productcheckout_title {
            width: 950px;
        }
        .productcheckout_price {
            display: inline-block;
            margin-left: 0;
            width: 950px;
        }
    }
    @media screen and (max-width:767px) {
        .productcheckout_title, .productcheckout_price {
            -webkit-text-size-adjust: 20%; /* Chrome, Safari, NewOpera */
            -ms-text-size-adjust: 20%; /* IE */
            -moz-text-size-adjust: 20%; /* FireFox */
            -o-text-size-adjust: 20%; /* NewOpera */
        }
    }
`
const CartImage = styled.img`
    width: 150px;
`
export default PaymentPC;