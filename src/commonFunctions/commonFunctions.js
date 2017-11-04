import moment from 'moment';

export function transformTimeSeconds (date) {
  const now = moment(new Date());
  return moment.duration(now.diff(date));
}
