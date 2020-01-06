import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CreateBaseForm } from '@shared/base/base-form';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'login-presentation',
  templateUrl: './login-presentation.component.html',
  styleUrls: ['./login-presentation.component.scss']
})
export class LoginPresentationComponent extends CreateBaseForm implements OnInit, OnDestroy {

  @Output() loginVal = new EventEmitter<string>();


  get loginEmail(): AbstractControl {
    return this.formGroup.get('signupEmail');
  }

  get loginPass(): AbstractControl {
    return this.formGroup.get('signupPass');
  }

  constructor(
    protected formBuilder: FormBuilder,
    protected changeDectorRef: ChangeDetectorRef,
    protected auth: AuthService
  ) {
    super(formBuilder, changeDectorRef);
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  loginGithub(): void {
    this.auth.SigninGithub();
  }

  loginGoogle(): void {
    this.auth.SigninGoogle();
  }

  loginFB(): void {
    this.auth.SigninFB();
  }
}