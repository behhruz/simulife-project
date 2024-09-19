// Islands.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Islands() {
  const [islands, setIslands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/Island') // Ensure the correct path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Log the fetched data
        // Check if the first element exists and is an array
        if (Array.isArray(data) && Array.isArray(data[0])) {
          setIslands(data[0]); // Use data[0] to get the actual island data
        } else {
          throw new Error('Data structure is not as expected');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching islands data:', error); // Log the full error object
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-container">
      <h3>Острова</h3>
      {islands.length > 0 ? (
        islands.map((island) => (
          <div key={island.id} className="card">
            <Link to={`/island/${island.id}`}>
              <img src={island.img} alt={island.name} />
              <h4>{island.name}</h4>
              <p>{island.description}</p>
              <p>Cost: ${island.cost}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No islands found.</p>
      )}
    </div>
  );
}

export default Islands;
