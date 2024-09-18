import React from 'react';
import '../styles.css';

function Investments() {
  return (
    <div className="page-content">
      <h1>Мой портфель</h1>
      <div className="portfolio">
        <p>Стоимость портфеля</p>
        <h2>$0,00</h2>
        <p className="green-text">+ $0.00 (0.00%) за все время</p>
        <p>Дивидендная доходность в час</p>
        <h2>$0,00</h2>
      </div>
      <div className="market-button">
        <button>Фондовый рынок</button>
      </div>
    </div>
  );
}

export default Investments;
