import React from 'react';
import { useParams } from 'react-router-dom';

const IslandDetail = ({ islands }) => {
  const { id } = useParams(); // Get the ID from the URL

  // Flatten the nested array structure and find the island by ID
  const island = islands[0].find(island => island.id === parseInt(id)); // Access the first array of islands

  if (!island) {
    return <div>Island not found</div>; // Handle case where island is not found
  }

  return (
    <div className="island-detail">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <p>{island.description}</p>
      <p>Cost: ${island.cost}</p>
    </div>
  );
};

export default IslandDetail;
