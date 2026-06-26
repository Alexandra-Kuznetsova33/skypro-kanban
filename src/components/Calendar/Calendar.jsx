import {
  CalendarWrapper,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  DaysNames,
  DayName,
  Cells,
  Cell,
  CalendarPeriod,
  CalendarP,
} from './Calendar.styled';
function Calendar({ deadlineText, deadlineDate, highlightedDate }) {
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const monthName = monthNames[currentMonth];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  if (firstDayOfWeek === 0) firstDayOfWeek = 7;

  const cells = [];
  for (let i = 1; i < firstDayOfWeek; i++) {
    cells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  const isActive = (day) => {
    if (!highlightedDate) return false;
    const [d, m, y] = highlightedDate.split('.');
    return (
      day === parseInt(d, 10) &&
      parseInt(m, 10) === currentMonth + 1 &&
      parseInt(y, 10) === currentYear % 100
    );
  };

  const isCurrent = (day) => {
    const now = new Date();
    return (
      day === now.getDate() &&
      currentMonth === now.getMonth() &&
      currentYear === now.getFullYear()
    );
  };
  return (
    <CalendarWrapper>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>{`${monthName} ${currentYear}`}</CalendarMonth>
          <NavActions>
            <NavAction data-action='prev'>
              {' '}
              {
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='6'
                  height='11'
                  viewBox='0 0 6 11'
                >
                  <path d='M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z' />
                </svg>
              }
            </NavAction>
            <NavAction data-action='next'>
              {' '}
              {
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='6'
                  height='11'
                  viewBox='0 0 6 11'
                >
                  <path d='M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z' />
                </svg>
              }
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <DaysNames>
            {weekDays.map((day) => (
              <DayName key={day}>{day}</DayName>
            ))}
          </DaysNames>
          <Cells>
            {cells.map((cell, idx) => {
              if (cell === null) {
                return <Cell key={`empty-${idx}`} />;
              }
              return (
                <Cell
                  key={idx}
                  $active={isActive(cell)}
                  $current={isCurrent(cell)}
                >
                  {cell}
                </Cell>
              );
            })}
          </Cells>
        </CalendarContent>
        <CalendarPeriod>
          <CalendarP className='date-end'>
            {deadlineDate ? `Срок исполнения: ${deadlineDate}` : deadlineText}
          </CalendarP>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
}

export default Calendar;
