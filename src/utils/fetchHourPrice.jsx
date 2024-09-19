// src/utils/fetchHourPrice.js
export const fetchHourPrice = async () => {
    try {
      const response = await fetch('http://localhost:5001/hourpirice');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.hour;
    } catch (error) {
      console.error('Error fetching hour price:', error);
      throw error;
    }
  };
  