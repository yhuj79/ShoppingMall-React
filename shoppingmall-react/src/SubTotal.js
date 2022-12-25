import React, { useState } from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useNavigate } from "react-router-dom";

function SubTotal() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [checkedInputs, setCheckedInputs] = useState([]);
  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      // console.log("주문 내용 확인 : check");
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      // console.log("주문 내용 확인 : none");
    }
  };
  const isChecked = checkedInputs.length === 1;
  const disabled = !isChecked;

  const afterButton = {
    backgroundColor: "#F2CB61",
    "&:hover": {
      backgroundColor: "#E0B94F",
    },
  };

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
              <input
                type="checkbox"
                id="check"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "check");
                }}
                checked={checkedInputs.includes("check") ? true : false}
              />
              &nbsp;주문 내용을 확인하였습니다.
            </CheckBox>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <PayButton
        disabled={disabled}
        onClick={(e) => {
          basket.length === 0
            ? alert("상품이 선택되지 않았습니다.")
            : navigate("/payment");
        }}
        style={disabled ? { backgroundColor: "#B8B8B8" } : { afterButton }}
      >
        결제 창으로 이동
      </PayButton>
    </SubTotalDiv>
  );
}
const SubTotalDiv = styled.div`
  flex-direction: column;
  position: sticky;
  left: 98%;
  bottom: 3%; // 스크롤 영향 안 받게 고정
  background-color: #d5d5d5;
  border: 3px solid #7b7b7b;
  width: 350px;
  height: 180px;
  padding: 30px;
  margin: 20px 15px 20px;
  border-radius: 15px;

  & > h2 {
    margin-bottom: 15px;
    font-size: 1.7rem;
    font-family: Secular One;
  }
  & > h3 > span {
    font-size: 2rem;
  }
`;
const CheckBox = styled.small`
  display: flex;
  align-items: center;
  width: 300px;
  margin-top: 20px;

  .input {
    margin-right: 5px;
  }
`;
const PayButton = styled.button`
  background-color: #f2cb61;
  border-radius: 2px;
  width: 100%;
  height: 40px;
  border: 1px solid #828282;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: #e0b94f;
  }
`;
export default SubTotal;