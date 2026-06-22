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
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 300px;
`;

export const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #565EEF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #33399b;
  }
`;

export const HintText = styled.span`
  color: #94A6BE;
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: #94A6BE;
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    color: #33399b;
  }
`;

export const HintWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
`;