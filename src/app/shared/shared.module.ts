import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';



@NgModule({
  declarations: [TableComponent, ConfirmComponent],
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
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000, MatSnackBarHorizontalPosition: 'center' },
    }
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class SharedModule { }
