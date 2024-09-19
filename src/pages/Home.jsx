import { Link } from 'react-router-dom'; // Add this import

import award1Img from '../assets/award1.png'; // Adjust the path
import nft1Img from '../assets/nft1.png';
import island1Img from '../assets/island1.png';

function Home() {
  return (
    <div className="home-container">
      <Link to="/awards">
        <div className="card">
          <img src={award1Img} alt="Знаки отличия" />
          <h3>Знаки отличия</h3>
          <p>0 из 5</p>
        </div>
      </Link>

      <Link to="/nft">
        <div className="card">
          <img src={nft1Img} alt="NFT" />
          <h3>NFT</h3>
          <p>0 из 21</p>
        </div>
      </Link>

      <Link to="/islands">
        <div className="card">
          <img src={island1Img} alt="Острова" />
          <h3>Острова</h3>
          <p>0 из 10</p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
