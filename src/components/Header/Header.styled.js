import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.bgWhite};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 10px;
`;

export const Logo = styled.div`
  img {
    width: 85px;
  }
`;

export const Nav = styled.nav`
  max-width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.textWhite};
  border: none;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const UserLink = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.accent};
  background: none;
  border: none;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.accent};
    border-bottom: 1.9px solid ${({ theme }) => theme.accent};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.accentHover};
    &::after {
      border-color: ${({ theme }) => theme.accentHover};
    }
  }
`;