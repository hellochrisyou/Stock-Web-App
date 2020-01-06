import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder } from '@angular/forms';
import { CREATE_SIGNUP_FG } from '@feature/login/login.config';
import { FORM_TOUCHED } from '@feature/home/home.utils';
import { CREATE_LOGIN_FG } from '@feature/home/home.config';

@Component({
  selector: 'login-logic',
  templateUrl: './login-logic.component.html',
  styleUrls: ['./login-logic.component.scss']
})
export class LoginLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  @Output() loginValPres = new EventEmitter<string[]>();

  constructor(
    private auth: AuthService,
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
  ) {
    super(formBuilder, changeDetectorRef);
    this.formName = 'loginForm';
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.activeFormGroup = CREATE_LOGIN_FG(this.formBuilder);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public emitLoginSubmit(data: string[]): void {
    if (!this.activeFormGroup.valid) {
      FORM_TOUCHED(this.activeFormGroup);
      return;
    }
    this.loginValPres.emit(data);
  }
}
