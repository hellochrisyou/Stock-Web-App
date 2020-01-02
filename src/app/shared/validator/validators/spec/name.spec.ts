import { FormControl } from '@angular/forms';
import { VALIDATOR_NAME } from './name';

describe('VALIDATOR_NAME', () => {
  it('should return null with an empty string', () => {
    const testFormControl = new FormControl('');
    expect(VALIDATOR_NAME(testFormControl)).toBeNull();
  });

  it('should return null with the string', () => {
    const testFormControl = new FormControl('Jas-on');
    expect(VALIDATOR_NAME(testFormControl)).toBeNull();
  });

  it('should return null with the value string', () => {
    const testFormControl = new FormControl(`Jas'-on`);
    expect(VALIDATOR_NAME(testFormControl)).toBeNull();
  });

  it('should return error with 1234', () => {
    const testFormControl = new FormControl('1234');
    expect(VALIDATOR_NAME(testFormControl)).toEqual({
      cbptmInvalidName: 'Name is incorrect'
    });
  });

  it('should return error with !@#$%^&*', () => {
    const testFormControl = new FormControl('!@#$%^&*');
    expect(VALIDATOR_NAME(testFormControl)).toEqual({
      cbptmInvalidName: 'Name is incorrect'
    });
  });
});
