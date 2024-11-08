import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitBooking = createAsyncThunk(
  'booking/submit',
  async (bookingData) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', bookingData);
    return response.data;
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookingData: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookingData = action.payload;
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;