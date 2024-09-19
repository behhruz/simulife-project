import React from 'react';
import { useParams } from 'react-router-dom';

const AwardDetail = ({ awards }) => {
  const { id } = useParams(); // Get the ID from the URL
  const award = awards.find(award => award.id === id); // Find the award by ID

  if (!award) {
    return <div>Award not found</div>; // Handle case where award is not found
  }

  return (
    <div className="award-detail">
      <h2>{award.name}</h2>
      <img src={award.img} alt={award.name} />
      <p>{award.description}</p>
      <p>Cost: ${award.cost}</p>
    </div>
  );
};

export default AwardDetail;
