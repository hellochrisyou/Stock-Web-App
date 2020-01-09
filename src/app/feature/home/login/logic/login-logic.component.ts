import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { CREATE_LOGIN_FG, CREATE_SIGNUP_FG } from '@feature/home/home.config';
import { EmitService } from 'app/core/service/emit/emit.service';

@Component({
  selector: 'login-logic',
  templateUrl: './login-logic.component.html',
  styleUrls: ['./login-logic.component.scss']
})
export class LoginLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  public loginEmail() {
    return this.formGroup.get('loginEmailCtrl');
  }

  public loginPass() {
    return this.formGroup.get('loginPassCtrl');
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
    this.formGroup = CREATE_LOGIN_FG(this.fb);
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
