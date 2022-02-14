import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMain from './Page_Main';
import PageCheckout from './Page_Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/checkout" element={<PageCheckout />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;