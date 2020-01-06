import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/base-form';

@Component({
  selector: 'signup-presentation',
  templateUrl: './signup-presentation.component.html',
  styleUrls: ['./signup-presentation.component.scss']
})
export class SignupPresentationComponent extends CreateBaseForm implements OnInit, OnDestroy {

  @Output() signupValPres = new EventEmitter<string[]>();

  get signupEmail(): AbstractControl {
    return this.formGroup.get('signupEmail');
  }

  get signupPass(): AbstractControl {
    return this.formGroup.get('signupPass');
  }

  constructor(protected formBuilder: FormBuilder,
    protected changeDectorRef: ChangeDetectorRef) {
    super(formBuilder, changeDectorRef);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
