import React from 'react';
import ReactDOM from 'react-dom/client'; // Измените импорт на react-dom/client
import { Provider } from 'react-redux';
import store from './store'; // Store ni to'g'ri import qilish
import App from './App';

// Yarating root ni createRoot yordamida
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendingni amalga oshiring
root.render(
  <Provider store={store}> {/* Store ni Provider ga uzatamiz */}
    <App />
  </Provider>
);
