import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { OneTicker } from './oneTicker';
import { store } from '../../redux/store';

export const data = {
  change: '76,65',
  change_percent: '0.06',
  dividend: '0.23',
  exchange: 'NASDAQ',
  id: 've6jdrk8ujr',
  last_trade_time: '2023-10-27T11:14:53.000Z',
  price: '281.55',
  ticker: 'AAPL',
  yield: '0.91',
};

describe('OneTicker Component', () => {
  it('should render one ticker', () => {
    render(
      <Provider store={store}>
        <OneTicker ticker={data} />
      </Provider>
    );

    expect(screen.getByText('76,65$')).toBeInTheDocument();
    expect(screen.getByText('↑ 6%')).toBeInTheDocument();
    expect(screen.getByText('2,30')).toBeInTheDocument();
    expect(screen.getByText('NASDAQ')).toBeInTheDocument();
    expect(screen.getByText('10.27.2023')).toBeInTheDocument();
    expect(screen.getByText('281 550 $')).toBeInTheDocument();
    expect(screen.getByText('↑ 0,91')).toBeInTheDocument();
    expect(screen.getByText('AAPL')).toBeInTheDocument();
  });
  it('test of removing a ticker', () => {
    render(
      <Provider store={store}>
        <OneTicker ticker={data} />
      </Provider>
    );

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(
      screen.getByText(
        'You have removed the AAPL ticker. To bring it back, please refresh the page.'
      )
    ).toBeInTheDocument();
  });
  it('snapshot', () => {
    const list = render(
      <Provider store={store}>
        <OneTicker ticker={data} />
      </Provider>
    );

    expect(list).toMatchSnapshot();
  });
});
