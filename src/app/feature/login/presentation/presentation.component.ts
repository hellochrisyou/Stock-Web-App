import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  // get signUpEmailCtrl(): AbstractControl {
  //   return this.formGroup.get('signUpEmailCtrl');
  // }

  // get signUpPassCtrl(): AbstractControl {
  //   return this.formGroup.get('signUpPassCtrl');
  // }

  // get loginEmailCtrl(): AbstractControl {
  //   return this.formGroup2.get('loginEmailCtrl');
  // }

  // get loginPassCtrl(): AbstractControl {
  //   return this.formGroup2.get('loginPassCtrl');
  // }

  // constructor(
  //   protected formBuilder: FormBuilder,
  //   protected changeDectorRef: ChangeDetectorRef,
  //   public auth: AuthService,
  //   private fb: FormBuilder,
  //   private router: Router
  // ) {
  //   super(formBuilder);
  // }
  // ngOnInit() {
  // }

}
