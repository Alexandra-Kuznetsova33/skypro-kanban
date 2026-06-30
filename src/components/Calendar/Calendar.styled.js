import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({ theme }) => theme.textDark};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: ${({ theme }) => theme.textGray};
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ theme }) => theme.textGray};
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const DayName = styled.div`
  color: ${({ theme }) => theme.textGray};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  @media (max-width: 660px) {
    font-size: 14px;
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: auto;
  min-height: 126px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 660px) {
    width: 344px;
    height: auto;
    justify-content: space-around;
  }
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  color: ${({ theme }) => theme.textGray};
  background-color: transparent;
  font-weight: 400;

  background-color: ${({ $active, theme }) =>
    $active ? theme.textGray : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.textWhite : theme.textGray};
  font-weight: ${({ $current }) => ($current ? 700 : 400)};

  &:hover {
    background-color: ${({ $active, theme }) =>
      $active ? theme.textGray : theme.bgMain};
    color: ${({ $active, theme }) =>
      $active ? theme.textWhite : theme.textGray};
  }

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
  margin-top: 4px;
`;

export const CalendarP = styled.p`
  color: ${({ theme }) => theme.textGray};
  font-size: 10px;
  line-height: 1;
  span {
    color: ${({ theme }) => theme.textDark};
  }
  @media (max-width: 660px) {
    font-size: 14px;
  }
`;
