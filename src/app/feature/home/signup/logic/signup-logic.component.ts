import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { FORM_TOUCHED } from '@feature/home/home.utils';
import { CREATE_SIGNUP_FG } from '@feature/login/login.config';

@Component({
  selector: 'signup-logic',
  templateUrl: './signup-logic.component.html',
  styleUrls: ['./signup-logic.component.scss']
})
export class SignupLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  @Output() signupValPres = new EventEmitter<string[]>();

  constructor(
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
    super(formBuilder, changeDetectorRef);
    this.formName = 'signupForm';
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.activeFormGroup = CREATE_SIGNUP_FG(this.formBuilder);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public emitSignupSubmit(data: string[]): void {
    if (!this.activeFormGroup.valid) {
      FORM_TOUCHED(this.activeFormGroup);
      return;
    }
    this.signupValPres.emit(data);
  }

}
