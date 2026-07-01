import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgMain || '#EAEEF6'};
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  text-align: center;
  gap: 20px;
`;

export const Code = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent || '#000000'};
  line-height: 1;
`;

export const Message = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.textGray || '#94A6BE'};
`;

export const HomeLink = styled(Link)`
  font-size: 16px;
  color: ${({ theme }) => theme.accent || '#565EEF'};
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.accentHover || '#33399b'};
  }
`;