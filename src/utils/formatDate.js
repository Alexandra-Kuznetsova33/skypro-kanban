export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export const getLocalDateFromDay = (day) => {
  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth(), day);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const dayStr = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${dayStr}`;
};

export const toISOString = (localDate) => {
  if (!localDate) return new Date().toISOString();
  const date = new Date(localDate + 'T00:00:00');
  if (isNaN(date.getTime())) return new Date().toISOString();
  return date.toISOString();
};

export const formatLocalDate = (localDate) => {
  if (!localDate) return '';
  return new Date(localDate + 'T00:00:00').toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};

export const toLocalDateString = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};