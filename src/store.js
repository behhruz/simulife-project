import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice'; // Проверьте правильность пути

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
