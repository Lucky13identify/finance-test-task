import Notiflix from 'notiflix';
import { useState } from 'react'; // Импортируем хук useState
import { Form, Input, Button } from './formInterval.styled';

export function FormForIntervalSet({ setIntervalChange }) {
  const [intervalValue, setIntervalValue] = useState('');

  const changeIntervalTime = (e, int) => {
    e.preventDefault();

    setIntervalChange(int * 1000);

    Notiflix.Notify.success(
      `The current update interval is every ${intervalValue} seconds.`
    );
  };

  const handleIntervalChange = e => {
    setIntervalValue(e.target.value);
  };

  return (
    <>
      <Form onSubmit={e => changeIntervalTime(e, intervalValue)}>
        <label htmlFor="interval">Set the interval in seconds.</label>
        <Input
          type="text"
          name="interval"
          id="interval"
          value={intervalValue}
          onChange={handleIntervalChange}
        />
        <Button type="submit" data-testid="set-interval-button">
          Set interval
        </Button>
      </Form>
    </>
  );
}
