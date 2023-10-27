import { createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export const fetchTickers = createAsyncThunk('tickers', async () => {
  try {
    socket.emit('start');

    return new Promise((resolve, reject) => {
      const handleTicker = quotes => {
        resolve(quotes);

        socket.off('ticker', handleTicker);
      };

      socket.on('error', error => {
        reject(error);
        socket.off('ticker', handleTicker);
      });

      socket.on('ticker', handleTicker);
    });
  } catch (error) {
    throw error;
  }
});
