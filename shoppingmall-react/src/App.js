import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageMain from './Page_Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/checkout"
            element={<h1 style={{ color: 'white' }}>ShoppingBasket Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;