import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'firebase';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { CreateBaseForm } from '@shared/base/base-form';
import { Validators, FormBuilder } from '@angular/forms';
import { URLVALIDATOR, ALPHABETVALIDATOR } from '@shared/validator/error-validator/validators';
import { TmpUser } from '@shared/interface/models';
declare var $: any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  thisUser: User;
  
  constructor(
    public auth: AuthService,
  ) {
   }

  public ngOnInit(): void {
  }
}
