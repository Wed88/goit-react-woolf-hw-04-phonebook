import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 2px solid;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  margin-bottom: 25px;
`;

export const ButtonSubmit = styled.button`
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
  align-self: center;
  padding: 5px 25px;
`;
