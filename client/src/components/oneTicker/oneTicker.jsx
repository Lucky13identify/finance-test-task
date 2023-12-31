import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { createTransition } from '../../utils/cssTransition';
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
  const nodeRef = useRef(null);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const { change_percent, dividend, change, exchange, last_trade_time, price } =
    ticker;

  useEffect(() => {
    setIsVisible(true);
  }, [change]);

  const isNegativeChange = change && change.includes('-');

  const deleteTicker = () => {
    dispatch(removeTicker(ticker.ticker));
    Notiflix.Notify.info(
      `You have removed the ${ticker.ticker} ticker. To bring it back, please refresh the page.`
    );
  };

  // const  = 300;

  // const defaultStyle = {
  //   transition: `opacity ${duration}ms ease-in-out`,
  //   opacity: 0,
  // };

  // const transitionStyles = {
  //   entering: { opacity: 1 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
  // };

  return (
    <>
      <li className="one-ticker">
        <Container>
          <Value>
            <Ticker ticker={ticker.ticker}>{ticker.ticker}</Ticker>
          </Value>
          <Value>
            {createTransition(
              nodeRef,
              isVisible,
              <ProfitOrLoss
                result={isNegativeChange ? isNegativeChange.toString() : ''}
              >
                {change ? replaceDotsWithCommas(change) + '$' : ''}
              </ProfitOrLoss>
            )}
          </Value>
          <Value>
            {createTransition(
              nodeRef,
              isVisible,
              <ProfitOrLoss
                result={isNegativeChange ? isNegativeChange.toString() : ''}
              >
                {isNegativeChange
                  ? `↓ ${Math.floor(change_percent * 100)}`
                  : `↑ ${Math.floor(change_percent * 100)}`}
                %
              </ProfitOrLoss>
            )}
          </Value>
          <Value>
            {createTransition(
              nodeRef,
              isVisible,
              <ProfitOrLoss
                result={isNegativeChange ? isNegativeChange.toString() : ''}
              >
                {isNegativeChange
                  ? `↓ ${replaceDotsWithCommas(ticker.yield)}`
                  : `↑ ${replaceDotsWithCommas(ticker.yield)}`}
              </ProfitOrLoss>
            )}
          </Value>
          <Value>
            {createTransition(
              nodeRef,
              isVisible,
              <p>{replaceDotsWithCommas((dividend * 10).toFixed(2))}</p>
            )}
          </Value>
          <Value>
            {createTransition(
              nodeRef,
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
            <Button type="button" onClick={deleteTicker}>
              Delete
            </Button>
          </Value>
        </Container>
      </li>
    </>
  );
}
