import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATEPICKER_VALIDATORS } from '@angular/material';
import { VALIDATOR_ALPHANUMERIC } from '@shared/validator/validators/alphanumeric';
import { VALIDATOR_CAPITAL_LETTERS } from '@shared/validator/validators/capital-letters.validator';
import { VALIDATOR_NUMBER } from '@shared/validator/validators/num-only.validator';

export const CREATE_PROFILE_FG = (fb: FormBuilder): FormGroup => {

    const profileFb: FormGroup = fb.group({
        displayNameCtrl: ['', [
            Validators.minLength(2),
            Validators.maxLength(30),
            // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
            VALIDATOR_ALPHANUMERIC,
            Validators.required,
        ]],        
        dateCtrl: ['', [
            MAT_DATEPICKER_VALIDATORS,
            Validators.required
        ]]
    });
    return profileFb;
};
