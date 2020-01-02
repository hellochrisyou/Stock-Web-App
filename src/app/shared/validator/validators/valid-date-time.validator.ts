import { FormControl, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import moment from 'moment';
import { MIL_TIME_FORMAT } from '@shared/constant/const';



export const VALIDATOR_DATE_TIME_NOT_IN_PAST = (dateControl: AbstractControl, timeControl: AbstractControl) => {

    if (!dateControl.value || !timeControl.value) {
        return null;
    }
    const dte: moment.Moment = moment(dateControl.value);
    const tme: moment.Moment = moment(timeControl.value, MIL_TIME_FORMAT);
    dte.set({ hour: tme.hour(), minute: tme.minute() });

    return dte.isAfter(moment().add(1, 'hour')) ? null : { invalidDateTime: 'Date/time must be at least 1 hour from now' };
};
