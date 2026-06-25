import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
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
  color: #94A6BE;
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
    fill: #94A6BE;
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
  color: #94A6BE;
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
  height: 126px;
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
  
  /* цвета по умолчанию */
  color: #94A6BE;
  background-color: transparent;
  font-weight: 400;

  /* transient props */
  opacity: ${({ $otherMonth }) => $otherMonth ? 0 : 1};
  background-color: ${({ $active }) => $active ? '#94A6BE' : 'transparent'};
  color: ${({ $active }) => $active ? '#FFFFFF' : '#94A6BE'};
  font-weight: ${({ $current }) => $current ? 700 : 400};

  /* hover только для дней текущего месяца */
  &:hover {
    background-color: ${({ $otherMonth, $active }) => 
      $otherMonth || $active ? 'transparent' : '#EAEEF6'};
    color: ${({ $otherMonth }) => $otherMonth ? '#94A6BE' : '#94A6BE'};
  }

  @media (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarP = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  span {
    color: #000000;
  }
  @media (max-width: 660px) {
    font-size: 14px;
  }
`;