import styled from 'styled-components';

export const PopBrowseOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgWhite};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.textGray};
  position: relative;
  @media (max-width: 660px) {
    border-radius: 0;
  }
  @media (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: ${({ theme }) => theme.textDark};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusP = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  background-color: ${({ $active, theme }) =>
    $active ? theme.textGray : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.textWhite : theme.textGray};
  border: ${({ $active, theme }) =>
    $active ? 'none' : `0.7px solid ${theme.textGray}`};
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    align-items: center;   
  }
`;

export const FormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media (max-width: 495px) {
    max-width: 100%;
  }
`;

export const Subttl = styled.label`
  color: ${({ theme }) => theme.textDark};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.bgMain};
  border: 0.7px solid ${({ theme }) => theme.textGray};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({ theme }) => theme.textDark};
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.textGray};
    letter-spacing: -0.14px;
  }
  @media (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const FormEditInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${({ theme }) => theme.textGray};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.textDark};
  &::placeholder {
    color: ${({ theme }) => theme.textGray};
  }
`;

export const BtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 495px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
 @media (max-width: 495px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    @media (max-width: 495px) {
      height: 40px;
      margin-bottom: 0;
      padding: 0;
    }
  }
`;

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid ${({ theme }) => theme.accent};
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.accentFill};
    color: ${({ theme }) => theme.textWhite};
    border: 0.7px solid ${({ theme }) => theme.accentFill};
  }
   @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const BtnBg = styled.button`
  width: 86px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.accentFill};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textWhite};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const ThemeTop = styled.div`
  display: block;
  @media (max-width: 495px) {
    display: none;
  }
`;
export const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
  @media (max-width: 495px) {
    display: block;
  }
`;
