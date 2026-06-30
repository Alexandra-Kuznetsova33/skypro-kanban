import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgMain};
`;

export const AuthForm = styled.form`
  background: ${({ theme }) => theme.bgWhite};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.textDark};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${({ $error, theme }) => ($error ? 'red' : theme.textGray)};
  border-radius: 5px;
  color: ${({ theme }) => theme.textDark};
  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
  min-height: 18px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ disabled, theme }) =>
    disabled ? '#ccc' : theme.accentFill};
  color: ${({ theme }) => theme.textWhite};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? '#ccc' : theme.accentHover};
  }
`;

export const HintText = styled.span`
  color: ${({ theme }) => theme.textGray};
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.textGray};
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    color: ${({ theme }) => theme.accentHover};
  }
`;

export const HintWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
`;
