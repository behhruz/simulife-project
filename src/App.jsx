import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaChartLine, FaBuilding, FaDollarSign, FaUser } from 'react-icons/fa';
import './styles.css';
import Investments from './pages/Investments';
import Business from './pages/Business';
import Earnings from './pages/Earnings';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/investments" element={<Investments />} />
          <Route path="/business" element={<Business />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Investments />} />
        </Routes>

        <nav className="bottom-nav">
          <Link to="/investments">
            <FaChartLine />
            <span>Инвестиции</span>
          </Link>
          <Link to="/business">
            <FaBuilding />
            <span>Бизнес</span>
          </Link>
          <Link to="/earnings">
            <FaDollarSign />
            <span>Заработок</span>
          </Link>
          <Link to="/profile">
            <FaUser />
            <span>Профиль</span>
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
