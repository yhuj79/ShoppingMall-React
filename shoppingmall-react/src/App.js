import "./App.css";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageMain from "./Page_Main";
import PageCheckout from "./Page_Checkout";
import PageLogin from "./Login";
import PagePayment from "./Page_Payment";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{ basket, user }, dispatch] = useStateValue();

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
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={!user ? <PageLogin /> : <Navigate replace to="/" />}
          />
          <Route path="/" element={<PageMain />} />
          <Route path="/checkout" element={<PageCheckout />} />
          <Route
            path="/payment"
            element={
              basket.length === 0 || !user ? (
                <Navigate replace to="/" />
              ) : (
                <PagePayment />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
