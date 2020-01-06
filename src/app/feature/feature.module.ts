import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MyListComponent } from './main/my-list/my-list.component';
import { SharedModule } from '@shared/shared.module';
import { SearchModule } from './main/search/search.module';
import { HomeModule } from './home/home.module';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchModule,
    HomeModule,
    MainModule,
    FeatureRoutingModule
  ],
  exports: [
    LoginComponent, ProfileComponent, SearchModule,
    HomeModule,
    MainModule,
  ]
})
export class FeatureModule { }
