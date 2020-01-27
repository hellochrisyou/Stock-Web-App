import { AbstractControl } from '@angular/forms';

/*** REGEX should check a string for characters A-Z a-z - ' ***/
export function ValidatorName(control: AbstractControl) {
    if (control && control.value && control.value !== '') {
        return !control.value.match(/^[A-Za-z-']+$/) ? {
            validName: false
        } : null;
    }
    return null;
};
