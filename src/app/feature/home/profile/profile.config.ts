import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATEPICKER_VALIDATORS } from '@angular/material';
import { ValidatorName } from '@shared/validator/validators/name.validator';
import { ValidateUrl } from '@shared/validator/validators/url.validator';

export const CREATE_PROFILE_FG = (fb: FormBuilder): FormGroup => {

    const profileFb: FormGroup = fb.group({
        displayNameCtrl: ['', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(30),
            ValidatorName,
            
        ]],      
        photoUrlCtrl: ['', [
            Validators.required,
            ValidateUrl,
        ]],  
        dateCtrl: ['', [
            Validators.required,
            MAT_DATEPICKER_VALIDATORS
            
        ]]
    });
    return profileFb;
};
