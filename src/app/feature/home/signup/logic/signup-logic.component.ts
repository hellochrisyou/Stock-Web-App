import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { FORM_TOUCHED } from '@feature/home/home.utils';
import { CREATE_SIGNUP_FG } from '@feature/home/home.config';
import { EmitService } from 'app/core/service/emit/emit.service';
import { AuthService } from 'app/core/service/auth/auth.service';
import { RequiredErrorStateMatcher } from '@shared/error-state-matcher';

@Component({
  selector: 'signup-logic',
  templateUrl: './signup-logic.component.html',
  styleUrls: ['./signup-logic.component.scss']
})
export class SignupLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  public signupEmailErrors() {
    return this.formGroup.get('signupEmailCtrl').errors;
  }

  public signupPassErrors() {
    return this.formGroup.get('signupPassCtrl').errors;
  }

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected emitService: EmitService,
    protected auth: AuthService
  ) {
    super(fb, changeDetectorRef);
    this.formName = 'signupForm';
    // this.emitService.logingOutput.subscribe(x => {
    //   this.auth.SigninEmail(this.formGroup.get('signupEmailCtrl').value, this.formGroup.get('signupPassCtrl').value);
    // });
  }

  public signup(): boolean {
    if (!this.formGroup.valid) {
      alert('Please fill all the required fields')
      return false;
    } else {
      console.log(this.formGroup.value)
    }
    this.auth.SigninEmail(this.formGroup.get('signupEmailCtrl').value, this.formGroup.get('signupPassCtrl').value);
  }
  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = this.fb.group({
      signupEmailCtrl: ['', [
        Validators.required
      ]],
      signupPassCtrl: ['', [
        Validators.required
      ]]
    });
    this.changeDetectorRef.markForCheck();
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }


}
