import React from 'react';
import { render, screen } from '@testing-library/react';
import { OneTicker } from './oneTicker'; // Убедитесь, что вы используете правильный путь к компоненту

describe('OneTicker', () => {
  const tickerData = {
    ticker: 'AAPL',
    change: 10.0,
    change_percent: '2.5%',
    dividend: 1.5,
    exchange: 'NASDAQ',
    last_trade_time: '2023-10-25T14:30:00.000Z',
    price: 150.0,
    yield: 1.2,
  };

  it('renders the ticker information', () => {
    render(<OneTicker ticker={tickerData} />);

    // Проверьте, что компонент отображает правильные данные на основе данных, переданных в props
    expect(screen.getByText(tickerData.ticker)).toBeInTheDocument();
    expect(screen.getByText(tickerData.change.toString())).toBeInTheDocument();
    expect(screen.getByText(tickerData.change_percent)).toBeInTheDocument();
    expect(
      screen.getByText(tickerData.dividend.toString())
    ).toBeInTheDocument();
    expect(screen.getByText(tickerData.exchange)).toBeInTheDocument();

    // Используйте регулярное выражение для проверки формата даты
    expect(screen.getByText(/(\d{2}.\d{2}.\d{4})/)).toBeInTheDocument();

    expect(screen.getByText(tickerData.yield.toString())).toBeInTheDocument();
    expect(screen.getByText(tickerData.price.toString())).toBeInTheDocument();
  });
});
