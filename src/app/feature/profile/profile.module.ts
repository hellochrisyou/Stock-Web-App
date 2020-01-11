import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '@shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MaterialModule } from '@shared/module/material.module';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileComponent,
    EditProfileComponent,
    ViewProfileComponent
  ]
})
export class ProfileModule { }
