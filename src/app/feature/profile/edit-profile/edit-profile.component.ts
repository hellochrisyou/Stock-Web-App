import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent extends CreateBaseForm implements OnInit, OnDestroy {

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected auth: AuthService,
  ) {
    super(fb, changeDetectorRef);
    this.formName = 'editProfileForm';
  }

  ngOnInit() {
  }

}
