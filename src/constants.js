export const STATUSES = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово',
];

export const TOPICS = ['Web Design', 'Research', 'Copywriting'];

export const topicClassMap = {
  'Web Design': '_orange',
  Research: '_green',
  Copywriting: '_purple',
};

export const topicColors = {
  _orange: { bg: '#FFE4C2', text: '#FF6D00' },
  _green: { bg: '#B4FDD1', text: '#06B16E' },
  _purple: { bg: '#E9D4FF', text: '#9A48F1' },
  _gray: { bg: '#94A6BE', text: '#FFFFFF' },
};

export const DEFAULT_TOPIC_CLASS = '_gray';

export const topicColorKeys = {
  _orange: 'orange',
  _green: 'green',
  _purple: 'purple',
  _gray: 'gray',
};
