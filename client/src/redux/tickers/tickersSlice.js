import { createSlice } from '@reduxjs/toolkit';
import { fetchTickers } from './tickersOperations';

const initialState = {
  tickers: [],
  deletedTickers: [],
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    removeTicker: (state, action) => {
      state.deletedTickers.push(action.payload);
      state.tickers = state.tickers.filter(
        ticker => ticker.ticker !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTickers.fulfilled, (state, action) => {
      state.tickers = action.payload.filter(
        ticker => ticker.ticker !== state.deletedTickers
      );
    });
  },
});

export const { removeTicker } = tickersSlice.actions;
export const tickersReducer = tickersSlice.reducer;
