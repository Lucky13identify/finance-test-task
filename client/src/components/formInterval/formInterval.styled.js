import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  gap: 15px;
  padding: 20px;
  margin-top: 40px;
  margin-left: 20px;

  border: 1px solid #0000cd;
  border-radius: 8px;

  background-color: #f5f5f5;
`;

export const Input = styled.input`
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: #dcdcdc;
`;

export const Button = styled.button`
  width: 150px;
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
