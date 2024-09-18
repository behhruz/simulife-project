import React, { useState } from 'react';
import FunctionLeft from '../Function/FunctionLeft';

const Coins = () => {
  const [activeContent, setActiveContent] = useState(null); // Faol kontentni saqlash

  const handleClickRinok = () => {
    setActiveContent('rinok'); // "Ренок" bosilganda "rinok" kontenti faol bo'ladi
  };

  const handleClickCollection = () => {
    setActiveContent('collection'); // "Моя коллекция" bosilganda "collection" kontenti faol bo'ladi
  };

  return (
    <>
      <div className='flex items-center ml-28 mt-3'>
        <div className='mr-3'>
          <FunctionLeft />
        </div>
        <div>
          <h1 className='font-bold text-[30px]'>
            Moнeты
          </h1>
          <div className='flex items-center'>
            <p className='text-[20px]'>Баланс:</p>
            <span className='ml-3 font-bold text-[20px]'>$</span>
            <p className='font-bold text-[20px]'>0</p>
          </div>
        </div>
      </div>
      <hr className="w-full mt-6" />
      <div className='flex items-center justify-around mt-5'>
        <div>
          <p
            onClick={handleClickRinok}
            style={{ color: activeContent === 'rinok' ? 'blue' : 'gray' }}
          >
            Ренок
          </p>
        </div>
        <div>
          <p
            onClick={handleClickCollection}
            style={{ color: activeContent === 'collection' ? 'blue' : 'gray' }}
          >
            Моя коллекция
          </p>
        </div>
      </div>
      <div className='text-center mt-[180px]'>
        {activeContent === 'rinok' && (
          <div className='mt-5'>
            <h2 className='font-bold text-[24px]'>Ренок</h2>
            <p>Bu yerda "Ренок" sahifasining kontenti ko'rsatiladi.</p>
          </div>
        )}
        {activeContent === 'collection' && (
          <div className='mt-5'>
            <p className='text-gray-500'>В вашей коллекции нет предметов</p>
          </div>
        )}
      </div>

    </>
  );
}

export default Coins;
