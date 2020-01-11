import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { LoginLogicComponent } from './login/login.component';
import { SignupLogicComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home-routing.module';
import { SearchModule } from '@home/search/search.module';
import { MyListModule } from './my-list/my-list.module';
import { ProfileModule } from '@home/profile/profile.module';



@NgModule({
  declarations: [HomeComponent, LoginLogicComponent, SignupLogicComponent],
  imports: [
    SharedModule,
    SearchModule,
    MyListModule,
    ProfileModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginLogicComponent,
    SignupLogicComponent,
    SearchModule,
    MyListModule,
    ProfileModule,
  ]
})
export class HomeModule { }
