import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { CREATE_LOGIN_FG } from '@feature/home/home.config';
import { EmitService } from 'app/core/service/emit/emit.service';
import { FORM_TOUCHED } from '@feature/home/home.utils';
import { RequiredErrorStateMatcher } from '@shared/error-state-matcher';

@Component({
  selector: 'login-logic',
  templateUrl: './login-logic.component.html',
  styleUrls: ['./login-logic.component.scss']
})
export class LoginLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  public loginEmailErrors() {
    return this.formGroup.get('loginEmailCtrl').errors;
  }

  public loginPassErrors() {
    return this.formGroup.get('loginPassCtrl').errors;
  }

  constructor(
    protected auth: AuthService,
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected emitService: EmitService
  ) {
    super(fb, changeDetectorRef);
    this.formName = 'loginForm';
    // this.emitService.logingOutput.subscribe(x => {
    //   this.auth.SigninEmail(this.formGroup.get('loginEmailCtrl').value, this.formGroup.get('loginPassCtrl').value);
    // });
  }

  public login(): boolean {
    if (!this.formGroup.valid) {
      alert('Please fill all the required fields!')
      return false;
    } else {
      console.log(this.formGroup.value)
    }
    this.auth.SigninEmail(this.formGroup.get('loginEmailCtrl').value, this.formGroup.get('loginPassCtrl').value);
  }
  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = this.fb.group({
      loginEmailCtrl: ['', [
        Validators.required,
      ]],
      loginPassCtrl: ['', [
        Validators.required,
      ]]
    });
    this.changeDetectorRef.markForCheck();
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public loginGithub(): boolean {
    if (!this.formGroup.valid) {
      alert('Please fill all the required fields')
      return false;
    } else {
      console.log(this.formGroup.value)
    }
    this.auth.SigninGithub();
  }

  public loginGoogle(): boolean {
    if (!this.formGroup.valid) {
      alert('Please fill all the required fields')
      return false;
    } else {
      console.log(this.formGroup.value)
    }
    this.auth.SigninGoogle();
  }

}
