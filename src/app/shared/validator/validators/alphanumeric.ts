import { FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { VALIDATE_ARRAY } from '@shared/utils/utils';
/*** REGEX should check a string with only letters and numbers (no spaces)  ***/

const VALIDATOR_ALPHANUM = (num: string): string[] => {
  return num.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/i);
};

export const VALIDATOR_ALPHANUMERIC: ValidatorFn = (control: FormControl): ValidationErrors | null => {
  let isValid = true;
  if (control && control.value) {
    isValid = VALIDATE_ARRAY(control.value, VALIDATOR_ALPHANUM);

  }
  return !isValid ? {
    invalidAlphaNum: 'Alpha-Numeric characters only. Spaces prohibited.'
  } : null;
};
