import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  flex: 1 1 auto;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.bgMain};
`;

export const MainBlock = styled.div`
  width: 100%;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.textGray};
  letter-spacing: -0.14px;
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.textGray};
  letter-spacing: -0.14px;
`;
