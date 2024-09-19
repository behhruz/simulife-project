import React from 'react';
import { useParams } from 'react-router-dom';

const NFTDetail = ({ nfts }) => {
  const { id } = useParams(); // Get the ID from the URL
  const nft = nfts.find(nft => nft.id === id); // Find the NFT by ID

  if (!nft) {
    return <div>NFT not found</div>; // Handle case where NFT is not found
  }

  return (
    <div className="nft-detail">
      <h2>{nft.name}</h2>
      <img src={nft.img} alt={nft.name} />
      <p>{nft.description}</p>
      <p>Cost: ${nft.cost}</p>
    </div>
  );
};

export default NFTDetail;
