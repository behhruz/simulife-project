import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronous thunk action to fetch businesses
export const fetchBusinesses = createAsyncThunk(
  'businesses/fetchBusinesses',
  async () => {
    const response = await fetch('http://localhost:5001/businesses');
    const data = await response.json();
    return data;
  }
);

const businessSlice = createSlice({
  name: 'businesses',
  initialState: {
    businesses: [],
    selectedBusiness: null,
    status: 'idle', // Status for loading
    error: null, // Error state
  },
  reducers: {
    setSelectedBusiness(state, action) {
      state.selectedBusiness = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusinesses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBusinesses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.businesses = action.payload; // Store the fetched data
      })
      .addCase(fetchBusinesses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedBusiness } = businessSlice.actions;

export default businessSlice.reducer;
