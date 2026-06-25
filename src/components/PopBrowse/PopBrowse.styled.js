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
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
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
  color: #000;
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
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 660px) {
    display: block;
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
  color: #000;
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
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
  @media (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const BtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnGroup = styled.div`
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
`;

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid #565EEF;
  outline: none;
  background: transparent;
  color: #565EEF;
  cursor: pointer;
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }
`;

export const BtnBg = styled.button`
  width: 86px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background-color: #33399b;
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