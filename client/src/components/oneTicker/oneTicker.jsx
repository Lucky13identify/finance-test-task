import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { CreateCSSTransition } from '../../utils/cssTransition';
import { thousandsSeparator } from '../../utils/formatNumberWithSpaces';
import { replaceDotsWithCommas } from '../../utils/replaceDots';
import { removeTicker } from '../../redux/tickers/tickersSlice';
import { formatTradeDate } from '../../utils/formattedDate';
import {
  Container,
  Value,
  TextAndTime,
  Ticker,
  ProfitOrLoss,
  Button,
} from './oneTicker.styled';

export function OneTicker({ ticker }) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const { change_percent, dividend, change, exchange, last_trade_time, price } =
    ticker;

  useEffect(() => {
    setIsVisible(true);
  }, [change]);

  const deleteTicker = () => {
    dispatch(removeTicker(ticker.ticker));
    Notiflix.Notify.info(
      `You have removed the ${ticker.ticker} ticker. To bring it back, please refresh the page.`
    );
  };

  return (
    <>
      <li className="one-ticker">
        <Container>
          <Value>
            <Ticker ticker={ticker.ticker}>{ticker.ticker}</Ticker>
          </Value>
          <Value>
            {CreateCSSTransition(
              isVisible,
              <ProfitOrLoss result={change.includes('-').toString()}>
                {replaceDotsWithCommas(change)} $
              </ProfitOrLoss>
            )}
          </Value>
          <Value>
            {CreateCSSTransition(
              isVisible,
              <ProfitOrLoss result={change.includes('-').toString()}>
                {change.includes('-')
                  ? `↓ ${Math.floor(change_percent * 100)}`
                  : `↑ ${Math.floor(change_percent * 100)}`}
                %
              </ProfitOrLoss>
            )}
          </Value>
          <Value>
            {CreateCSSTransition(
              isVisible,
              <ProfitOrLoss result={change.includes('-').toString()}>
                {change.includes('-')
                  ? `↓ ${replaceDotsWithCommas(ticker.yield)}`
                  : `↑ ${replaceDotsWithCommas(ticker.yield)}`}
              </ProfitOrLoss>
            )}
          </Value>
          <Value>
            {CreateCSSTransition(
              isVisible,
              <p>{replaceDotsWithCommas((dividend * 10).toFixed(2))}</p>
            )}
          </Value>
          <Value>
            {CreateCSSTransition(
              isVisible,
              <p>{thousandsSeparator(price)} $</p>
            )}
          </Value>
          <TextAndTime>
            <p>{exchange}</p>
          </TextAndTime>
          <TextAndTime>
            <p>{formatTradeDate(last_trade_time)} </p>
          </TextAndTime>
          <Value>
            <Button onClick={deleteTicker}>Delete</Button>
          </Value>
        </Container>
      </li>
    </>
  );
}
