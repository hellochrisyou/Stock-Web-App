import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [TableComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TableComponent,
  ]
})
export class SharedModule { }
