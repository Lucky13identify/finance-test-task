// Ваш файл теста (App.test.js)
import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { fetchTickers } from './redux/tickers/tickersOperations';

const mockStore = configureStore([]);

jest.mock('./redux/tickers/tickersOperations', () => ({
  fetchTickers: jest.fn(),
}));

describe('App', () => {
  it('renders the App component', async () => {
    const store = mockStore({});

    // Заглушка для fetchTickers
    fetchTickers.mockImplementation(() => ({
      type: 'FETCH_TICKERS',
      payload: [], // Здесь может быть ваш тестовый результат
    }));

    // Запускаем компонент и ждем завершения действий
    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    // Проверяем, что fetchTickers был вызван
    expect(fetchTickers).toHaveBeenCalled();
  });
});
