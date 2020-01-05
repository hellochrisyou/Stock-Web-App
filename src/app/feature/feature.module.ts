import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MyListComponent } from './my-list/my-list.component';
import { SharedModule } from '@shared/shared.module';
import { SearchModule } from './search/search.module';


@NgModule({
  declarations: [LoginComponent, ProfileComponent, MyListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchModule,
    FeatureRoutingModule
  ],
  exports: [
    LoginComponent, ProfileComponent, MyListComponent, SearchModule, SharedModule
  ]
})
export class FeatureModule { }
