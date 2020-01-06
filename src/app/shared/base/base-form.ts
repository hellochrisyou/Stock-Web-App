import { Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import { FORM_TOUCHED } from '@feature/home/home.utils';
import { RequiredErrorStateMatcher } from '@shared/validator/validators/custom-error-state-matcher/required-error-state-matcher';
import { takeUntil, map, filter } from 'rxjs/operators';
export class CreateBaseForm implements OnInit, OnDestroy {

    public formGroup: FormGroup;
    public formArray: FormArray;
    public formName: string = null;
    public requiredErrorStateMatcher = new RequiredErrorStateMatcher();

    protected componentIdle: Subject<boolean> = new Subject();
    protected _abstractControl: AbstractControl;

    constructor(protected formBuilder: FormBuilder,
        protected changeDetectorRef: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.componentIdle.next(true);
        this.componentIdle.complete();
    }

    public execFormValidation(): void {
        FORM_TOUCHED(this.formGroup);
    }

    public handleAddFormClick(e: any): void { }

}
