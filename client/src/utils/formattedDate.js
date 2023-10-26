import { format, parseISO } from 'date-fns';

export function formatTradeDate(lastTradeTime) {
  const date = parseISO(lastTradeTime);
  return format(date, 'MM.dd.yyyy');
}
