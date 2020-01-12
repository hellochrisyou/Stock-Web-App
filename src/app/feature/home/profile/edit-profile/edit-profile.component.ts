import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CREATE_PROFILE_FG } from '@home/profile/profile.config';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent extends CreateBaseForm implements OnInit, OnDestroy {

  minDate = new Date();
  maxDate = new Date();

  public displayName() {
    return this.formGroup.get('displayNameCtrl');
  }

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected auth: AuthService,
  ) {
    super(fb, changeDetectorRef);
    this.formName = 'editProfileForm';
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

  submit(): void {

  }
}
