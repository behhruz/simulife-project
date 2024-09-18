import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, updateUser } from '../slices/usersSlice'; // Добавляем экшен updateUser

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const [balance, setBalance] = useState(0);
  const [level, setLevel] = useState(1);
  const [forClick, setForClick] = useState(0);
  const [userId, setUserId] = useState(null); // Хранит id пользователя

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (users.length > 0) {
      const user = users[0];
      setUserId(user.id); // Сохраняем id пользователя
      setBalance(user.Balance);
      setForClick(user.ForClick);
      setLevel(user.Level);
    }
  }, [users]);

  const handleClick = () => {
    const newBalance = balance + forClick;
    const newLevel = calculateLevel(newBalance);

    setBalance(newBalance);
    setLevel(newLevel);
    setForClick(newForClickValue(newLevel));

    // Обновляем данные на сервере
    dispatch(updateUser({ id: userId, Balance: newBalance, Level: newLevel, ForClick: newForClickValue(newLevel) }));
  };

  const calculateLevel = (currentBalance) => {
    const levelThresholds = [
      100, 500, 700, 1000, 1200, 1500, 2000, 3000, 4200, 5500, 
      7000, 10000, 13000, 17000, 20000, 22000, 25000, 30000, 35000, 40000
    ];
    return levelThresholds.findIndex(threshold => currentBalance < threshold) + 1 || 20;
  };

  const newForClickValue = (newLevel) => {
    return newLevel; // Пример: каждый новый уровень добавляет 1 к ForClick
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='bg-gradient-to-r from-[#69e3d5] to-[#1e2e41] w-full p-[20px] flex flex-col gap-[30px] rounded-[20px]'>
        <div className='w-full bg-[#262626] rounded-[20px] items-center h-[130px] bg-[url(https://taraskaduk.com/posts/2017-11-26-pixel-maps/pixel-maps_files/figure-html5/plot-1.png)] bg-cover bg-norepeat  px-[20px] py-[10px]'>
          <div>
            <div className='flex text-[white] text-[20px] justify-between'>
              <div className='flex items-center gap-[10px]'>
                <img className='w-[30px]' src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="Mastercard logo" />
                <p>**** 7439</p>
              </div>
              <p>05/26</p>
            </div>

            <p className='text-[grey] text-[15px]'>Баланс:</p>
            <p className='text-[white] text-[35px]'><b>${balance}</b></p>
          </div>
        </div>
        <div className='w-full h-[130px] rounded-[20px] p-[20px]' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
          <p className='text-[#f2f2f2]'><b className='text-[white] text-[25px]'>${forClick}</b> за клик</p>
          <p className='text-[#f2f2f2]'><b className='text-[white] text-[20px]'>{level}</b> уровень</p>
        </div>
      </div>
      <div className='relative h-[40vh]'>
        <button 
          onClick={handleClick} 
          className='relative w-full h-[100%] flex justify-center items-center border-none'
        >
          <img className='w-[80px]' src="https://www.freeiconspng.com/thumbs/click-png/hands-click-png-icon-5.png" alt="" />
        </button>
        <p className='absolute bottom-5 px-5 flex justify-center items-center text-center text-black'>
          Кликайте в этой области, чтобы зарабатывать деньги
        </p>
      </div>
    </div>
  );
};

export default UsersList;
