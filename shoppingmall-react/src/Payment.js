import React, { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./Reducer";

import MuiPhoneNumber from "material-ui-phone-number";
import PaymentCheckout from "./PaymentCheckout";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setError(event.error ? event.error.message : "");
  };

  const [checkedInputs, setCheckedInputs] = useState([]);
  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      // console.log("약관 내용 확인 : check");
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      // console.log("약관 내용 확인 : none");
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

  const handleClick = (e) => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    navigate("/");
  };

  return (
    <PaymentDiv>
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <BackLink>
          뒤로 돌아가려면 클릭하세요 ( {basket?.length} Item )
        </BackLink>
      </Link>
      <Section>
        <Title>
          <h3>배송지 정보</h3>
        </Title>
        <Address>
          <p>{user?.email} 님</p>
          <AddressOption>
            <p>수령인&emsp;</p>
            <AddressRecipient placeholder=" 50자 이내" />
          </AddressOption>
          <AddressOption>
            <p>연락처&emsp;&nbsp;</p>
            <MuiPhoneNumber
              defaultCountry={"kr"}
              preferredCountries={["kr"]}
              disableAreaCodes={true}
              variant="outlined"
              type="tel"
            />
          </AddressOption>
          <AddressOption>
            <p>주소&emsp;&emsp;</p>
            <div>
              <AddressRoadName placeholder=" 도로명 / 지번" />
              <br />
              <AddressDetail placeholder=" 상세주소" />
            </div>
          </AddressOption>
        </Address>
      </Section>
      <CustomSection>
        <Title>
          <h3 style={{ marginBottom: "30px" }}>상품 목록</h3>
        </Title>
        <CheckoutList>
          {basket.map((item, uniqueID) => (
            <PaymentCheckout
              id={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              price={item.price}
              key={uniqueID}
            />
          ))}
        </CheckoutList>
      </CustomSection>
      <Section>
        <Title>
          <h3>결제</h3>
        </Title>
        <FinalPayment>
          <form>
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
                  <ClauseDiv>
                    <Clause>
                      이 사이트는 개인 연습용 프로젝트 입니다. <br />
                      결제는 실행되지 않으며, 제품도 실제로 배송되지 않습니다.
                      <br />
                      결제 이후 사이트가 초기화됩니다.
                      <br />
                    </Clause>
                  </ClauseDiv>
                  <CheckBox>
                    <input
                      type="checkbox"
                      id="check"
                      onChange={(e) => {
                        changeHandler(e.currentTarget.checked, "check");
                      }}
                      checked={checkedInputs.includes("check") ? true : false}
                    />
                    &nbsp;약관을 모두 확인하였으며, 결제 진행에 동의합니다.
                  </CheckBox>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₩ "}
            />
            <PayButton
              disabled={disabled}
              onClick={handleClick}
              style={
                disabled ? { backgroundColor: "#B8B8B8" } : { afterButton }
              }
            >
              결제하기
            </PayButton>
          </form>
        </FinalPayment>
      </Section>
    </PaymentDiv>
  );
}
const PaymentDiv = styled.div`
  color: black;
  width: 1500px;
  margin: auto; // 중앙 정렬

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    zoom: 0.6;
  }
  @media screen and (max-width: 767px) {
    zoom: 0.25;
  }
`;
const BackLink = styled.h1`
  background-color: #f2cb61;
  text-align: center;
  padding: 10px;
  margin: 20px 30px 30px;
  font-weight: 400;
  color: black;
  border-radius: 15px;
  border: 3px solid #cea73d;

  &:hover {
    background: #e0b94f;
  }
`;
const Section = styled.div`
  display: flex;
  background-color: #d5d5d5;
  border: 3px solid #7b7b7b;
  padding: 30px;
  margin: 30px;
  border-radius: 15px;
`;
const CustomSection = styled(Section)`
  padding-bottom: 2px;
`;
const Title = styled.div`
  flex: 0.2;
`;
const Address = styled.div`
  flex: 0.8;
`;
const CheckoutList = styled.div`
  flex: 0.8;
`;
const FinalPayment = styled.div`
  flex: 0.8;
`;
const AddressOption = styled.div`
  display: flex;
  margin-top: 20px;

  .MuiInputBase-input {
    // material-ui-phone-number
    padding: 3px !important;
  }
`;
const AddressRecipient = styled.input`
  width: 100px;
  height: 25px;
  background-color: #d5d5d5;
  margin-left: 4px;
  margin-right: 5px;
  border: 1px solid #9f9f9f;
  border-radius: 5px;
`;
const AddressRoadName = styled(AddressRecipient)`
  width: 247px;
  margin-bottom: 5px;
`;
const AddressDetail = styled(AddressRoadName)``;
const CardInput = styled.div`
  width: 550px;
  line-height: 2;
  background-color: #f6f6f6;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #c0c0c0;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    zoom: 1.7;
  }
  @media screen and (max-width: 767px) {
    zoom: 3.3;
    width: 300px;
  }
`;
const ErrorText = styled.p`
  color: #ff0000;
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
`;
const ClauseDiv = styled.div`
  width: 560px;
  background-color: #f6f6f6;
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #c0c0c0;

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    width: 965px;
  }
`;
const Clause = styled.p`
  font-size: 0.82rem;
`;
const CheckBox = styled.small`
  display: flex;
  align-items: center;
  width: 400px;
  margin-top: 10px;

  .input {
    margin-right: 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    width: 965px;
  }
  @media screen and (max-width: 767px) {
    zoom: 1.3;
    width: 650px;
  }
`;
const PayButton = styled.button`
  background-color: #f2cb61;
  border-radius: 8px;
  width: 580px;
  height: 40px;
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: bold;
  border: 1px solid #828282;

  &:hover {
    background: #e0b94f;
  }

  @media screen and (min-width: 768px) and (max-width: 1368px) {
    height: 60px;
  }
  @media screen and (max-width: 767px) {
    zoom: 1.3;
  }
`;
export default Payment;
