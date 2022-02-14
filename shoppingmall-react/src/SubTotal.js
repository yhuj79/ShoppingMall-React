import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';

function SubTotal() {
    return (
        <StyledSubTotal>
            <h2>장바구니 총합</h2>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총액 ( 0 items) : <strong>0원</strong>
                        </p>
                        <StyledSmall className="subtotal_gift">
                            <input type="checkbox" />체크박스입니다
                        </StyledSmall>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"₩"}
            />
            <StyledButton>결제하기</StyledButton>
        </StyledSubTotal>
    );
}
const StyledSubTotal = styled.div`
    display: flex; flex-direction: column;
    background-color: #f3f3f3;
    width: 300px;
    height: 100px;
    padding: 20px;
    border: 1px solid #dddddd; border-radius: 5px;
`
const StyledSmall = styled.small`
    display: flex;
    align-items: center;

    .input {
        margin-right: 5px;
    }
`
const StyledButton = styled.button`
    background-color: #f0c14b;
    border-radius: 2px;
    width: 100%; height: 30px;
    border: 1px solid;
    margin-top: 15px;
`
export default SubTotal;