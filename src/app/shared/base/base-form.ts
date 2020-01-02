import { Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { FORM_TOUCHED } from '@shared/utils/utils';
import { RequiredErrorStateMatcher } from '@shared/validator/validators/custom-error-state-matcher/required-error-state-matcher';
export class CreateBaseForm implements OnInit, OnDestroy {

    @Input()
    get abstractControl(): AbstractControl {
        return this._abstractControl;
    }
    set abstractControl(ac: AbstractControl) {
        this._abstractControl = ac;
        this.formGroup = this._abstractControl instanceof FormGroup ?
            this._abstractControl as FormGroup : null;
        this.formArray = this._abstractControl instanceof FormArray ?
            this._abstractControl as FormArray : null;
    }

    get isActiveFormValid(): boolean {
        return this.activeFormGroup &&
            this.activeFormGroup.valid &&
            (this.activeFormGroup.dirty || this.activeFormGroup.touched);
    }

    get isFormValid(): boolean {
        return this.abstractControl ? this.abstractControl.valid : false;
    }

    //   get formStep(): CreateFormStepType {
    //     return this.createFormsService.options[this.formName].formStep;
    //   }

    //   get isSubmitMode(): boolean {
    //     return this.createFormsService.activeSubmissionMode === 'SM';
    //   }

    public formGroup: FormGroup;
    public formArray: FormArray;
    public formName: string = null;
    public requiredErrorStateMatcher = new RequiredErrorStateMatcher();

    protected componentIdle: Subject<boolean> = new Subject();
    protected activeFormGroup: FormGroup = null;
    //   protected activeCreateFormItemEvent: CreateFormItemEventType = null;
    protected _abstractControl: AbstractControl;

    constructor(protected formBuilder: FormBuilder,
        // protected changeDetectorRef: ChangeDetectorRef,
        //   protected dialogService: DialogService,
        //   protected createFormsService: CreateFormsService
    ) {
        // this.createFormsService.formItemEvent = null;
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.componentIdle.next(true);
        this.componentIdle.complete();
    }

    public activeFormEntry(): FormGroup {
        return this.activeFormGroup;
    }

    public execFormValidation(): void {
        FORM_TOUCHED(this.abstractControl);
    }

    public checkNestedFieldNameError(fg: AbstractControl, errorType: string): boolean {
        const isError = fg && fg.invalid && (fg.dirty || fg.touched);
        if (isError && errorType) {
            return !!fg.errors[errorType];
        }
        return isError;
    }

    protected handleStepActiveEvent(): void { }

    // protected subscribeFormsService(): void {
    //     this.createFormsService.formItemEvents
    //         .pipe(
    //             takeUntil(this.componentIdle),
    //             filter((a: CreateFormItemEvent) => a !== null),
    //         )
    //         .subscribe((e: CreateFormItemEvent) => this.handleCreateFormItemEvent(e));
    // }

    // public checkFieldNameError(fieldName: string): boolean {
    //     if (this.formGroup) {
    //         const formGroup: FormGroup = this.formGroup.get(fieldName) as FormGroup;
    //         return formGroup && formGroup.invalid && (formGroup.dirty || formGroup.touched);
    //     }
    //     return false;
    // }

    // protected onBOLLoad(): void { }

    // protected onManifestLoad(): void { }
}
