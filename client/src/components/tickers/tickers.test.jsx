import { render, screen } from '@testing-library/react';
import { TickersList } from './tickers';
import { data } from '../oneTicker/oneTicker.test';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Tickers Component', () => {
  it('should render container of tickers', () => {
    render(
      <Provider store={store}>
        <TickersList key={data.id} ticker={data} />
      </Provider>
    );

    expect(screen.getByText('Tickers:')).toBeInTheDocument();
  });
  it('snapshot', () => {
    const list = render(
      <Provider store={store}>
        <TickersList key={data.id} ticker={data} />
      </Provider>
    );

    expect(list).toMatchSnapshot();
  });
});
