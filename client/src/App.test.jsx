import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('App Component', () => {
  it('should render the App component and fetch tickers', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('AAPL')).toBeInTheDocument();
    });

    const input = screen.getByRole('textbox');
    userEvent.clear(input);
    userEvent.type(input, '10000');
    act(() => {
      userEvent.click(screen.getByText('Set interval'));
    });

    await sleep(100);
  });
});
