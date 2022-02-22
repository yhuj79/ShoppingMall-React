import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { CardElement } from '@stripe/react-stripe-js';

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
                        <h3>배달 받을 곳</h3>
                    </Title>
                    <Address>
                        <p>{user?.email} 님의 주소</p>
                        <p>서울특별시</p>
                        <p>강남구 논현동</p>
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
                        <CardElement onChange={handleChange} />
                        <PriceContainer>
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
                            <button>
                                <span>"결제하기"</span>
                            </button>
                        </PriceContainer>
                        {error && <div>{error}</div>}
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
const PriceContainer = styled.div`
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
export default Payment;