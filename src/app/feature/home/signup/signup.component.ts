import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { CREATE_SIGNUP_FG } from '@home/home.config';
import { EmitService } from 'app/core/service/emit/emit.service';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'home-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected emitService: EmitService,
    protected auth: AuthService
  ) {
    super(fb, changeDetectorRef);
    this.formName = 'signupForm';
  }

  public signup(): boolean {
    if (!this.formGroup.valid) {
      alert('Please fill all the required fields')
      return false;
    } else {
      console.log(this.formGroup.value);
      this.auth.signupEmail(this.formGroup.get('signupEmailCtrl').value, this.formGroup.get('signupPassCtrl').value);
    }


  }
  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = CREATE_SIGNUP_FG(this.fb);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }


}
