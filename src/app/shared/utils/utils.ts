
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import moment from 'moment-timezone';

// the final Z indicates that the time is in UTC. We are actually delivering times in EST or EDT,
// but current back-end validations require the Z. This should be updated eventually.
const ISO_8601_NO_MILLI = 'YYYY-MM-DD[T]HH:mm:00[Z]';
export const API_DATE_FORMAT = 'Y-MM-DD';
export const DISPLAY_DATE_FORMAT = 'M/D/Y';
export const DATE_TIME_FORMAT = `${DISPLAY_DATE_FORMAT}, h:mm A`;
export const MIL_TIME_FORMAT = 'HH:mm';

const TARGET_TZ = 'America/New_York';

const FORMS_HYDRATE_ARRAY = (formBuilder: FormBuilder,
    parent: FormArray,
    formData: any,
    key: string,
    addForm: { [key: string]: (fb: FormBuilder) => any }
): any => {
    Object.keys(formData).forEach((ak: string) => {
        const formGroup: FormGroup = addForm[key](formBuilder) as FormGroup;
        Object.keys(formData[ak]).forEach((dk: string) => {
            formGroup.get(dk).setValue(formData[ak][dk]);
        });

        parent.push(formGroup);
    });
};


export const FORMS_HYDRATE = (formBuilder: FormBuilder,
    formData: any,
    controls: { [key: string]: AbstractControl },
    addForm: { [key: string]: (fb: FormBuilder) => any }
): any => {
    return Object.keys(controls).map((key: string) => {
        if (!formData) {
            return;
        }
        if (!formData.hasOwnProperty(key)) {
            return;
        }
        const newFormData = formData[key];

        if (controls[key] instanceof FormControl) {
            return controls[key].setValue(formData[key]);
        } else if (controls[key] instanceof FormGroup) {
            return FORMS_HYDRATE(formBuilder, formData[key], (controls[key] as FormGroup).controls, addForm);
        } else if (controls[key] instanceof FormArray) {
            const formArray: FormArray = controls[key] as FormArray;
            Object.keys(newFormData).forEach((ak: string) => {
                Object.keys(newFormData[ak]).forEach((dk: string) => {

                    let formGroup: FormGroup = formArray.at(+ak) as FormGroup;
                    // console.log(`AK: ${ak} dk: ${dk}`, formGroup);
                    if (!formGroup) {
                        formGroup = addForm[key](formBuilder); // , newFormData[ak][dk]);
                        formArray.push(formGroup);
                    }

                    const formObj: any = formGroup.get(dk);
                    if (formObj instanceof FormControl) {
                        formGroup.get(dk).setValue(newFormData[ak][dk]);
                    } else if (formObj instanceof FormArray) {
                        FORMS_HYDRATE_ARRAY(formBuilder, (formObj as FormArray), newFormData[ak][dk], dk, addForm);
                    }
                });
            });
            return;
        }
        console.log('hydrate ignoring:' + key + ' v:', newFormData);
        return;
    });
};

export const DATE_TIME_API_REQUEST_FORMAT = (date: moment.Moment): string => {
    return moment.tz(date, TARGET_TZ).format(ISO_8601_NO_MILLI);
};

export const DATE_TO_LOCAL_DATE = (date: string | moment.Moment): moment.Moment => {
    if (moment.isMoment(date)) {
        return date;
    }
    return moment(date, ISO_8601_NO_MILLI, TARGET_TZ);
};

// the following can be removed once dateOfDepartureFromUS's typing and validation is updated
export const DATE_STRING_TO_MOMENT = (date: string): moment.Moment => {
    return date ? DATE_TO_LOCAL_DATE(date) : null;
};

export const DATE_TIME_COMBINED_TO_MOMENT = (dateFormGroup: AbstractControl, timeFormGroup?: AbstractControl): moment.Moment => {
    const dte: moment.Moment = dateFormGroup.value;
    if (timeFormGroup) {
        const tme: moment.Moment = moment(timeFormGroup.value, 'HH:mm');
        dte.set({ hour: tme.hour(), minute: tme.minute() });
    }

    return dte;
};

export const DATE_API_REQUEST_FORMAT = (date: moment.Moment): string => {
    return date ? date.format(API_DATE_FORMAT) : null;
};

export const DATE_FORMAT_PARSE = (date: string): moment.Moment => {
    return date ? moment(date, API_DATE_FORMAT) : null;
};

export const FORM_ENABLE_DISABLE = (fg: FormGroup, enable: boolean, fields: string[]) => {
    fields.forEach((field: string) => enable ? fg.get(field).enable() :
        fg.get(field).disable());
};

// export const FORM_CONDITIONAL_VALIDATION = (condFunc: (abstractControl: AbstractControl) => boolean,
//                                             validators: ValidatorFn | ValidatorFn[]): ValidatorFn => {
//   return (abstractControl) => {
//     if (condFunc && !condFunc(abstractControl)) {
//       return null;
//     }
//
//     if (!Array.isArray(validators)) {
//       return validators(abstractControl);
//     }
//
//     return validators.map((v: any) => v(abstractControl))
//       .reduce((errors, result) => result === null ? errors : ({...errors, ...result}));
//   };
// };

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
