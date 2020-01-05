import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartSearchComponent } from './smart/smart-search.component';
import { DumbSearchComponent } from './dumb/dumb-search.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [SmartSearchComponent, DumbSearchComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SmartSearchComponent,
    DumbSearchComponent
  ]
})
export class SearchModule { }
