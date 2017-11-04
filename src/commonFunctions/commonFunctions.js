import moment from 'moment';

export function transformTimeSeconds(date) {
  const now = moment().unix(); //todays date
  const end = date / 1000;
  return (now-end);
}
