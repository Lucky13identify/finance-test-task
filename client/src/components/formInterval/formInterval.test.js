import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { FormForIntervalSet } from './formInterval';
import { store } from '../../redux/store';

const setIntervalChange = jest.fn();

describe('FormForIntervalSet Component', () => {
  it('should perform the interval change function', () => {
    render(
      <Provider store={store}>
        <FormForIntervalSet setIntervalChange={setIntervalChange} />
      </Provider>
    );

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByText('Set interval');

    userEvent.type(input, '3');
    userEvent.click(submitButton);

    expect(setIntervalChange).toHaveBeenCalledWith(3000);
  });
  it('snapshot', () => {
    const list = render(
      <Provider store={store}>
        <FormForIntervalSet setIntervalChange={setIntervalChange} />
      </Provider>
    );

    expect(list).toMatchSnapshot();
  });
});
