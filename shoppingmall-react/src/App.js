import "./App.css";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageMain from "./Page_Main";
import PageCheckout from "./Page_Checkout";
import PageLogin from "./Login";
import PagePayment from "./Page_Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); // deps

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/" element={<PageMain />} />
          <Route path="/checkout" element={<PageCheckout />} />
          <Route path="/payment" element={<PagePayment />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
