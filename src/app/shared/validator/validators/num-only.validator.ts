import { ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';

export const VALIDATOR_NUMBER: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    if (control && control.value && control.value !== '') {
        return !control.value.match(/^[0-9]+$/) ? {
            cbptmInvalidName: 'Name is incorrect'
        } : null;
    }
    return null;
};
