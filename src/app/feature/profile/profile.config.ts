import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { VALIDATOR_ALPHANUMERIC } from '@shared/validator/validators/alphanumeric';
import { MAT_DATEPICKER_VALIDATORS } from '@angular/material';
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
        phoneNumCtrl: ['', [
            Validators.pattern('^[0-9]'),
            Validators.minLength(9),
            Validators.maxLength(9),
            Validators.required,
        ]],
        addyCtrl: ['', [
            // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),            
            Validators.maxLength(30),
            VALIDATOR_ALPHANUMERIC,
        ]],
        cityCtrl: ['', [
            // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),            
            Validators.minLength(2),
            Validators.maxLength(20),
            VALIDATOR_ALPHANUMERIC,
            Validators.required,
        ]],
        stateCtrl: ['', [
            // Validators.pattern('^[A-Z]'),
            Validators.maxLength(2),
            VALIDATOR_CAPITAL_LETTERS,
            Validators.required,
        ]],
        ageCtrl: ['', [
            // Validators.pattern('^[0-9]'),
            Validators.maxLength(3),
            VALIDATOR_NUMBER,
            Validators.required,
        ]],
        dateCtrl: ['', [
            MAT_DATEPICKER_VALIDATORS,
            Validators.required
        ]]
    });
    return profileFb;
};
