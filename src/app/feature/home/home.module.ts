import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { LoginLogicComponent } from './login/logic/login-logic.component';
import { SignupLogicComponent } from './signup/logic/signup-logic.component';
import { SignupPresentationComponent } from './signup/presentation/signup-presentation.component';
import { LoginPresentationComponent } from './login/presentation/login-presentation.component';



@NgModule({
  declarations: [HomeComponent, LoginLogicComponent, LoginPresentationComponent, SignupLogicComponent, SignupPresentationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    HomeComponent, LoginLogicComponent, LoginPresentationComponent, SignupLogicComponent, SignupPresentationComponent
  ]
})
export class HomeModule { }
