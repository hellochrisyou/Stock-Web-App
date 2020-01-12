import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { TableComponent } from './component/table/table.component';
import { ChartComponent } from './dialog/chart/chart.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { MaterialModule } from './module/material.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [TableComponent, ConfirmComponent, ChartComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TableComponent,
    ChartsModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000, MatSnackBarHorizontalPosition: 'center' },
    }
  ],
  entryComponents: [
    ConfirmComponent,
    ChartComponent
  ]
})
export class SharedModule { }
