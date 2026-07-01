import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.bgWhite};
  border-radius: 10px;
  padding: 30px 40px;
  max-width: 360px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const Message = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.textDark};
  margin-bottom: 25px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const ConfirmBtn = styled.button`
  background: ${({ theme }) => theme.accentFill || theme.accent};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: ${({ theme }) => theme.accentHover};
  }
`;

export const CancelBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.textGray};
  border-radius: 5px;
  padding: 6px 18px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.textDark};
  &:hover {
    background-color: ${({ theme }) => theme.accentFill};
    color: ${({ theme }) => theme.textWhite};
    border: 0.7px solid ${({ theme }) => theme.accentFill};
  }
`;