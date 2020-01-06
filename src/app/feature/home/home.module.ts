import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { LoginLogicComponent } from './login/logic/login-logic.component';
import { SignupLogicComponent } from './signup/logic/signup-logic.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent, LoginLogicComponent, SignupLogicComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent, LoginLogicComponent, SignupLogicComponent
  ]
})
export class HomeModule { }
