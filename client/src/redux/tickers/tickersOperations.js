import { createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export const fetchTickers = createAsyncThunk('tickers', async () => {
  try {
    socket.emit('start');

    return new Promise(resolve => {
      socket.on('ticker', quotes => {
        resolve(quotes);
      });
    });
  } catch (error) {
    throw error;
  }
});
