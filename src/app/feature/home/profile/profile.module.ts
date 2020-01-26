import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile-logic/profile-logic.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';


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
