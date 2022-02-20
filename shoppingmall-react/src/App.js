import './App.css';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMain from './Page_Main';
import PageCheckout from './Page_Checkout';
import PageLogin from './Login';

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []) // 한 번만 실행되도록 deps 설정
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/" element={<PageMain />} />
          <Route path="/checkout" element={<PageCheckout />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;