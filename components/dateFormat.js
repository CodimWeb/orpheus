import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

export const dateFormatCollection = {
  full: 'd MMMM yyyy',
  short: 'd LLL',
  weekday: 'EEEE',
  iso: 'yyyy-MM-dd',
};

/**
 * Localized version of date format
 * @param {Date|string} dateVal
 * @param {$Values<dateFormat>} dateFormatVal
 */
export const dateFormat = (dateVal, dateFormatVal = dateFormatCollection.full) => {
  let date;

  if (dateVal instanceof Date) {
    date = dateVal;
  } else if (typeof dateVal === 'string') {
    date = Date.parse(dateVal);
  }

  return date ? format(date, dateFormatVal, { locale: ru }) : dateVal;
};

export default dateFormat;
