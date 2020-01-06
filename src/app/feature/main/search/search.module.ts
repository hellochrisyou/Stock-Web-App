import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SearchLogicComponent } from './logic/search-logic.component';
import { SearchPresentationComponent } from './presentation/search-presentation.component';



@NgModule({
  declarations: [SearchLogicComponent, SearchPresentationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchLogicComponent,
    SearchPresentationComponent
  ]
})
export class SearchModule { }
