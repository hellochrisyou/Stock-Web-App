import { FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';

/*** REGEX should check a string for only capital letters and no Spaces ***/
export const VALIDATOR_CAPITAL_LETTERS: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    if (control && control.value && control.value !== '') {
        return !control.value.match(/^[A-Z]+$/) ? {
            cbptmInvalidCapitalSpaces: 'Only capital letters are allowed, no spaces'
        } : null;
    }
    return null;
};
