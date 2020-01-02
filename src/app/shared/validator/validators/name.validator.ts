import { FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';

/*** REGEX should check a string for characters A-Z a-z - ' ***/
export const VALIDATOR_NAME: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    if (control && control.value && control.value !== '') {
        return !control.value.match(/^[A-Za-z-']+$/) ? {
            cbptmInvalidName: 'Name is incorrect'
        } : null;
    }
    return null;
};
