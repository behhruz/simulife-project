import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch('http://localhost:3000/Awards'); // Ensure the endpoint is correct
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setAwards(data);
        } else {
          throw new Error('Data structure is not as expected');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/award/${id}`); // Navigate to the AwardDetail page with the award ID
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card-container">
      {awards.map((award) => (
        <div key={award.id} className="card" onClick={() => handleCardClick(award.id)}> {/* Add onClick event */}
          <h3>{award.name}</h3>
          <p>{award.description}</p>
          <p>Value: {award.cost} USD</p> {/* Correct the property from value to cost */}
          <img src={award.img} alt={award.name} />
        </div>
      ))}
    </div>
  );
};

export default Awards;
