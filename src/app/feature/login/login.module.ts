import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogicComponent } from './logic/logic.component';
import { PresentationComponent } from './presentation/presentation.component';



@NgModule({
  declarations: [LogicComponent, PresentationComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
