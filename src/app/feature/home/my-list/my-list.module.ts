import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyListRoutingModule } from './my-list-routing.module';
import { MyListComponent } from './my-list.component';
import { SharedModule } from '@shared/shared.module';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [MyListComponent, UpdateComponent],
  imports: [
    SharedModule,
    MyListRoutingModule
  ],
  exports: [
    MyListComponent
  ]
})
export class MyListModule { }
