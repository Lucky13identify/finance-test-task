import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TickersList } from './components/tickers/tickers';
import { fetchTickers } from './redux/tickers/tickersOperations';
import { FormForIntervalSet } from './components/formInterval/formInterval';

function App() {
  const [interval, setIntervalChange] = useState(5000);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchTickers());
    };

    fetchData();

    const intervalId = setInterval(fetchData, interval);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <article>
        <TickersList />
      </article>
      <FormForIntervalSet setIntervalChange={setIntervalChange} />
    </>
  );
}

export default App;
