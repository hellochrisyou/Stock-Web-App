import { FormControl, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { VALIDATE_ARRAY } from '@shared/utils/utils';
/*** REGEX should check a string with only letters and numbers (no spaces)  ***/

export const VALIDATOR_ALPHANUM = (num: string): string[] => {
  return num.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/i);
};

export function Validate_AlphaNumeric(control: AbstractControl) {  
  if (control && control.value) {
    if (VALIDATE_ARRAY(control.value, VALIDATOR_ALPHANUM)) {
      return {validInput: true};
    }
  return null
  }
}