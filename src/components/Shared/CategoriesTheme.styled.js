import styled from 'styled-components';

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $active }) => $active ? 1 : 0.4};
  background-color: ${({ $colorKey, theme }) => theme[`${$colorKey}Bg`] || theme.grayBg};
  color: ${({ $colorKey, theme }) => theme[`${$colorKey}Text`] || theme.grayText};
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: inherit;
  }
`;