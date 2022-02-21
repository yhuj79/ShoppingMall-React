import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCheckout from './ProductCheckout';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "./axios";
import { db } from "./Firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements(true);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: "/payments/create?total=" + getBasketTotal(basket) * 100
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('client 비밀은 다음과 같아요', clientSecret)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment 확인 및 정보
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            // 초기값
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            navigate.replace('/orders')
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
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
                    <form onSubmit={handleSubmit}>
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
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>진행중...</p> : "결제하기"}</span>
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