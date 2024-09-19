import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses } from '../components/businessSlice';

const BusinessPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const business = useSelector((state) => state.businesses.selectedBusiness);
  const status = useSelector((state) => state.businesses.status);
  const error = useSelector((state) => state.businesses.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBusinesses(id));
    }
  }, [status, dispatch, id]);

  if (status === 'loading') return <div>Загрузка...</div>;
  if (status === 'failed') return <div>Ошибка: {error}</div>;

  if (!business) {
    return <p>Бизнес не найден.</p>;
  }

  return (
    <div>
      <h2>{business.name}</h2>
      <p>Цена: {business.cost}</p>
    </div>
  );
};

export default BusinessPage;
