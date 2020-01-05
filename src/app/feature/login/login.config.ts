import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

export const LoginSetValidator = (fg: FormGroup, isSubmit: boolean) => {
    fg.get('email').setValidators([
        Validators.minLength(10),
        Validators.required,
    ]);
    fg.get('password').setValidators([
        Validators.minLength(8),
        Validators.required,
    ]);
}

export const CreateTournamentHeader = (formBuilder: FormBuilder): FormGroup | FormArray => {

    const tourneyFG: FormGroup = formBuilder.group({
        email: [''],
        password: ['']
    });
    LoginSetValidator(tourneyFG, false);
    return tourneyFG;
};
