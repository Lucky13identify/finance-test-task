import styled from 'styled-components';

const flexSettings = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.ul`
  display: flex;

  width: 1000px;
  gap: 10px;

  background-color: #d3d3d3;
  border-radius: 10px;
`;

export const Ticker = styled.p`
  ${flexSettings}

  padding: 3px;
  width: 70px;
  height: 20px;
  border-radius: 3px;

  color: white;
  background-color: ${props => {
    if (props.ticker === 'AAPL') {
      return '#2E8B57';
    } else if (props.ticker === 'GOOGL') {
      return '#DC143C';
    } else if (props.ticker === 'MSFT') {
      return '#808000';
    } else if (props.ticker === 'AMZN') {
      return '#008B8B';
    } else if (props.ticker === 'FB') {
      return '#FF6347';
    } else if (props.ticker === 'TSLA') {
      return '#800080';
    }
  }};
`;

export const Value = styled.li`
  ${flexSettings}

  width: 90px;
  padding: 15px;
`;

export const TextAndTime = styled.li`
  ${flexSettings}

  width: 100px;

  font-style: italic;
`;

export const ProfitOrLoss = styled.p`
  ${flexSettings}

  width: 100%;
  padding: 3px;
  border-radius: 4px;

  font-weight: bold;

  color: ${props => (props.result === 'true' ? 'red' : 'green')};
  background-color: ${props =>
    props.result === 'true' ? 'rgb(252,230,230)' : 'rgb(220,244,220)'};
`;

export const Button = styled.button`
  padding: 10px;

  font-family: inherit;
  font-weight: 700;
  font-size: 16px;

  cursor: pointer;
  border: none;
  border-radius: 4px;

  color: white;
  background-color: #0000cd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    background-color: #00008b;
  }
`;
