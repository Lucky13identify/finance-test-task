import Notiflix from 'notiflix';
import { Form, Input, Button } from './formInterval.styled';

export function FormForIntervalSet({ setIntervalChange }) {
  const changeIntervalTime = e => {
    e.preventDefault();

    setIntervalChange(e.target[0].value * 1000);

    Notiflix.Notify.success(
      `The current update interval is every ${e.target[0].value} seconds.`
    );
  };

  return (
    <>
      <Form onSubmit={changeIntervalTime}>
        <p>Set the interval in seconds.</p>
        <Input type="text" />
        <Button type="submit">Set interval</Button>
      </Form>
    </>
  );
}
