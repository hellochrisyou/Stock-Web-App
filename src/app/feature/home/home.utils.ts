import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export const FORM_TOUCHED = (ac: AbstractControl): void => {
  const g: FormGroup | FormArray = (ac instanceof FormGroup) ? ac as FormGroup :
    ac as FormArray;

  Object.values(g.controls).forEach((c: AbstractControl) => {
    if (c instanceof FormControl) {
      (c as FormControl).markAsTouched();
      (c as FormControl).updateValueAndValidity();
      return;
    }
    FORM_TOUCHED(c as FormGroup);
  });
};
