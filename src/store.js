import { configureStore } from '@reduxjs/toolkit';
import businessReducer from './components/businessSlice'; // Bu yerda o'zingizning reducerni import qiling

const store = configureStore({
  reducer: {
    businesses: businessReducer, // O'zingizning reducerni qo'shish
  },
});

export default store;
