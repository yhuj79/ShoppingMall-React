import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <SubTotalDiv>
            <h2>Cart 총액</h2>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3>
                            Item ( {basket.length} )&emsp;&emsp;<span>{value} 원</span>
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
            />
            <PayButton onClick={e => navigate("/payment")}>결제하기</PayButton>
        </SubTotalDiv>
    );
}
const SubTotalDiv = styled.div`
    display: flex; flex-direction: column;
    position: sticky; top: 100px; // 스크롤 영향 안 받게 고정
    background-color: #D5D5D5;
    width: 430px; min-width: 430px;
    height: 200px;
    padding: 30px;
    margin: 20px;
    border-radius: 15px;

    & > h2 {
        margin-bottom: 30px;
    }
    & > h3 > span {
        font-size: 2rem;
    }
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
    border-radius: 2px;
    width: 100%; height: 40px;
    border: 1px solid;
    margin-top: 20px;
    border-color: #CEA73D;

    &:hover {
        background: #E0B94F;
    }
`
export default SubTotal;