import styled from 'styled-components';

export const PopExitOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.textGray};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: ${({ theme }) => theme.bgWhite};
  text-align: center;
  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const PopExitTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const ExitYesButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${({ theme }) => theme.accentFill};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.textWhite};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ExitNoButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.accentFill};
    color: ${({ theme }) => theme.textWhite};
    border: 0.7px solid ${({ theme }) => theme.accentFill};
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;