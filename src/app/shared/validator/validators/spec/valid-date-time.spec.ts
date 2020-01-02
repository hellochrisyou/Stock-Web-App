import moment from 'moment';
import { FormControl } from '@angular/forms';
import { VALIDATOR_DATE_TIME_NOT_IN_PAST } from './date-time-not-in-past';

let date: FormControl;
let time: FormControl;

beforeEach(() => {
  date = new FormControl();
  time = new FormControl();
});

afterEach(() => {
  date = null;
  time = null;
});

describe('VALIDATOR_DATE_TIME_NOT_IN_PAST', () => {
  it('should return null with null values passed in', () => {
    date.setValue(null);
    time.setValue(null);
    expect(VALIDATOR_DATE_TIME_NOT_IN_PAST(date, time)).toBeNull();
  });

  it('should return null for a future date', () => {
    const d = moment().startOf('day').add(5, 'days').utc().format();
    date.setValue(d);
    time.setValue('12:00');
    expect(VALIDATOR_DATE_TIME_NOT_IN_PAST(date, time)).toBeNull();
  });

  it('should return null for a todays date and 3 hours ahead', () => {
    const d = moment().utc().format();
    const m = moment().add(3, 'hours').utc().format('HH:MM');
    date.setValue(d);
    time.setValue(m);
    expect(VALIDATOR_DATE_TIME_NOT_IN_PAST(date, time)).toBeNull();
  });

  it('should return an error for a past date', () => {
    const d = moment().startOf('day').subtract(5, 'days').utc().format();
    date.setValue(d);
    time.setValue('12:00');
    expect(VALIDATOR_DATE_TIME_NOT_IN_PAST(date, time)).toEqual({
      invalidDateTime: 'Date/time must be at least 1 hour from now'
    });
  });

  it('should return an error for a time in the past', () => {
    const d = moment().utc().format();
    const m = moment().subtract(3, 'hours').utc().format('HH:MM');
    date.setValue(d);
    time.setValue(m);
    expect(VALIDATOR_DATE_TIME_NOT_IN_PAST(date, time)).toEqual({
      invalidDateTime: 'Date/time must be at least 1 hour from now'
    });
  });
});
