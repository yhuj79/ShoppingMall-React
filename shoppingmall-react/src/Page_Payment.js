import React from "react";
import Header from "./Header";
import MainTitle from "./MainTitle";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KVi6LGZWDYVXxlvUWydI610tcNHJYv2bfjmwaBAswTW2qhuCQAkb08E5WVfxd9IYEs13xJ6Il0qhtevVXkYToeP00UYYFq9KR"
);
function Page_Payment(props) {
  return (
    <div>
      <Header />
      <MainTitle />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </div>
  );
}
export default Page_Payment;
