import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <SubTotalDiv>
            <h2>장바구니 총합</h2>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총액 ({basket.length} items) : <strong>{value}원</strong>
                        </p>
                        <CheckBox className="subtotal_gift">
                            <input type="checkbox" />&nbsp;주문 내용을 확인하였습니다.
                        </CheckBox>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₩"}
            />
            <PayButton>결제하기</PayButton>
        </SubTotalDiv>
    );
}
const SubTotalDiv = styled.div`
    display: flex; flex-direction: column;
    background-color: #D5D5D5;
    width: 350px;
    height: 120px;
    padding: 20px;
    margin: 20px;
    border-radius: 15px;
`
const CheckBox = styled.small`
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 15px;

    .input {
        margin-right: 5px;
    }
`
const PayButton = styled.button`
    background-color: #f0c14b;
    border-radius: 2px;
    width: 100%; height: 30px;
    border: 1px solid;
    margin-top: 15px;
    color: #111;
`
export default SubTotal;