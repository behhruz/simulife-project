import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { FaChartLine, FaBuilding, FaDollarSign, FaUser, FaListAlt } from 'react-icons/fa';
import './styles.css';
import Home from './pages/Home';
import Investments from './pages/Investments';
import Business from './pages/Business';
import Earnings from './pages/Earnings';
import Profile from './pages/Profile';
import Awards from './components/Awards';
import NFT from './components/NFT';
import Islands from './components/Islands';
import IslandDetail from './components/IslandDetail';
import AwardDetail from './components/AwardsDetail';
import NFTDetail from './components/NFTDetail';
import Coins from './components/Coins';

function App() {
  const [islands, setIslands] = useState([]);
  const [awards, setAwards] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [loadingIslands, setLoadingIslands] = useState(true);
  const [loadingAwards, setLoadingAwards] = useState(true);
  const [loadingNFTs, setLoadingNFTs] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIslands = async () => {
      try {
        const response = await fetch('http://localhost:3000/Island');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setIslands(data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingIslands(false);
      }
    };

    const fetchAwards = async () => {
      try {
        const response = await fetch('http://localhost:3000/Awards');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setAwards(data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingAwards(false);
      }
    };

    const fetchNFTs = async () => {
      try {
        const response = await fetch('http://localhost:3000/NFT');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setNfts(data);
        } else {
          throw new Error('Data structure is not as expected');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingNFTs(false);
      }
    };

    fetchIslands();
    fetchAwards();
    fetchNFTs();
  }, []);

  if (loadingIslands || loadingAwards || loadingNFTs) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/home" element={<Home islands={islands} />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/business" element={<Business />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/islands" element={<Islands />} />
          <Route path="/island/:id" element={<IslandDetail islands={islands} />} />
          <Route path="/award/:id" element={<AwardDetail awards={awards} />} />
          <Route path="/nft/:id" element={<NFTDetail nfts={nfts} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>

      <nav className="bottom-nav">
        <NavLink to="/investments" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <FaChartLine />
          <span>Инвестиции</span>
        </NavLink>
        <NavLink to="/business" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <FaBuilding />
          <span>Бизнес</span>
        </NavLink>
        <NavLink to="/earnings" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <FaDollarSign />
          <span>Заработок</span>
        </NavLink>
        <NavLink to="/home" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <FaListAlt />
          <span>Приложение</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <FaUser />
          <span>Профиль</span>
        </NavLink>
      </nav>
    </>
  );
}

export default App;
