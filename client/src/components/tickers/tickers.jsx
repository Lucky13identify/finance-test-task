import { useSelector } from 'react-redux';
import { OneTicker } from '../oneTicker/oneTicker';
import {
  selectTickers,
  selectdeletedTickers,
} from '../../redux/tickers/selectors';
import { Container, Head } from './tickers.styled';

export function TickersList() {
  const tickersStore = useSelector(selectTickers);
  const deletedTickersStore = useSelector(selectdeletedTickers);

  const filteredTickers = tickersStore.tickers.filter(
    ticker => !deletedTickersStore.includes(ticker.ticker)
  );

  if (!tickersStore || !Array.isArray(tickersStore.tickers)) {
    return null;
  }

  return (
    <>
      <Head>Tickers:</Head>
      <Container>
        {filteredTickers.map(ticker => (
          <OneTicker key={ticker.id} ticker={ticker} />
        ))}
      </Container>
    </>
  );
}
