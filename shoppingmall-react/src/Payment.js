import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { CardElement } from '@stripe/react-stripe-js';
import MuiPhoneNumber from "material-ui-phone-number";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = event => {
        setError(event.error ? event.error.message : "");
    }
    return (
        <PaymentDiv>
            <Container>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <BackLink>뒤로 돌아가려면 클릭하세요 ( {basket?.length} Item )</BackLink>
                </Link>
                <Section>
                    <Title>
                        <h3>배송지 정보</h3>
                    </Title>
                    <Address>
                        <p>{user?.email} 님</p>
                        <AddressSection>
                            <p>수령인&emsp;</p>
                            <InOne placeholder=" 50자 이내" />
                        </AddressSection>
                        <AddressSection>
                            <p>연락처&emsp;&nbsp;</p>
                            <MuiPhoneNumber
                                defaultCountry={"kr"}
                                preferredCountries={["kr"]}
                                disableAreaCodes={true}
                                variant="outlined"
                                type="tel"
                            />
                        </AddressSection>
                        <AddressSection>
                            <p>주소&emsp;&emsp;</p>
                            <div>
                                <InThree placeholder=" 도로명 / 지번" />
                                <br />
                                <InFour placeholder=" 상세주소" />
                            </div>
                        </AddressSection>
                    </Address>
                </Section>
            </Container>
            <Section>
                <Title>
                    <h3>상품 목록</h3>
                </Title>
                <Items>
                    {basket.map((item, uniqueID) => (
                        <ProductCheckout
                            id={item.id}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            price={item.price}
                            key={uniqueID}
                        />
                    ))}
                </Items>
            </Section>
            <Section>
                <Title>
                    <h3>결제</h3>
                </Title>
                <Details>
                    <form>
                        <PriceContainer>
                            <CardInput>
                                <CardElement onChange={handleChange} />
                                {error && <ErrorText>{error}</ErrorText>}
                            </CardInput>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>
                                            총 결제금액&emsp;&emsp;<span>{value}</span>
                                        </h3>
                                        <CheckBox>
                                            <input type="checkbox" />&nbsp;주문 내용을 확인하였습니다.
                                        </CheckBox>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₩ "}
                            />
                            <PayButton onClick={e => navigate("/")}>결제하기</PayButton>
                        </PriceContainer>

                    </form>
                </Details>
            </Section>

        </PaymentDiv>
    );
}
const PaymentDiv = styled.div`
    color: black;
    width: 1500px;
    margin: auto; // 중앙 정렬
`
const Container = styled.div`
`
const BackLink = styled.h1`
    background-color: #F2CB61;
    text-align: center;
    padding: 10px; margin: 20px 30px 30px;
    font-weight: 400;
    color: black;
    border: 3px solid; border-radius: 15px; border-color: #CEA73D;

    &:hover {
        background: #E0B94F;
    }
`
const Section = styled.div`
    display: flex;
    background-color: #d5d5d5;
    padding: 30px; margin: 30px;
    border-radius: 15px;
`
const Title = styled.div`
    flex: 0.2;
`
const Address = styled.div`
    flex: 0.8;
`
const Items = styled.div`
    flex: 0.8;
`
const Details = styled.div`
    flex: 0.8;
`
const AddressSection = styled.div`
    display: flex;
    margin-top: 20px;

    .MuiInputBase-input {
        padding: 3px !important;
    }
`
const InOne = styled.input`
    width: 70px; height: 25px;
    background-color: #D5D5D5;
    margin-left: 4px; margin-right: 5px;
    border: 1px solid #9F9F9F; border-radius: 5px;
`
const InThree = styled(InOne)`
    width: 247px;
    margin-bottom: 5px;
`
const InFour = styled(InThree)`
`
const PriceContainer = styled.div`
    
`
const CardInput = styled.div`
    width: 550px; line-height: 2;
    background-color: #F6F6F6;
    padding: 15px; margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #C0C0C0;
`
const ErrorText = styled.p`
    color: #FF0000;
    font-weight: bold;
    transition: all 1s;
    @keyframes moveError {
        0% {
            transform: translateX(-1%);
        }
        20% {
            transform: translateX(1%);
        }
        40% {
            transform: translateX(-1%);
        }
        60% {
            transform: translateX(1%);
        }
        80% {
            transform: translateX(-1%);
        }
        100% {
            transform: translateX(0);
        }
    }
    animation: moveError 0.3s ease-in-out;
`
const CheckBox = styled.small`
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 20px;

    .input {
        margin-right: 5px;
    }
`
const PayButton = styled.button`
    background-color: #F2CB61;
    border-radius: 8px;
    width: 580px; height: 40px;
    margin-top: 20px;
    font-size: 1.3rem; font-weight: bold;
    border: 1px solid #CEA73D;

    &:hover {
        background: #E0B94F;
    }
`
export default Payment;