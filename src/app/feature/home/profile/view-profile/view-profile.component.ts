import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';

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
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    public auth: AuthService,
  ) {
    super(fb, changeDetectorRef);
  }

  public ngOnInit(): void {
    super.ngOnInit();

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    this.minDate = new Date(year, month, day);
    this.maxDate = new Date(year + 100, month, day);

    this.formGroup = CREATE_PROFILE_FG(this.fb);
  }
  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public submit(): void {

  }
}
