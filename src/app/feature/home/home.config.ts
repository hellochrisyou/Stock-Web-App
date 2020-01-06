import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

export const SIGNUP_SET_VALIDATOR = (fg: FormGroup) => {
    fg.get('signupEmailCtrl').setValidators([
        Validators.minLength(10),
        Validators.required,
    ]);
    fg.get('signupPasstrl').setValidators([
        Validators.minLength(8),
        Validators.required,
    ]);
}

export const LOGIN_SET_VALIDATOR = (fg: FormGroup) => {
    fg.get('loginEmailCtrl').setValidators([
        Validators.minLength(10),
        Validators.required,
    ]);
    fg.get('loginPassCtrl').setValidators([
        Validators.minLength(8),
        Validators.required,
    ]);
}

export const CREATE_LOGIN_FG = (formBuilder: FormBuilder): FormGroup => {

    const loginFg: FormGroup = formBuilder.group({
        loginEmailCtrl: [''],
        loginPassCtrl: ['']
    });
    LOGIN_SET_VALIDATOR(loginFg);
    return loginFg;
};
export const CREATE_SIGNUP_FG = (formBuilder: FormBuilder): FormGroup | FormArray => {

    const signupFg: FormGroup = formBuilder.group({
        signupEmailCtrl: [''],
        singupPassCtrl: ['']
    });
    SIGNUP_SET_VALIDATOR(signupFg);
    return signupFg;
};