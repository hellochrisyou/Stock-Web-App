import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SearchModule } from './search/search.module';
import { MyListComponent } from './my-list/my-list.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [MyListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchModule,
    MainRoutingModule
  ],
  exports: [
    SearchModule,
    MyListComponent
  ]
})
export class MainModule { }
