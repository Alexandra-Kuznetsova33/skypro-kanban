import styled from 'styled-components';

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $active }) => $active ? 1 : 0.4};
  background-color: ${({ $bg }) => $bg};
  color: ${({ $text }) => $text};
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: inherit;
  }
`;