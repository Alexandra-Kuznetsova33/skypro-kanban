import styled, { keyframes } from 'styled-components';

const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

export const CardItem = styled.div`
  padding: 5px;
  animation: ${cardAnimation} 500ms linear;
`;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.bgWhite};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  background: none;
  border: none;
  cursor: pointer;
  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.textGray};
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({ theme }) => theme.textGray};
    letter-spacing: 0.2px;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;