import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  p {
    color: ${({ theme }) => theme.textGray};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 1200px) {
    display: flex;
    overflow-x: auto;
  }
`;