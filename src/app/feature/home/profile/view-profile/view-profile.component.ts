import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, Validators } from '@angular/forms';
import { CREATE_PROFILE_FG } from '../profile.config';
import { ValidatorName } from '@shared/validator/validators/name.validator';
import { ValidateUrl } from '@shared/validator/validators/url.validator';
import { MAT_DATEPICKER_VALIDATORS } from '@angular/material';

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
