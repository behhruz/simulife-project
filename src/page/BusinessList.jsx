import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchBusinesses } from '../components/businessSlice';

const BusinessList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const businesses = useSelector((state) => state.businesses.businesses);
  const status = useSelector((state) => state.businesses.status);
  const error = useSelector((state) => state.businesses.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBusinesses());
    }
  }, [status, dispatch]);

  const handleClick = (business) => {
    if (business.children && business.children.length > 0) {
      navigate(`/business/${business.id}`);
    } else {
      navigate(`/businesspage/${business.id}`); // Подкорректируйте путь по необходимости
    }
  };

  if (status === 'loading') return <div>Загрузка...</div>;
  if (status === 'failed') return <div>Ошибка: {error}</div>;

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <header className="bg-blue-800 p-6 flex justify-between text-white shadow-md">
        <p className="text-3xl font-bold">Список бизнесов</p>
        <a href="/" className='font-semibold pt-2'>Назад</a>
      </header>
      <div className="p-6 bg-white shadow-lg rounded-lg flex-1 mt-6 mx-auto max-w-4xl">
        <ul className="list-none p-0 flex flex-wrap justify-center items-center gap-16 ">
          {businesses.map((business) => (
            <li
              key={business.id}
              onClick={() => handleClick(business)}
              className="cursor-pointer p-6 bg-gray-100 rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-200 transition"
            >
              <div className="flex justify-center flex-col items-center ">
                <p className="text-xl font-semibold text-blue-700">{business.name}</p>
                <p className="text-gray-800 font-medium">{business.cost}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessList;
