import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses } from '../components/businessSlice';
import { fetchHourPrice } from '../utils/fetchHourPrice'; // Albatta funksiyani import qilamiz

const HomePage = () => {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state.businesses.businesses);
  const status = useSelector((state) => state.businesses.status);
  const error = useSelector((state) => state.businesses.error);
  const [totalIncome, setTotalIncome] = useState(0);
  const [hourPrice, setHourPrice] = useState(''); // Soat narxi uchun state

  const navigate = useNavigate();

  // Redux orqali bizneslarni olish
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBusinesses());
    }
  }, [status, dispatch]);

  // Umumiy daromadni hisoblash
  useEffect(() => {
    if (businesses.length > 0) {
      calculateTotalIncome(businesses);
    }
  }, [businesses]);

  const calculateTotalIncome = (businesses) => {
    const income = businesses.reduce((sum, business) => {
      const costValue = parseFloat(business.cost.replace(/[^\d.-]/g, ''));
      return sum + (isNaN(costValue) ? 0 : costValue);
    }, 0);
    setTotalIncome(income);
  };

  // Soat narxini olish
  useEffect(() => {
    const loadHourPrice = async () => {
      try {
        const price = await fetchHourPrice();
        setHourPrice(price);
      } catch (error) {
        console.error('Error fetching hour price:', error);
      }
    };

    loadHourPrice();
  }, []);

  const handleOtkritBiznes = () => {
    navigate('/otkritbiznes');
  };

  const handleSliyanieBiznesov = () => {
    navigate('/sliyaniebiznesov');
  };

  if (status === 'loading') {
    return <div className="p-6 bg-white shadow-lg rounded-lg text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 bg-red-100 text-red-700 shadow-lg rounded-lg text-center">Error: {error}</div>;
  }

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Бизнес</h1>
        <p className="text-xl text-gray-700 mb-6">
          Часовик ставка: <span className="font-semibold">{hourPrice}</span>
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleOtkritBiznes}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Открыть бизнес
          </button>
          <button
            onClick={handleSliyanieBiznesov}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Слияние бизнесов
          </button>
        </div>
        <div className="mt-6">
          <p className="text-lg text-gray-600">
            Общее количество бизнеса: <span className="font-semibold">{businesses.length}</span>
          </p>
          <p className="text-lg text-gray-600">
            Общий доход: <span className="font-semibold">{totalIncome}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
