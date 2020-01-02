import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material.module';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule { }
