import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

export const CREATE_LOGIN_FG = (fb: FormBuilder): FormGroup => {

    const loginFb: FormGroup = fb.group({
        loginEmailCtrl: ['', [
            Validators.required,
            Validators.email,
        ]],
        loginPassCtrl: ['', [
            Validators.required,
        ]]
    });
    return loginFb;
};

export const CREATE_SIGNUP_FG = (fb: FormBuilder): FormGroup => {

    const signupFb: FormGroup = fb.group({
        signupEmailCtrl: ['', [
            Validators.required,
            Validators.email,
            Validators.maxLength(30),
        ]],
        signupPassCtrl: ['', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(30),
        ]]
    });
    return signupFb;
};