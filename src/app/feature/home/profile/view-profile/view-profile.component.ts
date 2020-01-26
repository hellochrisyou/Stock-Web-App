import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder } from '@angular/forms';
import { CREATE_PROFILE_FG } from '../profile.config';

@Component({
  selector: 'view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent extends CreateBaseForm implements OnInit, OnDestroy {

  minDate = new Date();
  maxDate = new Date();

  constructor(
    protected fbProfile: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    public auth: AuthService,
  ) {
    super(fbProfile, changeDetectorRef);
    this.formName = 'editProfileForm';

  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = CREATE_PROFILE_FG(this.fbProfile);

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    this.minDate = new Date(year, month, day);
    this.maxDate = new Date(year + 100, month, day);

  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
