import { FormControl } from '@angular/forms';
import { VALIDATOR_CAPITAL_LETTERS } from './capital-letters';

describe('VALIDATOR_CAPITAL_LETTERS', () => {
  it('should return null with the value null', () => {
    const testFormControl = new FormControl('');
    expect(VALIDATOR_CAPITAL_LETTERS(testFormControl)).toBeNull();
  });
  it('should return null with the value HELLOWORLD', () => {
    const testFormControl = new FormControl('HELLOWORLD');
    expect(VALIDATOR_CAPITAL_LETTERS(testFormControl)).toBeNull();
  });

  it('should return the error message with the value HELLO WORLD', () => {
    const testFormControl = new FormControl('HELLO WORLD');
    expect(VALIDATOR_CAPITAL_LETTERS(testFormControl)).toEqual({
      cbptmInvalidCapitalSpaces: 'Only capital letters are allowed, no spaces'
    });
  });

  it('should return the error message with the value HELLO WORLD', () => {
    const testFormControl = new FormControl('HELLO WORLD');
    expect(VALIDATOR_CAPITAL_LETTERS(testFormControl)).toEqual({
      cbptmInvalidCapitalSpaces: 'Only capital letters are allowed, no spaces'
    });
  });

  it('should return the error message with the value 12345678', () => {
    const testFormControl = new FormControl('12345678');
    expect(VALIDATOR_CAPITAL_LETTERS(testFormControl)).toEqual({
      cbptmInvalidCapitalSpaces: 'Only capital letters are allowed, no spaces'
    });
  });

  it('should return the error message with the value !HELLOWORLD', () => {
    const testFormControl = new FormControl('!HELLOWORLD');
    expect(VALIDATOR_CAPITAL_LETTERS(testFormControl)).toEqual({
      cbptmInvalidCapitalSpaces: 'Only capital letters are allowed, no spaces'
    });
  });
});
