import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Tickers from './tickers'; // Подставьте правильный путь к вашему компоненту Tickers

const mockStore = configureStore(); // Создаем вспомогательное хранилище Redux

describe('Tickers', () => {
  it('renders the list of tickers', () => {
    // Создаем фиктивное состояние Redux с тестовыми данными
    const initialState = {
      tickers: {
        tickers: [
          {
            ticker: 'AAPL',
            change: 10.0,
            change_percent: '2.5%',
            dividend: 1.5,
            exchange: 'NASDAQ',
            last_trade_time: '2023-10-25T14:30:00.000Z',
            price: 150.0,
            yield: 1.2,
          },
          // Добавьте другие тестовые данные, если необходимо
        ],
      },
    };
    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <Tickers />
      </Provider>
    );

    // Проверьте, что Tickers компонент отобразил нужное количество тикеров
    const tickerElements = container.querySelectorAll('.one-ticker'); // Замените '.one-ticker' на правильный селектор
    expect(tickerElements.length).toBe(initialState.tickers.tickers.length);
  });
});
