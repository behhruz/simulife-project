import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const NFT = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch('http://localhost:3000/NFT'); // Ensure the endpoint is correct
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data[0])) { // Check if data is an array of arrays
          setNfts(data[0]); // Set the NFTs data
        } else {
          throw new Error('Data structure is not as expected');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/nft/${id}`); // Navigate to the NFTDetail page with the NFT ID
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card-container">
      {nfts.map((nft) => (
        <div key={nft.id} className="card" onClick={() => handleCardClick(nft.id)}> {/* Add onClick event */}
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
          <p>Value: {nft.cost} USD</p>
          <img src={nft.img} alt={nft.name} />
        </div>
      ))}
    </div>
  );
};

export default NFT;
